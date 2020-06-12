import { Injectable } from '@nestjs/common';

import { Author } from './interfaces/author.interface';
import { CreateAuthorInput } from './inputs/create-author.input';
import { AuthorDTO } from './dto/author.dto';

@Injectable()
export class AuthorsService {
  private readonly authors: Author[] = [
    {
      id: 12345,
      age: 33,
      name: 'Author 1',
      rating: 4.5,
    },
    {
      id: 23456,
      age: 23,
      name: 'Box ready 2',
      rating: 3.9,
    },
  ];

  findAll(): Author[] {
    return this.authors;
  }

  findById(_id: number): Author {
    return this.authors.find(({ id }) => id === _id);
  }

  create(payload: CreateAuthorInput): AuthorDTO {
    const author = {
      id: Math.random(),
      ...payload,
    };
    this.authors.push(author);
    return author;
  }

  update(authorId: number, payload: CreateAuthorInput): AuthorDTO {
    const index: number = this.authors.findIndex(({ id }) => id === authorId);
    const author: Author = {
      ...this.authors[index],
      ...payload,
    };

    this.authors[index] = {
      ...author,
    };

    return author;
  }
}
