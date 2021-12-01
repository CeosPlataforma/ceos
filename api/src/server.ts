import express from 'express';
import { router } from './routes/router';
import * as dotenv from 'dotenv';
import session from 'express-session';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import MongoStore from 'connect-mongo';

const app = express();
dotenv.config();

//app.set('trust proxy', '127.0.0.1');

app.use(fileUpload());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(cors({ origin: 'http://localhost:3000', credentials: true }))

app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        path: '/',
        sameSite: 'lax',
        domain: 'localhost',
        maxAge: 24 * 4 * 60 * 60,
        secure: 'auto'
    },
    
}));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    //@ts-ignore
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
app.use(router);

app.listen(process.env.PORT);
console.log("listening on port", process.env.PORT, ' ', __dirname);
