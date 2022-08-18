const mongoose= require('mongoose')

const connectdb=()=>{

    mongoose.connect("mongodb://localhost:27017/tasks",{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("db connected")
    });
};

module.exports = connectdb;
