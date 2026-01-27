// // Further Reading: https://nodejs.org/en/learn/getting-started/introduction-to-nodejs
// const http = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello 2 World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))
// app.use(express.static('files'))  For multiple file Public


app.get('/', (req, res) => {
  res.send('Hello  World!')
})
app.get('/about', (req, res) => {
  res.send('Us about!')
})
app.get('/contact', (req, res) => {
  res.send('Hello contact!')
})
app.get('/blog', (req, res) => {
  res.send('Hello blog!')
})

app.get('/blog/:slug', (req, res) => {
    // logic to fetch {slug} from the db
    // For URL: http://localhost:3000/blog/intro-to-padosi?mode=dark&region=in
    console.log(req.params) // will output { slug: 'intro-to-padosi' }
    console.log(req.query) // will output { mode: 'dark', region: 'in' }

    res.send(`hello ${req.params.slug}`)
})

// app.get('/blog/intro-to-js', (req, res) => {
//     // logic to fetch intro to js from the db
//     res.send('Hello intro-to-js!')
// })

// app.get('/blog/intro-to-python', (req, res) => {
//     // logic to fetch intro to python from the db
//     res.send('Hello intro-to-python!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})