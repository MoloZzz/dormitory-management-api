import { Module } from '@nestjs/common';
import { DormitoryService } from './dormitory.service';
import { DormitoryController } from './dormitory.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DormitoryEntity } from 'src/common/entities/dormitory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DormitoryEntity])],
  providers: [DormitoryService],
  controllers: [DormitoryController],
})
export class DormitoryModule {}
