
import { db } from '../db';

export const removeTask = (id: string) => {
  db.get('tasks').remove({ id: parseInt(id) }).write();
  console.log(`Removed task with ID: ${id}`);
};
