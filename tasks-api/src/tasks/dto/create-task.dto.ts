import { IsIn, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString({ message: 'Title must be a string' })
  title: string;

  @IsString({ message: 'Description must be a string' })
  description: string;

  @IsIn(['open', 'in_progress', 'done'], {
    message: 'Status must be one of: open, in_progress, done',
  })
  status: 'open' | 'in_progress' | 'done';
}
