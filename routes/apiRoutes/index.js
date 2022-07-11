const router = require('express').Router()
const notesRoute = require('../apiRoutes/dbRoutes')

router.use(notesRoute)

module.exports = router