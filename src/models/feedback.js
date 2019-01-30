import mongoose from 'mongoose'

const { Schema } = mongoose

const feedbackSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    principal: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        min: 1,
        max: 6,
        required: true
    },
    created_at: {
        type: Date,
        required: true
    }
})

const Feedback = mongoose.model('Feedback', feedbackSchema)
export { Feedback }