const { application } = require('express');
var express = require('express');




app.get('/',function(req,res){

    res.send('hola mundo');
});


app.listen(3000,function(){

    console.log('aplicacion ejemplo,escuchando el puerto 3000!');
    
app.get('/adios',function(req,res){

    res.send('adios mundo');
});

});