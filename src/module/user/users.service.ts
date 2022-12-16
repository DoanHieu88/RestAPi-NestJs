import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Status } from 'src/common/abstract/abstract.entity';
import { CustomerRepository } from 'src/repository/customer.repository';
import { UserRepository } from 'src/repository/users.repository';
import { AuthService } from '../auth/auth.service';
import { UpdateUserDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(
    private customerRepository: CustomerRepository,
    private userRepository: UserRepository,
  ) {}

  public async getAllCustomer() {
    try {
      return this.customerRepository.find({ where: { status: Status.Active } });
    } catch (error) {
      console.log('err', error);
      throw new BadRequestException('GET_USER_FAILED');
    }
  }

  public async getUserById(id: string) {
    try {
      return this.userRepository.findOne({ where: { id } });
    } catch (error) {
      console.log('err', error);

      throw new UnauthorizedException();
    }
  }

  public async updateUserById(id: string, payload: UpdateUserDto) {
    const user = await this.userRepository.findOne(id);
    if (!user) throw new BadRequestException('USER_NOT_FOUND');
    const newUser = { ...user, ...payload };

    try {
      await this.userRepository.save({ ...newUser });
      return { messege: 'success' };
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
  }
}
