import { Body, Controller, Get, Post } from '@nestjs/common';
import { SignUpDTO } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('create-user')
  public async signUp(@Body() body: SignUpDTO) {
    try {
      return await this.authService.signUp(body);
    } catch (error) {
      console.log(error);
    }
  }

  @Get('get-all')
  public async getall() {
    try {
      return await this.authService.getAll();
    } catch (error) {
      console.log(error);
    }
  }
}
