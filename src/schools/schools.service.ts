import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SchoolsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllSchools() {
    const schools = await this.prismaService.schools.findMany({
      include: { faculties: true },
    });
    return schools;
  }

  async getSchool(schoolId: number) {
    const schools = await this.prismaService.schools.findMany({
      include: { faculties: true },
      where: { id: schoolId },
    });
    return schools;
  }

  async getFacultiesOfSchool(schoolId: number) {
    const faculties = await this.prismaService.faculties.findMany({
      where: { id: schoolId },
    });
    return faculties;
  }

  async searchSchools(searchCriteria: SearchCriteriaDTO) {
    // TODO
    return [];
  }
}
