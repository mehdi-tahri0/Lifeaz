const {Client} = require('pg');
const client = new Client ({
    host: 'localhost',
    user: 'mehdi',
    port: '5432',
    password: 'password',
    database: 'apilifeaz'
});

module.exports = client;
/*
client.connect();
client.query('Select * from defibrilateur',(err,res)=>{
    if(!err){
        console.log(res.rows);
    }else{
        console.log(err.message);
    }
    client.end;
})*/