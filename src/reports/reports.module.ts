import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DormitoryEntity } from 'src/common/entities/dormitory.entity';
import { StudentEntity } from 'src/common/entities/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DormitoryEntity, StudentEntity])],
  providers: [ReportsService],
  controllers: [ReportsController]
})
export class ReportsModule {}
