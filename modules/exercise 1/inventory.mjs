const inventory = ["apples", "bananas", "carrots", "tortillas"];

export function addItem(item) {
  inventory.push(item);
  console.log(`${item} has been added to the inventory`);
}

export function removeItem(item) {
  const index = inventory.indexOf(item);
  if (index === -1) {
    console.log(`${item} could not be found in the inventory`);
    return;
  }
  console.log(`${item} has been removed`);
  inventory.splice(index, 1);
}

export const listItems = () => {
  console.log(`Inventory list:`);
  for (let item of inventory) {
    console.log(`${item}`);
  }
};


