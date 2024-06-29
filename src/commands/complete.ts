import { db } from '../db';

export const completeTask = (id: string) => {
  db.get('tasks').find({ id: parseInt(id) }).assign({ completed: true }).write();
  console.log(`Completed task with ID: ${id}`);
};