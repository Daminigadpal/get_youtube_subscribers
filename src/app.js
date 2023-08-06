
const express = require('express');
const app = express()


// Your code goes here
app.get("/",(req,res)=>{
    res.send("Get server database")
    res.sendFile("/index.html")
})




















module.exports = app;
