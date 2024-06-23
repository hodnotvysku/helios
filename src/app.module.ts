import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { SchoolsModule } from './schools/schools.module';

@Module({
  imports: [PrismaModule, SchoolsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
