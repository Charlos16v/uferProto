const journeyDataAcces = require('../data-access/journeyDB/index.js');

const journeyController = (function journey() {

    const getAll = (req, res, next) => {
        journeyDataAcces.getAll()
        .then(data => (data.length > 0) ? res.send(data) : res.status(404).send({'message': "There are no journeys."}));
    };

    const findByProperty = (req, res, next) => {
        journeyDataAcces.findByProperty(req.params.prop, req.params.value)  
        .then(data => (data != null) ? res.send(data) : res.status(404).send({'message': "Not found"}));
    };

    const add = (req, res, next) => {
        journeyDataAcces.add(req.body)
          .then(data => {
            res.send(data);
          })
          .catch(next)
    };

    const deleteById = (req, res, next) => {
        journeyDataAcces.deleteById(req.params.id)
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

module.exports = journeyController;

