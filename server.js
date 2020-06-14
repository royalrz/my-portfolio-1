const express = require('express');
const app = express()
const path = require('path')
const port_number = process.env.PORT || 3500;

app.use(express.static('public'))
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'html');

app.listen(port_number, () => console.log(`jin.website is listening on port ${port_number}!`))

