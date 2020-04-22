const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();

const quizRouter = require('./routes/quiz');
const filterRouter = require('./routes/filters');

app

    .use(express.static('public'))

.use(express.json())
    .use(express.urlencoded({ extended: true }))
    .set('view engine', 'ejs')
    .use('/', quizRouter)
    .use('/', filterRouter)
    .listen(PORT, () => {
        console.log(`server started on http://localhost:${PORT}`)
    });