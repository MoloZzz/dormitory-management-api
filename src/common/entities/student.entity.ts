import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('students')
export class StudentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fullName: string;

  @Column({ type: 'date' })
  dateOfBirth: string;

  @Column()
  course: number;
}
