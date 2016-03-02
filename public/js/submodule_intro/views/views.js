// Intro Sub-module - VIEWS

// --> js/submodule_intro/views/views.js

App.module("Intro.Views", function(Views, App, Backbone, Marionette, $, _) {

  Views.Album = Marionette.ItemView.extend({
    template: "#intro-album",
    className: "col-xs-3",

    events: {
      "click .btn-show-tracks"  :   "goToTracks",
      "click .cart-btn"         :   "callingCart",
      "mouseenter .cart-btn"     :   "showPrice",
      "mouseleave .cart-btn"     :   "hidePrice"
    },
    goToTracks: function(e) {
      this.trigger("album:show", this.model);
    },
    callingCart: function(e) {
      e.preventDefault();
      this.trigger("album:buy", this.model);
    },
    showPrice: function(e) {
      $(e.target).children().removeClass("fa-cart-plus").addClass("cart-text-substitute");
      $(e.target).children().text(this.model.attributes.price);
    },
    hidePrice: function(e) {
      $(e.target).children().text("")
      $(e.target).children().removeClass("cart-text-substitute").addClass("fa-cart-plus");
    }
  });

  Views.Albums = Marionette.CompositeView.extend({
    template: "#intro-albums",
    childView: Views.Album,
    childViewContainer: ".row"
  })
})
