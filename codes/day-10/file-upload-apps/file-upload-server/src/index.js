const express = require('express');
const { join } = require('path');
const { readFileSync, writeFile } = require('fs');
const { IncomingForm } = require('formidable');
const cors = require('cors')

const app = express();
app.use(cors({ origin: '*', allowedHeaders: '*', methods: '*' }))

app.post('/upload-file', function (req, res, next) {
    console.log('called...');
    const form = new IncomingForm({})
    form.parse(req, (err, fields, files) => {
        let oldPath = files.newFile[0].filepath
        let newPath = join(__dirname, 'uploads')
            + '/' + files.newFile[0].originalFilename;
        let rawData = readFileSync(oldPath)

        writeFile(newPath, rawData, function (err) {
            if (err) console.log(err)
            return res.status(200).send({ message: 'File uploaded' });
        })
    })
})

app.use('/{*any}', function (req, res) {
    return res.status(200).send({ message: 'message received' });
})

app.listen(8085, function () {
    console.log('server started');
})