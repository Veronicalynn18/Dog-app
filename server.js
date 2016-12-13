
    var server = app.listen(3000, function(){
      var port=server.address().port;
      console.log("example app listening at http://localhost:%s",port);
    });
