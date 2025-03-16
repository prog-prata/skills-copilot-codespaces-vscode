// Create web server
// 1. Import express
const express = require('express');
// 2. Create express server
const app = express();
// 3. Create port
const port = 8080;
// 4. Create response
app.get('/', (req, res) => {
    res.send('Hello World');
});
// 5. Listen port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});