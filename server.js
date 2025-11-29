const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8001;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.send('Hello, world');
});

// Routes
const userRoutes = require('./routes/user.routes');
app.use('/api/users', userRoutes);

// Tambahkan products routes
const productRoutes = require('./routes/products.routes');
app.use('/api/products', productRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);

  require('dotenv').config(); 

  const authRoutes = require("./routes/auth.routes");
  app.use('/api/auth', authRoutes);
});
