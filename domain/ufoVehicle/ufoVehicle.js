let ufoVehicle = {
    init: function (model, brand, service, driver) {
        this.model = model;
        this.brand = brand;
        this.service = service;
        this.driver = driver;
        this.reservation = {
            reserved: false,
            reservationDate: null,
        }

        return this;
    },
    reserveUfo: function () {
        if (this.reservation.reserved == false) {
            this.reservation.reserved = true;
            this.reservation.reservationDate = Date.now();
        }
        // this.service.prepareDiscount();
    },
    calculateServicePrice: function () {
        this.service ?.prepareDiscount();
        this.service ?.calculatePrice();
    }
}

module.exports = ufoVehicle;