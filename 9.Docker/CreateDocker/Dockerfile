FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm cache clean --force && npm install

COPY . .

EXPOSE 3000

VOLUME [ "/data" ]

CMD ["npm", "run", "start"]
