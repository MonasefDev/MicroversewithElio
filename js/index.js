let total = 0;
let items = [];
let values = [];

function createItemsList() {
  let string = "";
  for (let idx in items) {
    string += `${items[idx]}: ${values[idx]}\n`;
  }
  return string;
}

function addItem(id, value) {
  if (items.includes(id)) {
    console.log("This item was added already!");
    return 1;
  }
  total += parseInt(value);
  items.push(id);
  values.push(value);
  alert(`Your cart:\n${createItemsList()}\nYour total is: ${total}`);
}
