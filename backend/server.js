import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

import productRouters from "./routes/product.route.js";

dotenv.config();
const app = express();

// Connect to the database
connectDB();

// Middleware to parse JSON data
app.use(express.json()); 

app.use("/api/products",productRouters);
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log("Server started at http://localhost:"+ PORT);
});
