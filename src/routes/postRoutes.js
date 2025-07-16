const express = require('express');
const router = express.Router();
const SESSION_COOKIE = 'session';
const SESSION_AGE = 1000 * 60 * 60;

const createTailor = require('../services/createTailor')
const deleteTailor = require('../services/deleteTailor')
const createService = require('../services/createService')
const deleteService = require('../services/deleteService')
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

 router.post('/deleteTailor', async (req, res) => {
   const { id } = req.body;
   await deleteTailor(id);
   res.redirect('/tailors');
 })
 
 router.post('/createService', async (req, res) => {
   const { service_name, price } = req.body;
   console.log(service_name, price);
   await createService(service_name, price);
   res.redirect('/services');
 })
 
 router.post('/deleteService', async (req, res) => {
   const { id } = req.body;
   await deleteService(id);
   res.redirect('/services');
 })



module.exports = router;
