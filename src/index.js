import { tableData } from './repository/tableData.js';
import express from "express";
import bodyParser from 'body-parser';
import { soapService } from './integration/soapService.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send({ message: "This page is empty"})
})

app.get('/api/data', tableData.getFiltered)

app.post('/api/update/data', function(_req, res) {
    res.send(soapService(tableData.getFiltered))
});


app.listen(8888, () => {
    console.log("Application listening on port 8888!");
});