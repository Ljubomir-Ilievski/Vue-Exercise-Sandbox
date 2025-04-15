FROM node:latest
LABEL authors="iliev"

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install --save-dev concurrently #needed to manage and start multiple proccesses when the container starts

COPY . .

EXPOSE 5173

ENTRYPOINT ["npm", "run", "startApp"]