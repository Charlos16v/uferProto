const { expect } = require('@jest/globals');

const uferService = require('../ufoService.js');
const journeyFactory = require('../../journey/journey.js');
const premiumCategory = require('../../serviceCategory/types/premiumCategory.js');

describe('scope tests serviceCategory prototype', () => {

    // SETUP

    let journey = null;
    let category = null;
    let ufer = null;

    let dateWithDiscount = new Date(2021, 11, 15);
    let dateWithoutDiscount = new Date(2021, 4, 31);

    beforeEach( () => {
        journey = journeyFactory.init("MurciaGalaxy", "MarbellaFresh", 1000)
        category = premiumCategory.init();

        ufer = uferService.init("Gold", "fresh", journey, category, []);
        ufer.category = category;
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

    test('prepareDiscount() from uferServicePrototype', () => {
        
        // CASO FECHA EN DICIEMBRE POR LO QUE APLICA DESCUENTO.
        Date.now = jest.fn(() => dateWithDiscount);
        
        // Aun no tiene la propiedad.
        expect(ufer.getCategory().hasOwnProperty('applyDiscount')).toBeFalsy();
        expect(ufer.getCategory()).not.toHaveProperty('applyDiscount');

        ufer.prepareDiscount(category);

        // Una vez ejecutado el closure si la tiene.
        expect(ufer.getCategory()).toHaveProperty('applyDiscount');

        // Aun no tiene la propiedad la creara applyDiscount().
        expect(ufer.getCategory()).not.toHaveProperty('discountPercentage');

        ufer.getCategory().applyDiscount()

        // Ahora si que deberia tenerla.
        expect(ufer.getCategory()).toHaveProperty('discountPercentage');

        // En este caso esta aplicando categoria premium por lo que
        // el descuento esta entre 10 y 40.
        expect(ufer.getCategory().discountPercentage).toBeGreaterThanOrEqual(10);
        expect(ufer.getCategory().discountPercentage).toBeLessThanOrEqual(40);


        
        // CASO FECHA NO EN DICIEMBRE POR LO QUE NO APLICA DESCUENTO.
        Date.now = jest.fn(() => dateWithoutDiscount);
        
        let otherUfo = uferService.init("Master", "hehe", journey, [])
        let otherCategory = premiumCategory.init();
        otherUfo.category = otherCategory;
        
        // Aun no tiene la propiedad.
        expect(otherUfo.getCategory().hasOwnProperty('applyDiscount')).toBeFalsy();
        expect(ufer.getCategory()).not.toHaveProperty('applyDiscount');

        otherUfo.prepareDiscount(otherCategory);

        // Una vez ejecutado el closure si la tiene.
        expect(otherUfo.getCategory()).toHaveProperty('applyDiscount');

        // Aun no tiene la propiedad la creara applyDiscount().
        expect(otherUfo.getCategory()).not.toHaveProperty('discountPercentage');

        otherUfo.getCategory().applyDiscount()

        // Ahora si que deberia tenerla.
        expect(otherUfo.getCategory()).toHaveProperty('discountPercentage');

        // En este caso esta aplicando categoria premium por lo que
        // el descuento esta entre 10 y 40.
        expect(otherUfo.getCategory().discountPercentage).toBe(0);     
    });

    test('calculatePrice() from uferServicePrototype', () => {
        // Al estar la logica usando numeros aleatorios por probabilidad
        // he decidido testear multiples veces para verificar que realmente
        // se estan quedando entre los rangos de valores deseados los resultados.
        // Ya que con testear 1 vez no quedaria completo, repetimos el test 10000 veces.

        const NRUNS = 10000;

        // CASO SE APLICA DESCUENTO CONCRETAMENTE DE PREMIUM CATEGORY.
        Date.now = jest.fn(() => dateWithDiscount);

        for (let i = 0; i < NRUNS; i++) {
        
            ufer.prepareDiscount(); // Preparamos el descuento, este metodo sera llamado en el momento de reserva del vehiculo con el servicio asociado.
            
            ufer.calculatePrice();
        
            // En este caso al ser categoria Premium y estar en 
            // diciembre se deberia haber aplicado entre el 10% y el 40%
            // de descuento sobre el precio del servicio
            // (12024 con el 40% y 18036 con el 10% aplicados).
            // Por lo que nuestro margen de resultados validos esta entre 12024 y 18036.
            /* Usado anteriormente tanto para revisar valores 
            obtenidos como ver el valor actual de la iteracion en el bucle.
            //console.log(ufer.getPrice());
            //console.log(i);
            */
            expect(ufer.getPrice()).toBeGreaterThanOrEqual(12024); 
            expect(ufer.getPrice()).toBeLessThanOrEqual(18036);
        };
    


        // CASO SE NO APLICA DESCUENTO AL NO SER DICIEMBRE.
        Date.now = jest.fn(() => dateWithoutDiscount);
        
        ufer.calculatePrice();
        expect(ufer.getPrice()).toBe(20040);
    });

    test('calculatePrice() caso no categoria', () => {
        // CASO SE NO SE PUEDE CALCULAR PRECIO POR FALTA DE CATEGORIA.
        
        Date.now = jest.fn(() => dateWithDiscount);
        // Setteamos la propiedad category de ufoService a null junto a price para comprobar que no se va a settear un valor.
        ufer.category = null;
        ufer.price = null;

        ufer.calculatePrice();
        expect(ufer.getPrice()).toBe(null);
    })
})