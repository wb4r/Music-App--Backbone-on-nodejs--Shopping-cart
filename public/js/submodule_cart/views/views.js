// Cart Sub-module - VIEWS

// --> js/submodule_cart/views/views.js

App.module("Cart.Views", function(Views, App, Backbone, Marionette, $, _) {

  Views.Product = Marionette.ItemView.extend({
    template: "#cart-item",
    className: "",

    events: {
      "click .btn-deleteitem"   :   "deleteItem",
      "click .cart-album-link"  :   "cartShowAlbum"
    },

    deleteItem: function(e) {
      e.preventDefault();
      this.trigger("item:delete", this.model);
    },
    cartShowAlbum: function(e) {
      e.preventDefault();
      this.trigger("album:show", this.model)
    }
  });

  Views.Products = Marionette.CompositeView.extend({
    template: "#cart-items",
    childView: Views.Product,
    childViewContainer: "ol"
  });
})
