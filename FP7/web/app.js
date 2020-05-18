const express = require('express')
const path = require('path')
const HomeRouter = require('./routes/home')
const app = express()
const PORT = 5000


app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(HomeRouter)

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}/`)
})
