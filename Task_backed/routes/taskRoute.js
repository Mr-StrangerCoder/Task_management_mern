const express = require('express')
const taskController = require('../controllers/taskController')
const {auth,admin} = require('../middleware/auth')

const router = express.Router()

router.post('/create',auth, admin, taskController.createTask)
router.get('/getAllTasks', taskController.getAllTasks)


router.put("/updateTaskByAdmin/:task_ID", auth, admin, taskController.updateTaskByAdmin)
router.patch("/update_my_task/:taskID", auth,taskController.update_my_task)

router.delete('/deleteTask/:task_ID', auth, admin, taskController.deleteTask)

// gettask by id important 
// router.get('/getTask/:ID')



module.exports = router