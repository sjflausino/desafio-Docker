
### Frontend

Criar um arquivo Dockerfile com os seguintes dados.

```
FROM node
WORKDIR /app-node
EXPOSE 8080
COPY package*.json ./
COPY src .
RUN npm install
ENTRYPOINT npx http-server  
```
Esse dockerfile ficará responsável por criar a imagem que utilizaremos no frontend e estamos mapeando para a porta 8080 do container

no mesmo diretorio abriremos o terminal e utilizaremos o comando

docker build -t front/app-node:1.0 .

para criar a imagem copiando os arquivos locais para a imagem do front.

### Backend

Criar um arquivo Dockerfile com os seguintes dados.

```
FROM node
WORKDIR /app-node
EXPOSE 3000
COPY package*.json ./
COPY src .
RUN npm install
ENTRYPOINT node index.js
```  
Esse dockerfile ficará responsável por criar a imagem que utilizaremos no backend e estamos mapeando para a porta 3000 do container

no mesmo diretorio abriremos o terminal e utilizaremos o comando

docker build -t back/app-node:1.0 .

para criar a imagem também copiando os arquivos do diretorio atual pra dentro da imagem do back.

### Docker

Após as imagens concluidas iremos crirar um arquivo.yaml fora dos diretórios das imagens chamado docker-compose.yaml e colaremos as seguintes informações.

```
version: "3.3"
services:
  front:
    image: front/app-node
    container_name: front
    networks:
      - compose-bridge
    ports:
      - 8080:8080

  back:
    image: back/app-node
    container_name: back
    networks:
      - compose-bridge
    ports:
      - 3000:3000

networks:
  compose-bridge:
    driver: bridge
```
Esse arquivo sera responsável por criar os containers e mapear as portas do mesmo para as nossas portas locais no localhost.

Nesse momento executaremos:

```
docker-compose up
```
para inicializar ambos os containers de front e back já com as portas mapeadas.

a partir dai já conseguimos acessar nossa aplicação através do endereço http://localhost:8080
