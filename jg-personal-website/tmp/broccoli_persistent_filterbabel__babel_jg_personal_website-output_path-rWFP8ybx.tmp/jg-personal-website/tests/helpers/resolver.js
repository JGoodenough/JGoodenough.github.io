define('jg-personal-website/tests/helpers/resolver', ['exports', 'jg-personal-website/resolver', 'jg-personal-website/config/environment'], function (exports, _jgPersonalWebsiteResolver, _jgPersonalWebsiteConfigEnvironment) {

  var resolver = _jgPersonalWebsiteResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _jgPersonalWebsiteConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _jgPersonalWebsiteConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});