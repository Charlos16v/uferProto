let serviceCategoryDataAcces = require('../data-acces/serviceCategoryDB/index.js');

const serviceCategoryController = (function serviceCategory() {

    const index = (req, res, next) => {
        serviceCategoryDataAcces.getAll()
        .then(data => {
            res.send(data);
        });
    };

    return {
        index
    };
    
})();

module.exports = serviceCategoryController;

