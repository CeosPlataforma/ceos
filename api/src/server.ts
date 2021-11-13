import express from 'express';
import { router } from './routes/router';
import * as dotenv from 'dotenv';
import session from 'express-session';
import cors from 'cors';
import MongoStore from 'connect-mongo';
import fileUpload from 'express-fileupload';
const app = express();
dotenv.config();

app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({origin: true, credentials: true}))

app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
        mongoUrl: process.env.MONGO_CONN,
        ttl: 24 * 60 * 60
    })
}));

app.use(router);

app.listen(process.env.PORT);
console.log("listening on port", process.env.PORT, ' ', __dirname);
