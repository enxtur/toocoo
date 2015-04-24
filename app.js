var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(80);

// MySQL 5.5 database added.  Please make note of these credentials:
//
//        Root User: admin8acic8t
//    Root Password: 5i1FyggKmeGe
//    Database Name: enxtur
//
// Connection URL: mysql://$OPENSHIFT_MYSQL_DB_HOST:$OPENSHIFT_MYSQL_DB_PORT/
//
// You can manage your new MySQL database by also embedding phpmyadmin.
// The phpmyadmin username and password will be the same as the MySQL credentials above.



// MySQL 5.5 database added.  Please make note of these credentials:
//
//        Root User: admin8acic8t
//    Root Password: 5i1FyggKmeGe
//    Database Name: enxtur
//
// Connection URL: mysql://$OPENSHIFT_MYSQL_DB_HOST:$OPENSHIFT_MYSQL_DB_PORT/
//
// You can manage your new MySQL database by also embedding phpmyadmin.
// The phpmyadmin username and password will be the same as the MySQL credentials above.
