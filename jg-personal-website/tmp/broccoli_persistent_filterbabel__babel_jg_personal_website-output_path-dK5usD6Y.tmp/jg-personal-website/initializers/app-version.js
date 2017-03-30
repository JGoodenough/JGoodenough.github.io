define('jg-personal-website/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'jg-personal-website/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _jgPersonalWebsiteConfigEnvironment) {
  var _config$APP = _jgPersonalWebsiteConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});