'use strict';

define('jg-personal-website/tests/app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint.\n');
  });
});
define('jg-personal-website/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('jg-personal-website/tests/helpers/destroy-app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/destroy-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint.\n');
  });
});
define('jg-personal-website/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'jg-personal-website/tests/helpers/start-app', 'jg-personal-website/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _jgPersonalWebsiteTestsHelpersStartApp, _jgPersonalWebsiteTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _jgPersonalWebsiteTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _jgPersonalWebsiteTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('jg-personal-website/tests/helpers/module-for-acceptance.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/module-for-acceptance.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint.\n');
  });
});
define('jg-personal-website/tests/helpers/resolver', ['exports', 'jg-personal-website/resolver', 'jg-personal-website/config/environment'], function (exports, _jgPersonalWebsiteResolver, _jgPersonalWebsiteConfigEnvironment) {

  var resolver = _jgPersonalWebsiteResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _jgPersonalWebsiteConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _jgPersonalWebsiteConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('jg-personal-website/tests/helpers/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint.\n');
  });
});
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
define('jg-personal-website/tests/helpers/start-app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/start-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint.\n');
  });
});
define('jg-personal-website/tests/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint.\n');
  });
});
define('jg-personal-website/tests/router.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - router.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint.\n');
  });
});
define('jg-personal-website/tests/test-helper', ['exports', 'jg-personal-website/tests/helpers/resolver', 'ember-qunit'], function (exports, _jgPersonalWebsiteTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_jgPersonalWebsiteTestsHelpersResolver['default']);
});
define('jg-personal-website/tests/test-helper.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - test-helper.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint.\n');
  });
});
require('jg-personal-website/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
