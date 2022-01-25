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

describe("Journey routes tests.", () => {

    beforeAll(done => {
        done();
    })

    afterAll(done => {
        done();
    })

    // testing de codigo asincrono con promesas
    test("Test getAll /journey", async () => {
        const res = await request(app)
            .get(`/journey`);
        expect(res.get('Content-Type')).toEqual(expect.stringMatching('/json'));
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveLength(2);
        expect(res.body[0]).toHaveProperty('id', 'startPoint', 'endPoint', 'distance');
        expect(res.body[0].id).not.toBeFalsy();
        expect(res.body[0].startPoint).not.toBeFalsy();
    });

    test("Test findByProperty /journey", async () => {
        const res = await request(app)
            .get(`/journey/startPoint/MurciaGalaxy`);
        expect(res.get('Content-Type')).toEqual(expect.stringMatching('/json'));
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('id', 'startPoint', 'endPoint', 'distance');

        expect(res.body.id).not.toBeFalsy();
        expect(res.body.id).toBe('61b0f513646886f408bd0730');

        expect(res.body.startPoint).not.toBeFalsy();
        expect(res.body.startPoint).toBe('MurciaGalaxy');

        expect(res.body.endPoint).not.toBeFalsy();
        expect(res.body.endPoint).toBe('MarbellaFresh');

        expect(res.body.distance).not.toBeFalsy();
        expect(res.body.distance).toBe(1000);
    });

    test("Test add and delete /journey", async () => {
        let body = {
            "startPoint": "maquinaria",
            "endPoint": "master",
            "distance": 1
        };

        const resAdd = await request(app)
            .put(`/journey`)
            .send(body);

        expect(resAdd.get('Content-Type')).toEqual(expect.stringMatching('/json'));
        expect(resAdd.statusCode).toEqual(200);

        expect(resAdd.body.id).not.toBeFalsy();

        expect(resAdd.body.startPoint).not.toBeFalsy();
        expect(resAdd.body.startPoint).toBe('maquinaria');

        expect(resAdd.body.endPoint).not.toBeFalsy();
        expect(resAdd.body.endPoint).toBe('master');

        expect(resAdd.body.distance).not.toBeFalsy();
        expect(resAdd.body.distance).toBe(1);

        // Sacamos el id del journey creado para borrarlo.
        let id = resAdd.body.id;

        const resDel = await request(app)
            .delete(`/journey/${id}`);

        expect(resDel.get('Content-Type')).toEqual(expect.stringMatching('/json'));
        expect(resDel.statusCode).toEqual(200);

        const resGetAll = await request(app)
            .get(`/journey`);
        expect(resGetAll.get('Content-Type')).toEqual(expect.stringMatching('/json'));
        expect(resGetAll.statusCode).toEqual(200);
        expect(resGetAll.body).toHaveLength(2);
    });
});