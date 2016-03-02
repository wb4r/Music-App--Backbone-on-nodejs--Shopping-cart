// Custom Sub-module - Views

// --> js/submodule_custom/views/views.js

App.module("Custom.Views", function(Views, App, Backbone, Marionette, $, _) {

  Views.BuyBtn = Marionette.ItemView.extend({
    template: "#custom-btn-buy",

    triggers: {
      "click .buy-custom"   :   "addCustomToCart"
    }
  })

  Views.Track = Marionette.ItemView.extend({
    template: "#custom-track",
    className: "",

    events: {
      "click .btn-deletetrack"   :   "deleteTrack"
    },

    deleteTrack: function(e) {
      e.preventDefault();
      this.trigger("track:delete", this.model);
    }
  });

  Views.Album = Marionette.CompositeView.extend({
    template: "#custom-album",
    childView: Views.Track,
    childViewContainer: "ol",
  });
})
