let cart = {
  total: 0,
  items: {},
};

function createItemsList() {
  return Object.entries(cart.items)
    .map(([item, value]) => `${item}: ${value}`)
    .join("\n");
}

function addItem(id, value) {
  if (cart.items[id]) {
    alert("This item was added already!");
    return;
  }

  cart.items[id] = value;
  cart.total += parseInt(value);
  alert(`Your cart:\n${createItemsList()}\nYour total is: ${cart.total}`);
}
