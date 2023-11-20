import joi from 'joi';
import { CreateMessageBody } from '@/repositories/messages-repository';

export const messageSchema = joi.object<CreateMessageBody>({
  text: joi.string().required(),
});
