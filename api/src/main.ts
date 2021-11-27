import { NestFactory } from '@nestjs/core'

import { AppModule } from './app/app.module'
import { setupSwagger } from './swagger/swagger.setup'
import { PrismaService } from './prisma/prisma.service'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  // Expose swagger.
  setupSwagger(app)

  // Handle Prisma's shutdown event
  app.get(PrismaService).enableShutdownHooks(app)

  await app.listen(3000)
}

bootstrap()
