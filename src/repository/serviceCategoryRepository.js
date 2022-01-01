const ServiceCategory = require('../../models/serviceCategory.js');

var serviceCategoryRepository = (function singleServiceCategoryRepository() {

    const createServiceCategory = async function (category, next) {
        //ServiceCategory.create(category); 
        //newCategory.save(newCategory);
        let newCategory = new ServiceCategory(category)
        return new Promise((resolve, reject) => {
            newCategory.save();
            resolve(newCategory);
        })
    
}

return {
    createServiceCategory
}
})();

module.exports = serviceCategoryRepository;