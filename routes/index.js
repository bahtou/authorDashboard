var Author = require('../models').Author;

module.exports = function(app) {

  // dashBoard
  app.get('/', index);

// form
  app.get('/inputForm', function(req, res) {
    res.render('form', {
      title: 'Author Form'
    });
  });

  app.post('/postForm', function(req, res) {
    var author, genre, book, form = req.body;

    author = new Author({
      name: form.fName,
      books: [{
        title: form.title,
        desc: form.desc,
        img: form.imgURL,
        genre: form.genre.split(',')
      }]
    });

    author.save(function(err) {
      if (err) return console.log("form input err:", err);
      console.log('author saved');
      res.redirect('/inputForm');
    });
  });


// display list

  app.get('/authorList', function(req, res) {
    Author.find(function(err, authors) {
      if (err) return console.log("author list err:", err);
      res.render('displayAuthors', {
        title: 'Author List',
        aInfo: authors
      });
    });
  });

  // helper functions
  function index(req, res) {
    res.render('index', {
      title: 'Author Dashboard'
    });
  }

};
