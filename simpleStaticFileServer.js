var connect = require('connect'), http = require('http');

console.log('simple web static server started... port 8000');

connect().use(connect.static('./')).use(connect.directory('./')).listen(8000);
