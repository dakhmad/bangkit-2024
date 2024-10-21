const http = require('http');

const requestLintener = (request, response) => {
    response.setHeader('Constent-Type', 'text/html');
    response.statusCode = 200;

    const { method } = request;

    if(method === 'GET') {
        response.end(`<h1>Hello Method ${method}</h1>`);
    }
    

    // Memasukkan inputan POST ke body dan di concat
    if(method === 'POST') {
        let body = [];

        request.on('data', (chunk) => {
            body.push(chunk)
        });

        request.on('end', () => {
            body = Buffer.concat(body).toString();
            const { name } = JSON.parse(body);
            response.end(`<h1>Hello, ${name}!</h1>`);
            response.end(`<h1>Isi body: ${body}!</h1>`);
        })
    }
};

const server = http.createServer(requestLintener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada httpL//${host}:${port}`);
})
