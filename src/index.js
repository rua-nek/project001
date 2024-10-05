const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

// Thiết lập handlebars như một view engine
app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');

app.use(morgan('dev'));

// Render template index.handlebars
app.get('/', (req, res) => {
  res.send('<h1>Hello Nodejs 2</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});