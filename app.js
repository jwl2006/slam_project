var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');
var webserver = require('./app.json');
var port = webserver.port.http;
app.listen(port);
console.log('Server started! At http://<host>:' + port);

app.get('/', homePage);
/** GET Request the homepage
 * API: http://localhost:8080/
 */
  function homePage(req, res) {
    fs.readFile(__dirname+'/index.html', 'utf8', function getFile(err, data) {
        if (err) {
            res.statusCode = 404;
            console.log('404 RESOURCE NOT FOUND');
            return res.send('404 RESOURCE NOT FOUND: ' + err);
        }
        res.statusCode = 200;
        return res.send(data);
    });
};
