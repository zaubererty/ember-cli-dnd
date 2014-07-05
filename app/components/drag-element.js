export default Ember.Component.extend({
  tagName:'div',
  attributeBindings:['draggable', 'elementName', 'item'],
  draggable: 'true',
  elementName: null,
  item: null,
  dragStart: function(event) {
  	if (this.get('elementName')){
  		var o = {};
  		o.container = true;
  		o.item = this.get('item');
  		o.elementName = this.get('elementName');
      event.dataTransfer.setData('text', JSON.stringify(o));
  	} else {
  		event.dataTransfer.setData('text', JSON.stringify(this.get('item')));
  	}
  }
});