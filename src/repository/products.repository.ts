import { Product } from 'src/entity/product.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Product)
export class ProductsRepository extends Repository<Product> {}
