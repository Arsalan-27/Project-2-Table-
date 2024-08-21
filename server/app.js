// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/ItemRoutes');
const userModel = require('./models/Items')

const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}))

// MongoDB connection

mongoose.connect("mongodb://127.0.0.1:27017/tablecontents", {
    
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error(err);
});

// Routes
app.use('/api/Items', itemRoutes);

app.listen(port, () => {
    console.log('http://localhost:'+4000);
});


