
import fs from 'fs';

const filePath = "./TestingRW.txt";

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    // If something goes wrong, send an error response
    console.log(err);
  }
  // Otherwise, send the file contents as the response
  console.log(data);
});


fs.writeFile(filePath, "NOW THERES NEW DATA", (err) => {
  if (err){
    console.log(err);
  }
})
