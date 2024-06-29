import { Command } from 'commander';
import { addTask } from './commands/add';
import { listTasks } from './commands/list';
import { removeTask } from './commands/remove';
import { completeTask } from './commands/complete';

const program = new Command();

program
  .command('add <task>')
  .description('Add a new task')
  .action(addTask);

program
  .command('list')
  .description('List all tasks')
  .action(listTasks);

program
  .command('remove <id>')
  .description('Remove a task by ID')
  .action(removeTask);

program
  .command('complete <id>')
  .description('Mark a task as completed by ID')
  .action(completeTask);

program.parse(process.argv);
