import dotenv from 'dotenv';
import http from 'http';
import app from './app.js';
import ConnectDb from './config/db.js';
dotenv.config({path:"./.env"});
ConnectDb();
const port=process.env.PORT || 3000;
const server=http.createServer(app);
server.listen(port,()=>{
    console.log(`server is running on the port http://localhost:${port}`);
})