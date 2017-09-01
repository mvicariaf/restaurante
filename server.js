var express = require ('express');
var app = express();
var menu = require('./data/menu.json');
app.get('/menu' , function(req,res){
	res.json(menu);
});
app.listen(3000);
// cd navega hasta la carpeta 
// npm install connect serve-static
// pon este archivo en la raíz de la carpeta
// ejecuta en consola node server.js