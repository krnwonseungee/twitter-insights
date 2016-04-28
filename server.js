var express = require('express'),
    rendr = require('rendr'),
    bodyParser = require('body-parser'),
    serveStatic = require('serve-static'),
    app = express(),
    server = rendr.createServer({});

server.configure(function (expressApp) {
    expressApp.use(serveStatic(__dirname + '/public'));
    expressApp.use(bodyParser.json());
});

app.use('/', server.expressApp);

function start(){
    var port = 3000;
    app.listen(port);

    console.log(
        "server pid %s listening on port %s in %s mode",
        process.pid,
        port,
        app.get('env')
    );
}

start();

exports.app = app;
