const express = require('express')
const app = express();
 
app.get('/', function (req, res) {

    let salida = {
        nombre: 'Thomas',
        edad: 20,
        url: req.url
    };

  res.send(salida);
})
 
app.listen(3000, ()=> {
    console.log('Escuhando peticiones en el puerto 3000')
})