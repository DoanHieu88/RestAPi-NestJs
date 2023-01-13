import { AbstractEntity } from "src/common/abstract/abstract.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class ExportProduct extends AbstractEntity{
    @Column('varchar', {nullable: false})
    idProduct: string

    @Column('varchar',{nullable: false})
    code: string

    @Column('int')
    amount: number
}