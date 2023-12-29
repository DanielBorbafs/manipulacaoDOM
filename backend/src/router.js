const express = require('express');
const router = express.Router()
const userController = require('./controllers/usersController')
const usersMiddleware = require('./middlewares/usersMiddleware')

router.get('/users', userController.getAll)
router.post('/users', usersMiddleware.validateBody, userController.createUser)

module.exports = router;