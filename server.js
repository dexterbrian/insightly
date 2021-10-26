const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./src/routes');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Edit bellow the mongodb cluster link
const server =
  'mongodb+srv://candidate:interview@interview.usfbr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

app.use('/', routes);

mongoose
  .connect(server, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database connected');
    const port = process.env.PORT || 3000;

    app.listen(port, () => {
      console.log(`API listening on http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));

