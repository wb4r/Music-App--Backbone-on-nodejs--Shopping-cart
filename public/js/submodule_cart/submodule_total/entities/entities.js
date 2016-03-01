// Cart.Total Sub-module - TOTAL Entities

// --> js/submodule_cart/submodule_total/entities.js

App.module("Cart.Total.Entities", function(Entities, App, Backbone, Marionette, $, _) {
// App.module("Cart.Total", function(Total, App, Backbone, Marionette, $, _) {
  // App.Cart.Total.Entities.Total
  Entities.Final = Backbone.Model.extend({
    defaults: {
      ammount: 0
    }
  })
})
