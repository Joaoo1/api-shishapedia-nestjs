import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { KnexModule } from 'nestjs-knex';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { knexConfig } from './config/knex.config';

@Module({
  imports: [ConfigModule.forRoot(), KnexModule.forRoot(knexConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
