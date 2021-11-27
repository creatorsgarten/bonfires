import { Prisma } from '@prisma/client'
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common'

import { UserService } from './user.service'

@Controller('users')
export class UserController {
  constructor(readonly userService: UserService) {}

  @Get()
  async getUsers() {
    return this.userService.findAll(10)
  }

  @Get(':id')
  async getUser(@Param('id', ParseIntPipe) userId: number) {
    return this.userService.findById(userId)
  }

  @Post()
  async createUser(@Body() user: Prisma.UserCreateInput) {
    return this.userService.create(user)
  }
}
