import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum Status {
  Active = 'Active',
  Delete = 'Delete',
}

export abstract class AbstractEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdOnDate: Date;

  @Column({ nullable: true, type: 'uuid' })
  createdByUserId: string;

  @UpdateDateColumn({ select: true })
  lastModifiedOnDate: Date;

  @Column({ nullable: true, type: 'uuid', select: true })
  lastModifiedByUserId: string;

  @Column({ type: 'enum', enum: Status, default: Status.Active })
  status: Status;
}
