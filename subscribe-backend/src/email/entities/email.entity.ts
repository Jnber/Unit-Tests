import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsEmail } from 'class-validator';

@Entity({ name: 'subscribers' })
export class Email {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsEmail()
  email: string;

  @CreateDateColumn({
    type: Date,
    name: 'created_at',
  })
  createdAt: Date;
}
