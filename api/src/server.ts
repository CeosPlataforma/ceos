import express, { json, request, response } from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json({ message: 'hello, world' });
});

app.listen(3333);
