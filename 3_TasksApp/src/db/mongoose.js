const mongoose = require("mongoose");


const connectionURL = "mongodb://127.0.0.1:27017/task-manager-api"
// const databaseName = "task-manager" // this is already icluded within the URL

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
