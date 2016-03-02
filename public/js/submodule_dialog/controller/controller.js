// Dialog Sub-module - CONTROLLER

// --> js/submodule_dialog/controller/controller.js

App.module("Dialog", function(Dialog, App, Backbone, Marionette, $, _) {
  Dialog.Controller = {

    showTracks: function(model) {

      // build url per parts
      var stdURL = "../../../albums/",
          albumTitleUrl,
          appendUrl = ".json";

      // get url from model
      if (model) {
        albumTitleUrl = model.attributes.title.split(" ").join("%20")
      } else {
        albumTitleUrl = "albums"
      }

      var url = stdURL + albumTitleUrl + appendUrl;

      // Load Albums
      var tracks = new App.Dialog.Entities.Tracks({
        url: url
      });
      tracks.fetch();

      // Albums View
      var tracksView = new App.Dialog.Views.Tracks({
        model: model,
        collection: tracks
      })

      var albumsView = new App.Dialog.Views.Album({
        model: model
      })

      tracksView.open()
      App.Dialog.regions.dialogTracks.show(tracksView)
      App.Dialog.regions.dialogHeader.show(albumsView)


      tracksView.on("childview:track:addToCustom", function(childView, model) {
        model.set({"artist": childView._parent.model.attributes.artist})
        App.Custom.Controller.addToList(model)
      })
    }
  }

})
