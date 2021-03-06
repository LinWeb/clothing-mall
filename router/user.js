var express = require('express');
var router = express.Router();
let userController = require('../controller/user')
let checkLogin = require('../middlewares/check_login')

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/info', userController.info)
router.post('/update_info', userController.update_info)
router.post('/update_follow', checkLogin, userController.update_follow)
router.get('/get_follows', checkLogin, userController.get_follows)
router.get('/get_fans', checkLogin, userController.get_fans)
module.exports = router;
