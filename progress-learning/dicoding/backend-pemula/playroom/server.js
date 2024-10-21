const http = require('http');

const requestListener = (request, response) => {

    // flow HTTP method
    const { method } = request;

    if(method === 'GET') {
        response.setHeader('Constent-Type', 'text/html')

        response.statusCode = 200;
        // response.end('<h1>Halo HTTP Server!</h1>');
        // console.log('ini get ya')
        response.end('<h1>Method GET ya</h1>');
    } else if(method === 'POST') {
        response.setHeader('Constent-Type', 'text/html')

        response.statusCode = 200;
        // response.end('<h1>Halo HTTP Server!</h1>');
        
        response.end('<h1>Method POST ya</h1>');
    } else if(method === 'PUT') {
        response.setHeader('Constent-Type', 'text/html')

        response.statusCode = 200;
        // response.end('<h1>Halo HTTP Server!</h1>');

        response.end('<h1>Method PUT ya</h1>');
    }
}

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
})
