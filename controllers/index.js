const router = require('express').Router()

router.use('/api', require('./userRoutes'))
router.use('/api', require('./commentRoutes'))
router.use('/api', require('./postRoutes'))

module.exports = router