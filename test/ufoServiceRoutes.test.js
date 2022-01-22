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

describe("UfoService routes tests.", () => {

    beforeAll(done => {
        done();
    })

    afterAll(done => {
        done();
    })

    // testing de codigo asincrono con promesas
    test("Test getAll /ufoService", async () => {
        const res = await request(app)
            .get(`/ufoService`);
        expect(res.get('Content-Type')).toEqual(expect.stringMatching('/json'));
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveLength(1);
        expect(res.body[0]).toHaveProperty('id', 'name', 'description', 'journey', 'category', 'amenities', 'KEYBASECOST');
        expect(res.body[0].id).not.toBeFalsy();
        expect(res.body[0].name).not.toBeFalsy();
        expect(res.body[0].description).not.toBeFalsy();
        expect(res.body[0].journey).not.toBeFalsy();
        expect(res.body[0].category).not.toBeFalsy();
        expect(res.body[0].amenities).not.toBeFalsy();
        expect(res.body[0].KEYBASECOST).not.toBeFalsy();
        

    });

    test("Test findByProperty /ufoService", async () => {
        const res = await request(app)
            .get(`/ufoService/name/UferGold`);
        expect(res.get('Content-Type')).toEqual(expect.stringMatching('/json'));
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('id', 'name', 'description', 'journey', 'category', 'amenities', 'KEYBASECOST');

        expect(res.body.id).not.toBeFalsy();
        expect(res.body.id).toBe('61b0f513646886f408bd0777');

        expect(res.body.name).not.toBeFalsy();
        expect(res.body.name).toBe('UferGold');

        expect(res.body.description).not.toBeFalsy();
        expect(res.body.description).toBe('The best service');

        expect(res.body.journey).not.toBeFalsy();
        expect(res.body.journey).toStrictEqual({
            "_id": "61b0f513646886f408bd0731",
            "startPoint": "GalicianAlps",
            "endPoint": "MarbellaFresh",
            "distance": 1440
        });

        expect(res.body.category).not.toBeFalsy();
        expect(res.body.category).toStrictEqual({
            "_id": "61aeab0c01ea7ea815ca8259",
            "name": "Premium",
            "minDiscount": 10,
            "maxDiscount": 40,
            "KEYMETERPRICE": 20
        });

        expect(res.body.amenities).not.toBeFalsy();
        expect(res.body.amenities).toHaveLength(2);
        expect(res.body.amenities).toStrictEqual([
            "kitkat",
            "cola"
        ]);

        expect(res.body.KEYBASECOST).not.toBeFalsy();
        expect(res.body.KEYBASECOST).toBe(40);
    });

    /*test("Test add and delete /ufoService", async () => {
        let body = {
            "name": "maquinaria",
            "minDiscount": 1,
            "maxDiscount": 1,
            "KEYMETERPRICE": 69
        };

        const resAdd = await request(app)
            .put(`/ufoService`)
            .send(body);

        expect(resAdd.get('Content-Type')).toEqual(expect.stringMatching('/json'));
        expect(resAdd.statusCode).toEqual(200);

        expect(resAdd.body._id).not.toBeFalsy();

        expect(resAdd.body.name).not.toBeFalsy();
        expect(resAdd.body.name).toBe('maquinaria');

        expect(resAdd.body.minDiscount).not.toBeFalsy();
        expect(resAdd.body.minDiscount).toBe(1);

        expect(resAdd.body.maxDiscount).not.toBeFalsy();
        expect(resAdd.body.maxDiscount).toBe(1);

        expect(resAdd.body.KEYMETERPRICE).not.toBeFalsy();
        expect(resAdd.body.KEYMETERPRICE).toBe(69);

        // Sacamos el id del journey creado para borrarlo.
        let id = resAdd.body._id;

        const resDel = await request(app)
            .delete(`/serviceCategory/${id}`);

        expect(resDel.get('Content-Type')).toEqual(expect.stringMatching('/json'));
        expect(resDel.statusCode).toEqual(200);
    });*/
});