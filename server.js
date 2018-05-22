var express=require('express');
var app=express();
var http = require('http').createServer(app);
var bodyParser = require('body-parser');
var request = require('request');
var url = require('url');
var fs = require('fs');
app.use(express.static('static'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));// for parsing application/x-www-form-urlencoded

http.listen(process.env.PORT || 8000);

app.get('/',function(req,res){

 res.render('index');

});

app.set('view engine', 'ejs');

app.get('/showbooks',function(req,res){
	

	request.get('http://gutendex.com/books/?mime_type=image&topic='+req.query.genre, function (error, response, body) {
				if (error){
					console.log(error);
				}
			    if (!error && response.statusCode == 200) {
			        text = JSON.parse(body);
			    
			    }
			    var data = text["results"];
			   
			 
  				res.render('showbooks',{data:data,genre:req.query.genre});
			   
			});
	

});

app.get('/filterbooks',function(req,res){
	
	request.get('http://gutendex.com/books/?mime_type=image&topic='+req.query.genre+"&search="+req.query.search, function (error, response, body) {
				if (error){
					console.log(error);
				}
			    if (!error && response.statusCode == 200) {
			        text = JSON.parse(body);
			    
			    }
			    var data = text["results"];
			    console.log(text["results"]);
			 
  				res.send(	{data:data,genre:req.query.genre});
			   
			});
	

});



