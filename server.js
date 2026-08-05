const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>🚀 Application is Running Live via Jenkins CI/CD Pipeline!</h1>');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
