const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const itemRoutes = require('./routes/itemRoutes');
const limiter  = require('./validators/rateLimiter.js');
const morgan = require('morgan');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(limiter);
app.use(morgan("dev"));

// Example REST API with basic GET and POST operations. 
app.use('/api/items', itemRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
