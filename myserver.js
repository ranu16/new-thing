var express = require('express');
var app = express();
var port =3000;
app.use(express.static(__dirname + '/'));
app.listen(port);

console.log('server started at' + port);

app.post('/api/login',function(req,res){
	var abhi =2;
	res.json(abhi);


})