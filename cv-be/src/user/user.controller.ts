import { Controller, Delete, Get, Post, Put, Request } from '@nestjs/common';
import { Request as ExpressRequest } from 'express'
import { UserService } from './user.service';
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}
    @Get()
    getAllUsers(@Request() req:ExpressRequest) {
        return this.userService.getCalculatedUsers({}, 0, 10, {_id: -1})
    }

    @Get(':id')
    getUserById(@Request() req:ExpressRequest) {}

    @Put(':id')
    updateUserById(@Request() req:ExpressRequest) {}

    @Delete(':id')
    deleteUserById(@Request() req:ExpressRequest) {
        return this.userService.removeUser(req.params.id)
    }
}
