const express = require("express");
const router = new express.Router();
const User = require("../models/user")


// End Points for Fetsching resources:
router.get("/users", async (req, res) => {
    try{   
        const users = await User.find()
        res.send(users)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get("/users/:id", async (req, res) => {
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

// Users Update
router.patch("/users/:id", async (req, res) => {
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

// End points DELETE
router.delete("/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if (!user) {
            res.status(404).send()
        } else {
            res.send(user)
        }
    } catch (e) {
        res.status(500).send(e)
    }

})

// End point for Posting resources:
router.post("/users", (req, res) => {
    const user = new User(req.body)

    user.save()
        .then(() => res.status(201).send(user))
        .catch(error => res.status(400).send(error))
})


module.exports = router;