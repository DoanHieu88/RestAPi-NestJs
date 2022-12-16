import { Controller, UseGuards, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthType } from 'src/common/enum';
import { Auth } from '../auth/auth.decorator';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ProductsService } from './products.service';

@Controller('products')
@ApiTags('products')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get('get-all-product')
  public async getAllProduct() {
    return this.productsService.getAllProduct();
  }
}
