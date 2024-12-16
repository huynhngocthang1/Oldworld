const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

// Middleware
app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());

// Routes
const categoryRoutes = require('./routes/categories');
app.use('/api/category', categoryRoutes);

// Kết nối cơ sở dữ liệu
mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => {
        console.log('Kết nối cơ sở dữ liệu thành công!');

        // Server chỉ khởi động khi kết nối MongoDB thành công
        const PORT = process.env.PORT || 4000;
        app.listen(PORT, () => {
            console.log(`Server đang chạy tại http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('Lỗi kết nối cơ sở dữ liệu:', err.message);
    });

