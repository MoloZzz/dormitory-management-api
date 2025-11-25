import {
  IsNotEmpty,
  IsString,
  IsDateString,
  IsInt,
  Min,
  Max,
} from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsNotEmpty()
  @IsDateString()
  dateOfBirth: string;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Max(6)
  course: number;
}
