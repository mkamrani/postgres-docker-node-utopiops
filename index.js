const { Client } = require('pg')
const client = new Client({
  user: 'admin',
  host: 'localhost',
  database: 'test_db',
  password: 'mypassword',
  port: 5432,
});

client.connect().then(() => {
  client.query('SELECT NOW()', (err, res) => {
    console.log(res.rows)
    client.end()
  });
});
