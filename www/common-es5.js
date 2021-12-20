(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkionic_app_base"] = self["webpackChunkionic_app_base"] || []).push([["common"], {
    /***/
    62124:
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/focus-visible-02bf7a99.js ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "startFocusVisible": function startFocusVisible() {
          return (
            /* binding */
            _startFocusVisible
          );
        }
        /* harmony export */

      });
      /*!
       * (C) Ionic http://ionicframework.com - MIT License
       */


      var ION_FOCUSED = 'ion-focused';
      var ION_FOCUSABLE = 'ion-focusable';
      var FOCUS_KEYS = ['Tab', 'ArrowDown', 'Space', 'Escape', ' ', 'Shift', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'Home', 'End'];

      var _startFocusVisible = function _startFocusVisible(rootEl) {
        var currentFocus = [];
        var keyboardMode = true;
        var ref = rootEl ? rootEl.shadowRoot : document;
        var root = rootEl ? rootEl : document.body;

        var setFocus = function setFocus(elements) {
          currentFocus.forEach(function (el) {
            return el.classList.remove(ION_FOCUSED);
          });
          elements.forEach(function (el) {
            return el.classList.add(ION_FOCUSED);
          });
          currentFocus = elements;
        };

        var pointerDown = function pointerDown() {
          keyboardMode = false;
          setFocus([]);
        };

        var onKeydown = function onKeydown(ev) {
          keyboardMode = FOCUS_KEYS.includes(ev.key);

          if (!keyboardMode) {
            setFocus([]);
          }
        };

        var onFocusin = function onFocusin(ev) {
          if (keyboardMode && ev.composedPath) {
            var toFocus = ev.composedPath().filter(function (el) {
              if (el.classList) {
                return el.classList.contains(ION_FOCUSABLE);
              }

              return false;
            });
            setFocus(toFocus);
          }
        };

        var onFocusout = function onFocusout() {
          if (ref.activeElement === root) {
            setFocus([]);
          }
        };

        ref.addEventListener('keydown', onKeydown);
        ref.addEventListener('focusin', onFocusin);
        ref.addEventListener('focusout', onFocusout);
        ref.addEventListener('touchstart', pointerDown);
        ref.addEventListener('mousedown', pointerDown);

        var destroy = function destroy() {
          ref.removeEventListener('keydown', onKeydown);
          ref.removeEventListener('focusin', onFocusin);
          ref.removeEventListener('focusout', onFocusout);
          ref.removeEventListener('touchstart', pointerDown);
          ref.removeEventListener('mousedown', pointerDown);
        };

        return {
          destroy: destroy,
          setFocus: setFocus
        };
      };
      /***/

    },

    /***/
    19313:
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/index-e2988509.js ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "a": function a() {
          return (
            /* binding */
            chevronBack
          );
        },

        /* harmony export */
        "b": function b() {
          return (
            /* binding */
            chevronForward
          );
        },

        /* harmony export */
        "c": function c() {
          return (
            /* binding */
            chevronForwardOutline
          );
        },

        /* harmony export */
        "d": function d() {
          return (
            /* binding */
            chevronDown
          );
        },

        /* harmony export */
        "e": function e() {
          return (
            /* binding */
            ellipsisHorizontal
          );
        },

        /* harmony export */
        "f": function f() {
          return (
            /* binding */
            caretUpSharp
          );
        },

        /* harmony export */
        "g": function g() {
          return (
            /* binding */
            caretDownSharp
          );
        }
        /* harmony export */

      });
      /*!
       * (C) Ionic http://ionicframework.com - MIT License
       */

      /* Ionicons v6.0.0, ES Modules */


      var caretDownSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>";
      var caretUpSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>";
      var chevronBack = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>";
      var chevronDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>";
      var chevronForward = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
      var chevronForwardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
      var ellipsisHorizontal = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>";
      /***/
    },

    /***/
    21494:
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-163ed7fb.js ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "S": function S() {
          return (
            /* binding */
            SPINNERS
          );
        }
        /* harmony export */

      });
      /*!
       * (C) Ionic http://ionicframework.com - MIT License
       */


      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 8,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(360 / total * index + (index < total / 2 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 14,
              y2: 26,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 8,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(360 / total * index + (index < total / 2 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-sharp': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-sharp-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    54972:
    /*!*****************************************!*\
      !*** ./src/app/service/auth.service.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthService": function AuthService() {
          return (
            /* binding */
            _AuthService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! firebase/auth */
      12305); // import { Router } from '@angular/router';


      var _AuthService = /*#__PURE__*/function () {
        function AuthService() {// let obj = auth.currentUser;
          // console.log(obj)

          _classCallCheck(this, AuthService);
        }

        _createClass(AuthService, [{
          key: "signUp",
          value: function signUp(email, password) {
            var auth = (0, firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)();
            (0, firebase_auth__WEBPACK_IMPORTED_MODULE_0__.createUserWithEmailAndPassword)(auth, email, password).then(function (userCredential) {
              // Signed in 
              var user = userCredential.user; // ...
            })["catch"](function (error) {
              var errorCode = error.code;
              var errorMessage = error.message; // ..
            });
          }
        }, {
          key: "signIn",
          value: function signIn(email, password) {
            var auth = (0, firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth)();
            (0, firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithEmailAndPassword)(auth, email, password).then(function (userCredential) {
              // Signed in 
              var user = userCredential.user;
              console.log(auth.currentUser);
              alert(user.email);
              console.log(user); // console.log(user);
              // ...
            })["catch"](function (error) {
              var errorCode = error.code;
              var errorMessage = error.message;
            });
          }
        }, {
          key: "Hello",
          value: function Hello() {// console.log(this.auth.currentUser)
            // console.log(user.name)
          }
        }]);

        return AuthService;
      }();

      _AuthService.ctorParameters = function () {
        return [];
      };

      _AuthService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _AuthService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map