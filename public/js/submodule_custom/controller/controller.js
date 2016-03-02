// Custom Sub-module - CUSTOM Controller

// --> js/submodule_custom/controller.js

App.module("Custom", function(Custom, App, Backbone, Marionette, $, _) {

  Custom.Controller = {
    btnPrice: 0,
    init: function() {
      var self = this;

      customBuyBtn = new App.Custom.Views.BuyBtn();
      customAlbum = new App.Custom.Entities.Album();
      customAlbumView = new App.Custom.Views.Album({
        collection: customAlbum
      })

      customAlbumView.on("childview:track:delete", function(childView, model) {
        customAlbum.remove(model)
        self.removeForButton(model.attributes.price)
      })

      customBuyBtn.on("addCustomToCart", function(childView, collection) {
        var totalprice,
            albumName,
            cover,
            trackList;

        if (customAlbum.length > 0) {
          totalprice = self.getTotalPrice();
          albumName = $("#custom-name").val();
          cover = "https://image.freepik.com/free-psd/psd-vinyl-record-icon_30-1865.jpg";
          trackList = ["alfa", "bravo", "charlie"];

          var new_model_album = new App.Custom.Entities.AlbumPack({
            title: albumName,
            price: totalprice,
            cover: cover,
            collection: customAlbum.models
          })
          // new_model_album.collection = customAlbum;

          App.Cart.Controller.addToList(new_model_album)
          customAlbum.reset();
          $("#custom-name").val("");
          $(".totalCustomInBtn").text("0.00");
          self.btnPrice = 0;
        }
      })

      App.Custom.regions.list.show(customAlbumView)
      App.Custom.regions.button.show(customBuyBtn)
    },

    addToList: function(model) {
      var new_track = new App.Custom.Entities.Track(),
          price;

      new_track.set({"title": model.attributes.title})
      new_track.set({"artist": model.attributes.artist})
      new_track.set({"price": 1.25})
      // new_track.set({"price": this.getPrice()})

      this.addForButton(new_track.attributes.price)

      customAlbum.add(new_track)
      App.Custom.regions.list.show(customAlbumView)
    },

    getPrice: function() {
      var prices = [1.1, 1.25, 0.75, 0.6, 0.99, 1.99, 1.25, 0.75, 0.6, 0.99]

      var price = prices[Math.floor(Math.random()*prices.length)];
      return price
    },
    getTotalPrice: function() {
      var total = 0;

      _.each(customAlbum.models, function(track) {
         total += track.attributes.price
      })
      return total;
    },
    addForButton: function(price) {
      this.btnPrice += price;
      $(".totalCustomInBtn").text(this.btnPrice.toFixed(2))
    },
    removeForButton: function(price) {
      this.btnPrice -= price;
      $(".totalCustomInBtn").text(this.btnPrice.toFixed(2))
    }
  }
})
