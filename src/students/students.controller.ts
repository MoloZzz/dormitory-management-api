import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { IdParamDto } from 'src/common/dtos/id-param.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { CreateStudentDto } from './dto/create-student.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Students API')
@Controller('/api/students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  getAll(@Query() filters: any) {
    return this.studentsService.getAll(filters);
  }

  @Get(':id')
  getById(@Param('id') param: IdParamDto) {
    return this.studentsService.getById(param.id);
  }

  @Post()
  create(@Body() dto: CreateStudentDto) {
    return this.studentsService.create(dto);
  }

  @Put(':id')
  update(@Param('id') param: IdParamDto, @Body() dto: UpdateStudentDto) {
    return this.studentsService.update(param.id, dto);
  }

  @Delete(':id')
  delete(@Param('id') param: IdParamDto) {
    return this.studentsService.delete(param.id);
  }
}
