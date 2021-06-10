var express = require('express');
const {spawn} = require('child_process');

var app = express();

app.set('view engine','pug');


app.get("/",function(request,response){
   return response.redirect('/form-with-get');
});

app.get("/form-with-get",function(request,response){
   return response.render('form-with-get');
});


app.get("/submit-form-with-get",function(request,response){
   firstfile=request.query.first;
   seconfile=request.query.second;
   console.log(firstfile);
   console.log(seconfile);


   var dataToSend;
   // spawn new child process to call the python script
   const python = spawn('python', ['mergefiles.py',firstfile,seconfile]);
   // collect data from script
   python.stdout.on('data', function (data) {
    console.log('Pipe data from python script ...');
    dataToSend = data.toString();
    console.log(dataToSend)
   });
   //response.write('<script>window.alert("Merged Successfully")</script>');
   return response.send('submit-form-with-get');
});

var server = app.listen(1337, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
});