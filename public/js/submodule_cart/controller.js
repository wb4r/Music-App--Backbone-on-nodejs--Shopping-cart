// Cart Sub-module - CART Controller

// --> js/submodule_cart/controller.js

App.module("Cart", function(Cart, App, Backbone, Marionette, $, _) {
  var cartProducts,
      cartProductsView,
      cartTotal;

  Cart.Controller = {
    startCart: function() {
      // Load Products
      cartProducts = new App.Cart.Entities.Products();

      // Products View
      cartProductsView = new App.Cart.Views.Products({
        collection: cartProducts
      })

      cartProductsView.on("childview:item:delete", function(childView, model) {
        cartProducts.remove(model)
        App.Cart.Total.Controller.reduce(model)
      })

      cartProductsView.on("childview:album:show", function(childView, model) {
        if (model.attributes.collection !== undefined) {
          _.each(model.attributes.collection, function(model) {
            App.Custom.Controller.addToList(model)
          })
          $("#custom-name").val(model.attributes.title);
          cartProducts.remove(model)
          App.Cart.Total.Controller.reduce(model)
        }
      })
    },
    addToList: function(model) {
      new_product = new App.Cart.Entities.Product();

      new_product.set({"title": model.attributes.title})
      new_product.set({"price": model.attributes.price})
      new_product.set({"cover": model.attributes.cover})
      new_product.set({"collection": model.attributes.collection})

      cartProducts.add(new_product)
      App.Cart.Total.Controller.calculate(new_product)
      App.regions.cart.show(cartProductsView)
    }

  }
})
