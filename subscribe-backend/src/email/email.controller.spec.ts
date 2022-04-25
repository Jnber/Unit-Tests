import { Test, TestingModule } from '@nestjs/testing';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { ModuleMocker } from 'jest-mock';

const moduleMocker = new ModuleMocker(global);

describe('EmailController', () => {
  let controller: EmailController;
  let service: EmailService;
  const mockEmailService = {
    create: jest.fn((dto) => {
      return {
        id: Date.now(),
        ...dto,
      };
    }),
    findAll: jest.fn(),
    update: jest.fn((id, dto) => ({
      ...dto,
    })),
  };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmailController],
      providers: [EmailService],
    })
      .overrideProvider(EmailService)
      .useValue(mockEmailService)
      .compile();

    controller = module.get<EmailController>(EmailController);
    service = module.get<EmailService>(EmailService);
  });

  // A unit test to check if the controller has been defined
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  //New describe block to test our add email function
  describe('add To Newsletter', () => {
    it('should add a new subscriber', () => {
      expect(controller.create({ email: 'test@test.test' })).toEqual({
        id: expect.any(Number),
        email: 'test@test.test',
      });
    });
    //test the service call with params
    it('should call service with params', async () => {
      await controller.create({ email: 'test@t.com' });
      expect(mockEmailService.create).toHaveBeenCalledWith({
        email: 'test@t.com',
      });
    });
  });

  //Test the findAll method
  describe('get subscribers', () => {
    //test the service call
    it('should call service once', async () => {
      await controller.findAll();
      expect(service.findAll).toHaveBeenCalledTimes(1);
    });
  });

  it('should update email', () => {
    const dto = {
      id: 1,
      email: 'test@t.t',
    };
    expect(controller.update('1', dto)).toEqual({
      id: 1,
      email: dto.email,
    });
  });
});
