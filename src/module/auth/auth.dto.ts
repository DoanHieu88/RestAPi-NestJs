import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SignUpDTO {
  @ApiProperty({ required: true, description: 'firstName' })
  firstName: string;

  @ApiProperty({ required: true, description: 'lastName' })
  lastName: string;

  @ApiProperty({ required: true, description: 'email' })
  email: string;

  @ApiProperty({ required: false, description: 'address' })
  address: string;

  @ApiProperty({ required: false, description: 'phone' })
  phone: string;

  @ApiProperty({ required: false, description: 'company' })
  company: string;

  @ApiProperty({ required: true, description: 'password' })
  password: string;

  @ApiProperty({ required: true, description: 'comfrimPassword' })
  comfrimPassword: string;
}
