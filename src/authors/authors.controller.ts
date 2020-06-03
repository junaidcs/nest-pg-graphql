import { Controller, Get, Post, Delete, Param, Put, Body } from '@nestjs/common';

import { AuthorsService } from './authors.service'
import { Author } from './interfaces/author.interface'


@Controller('authors')
export class AuthorsController {

    constructor(private readonly authorService: AuthorsService){}


    @Get()
    findAll(): Author[] {
        return this.authorService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): string {
        return `All author record by id ${id}`;
    }

    @Post()
    create(): string {
        return 'This route will create author record'
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
