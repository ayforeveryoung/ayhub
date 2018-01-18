//连接数据库

const mysql = require('mysql')

exports.connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'ayhub',
})


