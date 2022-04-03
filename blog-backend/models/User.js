import mongoose from "mongoose"

const userSchema = mongoose.Schema({
  username: {
    required: [true, 'Please provide Username.'],
    unique: true,
    type: String,
  },
  email: {
    required: [true, 'Please provide Email.'],
    unique: true,
    type: String,
  },
  password: {
    required: [true, 'Please provide Password.'],
    type: String,
  },
}, {
  timestamps: true
})

export default mongoose.model('User', userSchema)