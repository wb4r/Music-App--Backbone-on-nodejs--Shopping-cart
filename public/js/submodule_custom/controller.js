// Custom Sub-module - CUSTOM Controller

// --> js/submodule_custom/controller.js

App.module("Custom", function(Custom, App, Backbone, Marionette, $, _) {

  Custom.Controller = {
    init: function() {
      // Load Album
      customAlbum = new App.Custom.Entities.Album();

      // Album View
      customAlbumView = new App.Custom.Views.Album({
        collection: customAlbum
      })

      customAlbumView.on("childview:track:delete", function(childView, model) {
        customAlbum.remove(model)
      })

      // customAlbumView.on("childview:custom:buy", function(childView, collection) {
      //   console.log("collection");
      // })
    },
    addToList: function(model) {
      var new_track = new App.Custom.Entities.Track(),
          price;

      new_track.set({"title": model.attributes.title})
      new_track.set({"artist": model.attributes.artist})
      new_track.set({"price": this.getPrice()})

      customAlbum.add(new_track)
      App.regions.custom.show(customAlbumView)
    },
    getPrice: function() {
      var prices = [1.1, 1.25, 0.75, 0.6, 0.99, 1.99, 1.25, 0.75, 0.6, 0.99]

      var price = prices[Math.floor(Math.random()*prices.length)];
      return price
    }

  }
})
