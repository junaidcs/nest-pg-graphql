import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Put,
  Body,
  ParseIntPipe,
  UsePipes,
} from '@nestjs/common';

import { AuthorsService } from './authors.service';
import { Author } from './interfaces/author.interface';
import { CreateAuthorInput } from './inputs/create-author.input';
import { AuthorDTO } from './dto/author.dto';
import { JoiValidationPipe } from './pipes/validation.pipe';
import { createAuthorSchema } from './validation_schemas/create-author.schema';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorService: AuthorsService) {}

  @Get()
  findAll(): Author[] {
    return this.authorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): string {
    return `All author record by id ${id}`;
  }

  // https://docs.nestjs.com/pipes#object-schema-validation
  @Post()
  @UsePipes(new JoiValidationPipe(createAuthorSchema))
  create(@Body() payload: CreateAuthorInput): AuthorDTO {
    return this.authorService.create(payload);
  }

  // https://docs.nestjs.com/pipes#class-validator
  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: CreateAuthorInput): AuthorDTO {
    return this.authorService.update(id, payload)
  }

  @Delete()
  delete(): string {
    return 'This will delete author';
  }
}
