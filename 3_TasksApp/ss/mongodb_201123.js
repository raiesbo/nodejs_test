// CRUD create red update delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID, ObjectId } = require("mongodb");

/*
const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())
*/

const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "task-manager"

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log("Unable to connect to database")
    }

    const db = client.db(databaseName)
/*
    db.collection("users").findOne({ _id: new ObjectID("5fb79a61cd49582dc85ce149") }, (error, user) => {
        if (error) {
            console.log('Unable to fetch data.')
        }

        console.log(user)
    })

    db.collection("users").find({ age: 30 }).toArray((error, users) => {
        console.log(users)
    })
*/
    db.collection("tasks").findOne({
        _id: ObjectId("5fb7a7963a705f2cc8ded2eb")
    }, (error, task) => {
        if (error) {
            console.log(error)
        } else {
            console.log(task)
        }
    })

    db.collection("tasks").find({ completed: false }).toArray((error, tasks) => {
        if (error) {
            console.log("Error found")
        } else {
            console.log(tasks)
        }
    })

    /*
    db.collection("users").insertOne({
        _id: id,
        name: "Sam",
        age: 50
    }, (error, result) => {
        if (error) {
            return console.log("unable to insert user")
        }

        console.log(result.ops)
    })

    /*
   db.collection("users").insertMany([
       {
           name: "Jen",
           age: 30
       }, {
           name: "Gunther",
           age: 35
       }
   ], (error, result) => {
       if(error) {
           return console.log("Unable to inter documents!")
       }

       console.log(result.ops)
   })

   
   db.collection("tasks").insertMany([
       {
           description: "Paying the bills",
           completed: false
       }, {
           description: "Presents for the family",
           completed: false
       }, {
           description: "Shopping fruit",
           completed: false
       }
   ], (error, results) => {
        if (error) {
            return console.log(error)
        }
        
        console.log(results.ops)
   })
   */
})