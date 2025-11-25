import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsEnum, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty()
  @IsString()
  @IsDefined()
  login: string;

  @ApiProperty()
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty()
  @IsString()
  fullName: string;

  @ApiProperty({ enum: ['student', 'worker'] })
  @IsString()
  @IsDefined()
  @IsEnum(['student', 'worker'])
  role: 'student' | 'worker';
}
