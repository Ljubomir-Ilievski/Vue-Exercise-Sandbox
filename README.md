## About the Project:
The project is made in order to make access to the exercises specified in the book **"Maya Shavin, Raymond Camden - Frontend Development Projects with Vue.js, 2nd edition"** quick and easy.

# Usage:
Simply select a lecture on the left and a specific exercises that it holds, that exercise will pop in the middle, and its code on the right. Above the code the different files that correspond to that exercise will be seen, click each of them to switch between files for that current exercise. You can make changes in the code and click on the "Compile" button to commit those changes, if you did not made a mistake, you will see your changes in the middle, if you did, you will see nothing :). In that case simply click the button to reset the code and undo the mistake you made. 

# Start guide:
There are two ways to start the project after you clone it:

## Using docker:
Open a terminal at the path where the docker-compose.yml resides, run docker-compose up. After the build the app will be available on http://localhost:5174.
Note. You need to have Docker Engine installed. **I recommend you start the project this way.**

## Using the start_script.js to run the project on your local host machine.
Simply run node start_script.js at the script's path in your terminal and the project should start, still due to version differences, this way is not recommended.

## Note. The project will be accessible on http://localhost:5174, but for the project to work correctly you need to have ports 5173 and 3001 free.
