import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DormitoryEntity } from './../common/entities/dormitory.entity';
import { Repository } from 'typeorm';
import { CreateDormitoryDto } from './dto/create-dormitory.dto';
import { UpdateDormitoryDto } from './dto/update-dormitory.dto';

@Injectable()
export class DormitoryService {
  constructor(
    @InjectRepository(DormitoryEntity)
    private readonly dormitoryRepository: Repository<DormitoryEntity>,
  ) {}

  /**
   * Deletes a dormitory by its ID.
   * @param id - The ID of the dormitory to delete.
   * @returns A promise that resolves when the dormitory is deleted.
   */
  async delete(id: string): Promise<void> {
    await this.dormitoryRepository.delete(id);
  }

  /**
   * Updates a dormitory by its ID.
   * @param id - The ID of the dormitory to update.
   * @param dto - The data transfer object containing updated dormitory data.
   * @returns A promise that resolves to the updated DormitoryEntity.
   */
  async update(
    id: string,
    dto: UpdateDormitoryDto,
  ): Promise<DormitoryEntity | null> {
    await this.dormitoryRepository.update(id, dto);
    return this.dormitoryRepository.findOne({ where: { id } });
  }

  /**
   * Creates a new dormitory.
   * @param dto - The data transfer object containing dormitory data.
   * @returns A promise that resolves to the created DormitoryEntity.
   */
  async create(dto: CreateDormitoryDto): Promise<DormitoryEntity> {
    const dormitory = this.dormitoryRepository.create(dto);
    return await this.dormitoryRepository.save(dormitory);
  }

  /**
   * Retrieves a dormitory by its ID.
   * @param id - The ID of the dormitory to retrieve.
   * @returns A promise that resolves to the DormitoryEntity or null if not found.
   */
  async getById(id: string): Promise<DormitoryEntity | null> {
    return await this.dormitoryRepository.findOne({ where: { id } });
  }

  /**
   * Retrieves all dormitories.
   * @throws Error indicating the method is not implemented.
   */
  async getAll(): Promise<DormitoryEntity[]> {
    return await this.dormitoryRepository.find();
  }
}
