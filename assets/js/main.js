/*===== DRAG and DROP =====*/
const dragItems = document.getElementById('drag-items');

new Sortable(dragItems, {
  animation: 350,
  chosenClass: 'item-chosen',
  dragClass: 'item-drag',
  store: {
    // We keep the order of the list
    set: (sortable) => {
      const order = sortable.toArray();
      localStorage.setItem(sortable.options.group.name, order.join('|'));
    },

    // We get the order of the list
    get: (sortable) => {
      const order = localStorage.getItem(sortable.options.group.name);
      return order ? order.split('|') : [];
    },
  },
});
