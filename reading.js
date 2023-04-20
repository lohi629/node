hello.txt


Hii! I am lohitha.K.Iam from Narasaraopet.


hello1.js


var http=require('http');
var fs=require('fs');
var server=http.createServer(
function(req,res){
fs.readFile('hello.txt',function(err,data){
res.write(data);
res.end();
});
});
server.listen(3000);
console.log("server is running");
