import { Body, Controller, Delete, Get, Param, Put, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './schemas/user.schema';

@Controller('api')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post('users/add')
    create(@Body() data: User) {
        return this.usersService.create(data);
    }

    @Get('users/list')
    findAll() {
        return this.usersService.findAll();
    }

    @Get('users/list/:id')
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(id);
    }

    @Put('users/update/:id')
    update(@Param('id') id: string, @Body() data: User) {
        return this.usersService.update(id, data);
    }

    @Delete('users/delete/:id')
    remove(@Param('id') id: string) {
        return this.usersService.delete(id);
    }
}
