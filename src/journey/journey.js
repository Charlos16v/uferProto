const { mod } = require("prelude-ls");

let journey = {
    init: function(startPoint, endPoint, distance) {
        this.startPoint = startPoint;
        this.endPoint = endPoint;
        this.distance = distance;

        return this;
    },

    getStartPoint: function() {
        return(this.startPoint);
    },
    getEndPoint: function() {
        return(this.endPoint);
    },
    getDistance: function() {
        return(this.distance);
    },
};

module.exports = journey;