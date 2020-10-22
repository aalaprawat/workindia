const mysql = require('mysql')
const mysqlConnect = require('../connection')
const express=require('express')
const Router =express.Router()
const mysqlConnection = require('../connection')
const bodyParser = require('body-parser')


Router.get('/',(req,res)=>{
    var id = req.params.id;
  mysqlConnection.query("create table todo (notesid int auto_increment primary key, uid int,title varchar(255),description varchar(255),category varchar(255),duedate date) ",(err,rows,fields)=>{
      if(!err)
      {
          res.send("table todo made");
      }
      else{
          console.log(err);
      }
  })
})

module.exports=Router;