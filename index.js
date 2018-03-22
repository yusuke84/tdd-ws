class ClosedRange {

    constructor(lower, upper) {
        this.lowerEndpoint = lower;
        this.upperEndpoint = upper;

        if (lower > upper) {
            throw new Error('上端点より下端点が大きい');
        }
    }

    getLowerEndPoint() {
        return this.lowerEndpoint;
    }

    getUpperEndPoint() {
        return this.upperEndpoint;
    }    

    includes(value) {
        return this.lowerEndpoint <= value && value <= this.upperEndpoint;
    }
}
module.exports = ClosedRange;