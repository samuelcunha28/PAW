require('dotenv').config();
const PORT = process.env.PORT || 3000

const express = require('express');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const { parse } = require('url');
const { parse: parseQuery } = require('querystring')
const app = express();
const counter = {};
const crypto = require('crypto');

app.use(express.static('view'));
app.use(express.static('uploads'));

app.use(fileUpload());

app.get('/', function (req, res) {
    fs.readFile("./view/index.html", function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.write(data);
            return res.send();
        }
    })
});

app.post('/upload', function (req, res) {

    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(404).send(`<h1>NO FILES UPLOADED</h1>`);
    }

    let sampleFile = req.files.file;

    let uploadPath = __dirname + '/uploads/' + sampleFile.name;

    sampleFile.mv(uploadPath, function (err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!');
    });
});

app.get('/download', function (req, res) {
    const q = parse(req.url);
    const query = parseQuery(q.query);
    let file = query.Dfile
    if (file == '') {
        return res.status(400).send(`<h1>404 NOT FOUND</h1>`);
    }

    const path = `./uploads/${file}`;

    fs.access(path, (err) => {
        if (err) {
            return res.status(404).send(`<h1>404 NOT FOUND</h1>`);
        } else {
            // Hash: ID do ficheiro - o md5 cria sempre a mesma hash para uma determinada string
            const hash = crypto.createHash('md5').update(file).digest('hex');

            // Criar uma entrada default para um ficheiro que nunca foi pedido. Também poderia ser feito no /upload
            if (!counter[hash]) {
                counter[hash] = 0;
            }
            counter[hash] += 1;
            console.log(counter[hash]);
            res.download(path);

        }
    });
});

app.listen(PORT, () => {
    console.log('O servidor arrancou: http://127.0.0.1:5000/');
})