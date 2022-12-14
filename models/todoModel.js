const mongoose = require('mongoose')

const TodoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, 'Please provide a title'],
      maxlength: [100, 'Title can not be more than 100 characters'],
    },
    description: {
      type: String,
      required: [true, 'Please provide a description'],
      maxlength: [1000, 'Description can not be more than 1000 characters'],
    },
    userId: {
      type: Number,
      required: [true, 'please provide a userId'],
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Todo', TodoSchema)
