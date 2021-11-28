let serviceCategoryPrototype = require('../serviceCategory.js');

let standardCategory = {
    init: function() {
        return Object.create(serviceCategoryPrototype).init("Standard", 10, 15);
    },
    kmPrice: 20
};

module.exports = standardCategory;
