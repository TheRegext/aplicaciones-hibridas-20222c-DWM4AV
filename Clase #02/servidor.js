const http = require('node:http')

const server = http.createServer(
    function (request, response) {
        console.log('Recebendo peticion');
        console.log('URL: ' + request.url);

        if (request.url == '/') {
            response.write('<h1>Hola mundo</h1>');
            response.end()

        } else if (request.url == '/pedro') {
            response.write('<h1>Hola Pedro</h1>');
            response.end()
        }
        else {
            response.write('<h1>404</h1>');
            response.end()
        }
    }
)

server.listen(2)