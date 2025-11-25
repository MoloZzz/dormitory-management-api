import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsEmail, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty()
  @IsDefined()
  @IsString()
  login: string;

  @ApiProperty()
  @IsDefined()
  @IsString()
  @MinLength(6)
  password: string;
}
