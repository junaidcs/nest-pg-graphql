import { string, number, object } from '@hapi/joi';

export const createAuthorSchema = object({
  age: number().required(),
  name: string().required(),
  rating: number().optional(),
});
