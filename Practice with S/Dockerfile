From node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

Expose 3000

Cmd ["node", "server.js"]