let ufoVehicleDataAcces = require('../data-acces/ufoVehicleDB/index.js');
let ufoVehicleServiceLayer = require('../service/ufoVehicleServiceLayer.js');

const ufoVehicleController = (function ufoVehicle() {

    const getAll = (req, res, next) => {
        ufoVehicleDataAcces.getAll()
        .then(data => {
            res.send(data);
        });
    };

    const findByProperty = (req, res, next) => {
        ufoVehicleDataAcces.findByProperty(req.params.prop, req.params.value)  
        .then(data => (data != null) ? res.send(data) : res.status(404).send({'message': "Not found"}));
    };

    const add = (req, res, next) => {
        ufoVehicleDataAcces.add(req.body)
          .then(data => {
            res.send(data);
          })
          .catch(next)
    };

    const deleteById = (req, res, next) => {
        ufoVehicleDataAcces.deleteById(req.params.id)
            .then(data => {
                res.send(data);
            })
            .catch(next)
    };

    const reserveUfo = (req, res, next) => {
        ufoVehicleServiceLayer.reserveUfo(req.params.id)
            .then(data => {
                res.send(data);
            })
            .catch(next)
    };

    return {
        getAll,
        findByProperty,
        add,
        deleteById,
        reserveUfo
    };
    
})();

module.exports = ufoVehicleController;

