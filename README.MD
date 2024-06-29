
### Compile and Run

Compile and run the project using `ts-node`:

```bash
npx ts-node src/index.ts add "Buy groceries"
npx ts-node src/index.ts list
npx ts-node src/index.ts complete 1
npx ts-node src/index.ts list
npx ts-node src/index.ts remove 1
npx ts-node src/index.ts list
```

### Example Usage

1. Add a task:
   ```bash
   npx ts-node src/index.ts add "Buy groceries"
   ```

2. List tasks:
   ```bash
   npx ts-node src/index.ts list
   ```

3. Mark a task as completed:
   ```bash
   npx ts-node src/index.ts complete 1
   ```

4. Remove a task:
   ```bash
   npx ts-node src/index.ts remove 1
   ```

### Output

The output will display the added tasks, mark them as completed, and remove them, demonstrating the functionality of the CLI tool.