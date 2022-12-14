const Todo = require('../models/todoModel')
const { createdResponse, successResponse } = require('../utils/apiResponses')
const CustomError = require('../errors')

exports.createTodo = async (req, res) => {
  const todo = await Todo.findOne({ title: req.body.title })
  if (todo) {
    throw new CustomError.BadRequestError(
      'The todo you are tying to add already exist',
    )
  }

  req.body.userId = req.user.userId
  const newTodo = await Todo.create(req.body)
  createdResponse(res, 'Todo created successfully', newTodo)
}

exports.getAllTodo = async (req, res) => {
  const todos = await Todo.find({ userId: req.user.userId })
  successResponse(res, 'Todos retrieved successfully', todos)
}

exports.getSingleTodo = async (req, res) => {
  const todo = await Todo.findOne({ _id: req.params.id })
  if (!todo) {
    throw new CustomError.NotFoundError('Todo not found')
  }
  successResponse(res, 'Todo retreived successfully', todo)
}

exports.updateTodo = async (req, res) => {
  const todo = await Todo.findOne({ _id: req.params.id })
  if (!todo) {
    throw new CustomError.NotFoundError('Todo not found')
  }

  const updateTodo = await Todo.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    {
      new: true,
      runValidators: true,
    },
  )
  successResponse(res, 'Todo updated successfully', updateTodo)
}

exports.deleteTodo = async (req, res) => {
  const todo = await Todo.findOne({ _id: req.params.id })
  if (!todo) {
    throw new CustomError.NotFoundError('Todo not found')
  }

  await Todo.findOneAndDelete({ _id: req.params.id })
  successResponse(res, 'Todo deleted successfully')
}
