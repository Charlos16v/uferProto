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

describe("ServiceCategory routes tests.", () => {

    beforeAll(done => {
        done();
    })

    afterAll(done => {
        done();
    })

    // testing de codigo asincrono con promesas
    test("Test getAll /serviceCategory", async () => {
        const res = await request(app)
            .get(`/serviceCategory`);
        expect(res.get('Content-Type')).toEqual(expect.stringMatching('/json'));
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveLength(3);
        expect(res.body[0]).toHaveProperty('_id', 'name', 'minDiscount', 'maxDiscount', 'KEYMETERPRICE');
        expect(res.body[0]._id).not.toBeFalsy();
        expect(res.body[0].name).not.toBeFalsy();
        expect(res.body[0].minDiscount).not.toBeFalsy();
        expect(res.body[0].maxDiscount).not.toBeFalsy();
        expect(res.body[0].KEYMETERPRICE).not.toBeFalsy();

    });

    test("Test findByProperty /serviceCategory", async () => {
        const res = await request(app)
            .get(`/serviceCategory/name/Premium`);
        expect(res.get('Content-Type')).toEqual(expect.stringMatching('/json'));
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('_id', 'name', 'minDiscount', 'maxDiscount', 'KEYMETERPRICE');

        expect(res.body._id).not.toBeFalsy();
        expect(res.body._id).toBe('61aeab0c01ea7ea815ca8259');

        expect(res.body.name).not.toBeFalsy();
        expect(res.body.name).toBe('Premium');

        expect(res.body.minDiscount).not.toBeFalsy();
        expect(res.body.minDiscount).toBe(10);

        expect(res.body.maxDiscount).not.toBeFalsy();
        expect(res.body.maxDiscount).toBe(40);

        expect(res.body.KEYMETERPRICE).not.toBeFalsy();
        expect(res.body.KEYMETERPRICE).toBe(20);
    });

    test("Test add and delete /serviceCategory", async () => {
        let body = {
            "name": "maquinaria",
            "minDiscount": 1,
            "maxDiscount": 1,
            "KEYMETERPRICE": 69
        };

        const resAdd = await request(app)
            .put(`/serviceCategory`)
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
    });
});