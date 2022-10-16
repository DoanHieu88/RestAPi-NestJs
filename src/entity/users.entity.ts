import { AbstractEntity } from 'src/common/abstract/abstract.entity';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User extends AbstractEntity {
  @Column({ nullable: false, type: 'varchar' })
  firstName: string;

  @Column({ nullable: false, type: 'varchar' })
  lastName: string;

  @Column({ nullable: false, type: 'varchar' })
  email: string;

  @Column({ nullable: true, type: 'varchar' })
  address: string;

  @Column({ nullable: true, type: 'varchar' })
  phone: string;

  @Column({ nullable: true, type: 'varchar' })
  company: string;

  @Column({ nullable: false, type: 'varchar' })
  password: string;
}
