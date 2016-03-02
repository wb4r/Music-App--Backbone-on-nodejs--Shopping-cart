// Dialog Sub-module - VIEWS

// --> js/submodule_dialog/views/views.js

App.module("Dialog.Views", function(Views, App, Backbone, Marionette, $, _) {

  Views.Album = Marionette.ItemView.extend({
    template: "#dialog-album"
  })

  Views.Track = Marionette.ItemView.extend({
    template: "#dialog-track",
    // className: "col-xs-10"
    events: {
      "click .addTrack"   :   "addTrack"
    },

    addTrack: function(e) {
      e.preventDefault();
      this.trigger("track:addToCustom", this.model)
    }
  });

  Views.Tracks = Marionette.CompositeView.extend({
    template: "#dialog-tracks",
    childView: Views.Track,
    childViewContainer: ".well ol",

    events: {
      "click .closeDialog"  :   "closeDialog",
    },

    open: function() {
      this.$el.add($("#overlay")).fadeIn(300)
    },
    closeDialog: function(e) {
      e.preventDefault();
      this.trigger("album:close", this.model);
      this.$el.fadeOut(300)
      $("#overlay").fadeOut(300)
      App.Dialog.regions.dialogTracks.reset()
      App.Dialog.regions.dialogHeader.reset()
    }
  })

})
