const { exec } = require("child_process");

// Service 1
exec("cd ExercisesFromBook && npm install && npm run dev", (err, stdout, stderr) => {
  if (err) console.error(`Service 1 error: ${err}`);
  console.log(`Service 1: ${stdout}`);
});

// Service 2
exec("cd Exercises_with_server && npm install && npm run dev", (err, stdout, stderr) => {
  if (err) console.error(`Service 2 error: ${err}`);
  console.log(`Service 2: ${stdout}`);
});

// Service 3
exec("cd Exercises_with_server && cd src && cd server && node server.js", (err, stdout, stderr) => {
  if (err) console.error(`Service 3 error: ${err}`);
  console.log(`Service 3: ${stdout}`);
});