const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./src/routes');
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Change the server for a local or a cluster of your own
const server =
  `mongodb+srv://${process.env.DB_USER}:${encodeURIComponent(process.env.DB_PASSWORD)}@insightlycluster0.jupd9.mongodb.net/insightly?retryWrites=true&w=majority&appName=InsightlyCluster0`;

app.use('/', routes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`API listening on http://localhost:${port}`);
});

mongoose.connect(server, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => console.log(err));

