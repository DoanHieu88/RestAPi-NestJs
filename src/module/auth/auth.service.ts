import {
  BadGatewayException,
  Injectable,
  BadRequestException,
} from '@nestjs/common';
import {
  CONFIRM_PASSWORD_NOT_MATCH,
  EMAIL_IS_EXIST,
} from 'src/common/constant/exception-constant';
import { hashPassword } from 'src/common/until/funtion-until';
import { AuthRepository } from 'src/repository/auth.repository';
import { UserRepository } from 'src/repository/users.repository';
import { SignUpDTO } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(private userRepository: UserRepository) {}
  public async signUp(payload: SignUpDTO) {
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
    };

    return await this.userRepository.save({ ...audit, ...payload });
  }

  public async getAll() {
    return await this.userRepository.find();
  }
}
