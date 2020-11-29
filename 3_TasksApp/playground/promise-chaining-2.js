require("../src/db/mongoose")
const Task = require("../src/models/task")

const id = "5fc0f6d49b77922d70f839b7"
/*
Task.findByIdAndDelete(id)
    .then((task) => {
        console.log(task)
        return Task.countDocuments({ completed: false })
    })
    .then(result => console.log(result))
    .catch(error => console.log(error))
*/

// Async function
const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })

    return count
}

deleteTaskAndCount(id)
    .then(count => console.log(count))
    .catch(error => console.log(error))