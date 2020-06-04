import { Injectable } from '@nestjs/common';

import { Author } from './interfaces/author.interface'

@Injectable()
export class AuthorsService {
  private readonly authors: Author[] = [
    {
      name: 'Author 1',
      rating: 4.5,
    },
    {
      name: 'Box ready',
      rating: 3.9,
    },
  ];

  findAll(): Author[] {
    return this.authors;
  }
}
