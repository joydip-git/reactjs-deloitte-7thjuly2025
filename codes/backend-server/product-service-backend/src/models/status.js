class Status {
    constructor(message, count = 0, data = null) {
        this.message = message;
        this.data = data;
        this.count = count
    }
}
module.exports = { Status }