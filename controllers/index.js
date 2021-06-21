const router = require('express').Router()

router.use('/api', require('./userRoutes'))
router.use('/api', require('./commentRoutes'))
router.use('/api', require('./postRoutes'))

// send this to user if route is incorrect
router.use((req, res) => {
  res.send('<h1>Wrong Route!</h1>')
})

module.exports = router