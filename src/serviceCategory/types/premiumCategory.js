let serviceCategoryPrototype = require('../serviceCategory.js');

let premiumCategory = {
    init: function() {
        return Object.create(serviceCategoryPrototype).init("Premium", 10, 40);
    },
    kmPrice: 45
};

module.exports = premiumCategory;