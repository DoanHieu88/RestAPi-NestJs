import { AbstractEntity } from "src/common/abstract/abstract.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class ImportProduct extends AbstractEntity{
    @Column({type: "varchar", nullable:false})
    idProduct: string

    @Column('varchar',{nullable: false})
    code: string

    @Column('varchar', {nullable:false})
    name: string

    @Column('int', {nullable: false})
    numberOfImport: number

    @Column('float',{nullable: false})
    unitPrice: number

    @Column('float',{nullable: false})
    price: number

    @Column('double')
    totalImportPrice: number

}