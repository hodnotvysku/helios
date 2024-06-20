import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) {}

  getHello() {
    const test = this.prismaService.test.create({
      data: {
        name: 'test',
        email: 'sukam@rit.com',
        age: 11,
      },
    });
    return test;
  }
}
