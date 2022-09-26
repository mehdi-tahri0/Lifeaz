const express = require('express');
const app = express();
const client = require('../databasepg.js');

app.get('/',(req,res)=>{
    res.send('Hello World');
});

client.connect();
app.get('/api',(req,res)=>{
    client.query('Select * from defibrilateur',(err,result)=>{
        if(!err){
            res.send(result.rows);
        }else{
            res.send(err.message);
        }
        client.end;
    })
});
/*
app.get('/api/:id',(req,res)=>{
    client.query(`Select * from defibrilateur where id=${req.params.id}`,(err,result)=>{
        if(!err){
            res.send(result.rows);
        }else{
            res.send(err.message);
        }
        client.end;
    })
});
*/