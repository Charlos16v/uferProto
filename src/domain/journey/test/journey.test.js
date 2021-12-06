const { expect } = require('@jest/globals');

const journey = require('../journey.js');

// BASIC TEST
test('init() from journey', () => {
    let startToEndTest = journey.init("start", "end", 99);
    expect(startToEndTest.getStartPoint()).toBe("start");
    expect(startToEndTest.getEndPoint()).toBe("end");
    expect(startToEndTest.getDistance()).toBe(99);
});