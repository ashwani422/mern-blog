import mongoose from "mongoose"
const { Schema } = mongoose


const postSchema = Schema({
  title: {
    required: [true, 'Please provide post title.'],
    type: String,
  },
  content: {
    required: [true, 'Please provide content.'],
    type: String,
  },
  userId: {
    required: [true, 'User reference needed.'],
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
}, {
  timestamps: true
})

export default mongoose.model('Post', postSchema)