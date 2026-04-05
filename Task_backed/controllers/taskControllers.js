const Task = require('../models/taskModel')

async function createTask(req, res) {
    try {

        console.log(req.body)
        newTask = await Task.create(req.body)
        console.log(newTask)
        res.status(200).send({ success: true, msg: "Task created successfully" })
    } catch (error) {
        res.status(500).send({ success: false, msg: "Server Error" })
    }
}

module.exports = {
    createTask
}