const express = require('express');
const router = express.Router();
const SESSION_COOKIE = 'session';
const SESSION_AGE = 1000 * 60 * 60;

const createTailor = require('../services/createTailor')

const path = require('path');
const frontEndPath = path.join(__dirname, '..', '..', 'public');
 
 router.post('/signin', (req, res) => { if (req.body.id === process.env.ADMIN_ID && req.body.password === process.env.ADMIN_PASS) {
     res.render('dashboard')
     res.cookie(SESSION_COOKIE, req.body.id, {
       httpOnly: true,
       maxAge: SESSION_AGE,
     });
   } else {
     const indexPath = path.join(frontEndPath, 'index.html');
     res.sendFile(indexPath);
   }
 })
 
 router.post('/createTailor', async (req, res) => {
   const { name, password, number} = req.body;

  try {
    await createTailor(name, password, number);
    res.redirect('/tailors'); // ✅ redirect here
  } catch (err) {
    console.error(err);
    res.status(500).send('Something went wrong');
  }
 })
 
 




module.exports = router;
