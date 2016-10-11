 const express = require('express')
 const router = express.Router()

// ROOT is /api/dogs

 router.post('/', (req, res) => {
   res.send('New dog created!\n')
 })

 // GET /api/dogs/poodles
 router.get('/poodles', (req, res) => {
   res.send('Poodles!!!')
 })

 router.get('/:id', (req, res) => {
   res.send(`Here is dog ${req.params.id}\n`)
 })

 router.get('/', (req, res) => {
   res.send('All dogs!\n')
 })



 module.exports = router
