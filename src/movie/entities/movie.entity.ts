import { ApiHideProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ type: 'varchar', length: 128 })
    name: string;
  
    @Column({ type: 'varchar', length: 2048 })
    description: string;
  
    @Column({ type: 'date' })
    date: Date;

    @Column({ type: 'int', nullable: true })
    note?: number;
}
