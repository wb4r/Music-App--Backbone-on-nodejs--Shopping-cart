// Cart Sub-module - VIEWS

// --> js/submodule_cart/views/views.js

App.module("Cart.Views", function(Views, App, Backbone, Marionette, $, _) {

  Views.Product = Marionette.ItemView.extend({
    template: "#cart-item",
    className: "",
  });

  Views.Products = Marionette.CompositeView.extend({
    template: "#cart-items",
    childView: Views.Product,
    childViewContainer: ".col-xs-2 > ol"
  });
})