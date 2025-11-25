import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsString, IsUUID } from 'class-validator';

export class IdParamDto {
  @ApiProperty({})
  @IsDefined()
  @IsString()
  @IsUUID()
  id: string;
}
