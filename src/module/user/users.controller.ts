import { BadRequestException, Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsersService } from './users.service';
import { Request } from 'express';
import { AuthService } from '../auth/auth.service';
import { Auth } from '../auth/auth.decorator';
import { AuthType } from 'src/common/enum';
import { changeInforUserDto, ForgotPasswordDto } from './users.dto';
import { USER_NOT_FOUND } from 'src/common/constant/exception-constant';

@Controller('user')
@ApiTags('user')
export class UsersController {
  constructor(
    private userService: UsersService,
    private authService: AuthService,
  ) {}

  @Auth(AuthType.Admin)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('get-info-admin-by-token')
  public async getInforAdminByToken(@Req() req: Request) {
    return this.authService.decode(req.headers.authorization);
  }

  @Post('forgot-password')
  public async forgotPassword(@Body()payload: ForgotPasswordDto){
    return await this.userService.forgotPassword(payload)
  }

  @Auth(AuthType.Admin)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Post('change-info-user')
  public  async changeInforUser(@Req()req:Request, payload:changeInforUserDto){
    const user = this.authService.decode(req.headers.authorization)
    if(!user) throw new BadRequestException(USER_NOT_FOUND)
    return await this.userService.changeInforUser(user.id,payload)
  }

}
