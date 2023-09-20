const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('¡Hola!');
});

app.listen(port, () => {
    console.log(`El servidor está escuchando en el puerto ${port}`);
});
