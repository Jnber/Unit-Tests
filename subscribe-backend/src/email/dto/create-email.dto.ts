import { Column } from 'typeorm';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateEmailDto {
  @Column()
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
