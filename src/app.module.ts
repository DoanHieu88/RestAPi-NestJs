import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormConfig';
import { AuthModule } from './module/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), AuthModule],
})
export class AppModule {}
