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
})({"node_modules/file-saver/dist/FileSaver.min.js":[function(require,module,exports) {
var define;
var global = arguments[3];
(function(a,b){if("function"==typeof define&&define.amd)define([],b);else if("undefined"!=typeof exports)b();else{b(),a.FileSaver={exports:{}}.exports}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}});f.saveAs=a.saveAs=a,"undefined"!=typeof module&&(module.exports=a)});


},{}],"assets/gold1.png":[function(require,module,exports) {
module.exports = "/gold1.0c7501c4.png";
},{}],"assets/gold2.png":[function(require,module,exports) {
module.exports = "/gold2.fac0c5e5.png";
},{}],"assets/gold3.png":[function(require,module,exports) {
module.exports = "/gold3.51ec1b07.png";
},{}],"assets/gold4.png":[function(require,module,exports) {
module.exports = "/gold4.3dd8e9e0.png";
},{}],"assets/whitegoldtile.png":[function(require,module,exports) {
module.exports = "/whitegoldtile.2114ddfb.png";
},{}],"assets/mosaictile.png":[function(require,module,exports) {
module.exports = "/mosaictile.3a4e5a03.png";
},{}],"assets/bluetile.png":[function(require,module,exports) {
module.exports = "/bluetile.77fb27fa.png";
},{}],"assets/gabstytile.png":[function(require,module,exports) {
module.exports = "/gabstytile.1e20bb73.png";
},{}],"assets/flower1.png":[function(require,module,exports) {
module.exports = "/flower1.8d349bda.png";
},{}],"assets/flower2.png":[function(require,module,exports) {
module.exports = "/flower2.da845d9f.png";
},{}],"assets/flower3.png":[function(require,module,exports) {
module.exports = "/flower3.9e7ab062.png";
},{}],"assets/flower4.png":[function(require,module,exports) {
module.exports = "/flower4.ff17ed8b.png";
},{}],"assets/ari.png":[function(require,module,exports) {
module.exports = "/ari.19704777.png";
},{}],"assets/diana.png":[function(require,module,exports) {
module.exports = "/diana.ce9416b8.png";
},{}],"assets/megan.png":[function(require,module,exports) {
module.exports = "/megan.b110fcd2.png";
},{}],"assets/chaka.png":[function(require,module,exports) {
module.exports = "/chaka.493b9d57.png";
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _fileSaver = require("file-saver");

// document.addEventListener("touchstart", function () {}, false);
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d"); //grab all of my buttons by their IDs

var frameButton = document.getElementById("frame");
var blackWomenButton = document.getElementById("black-women");
var backgButton = document.getElementById("backg");
var flowersButton = document.getElementById("flowers");
var shareButton = document.getElementById("share"); //event listerners for all of my buttons

frameButton.addEventListener("click", frameSelected);
blackWomenButton.addEventListener("click", blackWomenSelected);
backgButton.addEventListener("click", backgSelected);
flowersButton.addEventListener("click", flowersSelected);
window.addEventListener("load", init);
window.addEventListener("click", function () {
  var song = document.getElementById("my_audio");
  song.play();
}); //hide reload button

var createAgain = document.getElementById("createAgain");
createAgain.style.display = "none";

function reloadPage() {
  frameCount = 0;
  blackWomenCount = 0;
  backgCount = 0;
  flowersCount = 0;
  render();
  var menu = document.getElementById("bottomNav");
  menu.style.display = "flex";
  var message = document.getElementById("tellTruth");
  message.style.display = "none";
  createAgain.style.display = "none";
}

var refresh = document.getElementById("createAgain");
refresh.addEventListener("click", reloadPage);
shareButton.addEventListener("click", tellTheTruth); // canvas.toBlob(function (blob) {
//   console.log(blob);
//   saveAs(blob, "myImage.png");
// });

function tellTheTruth() {
  var menu = document.getElementById("bottomNav");
  menu.style.display = "none";
  createAgain.style.display = "initial";
  var shareMsg = document.getElementById("share");
  shareMsg.innerHTML = "download your creation";
  var message = document.getElementById("tellTruth");
  message.style.display = "flex";
  shareButton.addEventListener("click", function () {
    console.log("told the truth");
    canvas.toBlob(function (blob) {
      console.log(blob);
      (0, _fileSaver.saveAs)(blob, "myImage.png");
    });
  });
} //bring in images


var gold1 = new Image();
gold1.crossOrigin = "anonymous";
gold1.src = require("./assets/gold1.png");
gold1.onload = render;
var gold2 = new Image();
gold2.crossOrigin = "anonymous";
gold2.src = require("./assets/gold2.png");
var gold3 = new Image();
gold3.crossOrigin = "anonymous";
gold3.src = require("./assets/gold3.png");
var gold4 = new Image();
gold4.crossOrigin = "anonymous";
gold4.src = require("./assets/gold4.png");
var frames = [gold1, gold2, gold3, gold4];
var whitegoldtile = new Image();
whitegoldtile.crossOrigin = "anonymous";
whitegoldtile.src = require("./assets/whitegoldtile.png");
whitegoldtile.onload = render;
var mosaictile = new Image();
mosaictile.crossOrigin = "anonymous";
mosaictile.src = require("./assets/mosaictile.png");
var bluetile = new Image();
bluetile.crossOrigin = "anonymous";
bluetile.src = require("./assets/bluetile.png");
var gabstytile = new Image();
gabstytile.crossOrigin = "anonymous";
gabstytile.src = require("./assets/gabstytile.png");
var tiles = [whitegoldtile, mosaictile, bluetile, gabstytile];
var flower2 = new Image();
flower2.crossOrigin = "anonymous";
flower2.src = require("./assets/flower1.png");
flower2.onload = render;
var flower1 = new Image();
flower1.crossOrigin = "anonymous";
flower1.src = require("./assets/flower2.png");
var flower3 = new Image();
flower3.crossOrigin = "anonymous";
flower3.src = require("./assets/flower3.png");
var flower4 = new Image();
flower4.crossOrigin = "anonymous";
flower4.src = require("./assets/flower4.png");
var flowers = [flower1, flower2, flower3, flower4];
var ari = new Image();
ari.crossOrigin = "anonymous";
ari.src = require("./assets/ari.png");
ari.onload = render;
var diana = new Image();
diana.crossOrigin = "anonymous";
diana.src = require("./assets/diana.png");
var megan = new Image();
megan.crossOrigin = "anonymous";
megan.src = require("./assets/megan.png");
var chaka = new Image();
chaka.crossOrigin = "anonymous";
chaka.src = require("./assets/chaka.png");
var blackWomenIs = [megan, ari, chaka, diana]; //set assets to 0

var frameCount = 0;
var blackWomenCount = 0;
var backgCount = 0;
var flowersCount = 0; //cycle through my images

function frameSelected() {
  frameCount = (frameCount + 1) % 4;
  render();
}

function blackWomenSelected() {
  blackWomenCount = (blackWomenCount + 1) % 4;
  render();
}

function backgSelected() {
  backgCount = (backgCount + 1) % 4;
  render();
}

function flowersSelected() {
  flowersCount = (flowersCount + 1) % 4;
  render();
} //draw my images on the canvas


function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(tiles[backgCount], 95, 40, 215, 370);
  ctx.drawImage(blackWomenIs[blackWomenCount], 102, 145, 200, 250);
  ctx.drawImage(frames[frameCount], 50, 0, 305, 450);
  ctx.drawImage(flowers[flowersCount], 180, 275, 175, 175); // ctx.drawImage(frame2, 0, 0, 400, 400);
} //run my application


function init() {
  createAgain.style.display = "none";
  render();
} // //these are the assets to choose from
// let frames = [
//   "assets/gold1.png",
//   "assets/gold2.png",
//   "assets/gold3.png",
//   "assets/gold4.png"
// ];
// let blackWomen = [
//   "assets/ari.png",
//   "assets/megan.png",
//   "assets/diana.png",
//   "assets/chaka.png"
// ];
// let flowers = [
//   "assets/flower1.png",
//   "assets/flower2.png",
//   "assets/flower3.png",
//   "assets/flower4.png"
// ];
// let tiles = [
//   "assets/bluetile.png",
//   "assets/mosaictile.png",
//   "assets/whitegoldtile.png",
//   "assets/gabstytile.png"
// ];
},{"file-saver":"node_modules/file-saver/dist/FileSaver.min.js","./assets/gold1.png":"assets/gold1.png","./assets/gold2.png":"assets/gold2.png","./assets/gold3.png":"assets/gold3.png","./assets/gold4.png":"assets/gold4.png","./assets/whitegoldtile.png":"assets/whitegoldtile.png","./assets/mosaictile.png":"assets/mosaictile.png","./assets/bluetile.png":"assets/bluetile.png","./assets/gabstytile.png":"assets/gabstytile.png","./assets/flower1.png":"assets/flower1.png","./assets/flower2.png":"assets/flower2.png","./assets/flower3.png":"assets/flower3.png","./assets/flower4.png":"assets/flower4.png","./assets/ari.png":"assets/ari.png","./assets/diana.png":"assets/diana.png","./assets/megan.png":"assets/megan.png","./assets/chaka.png":"assets/chaka.png"}],"../../../../.nvm/versions/node/v12.14.1/lib/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60920" + '/');

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
      }); // Enable HMR for CSS by default.

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
  overlay.id = OVERLAY_ID; // html encode message and stack trace

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
},{}]},{},["../../../../.nvm/versions/node/v12.14.1/lib/node_modules/parcel/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/mix-match.e31bb0bc.js.map