import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/repository/users.repository';
import { CreateUserDTO } from './users.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async getUser() {
    const allUser = await this.userRepository.find(); //SELECT * FROM USER
    return allUser;
  }

  public async createUser(body: CreateUserDTO) {
    try {
      const id = Date.now().toString();
      const newUser = await this.userRepository.save({
        id,
        ...body,
      });

      return newUser;
    } catch (error) {
      throw new Error(error);
    }
  }
}
