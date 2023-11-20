import httpStatus from 'http-status';
import supertest from 'supertest';
import app from '../src/app';
import prisma from '../src/database';
import { createMessage } from './factories/message-factory';

const api = supertest(app);

describe('Integration Tests', () => {
  beforeEach(async () => {
    await prisma.message.deleteMany();
  });

  afterAll(async () => {
    await prisma.message.deleteMany();
    await prisma.$disconnect();
  });

  it("should return 200 and i'm ok", async () => {
    const { text, status } = await api.get('/health');
    expect(status).toBe(httpStatus.OK);
    expect(text).toBe("I'm Ok!");
  });

  it('should return all messages', async () => {
    //Arrange
    await createMessage();
    await createMessage();

    //Act
    const { body, status } = await api.get('/messages');

    //Assert

    expect(status).toBe(httpStatus.OK);
    expect(body).toHaveLength(2);
    expect(body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          text: expect.any(String),
        }),
      ]),
    );
  });
});
