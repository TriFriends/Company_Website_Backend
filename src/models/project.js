import mongoose from 'mongoose'

const { Schema } = mongoose

const projectSchema = new Schema({
    site_title: {
        type: String,
        required: true
    },
    site_description: {
        type: String
    },
    site_url: {
        type: String
    },
    images: [
        {
            type: String
        }
    ],
    feedback: {
        type: Object
    }
})

const Project = mongoose.model('Project', projectSchema)
export { Project }