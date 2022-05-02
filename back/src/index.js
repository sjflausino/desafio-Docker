const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Request received from frontend at ' + new Date());  
    res.status(301).redirect("http://localhost:8080/");
});

app.get('/ola-docker', (req, res) => {
  console.log('Request received from frontend at ' + new Date());  
  res.status(301).redirect("http://localhost:8080/docker.html");
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

