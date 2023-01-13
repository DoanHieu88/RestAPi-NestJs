import { AbstractEntity } from 'src/common/abstract/abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Product extends AbstractEntity {
  @Column('varchar', {nullable: false})
  code: string

  @Column('varchar', { nullable: false })
  name: string;

  @Column('varchar', { nullable: true })
  image: string;

  @Column('double', { nullable: false })
  price: number;

  @Column('double', { nullable: false })
  importPrice: number;

  @Column('date', { nullable: false })
  importDate: Date;

  @Column('double', {nullable: false, default: 0})
  amount: number

  @Column('varchar', {nullable: true})
  note: string
}
