// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/main.js":[function(require,module,exports) {
$(function () {
  function lnbMedia() {
    if (window.matchMedia("(min-width: 769px)").matches) {
      $('.hide_sub .lnb>li').off('click');
      var state = false;
      $('.lnb').on('mouseover', function () {
        if (!state) {
          $('.inner_header').stop().animate({
            height: +450
          }, 300);
          state = true;
        }
      });
      $('.inner_header').mouseleave(function () {
        $('.inner_header').animate({
          height: 125
        }, 300);
        state = false;
      });
    } else {
      $('.hide_sub .lnb>li').on('click', function () {
        $('.m_sub').stop().slideUp();
        if ($(this).children('.m_sub').is(':hidden')) {
          $(this).children('.m_sub').slideDown();
        } else {
          $(this).children('.m_sub').slideUp();
        }
      });
    }
    ;
  }
  lnbMedia();
  $('.mob_bar').click(function () {
    $('.hide_sub').addClass('active');
    $('.hide_back').css('display', 'block');
  });
  $('.sub_close_btn').click(function () {
    $('.hide_sub').removeClass('active');
    $('.hide_back').css('display', 'none');
  });

  // visual_main

  var mainSwiper = new Swiper(".visualswiper", {
    loop: true,
    effect: 'fade',
    loopedSlides: 5,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    breakpoints: {
      320: {
        pagination: {
          el: ".pagination_custom",
          type: "fraction"
        }
      },
      601: {
        pagination: {
          el: ".pagination_custom",
          type: "fraction"
        }
      },
      769: {
        pagination: {
          el: ".pagination_custom",
          type: "bullets"
        }
      }
    }
  });
  var thumbSwiper = new Swiper(".visualswiper", {
    loop: true,
    effect: 'fade',
    loopedSlides: 5,
    pagination: {
      el: ".pagination_thumb",
      type: "bullets",
      clickable: true
    }
  });
  mainSwiper.controller.control = thumbSwiper;
  thumbSwiper.controller.control = mainSwiper;
  var mainBar = $('.pagination_custom');
  var mainThum = $('.pagination_thumb');
  mainThum.hide();
  mainBar.mouseover(function () {
    mainThum.show();
  });
  mainBar.mouseleave(function () {
    mainThum.hide();
  });
  mainThum.mouseover(function () {
    mainThum.show();
  });
  mainThum.mouseleave(function () {
    mainThum.hide();
  });

  // mobile & tablet week_list

  $(".list_btn_right").click(function () {
    if (!$(".list_sheet li").last().is(":visible")) {
      $(".list_sheet li:visible").hide().next("li").fadeIn("80");
    }
    if (!$(".list_sheet_second li").last().is(":visible")) {
      $(".list_sheet_second li:visible").hide().next("li").fadeIn("80");
    }
    if (!$(".week_title li").last().is(":visible")) {
      $(".week_title li:visible").hide().next("li").fadeIn("80");
    }
    return false;
  });
  $(".list_btn_left").click(function () {
    if (!$(".list_sheet li").first().is(":visible")) {
      $(".list_sheet li:visible").hide().prev("li").fadeIn("80");
    }
    if (!$(".list_sheet_second li").first().is(":visible")) {
      $(".list_sheet_second li:visible").hide().prev("li").fadeIn("80");
    }
    if (!$(".week_title li").first().is(":visible")) {
      $(".week_title li:visible").hide().prev("li").fadeIn("80");
    }
    return false;
  });
  $('.list_sheet_second').hide();
  $('.more_btn').click(function () {
    $('.list_sheet_second').show().fadeIn(500);
    $('.list_box .week_list .more_btn').css('display', 'none').fadeOut(200);
    $('.list_box .no_btn').css('display', 'block').fadeIn(200);
  });
  $('.no_btn').click(function () {
    $('.list_sheet_second').hide();
    $('.list_box .week_list .more_btn').css('display', 'block').fadeIn(200);
    $('.list_box .no_btn').css('display', 'none').fadeOut(200);
  });

  // program

  $('.program .program_sheet_box .wish i').click(function () {
    var i = $(this).index();
    $(this).eq(i).css('color', 'red');
  });
  var program = new Swiper(".movie_sheet", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 15,
    navigation: {
      nextEl: ".program .swiper-button-next",
      prevEl: ".program .swiper-button-prev"
    },
    breakpoints: {
      601: {
        slidesPerView: 3
      },
      769: {
        slidesPerView: 4,
        slidesPerGroup: 4
      }
    }
  });
  var show = new Swiper(".show_sheet", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 15,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      601: {
        slidesPerView: 3
      },
      769: {
        slidesPerView: 4,
        slidesPerGroup: 4
      }
    }
  });

  // critic

  $('.critic .critic_box .critic_hide02').css('display', 'none');
  $('.critic_more_btn').click(function () {
    $('.critic .critic_box .critic_hide01').fadeIn(500, function () {
      $(this).show();
    });
    $('.critic .critic_box .critic_more_btn').css('display', 'none');
    $('.critic .critic_box .critic_more_btn02').css('display', 'block');
  });
  $('.critic .critic_box .critic_more_btn02').click(function () {
    $('.critic .critic_box .critic_hide02').fadeIn(500, function () {
      $(this).show();
    });
    $('.critic .critic_box .critic_more_btn02').css('display', 'none');
  });
  var criticBox = $('.critic_box>section').width();
  $('.critic_btn_box .critic_right').click(function () {
    $('.critic .critic_box .critic_hide02').css('display', 'flex');
    $('.critic_box').animate({
      left: criticBox * -1
    }, 100, function () {
      $(this).children('.critic_box>section:first').insertAfter('.critic_box>section:last');
      $(this).css('left', 0);
    });
  });
  $('.critic_btn_box .critic_left').click(function () {
    $('.critic .critic_box .critic_hide02').css('display', 'flex');
    $('.critic_box').animate({
      left: 0
    }, 100, function () {
      $(this).children('.critic_box>section:last').insertBefore('.critic_box>section:first');
      $(this).css('left', criticBox * -1);
    });
  });

  // event_banner

  var event = new Swiper(".event", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 15,
    navigation: {
      nextEl: ".event_banner_box .swiper-button-next",
      prevEl: ".event_banner_box .swiper-button-prev"
    },
    breakpoints: {
      601: {
        slidesPerView: 2
      }
    }
  });

  // mesena company

  var list = $('.relevant>ul>li').width();
  var mesenaLi = $('.mesena>ul>li').width();
  function relSlide() {
    $(".relevant>ul").animate({
      left: list * -1
    }, 1000, function () {
      $(this).children('.relevant li:first').insertAfter('.relevant li:last');
      $(this).css('left', 0);
    });
  }
  ;
  setInterval(relSlide, 3000);
  function meSlide() {
    $(".mesena>ul").animate({
      left: mesenaLi * -1
    }, 1000, function () {
      $(this).children('.mesena li:first').insertAfter('.mesena li:last');
      $(this).css('left', 0);
    });
  }
  ;
  setInterval(meSlide, 3000);

  // reservation_btn

  $('.speed_reservation').click(function () {
    $('.reserv_sheet').show(function () {
      $(this).fadeIn(1000);
    });
  });
  $('.reserv_close_btn').click(function () {
    $('.reserv_sheet').hide();
  });
  var reservSheet = $('.reserv_sheet').height();
  $('.reserv_pro').click(function () {
    $('.reserv_sheet').addClass('ad').stop().animate({
      height: reservSheet + 260
    }, 300);
  });

  // scroll_btn

  $(window).scroll(function () {
    if ($(window).scrollTop() >= 40) {
      $('.move_btn .top_btn').fadeIn(500);
      $('.move_btn .bottom_btn').fadeIn(500);
    } else {
      $('.move_btn .top_btn').css('display', 'none');
      $('.move_btn .bottom_btn').css('display', 'none');
    }
  });
  $('.move_btn .top_btn').click(function () {
    $('html,body').stop().animate({
      scrollTop: 0
    }, 1000);
  });
  $('.move_btn .bottom_btn').click(function () {
    $('html, body').animate({
      scrollTop: $(document).height()
    }, 1000);
  });

  // map

  var container = document.getElementById('map');
  var options = {
    center: new kakao.maps.LatLng(35.17110422803009, 129.12701120895144),
    level: 3
  };
  var map = new kakao.maps.Map(container, options);
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "3091" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map