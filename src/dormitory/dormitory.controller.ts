import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DormitoryService } from './dormitory.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateDormitoryDto } from './dto/create-dormitory.dto';
import { UpdateDormitoryDto } from './dto/update-dormitory.dto';
import { IdParamDto } from 'src/common/dtos/id-param.dto';

@ApiTags('Dormitories')
@Controller('/api/dormitories')
export class DormitoryController {
  constructor(private readonly dormitoryService: DormitoryService) {}

  @Get()
  async getAll() {
    return this.dormitoryService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') param: IdParamDto) {
    return this.dormitoryService.getById(param.id);
  }

  @Post()
  async create(@Body() dto: CreateDormitoryDto) {
    return this.dormitoryService.create(dto);
  }

  @Put(':id')
  async update(
    @Param('id') param: IdParamDto,
    @Body() dto: UpdateDormitoryDto,
  ) {
    return this.dormitoryService.update(param.id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') param: IdParamDto) {
    return this.dormitoryService.delete(param.id);
  }
}
