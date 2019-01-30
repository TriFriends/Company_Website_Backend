import FeedbackRepo from '../repositories/FeedbackRepo'

export const main = async (req, res) => {
    const [feedbacks] = await Promise.all([
        FeedbackRepo.findAll()
    ])
    res.send({
        feedbacks
    })
}