import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsersService } from './users.service';
import { Request } from 'express';
import { AuthService } from '../auth/auth.service';
import { Auth } from '../auth/auth.decorator';
import { AuthType } from 'src/common/enum';

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

  @Auth(AuthType.Admin)
  @Get('get-info-admin-by-token')
  public async getInforAdminByToken(@Req() req: Request) {
    return this.authService.decode(req.headers.authorization);
  }
}
