const { expect } = require('@jest/globals');

const premiumCategory = require('../premiumCategory.js');

// BASIC TEST
test('test initialization of the serviceCategory proto', () => {
    let category = premiumCategory.init();
    expect(category.getName()).toBe('Premium');
    expect(category.calculateDiscount()).toBe('This Premium service category offers 3000k discount!');
});

