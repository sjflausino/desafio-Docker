FROM node
WORKDIR /app-node
EXPOSE 3000
COPY package*.json ./
COPY src .
RUN npm install
ENTRYPOINT node index.js
