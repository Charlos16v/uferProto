let ufoServicePrototype = {
    init: function(name, description, journey, amenities){
        this.name = name;
        this.description = description;
        this.journey = journey;

        // La categoria la setteamos con el setter.
        //this.category = category;
        this.amenities = amenities;
        this.price;
        this.discountByCategory;
        // COSTE BASE QUE SE COBRA SI O SI EN EL SERVICIO.
        this.KEYBASECOST = 40;
        
        return this;
    },

    //! Getters necesarios??
    getName: function() {
        return this.name;
    },
    getDescription: function() {
        return this.description;
    },
    getJourney: function() {
        return this.journey;
    },
    getCategory: function() {
        return this.category;
    },
    getPrice: function() {
        return this.price;
    },
    getAmenities: function() {
        return this.amenities;
    },
    getKEYMETERPRICE: function() {
        return this.getCategory()?.getKEYMETERPRICE();
    },
    getKEYBASECOST: function() {
        return this.KEYBASECOST;
    },
    getDistance: function(){
        return this.getJourney()?.getDistance();
    },

    //! Setters necesarios??
    setPrice: function(price) {
        this.price = price;
    },
    setCategory: function(category) {
        this.category = category;
        this.prepareDiscount(this.category);
    },
    // Business logic.
    // CLOSURE.
    prepareDiscount: function(category){
        let putDiscount = function() {
            function applyDiscount() {
                // Comprobamos antes que el ufoService tenga asignada una category.

                // Setteamos el valor en la propiedad discountPercentatge de category
                this.discountPercentage = category.getDiscount();
                return category.getDiscount();
            }
            return applyDiscount;
        };
        Object.defineProperty(category, 'applyDiscount', {
            value: putDiscount(),
            writable: true
        });
        // Aqui se lo estaria añadiendo a ufoService.
        // this.applyDiscount = putDiscount();
    },
    calculatePrice: function() {
        if(this.getCategory() == null) return;

        let distance = this.getDistance();

        let discountPercentage = this.getCategory()?.applyDiscount()

        // Precio sin descontar descuento.
        var price = this.getKEYBASECOST() + (distance * this.getKEYMETERPRICE());
        
        if (discountPercentage > 0) {
            // Si hay descuento se calcula y se le resta al precio.
            let discountQuantity = this.getCategory()?.getQuantityToDiscount(price, discountPercentage);
            this.setPrice(price - discountQuantity);
        } else {
            this.setPrice(price);
        }
        
    },

};

module.exports = ufoServicePrototype;