import { Test, TestingModule } from '@nestjs/testing';
import { EmailService } from './email.service';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Email } from './entities/email.entity';
import {CreateEmailDto} from "./dto/create-email.dto";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(
  () => ({
    findOne: jest.fn(),
    findAll: jest.fn(),
    update: jest.fn(),
    save: jest.fn(),
  }),
);
export type MockType<T> = {
  [P in keyof T]: jest.Mock<{}>;
};

describe('EmailService', () => {
  let service: EmailService;
  let mailRepositoryMock: MockType<Repository<Email>>;
  let mailTypeRepositoryMock: MockType<Repository<Email>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmailService,
        {
          provide: getRepositoryToken(Email),
          useFactory: repositoryMockFactory,
        },
        {
          provide: getRepositoryToken(Email),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    mailRepositoryMock = module.get(getRepositoryToken(Email));
    mailTypeRepositoryMock = module.get(getRepositoryToken(Email));
    service = module.get<EmailService>(EmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
