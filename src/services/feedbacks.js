import FeedbackRepo from '../repositories/FeedbackRepo'

export const getAll = (req, res) => {
    FeedbackRepo.findAll()
        .then(result => {
            console.log(result)
            res.send(result)
        }).catch((err) => {
            res.status(500).send()
        })
}

export const getByProperty = (req, res) => {

}

export const post = (req, res) => {

}

export const deleteByProperty = (req, res) => {

}

export const putByProperty = (req, res) => {

}