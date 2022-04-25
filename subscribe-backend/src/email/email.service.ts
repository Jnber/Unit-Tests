import { Injectable } from '@nestjs/common';
import { CreateEmailDto } from './dto/create-email.dto';
import { Repository } from 'typeorm';
import { Email } from './entities/email.entity';
import { UpdateEmailDto } from './dto/update-email.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EmailService {
  constructor(
    @InjectRepository(Email)
    private repository: Repository<Email>,
  ) {}
  async create(createEmailDto: CreateEmailDto) {
    const entity = await this.repository.save(createEmailDto);
    console.log(entity);
    return 'user successfully added';
  }

  findAll(): Promise<Email[]> {
    return this.repository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} email`;
  }

  update(id: number, updateEmailDto: UpdateEmailDto) {
    return `This action updates a #${id} email`;
  }

  remove(id: number) {
    return `This action removes a #${id} email`;
  }
}
