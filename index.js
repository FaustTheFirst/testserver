const http = require('http');

const server = http.createServer((req, res) => {
  res.send('Hello World!');
  console.log('Yo hello');
});

server.listen(3000, () => console.log('git good'));
