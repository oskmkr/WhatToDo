var connect = require('connect'), http = require('http');

connect().use(connect.static('./')).use(connect.directory('./')).listen(8081);
