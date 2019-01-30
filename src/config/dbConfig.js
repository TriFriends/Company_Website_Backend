import mongoose from 'mongoose'
import {MONGODB_URI} from './variables'

export default () => {
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, (err) => {
        if (err) {
            console.log('[MONGODB] Can not connect to instance')
            console.log(err)
            process.exit(1)
        }
        console.log(`[MONGODB] Connected to instance on ${MONGODB_URI}`)
    });
}
