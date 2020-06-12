import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { AuthorsResolver } from './authors.resolver';

@Module({
    providers: [AuthorsService, AuthorsResolver],
    controllers: [AuthorsController]
})
export class AuthorsModule {}
