import express from 'express';
import mongoose from 'mongoose';
import routes from './src/routes.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = `mongodb+srv://${process.env.DB_USER}:${encodeURIComponent(process.env.DB_PASSWORD)}@insightlycluster0.jupd9.mongodb.net/insightly?retryWrites=true&w=majority&appName=InsightlyCluster0`;

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