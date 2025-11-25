import { Test, TestingModule } from '@nestjs/testing';
import { DormitoryService } from './dormitory.service';

describe('DormitoryService', () => {
  let service: DormitoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DormitoryService],
    }).compile();

    service = module.get<DormitoryService>(DormitoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
