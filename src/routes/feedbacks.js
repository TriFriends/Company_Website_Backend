import { feedbackServices } from '../services'

export default (router) => {
    router.get('/', feedbackServices.getAll)
    router.post('/add', feedbackServices.post)
    router.put('/update/:id', feedbackServices.putById)
    router.delete('/delete/:id', feedbackServices.deleteById)
    return router
}