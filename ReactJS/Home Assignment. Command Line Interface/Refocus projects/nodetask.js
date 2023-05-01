const http = require("node:http");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(`${fibonacciSequence(10)}\nEric`);
});

const fibonacciSequence = (number) => {
  let n1 = 0, n2 = 1, nextTerm;
  const arrSequence = [n1, n2]

  

  for (let i = 1; i <= number; i++) {
    arrSequence.push(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  };

  return `Fibonacii Sequence: ${arrSequence}`
};

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
