const mongoose = require("mongoose");
const validator = require("validator")


const connectionURL = "mongodb://127.0.0.1:27017/task-manager-api"
// const databaseName = "task-manager" // this is already icluded within the URL

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const User =  mongoose.model("user", {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error("Email not valid")
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0) {
                throw new Error("Age must be a positive number")
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if(value.toLowerCase().includes("password")){
                throw new Error("Password cannot contain -password-")
            }
        }
    }
})
/*
const me = new User({
    name: "Anton",
    age: 40,
    email: "NoEmailolo@gmail.com",
    password: "Password"
})


me.save()
    .then(result => console.log(result))
    .catch(error => console.log("Error: ",error))
    
*/
const Task = mongoose.model("task", {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const firstTask = new Task({
    description: "          Eat lunch",
    //completed: false
});

firstTask.save()
    .then(result => console.log(result))
    .catch(error => console.log(error))
    