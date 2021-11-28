const { expect } = require('@jest/globals');

const premiumCategory = require('../types/premiumCategory.js');

describe('scope tests serviceCategory prototype', () => {

    let category = null;

    // SETUP
    beforeEach( () => {
        category = premiumCategory.init();
    });
    // BASIC TEST
    test('test initialization of the serviceCategory proto', () => {
        expect(category.getName()).toBe('Premium');
        expect(category.getMinDiscount()).toBe(10);
        expect(category.getMaxDiscount()).toBe(40);
    });

    test('test of isDiscountMonth() method of serviceCategory proto', () => {
        expect(category.isDiscountMonth(new Date(2021, 4, 31))).toBeFalsy(); // 
        expect(category.isDiscountMonth(new Date(2021, 11, 15))).toBeTruthy(); // Caso diciembre
    });

    test('test getRandomInteger() method from serviceCategory proto', () => {
        // Testeando un rango de valores
        let randomValue = category.getRandomInteger(0, 10);
        expect(randomValue).toBeGreaterThanOrEqual(0);
        expect(randomValue).toBeLessThanOrEqual(10);
    });

    test('test getDiscount() method from serviceCategory proto', () => {
        // La logica del negocio dice que en este caso premiumCategory 
        // deberia devolvernos un valor aleatorio entre 10 y 40, SOLO si nos encontramos
        // en el mes de descuento(Diciembre).

        // CASO SE CUMPLEN LAS CONDICIONES.
        let dateWithDiscount = new Date(2021, 11, 15);
        let randomDiscount = category.getDiscount(dateWithDiscount);
        expect(randomDiscount).toBeGreaterThanOrEqual(10);
        expect(randomDiscount).toBeLessThanOrEqual(40);

        // CASO NO SE CUMPLEN LAS CONDICIONES.
        let dateWithoutDiscount = new Date(2021, 4, 31);
        expect(category.getDiscount(dateWithoutDiscount)).toBe(0);
    });

})


