module.exports = function(app) {

  // home
  app.get('/', index);

  // helper functions
  function index(req, res) {
    res.render('index', {title: 'Express'} );
  }

};
