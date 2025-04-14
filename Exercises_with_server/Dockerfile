FROM node:latest
LABEL authors="iliev"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

ENTRYPOINT ["npm", "run", "dev"]