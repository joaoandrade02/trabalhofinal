const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const path = require('path');
const app = express();


mongoose.connect('mongodb://joao:joao@server-shard-00-00-5girx.mongodb.net:27017,server-shard-00-01-5girx.mongodb.net:27017,server-shard-00-02-5girx.mongodb.net:27017/joao?ssl=true&replicaSet=server-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// GET, POST, PUT, DELETE

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requsição (criação, edição)

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));


app.listen(3333);