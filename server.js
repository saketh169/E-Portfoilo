require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to set current page for navigation highlighting
app.use((req, res, next) => {
    const path = req.path.toLowerCase();
    let currentPage = 'home'; // Default to home
    if (path.startsWith('/education')) currentPage = 'education';
    else if (path.startsWith('/skills')) currentPage = 'skills';
    else if (path.startsWith('/experience')) currentPage = 'experience';
    else if (path.startsWith('/achievements')) currentPage = 'achievements';
    else if (path.startsWith('/contact')) currentPage = 'contact';
    res.locals.currentPage = currentPage;
    next();
});


// Routes
app.get('/', (req, res) => {
    res.render('index', { title: 'My E-Portfolio - Home', currentPage: res.locals.currentPage });
});

app.get('/education', (req, res) => {
    res.render('education', { title: 'My E-Portfolio - Education', currentPage: res.locals.currentPage });
});

app.get('/skills', (req, res) => {
    res.render('skills', { title: 'My E-Portfolio - Skills', currentPage: res.locals.currentPage });
});

app.get('/experience', (req, res) => {
    res.render('experience', { title: 'My E-Portfolio - Experience & Projects', currentPage: res.locals.currentPage });
});

app.get('/achievements', (req, res) => {
    res.render('achievements', { title: 'My E-Portfolio - Achievements', currentPage: res.locals.currentPage });
});

app.get('/contact', (req, res) => {
    res.render('contact', { title: 'My E-Portfolio - Contact', currentPage: res.locals.currentPage });
});

// Start server
const PORT = process.env.PORT || 6400;

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});