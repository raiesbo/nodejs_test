// CRUD create red update delete
const ObjectID = mongodb.ObjectID
const mongoose = require("mongoose")

const { MongoClient, ObjectID, ObjectId } = require("mongodb");


const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "task-manager"

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log("Unable to connect to database")
    }

    const db = client.db(databaseName)


       db.collection("tasks").deleteOne({ _id: new ObjectID("5fb7a7963a705f2cc8ded2eb")})
        .then(result => console.log(result.deletedCount))
        .catch(error => console.log(error))
})