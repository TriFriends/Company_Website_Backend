import FeedbackRepo from '../repositories/FeedbackRepo'
import Feedback from '../dao/Feedback'

export function feedbackExamples() {
    FeedbackRepo.count().then(count => {
        console.log(count)
        if (count < 2) {
            FeedbackRepo.insert(
                new Feedback({
                    text: 'asd',
                    principal: 'Marcin Warzybok',
                    rate: 5
                }).toJSON()
            ).then(result => {
                console.log(result)
            }).catch(rr => {
                console.log(rr)
            })
        }
    })
}