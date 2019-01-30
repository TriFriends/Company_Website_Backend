import { combainServices } from '../services'

export default (router) => {
    router.get('/', combainServices.main)
    return router
}