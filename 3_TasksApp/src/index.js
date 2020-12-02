const express = require("express")
require("./db/mongoose")
const userRoute = require("./routers/user")
const taskRoute = require("./routers/task")


// Express settings
const app = express()
const port = process.env.PORT || 3000


// To get responses in .json:
app.use(express.json())
app.use(userRoute)
app.use(taskRoute)



app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})