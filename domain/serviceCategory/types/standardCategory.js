let serviceCategoryPrototype = require('../serviceCategory.js');

let standardCategory = {
    init: function() {
        return Object.create(serviceCategoryPrototype).init("Standard", 10, 7);
    }
};

module.exports = standardCategory;
