const { expect } = require('@jest/globals');

const premiumCategory = require('../types/premiumCategory.js');

// BASIC TEST
test('test initialization of the serviceCategory proto', () => {
    let category = premiumCategory.init();
    expect(category.getName()).toBe('Premium');
    expect(category.calculateDiscount()).toBe('This Premium service category offers 3000k discount!');
});

test('test of isDiscount() method of serviceCategory proto', () => {
    let category = premiumCategory.init();
    expect(category.isDiscountMonth(new Date(2021, 4, 31))).toBeFalsy(); // 
    expect(category.isDiscountMonth(new Date(2021, 11, 15))).toBeTruthy(); // Caso diciembre
});

