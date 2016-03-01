// Cart Sub-module - ENTITIES

// --> js/submodule_cart/entities/entities.js

App.module("Cart.Entities", function(Entities, App, Backbone, Marionette, $, _) {

  Entities.Product = Backbone.Model.extend({
    urlRoot: "http://0.0.0.0:3000/albums/",
    url: function() {
      var url = this.urlRoot + this.title + ".json";
      return url;
    },
    defaults: {
      title: "",
      price: ""
    }
  });

  Entities.Products = Backbone.Collection.extend({
    model: Entities.Product,
    url: "",
    defaults: {
      total: 0
    }
  });
})
