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



const client = new MongoClient(process.env.MONGO_URI, {
  tls: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

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

    app.get('/health', (req, res) => {
      res.send('OK');
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











