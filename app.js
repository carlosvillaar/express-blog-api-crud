const posts = require('./immagini_e_post/posts');

const router = require('./router/posts');

const express = require('express');

const app = express();

const port = 3000;

const notFound = require('./middlewares/notFound');

const errorsHandlerr = require('./middlewares/errorshandlerr');

//body parser
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server dei posts')
});

app.use('/posts', router);

app.use(notFound);

app.use(errorsHandlerr)

app.listen(port, () => {
  console.log('sono in ascolto alla porta 3000')
});
