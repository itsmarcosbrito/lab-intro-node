class SortedList {
  constructor() {
  this.items = [];
  this.length = this.items.length;
}
  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a - b); //Sort ((a,b) => a-b)
    this.length ++;  // +1 devido ao add item ao length 
    return this.items;
  }

  get(pos) {}

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;