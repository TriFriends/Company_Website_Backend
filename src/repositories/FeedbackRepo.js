import { Feedback } from '../models'

class FeedbackRepo {
    static findAll() {
        return Feedback.find({}, (err, res) => {
            if (err) {
                console.log(err)
                return Promise.reject(err)
            }
            return Promise.resolve(res)
        })
    }

    static count() {
        return Feedback.countDocuments((err, count) => {
            return count
        })
    }

    static insert(instance) {
        return Feedback.create(instance)
            .then(result => {
                console.log(result, '23')
                return Promise.resolve(result)
            }).catch(err => {
                console.log(err)
                return Promise.reject()
            })
    }
    
    static deleteById(_id) {
        return Feedback.deleteOne({ _id }, (err) => {
            if (err) {
                console.log(err)
                return Promise.reject(err)
            }
            return Promise.resolve()
        })
    }

    static updateById({ _id, feedback }) {
        return Feedback.update({ _id }, feedback, (err) => {
            if (err) {
                console.log(err)
                return Promise.reject(err)
            }
            return Promise.resolve()
        })
    }

}

export default FeedbackRepo