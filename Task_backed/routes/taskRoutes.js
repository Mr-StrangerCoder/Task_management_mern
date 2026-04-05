const express = require('express')
const taskController = require('../controllers/taskController')
const {auth,admin} = require('../middleware/auth')

const router = express.Router()

router.post('/create',auth, admin, taskController.createTask)
router.get('/getAllTasks', taskController.getAllTasks)

// update task 
// delete task 
// gettask by id 
// router.get('/getTask/:ID')



module.exports = router