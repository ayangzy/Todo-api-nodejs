const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todoController')
const authenticateClient = require('../middleware/authenticateClient')

router
  .route('/')
  .post(authenticateClient, todoController.createTodo)
  .get(authenticateClient, todoController.getAllTodo)

router
  .route('/:id')
  .get(authenticateClient, todoController.getSingleTodo)
  .patch(authenticateClient, todoController.updateTodo)
  .delete(authenticateClient, todoController.deleteTodo)

module.exports = router
