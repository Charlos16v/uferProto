const ufoService = require('./ufoService/ufoService.js');
const standardCategory = require('./serviceCategory/types/standardCategory.js');
const comfortCategory = require('./serviceCategory/types/comfortCategory.js');
const premiumCategory = require('./serviceCategory/types/premiumCategory.js');
const journeyService = require('./journey/journey.js');


comfortCategory.metodo();

/**
 * Standard, Comfort y Premium son "hijas" de Category, 
 * de esta forma encapsularemos variaciones de comportamiento 
 * por Categoria dependiendo de su propio tipo.
 **/ 
 

/* UfoService con Standard
var standard = standardCategory.init();
var premium = premiumCategory.init();
var journey = journeyService.init("Murcia Galaxy", "Son Banya", 666);

var ufoStandard = ufoService.init("Winga", "Maquinaria pesada", journey, premium, []);

console.log(ufoStandard.getName());

console.log(ufoStandard.getDescription());
console.log(ufoStandard.getCategory().getName()); // Metodo de Category

console.log(Object.getPrototypeOf(ufoStandard.getCategory()));
console.log(ufoStandard.getCategory().getDiscount(new Date(2021, 11, 1)));
console.log('\n\n\n');*/

/*
// UfoService con Comfort
var comfort = comfortCategory.init();
var ufoComfort = ufoService.init("SpicyFlighter", "hehe", comfort);

console.log(ufoComfort.getName());

console.log(ufoComfort.getDescription());
console.log(ufoComfort.getCategory().getName()); // Metodo de Category

console.log(Object.getPrototypeOf(ufoComfort.getCategory()));
console.log(ufoComfort.getCategory().calculateDiscount());
console.log('\n\n\n');


// UfoService con Premium
var premium = premiumCategory.init();
var ufoPremium = ufoService.init("SpaceXXX", "xxxxxxxxx", premium);

console.log(ufoPremium.getName());

console.log(ufoPremium.getDescription());
console.log(ufoPremium.getCategory().getName()); // Metodo de Category

console.log(Object.getPrototypeOf(ufoPremium.getCategory()));
console.log(ufoPremium.getCategory().calculateDiscount());



*/