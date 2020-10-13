import express from 'express';

const app = express();

app.use(express.json());

app.get('/users/', (request, response) => {
    return response.json({ message: 'it works!' });
});

app.listen(3333);