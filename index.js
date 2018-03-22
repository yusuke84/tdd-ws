class ClosedRange {

    constructor(lower, upper) {
        this.lowerEndpoint = lower;
        this.upperEndpoint = upper;
    }

    getLowerEndPoint() {
        return this.lowerEndpoint;
    }

    getUpperEndPoint() {
        return this.upperEndpoint;
    }    
    
}
module.exports = ClosedRange;