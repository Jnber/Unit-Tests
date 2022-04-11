import { Test, TestingModule } from '@nestjs/testing';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { Email } from './entities/email.entity';
import { ModuleMocker } from 'jest-mock';

const moduleMocker = new ModuleMocker(global);

describe('EmailController', () => {
  let controller: EmailController;
  let service: EmailService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmailController],
      providers: [
        {
          provide: EmailService,
          useValue: {
            create: jest.fn(() => true),
            findAll: jest.fn(() => true),
          },
        },
      ],
    }).compile();

    controller = module.get<EmailController>(EmailController);
    service = module.get<EmailService>(EmailService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  //new describe block to test our add email function
  describe('add To Newsletter', () => {
    //test the service call with params
    it('should call service with params', async () => {
      await controller.create({ email: 'test@t.com' });
      expect(service.create).toHaveBeenCalledWith({ email: 'test@t.com' });
    });
  });
  describe('get subscribers', () => {
    //test the service call
    it('should call service once', async () => {
      await controller.findAll();
      expect(service.findAll).toHaveBeenCalledTimes(1);
    });
  });
});
