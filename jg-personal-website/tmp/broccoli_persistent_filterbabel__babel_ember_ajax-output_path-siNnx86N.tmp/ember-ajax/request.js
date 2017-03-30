define('ember-ajax/request', ['exports', 'ember-ajax/ajax-request'], function (exports, _emberAjaxAjaxRequest) {
  exports['default'] = request;

  /**
   * Helper function that allows you to use the default `ember-ajax` to make
   * requests without using the service.
   *
   * Note: Unlike `ic-ajax`'s `request` helper function, this will *not* return a
   * jqXHR object in the error handler.  If you need jqXHR, you can use the `raw`
   * function instead.
   *
   * @public
   */

  function request() {
    var ajax = new _emberAjaxAjaxRequest['default']();
    return ajax.request.apply(ajax, arguments);
  }
});