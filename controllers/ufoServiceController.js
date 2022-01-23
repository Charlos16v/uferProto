let ufoServiceDataAcces = require('../data-acces/ufoServiceDB/index.js');
let ufoServiceServiceLayer = require('../service/ufoService.js');

const ufoServiceController = (function ufoService() {

    const getAll = (req, res, next) => {
        ufoServiceDataAcces.getAll()
        .then(data => {
            res.send(data);
        });
    };

    const findByProperty = (req, res, next) => {
        ufoServiceDataAcces.findByProperty(req.params.prop, req.params.value)  
        .then(data => (data != null) ? res.send(data) : res.status(404).send({'message': "Not found"}));
    };

    const add = (req, res, next) => {
        ufoServiceServiceLayer.add(req.body)
          .then(data => {
            res.send(data);
          })
          .catch(next)
    };

    const deleteById = (req, res, next) => {
        ufoServiceDataAcces.deleteById(req.params.id)
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

module.exports = ufoServiceController;

