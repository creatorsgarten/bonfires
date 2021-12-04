import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app/app.module'
import { setupSwagger } from './swagger/swagger.setup'
import { PrismaService } from './prisma/prisma.service'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // Set the global prefix.
  const prefix = 'api'
  app.setGlobalPrefix(prefix)

  // Expose swagger.
  setupSwagger(app)

  // Handle Prisma's shutdown event
  app.get(PrismaService).enableShutdownHooks(app)

  const port = process.env.PORT || 3333
  await app.listen(port)

  Logger.log(`🚀 Application is running on: http://localhost:${port}/${prefix}`)
}

bootstrap()
