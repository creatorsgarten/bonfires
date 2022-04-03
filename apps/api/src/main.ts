import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify'

import { AppModule } from './app/app.module'
import { setupSwagger } from './swagger/swagger.setup'
import { PrismaService } from './core/prisma.service'

async function bootstrap() {
  const fastify = new FastifyAdapter()

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    fastify
  )

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
