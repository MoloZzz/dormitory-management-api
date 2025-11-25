import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { DormitoryEntity } from 'src/common/entities/dormitory.entity';
import { StudentEntity } from 'src/common/entities/student.entity';


export interface OccupancyStats {
  dormitoryId: string;
  dormitoryName: string;
  capacity: number;
  occupied: number;
  occupancyRate: number;
}

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(DormitoryEntity)
    private readonly dormitoriesRepository: Repository<DormitoryEntity>,
    @InjectRepository(StudentEntity)
    private readonly studentsRepository: Repository<StudentEntity>,
  ) {}

  async getOccupancyStats(): Promise<OccupancyStats[]> {
    const dormitories = await this.dormitoriesRepository.find();
    const students = await this.studentsRepository.find();

    return dormitories.map((dorm) => {
      const capacity = dorm.roomCount ? dorm.roomCount * 2 : 0;
      const occupied = students.filter((s) => (s as any).dormitoryId === dorm.id).length;

      const occupancyRate = capacity > 0 ? +(occupied / capacity).toFixed(2) : 0;

      return {
        dormitoryId: dorm.id,
        dormitoryName: dorm.name,
        capacity,
        occupied,
        occupancyRate,
      };
    });
  }
}
