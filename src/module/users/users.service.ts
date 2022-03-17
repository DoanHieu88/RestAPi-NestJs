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

  public async updateUser(id: string, body: CreateUserDTO) {
    const userFind = await this.userRepository.findOne(id);
    if (!userFind) {
      throw new Error("Can't find user");
    } else {
      const userUpdate = await this.userRepository.save({
        ...userFind,
        ...body,
      });
      return userUpdate;
    }
  }

  public async deleteUser(id: string) {
    const userFind = await this.userRepository.findOneOrFail(id);
    if (!userFind) {
      throw new Error('can not find user');
    } else {
      return await this.userRepository.remove(userFind);
    }
  }

  public async getUserById(id: string) {
    const userFind = await this.userRepository.findOneOrFail(id);
    if (!userFind) {
      throw new Error('can not find user');
    } else {
      return await this.userRepository.findOne(userFind);
    }
  }
}
