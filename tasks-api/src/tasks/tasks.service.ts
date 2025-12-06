import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';

const tasks = [
  { id: 1, title: 'Learn Nest.js', description: 'First task', status: 'open' },
  {
    id: 2,
    title: 'Build first Nest.js app',
    description: 'Second task',
    status: 'in_progress',
  },
  { id: 3, title: 'Task Three', description: 'Third task', status: 'done' },
];

@Injectable()
export class TasksService {
  getTasks(): any {
    return tasks;
  }

  getTaskById(id: number) {
    const task = tasks.find((task) => task.id === id);
    if (!task) throw new NotFoundException(`Task with ID ${id} not found`);
    return task;
  }

  createTask(createTaskDto: CreateTaskDto) {
    const newTask = {
      id: tasks.length + 1,
      ...createTaskDto,
      status: createTaskDto.status || 'open',
    };

    tasks.push(newTask);
    return newTask;
  }

  deleteTask(id: number) {
    const index = tasks.findIndex((task) => task.id === id);
    if (index === -1) throw new Error('Task Not Found');
    tasks.splice(index, 1);
    return { success: true };
  }
}
