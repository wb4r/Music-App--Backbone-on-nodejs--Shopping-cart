// Custom Sub-module - Entities

// --> js/submodule_custom/entities/entities.js

App.module("Custom.Entities", function(Entities, App, Backbone, Marionette, $, _) {

  Entities.Track = Backbone.Model.extend({
    urlRoot: "http://0.0.0.0:3000/albums/",
    url: function() {
      var url = this.urlRoot + this.title + ".json";
      return url;
    },
    defaults: {
      artist: "",
      title: "",
      price: ""
    }
  });

  Entities.Album = Backbone.Collection.extend({
    model: Entities.Track,
    url: ""
  });

  Entities.AlbumPack = Backbone.Model.extend({
    defaults: {
      title: "",
      price: "",
      cover: "",
      tracks: []
    }
  })
})
