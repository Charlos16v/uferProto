let serviceCategoryDataAcces = require('../data-access/serviceCategoryDB/index.js');

const serviceCategoryController = (function serviceCategory() {

    const getAll = (req, res, next) => {
        serviceCategoryDataAcces.getAll()
        .then(data => (data.length > 0) ? res.send(data) : res.status(404).send({'message': "There are no serviceCategories."}));
    };

    const findByProperty = (req, res, next) => {
        serviceCategoryDataAcces.findByProperty(req.params.prop, req.params.value)  
        .then(data => (data != null) ? res.send(data) : res.status(404).send({'message': "Not found"}));
    };

    const add = (req, res, next) => {
        serviceCategoryDataAcces.add(req.body)
          .then(data => {
            res.send(data);
          })
          .catch(next)
    };

    const deleteById = (req, res, next) => {
        serviceCategoryDataAcces.deleteById(req.params.id)
            .then(data => {
                res.send(data);
            })
            .catch(next)
    };

    return {
        getAll,
        findByProperty,
        add,
        deleteById
    };
    
})();

module.exports = serviceCategoryController;

