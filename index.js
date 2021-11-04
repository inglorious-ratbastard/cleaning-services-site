const express = require("express");
const path = require("path");
const app = express();

app.set('view engine', 'ejs');
app.set('views', './frontend/views/');
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.render('index', { title: 'Cuisine, Charcuterie & More' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'Locally Sourced Kitchen' });
});

app.get('/board', (req, res) => {
  res.render('board', { title: 'The Tasting Board | Charcuterie' });
});

app.get('/menu', (req, res) => {
  res.render('menu', { title: 'The Preserved Pantry | Cannery' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Connect With Our Kitchen' });
});

app.use((req, res) => {
  res.status(404).render('error', { title: 'Page Not Found' });
});

app.listen(port, () => 
console.log(`Listening at http://localhost:${port}`));
