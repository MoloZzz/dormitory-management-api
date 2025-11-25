import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { StudentEntity } from 'src/common/entities/student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(StudentEntity)
    private readonly studentsRepository: Repository<StudentEntity>,
  ) {}

  async getAll(filters?: { fullName?: string }): Promise<StudentEntity[]> {
    const query = this.studentsRepository.createQueryBuilder('student');

    if (filters?.fullName) {
      query.where('student.fullName ILIKE :fullName', {
        fullName: `%${filters.fullName}%`,
      });
    }

    return query.getMany();
  }

  async getById(id: string): Promise<StudentEntity> {
    const student = await this.studentsRepository.findOneBy({ id });
    if (!student)
      throw new NotFoundException(`Student with id ${id} not found`);
    return student;
  }

  async create(dto: CreateStudentDto): Promise<StudentEntity> {
    const student = this.studentsRepository.create(dto);
    return this.studentsRepository.save(student);
  }

  async update(id: string, dto: UpdateStudentDto): Promise<StudentEntity> {
    const student = await this.getById(id);
    Object.assign(student, dto);
    return this.studentsRepository.save(student);
  }

  async delete(id: string): Promise<void> {
    const result = await this.studentsRepository.delete(id);
    if (result.affected === 0)
      throw new NotFoundException(`Student with id ${id} not found`);
  }
}
