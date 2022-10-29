import {
  BadGatewayException,
  Injectable,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import {
  CONFIRM_PASSWORD_NOT_MATCH,
  EMAIL_IS_EXIST,
  EMAIL_NOT_EXIST,
  PASSWORD_IS_INCORRECT,
  USER_NOT_FOUND,
} from 'src/common/constant/exception-constant';
import { AuthType } from 'src/common/enum';
import { hashPassword } from 'src/common/until/funtion-until';
import { AuthRepository } from 'src/repository/auth.repository';
import { UserRepository } from 'src/repository/users.repository';
import { Login, SignUpDTO } from './auth.dto';
import * as bcryptjs from 'bcryptjs';
import { User } from 'src/entity/users.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}
  public async signUpAdmin(payload: SignUpDTO) {
    const userExit = await this.userRepository.findOne({
      where: { email: payload.email },
    });
    if (userExit) {
      throw new BadRequestException(EMAIL_IS_EXIST);
    }
    if (payload.password !== payload.comfrimPassword) {
      throw new BadRequestException(CONFIRM_PASSWORD_NOT_MATCH);
    }
    payload.password = await hashPassword(payload.password);
    const audit = {
      lastModifiedOnDate: new Date(),
      roleType: AuthType.Admin,
    };
    return await this.userRepository.save({ ...audit, ...payload });
  }

  public async getAll() {
    return await this.userRepository.find();
  }

  public async loginAdmin(payload: Login) {
    try {
      const user = await this.userRepository.findOne({
        where: { email: payload.email },
      });
      if (!user) throw new UnauthorizedException(EMAIL_NOT_EXIST);

      const isMatch = await bcryptjs.compare(payload.password, user.password);
      if (!isMatch) throw new UnauthorizedException(PASSWORD_IS_INCORRECT);

      const audit = {
        lastLoginOnDate: new Date(),
      };

      const userInfor = await this.userRepository.findOne({
        where: { id: user.id },
      });
      if (!userInfor) throw new BadRequestException(USER_NOT_FOUND);
      await this.userRepository.save({ ...userInfor, ...audit });

      return this.encode(userInfor);
    } catch (error) {
      console.log(error);
    }
  }

  private encode(user: User) {
    const token = this.generateToken(user);

    return {
      id: user.id,
      email: user.email,
      roleType: user.roleType,
      token,
    };
  }

  private generateToken(user: User) {
    const payload = {
      email: user.email,
      id: user.id,
      role: user.roleType,
    };

    return this.jwtService.sign(payload, {
      expiresIn: process.env.JWT_EXPIRES_IN || 86400000,
    });
  }
}
