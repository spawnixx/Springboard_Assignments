const express = require("express");
const router = express.Router();
const Item = require("../item");

/**
 * GET / => [item, ...]
 * Get all items
 * Returns JSON: {items: [{name, price}, ...]}
 */
router.get("/", (req, res, next) => {
  try {
    return res.json({ items: Item.findAll() });
  } catch (e) {
    return next(e);
  }
});
/**
 * POST / {name, price} => new-item
 * Add an item, giving name and price in JSON body.
 * Returns JSON: {added: {name, price}}
 */
router.post("/", (req, res, next) => {
  try {
    let newItem = new Item(req.body.name, req.body.price);
    return res.json({ item: newItem });
  } catch (e) {
    return next(e);
  }
});

/**
 * GET /[name] => item
 * Get a single item by name.
 * Returns JSON: {item: {name, price}}
 */
router.get("/:name", (req, res, next) => {
  try {
    let foundItem = Item.findByName(req.params.name);
    return res.json({ item: foundItem });
  } catch (e) {
    return next(e);
  }
});

/**
 * PATCH /[name] => item
 * Update a single item by name, giving new price in JSON body.
 * Returns JSON: {item: {name, price}}
 */
router.patch("/:name", (req, res, next) => {
  try {
    let foundItem = Item.update(req.params.name, req.body);
    return res.json({ item: foundItem });
  } catch (e) {
    return next(e);
  }
});

/**
 * DELETE /[name] => "Removed"
 * Delete a single item by name.
 * Returns JSON: {message: "Deleted"}
 */
router.delete("/:name", (req, res, next) => {
  try {
    Item.delete(req.params.name);
    return res.json({ message: "Deleted" });
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
