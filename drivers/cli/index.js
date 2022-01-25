let args = require('yargs-parser')(process.argv.slice(2))
let serviceCategoryDB = require('../../data-access/serviceCategoryDB/index.js')

let printHelp = function () {
    console.log(`
    Help usage:
    --index        list service categories.
    --show {name}  find serviceCategory by name.
    --help         print help.
  `);
}

let valid = args.index || args.show

if (args.help || !valid) {
    printHelp()
    process.exit(1)
}

// node drivers/cli/index.js --index 
if (args.index) {
    serviceCategoryDB.getAll().then(data => {
        console.log(data);
        process.exit(1)
    })
}

// node drivers/cli/index.js --show 'Premium'
if (args.show) {
    serviceCategoryDB.findByProperty('name', args.show).then(data => {
        console.log(data);
        process.exit(1)
    })
}