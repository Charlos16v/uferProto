let serviceCategoryPrototype = {
    init: function(name, minDiscount, maxDiscount) {
        this.name = name;
        this.minDiscount = minDiscount;
        this.maxDiscount = maxDiscount;

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
    isDiscountMonth: function() {
        // Los meses en las fechas de JavaScript van de 0 a 11.
        // Metodo que duelve true o false dependiendo si no encontramos en diciembre o no.
        let actualDate = Date.now();
        let actualMonth = actualDate.getMonth();
        return actualMonth == 11 ? true : false;
    },
    getRandomInteger: function(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    },
    getDiscount: function (date) {
        if (this.isDiscountMonth(date)) return this.getRandomInteger(this.getMinDiscount(), this.getMaxDiscount());
        return 0;
    }
};

module.exports = serviceCategoryPrototype;