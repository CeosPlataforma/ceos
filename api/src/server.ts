import express from 'express';
import { router } from './routes/router';
import * as dotenv from 'dotenv';
const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('../website'));
app.use(router);

app.listen(process.env.PORT);
console.log("listening on port", process.env.PORT, ' ', __dirname);
