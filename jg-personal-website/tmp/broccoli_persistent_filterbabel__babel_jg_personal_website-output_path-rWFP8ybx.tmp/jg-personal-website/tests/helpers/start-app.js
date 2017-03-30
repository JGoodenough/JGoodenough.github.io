define('jg-personal-website/tests/helpers/start-app', ['exports', 'ember', 'jg-personal-website/app', 'jg-personal-website/config/environment'], function (exports, _ember, _jgPersonalWebsiteApp, _jgPersonalWebsiteConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var attributes = _ember['default'].merge({}, _jgPersonalWebsiteConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    return _ember['default'].run(function () {
      var application = _jgPersonalWebsiteApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});