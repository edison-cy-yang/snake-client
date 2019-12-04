const net = require('net');
const { IP, PORT } = require('./constant');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log('Connected to the game server');
    conn.write(`Name: EDI`);
    conn.write("Say: whatsup");
  });

  conn.on('data', (data) => {
    console.log(`Server says ${data}`);
  });
  return conn;
};

module.exports = {connect};