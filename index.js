  // index.js
const express = require('express')

const mongoose = require('mongoose')
const cors = require("cors")
const routes = require('./routes/ToDoRoute.js') 

require ('dotenv').config()

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())
 
mongoose.connect(`mongodb+srv://user:anmol1234@cluster0.z47kmkw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
    // You might want to add additional error handling here based on the error type
  });

app.use(routes.route)
 
 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
