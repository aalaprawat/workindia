const mysql = require('mysql')
const mysqlConnect = require('../connection')
const express=require('express')
const Router =express.Router()
const mysqlConnection = require('../connection')
const bodyParser = require('body-parser')

Router.post('/',(req,res)=>{

    const {agent_id,password}= req.body;
    mysqlConnection.query("SELECT * FROM agent where agent_id=? and password=?",[agent_id,password],(err,rows,fields)=>{
        if(!err)
        {
            let data=JSON.parse(JSON.stringify(rows));
                
            if(data.length>0)
            {
                
                console.log(data.length)
                res.send("Success")
                res.redirect('/app/sites/list/'+data[0].uid)
            }
            else{
                res.status(401).send("failure")
            }
        }
        else{
            console.log(err);
        }
    })
})
module.exports=Router;