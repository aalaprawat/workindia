const mysql = require('mysql')
const mysqlConnect = require('../connection')
const express=require('express')
const Router =express.Router()
const mysqlConnection = require('../connection')
const bodyParser = require('body-parser')


Router.get('/',(req,res)=>{
    var id = req.params.id;
  mysqlConnection.query("create table agent (uid int auto_increment primary key, agent_id varchar(255),password varchar(255)) ",(err,rows,fields)=>{
      if(!err)
      {
          res.send("table agent made");
      }
      else{
          console.log(err);
      }
  })
})

module.exports=Router;