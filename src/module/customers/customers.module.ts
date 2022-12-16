import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerRepository } from 'src/repository/customer.repository';
import { AuthModule } from '../auth/auth.module';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerRepository]), AuthModule],
  controllers: [CustomersController],
  providers: [CustomersService],
  exports: [CustomersService],
})
export class CustomersModule {}
