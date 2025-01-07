const posts = require('./immagini_e_post/posts');

const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('Server dei posts')
});

app.listen(port, () => {
  console.log('sono in ascolto alla porta 3000');
  
})