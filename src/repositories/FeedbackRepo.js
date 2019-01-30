import { Feedback } from '../models'

class FeedbackRepo {
    static findAll() {
        return Feedback.find({}, (err, res) => {
            if (err) {
                console.log(err)
                Promise.reject()
            }
            Promise.resolve(res)
        })
    }

    static count() {
        return Feedback.countDocuments((err, count) => {
            return count
        })
    }

    static insert(instance) {
        return new Promise((resolve, reject) => {
            Feedback.create(instance, (err, ok) => {
                if (err) {
                    console.log(err)
                    reject(err)
                }
                resolve(ok)
            })
        })
    }

    static findByProperty(property) {

    }

    static deleteByProperty(property) {

    }

    static updateByPropery(property) {

    }

}

export default FeedbackRepo