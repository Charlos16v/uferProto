let serviceCategoryDataAcces = require('../data-acces/serviceCategoryDB/index.js');
let journeyDataAcces = require('../data-acces/journeyDB/index.js');
let ufoServiceDataAcces = require('../data-acces/ufoServiceDB/index.js');

const ufoService = (function serviceLayer() {

    const add = async (ufoServiceInfo) => {
        try {
            const journey = await journeyDataAcces.findByProperty('id', ufoServiceInfo.journey);
            if (!journey) {
                throw new Error("The journey doesn't exist.");
            }

            const serviceCategory = await serviceCategoryDataAcces.findByProperty('id', ufoServiceInfo.serviceCategory);
            if (!serviceCategory) {
                throw new Error("The serviceCategory doesn't exist.");
            }

            const data = ufoServiceDataAcces.add(ufoServiceInfo);

            if (!data) {
                throw new Error('It has not been possible to create the ufoService.');
            }

            return data;
        } catch (error) {
            throw error;
        }
    };

    return {
        add
    };
})();


module.exports = ufoService;