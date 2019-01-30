export default class Feedback {
    constructor({ text, principal, rate }) {
        if (!text || !principal || !rate) {
            throw new Error(``)
        }
        this.text = text
        this.principal = principal
        this.rate = rate
        this.created_at = new Date()
    }

    toJSON() {
        return {
            text: this.text,
            principal: this.principal,
            rate: this.rate,
            created_at: this.created_at
        }
    }

}