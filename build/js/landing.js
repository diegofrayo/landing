!function(e){e("a.page-scroll").bind("click",function(t){var a=e(this);e("html, body").stop().animate({scrollTop:e(a.attr("href")).offset().top-50},1250,"easeInOutExpo"),t.preventDefault()}),e("body").scrollspy({target:".navbar-fixed-top",offset:51}),e(".navbar-collapse ul li a").click(function(){e(".navbar-toggle:visible").click()}),e("#mainNav").affix({offset:{top:100}})}(jQuery),$(function(){$("#contact-form").submit(function(e){e.preventDefault();var t=($("input#name").val(),$("input#email").val(),$("input#phone").val(),$("textarea#message").val(),jQuery("#btn-send-message"));t.button("loading"),setTimeout(function(){t.button("reset"),$("#send-message-success-alert").removeClass("hidden").fadeIn(1e3),setTimeout(function(){$("#contact-form").trigger("reset"),$("#send-message-success-alert").fadeOut(1e3)},5e3)},2e3)})});