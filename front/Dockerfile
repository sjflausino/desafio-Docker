FROM node
WORKDIR /app-node
EXPOSE 8080
COPY package*.json ./
COPY src .
RUN npm install
ENTRYPOINT npx http-server    

