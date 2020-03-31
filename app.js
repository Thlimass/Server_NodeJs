const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {

    const path = req.url;

    if (path === "/json") {
        res.statusCode = 200;
        res.setHeader('Content-Type', "text/html");
        res.end(JSON.stringify({ phrase: "Servidor em JSON" }));
    } else if (path === "/html") {
        res.statusCode = 200;
        res.setHeader('Content-Type', "text/html");
        const data = fs.readFileSync("/index.html", "utf-8");
        res.end(data);
    } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Primeiro Servidor em Nodes');
    }
});

server.listen(port, () => {
    console.log(`Servidor subiu na porta: ${port}/`);
});