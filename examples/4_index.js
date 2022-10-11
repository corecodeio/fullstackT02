const http = require('http');

const handlerResquest= (req,res)=>{
    console.log(req.url, req.method)
}

const server = http.createServer(handlerResquest)

server.listen(8000)