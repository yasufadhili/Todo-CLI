
import { db } from '../db';

export const listTasks = () => {
  const tasks = db.get('tasks').value();
  tasks.forEach((task: { id: number; task: string; completed: boolean }) => {
    console.log(`${task.id}. [${task.completed ? 'x' : ' '}] ${task.task}`);
  });
};
