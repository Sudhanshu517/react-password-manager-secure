const express = require('express');
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');
const bodyparser = require('body-parser');
const cors = require('cors');

// Load .env variables
dotenv.config();

// App & Middleware
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyparser.json());
app.use(cors());

// MongoDB Setup
const client = new MongoClient(process.env.MONGO_URI);
const dbName = process.env.DB_NAME;

let db; // We'll assign this after connection

async function startServer() {
  try {
    // Connect to MongoDB Atlas
    await client.connect();
    console.log("✅ Connected to MongoDB Atlas");

    db = client.db(dbName);
    const collection = db.collection('passwords');

    // Routes
    app.get('/', async (req, res) => {
      const findResult = await collection.find({}).toArray();
      res.json(findResult);
    });

    app.post('/', async (req, res) => {
      const password = req.body;
      const insertResult = await collection.insertOne(password);
      res.send({ success: true, result: insertResult });
    });

    app.delete('/', async (req, res) => {
      const { id } = req.body;
      const deleteResult = await collection.deleteOne({ id });
      res.send({ success: true, result: deleteResult });
    });

    // Start Express Server
    app.listen(port, () => {
      console.log(`🚀 Server running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB Atlas:", err);
    process.exit(1); // Exit with failure
  }
}

startServer();











// const express = require('express')
// const dotenv = require('dotenv')
// const { MongoClient } = require('mongodb'); 
// const bodyparser = require('body-parser')
// const cors = require('cors')

// dotenv.config()


// // Connecting to the MongoDB Client
// const url = process.env.MONGO_URI;
// const client = new MongoClient(url);
// client.connect();

// // App & Database
// const dbName = process.env.DB_NAME 
// const app = express()
// const port = 3000 

// // Middleware
// app.use(bodyparser.json())
// app.use(cors())


// // Get all the passwords
// app.get('/', async (req, res) => {
//     const db = client.db(dbName);
//     const collection = db.collection('passwords');
//     const findResult = await collection.find({}).toArray();
//     res.json(findResult)
// })

// // Save a password
// app.post('/', async (req, res) => { 
//     const password = req.body
//     const db = client.db(dbName);
//     const collection = db.collection('passwords');
//     const findResult = await collection.insertOne(password);
//     res.send({success: true, result: findResult})
// })

// // Delete a password by id
// app.delete('/', async (req, res) => { 
//     const password = req.body
//     const db = client.db(dbName);
//     const collection = db.collection('passwords');
//     const findResult = await collection.deleteOne(password);
//     res.send({success: true, result: findResult})
// })


// app.listen(port, () => {
//     console.log(`Example app listening on  http://localhost:${port}`)
// })