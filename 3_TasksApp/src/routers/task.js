const express = require('express');
const router = express.Router();
const Task = require("../models/task")


router.get("/tasks", async (req, res) => {
    try {
        const tasks = await Task.find()
        res.send(tasks)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get("/tasks/:id", async (req, res) => {
    const _id = req.params.id

    try {
        const task = await Task.findById(_id)
        if (!task) {
            res.status(404).send()
        } else {
            res.send(task)
        }
    } catch (e) {
        res.status(500).send(e)
    }
})


router.delete("/tasks/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task) {
            res.status(404).send()
        } else {
            res.send(task)
        }
    } catch (e) {
        res.status(500).send(e)
    }
})



router.post("/tasks", (req, res) =>{
    const task = new Task(req.body)

    task.save()
        .then(() => res.status(201).send(task))
        .catch(error => res.status(400).send(error))
})

// Tasks update
router.patch("/tasks/:id", async (req, res) => {
    const _id = req.params.id
    const updates = Object.keys(req.body)
    const allowedUpdates = ["description", "completed"]
    const idValidOperation = updates.every(update => allowedUpdates.includes(update))

    if (!idValidOperation) {
        res.status(400).send({error: "Invalid updates"})
    }

    try {
        const task = await Task.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true})
        if (!task) {
            res.status(404).send()
        } else {
            res.send(task)
        }
    } catch (e) {
        res.status(500).send(e)
    }

})


module.exports = router;