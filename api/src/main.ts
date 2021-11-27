import { NestFactory } from '@nestjs/core'

import { AppModule } from './app/app.module'
import { PrismaService } from './prisma/prisma.service'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // Handle Prisma's shutdown event
  app.get(PrismaService).enableShutdownHooks(app)

  await app.listen(3000)
}

bootstrap()
