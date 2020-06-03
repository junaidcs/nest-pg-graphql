import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';

@Controller('authors')
export class AuthorsController {
    @Get()
    getAuthors(): string {
        return 'All authors list';
    }

    @Post()
    createAuthor(): string {
        return 'This route will create author record'
    }

    @Patch()
    setAuthor(): string {
        return 'This will update fields in author record'
    }

    @Delete()
    deleteAuthor(): string {
        return 'This will delete author'
    }
}
