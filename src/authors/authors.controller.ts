import { Controller, Get, Post, Delete, Param, Put, Body, ParseIntPipe } from '@nestjs/common';

import { AuthorsService } from './authors.service'
import { Author } from './interfaces/author.interface'
import { CreateAuthorInput } from './inputs/create-author.input';
import { AuthorDTO } from './dto/author.dto';


@Controller('authors')
export class AuthorsController {

    constructor(private readonly authorService: AuthorsService){}


    @Get()
    findAll(): Author[] {
        return this.authorService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): string {
        return `All author record by id ${id}`;
    }

    @Post()
    create(@Body() payload: CreateAuthorInput): AuthorDTO {
        return this.authorService.create(payload)
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() payload): string {
        return 'This will update fields in author record'
    }

    @Delete()
    delete(): string {
        return 'This will delete author'
    }
}
