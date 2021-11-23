let ufoServicePrototype = {
    init: function(name, description, category){
        this.name = name;
        this.description = description;
        this.category = category;

        return this;
    },
    getName: function() {
        return("I'am " + this.name);
    },
    getDescription: function() {
        return(this.description);
    },
    getCategory: function() {
        return this.category;
    }
};

module.exports = ufoServicePrototype;