let serviceCategoryPrototype = require('../serviceCategory.js');

let comfortCategory = {
    init: function() {
        return Object.create(serviceCategoryPrototype).init("Comfort", 15, 25, 12);
    }
};

module.exports = comfortCategory;;