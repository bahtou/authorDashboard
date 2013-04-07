module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index', {title: 'Express'});
  });

  app.get('/users', function(req, res) {
    res.send("respond with a resource");
  });

};
