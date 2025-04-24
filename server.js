const express = require('express');
const path = require('path');  // Use path module to create file paths
const app = express();
const PORT = 3000;

// Serve static files (e.g., CSS, JS) from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));  // Update this line

// Parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));  // Use path.join() for cross-platform compatibility
});

app.post('/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    console.log('Contact form submission:', { name, email, subject, message });
    res.json({ status: 'success', message: 'Form submitted successfully!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
