import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DormitoryEntity } from './../common/entities/dormitory.entity';
import { Repository } from 'typeorm';
import { CreateDormitoryDto } from './dto/create-dormitory.dto';
import { UpdateDormitoryDto } from './dto/update-dormitory.dto';

@Injectable()
export class DormitoryService {
  delete(id: string) {
    throw new Error('Method not implemented.');
  }
  update(id: string, dto: UpdateDormitoryDto) {
    throw new Error('Method not implemented.');
  }
  create(dto: CreateDormitoryDto) {
    throw new Error('Method not implemented.');
  }
  getById(id: string) {
    throw new Error('Method not implemented.');
  }
  getAll() {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(DormitoryEntity)
    private readonly dormitoryRepository: Repository<DormitoryEntity>,
  ) {}
}
