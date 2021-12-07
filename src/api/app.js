const express = require('express');
const { user, login, category, post } = require('../controllers');
const errorMiddleware = require('../utils/errorMiddleware');

const app = express();
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
    response.send();
  });
// não remova esse endpoint, e para o avaliador funcionar

app.use('/user', user);
app.use('/login', login);
app.use('/categories', category);
app.use('/post', post);

app.all('*', (_req, res) => res.status(404).send('Router not found'));
app.use(errorMiddleware);

module.exports = app;