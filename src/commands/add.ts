

import { db } from '../db';

export const addTask = (task: string) => {
  const id = db.get('tasks').size().value() + 1;
  db.get('tasks').push({ id, task, completed: false }).write();
  console.log(`Added task: ${task}`);
};
