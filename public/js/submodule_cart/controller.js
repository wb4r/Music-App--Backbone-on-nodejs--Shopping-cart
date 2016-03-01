// Cart Sub-module - CART Controller

// --> js/submodule_cart/controller.js

App.module("Cart", function(Cart, App, Backbone, Marionette, $, _) {
  var cartProducts,
      cartProductsView;

  Cart.Controller = {
    startCart: function() {
      // Load Products
      cartProducts = new App.Cart.Entities.Products();
      // cartProducts.fetch();

      // Products View
      cartProductsView = new App.Cart.Views.Products({
        collection: cartProducts
      })
    },
    addToList: function(model) {
      cartProducts.add(model)

      // App.regions.cart.show(cartProductsView)
    }
  }
})
