import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getData() {
    return { version: '1.0.0' }
  }
}
