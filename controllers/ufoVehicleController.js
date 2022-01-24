let ufoVehicleDataAcces = require('../data-access/ufoVehicleDB/index.js');
let ufoVehicleServiceLayer = require('../service/ufoVehicle.js');

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
        ufoVehicleServiceLayer.add(req.body)
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

    const calculateServicePrice = (req, res, next) => {
        ufoVehicleServiceLayer.calculateServicePrice(req.params.id)
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
        reserveUfo,
        calculateServicePrice
    };
    
})();

module.exports = ufoVehicleController;

