# Singleton Pattern

If you need to make sure that you have one and only one instance of an object. This is where the singleton pattern can be useful. A singleton represents a single instance of an object. Only one can be created, no matter how many times the object is instantiated

## Intent

Ensure a class only has one instance, and provide a global point of access to it.

# Problem

There is Logger class that can be used for logging the messages. Let see below, Store class and Shopper class want to use logger and each of them need to create new instance of Logger class, even loggers have all the same function.

Logger.js

```javascript
class Logger {
  constructor() {
    this.logs = [];
  }

  get count() {
    return this.logs.length;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    this.logs.push({ message, timestamp });
    console.log(`${timestamp} - ${message}`);
  }
}

module.exports = Logger;
```

Store.js

```javascript
const Logger = require("./Logger");

const logger = new Logger();

class Store {
  constructor(name, inventory = []) {
    this.name = name;
    this.inventory = inventory;
    logger.log(`New store: ${name} has ${inventory.length} items in stock.`);
  }
}

module.exports = Store;
```

Shopper.js

```javascript
const Logger = require("./Logger");

const logger = new Logger();

class Shopper {
  constructor(name, money = 0) {
    this.name = name;
    this.money = money;
    logger.log(`New shopper: ${name} has ${money} in their account.`);
  }
}

module.exports = Shopper;
```

index.js

```javascript
const Logger = require("./Logger");
const Store = require("./Store");
const Shopper = require("./Shopper");

const logger = new Logger();

logger.log("Starting app...");

const josh = new Shopper("Josh", 10000);
const hatShop = new Store("Nice Hat Shop", [
  {
    item: "Red Hat",
    price: 200,
    quantity: 10,
  },
  {
    item: "Blue Hat",
    price: 250,
    quantity: 8,
  },
]);

logger.log("Finished config...");

logger.log(`${logger.count} logs in total.`);
```

As you can see, if we want to use Logger in 3 files, we have to create new instances every time and it really waste the memory. It could be better if we create single intance and reuse it anywhere we want.
