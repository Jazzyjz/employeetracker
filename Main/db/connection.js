const mysql = require('mysql2');
//require('dotenv').config();

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: 'rootroot',
      database: 'employee_tracker_db'
    },
    console.log(`Connected to the employee tracker database.`)
  );

module.exports = db;