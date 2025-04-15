import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';




const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());

app.use(express.json());

const EXERCISES_PATH = path.join(__dirname, '../components/ExerciseStrings');

console.log(EXERCISES_PATH);

app.get('/read/:part/:exercise/:file', (req, res) => {

  console.log("SERVER GET CALLED");
  let {part, exercise, file} = req.params;
  const filePath = path.join(EXERCISES_PATH, part, exercise, file);


  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {

      return res.status(500).send('Error reading file');
    }
    res.send(data);
  });
});

app.post('/write/:part/:exercise/:file', (req, res) => {

  console.log("SERVER POST CALLED");
  console.log(req.body);
  let {part, exercise, file} = req.params;



  const filePath = path.join(EXERCISES_PATH, part, exercise, file);

  fs.writeFile(filePath, req.body.content, 'utf8', (err) => {
    if (err) {

      return res.status(500).send('Error writing file');
    }

    res.send('File updated successfully');
  });
});

const hostname = process.env.HOST || 'localhost';
app.listen(3001, hostname, () => console.log('Server running on http://localhost:3001'));
