import { Controller, Get } from '@nestjs/common';
import { ReportsService, OccupancyStats } from './reports.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Reports API')
@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('occupancy')
  async getOccupancy(): Promise<OccupancyStats[]> {
    return this.reportsService.getOccupancyStats();
  }
}
