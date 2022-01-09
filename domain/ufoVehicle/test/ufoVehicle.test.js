const {
    expect
} = require('@jest/globals');

const ufoVehicle = require('../ufoVehicle.js');
const uferService = require('../../ufoService/ufoService.js');
const journeyFactory = require('../../journey/journey.js');
const premiumCategory = require('../../serviceCategory/types/premiumCategory.js');

describe('scope tests ufoVehicle prototype', () => {

    // BASIC TEST
    test('init() from ufoVehicle', () => {
        let vehicle = ufoVehicle.init("test", "test", "test", "test");
        expect(vehicle.model).toBe("test");
        expect(vehicle.brand).toBe("test");
        expect(vehicle.service).toBe("test");
        expect(vehicle.driver).toBe("test");
        expect(vehicle.reservation).toStrictEqual({
            reserved: false,
            reservationDate: null,
        });
    });


    test('reserveUfo() from ufoVehicle', () => {
        let journey = journeyFactory.init("MurciaGalaxy", "MarbellaFresh", 1000)
        let category = premiumCategory.init();

        let uferGold = uferService.init("Gold", "fresh", journey, category, []);

        let vehicle = ufoVehicle.init("test", "test", uferGold, "test");

        let date = new Date(2021, 11, 15);

        expect(vehicle.reservation).toStrictEqual({
            reserved: false,
            reservationDate: null,
        });

        Date.now = jest.fn(() => date);
        vehicle.reserveUfo();

        expect(vehicle.reservation).toStrictEqual({
            reserved: true,
            reservationDate: date,
        });

        // Al volver a reservar no deberia cambiar nada ya que comprueba que no este reservado ya.
        // Cambiamos fecha para comprobar que no cambie nada.
        Date.now = jest.fn(() => new Date);
        vehicle.reserveUfo();

        expect(vehicle.reservation).toStrictEqual({
            reserved: true,
            reservationDate: date,
        });
    });

    test('calculateServicePrice() from ufoVehicle', () => {
        let journey = journeyFactory.init("MurciaGalaxy", "MarbellaFresh", 1000)
        let category = premiumCategory.init();

        let uferGold = uferService.init("Gold", "fresh", journey, category, []);

        let vehicle = ufoVehicle.init("test", "test", uferGold, "test");

        let date = new Date(2021, 11, 15);

        expect(vehicle.reservation).toStrictEqual({
            reserved: false,
            reservationDate: null,
        });

        Date.now = jest.fn(() => date);
        vehicle.reserveUfo();
        vehicle.calculateServicePrice();

        expect(vehicle.reservation).toStrictEqual({
            reserved: true,
            reservationDate: date,
        });

        expect(vehicle.service.getCategory()).toHaveProperty('applyDiscount');
        expect(vehicle.service.getCategory()).toHaveProperty('discountPercentage');
    });
});
