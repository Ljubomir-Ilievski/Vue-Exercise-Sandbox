import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';



// 1) Convert import.meta.url to a file path so we can use __dirname
const __filename = fileURLToPath(import.meta.url);

//console.log(import.meta.url);


const __dirname = path.dirname(__filename);


// 2) Initialize the Express app
const app = express();

// 3) Enable CORS (Cross-Origin Resource Sharing)
//    This allows your frontend (on a different port) to talk to this server.
app.use(cors());

// 4) Parse incoming JSON in the request body
app.use(express.json());

// 5) Define the path to your exercises folder
const EXERCISES_PATH = path.join(__dirname, '../components/ExerciseStrings');

console.log(EXERCISES_PATH);

// 6) Handle GET requests for reading files
app.get('/read/:part/:exercise/:file', (req, res) => {
  // 6.1) Build the file path from the "file" URL parameter
  console.log("SERVER GET CALLED");
  let {part, exercise, file} = req.params;
  const filePath = path.join(EXERCISES_PATH, part, exercise, file);

  // 6.2) Use fs to read the file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // If something goes wrong, send an error response
      return res.status(500).send('Error reading file');
    }
    // Otherwise, send the file contents as the response
    res.send(data);
  });
});

// 7) Handle POST requests for writing files
app.post('/write/:part/:exercise/:file', (req, res) => {
  // 7.1) Build the file path from the "file" URL parameter
  console.log("SERVER POST CALLED");
  console.log(req.body);
  let {part, exercise, file} = req.params;



  const filePath = path.join(EXERCISES_PATH, part, exercise, file);

  // 7.2) Write the file using the "content" sent in the request body
  fs.writeFile(filePath, req.body.content, 'utf8', (err) => {
    if (err) {
      // If there's an error, respond with status 500
      return res.status(500).send('Error writing file');
    }
    // Otherwise, let the client know it was successful
    res.send('File updated successfully');
  });
});

// 8) Start the server on port 3001
app.listen(3001, () => console.log('Server running on http://localhost:3001'));
