import { Body, Controller, Get, Post } from '@nestjs/common';
import { Login, SignUpDTO } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register-admin')
  public async signUpAdmin(@Body() body: SignUpDTO) {
    try {
      return await this.authService.signUpAdmin(body);
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

  @Post('login-admin')
  public async loginAdmin(@Body() payload: Login) {
    try {
      return await this.authService.loginAdmin(payload);
    } catch (error) {
      console.log(error);
    }
  }
}
