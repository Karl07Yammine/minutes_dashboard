const express = require('express');
const router = express.Router();
const SESSION_COOKIE = 'session';

const path = require('path');
const frontEndPath = path.join(__dirname, '..', '..', 'public');

const getUsers = require('../services/getUsers');
const getTailors = require('../services/getTailors')
const getServices = require('../services/getServices')
router.get('/', (req, res) => {
   if (req.cookies[SESSION_COOKIE]){
      res.render('dashboard')
   }else {
      const indexPath = path.join(frontEndPath, 'index.html');
      res.sendFile(indexPath);
   }
 });


 router.get('/getTailors', async (req, res) => {
  try {
    const result = await getTailors();
    res.json(result);
  } catch (err) {
    console.error('Error in /getTailors:', err); // 👈 Full error
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

router.get('/getUsers', async (req, res) => {
  try {
    const result = await getUsers();
    res.json(result.users);
  } catch (err) {
    console.error('Error in /getUsers:', err); // 👈 Full error
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

router.get('/getServices', async (req, res) => {

  try {
    const result = await getServices();
    res.json(result);
  } catch (err) {
    console.error('Error in /getServices:', err); // 👈 Full error
    res.status(500).json({ error: 'Failed to fetch services' });
  }
});

 const allowedPages = ['dashboard', 'tailors', 'users', 'bookings', 'map', 'revenue', 'receipts', 'services'];
 router.get('/:page', (req, res) => {
   const page = req.params.page;
 
   if (!allowedPages.includes(page)) {
     return res.status(404).send('Page not found');
   }
 
   if (req.cookies[SESSION_COOKIE]) {
     res.render(page);
   } else {
     const indexPath = path.join(frontEndPath, 'index.html');
     res.sendFile(indexPath);
   }
 });


 

module.exports = router;
