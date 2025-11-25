import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateDormitoryDto {
  @ApiProperty({ example: 'Dorm 1' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Kyiv, Street 1' })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({ example: 120, required: false })
  @IsOptional()
  @IsInt()
  @Min(0)
  roomCount?: number;

  @ApiProperty({ example: 0.75, required: false })
  @IsOptional()
  @Min(0)
  @Max(1)
  occupancyRate?: number;
}
