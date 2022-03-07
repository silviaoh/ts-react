const http = require('http');
const express = require('express');
const ejs = require('ejs');
const fs = require('fs');

const app = express();
const server = http.createServer(app);

const hostname = '127.0.0.1';
const port = 3001;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
	res.render('index', {
		cost: 5000000,
	});
});

app.use(express.static(__dirname + '/views'));

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
