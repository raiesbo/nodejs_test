require("../src/db/mongoose")
const User = require("../src/models/user")

const id = "5fbe2b994aaff621b8255a65"
/*
User.findByIdAndUpdate( id , { age: 0 })
    .then((user) => {
        console.log(user)
        return User.countDocuments({ age: 0 })
    })
    .then(result => console.log(result))
    .catch(error => console.log(error))

*/
// Async function
const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount(id, 5)
    .then(count => console.log(count))
    .catch(error =>  console.log(error))