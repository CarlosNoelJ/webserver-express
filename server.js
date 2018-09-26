const express = require('express'); //Paquete que se encuentra en el modulo de node
const app = express();
const hbs = require('hbs');

// Helpers
require('./hbs/helpers');

// Puerto desde heroku


app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    // res.send('Hola mundo!!!');

    res.render('home', {
        nombre: 'carlOs noeL'
    });
});

app.get('/about', (req, res) => {
    // res.send('Hola mundo!!!');

    res.render('about', {});
});

app.get('/data', (req, res) => {
    res.send('Hola Data!!!');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});