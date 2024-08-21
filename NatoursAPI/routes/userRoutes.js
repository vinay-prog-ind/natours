const express = require('express');

const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();
router.route('/login').post(authController.login);
router.route('/signup').post(authController.signup);
router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);
router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.editUser)
  .delete(userController.deleteUser);

module.exports = router;