const { expect } = require('@jest/globals');

const uferService = require('../ufoService.js');
const journeyFactory = require('../../journey/journey.js');
const premiumCategory = require('../../serviceCategory/types/premiumCategory.js');

describe('scope tests serviceCategory prototype', () => {

    let journey = null;
    let category = null;
    let ufer = null;


    // SETUP
    beforeAll( () => {
        journey = journeyFactory.init("MurciaGalaxy", "MarbellaFresh", 1000)
        category = premiumCategory.init();

        ufer = uferService.init("Gold", "fresh", journey, category, []);
    });
    // BASIC TEST
    test('init() from uferServicePrototype', () => {
        
        expect(ufer.getName()).toBe("Gold");
        expect(ufer.getDescription()).toBe("fresh");

        expect(ufer.getJourney()).toHaveProperty('startPoint');
        expect(ufer.getJourney()).toHaveProperty('endPoint');
        expect(ufer.getJourney()).toHaveProperty('distance');

        expect(ufer.getCategory()).toHaveProperty("name");
        expect(ufer.getCategory()).toHaveProperty("minDiscount");
        expect(ufer.getCategory()).toHaveProperty("maxDiscount");

        expect(ufer.getAmenities()).toHaveLength(0);
    });

    test('calculatePrice() from uferServicePrototype', () => {
        
        // CASO SE APLICA DESCUENTO CONCRETAMENTE DE PREMIUM CATEGORY.
        let dateWithDiscount = new Date(2021, 11, 15);
        Date.now = jest.fn(() => dateWithDiscount);
        
        ufer.calculatePrice();
        
        // En este caso al ser categoria Premium y estar en 
        // diciembre se deberia haber aplicado entre el 10% y el 40%
        // de descuento sobre el precio del servicio
        // (420 con el 40% y 630 con el 10% aplicados).
        // Por lo que nuestro margen de resultados validos esta entre 420 y 630.


        expect(ufer.getPrice()).toBeGreaterThanOrEqual(420); 
        expect(ufer.getPrice()).toBeGreaterThanOrEqual(630);

        
        // CASO SE NO APLICA DESCUENTO AL NO SER DICIEMBRE.
        let dateWithoutDiscount = new Date(2021, 4, 31);
        Date.now = jest.fn(() => dateWithoutDiscount);
        
        ufer.calculatePrice();
        expect(ufer.getPrice()).toBe(7000);
    });

})