let serviceCategoryPrototype = require('./serviceCategory.js');

let premiumCategory = {
    init: function() {
        return Object.create(serviceCategoryPrototype).init("Premium", 30);
    },
    kmPrice: 45
};

module.exports = premiumCategory;