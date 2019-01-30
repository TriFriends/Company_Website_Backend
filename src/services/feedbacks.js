import FeedbackRepo from '../repositories/FeedbackRepo'
import Feedback from '../dao/Feedback';

export const getAll = (req, res) => {
    FeedbackRepo.findAll()
        .then(result => {
            console.log(result)
            res.send(result)
        }).catch((err) => {
            res.status(500).send()
        })
}

export const post = (req, res) => {
    const { feedback } = req.body
    FeedbackRepo.insert(new Feedback(feedback).toJSON())
        .then(result => {
            res.send(result)
        }).catch(err => {
            res.status(400).send()
        })
}

export const deleteById = (req, res) => {
    const { id } = req.params
    FeedbackRepo.deleteById(id)
        .then(() => {
            res.send()
        }).catch(err => {
            res.status(404).send()
        })
}

export const putById = (req, res) => {
    const { id } = req.params
    const { feedback } = req.body
    FeedbackRepo.updateById({ _id: id, feedback })
        .then(() => {
            res.send()
        }).catch(err => {
            res.status(400).send()
        })
}