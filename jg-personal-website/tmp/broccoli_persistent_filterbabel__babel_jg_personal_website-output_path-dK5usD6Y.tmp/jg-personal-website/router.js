define('jg-personal-website/router', ['exports', 'ember', 'jg-personal-website/config/environment'], function (exports, _ember, _jgPersonalWebsiteConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _jgPersonalWebsiteConfigEnvironment['default'].locationType,
    rootURL: _jgPersonalWebsiteConfigEnvironment['default'].rootURL
  });

  Router.map(function () {});

  exports['default'] = Router;
});