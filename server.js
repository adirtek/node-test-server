
var net = require('net');

var server = net.createServer(function(conn){
  console.log('Server > TCP Server created');

  conn.on('data', function(data){
    // console.log('server-> ' + data + ' from ' + conn.remoteAddress + ':' + conn.remotePort);
    console.log('Server > ' + data + 'From'+' IP ' + conn.remoteAddress + ' Port: ' + conn.remotePort);
    // conn.write('server -> Repeating: ' + data);
    conn.write('Client > ' + data);
  });

  conn.on('close', function(){
    // console.log('server-> client closed connection');
    console.log('Client already closed connection T^T');
  });
}).listen(3000);

console.log('Listening on port 3000');