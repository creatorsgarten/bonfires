import { Module } from '@nestjs/common'

import { UserService } from './user.service'
import { UserResolver } from './user.resolver'
import { UserController } from './user.controller'

@Module({
  controllers: [UserController],
  providers: [UserService, UserResolver],
})
export class UserModule {}
