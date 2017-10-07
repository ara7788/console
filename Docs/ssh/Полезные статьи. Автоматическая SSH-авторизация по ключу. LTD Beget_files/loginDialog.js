// Generated by CoffeeScript 1.12.4
var LoginDialog,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

LoginDialog = (function(superClass) {
  extend(LoginDialog, superClass);

  function LoginDialog() {
    return LoginDialog.__super__.constructor.apply(this, arguments);
  }

  LoginDialog.prototype.debug = false;

  LoginDialog.prototype.el = '#login-dialog';

  LoginDialog.prototype.events = {
    'submit #login-form': 'login'
  };

  LoginDialog.prototype.login = function(e) {
    var button, codeField, form, login, password, remember, request;
    e.preventDefault();
    form = $('#login-form');
    button = $('#login-submit');
    if (button.hasClass('disabled')) {
      return;
    }
    button.button('loading');
    codeField = $('#two-factor', form);
    login = $('[name=login]', form).val();
    password = $('[name=password]', form).val();
    remember = $('[name=remember]', form).prop('checked');
    request = {
      login: login,
      password: password
    };
    if (remember) {
      request.save_me = "true";
    }
    if (codeField.is(":visible")) {
      request.code = $('input', codeField).val();
    }
    return $.post("https://auth.beget.com/auth", JSON.stringify(request), function(data) {
      var errorCode;
      button.button('reset');
      if (data.token != null) {
        window.location.replace('https://cp.beget.com/auth?token=' + data.token);
        return;
      }
      if (data.errors != null) {
        errorCode = Object.keys(data.errors)[0];
        if (errorCode === "10018" || errorCode === "10019" || errorCode === "10020") {
          codeField.removeClass("hidden");
          setTimeout(function() {
            return $('input', codeField).focus();
          }, 100);
          return;
        }
      }
      return window.location.replace('https://cp.beget.com/login');
    });
  };

  return LoginDialog;

})(BB.Widget);
