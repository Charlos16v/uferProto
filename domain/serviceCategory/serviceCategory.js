let serviceCategoryPrototype = {
    init: function(name, minDiscount, maxDiscount, KEYMETERPRICE) {
        this.name = name;
        this.minDiscount = minDiscount;
        this.maxDiscount = maxDiscount;
        this.KEYMETERPRICE = KEYMETERPRICE;

        return this;
    },
    getName: function () {
        return this.name;
    },
    getMinDiscount: function () {
        return this.minDiscount;
    },
    getMaxDiscount: function () {
        return this.maxDiscount;
    },
    getKEYMETERPRICE: function() {
        return this.KEYMETERPRICE;
    },
    isDiscountMonth: function() {
        // Los meses en las fechas de JavaScript van de 0 a 11.
        // Metodo que duelve true o false dependiendo si no encontramos en diciembre o no.
        let actualDate = Date.now();
        let actualMonth = actualDate.getMonth();
        return actualMonth == 11 || 0 ? true : false;
    },
    getRandomInteger: function(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    },
    getDiscount: function () {
        if (this.isDiscountMonth()) return this.getRandomInteger(this.minDiscount, this.maxDiscount);
        return 0;
    },
    getQuantityToDiscount: function(price, discountPercentage) {
        return Math.round(price * (discountPercentage / 100));
    }
};

module.exports = serviceCategoryPrototype;