const { exec } = require('child_process');

exec('cd server && node server.js', (err, stdout, stderr) => {
  if (err) {
    console.error(`Error starting server: ${stderr}`);
    process.exit(1);
  } else {
    console.log(stdout);
  }
});