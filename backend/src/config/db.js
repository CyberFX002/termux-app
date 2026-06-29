const mysql=require('mysql2/promise');const redis=require('redis');
const pool=mysql.createPool({host:process.env.MYSQL_HOST||'mysql',user:process.env.MYSQL_USER||'kfc',password:process.env.MYSQL_PASSWORD||'kfc_secret',database:process.env.MYSQL_DATABASE||'kfc_streams',waitForConnections:true,connectionLimit:10,namedPlaceholders:true});
const cache=redis.createClient({url:process.env.REDIS_URL||'redis://redis:6379'});cache.on('error',err=>console.error('redis',err.message));
module.exports={pool,cache};
