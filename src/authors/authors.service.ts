import { Injectable } from '@nestjs/common';

import { Author } from './interfaces/author.interface';
import { CreateAuthorInput } from './inputs/create-author.input';
import { AuthorDTO } from './dto/author.dto';

@Injectable()
export class AuthorsService {
  private readonly authors: Author[] = [
    {
      age: 33,
      name: 'Author 1',
      rating: 4.5,
    },
    {
      age: 23,
      name: 'Box ready',
      rating: 3.9,
    },
  ];

  findAll(): Author[] {
    return this.authors;
  }

  create(payload: CreateAuthorInput): AuthorDTO {
    const author = {
      id: Math.random(),
      ...payload,
    };
    this.authors.push(author);
    return author;
  }
}
