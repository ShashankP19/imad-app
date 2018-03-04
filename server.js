var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articles = {
  'article-one': {
    title: 'Article one',
    heading: 'Article one',
    date: 'March 4th, 2018',
    content: `
      <p>
          This is content of article one. This is content of article one. This is content of article one. This is content of article one.
      </p>    
      <p>
          This is content of article one. This is content of article one. This is content of article one. This is content of article one.
      </p>   
      <p>
          This is content of article one. This is content of article one. This is content of article one. This is content of article one.
      </p>
    `, 
  },
  'article-two': {
    title: 'Article two',
    heading: 'Article two',
    date: 'March 5th, 2018',
    content: `
      <p>
          This is content of article two. This is content of article two. This is content of article two. This is content of article two.
      </p>    
      <p>
          This is content of article two. This is content of article two. This is content of article two. This is content of article two.
      </p>   
      <p>
          This is content of article two. This is content of article two. This is content of article two. This is content of article two.
      </p>
    `, 
  },
  'article-three': {
    title: 'Article three',
    heading: 'Article three',
    date: 'March 6th, 2018',
    content: `
      <p>
          This is content of article three. This is content of article three. This is content of article three. This is content of article three.
      </p>    
      <p>
          This is content of article three. This is content of article three. This is content of article three. This is content of article three.
      </p>   
      <p>
          This is content of article three. This is content of article three. This is content of article three. This is content of article three.
      </p>
    `, 
  },
};

function createTemplate(data) {
  var title = data.title;
  var date = data.date;
  var heading = data.heading;
  var content = data.content;
  var htmlTemplate = `
  <html>
  <head>
      <link href="/ui/article-style.css" rel="stylesheet"/>
      <title>
          ${title}
      </title>
  </head>
  <body>
      <div class="container">
          <div>
              <a href="/">Home</a>
          </div>  
          <hr/>
          <h3>
           ${heading}
          </h3>    
          <div>
            ${date}
          </div>   
          <div>
            ${content} 
          </div>
      </div>
  </body>    
</html>
  `; 
  return htmlTemplate;
};

app.get('/:articleName', function (req, res) {
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/article-style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-style.css'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 8080;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
