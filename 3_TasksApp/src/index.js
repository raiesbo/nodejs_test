const express = require("express")
require("./db/mongoose")
const User = require("./models/user")
const Task = require("./models/task");

const app = express()
const port = process.env.PORT || 3000

// To get responses in .json:
app.use(express.json())

// End Points for Fetsching resources:
app.get("/users", (req, res) => {
    User.find()
        .then((users) => res.send(users))
        .catch((e) => res.status(500).send())
})

app.get("/users/:id", (req, res) => {
    const _id = req.params.id

    User.findById(_id)
        .then((user) => {
            if(!user){
                res.status(404).send()
            } else {
                res.send(user)
            }
        })
        .catch(() => {})
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