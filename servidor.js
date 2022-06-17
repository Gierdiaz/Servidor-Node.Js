const http = require('http');

const statu = require('./pcRamUsage.js');

const server = http.createServer((req, res) => {

   if(req.url == '/'){
    res.end('<h1>Working</h1>');

   }else if (req.url == '/admin'){
    res.end('<h1>Admin</h1>');

   }else if (req.url == '/status'){
    res.end(JSON.stringify(statu, null, 2));

   }else {
    res.end('<h1>Sem resposta para essa URL</h1>');
   }

   
});

const host = 'http://localhost';

const port = 3030;

server.listen(3030, 'localhost', () => {
    
    console.log(`Server is running in ${host}:${port}`);
    console.log('Para desligar o servidor: CRTL + C');
});