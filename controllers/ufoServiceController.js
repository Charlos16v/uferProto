const ufoServiceDataAcces = require('../data-access/ufoServiceDB/index.js');
const ufoServiceServiceLayer = require('../service/ufoService.js');

const ufoServiceController = (function ufoService() {

    const getAll = (req, res, next) => {
        ufoServiceDataAcces.getAll()
        .then(data => (data.length > 0) ? res.send(data) : res.status(404).send({'message': "There are no ufoServices."}));
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

