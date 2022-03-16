import { ApiProperty } from '@nestjs/swagger';

export class UserDTO {
  @ApiProperty({ description: 'name' })
  name: string;

  @ApiProperty({ description: 'age' })
  age: string;

  @ApiProperty({ description: 'email' })
  email: string;

  @ApiProperty({ description: 'address' })
  address: string;
}

export class CreateUserDTO extends UserDTO {}

export class UpdateUserDTO extends UserDTO {}
