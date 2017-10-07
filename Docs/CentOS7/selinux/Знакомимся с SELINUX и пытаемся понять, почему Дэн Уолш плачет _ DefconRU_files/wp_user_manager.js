/*! WP User Manager - v1.4.0
 * http://wpusermanager.com
 * Copyright (c) 2016; * Licensed GPLv2+ */
jQuery(document).ready(function(a){var b=a(location),c={init:function(){this.ajax_remove_file(),this.directory_sort(),this.show_password()},checkPasswordStrength:function(a,b,c,d){var e=a.val();b.removeClass("short bad good strong"),d=d.concat(wp.passwordStrength.userInputBlacklist());var f=wp.passwordStrength.meter(e,d);switch(f){case 2:b.addClass("bad").html(pwsL10n.bad);break;case 3:b.addClass("good").html(pwsL10n.good);break;case 4:b.addClass("strong").html(pwsL10n.strong);break;case 5:b.addClass("short").html(pwsL10n.mismatch);break;default:b.addClass("short").html(pwsL10n["short"])}return f},ajax_remove_file:function(){a("a.wpum-remove-uploaded-file").on("click",function(b){b.preventDefault();var c=this,d=a(".wpum-profile-form").find("#_wpnonce").val(),e=a(c).data("remove"),f=a(".wpum-profile-form").find("[name='wpum_submit_form']").val();console.log(f),a.ajax({type:"GET",dataType:"json",url:wpum_frontend_js.ajax,data:{action:"wpum_remove_file",wpum_removal_nonce:d,field_id:e,submitted_form:f},beforeSend:function(){a(c).find("div.wpum-message").remove(),a(c).before('<div class="wpum-message notice"><p class="the-message">'+wpum_frontend_js.checking_credentials+"</p></div>")},success:function(b){b.data.valid===!0?(a(c).prev("div").prev().remove(),a("#wpum-form-profile").find("div.wpum-message").removeClass("notice").addClass("success").children("p").text(b.data.message),location.reload(!0)):a("#wpum-form-profile").find("div.wpum-message").removeClass("notice").addClass("error").children("p").text(b.data.message)},error:function(a,b,c){alert(a.responseText)}})})},directory_sort:function(){jQuery("#wpum-dropdown, #wpum-amount-dropdown").change(function(){location.href=jQuery(this).val()})},show_password:function(){jQuery.isFunction(jQuery.fn.hideShowPassword)&&jQuery("#wpum-show-password").change(function(){jQuery("#password").hideShowPassword(jQuery(this).prop("checked"))})}};c.init(),window.wpum_removeArguments=function(){function c(b,c){var d,e=c.split("?")[0],f=[],g=-1!==c.indexOf("?")?c.split("?")[1]:"";if(""!==g){f=g.split("&");for(var h=f.length-1;h>=0;h-=1)d=f[h].split("=")[0],a.inArray(d,b)>-1&&f.splice(h,1);e=e+"?"+f.join("&")}return e}var d=["updated"];url=b.attr("href"),url=c(d,url),"function"==typeof history.replaceState&&history.replaceState({},"",url)},jQuery("body").hasClass("wpum-account-page")&&window.wpum_removeArguments(),1==wpum_frontend_js.pwd_meter&&a("body").on("keyup","input[name=password]",function(b){c.checkPasswordStrength(a(".wpum-registration-form-wrapper input[name=password], .wpum-profile-form-wrapper input[name=password], .wpum-update-password-form-wrapper input[name=password], .wpum-password-form input[name=password]"),a(".wpum-registration-form-wrapper #password-strength, .wpum-profile-form-wrapper #password-strength, .wpum-update-password-form-wrapper #password-strength, .wpum-password-form #password-strength"),a("#submit_wpum_register, #submit_wpum_profile, #submit_wpum_password"),["admin","administrator","test","user","demo"])})});