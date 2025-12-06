/* eslint-disable @typescript-eslint/no-unused-vars */
import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';

@Injectable()
export class SlugifyPipe implements PipeTransform<string> {
  transform(value: any, metadata: ArgumentMetadata): any {
    return value;
  }
}
