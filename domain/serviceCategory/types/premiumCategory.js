let serviceCategoryPrototype = require('../serviceCategory.js');

let premiumCategory = {
    init: function() {
        return Object.create(serviceCategoryPrototype).init("Premium", 10, 40, 20);
    }
};

module.exports = premiumCategory;