const mongoose=require('mongoose');
const TodoSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})
const todos =mongoose.model('todos',TodoSchema);
module.exports=todos;
