const express = require('express')
const app = express()
const port = 3001

const dbconnect= require("./configs/databaseconf")


dbconnect();

//for making json vals
app.use(express.json());


app.use('/api/task',require('./Router/Taskrouter'))


app.listen(port,()=>{
    console.log(`Server is at the port ${port}`);
});




