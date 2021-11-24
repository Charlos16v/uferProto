let serviceCategoryPrototype = {
    init: function(name, discount) {
        this.name = name;
        this.discount = discount;

        return this;
    },
    getName: function () {
        return this.name;
    },
    calculateDiscount: function () {
        return "This " + this.getName() + 
                " service category offers " + 
                this.discount * 100 + "k discount!";
    }
};

module.exports = serviceCategoryPrototype;