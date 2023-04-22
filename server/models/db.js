import mysql from 'mysql2';
import dbConfig from '../configs/db.config.js';

const conn = mysql.createConnection({
	host: dbConfig.HOST,
	user: dbConfig.USER,
	password: dbConfig.PASSWORD,
	database: dbConfig.DB_NAME,
	port: 3306,
});

export default conn;
