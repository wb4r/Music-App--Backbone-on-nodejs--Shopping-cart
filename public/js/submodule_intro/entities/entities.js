// Intro Sub-module - ENTITIES

// --> js/submodule_intro/entities/entities.js

App.module("Intro.Entities", function(Entities, App, Backbone, Marionette, $, _) {
  Entities.Album = Backbone.Model.extend({
    defaults: {
      artist:   "",
      title:    "",
      url:      "",
      date:     "",
      cover:    "",
      price:    ""
    }
  });

  Entities.Albums = Backbone.Collection.extend({
    // url: "https://gist.githubusercontent.com/willemtoledano/5feeee2f00a2c02979b7/raw/0a8c80875300e1a3f3ae5bdb937f772357aa9c9e/albums.json",
    url: "../../../albums.json",
    model: Entities.Album
  })
})
