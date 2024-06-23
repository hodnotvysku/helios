import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { SchoolsService } from './schools.service';

@Controller('schools')
export class SchoolsController {
  constructor(private readonly schoolsService: SchoolsService) {}

  @Get()
  getAllSchools() {
    return this.schoolsService.getAllSchools();
  }

  @Get(':id')
  getSchool(@Param() params: any) {
    return this.schoolsService.getSchool(parseInt(params.id));
  }

  @Post('search')
  searchSchools(@Body() searchCriteria: SearchCriteriaDTO) {
    return this.schoolsService.searchSchools(searchCriteria);
  }

  @Get(':id/faculties')
  getFacultiesOfSchool(@Param() params: any) {
    return this.schoolsService.getFacultiesOfSchool(parseInt(params.id));
  }
}
