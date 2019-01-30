import mongoose from 'mongoose'

const { Schema } = mongoose

const pricingSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    discount: {
        type: String
    },
    dependsOn: {
        type: Array
    }
})

const Pricing = mongoose.model('Pricing', pricingSchema)
export { Pricing }