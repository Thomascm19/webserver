const express = require('express')
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

app.use( express.static(__dirname + '/public/'))

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



app.get('/',(req,res)=>{
    res.render('home',{
        nombre: 'thOmas caYcedo martInez',
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        nombre: 'thOmas caYcedo martInez',
    })
})


app.listen(3000, ()=> {
    console.log('Escuhando peticiones en el puerto 3000')
})