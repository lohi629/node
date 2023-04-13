var http=require('http');
var name=http.createServer(
function(req,res)
{
res.setHeader('contentType','text/html')
if(req.url=='/hai')
{
res.write("hello");
res.end();
}
else{
res.write(req.url);
}
}
);
name.listen(5000);
console.log("server is running");
