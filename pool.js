//创建mysql连接池
const mysql = require('mysql2')

const pool = mysql.createPool({
    host: "tpe0.clusters.zeabur.com",
    port: 30872,
    user: "root",
    password: "y498g30fkoN6",
    database: "nx",
    connectionLimit: 10
});

//把创建好的连接池导出
module.exports = pool;