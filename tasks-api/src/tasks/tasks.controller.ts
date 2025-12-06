/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { ResponseMessage } from 'src/shared/decorators/response-message.decorator';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  @ResponseMessage('All Task get successfully')
  getAllTasks(): any {
    try {
      return this.tasksService.getTasks();
    } catch (error: any) {
      throw new HttpException(
        (error as { message: string }).message,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  getAllTaskById(@Param('id') id: string) {
    try {
      const taskid = parseInt(id);
      return this.tasksService.getTaskById(taskid);
    } catch (error) {
      throw new HttpException(
        (error as { message: string }).message,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Post()
  createTask(@Body() createDto: CreateTaskDto) {
    try {
      return this.tasksService.createTask(createDto);
    } catch (error: any) {
      throw new HttpException('Invalid task data', HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    try {
      const taskId = parseInt(id);
      return this.tasksService.deleteTask(taskId);
    } catch (error: any) {
      throw new HttpException('Task Not Found', HttpStatus.NOT_FOUND);
    }
  }
}
