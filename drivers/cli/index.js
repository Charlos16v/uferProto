let args = require('yargs-parser')(process.argv.slice(2))
const serviceCategoryDB = require('../../data-access/serviceCategoryDB/index.js')

let printHelp = function () {
    console.log(`
    ServiceCategory CLI UI!
    
    ==============================================
    Help usage:
    --index        list service categories.
    --show {name}  find serviceCategory by name.
    --del {id}     delete serviceCategory by id.
    --help         print help.
    ==============================================
  `);
}

let valid = args.index || args.show || args.del

// NODE_ENV=dev node drivers/cli/index.js --help
if (args.help || !valid) {
    printHelp()
    process.exit(1)
}

// NODE_ENV=dev node drivers/cli/index.js --index
if (args.index) {
    serviceCategoryDB.getAll().then(data => {
        console.log(data);
        process.exit(1)
    })
}

// NODE_ENV=dev node drivers/cli/index.js --show 'Premium'
if (args.show) {
    serviceCategoryDB.findByProperty('name', args.show).then(data => {
        console.log(data);
        process.exit(1)
    })
}

// NODE_ENV=dev node drivers/cli/index.js --del 3 
if (args.del) {
    serviceCategoryDB.deleteById(args.del).then(data => {
        console.log(data);
        process.exit(1)
    })
}