import {
  Controller,
  Get,
  Req,
  UseGuards,
  UnauthorizedException,
  Put,
  Body,
  BadRequestException,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsersService } from './users.service';
import { Request } from 'express';
import { AuthService } from '../auth/auth.service';
import { Auth } from '../auth/auth.decorator';
import { AuthType } from 'src/common/enum';
import { UpdateUserDto } from './users.dto';

@Controller('user')
@ApiTags('user')
@UseGuards(JwtAuthGuard)
@Auth(AuthType.Admin)
@ApiBearerAuth()
export class UsersController {
  constructor(
    private userService: UsersService,
    private authService: AuthService,
  ) {}

  @Get('get-info-admin-by-token')
  public async getInforAdminByToken(@Req() req: Request) {
    const user = await this.authService.decode(req.headers.authorization);
    if (!user) throw new UnauthorizedException();
    return this.userService.getUserById(user.id);
  }

  @Get('get-all-customer')
  public async getAllCustomer() {
    return await this.userService.getAllCustomer();
  }

  @Put('update-infor-user')
  public async updateInforUser(
    @Body() payload: UpdateUserDto,
    @Req() req: Request,
  ) {
    const user = await this.authService.decode(req.headers.authorization);
    if (!user) throw new BadRequestException('USER_NOT_FOUND');
    return this.userService.updateUserById(user.id, payload);
  }
}
