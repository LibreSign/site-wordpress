// scrool top
document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector("#page header"),l=document.getElementById("ast-scroll-top");l&&(astScrollToTop=function(){var e=getComputedStyle(l).content,o=l.dataset.onDevices,e=e.replace(/[^0-9]/g,"");"both"==o||"desktop"==o&&"769"==e||"mobile"==o&&""==e?(e=window.pageYOffset||document.body.scrollTop,t&&t.length?e>t.offsetHeight+100?l.style.display="block":l.style.display="none":300<window.pageYOffset?l.style.display="block":l.style.display="none"):l.style.display="none"},astScrollToTop(),window.addEventListener("scroll",function(){astScrollToTop()}),l.onclick=function(e){e.preventDefault(),window.scrollTo({top:0,left:0,behavior:"smooth"})})});!function(c){"undefined"!=typeof astra&&(AstraProQuickView={stick_add_to_cart:astra.shop_quick_view_stick_cart,auto_popup_height_by_image:astra.shop_quick_view_auto_height,init:function(){this._init_popup(),this._bind()},_init_popup:function(){c("#ast-quick-view-content,#ast-quick-view-content div.product").css({"max-width":parseFloat(c(window).width())-120,"max-height":parseFloat(c(window).height())-120});var i=c(".ast-qv-on-image-click .astra-shop-thumbnail-wrap .woocommerce-LoopProduct-link");0<i.length&&i.each(function(i){c(this).attr("href","javascript:void(0)")})},_bind:function(){c(document).off("click",".ast-quick-view-button, .ast-quick-view-text, .ast-qv-on-image-click .astra-shop-thumbnail-wrap .woocommerce-LoopProduct-link").on("click",".ast-quick-view-button, .ast-quick-view-text, .ast-qv-on-image-click .astra-shop-thumbnail-wrap .woocommerce-LoopProduct-link",AstraProQuickView._open_quick_view),c(document).on("click","#ast-quick-view-close",AstraProQuickView._close_quick_view),c(document).on("click",".ast-content-main-wrapper",AstraProQuickView._close_quick_view_on_overlay_click),c(document).on("keyup",AstraProQuickView._close_quick_view_on_esc_keypress)},_open_quick_view:function(i){i.preventDefault();var t=c(this),e=t.closest("li.product"),a=c(document).find("#ast-quick-view-modal"),i=c(document).find(".ast-quick-view-bg"),t=t.data("product_id");e.hasClass("ast-qv-on-image-click")&&(t=e.find(".ast-quick-view-data").data("product_id")),a.hasClass("loading")||a.addClass("loading"),i.hasClass("ast-quick-view-bg-ready")||i.addClass("ast-quick-view-bg-ready"),c(document).trigger("ast_quick_view_loading"),c.ajax({url:astra.ajax_url,type:"POST",dataType:"html",data:{action:"ast_load_product_quick_view",product_id:t},success:function(i){c(document).find("#ast-quick-view-modal").find("#ast-quick-view-content").html(i),AstraProQuickView._after_markup_append_process()}})},_after_markup_append_process:function(){var i,t,e=c(document).find("#ast-quick-view-modal"),a=e.find("#ast-quick-view-content"),s=a.find(".variations_form");e.hasClass("open")||(i=a.outerHeight(),t=c(window).height(),a=c("html"),t<i?a.css("margin-right",AstraProQuickView._get_scrollbar_width()):(a.css("margin-right",""),a.find(".ast-sticky-active, .ast-header-sticky-active, .ast-custom-footer").css("max-width","100%")),a.addClass("ast-quick-view-is-open")),0<s.length&&(s.trigger("check_variations"),s.trigger("reset_image"),s.wc_variation_form(),s.find("select").change());s=e.find(".ast-qv-image-slider");1<s.find("li").length&&s.flexslider(),setTimeout(function(){AstraProQuickView._auto_set_content_height_by_image(),e.removeClass("loading").addClass("open"),c(".ast-quick-view-bg").addClass("open")},100),c(document).trigger("ast_quick_view_loader_stop")},_auto_set_content_height_by_image:function(){c("#ast-quick-view-modal").imagesLoaded().always(function(i){var t=c(document).find("#ast-quick-view-modal"),e=t.find(".woocommerce-product-gallery__image img").outerHeight();summary=t.find(".product .summary.entry-summary"),content=summary.css("content"),summary_content_ht=t.find(".summary-content").outerHeight();var a,s=t.find(".woocommerce-product-gallery__image img, .ast-qv-slides img"),o=parseFloat(c(window).height())-120,e=parseFloat(e);AstraProQuickView.auto_popup_height_by_image?s.length?e<o?summary.css("max-height",parseFloat(e)):summary.css("max-height",o):summary.css("width","100%"):summary.css("max-height",parseFloat(o)),AstraProQuickView.stick_add_to_cart&&(t.addClass("stick-add-to-cart"),a=t.find(".cart").outerHeight(),s=parseFloat(o)-parseFloat(a),a<e?(t.find(".cart").addClass("stick"),o=c("#ast-quick-view-content").outerHeight(),a=t.find(".cart").outerHeight(),s=parseFloat(o)-parseFloat(a),summary.css("max-height",parseFloat(s))):s<o?summary.css("max-height",parseFloat(o)):summary.css("max-height",""))})},_close_quick_view_on_esc_keypress:function(i){i.preventDefault(),27===i.keyCode&&AstraProQuickView._close_quick_view()},_close_quick_view:function(i){i&&i.preventDefault(),c(document).find(".ast-quick-view-bg").removeClass("ast-quick-view-bg-ready"),c(document).find("#ast-quick-view-modal").removeClass("open").removeClass("loading"),c(".ast-quick-view-bg").removeClass("open"),c("html").removeClass("ast-quick-view-is-open"),c("html").css("margin-right",""),setTimeout(function(){c(document).find("#ast-quick-view-modal").find("#ast-quick-view-content").html("")},600)},_close_quick_view_on_overlay_click:function(i){this===i.target&&AstraProQuickView._close_quick_view()},_get_scrollbar_width:function(){var i=c('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>');c("body").append(i);var t=c("div",i).innerWidth();i.css("overflow-y","scroll");var e=c("div",i).innerWidth();return c(i).remove(),t-e}},c(function(){AstraProQuickView.init()}))}(jQuery);!function(i){function n(e,t){$pg_wrap=i(".ast-product-gallery-layout-vertical"),0<$pg_wrap.length&&($pg_nav=$pg_wrap.find(".flex-control-nav"),0<$pg_nav.length&&(768<i(window).width()?!0===e?($pg_view_ht=$pg_wrap.find(".entry-summary").height(),$pg_nav.css({"max-height":$pg_view_ht+"px","overflow-x":"hidden","overflow-y":"auto","paddine-right":"2px"})):($pg_view_ht=$pg_wrap.find(".flex-viewport").height(),$pg_nav_ht=$pg_wrap.find(".flex-control-nav").height(),(!0===t||$pg_nav_ht>$pg_view_ht+50)&&$pg_nav.css({"max-height":$pg_view_ht+"px","overflow-x":"hidden","overflow-y":"auto","paddine-right":"2px"})):$pg_nav.css({"max-height":"","overflow-x":"","overflow-y":"","paddine-right":""})))}var e;jQuery(document).ready(function(e){var t;"undefined"!=typeof wp&&void 0!==wp.customize&&jQuery(window).trigger("resize"),jQuery(".ast-product-gallery-layout-vertical .flex-control-nav li").on("click",function(e){clearTimeout(t),t=setTimeout(function(){n(!1,!0)},500)})}),jQuery(window).on("load",function(){n()}),jQuery(window).on("resize",function(){clearTimeout(e),e=setTimeout(function(){n()},300)})}(jQuery);function astrawpWooQuantityButtons(s){var t=document.querySelector(".woocommerce div.product form.cart");s=s||".qty",$quantityBoxesWrap=document.querySelectorAll("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)");for(var e=0;e<$quantityBoxesWrap.length;e++){var a=$quantityBoxesWrap[e],n=a.querySelector(s);if(n&&"date"!==n.getAttribute("type")&&"hidden"!==n.getAttribute("type")){$qty_parent=n.parentElement,$qty_parent.classList.add("buttons_added"),$qty_parent.insertAdjacentHTML("afterbegin",'<label class="screen-reader-text" for="minus_qty">'+astraAddon.product_plus_minus_text.minus_qty+'</label><a href="javascript:void(0)" id ="minus_qty" class="minus">-</a>'),$qty_parent.insertAdjacentHTML("beforeend",'<label class="screen-reader-text" for="plus_qty"> '+astraAddon.product_plus_minus_text.plus_qty+'</label><a href="javascript:void(0)" id ="plus_qty" class="plus">+</a>'),$quantityEach=document.querySelectorAll("input"+s+":not(.product-quantity)");for(var r,o=0;o<$quantityEach.length;o++){var u=$quantityEach[o],i=u.getAttribute("min");i&&0<i&&parseFloat(u.value)<i&&(u.value=i)}document.getElementsByTagName("BODY")[0].classList.contains("single-product")&&!t.classList.contains("grouped_form")&&(r=document.querySelector(".woocommerce form input[type=number].qty")).addEventListener("keyup",function(){var t=r.value;r.value=t});for(var l=a.querySelectorAll(".plus, .minus"),d=0;d<l.length;d++)l[d].addEventListener("click",function(t){var e=t.target.parentElement.querySelector(s),a=parseFloat(e.value),n=parseFloat(e.getAttribute("max")),r=parseFloat(e.getAttribute("min")),o=e.getAttribute("step");a&&""!==a&&"NaN"!==a||(a=0),""!==n&&"NaN"!==n||(n=""),""!==r&&"NaN"!==r||(r=0),"any"!==o&&""!==o&&void 0!==o&&"NaN"!==parseFloat(o)||(o=1),t.target.classList.contains("plus")?e.value=n&&(n==a||n<a)?n:a+parseFloat(o):r&&(r==a||a<r)?e.value=r:0<a&&(e.value=a-parseFloat(o));o=document.createEvent("HTMLEvents");o.initEvent("change",!0,!1),e.dispatchEvent(o)},!1)}}}window.addEventListener("load",function(t){astrawpWooQuantityButtons()}),function(){var t=XMLHttpRequest.prototype.send;XMLHttpRequest.prototype.send=function(){return this.addEventListener("load",function(){astrawpWooQuantityButtons()}),t.apply(this,arguments)}}();!function(){var e,t;function o(e){var t=(t=document.body.className).replace(e,"");document.body.className=t}function d(e){e.style.display="block",setTimeout(function(){e.style.opacity=1},1)}function n(e){e.style.opacity="",setTimeout(function(){e.style.display=""},200)}e="iPhone"==navigator.userAgent.match(/iPhone/i)?"iphone":"",t="iPod"==navigator.userAgent.match(/iPod/i)?"ipod":"",document.body.className+=" "+e,document.body.className+=" "+t;for(var a=document.querySelectorAll("a.astra-search-icon:not(.slide-search)"),s=0;a.length>s;s++)a[s].onclick=function(e){var t,a,o,n;if(e.preventDefault(),e=e||window.event,this.classList.contains("header-cover"))for(var s=document.querySelectorAll(".ast-search-box.header-cover"),c=astraAddon.is_header_builder_active||!1,r=0;r<s.length;r++)for(var l=s[r].parentNode.querySelectorAll("a.astra-search-icon"),i=0;i<l.length;i++)l[i]==this&&(d(s[r]),s[r].querySelector("input.search-field").focus(),c?(t=s[r],n=o=a=void 0,document.body.classList.contains("ast-header-break-point")&&(a=document.querySelector(".main-navigation"),n=document.querySelector(".main-header-bar"),o=document.querySelector(".ast-mobile-header-wrap"),null!==n&&null!==a&&(a=a.offsetHeight,n=n.offsetHeight,o=o.offsetHeight,n=a&&!document.body.classList.contains("ast-no-toggle-menu-enable")?parseFloat(a)-parseFloat(n):parseFloat(n),t.parentNode.classList.contains("ast-mobile-header-wrap")&&(n=parseFloat(o)),t.style.maxHeight=Math.abs(n)+"px"))):(o=s[r],n=t=void 0,document.body.classList.contains("ast-header-break-point")&&(t=document.querySelector(".main-navigation"),null!==(n=document.querySelector(".main-header-bar"))&&null!==t&&(t=t.offsetHeight,n=n.offsetHeight,n=t&&!document.body.classList.contains("ast-no-toggle-menu-enable")?parseFloat(t)-parseFloat(n):parseFloat(n),o.style.maxHeight=Math.abs(n)+"px"))));else!this.classList.contains("full-screen")||(e=document.getElementById("ast-seach-full-screen-form")).classList.contains("full-screen")&&(d(e),document.body.className+=" full-screen",e.querySelector("input.search-field").focus())};for(var c=document.querySelectorAll(".ast-search-box .close"),s=0,r=c.length;s<r;++s)c[s].onclick=function(e){e=e||window.event;for(var t=this;;){if(t.parentNode.classList.contains("ast-search-box")){n(t.parentNode),o("full-screen");break}if(t.parentNode.classList.contains("site-header"))break;t=t.parentNode}};document.onkeydown=function(e){if(27==e.keyCode){e=document.getElementById("ast-seach-full-screen-form");null!=e&&(n(e),o("full-screen"));for(var t=document.querySelectorAll(".ast-search-box.header-cover"),a=0;a<t.length;a++)n(t[a])}},window.addEventListener("resize",function(){if("BODY"===document.activeElement.tagName&&"INPUT"!=document.activeElement.tagName){var e=document.querySelectorAll(".ast-search-box.header-cover");if(!document.body.classList.contains("ast-header-break-point"))for(var t=0;t<e.length;t++)e[t].style.maxHeight="",e[t].style.opacity="",e[t].style.display=""}})}();