const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const path = require('path')



//adding the path for static files like css,javascript and images
app.use(express.static(path.join(__dirname,'public')))

//adding the path for the html 
app.set('views', path.join(__dirname, 'views'))

//initializing thr view engine
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(req,res) {
  res.render('home');
});

app.get('/interests', function(req,res) {
  res.render('interests');
});
app.get('/about', function(req,res) {
  res.render('about');
});
app.get('/search', function(req,res) {
  res.render('search');
});
app.get('/explore', function(req,res) {
  res.render('explore');
});



app.listen(PORT , () => { 
  console.log('port started');
})