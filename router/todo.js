
const mysql = require('mysql')
const mysqlConnect = require('../connection')
const express=require('express')
const Router =express.Router()
const mysqlConnection = require('../connection')
const bodyParser = require('body-parser')


Router.get('/list/:id',(req,res)=>{
var id = req.params.id;
  mysqlConnection.query("SELECT * from todo where uid=?",[id],(err,rows,fields)=>{
      if(!err)
      {
          res.send(rows);
      }
      else{
          console.log(err);
      }
  })
})
/*
Router.get('/get/:id',(req,res)=>{
    var id = req.params.id;
    const {title, description,category,due_date,uid}= req.body;

    mysqlConnection.query("SELECT Todo.title, Todo.description,Todo.category,Todo.due_date,uid FROM test_db.Todo where Todo.uid=?",[uid,title, description,category,due_date,id],(err,rows)=>{
        if(!err)
        {
            res.send(rows);
        }
        else{
            console.log(err);
        }
    })

})*/
Router.post('/:id',(req,res)=>{

    const {title,description,category,due_date}= req.body;
    let uid=req.params.id
    mysqlConnection.query("INSERT INTO todo(title,description,category,duedate,uid) VALUES(?,?,?,?,?)",[title, description,category,due_date,uid],(err,rows)=>{
        if(!err)
        {
            res.send("Added");
        }
        else{
            console.log(err);
        }
    })

})
module.exports=Router;