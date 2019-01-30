import mongoose from 'mongoose'

const { Schema } = mongoose

const orderSchema = new Schema({
    firstname: {},
    lastname: {},
    options: [{
        type: Object
    }],
    comment: {
        type: String
    }
})

const Order = mongoose.model('Order', orderSchema)
export { Order }