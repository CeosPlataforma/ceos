import express from 'express';
import { router } from './routes/router';
import * as dotenv from 'dotenv';
import session from 'express-session';
import cors from 'cors';
const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const semana =  1000 * 60 * 60 * 24 * 7  

app.use(cors())

app.use(session({
    secret: "cool secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: semana
    }
}));

app.use(express.static('../website'));
app.use(router);

app.listen(process.env.PORT);
console.log("listening on port", process.env.PORT, ' ', __dirname);
