export default Ember.Component.extend({
  tagName:'div',
  attributeBindings:['elementName'],
  elementName: '',
  dragOver: function(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  },
  drop: function(event) {
    var item = event.dataTransfer.getData('text');
    var o = JSON.parse(item);
    event.preventDefault();
    if (o.container){
      this.sendAction('dropAction', o.item, this.elementName, o.elementName);
    } else {
      this.sendAction('dropAction', o, this.elementName);
    }
    return false;
  }
});