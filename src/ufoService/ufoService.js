let ufoServicePrototype = {
    init: function(name, description, price, journey, category, amenities){
        this.name = name;
        this.description = description;
        this.price = price;
        this.journey = journey;
        this.category = category;
        this.amenities = amenities;
        
        return this;
    },

    // Getters
    getName: function() {
        return("I'am " + this.name);
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

    calculatePrice() {

    }
    
};

module.exports = ufoServicePrototype;