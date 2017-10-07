// Generated by CoffeeScript 1.12.4
var langPath;

langPath = function(path) {
    return {
        'ru-RU': '/ru/',
        'en-GB': '/en/',
        'de-DE': '/de/'
    }[document.documentElement.lang] + path;
};

$("#en_lang").click(function(e) {
    var location;
    location = document.location.pathname;
    if (location === '/ru' || location === '/de' || location === '/en') {
        location = '';
    } else {
        location = document.location.pathname.replace(/\/ru\/|\/en\/|\/de\//g, "");
    }
    return document.location = "/en/" + location;
});

$("#de_lang").click(function(e) {
    var location;
    location = document.location.pathname;
    if (location === '/ru' || location === '/de' || location === '/en') {
        location = '';
    } else {
        location = document.location.pathname.replace(/\/ru\/|\/en\/|\/de\//g, "");
    }
    return document.location = "/de/" + location;
});

$("#ru_lang").click(function(e) {
    var location;
    location = document.location.pathname;
    if (location === '/ru' || location === '/de' || location === '/en') {
        location = '';
    } else {
        location = document.location.pathname.replace(/\/ru\/|\/en\/|\/de\//g, "");
    }
    return document.location = "/ru/" + location;
});

$(document).ready(function() {
    var all_height, cookieNot, cookieStatus, footer_height, header_height, header_submenu, main_height;
    all_height = $(document).outerHeight();
    footer_height = $('#footer').outerHeight();
    header_height = $('#header').outerHeight();
    header_submenu = $('#head-submenu').outerHeight();
    main_height = $('#main').outerHeight();
    document.main_slider = new mainSlider();
    document.client_slider = new clientSlider();
    document.sections_menu = new blocksMenu();
    document.head_phone = new headPhoneDropdown();
    document.login = new LoginDialog();
    if (bowser.msie || (bowser.opera && parseInt(bowser.version) <= 12)) {
        $('#login-dialog').addClass('old-browser');
    }
    if (bowser.msie && parseInt(bowser.version) < 9) {
        $('.selectpicker').removeClass('selectpicker');
        $('input[type=checkbox]').show();
    }
    if (BB.Device.isMobile()) {
        $('.selectpicker').selectpicker('mobile');
    } else {
        $('.selectpicker').selectpicker();
    }
    $('#login-dialog').modal({
        show: false
    });
    $('#login-dialog').on('shown.bs.modal', function(e) {
        $('#login-input').focus();
        $('#two-factor').val('');
        return $('#two-factor').addClass('hidden');
    });
    $('.login').click(function(e) {
        e.preventDefault();
        return $('#login-dialog').modal('show');
    });
    $('#login-close').click(function(e) {
        e.preventDefault();
        $('#two-factor').val('');
        $('#two-factor').addClass('hidden');
        return $('#login-dialog').modal('hide');
    });

    Cookies.set('begetcom','iamnotabot');

    cookieNot = $('#cookie-notification');
    cookieStatus = Cookies.get('cookie-notification');
    if (cookieStatus !== 'closed') {
        cookieNot.removeClass('hidden');
    }
    $('#cookie-close-button').click(function() {
        Cookies.set('cookie-notification', 'closed', {
            expires: 365
        });
        return cookieNot.addClass('hidden');
    });
    $(".fancybox").fancybox({
        prevEffect: 'none',
        nextEffect: 'none',
        helpers: {
            title: {
                type: 'outside'
            },
            thumbs: {
                width: 50,
                height: 50
            },
            overlay: {
                locked: false
            }
        }
    });
    $(".cpdesc").click(function(event) {
        var b, modalContainer, modalbody, modalcontent, modaldialog, modalheader;
        event.preventDefault();
        modalContainer = $("<div></div>").appendTo($("#footer-copy")).addClass("modal fade");
        modaldialog = $("<div></div>").appendTo(modalContainer).addClass("modal-dialog");
        modalcontent = $("<div></div>").appendTo(modaldialog).addClass("modal-content");
        modalheader = $("<div></div>").appendTo(modalcontent).addClass("modal-header").height(20);
        b = $("<button></button>").addClass("close").attr("aria-label", "Close").attr("data-dismiss", "modal").appendTo(modalheader).html("<span aria-hidden='true'>&times;</span>");
        $("<h4></h4>").addClass("modal-title").html("CP").appendTo(modalheader);
        modalbody = $("<div></div>").appendTo(modalcontent).addClass("modal-body");
        modalbody.html("<p style='color:#000; font-size:16px;'><b>CP</b> —  это абстрактная величина характеризующая количество процессорного времени потраченного процессорами на обработку процессов пользователей, получаемая стандартными средствами ядра linux.<br><br> Значение данного параметра зависит как от посещаемости сайта, так и от самого сайта, от подключённых модулей и т.п. Поэтому оценить какую нагрузку будет создавать тот или иной сайт можно только примерно и при детальном изучении сайта. В данном случае правильнее и быстрее перенести к нам сайт и посмотреть создаваемую им нагрузку. </p>");
        return modalContainer.modal({
            show: true
        });
    });
    return $('#logoutCp').on('click', function(e) {
        var target;
        target = $(e.currentTarget);
        $("#logoutCp").attr("src", "https://cp.beget.com/logout");
        return $.ajax({
            url: langPath('logout'),
            async: false,
            method: 'post',
            beforeSend: function() {
                return target.button('loading');
            },
            complete: function() {
                return target.button('reset');
            },
            success: (function(_this) {
                return function(data) {
                    if (data != null) {
                        $('#loginWidget').html(data);
                        $('.login').off();
                        return $('.login').on('click', function(e) {
                            e.preventDefault();
                            return $('#login-dialog').modal('show');
                        });
                    }
                };
            })(this)
        });
    });
});