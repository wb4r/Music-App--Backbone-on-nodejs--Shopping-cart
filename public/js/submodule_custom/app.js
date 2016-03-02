// Custom Sub-module - CUSTOM Controller

// --> js/submodule_custom/controller.js

App.module("Custom", function(Custom, App, Backbone, Marionette, $, _) {


})

App.Custom.on("before:start", function() {
  var Layout = Marionette.LayoutView.extend({
    el: "#custom-region",
    regions: {
      button: "#button",
      list: "#list",
    }
  });

  App.Custom.regions = new Layout();
})
