const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  question: {
    type: String,
    required: true
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
      },
      vote: {
        type: Number,
        default: 0
      }
    }
  ],
  likestotal: {
    type: Number,
    default: 0
  },
  num: {
    type: Number,
    default: 0
  },
  answers: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      },
      answer: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('question', QuestionSchema);
