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
    db.collection("users").updateOne({
        _id: new ObjectID("5fb79a61cd49582dc85ce149")
    }, {
        $inc: {
            age: 20
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    db.collection("tasks").updateMany(
        {completed: true},
        {
            $set: {
                completed: false
            }
        }).then((result) => {
            console.log(result.modifiedCount)
        }).catch((error) => {
            console.log(error)
        })
        
       db.collection("users").deleteMany({
           age: 30
       }).then((result) => {
           console.log(result.deletedCount)
       }).catch((error) => {
           console.log(error)
       })
       */

       db.collection("tasks").deleteOne({ _id: new ObjectID("5fb7a7963a705f2cc8ded2eb")})
        .then(result => console.log(result.deletedCount))
        .catch(error => console.log(error))
})