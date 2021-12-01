let ufoServicePrototype = {
    init: function(name, description, journey, category, amenities){
        this.name = name;
        this.description = description;
        this.journey = journey;
        this.category = category;
        this.amenities = amenities;
        this.price;
        this.discountByCategory;
        this.KEYBASECOST = 40;

        //! MOVER A CATEGORY??
        this.KEYMETERPRICE = 7;
        
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
        return this.KEYMETERPRICE;
    },
    getKEYBASECOST: function() {
        return this.KEYBASECOST;
    },

    //! Setters necesarios??
    setPrice: function(price) {
        this.price = price;
    },

    // Business logic.
    getDiscount: function(){
        // Obtenemos el valor del porcentaje desde el proto categoria.
        let discountPercentage = this.getCategory()?.getDiscount();
        
        // Setteamos el valor en la propiedad discountByCategory.
        this.discountByCategory = discountPercentage;

        // Devolvemos el valor ya que va a ser usado posteriormente en calculatePrice()
        // pero tambien nos interesa que el valor sea persistido en el objeto del servicio.
        return this.discountByCategory;
    },
    getDistance: function(){
        return this.getJourney()?.getDistance();
    },
    calculatePrice: function() {
        let distance = this.getDistance();
        let discountPercentage = this.getDiscount();

        // Precio sin descontar descuento.
        var price = this.getKEYBASECOST() + (distance * this.getKEYMETERPRICE());
        
        if (discountPercentage < 0) {
            // Si hay descuento se calcula y se le resta al precio.
            let discountQuantity = this.getCategory?.getQuantityToDiscount();
            this.setPrice(price - discountQuantity);
        }
        this.setPrice(price);
    }
    
};

module.exports = ufoServicePrototype;