let serviceCategoryDataAcces = require('../data-acces/serviceCategoryDB/index.js');

const serviceCategoryController = (function serviceCategory() {

    const getAll = (req, res, next) => {
        serviceCategoryDataAcces.getAll()
        .then(data => {
            res.send(data);
        });
    };

    const findByProperty = (req, res, next) => {
        serviceCategoryDataAcces.findByProperty(req.params.prop, req.params.value)  
        .then(data => (data != null) ? res.send(data) : res.status(404).send({'message': "Not found"}));
    };

    const addServiceCategory = (req, res, next) => {
        serviceCategoryDataAcces.addServiceCategory(req.body)
          .then(data => {
            res.send(data);
          })
          .catch(next)
    };

    const deleteServiceCategoryById = (req, res, next) => {
        serviceCategoryDataAcces.deleteServiceCategoryById(req.params.id)
            .then(data => {
                res.send(data);
            })
            .catch(next)
    };

    return {
        getAll,
        findByProperty,
        addServiceCategory,
        deleteServiceCategoryById
    };
    
})();

module.exports = serviceCategoryController;

