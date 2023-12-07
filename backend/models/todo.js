const mongoose=require('mongoose')
const todo=mongoose.Schema({
    content:String,
    userId:mongoose.Schema.ObjectId
})
module.exports=mongoose.model("todos",todo)