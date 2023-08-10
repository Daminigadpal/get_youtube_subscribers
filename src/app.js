
const express = require('express');
const app = express()
const Subscribers=require('./models/subscribers.js')

// Your code goes here

app.use(express("models"))
app.get("/",(req,res)=>{
    res.send("Get server database")
})
app.get("/sub",async(req,res)=>{
    try{
        let subscriberDetails = await Subscribers.find();
        res.status(200).json(subscriberDetails);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
})

app.get("/name",async(req,res)=>{
    try{
        let subscriberDetails = await Subscribers.find({},{name:1,subscribedChannel:1});
        res.json(subscriberDetails);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
})
app.get("/id",async(req,res)=>{
    try{
        let subscriberDetails = await Subscribers.find();
        res.json(subscriberDetails);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
})























module.exports = app;
