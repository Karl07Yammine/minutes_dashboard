const express = require('express');
require('dotenv').config();
const checkAppwriteHealth = require('./src/services/health.js');
const cookieParser = require('cookie-parser');
const path = require('path');


const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const getRoutes = require('./src/routes/getRoutes.js');
const postRoutes = require('./src/routes/postRoutes.js');
app.use('/', getRoutes);
app.use('/', postRoutes);


// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});