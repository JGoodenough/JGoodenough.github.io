define('jg-personal-website/app', ['exports', 'ember', 'jg-personal-website/resolver', 'ember-load-initializers', 'jg-personal-website/config/environment'], function (exports, _ember, _jgPersonalWebsiteResolver, _emberLoadInitializers, _jgPersonalWebsiteConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _jgPersonalWebsiteConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _jgPersonalWebsiteConfigEnvironment['default'].podModulePrefix,
    Resolver: _jgPersonalWebsiteResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _jgPersonalWebsiteConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});