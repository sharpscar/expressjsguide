/**
 * Created by sharpscar on 15. 6. 17.
 */
var express = require('express');
var app = express();
var port = 3000;

app.get('*', function(req, res){
    res.end('hello world');
});

app.listen(port, function(){
    console.log('This sever is running. ' );
});