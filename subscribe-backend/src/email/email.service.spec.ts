import { Test, TestingModule } from '@nestjs/testing';
import { EmailService } from './email.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Email } from './entities/email.entity';

describe('EmailService', () => {
  let service: EmailService;
  const mockEmailRepository = {
    save: jest.fn((dto) => 'user successfully added'),
    findAll: jest.fn(() =>
      Promise.resolve({ id: Date.now(), email: 'test@test.t' }),
    ),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EmailService,
        {
          provide: getRepositoryToken(Email),
          useValue: mockEmailRepository,
        },
      ],
    }).compile();

    service = module.get<EmailService>(EmailService);
  });

  it('should create a subscriber and return it', async () => {
    expect(await service.create({ email: 'test@test.t' })).toEqual(
      'user successfully added',
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
