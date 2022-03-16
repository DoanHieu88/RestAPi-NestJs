import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO } from './users.dto';
import { UserService } from './users.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('get')
  public async getUser() {
    return await this.userService.getUser();
  }

  @Post('creat')
  public async createUser(@Body() body: CreateUserDTO) {
    return await this.userService.createUser(body);
  }
}
