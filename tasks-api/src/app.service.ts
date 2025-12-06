import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Welcome to task sever api!';
  }

  getHealth() {
    return { status: 'ok' };
  }
}
