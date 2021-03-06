import { Resolver, Args, Query, ResolveField, Parent } from '@nestjs/graphql';

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
    const authors = this.authorsService.findAll();
    console.log('authors: ', authors)
    return authors
  }

  @ResolveField()
  async createAuthor(@Parent() author) {
    const { id } = author;
    return this.authorsService.findAll();
  }

  @ResolveField()
  async updateAuthor(@Args('id') id: number, @Parent() author) {
    return this.authorsService.update(id, author);
  }
}
