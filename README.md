# Ember CLI DnD

## About ##

A ember component to make all elements drag- or dropable

## Install ##

```bash
npm install ember-cli-dnd --save-dev
```

## Usage ##

In a template use the `drag-element` or `drop-element` helper

```handlebars
<ul class="list-group">
  {{#each item in items}}
    {{#drag-element item=item.id elementName='something'}}
      <li class="list-group-item drag-element">{{item.name}}</li>
    {{/drag-element}}
  {{/each}}
</ul>
```

```handlebars
{{#drop-element dropAction='dropDelete' elementName='trash'}}
  <div> class="list-group-item list-group-item-danger">Trash</div>
{{/drop-element}}
```

In the controller for the template you must create an action that matches the name 
given in the helper.

```js
Ember.Controller.extend({
  actions: {
    dropDelete: function(item, elemetName, senderElement) {
      ...
    }
  }
});
```

Make special note of `this.set('savePromise', promise);` In order for
`async-button` to work correctly the promise in the action must be
assigned to the property of `<actionName>Promise`. So if you are using
an action named `destroyRecord` you need to assign to `destroyRecordPromise`.

### Options `drag-element` ###

#### `item` ####

This is the value to transfer to the `drop-element`, it can be a single value or a object.
Do not tranfer ember-data objects cause they do not serialize properly. 

#### `elementName` ####

This is a optional information to inform the `drop-element` where the information comes from.

### Options `drop-element` ###

#### `dropAction` ####

Provide the action name that should be called when a element is dropend onto.
The action handler gets the item `item`, element where its got droped onto `elemetName` and the element where it's coming from `senderElement`

#### `elementName` ####

This is a optional information to inform the `drop-element` where the information comes from.

## Authors ##

* [Thomas Ziegler](http://twitter.com/zauberertz)
