import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormConfig';
import { UserModule } from './module/users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot(config), UserModule],
})
export class AppModule {}
