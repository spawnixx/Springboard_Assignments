const items = require("./fakeDb");
const ExpressError = require("./expressError");
class item {
  constructor(name, price) {
    this.name = name;
    this.price = price;

    items.push(this);
  }

  static findAll() {
    return items;
  }

  static findByName(name) {
    let foundItem = items.find((item) => item.name === name);
    if (foundItem === undefined) {
      throw new ExpressError("Item not found", 404);
    }
    return foundItem;
  }

  static update(name, data) {
    let foundItem = items.find((item) => item.name === name);
    if (foundItem === undefined) {
      throw new ExpressError("Item not found", 404);
    }
    foundItem.name = data.name || foundItem.name;
    foundItem.price = data.price || foundItem.price;
    return foundItem;
  }

  static delete(name) {
    let foundItem = items.findIndex((item) => item.name === name);
    if (foundItem === undefined) {
      throw new ExpressError("Item not found", 404);
    }
    items.splice(foundItem, 1);
  }
}

module.exports = item;
