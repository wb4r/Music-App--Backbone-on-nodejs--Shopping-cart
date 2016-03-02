// Custom Sub-module - Views

// --> js/submodule_custom/views/views.js

App.module("Custom.Views", function(Views, App, Backbone, Marionette, $, _) {

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

    events: {
      "click .buy-custom"   :   "addCustomToCart"
    },

    addCustomToCart: function(e) {
      e.preventDefault();
      // e.stopPropagation()
      this.trigger("custom:buy", this.collection)
    }
  });
})
