const mysql = require('mysql')
const mysqlConnect = require('../connection')
const express=require('express')
const Router =express.Router()
const mysqlConnection = require('../connection')
const bodyParser = require('body-parser')





Router.post('/',(req,res)=>{

    const {uid,agent_id,password}= req.body;

    mysqlConnection.query("INSERT INTO agent(uid,agent_id,password) VALUES(?,?,?)",[uid,agent_id,password],(err,rows)=>{
        if(!err)
        {
            res.send("User added");
        }
        else{
            console.log(err);
        }
    })

})
module.exports=Router;