# UferProto project
Little web app using OLOO for the business domain logic, and encapsulating that in expressJS using a nodeJS server, also a little CLI UI version for demostrate the clean architecture.

## Clean Architecture
> “Your architectures should tell readers about the system, not about the frameworks you used in your system” — Robert C. Martin

Resilient software is divided into layers, underpinned by business logic and is independent of technologies. 

It should be:

1. **Independent of Frameworks**. Libraries and frameworks should be treated as tools and not dependencies.
2. **Testable**. Can be tested without external dependencies.
3. **Independent of UI**. You can easily switch CLI UI, Web...etc.
4. **Independent of Database**. Switch out SQL for MongoDB or in memory database.
5. **Independent of any external agency**. Business rules don't know anything about outside world.

![The Clean Architecture diagram](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

In practice, choice of technology should be the last decision you make or code you write (e.g. database, platform, framework).

By following clean architecture, you can write software today that can be easily switched out for different technologies in the future.

## Practical Example of Clean Architecture in Node.js
This is an example of a simple CRUD application with layered software and separation of business logic vs technology. 

It is a simple API for creating `serviceCategories`, `journeys`, `ufoServices` and `ufoVehicles`, persistence and UI. It includes examples using different interfaces (CLI and Web), databases (in memory, MongoDB, PostgreSQL).

[Click here for github repo.](https://github.com/Charlos16v/uferProto)

*Note: this application is different to the Clean Architecture diagram above but attempts to achieve the same outcome.*

### Software layer overview
The application is separated into three layers. Inner layers cannot depend on outer layers and outer layers should only depend one layer in:

- **Inner Layer**
  - **Domain**. Handles the creation, validation and reading of our entities (serviceCategories, journeys, ufoServices and ufoVehicles). Note that this should be custom logic and not include the DB implementation of models (e.g. in Mongoose DB ORM, their models should be encapsulated in the DB layer below). Our model schemas live here. 
  - **DB**. My choice of DB (in memory, MongoDB, PostgreSQL), this is independent of the model. Note that in Clean Architecture this is considered an outer layer framework, but for practical applications I find it easier to place it inner and have the data-access layer depend on it rather than injecting it in.
- **Middle Layer**
  - **Data-Access**. Handles transfer between the DB (like an ORM). Depends on the model to validate and create the entity in DB. The key is to have a consistent & custom API that all outer layers communicate with. Testing here will ensure that replacing or using multiple DBs doesn't break anything further upstream. 
  - **Service-Layer**. It handles the transfer between the data-access layer and the controller. Basically, the use cases in which some small logic needs to be applied pass through the service layer, in this case reserveUfo and calculateServicePrice. Also the case of add in which they depend on other entities.
- **Outer Layer**
  - **Drivers**. Represents the UI or interface (Web or CLI). It communicates only with the middle layers.

## How use the app (.env...etc)


`.env example file`

```bash
PORT = 3333

MONGO_CLUSTER = example.dansj.mongodb.net
MONGO_DB = exampleDB
MONGO_DB_TEST = exampleDBTest
MONGO_USER = user
MONGO_PW = 1234
MONGO_DROPANDCREATE = false

PG_HOST = example
PG_USER = user
PG_PASSWORD = 1234
PG_DATABASE = exampleDB
PG_PORT = 5432
```


### Debug
#### Visual Studio Code:

`/.vscode/launch.json`

```json
{
  "name": "Launch via npm",
  "type": "node",
  "request": "launch",
  "cwd": "${workspaceFolder}",
  "runtimeExecutable": "npm",
  "runtimeArgs": ["run-script", "debug"]
}
```


## User Stories

## Switch UI
```bash
NODE_ENV=dev node drivers/cli/index.js --help // Help menu.

NODE_ENV=dev node drivers/cli/index.js --index // GetAll ServiceCategories.

NODE_ENV=dev node drivers/cli/index.js --show {name} // Show ServiceCategory by name.

NODE_ENV=dev node drivers/cli/index.js --del {id}  // Delete ServiceCategory by id.
```


## Switch DB

```javascript
const {
    getAll,
    findByProperty,
    add,
    deleteById
  } 
  
  // switch out db as required
  // = require('./memory/index.js') <--
  // = require('./mongo/index.js')  <--
  // = require('./pg/index.js')     <--
  
  
  const serviceCategoryDB = {
    getAll,
    findByProperty,
    add,
    deleteById
  }
  
  module.exports = serviceCategoryDB;
```

  