const express = require('express');
const router= express.Router();

const {gettasks, taskbyid, addtask,updatetask, deletetask}=require('../service/Taskcontroller');

router.get("/",gettasks)
router.get("/:id",taskbyid)
router.post("/",addtask)
router.put("/:id",updatetask)
router.delete("/:id",deletetask)



module.exports= router;