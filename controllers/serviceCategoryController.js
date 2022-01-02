let serviceCategoryDataAcces = require('../data-acces/serviceCategoryDB/memory/index.js');

const serviceCategoryController = (function serviceCategory() {

    const index = (req, res, next) => {
        serviceCategoryDataAcces.listServiceCategories()
        .then(data => {
            res.send(data);
        });
    };

    return {
        index
    };
    
})();

module.exports = serviceCategoryController;

