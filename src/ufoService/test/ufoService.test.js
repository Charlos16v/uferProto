const { expect } = require('@jest/globals');

const uferService = require('../ufoService.js');

// BASIC TEST
test('init() from uferServicePrototype', () => {
    let ufer = uferService.init("test", "test", "test");
    expect(ufer.getName()).toBe("I'am test");
    expect(ufer.getDescription()).toBe("test");
    expect(ufer.getCategory()).toBe("test");
})