import { Pricing } from '../models'

class PricingRepo {
    static findAll() {
        return Pricing.find({}, (err, pricings) => {
            if (err) {
                throw new Error(`Unknown error: ${err}`)
            }
            return pricings
        })
    }

    static insert(pricing) {

    }

    static findByProperty(property) {

    }

    static deleteByProperty(property) {

    }

    static updateByPropery(property) {

    }

}

export default PricingRepo