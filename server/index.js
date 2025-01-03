// Load environment variables
require('dotenv').config();

// Import dependencies
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Initialize Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON requests

// Connect to MongoDB
connectDB();

// import routes
const productRouters = require('./api/routes/productRoutes');
const cartRouters = require('./api/routes/cartRoutes');
app.use('/carts', cartRouters);
app.use('/products', productRouters);

// Export the app
module.exports = app;
