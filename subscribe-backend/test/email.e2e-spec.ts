import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { EmailModule } from '../src/email/email.module';
import { EmailService } from '../src/email/email.service';
import * as request from 'supertest';

describe('Emails', () => {
  let app: INestApplication;
  let emailService: { findAll: () => ['test'] };

  beforeAll(async () => {
    const refModule = await Test.createTestingModule({
      imports: [EmailModule],
    })
      .overrideProvider(EmailService)
      .useValue(emailService)
      .compile();

    app = refModule.createNestApplication();
    await app.init();
  });
  it(`/GET emails`, () => {
    return request(app.getHttpServer()).get('/email').expect(200).expect({
      data: emailService.findAll(),
    });
  });
  afterAll(async () => {
    await app.close();
  });
});
