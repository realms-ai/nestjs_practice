import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { setupApp } from './../src/setup-app';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let cookie
  let email

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    // setupApp(app)
    await app.init();

    email = 'test@test.com'
    cookie = null
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('handles a signup request', async () => {
    const res = await request(app.getHttpServer())
      .post('/signup')
      .send({
        email,
        password: 'test'
      })
      .expect(201)
    cookie = await res.get('Set-Cookie')
    
    const body = res.body
    expect(body.id).toBeDefined()
    return expect(body.email).toEqual(email)
  });

  it("after signup get the currently logged in user", async () => {
    const { body } = await request(app.getHttpServer())
    .get('/whoamI')
    .set('Cookie', cookie)
    .expect(200)


    return expect(body.email).toEqual(email)
  })
});
