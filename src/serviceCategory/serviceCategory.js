let serviceCategoryPrototype = {
    init: function(name, discount) {
        this.name = name;
        this.discount = discount;

        return this;
    },
    getName: function () {
        return this.name;
    },
    isDiscountMonth: function(date = Date.now()) {
        // Los meses en las fechas de JavaScript van de 0 a 11.
        // Parametro default para poder testear pasando valores fijos.
        // Metodo que duelve true o false dependiendo si no encontramos en diciembre o no.
        let actualDate = new Date(date);
        let actualMonth = actualDate.getMonth();
        return actualMonth == 11 ? true : false;
    },
    calculateDiscount: function () {
        return "This " + this.getName() + 
                " service category offers " + 
                this.discount * 100 + "k discount!";
    }
};

module.exports = serviceCategoryPrototype;