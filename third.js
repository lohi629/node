var http=require('http');
var name=http.createServer(function(req,res)
{
if(req.url=='/')
{
res.setHeader("contentType","text/html");
res.write("<html>");
res.write("<body>");
res.write("<form action='/M' method='post'>");
res.write("<input type='text' name='message'>");
res.write("<button type='submit'>submit");
res.write("</form>");
res.write("</body>");
res.write("</html>");
res.end();
}
if(req.url=='/M')
{
res.setHeader("contentType","text/html");
res.write("<h1>Hello</h1>");
res.end();
}
});
name.listen(9000);
console.log('running');
