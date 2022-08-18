const mongoose= require('mongoose')

const taskschema= new mongoose.Schema({
    taskname:{
        type:String,
        required:true
    },
    taskdesc:{
        type:String,
        required:true
    },
    completiondate:{
        type:Date,
        
        default:Date.now
    },
    status:{
        type:Boolean,
        default:false
    }
});

module.exports= mongoose.model('Task',taskschema)