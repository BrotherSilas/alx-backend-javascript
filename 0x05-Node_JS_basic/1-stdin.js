process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const name = process.stdin.read();
  
  if (name) {
    const trimmedName = name.toString().trim();
    process.stdout.write(`Your name is: ${trimmedName}\n`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
