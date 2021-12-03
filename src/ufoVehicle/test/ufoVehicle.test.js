const { expect } = require('@jest/globals');

const ufoVehicle = require('../ufoVehicle.js');

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


test('init() from ufoVehicle', () => {
    let vehicle = ufoVehicle.init("test", "test", "test", "test");
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
    })

});

