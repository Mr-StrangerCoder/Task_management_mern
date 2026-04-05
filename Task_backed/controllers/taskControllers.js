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

async function getAllTasks(req,res) {
    try {
        const allTasks = await Task.findAll()
        res.status(200).send({ success: true, allTasks:allTasks })

        } catch (error) {
        res.status(500).send({ success: false, msg: "Server Error" })

    }
}


module.exports = {
    createTask,
    getAllTasks
}

// {
//     "title":"Task 1",
//     "description":"rty rtyui ",
//     "priority":"high",
//     "status":"pending",
//     "startDate":"2026-10-29",
//     "endDate":"202-11-20",
// }