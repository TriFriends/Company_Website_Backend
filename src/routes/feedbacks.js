import { feedbackServices } from '../services'

export default (router) => {
    router.get('/', feedbackServices.getAll)
    // router.get('/find', feedbackServices.getByProperty)
    // router.post('/add', feedbackServices.post)
    // router.put('/update', feedbackServices.putByProperty)
    // router.delete('/delete', feedbackServices.deleteByProperty)
    return router
}