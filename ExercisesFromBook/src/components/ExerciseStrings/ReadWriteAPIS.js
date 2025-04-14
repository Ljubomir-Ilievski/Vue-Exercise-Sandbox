/*

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export  const  readCodeFromExercise = (pathToExercise) => {


  const filePath = path.join(__dirname, pathToExercise);
  let tmpdata = null

   fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) console.error(err);
    console.log("FILE READ FROM")
    console.log(data);
    tmpdata = data
  });

  return tmpdata;

}

export const writeCodeToExercise = (pathToExercise, whatToImpute) => {

  const filePath = path.join(__dirname, pathToExercise);


  fs.writeFile(filePath, whatToImpute, 'utf8', (err) => {
    if (err) console.error(err);
    console.log('File saved');
  });


}
*/
