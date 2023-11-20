import { faker } from '@faker-js/faker';
import prisma from '../../src/database';

export async function createMessage(text?: string) {
  return prisma.message.create({
    data: {
      text: text || faker.lorem.text(),
    },
  });
}
