let serviceCategoryPrototype = require('../serviceCategory.js');

let comfortCategory = {
    init: function() {
        return Object.create(serviceCategoryPrototype).init("Comfort", 25);
    },
    kmPrice: 35
};

module.exports = comfortCategory;;