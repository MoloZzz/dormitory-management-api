import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('dormitories')
export class DormitoryEntity {
  @ApiProperty({ example: 'a1b2c3' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ example: 'Dormitory 5' })
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @ApiProperty({ example: 'Kyiv, Street 10' })
  @Column({ type: 'varchar', length: 500 })
  address: string;

  @ApiProperty({ example: 120, required: false })
  @Column({ type: 'int', nullable: true })
  roomCount?: number;

  @ApiProperty({ example: 0.75, required: false })
  @Column({ type: 'float', nullable: true })
  occupancyRate?: number;
}
