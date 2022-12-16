import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { User } from 'src/entity/users.entity';

export class UpdateUserDto {
  @ApiProperty({ required: false, description: 'first Name' })
  @IsString()
  @IsOptional()
  firstName: string;

  @ApiProperty({ required: false, description: 'last Name' })
  @IsString()
  @IsOptional()
  lastName: string;

  @ApiProperty({ required: false, description: 'address' })
  @IsString()
  @IsOptional()
  address: string;

  @ApiProperty({ required: false, description: 'phone' })
  @IsString()
  @IsOptional()
  phone: string;

  @ApiProperty({ required: false, description: 'company' })
  @IsString()
  @IsOptional()
  company: string;
}
