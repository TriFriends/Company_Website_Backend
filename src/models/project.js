import mongoose from 'mongoose'

const { Schema } = mongoose

const projectSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    author: {
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

const Project = mongoose.model('Project', projectSchema)
export { Project, projectSchema }