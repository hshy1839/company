const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
  
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
  
  const port = 5000;
  app.listen(port, () => {
    console.log(`서버가 http://localhost:${port}`);
  });