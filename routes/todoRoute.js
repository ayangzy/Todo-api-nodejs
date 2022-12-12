const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todoController')

router
	.route('/')
	.post(todoController.createTodo)
	.get(todoController.getAllTodo)

router
  .route('/:id')
  .get(todoController.getSingleTodo)
  .patch(todoController.updateTodo)
  .delete(todoController.deleteTodo)

module.exports = router
