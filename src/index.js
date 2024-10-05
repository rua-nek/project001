const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;


// Cấu hình file tĩnh
app.use(express.static('./src/public'));

// Thiết lập handlebars như một view engine
// Thay đổi view engine
app.engine('hbs', handlebars.engine(
  {extname: '.hbs' }
));
app.set('view engine', 'hbs');
app.set('views', './src/resources/views');

// http logger
app.use(morgan('dev'));

// Render template index.handlebars
app.get('/', (req, res) => {
  res.render('home')
});

app.get('/news', (req, res) => {
  res.render('news')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});