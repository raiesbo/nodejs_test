const express = require("express")
require("./db/mongoose")
const User = require("./models/user")
const Task = require("./models/task");


// Express settings
const app = express()
const port = process.env.PORT || 3000


// To get responses in .json:
app.use(express.json())


// End Points for Fetsching resources:
app.get("/users", async (req, res) => {
    try{   
        const users = await User.find()
        res.send(users)
    } catch (e) {
        res.status(500).send(e)
    }
})

app.get("/users/:id", async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findById(_id)
        if(!user){
            res.status(404).send()
        } else {
            res.send(user)
        }
    } catch (e) {
        res.status(500).send(e)
    }
})

app.patch("/users/:id", async (req, res) => {
    const _id = req.params.id
    const updates  = Object.keys(req.body)
    const allowedUpdates = ["name", "email", "password", "age"]
    const idValidOperation = updates.every(update =>  allowedUpdates.includes(update))

    if (!idValidOperation) {
        res.status(400).send({ error: 'Invalid updates'})
    }

    try {
        const user = await User.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true})
        if(!user){
            res.status(404).send()
        } else {
            res.send(user)
        }
    }catch (e) {
        res.status(500).send(e)
    }
})

app.get("/tasks", async (req, res) => {
    try {
        const tasks = await Task.find()
        res.send(tasks)
    } catch (e) {
        res.status(500).send(e)
    }
})

app.get("/tasks/:id", async (req, res) => {
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


// End point for Posting resources:
app.post("/users", (req, res) => {
    const user = new User(req.body)

    user.save()
        .then(() => res.status(201).send(user))
        .catch(error => res.status(400).send(error))
})

app.post("/tasks", (req, res) =>{
    const task = new Task(req.body)

    task.save()
        .then(() => res.status(201).send(task))
        .catch(error => res.status(400).send(error))
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})