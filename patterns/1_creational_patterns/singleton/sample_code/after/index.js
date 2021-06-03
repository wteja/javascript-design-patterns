const Logger = require("./Logger");
const Store = require("./Store");
const Shopper = require("./Shopper");

const logger = Logger.getInstance();

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
