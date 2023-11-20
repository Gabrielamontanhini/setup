import { Message } from '@prisma/client';
import prisma from '../database';

export type CreateMessageBody = Omit<Message, 'id'>;

export function findMany() {
  return prisma.message.findMany();
}
