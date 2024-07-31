const express = require('express');

const connect = require('./config/database');

const app = express();

app.listen(3000, async () =>{
    console.log('Server is running');
    await connect();
    console.log('MongoDB connected');

    
});

