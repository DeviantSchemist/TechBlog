const router = require('express').Router()

router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./commentRoutes.js'))
router.use('/api', require('./postRoutes.js'))

//send this to user if route is incorrect
// router.use((req, res) => {
//   res.send('<h1>Wrong Route!</h1>')
// })

module.exports = router