const {
    expect
} = require('@jest/globals');
const request = require('supertest');
const app = require('../drivers/webserver/server.js');

/**
 * SCOPING
 * 
 * SETUP y TEARDOWN
 */

describe("UfoVehicle routes tests.", () => {

    beforeAll(done => {
        done();
    })

    afterAll(done => {
        done();
    })

    // testing de codigo asincrono con promesas
    test("Test getAll /ufoVehicle", async () => {
        const res = await request(app)
            .get(`/ufoVehicle`);
        expect(res.get('Content-Type')).toEqual(expect.stringMatching('/json'));
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveLength(1);
        expect(res.body[0]).toHaveProperty('id', 'model', 'brand', 'ufoService', 'driver', 'reservation');
        expect(res.body[0].id).not.toBeFalsy();
        expect(res.body[0].model).not.toBeFalsy();
        expect(res.body[0].brand).not.toBeFalsy();
        expect(res.body[0].ufoService).not.toBeFalsy();
        expect(res.body[0].driver).not.toBeFalsy();
        expect(res.body[0].reservation).not.toBeFalsy();
    });

    test("Test findByProperty /ufoVehicle", async () => {
        const res = await request(app)
            .get(`/ufoVehicle/model/XXX`);
        expect(res.get('Content-Type')).toEqual(expect.stringMatching('/json'));
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('id', 'model', 'brand', 'ufoService', 'driver', 'reservation');

        expect(res.body.id).not.toBeFalsy();
        expect(res.body.id).toBe('61b0f513646886f408bd0888');

        expect(res.body.model).not.toBeFalsy();
        expect(res.body.model).toBe('XXX');

        expect(res.body.brand).not.toBeFalsy();
        expect(res.body.brand).toBe('Space');

        expect(res.body.ufoService).not.toBeFalsy();
        expect(res.body.ufoService).toStrictEqual({
            _id: "61b0f513646886f408bd0777",
            name: 'UferGold',
            description: 'The best service',
            journey: {
                _id: "61b0f513646886f408bd0731",
                startPoint: 'GalicianAlps',
                endPoint: 'MarbellaFresh',
                distance: 1440
            },
            serviceCategory: {
                _id: "61aeab0c01ea7ea815ca8259",
                name: "Premium",
                minDiscount: 10,
                maxDiscount: 40,
                KEYMETERPRICE: 20
            },
            amenities: ['kitkat', 'cola'],
            KEYBASECOST: 40
        });

        expect(res.body.driver).not.toBeFalsy();
        expect(res.body.driver).toBe('MasterMachine');

        expect(res.body.reservation).not.toBeFalsy();
        expect(res.body.reservation).toStrictEqual({
            reserved: false,
            reservationDate: null
        });
    });

    
    test("Test add and delete /ufoVehicle", async () => {
        let body = {
            model: 'test',
            brand: 'test',
            ufoService: "61b0f513646886f408bd0777",
            driver: 'testDriver'
        };

        const resAdd = await request(app)
            .put(`/ufoVehicle`)
            .send(body);

        expect(resAdd.get('Content-Type')).toEqual(expect.stringMatching('/json'));
        expect(resAdd.statusCode).toEqual(200);

        expect(resAdd.body.id).not.toBeFalsy();

        expect(resAdd.body.model).not.toBeFalsy();
        expect(resAdd.body.model).toBe('test');

        expect(resAdd.body.brand).not.toBeFalsy();
        expect(resAdd.body.brand).toBe('test');

        expect(resAdd.body.ufoService).not.toBeFalsy();
        expect(resAdd.body.ufoService).toBe('61b0f513646886f408bd0777');

        expect(resAdd.body.driver).not.toBeFalsy();
        expect(resAdd.body.driver).toBe('testDriver');

        expect(resAdd.body.reservation).not.toBeFalsy();
        expect(resAdd.body.reservation).toStrictEqual({
            reserved: false,
            reservationDate: null
        });

        // Sacamos el id del journey creado para borrarlo.
        let id = resAdd.body.id;

        const resDel = await request(app)
            .delete(`/ufoVehicle/${id}`);

        expect(resDel.get('Content-Type')).toEqual(expect.stringMatching('/json'));
        expect(resDel.statusCode).toEqual(200);

        const resGetAll = await request(app)
            .get(`/ufoVehicle`);
        expect(resGetAll.get('Content-Type')).toEqual(expect.stringMatching('/json'));
        expect(resGetAll.statusCode).toEqual(200);
        expect(resGetAll.body).toHaveLength(1);
    });
});