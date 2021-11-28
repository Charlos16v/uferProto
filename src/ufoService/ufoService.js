let ufoServicePrototype = {
    init: function(name, description, price, journey, category, amenities){
        this.name = name;
        this.description = description;
        this.price = price;
        this.journey = journey;
        this.category = category;
        this.amenities = amenities;
        this.BASEPRICE = 7;
        
        return this;
    },

    // Getters
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
        return (this.category);
    },
    getPrice: function() {
        return this.price;
    },
    getAmenities: function() {
        return this.amenities;
    },
    getBASEPRICE: function() {
        return this.BASEPRICE;
    },
    calculatePrice() {

    }
    
};

module.exports = ufoServicePrototype;