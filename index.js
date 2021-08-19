const express = require("express");

const app = express();
let port = 3001;

const server = app.listen(port, () => {
    console.log('Escuchando en el puerto ', port);
});

app.get('/',(req, res) => {
    res.json({msg: 'text'});
});

app.get('/mundo', (req, res) => {
    res.send('Hola Mundo');
});
