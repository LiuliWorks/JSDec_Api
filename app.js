const fs=require('fs')
const http = require('http'); 
const url = require('url');
const querystring = require('querystring');
const util = require('util');
var functions={
	"/sojsonp":"decsojsonp",
	"/eval":"uneval",
	"/aaencode":"aadecode",
	"/jjencode":"jjdecode",
	"/sojsonv4":"decsojson4",
	"/jsobfuscator":"obdec_default",
	"/list":"dec_list",
	"/auto":"autoscan"
},loads=["./fun/dec.js","./fun/base64.js"],data=JSON.parse(String(fs.readFileSync("config.json","utf-8")));
for(var i in loads){
	eval(fs.readFileSync(loads[i],"utf-8"))
}
if(!fs.existsSync("./logs")){fs.mkdirSync("./logs")}
function gettime(){
	var date=new Date();
	return date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
}
http.createServer(function(req, res){
    var post='',par=url.parse(req.url, true),uname=par.pathname,timestr=gettime();
    res.writeHead(200, {
	'Content-Type': 'text/json;charset=UTF-8',
	"Access-Control-Allow-Origin":"*"
	});
    req.on('data', function(chunk){
        post+=chunk;
    });
    req.on('end', function(){
        if(functions[uname]!=undefined){eval("res.end("+functions[uname]+"(post))")}
        else{res.end("ERR!\nUndefined pathname!")}
        if(data.log){fs.writeFileSync("./logs"+uname+"-"+timestr+".js",post)}
        console.log("["+timestr+"]"+post.length)
    });
}).listen(data.port);
console.log("Api Server Running @ http://localhost:"+data.port)
