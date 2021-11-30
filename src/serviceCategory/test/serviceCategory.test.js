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
        /*
        Mi logica es que solo aplico este tipo de descuentos en Diciembre, mes 11 en JS Date.

        Hago mock de Date.now justo antes de la ejecucion del metodo isDiscountMonth()
        ya que acabara accediendo a Date.now, aqui ya le paso el valor que quiero tener
        a la hora que llegue ese expect.
        */ 
       

        // CASO MAYO, NO DEBERIA.
        Date.now = jest.fn(() => new Date(2021, 4, 31));
        expect(category.isDiscountMonth()).toBeFalsy(); // 

        // CASO DICIEMBRE, SI DEBERIA.
        Date.now = jest.fn(() => new Date(2021, 11, 15));
        expect(category.isDiscountMonth()).toBeTruthy();
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

        Date.now = jest.fn(() => dateWithDiscount);
        let randomDiscount = category.getDiscount();
        expect(randomDiscount).toBeGreaterThanOrEqual(10);
        expect(randomDiscount).toBeLessThanOrEqual(40);

        // CASO NO SE CUMPLEN LAS CONDICIONES.
        let dateWithoutDiscount = new Date(2021, 4, 31);

        Date.now = jest.fn(() => dateWithoutDiscount);
        expect(category.getDiscount()).toBe(0);
    });

})


