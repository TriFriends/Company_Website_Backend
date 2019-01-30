import mongoose from 'mongoose'

const { Schema } = mongoose

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        default: 'user'
    }
})

const User = mongoose.model('User', userSchema)
export { User }