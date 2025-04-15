FROM node:latest
LABEL authors="iliev"

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 5174

ENTRYPOINT ["npm", "run", "dev"]