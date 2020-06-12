import { Resolver, Args, Query } from '@nestjs/graphql';

import { AuthorsService } from './authors.service';
import { Author } from './interfaces/author.interface';

@Resolver('Author')
export class AuthorsResolver {
  constructor(private authorsService: AuthorsService) {}

  @Query('author')
  async getAuthorById(@Args('id') id: number): Promise<Author> {
    return this.authorsService.findById(id);
  }

  @Query('authors')
  getAllAuthors(): Author[] {
    return this.authorsService.findAll();
  }
}
