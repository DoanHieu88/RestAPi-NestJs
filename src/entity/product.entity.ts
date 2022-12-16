import { AbstractEntity } from 'src/common/abstract/abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Product extends AbstractEntity {
  @Column('varchar', { nullable: false })
  name: string;

  @Column('varchar', { nullable: false })
  title: string;

  @Column('varchar', { nullable: false })
  image: string;

  @Column('varchar', { nullable: false })
  length: string;
}
