const mysql = require('mysql2');

// Gunakan connection pool agar koneksi lebih stabil
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', // sesuaikan password MySQL kamu
  database: 'dbpraktikum8',
  waitForConnections: true,
  connectionLimit: 10, // maksimal 10 koneksi
  queueLimit: 0
});

// Coba koneksi
db.getConnection((err, connection) => {
  if (err) {
    console.error('❌ Koneksi database gagal:', err.message);
  } else {
    console.log('✅ Terhubung ke database MySQL');
    connection.release(); // penting: kembalikan koneksi ke pool
  }
});

module.exports = db;
