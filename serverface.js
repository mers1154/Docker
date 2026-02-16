const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Раздаем статические файлы
app.use(express.static(path.join(__dirname, 'public')));

// HTML страница
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index1.html'));
});

// API endpoint
app.get('/api/hello', (req, res) => {
    res.json({ 
        message: 'Hello from Docker!',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development'
    });
});

// Страница с информацией о Docker
app.get('/docker-info', (req, res) => {
    res.json({
        nodeVersion: process.version,
        platform: process.platform,
        memory: process.memoryUsage(),
        uptime: process.uptime()
    });
});

app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
    console.log(`📁 Static files from: ${__dirname}/public`);
});
