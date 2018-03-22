class ClosedRange {

    constructor(lower, upper) {
        this.lowerEndpoint = lower;
        this.upperEndpoint = upper;

        if (lower > upper) {
            throw new Error('上端点より下端点が大きい');
        }
    }

    getLowerEndpoint() {
        return this.lowerEndpoint;
    }

    getUpperEndpoint() {
        return this.upperEndpoint;
    }    

    includes(value) {
        return this.lowerEndpoint <= value && value <= this.upperEndpoint;
    }

    toString() {
        const array = [this.lowerEndpoint,this.upperEndpoint];
        return JSON.stringify(array);
    }

    isEqual(cr) {
        const isLowerEqual = this.lowerEndpoint === cr.getLowerEndpoint();
        const isUpperEqual = this.upperEndpoint === cr.getUpperEndpoint();
        return isLowerEqual && isUpperEqual;
    }
}
module.exports = ClosedRange;