import { Injectable } from '@nestjs/common';
import { Status } from 'src/common/abstract/abstract.entity';
import { ProductsRepository } from 'src/repository/products.repository';

@Injectable()
export class ProductsService {
  constructor(private productRepository: ProductsRepository) {}

  public async getAllProduct() {
    return await this.productRepository.find({
      where: { status: Status.Active },
    });
  }
}
