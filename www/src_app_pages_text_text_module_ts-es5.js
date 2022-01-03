(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

  function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (self["webpackChunkionic_app_base"] = self["webpackChunkionic_app_base"] || []).push([["src_app_pages_text_text_module_ts"], {
    /***/
    68107:
    /*!****************************************************!*\
      !*** ./node_modules/@capacitor/core/dist/index.js ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Capacitor": function Capacitor() {
          return (
            /* binding */
            _Capacitor
          );
        },

        /* harmony export */
        "CapacitorException": function CapacitorException() {
          return (
            /* binding */
            _CapacitorException
          );
        },

        /* harmony export */
        "CapacitorPlatforms": function CapacitorPlatforms() {
          return (
            /* binding */
            _CapacitorPlatforms
          );
        },

        /* harmony export */
        "ExceptionCode": function ExceptionCode() {
          return (
            /* binding */
            _ExceptionCode
          );
        },

        /* harmony export */
        "Plugins": function Plugins() {
          return (
            /* binding */
            _Plugins
          );
        },

        /* harmony export */
        "WebPlugin": function WebPlugin() {
          return (
            /* binding */
            _WebPlugin
          );
        },

        /* harmony export */
        "WebView": function WebView() {
          return (
            /* binding */
            _WebView
          );
        },

        /* harmony export */
        "addPlatform": function addPlatform() {
          return (
            /* binding */
            _addPlatform
          );
        },

        /* harmony export */
        "registerPlugin": function registerPlugin() {
          return (
            /* binding */
            _registerPlugin
          );
        },

        /* harmony export */
        "registerWebPlugin": function registerWebPlugin() {
          return (
            /* binding */
            _registerWebPlugin
          );
        },

        /* harmony export */
        "setPlatform": function setPlatform() {
          return (
            /* binding */
            _setPlatform
          );
        }
        /* harmony export */

      });
      /*! Capacitor: https://capacitorjs.com/ - MIT License */


      var createCapacitorPlatforms = function createCapacitorPlatforms(win) {
        var defaultPlatformMap = new Map();
        defaultPlatformMap.set('web', {
          name: 'web'
        });
        var capPlatforms = win.CapacitorPlatforms || {
          currentPlatform: {
            name: 'web'
          },
          platforms: defaultPlatformMap
        };

        var addPlatform = function addPlatform(name, platform) {
          capPlatforms.platforms.set(name, platform);
        };

        var setPlatform = function setPlatform(name) {
          if (capPlatforms.platforms.has(name)) {
            capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
          }
        };

        capPlatforms.addPlatform = addPlatform;
        capPlatforms.setPlatform = setPlatform;
        return capPlatforms;
      };

      var initPlatforms = function initPlatforms(win) {
        return win.CapacitorPlatforms = createCapacitorPlatforms(win);
      };
      /**
       * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
       */


      var _CapacitorPlatforms = /*#__PURE__*/initPlatforms(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
      /**
       * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
       */


      var _addPlatform = _CapacitorPlatforms.addPlatform;
      /**
       * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
       */

      var _setPlatform = _CapacitorPlatforms.setPlatform;

      var legacyRegisterWebPlugin = function legacyRegisterWebPlugin(cap, webPlugin) {
        var _a;

        var config = webPlugin.config;
        var Plugins = cap.Plugins;

        if (!config || !config.name) {
          // TODO: add link to upgrade guide
          throw new Error("Capacitor WebPlugin is using the deprecated \"registerWebPlugin()\" function, but without the config. Please use \"registerPlugin()\" instead to register this web plugin.\"");
        } // TODO: add link to upgrade guide


        console.warn("Capacitor plugin \"".concat(config.name, "\" is using the deprecated \"registerWebPlugin()\" function"));

        if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
          // Add the web plugin into the plugins registry if there already isn't
          // an existing one. If it doesn't already exist, that means
          // there's no existing native implementation for it.
          // - OR -
          // If we already have a plugin registered (meaning it was defined in the native layer),
          // then we should only overwrite it if the corresponding web plugin activates on
          // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
          Plugins[config.name] = webPlugin;
        }
      };

      var _ExceptionCode;

      (function (ExceptionCode) {
        /**
         * API is not implemented.
         *
         * This usually means the API can't be used because it is not implemented for
         * the current platform.
         */
        ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
        /**
         * API is not available.
         *
         * This means the API can't be used right now because:
         *   - it is currently missing a prerequisite, such as network connectivity
         *   - it requires a particular platform or browser version
         */

        ExceptionCode["Unavailable"] = "UNAVAILABLE";
      })(_ExceptionCode || (_ExceptionCode = {}));

      var _CapacitorException = /*#__PURE__*/function (_Error) {
        _inherits(_CapacitorException, _Error);

        var _super = _createSuper(_CapacitorException);

        function _CapacitorException(message, code) {
          var _this;

          _classCallCheck(this, _CapacitorException);

          _this = _super.call(this, message);
          _this.message = message;
          _this.code = code;
          return _this;
        }

        return _CapacitorException;
      }( /*#__PURE__*/_wrapNativeSuper(Error));

      var getPlatformId = function getPlatformId(win) {
        var _a, _b;

        if (win === null || win === void 0 ? void 0 : win.androidBridge) {
          return 'android';
        } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
          return 'ios';
        } else {
          return 'web';
        }
      };

      var createCapacitor = function createCapacitor(win) {
        var _a, _b, _c, _d, _e;

        var capCustomPlatform = win.CapacitorCustomPlatform || null;
        var cap = win.Capacitor || {};
        var Plugins = cap.Plugins = cap.Plugins || {};
        /**
         * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
         */

        var capPlatforms = win.CapacitorPlatforms;

        var defaultGetPlatform = function defaultGetPlatform() {
          return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
        };

        var getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;

        var defaultIsNativePlatform = function defaultIsNativePlatform() {
          return getPlatform() !== 'web';
        };

        var isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;

        var defaultIsPluginAvailable = function defaultIsPluginAvailable(pluginName) {
          var plugin = registeredPlugins.get(pluginName);

          if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
            // JS implementation available for the current platform.
            return true;
          }

          if (getPluginHeader(pluginName)) {
            // Native implementation available.
            return true;
          }

          return false;
        };

        var isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) || defaultIsPluginAvailable;

        var defaultGetPluginHeader = function defaultGetPluginHeader(pluginName) {
          var _a;

          return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(function (h) {
            return h.name === pluginName;
          });
        };

        var getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;

        var handleError = function handleError(err) {
          return win.console.error(err);
        };

        var pluginMethodNoop = function pluginMethodNoop(_target, prop, pluginName) {
          return Promise.reject("".concat(pluginName, " does not have an implementation of \"").concat(prop, "\"."));
        };

        var registeredPlugins = new Map();

        var defaultRegisterPlugin = function defaultRegisterPlugin(pluginName) {
          var jsImplementations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var registeredPlugin = registeredPlugins.get(pluginName);

          if (registeredPlugin) {
            console.warn("Capacitor plugin \"".concat(pluginName, "\" already registered. Cannot register plugins twice."));
            return registeredPlugin.proxy;
          }

          var platform = getPlatform();
          var pluginHeader = getPluginHeader(pluginName);
          var jsImplementation;

          var loadPluginImplementation = /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(!jsImplementation && platform in jsImplementations)) {
                        _context.next = 11;
                        break;
                      }

                      if (!(typeof jsImplementations[platform] === 'function')) {
                        _context.next = 7;
                        break;
                      }

                      _context.next = 4;
                      return jsImplementations[platform]();

                    case 4:
                      _context.t0 = jsImplementation = _context.sent;
                      _context.next = 8;
                      break;

                    case 7:
                      _context.t0 = jsImplementation = jsImplementations[platform];

                    case 8:
                      jsImplementation = _context.t0;
                      _context.next = 20;
                      break;

                    case 11:
                      if (!(capCustomPlatform !== null && !jsImplementation && 'web' in jsImplementations)) {
                        _context.next = 20;
                        break;
                      }

                      if (!(typeof jsImplementations['web'] === 'function')) {
                        _context.next = 18;
                        break;
                      }

                      _context.next = 15;
                      return jsImplementations['web']();

                    case 15:
                      _context.t1 = jsImplementation = _context.sent;
                      _context.next = 19;
                      break;

                    case 18:
                      _context.t1 = jsImplementation = jsImplementations['web'];

                    case 19:
                      jsImplementation = _context.t1;

                    case 20:
                      return _context.abrupt("return", jsImplementation);

                    case 21:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            return function loadPluginImplementation() {
              return _ref.apply(this, arguments);
            };
          }();

          var createPluginMethod = function createPluginMethod(impl, prop) {
            var _a, _b;

            if (pluginHeader) {
              var methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(function (m) {
                return prop === m.name;
              });

              if (methodHeader) {
                if (methodHeader.rtype === 'promise') {
                  return function (options) {
                    return cap.nativePromise(pluginName, prop.toString(), options);
                  };
                } else {
                  return function (options, callback) {
                    return cap.nativeCallback(pluginName, prop.toString(), options, callback);
                  };
                }
              } else if (impl) {
                return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
              }
            } else if (impl) {
              return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
            } else {
              throw new _CapacitorException("\"".concat(pluginName, "\" plugin is not implemented on ").concat(platform), _ExceptionCode.Unimplemented);
            }
          };

          var createPluginMethodWrapper = function createPluginMethodWrapper(prop) {
            var remove;

            var wrapper = function wrapper() {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              var p = loadPluginImplementation().then(function (impl) {
                var fn = createPluginMethod(impl, prop);

                if (fn) {
                  var _p = fn.apply(void 0, args);

                  remove = _p === null || _p === void 0 ? void 0 : _p.remove;
                  return _p;
                } else {
                  throw new _CapacitorException("\"".concat(pluginName, ".").concat(prop, "()\" is not implemented on ").concat(platform), _ExceptionCode.Unimplemented);
                }
              });

              if (prop === 'addListener') {
                p.remove = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          return _context2.abrupt("return", remove());

                        case 1:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));
              }

              return p;
            }; // Some flair ✨


            wrapper.toString = function () {
              return "".concat(prop.toString(), "() { [capacitor code] }");
            };

            Object.defineProperty(wrapper, 'name', {
              value: prop,
              writable: false,
              configurable: false
            });
            return wrapper;
          };

          var addListener = createPluginMethodWrapper('addListener');
          var removeListener = createPluginMethodWrapper('removeListener');

          var addListenerNative = function addListenerNative(eventName, callback) {
            var call = addListener({
              eventName: eventName
            }, callback);

            var remove = /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var callbackId;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return call;

                      case 2:
                        callbackId = _context3.sent;
                        removeListener({
                          eventName: eventName,
                          callbackId: callbackId
                        }, callback);

                      case 4:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function remove() {
                return _ref3.apply(this, arguments);
              };
            }();

            var p = new Promise(function (resolve) {
              return call.then(function () {
                return resolve({
                  remove: remove
                });
              });
            });
            p.remove = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      console.warn("Using addListener() without 'await' is deprecated.");
                      _context4.next = 3;
                      return remove();

                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            }));
            return p;
          };

          var proxy = new Proxy({}, {
            get: function get(_, prop) {
              switch (prop) {
                // https://github.com/facebook/react/issues/20030
                case '$$typeof':
                  return undefined;

                case 'toJSON':
                  return function () {
                    return {};
                  };

                case 'addListener':
                  return pluginHeader ? addListenerNative : addListener;

                case 'removeListener':
                  return removeListener;

                default:
                  return createPluginMethodWrapper(prop);
              }
            }
          });
          Plugins[pluginName] = proxy;
          registeredPlugins.set(pluginName, {
            name: pluginName,
            proxy: proxy,
            platforms: new Set([].concat(_toConsumableArray(Object.keys(jsImplementations)), _toConsumableArray(pluginHeader ? [platform] : [])))
          });
          return proxy;
        };

        var registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin; // Add in convertFileSrc for web, it will already be available in native context

        if (!cap.convertFileSrc) {
          cap.convertFileSrc = function (filePath) {
            return filePath;
          };
        }

        cap.getPlatform = getPlatform;
        cap.handleError = handleError;
        cap.isNativePlatform = isNativePlatform;
        cap.isPluginAvailable = isPluginAvailable;
        cap.pluginMethodNoop = pluginMethodNoop;
        cap.registerPlugin = registerPlugin;
        cap.Exception = _CapacitorException;
        cap.DEBUG = !!cap.DEBUG;
        cap.isLoggingEnabled = !!cap.isLoggingEnabled; // Deprecated props

        cap.platform = cap.getPlatform();
        cap.isNative = cap.isNativePlatform();
        return cap;
      };

      var initCapacitorGlobal = function initCapacitorGlobal(win) {
        return win.Capacitor = createCapacitor(win);
      };

      var _Capacitor = /*#__PURE__*/initCapacitorGlobal(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});

      var _registerPlugin = _Capacitor.registerPlugin;
      /**
       * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
       * Capacitor v3 plugins should import the plugin directly. This "Plugins"
       * export is deprecated in v3, and will be removed in v4.
       */

      var _Plugins = _Capacitor.Plugins;
      /**
       * Provided for backwards compatibility. Use the registerPlugin() API
       * instead, and provide the web plugin as the "web" implmenetation.
       * For example
       *
       * export const Example = registerPlugin('Example', {
       *   web: () => import('./web').then(m => new m.Example())
       * })
       *
       * @deprecated Deprecated in v3, will be removed from v4.
       */

      var _registerWebPlugin = function _registerWebPlugin(plugin) {
        return legacyRegisterWebPlugin(_Capacitor, plugin);
      };
      /**
       * Base class web plugins should extend.
       */


      var _WebPlugin = /*#__PURE__*/function () {
        function _WebPlugin(config) {
          _classCallCheck(this, _WebPlugin);

          this.listeners = {};
          this.windowListeners = {};

          if (config) {
            // TODO: add link to upgrade guide
            console.warn("Capacitor WebPlugin \"".concat(config.name, "\" config object was deprecated in v3 and will be removed in v4."));
            this.config = config;
          }
        }

        _createClass(_WebPlugin, [{
          key: "addListener",
          value: function addListener(eventName, listenerFunc) {
            var _this2 = this;

            var listeners = this.listeners[eventName];

            if (!listeners) {
              this.listeners[eventName] = [];
            }

            this.listeners[eventName].push(listenerFunc); // If we haven't added a window listener for this event and it requires one,
            // go ahead and add it

            var windowListener = this.windowListeners[eventName];

            if (windowListener && !windowListener.registered) {
              this.addWindowListener(windowListener);
            }

            var remove = /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        return _context5.abrupt("return", _this2.removeListener(eventName, listenerFunc));

                      case 1:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }));

              return function remove() {
                return _ref5.apply(this, arguments);
              };
            }();

            var p = Promise.resolve({
              remove: remove
            });
            Object.defineProperty(p, 'remove', {
              value: function () {
                var _value = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          console.warn("Using addListener() without 'await' is deprecated.");
                          _context6.next = 3;
                          return remove();

                        case 3:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                }));

                function value() {
                  return _value.apply(this, arguments);
                }

                return value;
              }()
            });
            return p;
          }
        }, {
          key: "removeAllListeners",
          value: function () {
            var _removeAllListeners = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var listener;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      this.listeners = {};

                      for (listener in this.windowListeners) {
                        this.removeWindowListener(this.windowListeners[listener]);
                      }

                      this.windowListeners = {};

                    case 3:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));

            function removeAllListeners() {
              return _removeAllListeners.apply(this, arguments);
            }

            return removeAllListeners;
          }()
        }, {
          key: "notifyListeners",
          value: function notifyListeners(eventName, data) {
            var listeners = this.listeners[eventName];

            if (listeners) {
              listeners.forEach(function (listener) {
                return listener(data);
              });
            }
          }
        }, {
          key: "hasListeners",
          value: function hasListeners(eventName) {
            return !!this.listeners[eventName].length;
          }
        }, {
          key: "registerWindowListener",
          value: function registerWindowListener(windowEventName, pluginEventName) {
            var _this3 = this;

            this.windowListeners[pluginEventName] = {
              registered: false,
              windowEventName: windowEventName,
              pluginEventName: pluginEventName,
              handler: function handler(event) {
                _this3.notifyListeners(pluginEventName, event);
              }
            };
          }
        }, {
          key: "unimplemented",
          value: function unimplemented() {
            var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'not implemented';
            return new _Capacitor.Exception(msg, _ExceptionCode.Unimplemented);
          }
        }, {
          key: "unavailable",
          value: function unavailable() {
            var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'not available';
            return new _Capacitor.Exception(msg, _ExceptionCode.Unavailable);
          }
        }, {
          key: "removeListener",
          value: function () {
            var _removeListener = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(eventName, listenerFunc) {
              var listeners, index;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      listeners = this.listeners[eventName];

                      if (listeners) {
                        _context8.next = 3;
                        break;
                      }

                      return _context8.abrupt("return");

                    case 3:
                      index = listeners.indexOf(listenerFunc);
                      this.listeners[eventName].splice(index, 1); // If there are no more listeners for this type of event,
                      // remove the window listener

                      if (!this.listeners[eventName].length) {
                        this.removeWindowListener(this.windowListeners[eventName]);
                      }

                    case 6:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));

            function removeListener(_x, _x2) {
              return _removeListener.apply(this, arguments);
            }

            return removeListener;
          }()
        }, {
          key: "addWindowListener",
          value: function addWindowListener(handle) {
            window.addEventListener(handle.windowEventName, handle.handler);
            handle.registered = true;
          }
        }, {
          key: "removeWindowListener",
          value: function removeWindowListener(handle) {
            if (!handle) {
              return;
            }

            window.removeEventListener(handle.windowEventName, handle.handler);
            handle.registered = false;
          }
        }]);

        return _WebPlugin;
      }();

      var _WebView = /*#__PURE__*/_registerPlugin('WebView'); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    69586:
    /*!********************************************************************!*\
      !*** ./node_modules/@capacitor/filesystem/dist/esm/definitions.js ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Directory": function Directory() {
          return (
            /* binding */
            _Directory
          );
        },

        /* harmony export */
        "Encoding": function Encoding() {
          return (
            /* binding */
            _Encoding
          );
        },

        /* harmony export */
        "FilesystemDirectory": function FilesystemDirectory() {
          return (
            /* binding */
            _FilesystemDirectory
          );
        },

        /* harmony export */
        "FilesystemEncoding": function FilesystemEncoding() {
          return (
            /* binding */
            _FilesystemEncoding
          );
        }
        /* harmony export */

      });

      var _Directory;

      (function (Directory) {
        /**
         * The Documents directory
         * On iOS it's the app's documents directory.
         * Use this directory to store user-generated content.
         * On Android it's the Public Documents folder, so it's accessible from other apps.
         * It's not accesible on Android 10 unless the app enables legacy External Storage
         * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
         * in the `AndroidManifest.xml`.
         * It's not accesible on Android 11 or newer.
         *
         * @since 1.0.0
         */
        Directory["Documents"] = "DOCUMENTS";
        /**
         * The Data directory
         * On iOS it will use the Documents directory
         * On Android it's the directory holding application files.
         * Files will be deleted when the application is uninstalled.
         *
         * @since 1.0.0
         */

        Directory["Data"] = "DATA";
        /**
         * The Cache directory
         * Can be deleted in cases of low memory, so use this directory to write app-specific files
         * that your app can re-create easily.
         *
         * @since 1.0.0
         */

        Directory["Cache"] = "CACHE";
        /**
         * The external directory
         * On iOS it will use the Documents directory
         * On Android it's the directory on the primary shared/external
         * storage device where the application can place persistent files it owns.
         * These files are internal to the applications, and not typically visible
         * to the user as media.
         * Files will be deleted when the application is uninstalled.
         *
         * @since 1.0.0
         */

        Directory["External"] = "EXTERNAL";
        /**
         * The external storage directory
         * On iOS it will use the Documents directory
         * On Android it's the primary shared/external storage directory.
         * It's not accesible on Android 10 unless the app enables legacy External Storage
         * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
         * in the `AndroidManifest.xml`.
         * It's not accesible on Android 11 or newer.
         *
         * @since 1.0.0
         */

        Directory["ExternalStorage"] = "EXTERNAL_STORAGE";
      })(_Directory || (_Directory = {}));

      var _Encoding;

      (function (Encoding) {
        /**
         * Eight-bit UCS Transformation Format
         *
         * @since 1.0.0
         */
        Encoding["UTF8"] = "utf8";
        /**
         * Seven-bit ASCII, a.k.a. ISO646-US, a.k.a. the Basic Latin block of the
         * Unicode character set
         * This encoding is only supported on Android.
         *
         * @since 1.0.0
         */

        Encoding["ASCII"] = "ascii";
        /**
         * Sixteen-bit UCS Transformation Format, byte order identified by an
         * optional byte-order mark
         * This encoding is only supported on Android.
         *
         * @since 1.0.0
         */

        Encoding["UTF16"] = "utf16";
      })(_Encoding || (_Encoding = {}));
      /**
       * @deprecated Use `Directory`.
       * @since 1.0.0
       */


      var _FilesystemDirectory = _Directory;
      /**
       * @deprecated Use `Encoding`.
       * @since 1.0.0
       */

      var _FilesystemEncoding = _Encoding; //# sourceMappingURL=definitions.js.map

      /***/
    },

    /***/
    2679:
    /*!**************************************************************!*\
      !*** ./node_modules/@capacitor/filesystem/dist/esm/index.js ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Directory": function Directory() {
          return (
            /* reexport safe */
            _definitions__WEBPACK_IMPORTED_MODULE_1__.Directory
          );
        },

        /* harmony export */
        "Encoding": function Encoding() {
          return (
            /* reexport safe */
            _definitions__WEBPACK_IMPORTED_MODULE_1__.Encoding
          );
        },

        /* harmony export */
        "FilesystemDirectory": function FilesystemDirectory() {
          return (
            /* reexport safe */
            _definitions__WEBPACK_IMPORTED_MODULE_1__.FilesystemDirectory
          );
        },

        /* harmony export */
        "FilesystemEncoding": function FilesystemEncoding() {
          return (
            /* reexport safe */
            _definitions__WEBPACK_IMPORTED_MODULE_1__.FilesystemEncoding
          );
        },

        /* harmony export */
        "Filesystem": function Filesystem() {
          return (
            /* binding */
            _Filesystem
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      68107);
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./definitions */
      69586);

      var _Filesystem = (0, _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Filesystem', {
        web: function web() {
          return __webpack_require__.e(
          /*! import() */
          "node_modules_capacitor_filesystem_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__,
          /*! ./web */
          57843)).then(function (m) {
            return new m.FilesystemWeb();
          });
        }
      }); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    37060:
    /*!*****************************************************************!*\
      !*** ./node_modules/@capacitor/haptics/dist/esm/definitions.js ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ImpactStyle": function ImpactStyle() {
          return (
            /* binding */
            _ImpactStyle
          );
        },

        /* harmony export */
        "NotificationType": function NotificationType() {
          return (
            /* binding */
            _NotificationType
          );
        },

        /* harmony export */
        "HapticsNotificationType": function HapticsNotificationType() {
          return (
            /* binding */
            _HapticsNotificationType
          );
        },

        /* harmony export */
        "HapticsImpactStyle": function HapticsImpactStyle() {
          return (
            /* binding */
            _HapticsImpactStyle
          );
        }
        /* harmony export */

      });

      var _ImpactStyle;

      (function (ImpactStyle) {
        /**
         * A collision between small, light user interface elements
         *
         * @since 1.0.0
         */
        ImpactStyle["Heavy"] = "HEAVY";
        /**
         * A collision between moderately sized user interface elements
         *
         * @since 1.0.0
         */

        ImpactStyle["Medium"] = "MEDIUM";
        /**
         * A collision between small, light user interface elements
         *
         * @since 1.0.0
         */

        ImpactStyle["Light"] = "LIGHT";
      })(_ImpactStyle || (_ImpactStyle = {}));

      var _NotificationType;

      (function (NotificationType) {
        /**
         * A notification feedback type indicating that a task has completed successfully
         *
         * @since 1.0.0
         */
        NotificationType["Success"] = "SUCCESS";
        /**
         * A notification feedback type indicating that a task has produced a warning
         *
         * @since 1.0.0
         */

        NotificationType["Warning"] = "WARNING";
        /**
         * A notification feedback type indicating that a task has failed
         *
         * @since 1.0.0
         */

        NotificationType["Error"] = "ERROR";
      })(_NotificationType || (_NotificationType = {}));
      /**
       * @deprecated Use `NotificationType`.
       * @since 1.0.0
       */


      var _HapticsNotificationType = _NotificationType;
      /**
       * @deprecated Use `ImpactStyle`.
       * @since 1.0.0
       */

      var _HapticsImpactStyle = _ImpactStyle; //# sourceMappingURL=definitions.js.map

      /***/
    },

    /***/
    86692:
    /*!***********************************************************!*\
      !*** ./node_modules/@capacitor/haptics/dist/esm/index.js ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HapticsImpactStyle": function HapticsImpactStyle() {
          return (
            /* reexport safe */
            _definitions__WEBPACK_IMPORTED_MODULE_1__.HapticsImpactStyle
          );
        },

        /* harmony export */
        "HapticsNotificationType": function HapticsNotificationType() {
          return (
            /* reexport safe */
            _definitions__WEBPACK_IMPORTED_MODULE_1__.HapticsNotificationType
          );
        },

        /* harmony export */
        "ImpactStyle": function ImpactStyle() {
          return (
            /* reexport safe */
            _definitions__WEBPACK_IMPORTED_MODULE_1__.ImpactStyle
          );
        },

        /* harmony export */
        "NotificationType": function NotificationType() {
          return (
            /* reexport safe */
            _definitions__WEBPACK_IMPORTED_MODULE_1__.NotificationType
          );
        },

        /* harmony export */
        "Haptics": function Haptics() {
          return (
            /* binding */
            _Haptics
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      68107);
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./definitions */
      37060);

      var _Haptics = (0, _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Haptics', {
        web: function web() {
          return __webpack_require__.e(
          /*! import() */
          "node_modules_capacitor_haptics_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__,
          /*! ./web */
          93640)).then(function (m) {
            return new m.HapticsWeb();
          });
        }
      }); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    98423:
    /*!***********************************************************************!*\
      !*** ./node_modules/capacitor-voice-recorder/dist/esm/definitions.js ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__); //# sourceMappingURL=definitions.js.map

      /***/

    },

    /***/
    61005:
    /*!*****************************************************************!*\
      !*** ./node_modules/capacitor-voice-recorder/dist/esm/index.js ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VoiceRecorder": function VoiceRecorder() {
          return (
            /* binding */
            _VoiceRecorder
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      68107);
      /* harmony import */


      var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./definitions */
      98423);

      var _VoiceRecorder = (0, _capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('VoiceRecorder', {
        web: function web() {
          return __webpack_require__.e(
          /*! import() */
          "node_modules_capacitor-voice-recorder_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__,
          /*! ./web */
          10605)).then(function (m) {
            return new m.VoiceRecorderWeb();
          });
        }
      }); //# sourceMappingURL=index.js.map

      /***/

    },

    /***/
    82831:
    /*!***************************************************!*\
      !*** ./src/app/pages/text/text-routing.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TextPageRoutingModule": function TextPageRoutingModule() {
          return (
            /* binding */
            _TextPageRoutingModule
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      29535);
      /* harmony import */


      var _text_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./text.page */
      25674);

      var routes = [{
        path: '',
        component: _text_page__WEBPACK_IMPORTED_MODULE_0__.TextPage
      }];

      var _TextPageRoutingModule = function TextPageRoutingModule() {
        _classCallCheck(this, TextPageRoutingModule);
      };

      _TextPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _TextPageRoutingModule);
      /***/
    },

    /***/
    71877:
    /*!*******************************************!*\
      !*** ./src/app/pages/text/text.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TextPageModule": function TextPageModule() {
          return (
            /* binding */
            _TextPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      16274);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      93324);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      76820);
      /* harmony import */


      var _text_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./text-routing.module */
      82831);
      /* harmony import */


      var _text_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./text.page */
      25674);

      var _TextPageModule = function TextPageModule() {
        _classCallCheck(this, TextPageModule);
      };

      _TextPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _text_routing_module__WEBPACK_IMPORTED_MODULE_0__.TextPageRoutingModule],
        declarations: [_text_page__WEBPACK_IMPORTED_MODULE_1__.TextPage]
      })], _TextPageModule);
      /***/
    },

    /***/
    25674:
    /*!*****************************************!*\
      !*** ./src/app/pages/text/text.page.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TextPage": function TextPage() {
          return (
            /* binding */
            _TextPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_text_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./text.page.html */
      1199);
      /* harmony import */


      var _text_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./text.page.scss */
      10500);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      76820);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      29535);
      /* harmony import */


      var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor/filesystem */
      2679);
      /* harmony import */


      var _capacitor_haptics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @capacitor/haptics */
      86692);
      /* harmony import */


      var capacitor_voice_recorder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! capacitor-voice-recorder */
      61005);

      var _TextPage = /*#__PURE__*/function () {
        function TextPage(gestCtrl, route, platform) {
          _classCallCheck(this, TextPage);

          this.gestCtrl = gestCtrl;
          this.route = route;
          this.platform = platform;
          this.recording = false;
          this.storedFileNames = [];
          this.durationTime = '';
          this.duration = 0;
          this.playing = false;
        }

        _createClass(TextPage, [{
          key: "test",
          value: function test() {
            console.log('***');
            this.route.navigateByUrl('tabs/chats');
          }
        }, {
          key: "sendMsg",
          value: function sendMsg() {
            console.log('***sendMsg clicked...');
          }
        }, {
          key: "sendEmj",
          value: function sendEmj() {
            console.log('*** sendEmj clicked...');
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this4 = this;

            var longpress = this.gestCtrl.create({
              el: this.recordbtn.nativeElement,
              threshold: 0,
              gestureName: 'long-press',
              onStart: function onStart(ev) {
                _capacitor_haptics__WEBPACK_IMPORTED_MODULE_3__.Haptics.impact({
                  style: _capacitor_haptics__WEBPACK_IMPORTED_MODULE_3__.ImpactStyle.Light
                });

                _this4.startRecording();
              },
              onEnd: function onEnd(ev) {
                _capacitor_haptics__WEBPACK_IMPORTED_MODULE_3__.Haptics.impact({
                  style: _capacitor_haptics__WEBPACK_IMPORTED_MODULE_3__.ImpactStyle.Light
                });

                _this4.stopRecording();
              }
            }, true);
            longpress.enable();
          }
        }, {
          key: "calculateDuration",
          value: function calculateDuration() {
            var _this5 = this;

            if (!this.recording) {
              this.duration = 0;
              this.durationTime = '';
              return;
            }

            this.duration += 1;
            var minutes = Math.floor(this.duration / 60);
            var seconds = (this.duration % 60).toString().padStart(2, '0');
            this.durationTime = "".concat(minutes, ":").concat(seconds);
            setTimeout(function () {
              _this5.calculateDuration();
            }, 1000);
          }
        }, {
          key: "play",
          value: function play(FileName) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var audioFile, base64Sound, audioRef;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      this.playing = true;
                      _context9.next = 3;
                      return _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.readFile({
                        path: FileName,
                        directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Directory.Data
                      });

                    case 3:
                      audioFile = _context9.sent;
                      console.log(audioFile);
                      base64Sound = audioFile.data;
                      audioRef = new Audio("data:audio/aac;base64,".concat(base64Sound));
                      alert('voice note playng in background');

                      audioRef.oncanplaythrough = function () {
                        return audioRef.play();
                      };

                      audioRef.load();
                      this.playing = false;

                    case 11:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "loadFiles",
          value: function loadFiles() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var _this6 = this;

              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.readdir({
                        path: '',
                        directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Directory.Data
                      }).then(function (res) {
                        console.log(res);
                        _this6.storedFileNames = res.files;
                      });

                    case 1:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10);
            }));
          }
        }, {
          key: "startRecording",
          value: function startRecording() {
            if (this.recording) {
              return;
            }

            this.recording = true;
            capacitor_voice_recorder__WEBPACK_IMPORTED_MODULE_4__.VoiceRecorder.startRecording();
          }
        }, {
          key: "stopRecording",
          value: function stopRecording() {
            var _this7 = this;

            if (!this.recording) {
              return;
            }

            capacitor_voice_recorder__WEBPACK_IMPORTED_MODULE_4__.VoiceRecorder.stopRecording().then(function (res) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                var recordData, fileName;
                return regeneratorRuntime.wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        if (!(res.value && res.value.recordDataBase64)) {
                          _context11.next = 7;
                          break;
                        }

                        recordData = res.value.recordDataBase64;
                        console.log(recordData);
                        fileName = new Date().getTime() + '.wav';
                        _context11.next = 6;
                        return _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.writeFile({
                          path: fileName,
                          directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Directory.Data,
                          data: recordData
                        });

                      case 6:
                        this.loadFiles;

                      case 7:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11, this);
              }));
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadFiles();
            capacitor_voice_recorder__WEBPACK_IMPORTED_MODULE_4__.VoiceRecorder.requestAudioRecordingPermission();
          }
        }]);

        return TextPage;
      }();

      _TextPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.GestureController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform
        }];
      };

      _TextPage.propDecorators = {
        recordbtn: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild,
          args: ['recordbtn', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef
          }]
        }]
      };
      _TextPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-text',
        template: _raw_loader_text_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_text_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _TextPage);
      /***/
    },

    /***/
    10500:
    /*!*******************************************!*\
      !*** ./src/app/pages/text/text.page.scss ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".message {\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 4px;\n  white-space: pre-wrap;\n}\n\n.other-msg {\n  position: relative;\n  margin: 20px 5px 0px;\n  max-width: 80%;\n  align-self: flex-end;\n  padding: 6px 10px 7px;\n  border-radius: 15px 15px 15px 0px;\n  background: #75dd6c;\n  font-size: medium;\n}\n\n.my-msg {\n  position: relative;\n  margin: 20px 5px 0px;\n  max-width: 80%;\n  align-self: flex-start;\n  padding: 6px 10px 7px;\n  border-radius: 15px 15px 0px;\n  background: #dfdfdf;\n  font-size: medium;\n  line-height: 1.4;\n}\n\n.time {\n  color: black;\n  font-size: small;\n}\n\n.msg-input {\n  width: 100%;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 10px;\n  background: #fff;\n  resize: none;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.msg-button {\n  --padding-start: 0.5em;\n  --padding-end: 0.5em;\n}\n\nion-icon {\n  zoom: 2;\n  right: 10px;\n  position: absolute;\n  bottom: 11px;\n  align-content: center;\n}\n\n.main {\n  position: relative;\n}\n\n.audioCard {\n  position: relative;\n  height: 80px;\n  width: 220px;\n  background-color: cornflowerblue;\n  margin: 15px 5px 5px 5px;\n  border-radius: 5px 5px 5px 5px;\n}\n\n.audioLabel {\n  position: relative;\n  top: 35px;\n  padding: 5px 5px 5px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUNBO0VBR0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDSixvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQUE7O0FBS0E7RUFHSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNKLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUpBOztBQU9BO0VBQ0ksWUFBQTtFQUVBLGdCQUFBO0FBTEo7O0FBUUE7RUFDSSxXQUFBO0VBQ0EseUNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFMSjs7QUFPQTtFQUNJLHNCQUFBO0VBQ0Esb0JBQUE7QUFKSjs7QUFNQTtFQUNJLE9BQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFISjs7QUFLQTtFQUNJLGtCQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFBYSxZQUFBO0VBQ2IsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0FBREo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtBQUFKIiwiZmlsZSI6InRleHQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2V7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG59XHJcbi5vdGhlci1tc2d7XHJcbiAgIC8vIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludCk7XHJcbiAgIC8vIGNvbG9yOiNmZmY7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDIwcHggNXB4IDBweDtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG5hbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxucGFkZGluZzogNnB4IDEwcHggN3B4O1xyXG5ib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMTVweCAwcHg7XHJcbmJhY2tncm91bmQ6IHJnYigxMTcsIDIyMSwgMTA4KTtcclxuZm9udC1zaXplOiBtZWRpdW07XHJcbi8vbGluZS1oZWlnaHQ6IDEuNDtcclxuLy8tLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2F1ZGlvL1RzaGVsYS5tcDMnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuXHJcbn1cclxuLm15LW1zZ3tcclxuICAgLy8gYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAvLyBjb2xvcjojZmZmO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAyMHB4IDVweCAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxuYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxucGFkZGluZzogNnB4IDEwcHggN3B4O1xyXG5ib3JkZXItcmFkaXVzOjE1cHggMTVweCAwcHg7XHJcbmJhY2tncm91bmQ6I2RmZGZkZjtcclxuZm9udC1zaXplOiBtZWRpdW07XHJcbmxpbmUtaGVpZ2h0OiAxLjQ7XHJcblxyXG59XHJcbi50aW1le1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgLy9mbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG5cclxufVxyXG4ubXNnLWlucHV0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXIgOjFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5tc2ctYnV0dG9ue1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwLjVlbTtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDAuNWVtO1xyXG59XHJcbmlvbi1pY29ue1xyXG4gICAgem9vbTogMi4wMDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMXB4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcbi5tYWlue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHJcbn1cclxuLmF1ZGlvQ2FyZHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogODBweDt3aWR0aDogMjIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICAgIG1hcmdpbjogMTVweCA1cHggNXB4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxufVxyXG4uYXVkaW9MYWJlbHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMzVweDtcclxuICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDIwcHg7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    1199:
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/text/text.page.html ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-icon name=\"arrow-back-outline\" (click)=\"test()\"></ion-icon>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>ext</ion-title>\r\n\r\n  </ion-toolbar>\r\n  \r\n</ion-header>\r\n\r\n<ion-content>\r\n<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>chat</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content padding class=\"main\">\r\n  \r\n  <!-- <ion-button (click)=\"photo1()\">Next</ion-button>\r\n<ion-button (click)=\"photo()\">Take photo</ion-button>\r\n\r\n<ion-list *ngFor=\"let photo of photos\">\r\n<ion-item>\r\n    <img src={{photo}} style=\"width: 200px; height: 150px;\">  photos : any[];\r\n</ion-item>\r\n\r\n  </ion-list> -->\r\n<!-- <div class=\"message my-msg\" >\r\n\r\n  <h4>{{tem.name}}</h4>\r\n  <p>{{tem.userID}}</p>\r\n  <p>blah blah text ... </p>\r\n  <p>{{tem.message}}</p>\r\n  <div class=\"time\" text-right>\r\n    <br>\r\n    {{tem.time | date : 'short'}}\r\n  </div>\r\n</div> -->\r\n<ion-grid ><!-- *ngIf=\"afAuth.auth.currentUser\" -->\r\n  <ion-row ><!-- *ngFor=\"let tem of temp | async\" -->\r\n    <ion-col size=\"9\" class=\"message other-msg\" ><!-- *ngIf=\"tem.userID !== afAuth.auth.currentUser.uid\" -->\r\n        <!-- <h4><strong>{{tem.name}}</strong></h4>\r\n        <p><strong>{{tem.userID}}</strong></p> -->\r\n        \r\n        <p>tem.message</p> <!-- <p>tem.message</p> -->\r\n        <div class=\"time\" text-right>\r\n          <br>\r\n          <!-- {{tem.time | date : 'short'}} -->time | date : 'short'\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col offset=\"3\" size=\"9\" class=\"message my-msg\" ><!-- *ngIf=\"tem.userID === afAuth.auth.currentUser.uid\" -->\r\n        <!-- <h4><strong>{{tem.name}}</strong></h4>\r\n        <p><strong>{{tem.userID}}</strong></p> -->\r\n        <p>blah blah text ... </p>\r\n        <div class=\"time\" text-right>\r\n          <br>\r\n          <!-- {{tem.time | date : 'short'}} -->time | date : 'short'\r\n        </div>\r\n      </ion-col>\r\n    <ion-list> \r\n      <div class=\"audioCard\" *ngFor=\"let f of storedFileNames\">\r\n        <ion-label class=\"audioLabel\" >\r\n          {{f}}\r\n        </ion-label>\r\n        <ion-progress-bar value=\"0.81\" buffer=\"0.9\"color=\"secondary\" style=\"position: relative; width: 50%;top: 40px;left: 15px;\" ></ion-progress-bar>\r\n        <ion-icon name=\"play-circle-outline\"  *ngIf=\"!playing\" (click)=\"play(f)\"></ion-icon> \r\n        <ion-icon name=\"pause-circle-outline\" *ngIf=\"playing\"></ion-icon>\r\n       </div>\r\n       </ion-list>   \r\n    </ion-row>\r\n  </ion-grid>\r\n  <!-- <ion-button (click)=\"startRecording()\"> Start</ion-button>\r\n  <ion-button (click)=\"stopRecording()\"> Stop</ion-button>\r\n  <ion-list>\r\n    <ion-item button *ngFor=\"let f of storedFileNames\" (click)=\"play(f)\">\r\n      {{ f }}\r\n    </ion-item>\r\n  </ion-list> -->\r\n\r\n\r\n</ion-content>\r\n<ion-footer style=\"position: fixed;bottom: 0; left: 0; right: 0; height: 90px\">\r\n  <ion-toolbar color=\"light\">\r\n    <ion-row>\r\n        <ion-col size=\"2\" >\r\n          <span *ngIf=\"recording\">\r\n            {{durationTime}}\r\n          </span>\r\n            <ion-icon name=\"mic\" #recordbtn></ion-icon>\r\n        \r\n           \r\n          </ion-col>\r\n        \r\n      <ion-col size=\"8\">\r\n       \r\n        <ion-textarea autosize maxRows=\"2\"  style=\"border: 1pt solid;border-radius: 8px 8px 8px 8px;height: 60x;\">\r\n\r\n        </ion-textarea>\r\n      </ion-col>\r\n      <ion-col size=\"2\" >\r\n          <ion-icon name=\"send\" color=\"primary\" (click)=\"sendMsg()\" ></ion-icon>\r\n          \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_text_text_module_ts-es5.js.map