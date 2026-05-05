import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './src/config/db.js';

import authRouter from './src/routes/auth.js';
import userRoutes from './src/routes/users.js';
import productRouter from './src/routes/product.js';
import orderRouter from './src/routes/order.js';
import shopRouter from './src/routes/shop.js';
import notificationRouter from './src/routes/notification.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ==================== MIDDLEWARE ====================
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ==================== ROUTES ====================
app.use('/api/auth', authRouter);
app.use('/api/users', userRoutes);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.use('/api/shops', shopRouter);
app.use('/api/notifications', notificationRouter);

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Backend is running' });
});

app.get('/', (req, res) => {
  res.send('✅ E-Comerci Backend is Running!');
});

// ==================== START SERVER ====================
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connected successfully');

    await sequelize.sync({ alter: true });
    console.log('✅ Models synced successfully');

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
      console.log(`📡 Try: http://localhost:${PORT}/api/health`);
    });
  } catch (err) {
    console.error('❌ Failed to start server:', err.message);
  }
};

startServer();