const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

const usersRouteur = express.Router();
app.use('/users', usersRouteur);

usersRouteur.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/test.html'));
});

usersRouteur.get('/:userName', (req, res) => {
  const userName = req.params.userName; // Récupère la valeur du paramètre :userName
  const fileName = `${userName}.html`;
  res.sendFile(resolve(__dirname, 'pages/' + fileName));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
