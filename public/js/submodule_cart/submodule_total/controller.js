// Cart.Total Sub-module - TOTAL Controller

// --> js/submodule_cart/submodule_total/controller.js

App.module("Cart.Total", function(Total, App, Backbone, Marionette, $, _) {

    init: function() {
      // Load Products
      cartTotal = new App.Cart.Total.Entities.Final();
    },
    calculate: function(model) {
      var priceToAdd = model.attributes.price;
      
      cartTotal.set({"ammount": cartTotal.attributes.ammount + priceToAdd})
      // Products View
      cartTotalView = new App.Cart.Total.Views.Final({
        model: cartTotal
      })
      // show
      App.regions.total.show(cartTotalView)
    }
  }
})
