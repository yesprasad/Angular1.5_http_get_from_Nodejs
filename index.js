var express = require('express');

var app = express();

const countryWithCapitalList = [{ "country" : "India", "capital" : "New Delhi"},
                         { "country" : "Germany", "capital" : "Berlin"},
                         { "country" : "USA", "capital" : "Washington DC"},
                         { "country" : "Australia", "capital" : "Canberra"},
                         { "country" : "France", "capital" : "Paris"},
                         { "country" : "Canada", "capital" : "Toronto"},
                         { "country" : "Singapore", "capital" : "Singapore"}];


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/countriesWithCaptials',function(req,res){
    res.send(countryWithCapitalList);
});

app.listen(4560,function(){
    console.log('listening at 4560');
});