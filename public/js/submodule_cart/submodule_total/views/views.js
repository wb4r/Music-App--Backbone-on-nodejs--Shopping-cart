// Cart.Total Sub-module - TOTAL Views

// --> js/submodule_cart/submodule_total/views.js

App.module("Cart.Total.Views", function(Views, App, Backbone, Marionette, $, _) {
// App.module("Cart.Total", function(Total, App, Backbone, Marionette, $, _) {
  // App.Cart.Total.View.Total
  Views.Final = Marionette.ItemView.extend({
    template: "#cart-total",
    className: ""
  })
})
