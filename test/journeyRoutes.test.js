const { expect } = require('@jest/globals');
const request = require('supertest');
const app = require('../drivers/webserver/server.js');
 
 const db = require('../db/mongo/connection.js');
 
 /**
  * SCOPING
  * 
  * SETUP y TEARDOWN
  */ 
 
 describe("Journey routes tests.", () => {
 
    beforeAll(done => {
        done();
      })
      
     afterAll( done => {
        // db.connection.close();
        done();
     })
 
     // testing de codigo asincrono con promesas
     test("Test getAll /journey", async () => {
         const res = await request(app)
             .get(`/journey`);
         expect(res.get('Content-Type')).toEqual(expect.stringMatching('/json'));
         expect(res.statusCode).toEqual(200);
         expect(res.body).toHaveLength(2);
         expect(res.body[0]).toHaveProperty('_id', 'startPoint', 'endPoint', 'distance');
         expect(res.body[0]._id).not.toBeFalsy();
         expect(res.body[0].startPoint).not.toBeFalsy();
     });
 });