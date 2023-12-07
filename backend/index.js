require("dotenv").config()
const express=require("express")
const app= express()
const cors=require('cors')
const mongoose=require("mongoose")
const todoSchema=require("./models/todo")
const todo = require("./models/todo")
mongoose.connect(process.env.MONGOURL).then(()=>console.log("connected to mongo "))
app.use(cors())
app.use(express.json())
const PORT=process.env.PORT || 8000
app.post("/saveTodo",async(req,res)=>{
    const {todo,userId}=req.body
   await todoSchema.create({
    content:todo,
    userId:userId
   })
   res.json({
    status:"success"
   })
})
app.get("/todos",async(req,res)=>{
  
   const todos=await todoSchema.find()
   res.json({
    status:"success",
    todos:todos
   })
})
app.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params
   await todoSchema.deleteOne({
    _id:id
   })
   res.json({
    status:"success"
   })
})
app.listen(PORT,()=>console.log("the server is live at",PORT))