const Task= require('../model/Task');

const gettasks=async(req,res)=>{
    try{
        const tasks= await Task.find();
        
        res.status(200).send({data:tasks})


    }catch{
       res.status(404).send({
        error:"Task not found",
       })
    }
};



const addtask=async(req,res)=>{
    try{
        const task= await Task.create(req.body);
        task.completiondate= new Date(req.body.completiondate)
    
        
        res.status(200).send({data:task})


    }catch{
        res.status(404).send({
         error:"add failed",
        })
     }
};


const taskbyid=async(req,res)=>{
    try{

        const task= await Task.findById(req.params.id);
        res.status(200).send({data:task})


    }catch{
       res.status(404).send({
        error:"Task not found",
       })
    }
};


const updatetask=async(req,res)=>{
    try{
        const taskfind = await Task.findById(req.params.id)
        Object.assign(taskfind,req.body)
        await taskfind.save();
        res.status(200).send({data : taskfind})
    }catch{
        res.status(404).send({
         error:"Task cant be found",
        })
     }
};


const deletetask=async(req,res)=>{
    try{
        const taskfind = await Task.findById(req.params.id)
        
        await taskfind.remove();
        res.status(200).send({data : true})
    }catch{
        res.status(404).send({
         error:"Task cant be found",
        })
     }
};






module.exports= {
    gettasks,
    addtask,
    taskbyid,
    updatetask,
    deletetask
}
