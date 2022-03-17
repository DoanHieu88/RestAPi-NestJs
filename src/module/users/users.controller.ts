import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDTO } from './users.dto';
import { UserService } from './users.service';

@ApiTags('User')
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

  @Put('update/:id')
  public async updateUser(
    @Param('id') id: string,
    @Body() body: CreateUserDTO,
  ) {
    try {
      return await this.userService.updateUser(id, body);
    } catch (error) {
      console.log(error);
    }
  }

  @Delete('delete/:id')
  public async deleteUser(@Param('id') id: string) {
    try {
      return await this.userService.deleteUser(id);
    } catch (err) {
      console.log(err);
    }
  }

  @Get('get/:id')
  public async getUserByID(@Param('id') id: string) {
    return await this.userService.getUserById(id);
  }
}
