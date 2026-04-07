const express = require('express')
const userController = require('../controllers/userController')
const {auth} = require('../middleware/auth')
const router = express.Router()

router.post('/register',userController.register)
router.post('/login',userController.login) 
router.get('/getUserInfo',auth, userController.getUserInfo)

// router.patch('/updateUser/:user_Id', auth, userController.updateUser)

//router.get('/getAllUsers, userController.getAllUsers) only name




module.exports =router