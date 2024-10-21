const http = require('http');

const requestListener = (request, response) => {
    const { method } = request;

    // flow HTTP method
    if(method === 'GET') {
        response.setHeader('Content-Type', 'text/html');
        response.statusCode = 200;

        response.end('Hallo GET');
    }
    if(method === 'POST') {
        response.setHeader('Content-Type', 'text/html');
        response.statusCode = 200;

        response.end('Hallo POST');
    }
    if(method === 'PUT') {
        response.setHeader('Content-Type', 'text/html');
        response.statusCode = 200;

        response.end('Hallo PUT');
    }
    if(method === 'DELETE') {
        response.setHeader('Content-Type', 'text/html');
        response.statusCode = 200;

        response.end('Hallo DELETE');
    }
}

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
})
