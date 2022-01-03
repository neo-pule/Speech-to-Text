(self["webpackChunkionic_app_base"] = self["webpackChunkionic_app_base"] || []).push([["src_app_pages_text_text_module_ts"],{

/***/ 68107:
/*!****************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Capacitor": function() { return /* binding */ Capacitor; },
/* harmony export */   "CapacitorException": function() { return /* binding */ CapacitorException; },
/* harmony export */   "CapacitorPlatforms": function() { return /* binding */ CapacitorPlatforms; },
/* harmony export */   "ExceptionCode": function() { return /* binding */ ExceptionCode; },
/* harmony export */   "Plugins": function() { return /* binding */ Plugins; },
/* harmony export */   "WebPlugin": function() { return /* binding */ WebPlugin; },
/* harmony export */   "WebView": function() { return /* binding */ WebView; },
/* harmony export */   "addPlatform": function() { return /* binding */ addPlatform; },
/* harmony export */   "registerPlugin": function() { return /* binding */ registerPlugin; },
/* harmony export */   "registerWebPlugin": function() { return /* binding */ registerWebPlugin; },
/* harmony export */   "setPlatform": function() { return /* binding */ setPlatform; }
/* harmony export */ });
/*! Capacitor: https://capacitorjs.com/ - MIT License */
const createCapacitorPlatforms = (win) => {
    const defaultPlatformMap = new Map();
    defaultPlatformMap.set('web', { name: 'web' });
    const capPlatforms = win.CapacitorPlatforms || {
        currentPlatform: { name: 'web' },
        platforms: defaultPlatformMap,
    };
    const addPlatform = (name, platform) => {
        capPlatforms.platforms.set(name, platform);
    };
    const setPlatform = (name) => {
        if (capPlatforms.platforms.has(name)) {
            capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
        }
    };
    capPlatforms.addPlatform = addPlatform;
    capPlatforms.setPlatform = setPlatform;
    return capPlatforms;
};
const initPlatforms = (win) => (win.CapacitorPlatforms = createCapacitorPlatforms(win));
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const CapacitorPlatforms = /*#__PURE__*/ initPlatforms((typeof globalThis !== 'undefined'
    ? globalThis
    : typeof self !== 'undefined'
        ? self
        : typeof window !== 'undefined'
            ? window
            : typeof global !== 'undefined'
                ? global
                : {}));
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const addPlatform = CapacitorPlatforms.addPlatform;
/**
 * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
 */
const setPlatform = CapacitorPlatforms.setPlatform;

const legacyRegisterWebPlugin = (cap, webPlugin) => {
    var _a;
    const config = webPlugin.config;
    const Plugins = cap.Plugins;
    if (!config || !config.name) {
        // TODO: add link to upgrade guide
        throw new Error(`Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."`);
    }
    // TODO: add link to upgrade guide
    console.warn(`Capacitor plugin "${config.name}" is using the deprecated "registerWebPlugin()" function`);
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

var ExceptionCode;
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
})(ExceptionCode || (ExceptionCode = {}));
class CapacitorException extends Error {
    constructor(message, code) {
        super(message);
        this.message = message;
        this.code = code;
    }
}
const getPlatformId = (win) => {
    var _a, _b;
    if (win === null || win === void 0 ? void 0 : win.androidBridge) {
        return 'android';
    }
    else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
        return 'ios';
    }
    else {
        return 'web';
    }
};

const createCapacitor = (win) => {
    var _a, _b, _c, _d, _e;
    const capCustomPlatform = win.CapacitorCustomPlatform || null;
    const cap = win.Capacitor || {};
    const Plugins = (cap.Plugins = cap.Plugins || {});
    /**
     * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
     */
    const capPlatforms = win.CapacitorPlatforms;
    const defaultGetPlatform = () => {
        return capCustomPlatform !== null
            ? capCustomPlatform.name
            : getPlatformId(win);
    };
    const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;
    const defaultIsNativePlatform = () => getPlatform() !== 'web';
    const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;
    const defaultIsPluginAvailable = (pluginName) => {
        const plugin = registeredPlugins.get(pluginName);
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
    const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) ||
        defaultIsPluginAvailable;
    const defaultGetPluginHeader = (pluginName) => { var _a; return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName); };
    const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;
    const handleError = (err) => win.console.error(err);
    const pluginMethodNoop = (_target, prop, pluginName) => {
        return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
    };
    const registeredPlugins = new Map();
    const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
        const registeredPlugin = registeredPlugins.get(pluginName);
        if (registeredPlugin) {
            console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
            return registeredPlugin.proxy;
        }
        const platform = getPlatform();
        const pluginHeader = getPluginHeader(pluginName);
        let jsImplementation;
        const loadPluginImplementation = async () => {
            if (!jsImplementation && platform in jsImplementations) {
                jsImplementation =
                    typeof jsImplementations[platform] === 'function'
                        ? (jsImplementation = await jsImplementations[platform]())
                        : (jsImplementation = jsImplementations[platform]);
            }
            else if (capCustomPlatform !== null &&
                !jsImplementation &&
                'web' in jsImplementations) {
                jsImplementation =
                    typeof jsImplementations['web'] === 'function'
                        ? (jsImplementation = await jsImplementations['web']())
                        : (jsImplementation = jsImplementations['web']);
            }
            return jsImplementation;
        };
        const createPluginMethod = (impl, prop) => {
            var _a, _b;
            if (pluginHeader) {
                const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);
                if (methodHeader) {
                    if (methodHeader.rtype === 'promise') {
                        return (options) => cap.nativePromise(pluginName, prop.toString(), options);
                    }
                    else {
                        return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
                    }
                }
                else if (impl) {
                    return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
                }
            }
            else if (impl) {
                return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
            }
            else {
                throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
            }
        };
        const createPluginMethodWrapper = (prop) => {
            let remove;
            const wrapper = (...args) => {
                const p = loadPluginImplementation().then(impl => {
                    const fn = createPluginMethod(impl, prop);
                    if (fn) {
                        const p = fn(...args);
                        remove = p === null || p === void 0 ? void 0 : p.remove;
                        return p;
                    }
                    else {
                        throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
                    }
                });
                if (prop === 'addListener') {
                    p.remove = async () => remove();
                }
                return p;
            };
            // Some flair ✨
            wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;
            Object.defineProperty(wrapper, 'name', {
                value: prop,
                writable: false,
                configurable: false,
            });
            return wrapper;
        };
        const addListener = createPluginMethodWrapper('addListener');
        const removeListener = createPluginMethodWrapper('removeListener');
        const addListenerNative = (eventName, callback) => {
            const call = addListener({ eventName }, callback);
            const remove = async () => {
                const callbackId = await call;
                removeListener({
                    eventName,
                    callbackId,
                }, callback);
            };
            const p = new Promise(resolve => call.then(() => resolve({ remove })));
            p.remove = async () => {
                console.warn(`Using addListener() without 'await' is deprecated.`);
                await remove();
            };
            return p;
        };
        const proxy = new Proxy({}, {
            get(_, prop) {
                switch (prop) {
                    // https://github.com/facebook/react/issues/20030
                    case '$$typeof':
                        return undefined;
                    case 'toJSON':
                        return () => ({});
                    case 'addListener':
                        return pluginHeader ? addListenerNative : addListener;
                    case 'removeListener':
                        return removeListener;
                    default:
                        return createPluginMethodWrapper(prop);
                }
            },
        });
        Plugins[pluginName] = proxy;
        registeredPlugins.set(pluginName, {
            name: pluginName,
            proxy,
            platforms: new Set([
                ...Object.keys(jsImplementations),
                ...(pluginHeader ? [platform] : []),
            ]),
        });
        return proxy;
    };
    const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin;
    // Add in convertFileSrc for web, it will already be available in native context
    if (!cap.convertFileSrc) {
        cap.convertFileSrc = filePath => filePath;
    }
    cap.getPlatform = getPlatform;
    cap.handleError = handleError;
    cap.isNativePlatform = isNativePlatform;
    cap.isPluginAvailable = isPluginAvailable;
    cap.pluginMethodNoop = pluginMethodNoop;
    cap.registerPlugin = registerPlugin;
    cap.Exception = CapacitorException;
    cap.DEBUG = !!cap.DEBUG;
    cap.isLoggingEnabled = !!cap.isLoggingEnabled;
    // Deprecated props
    cap.platform = cap.getPlatform();
    cap.isNative = cap.isNativePlatform();
    return cap;
};
const initCapacitorGlobal = (win) => (win.Capacitor = createCapacitor(win));

const Capacitor = /*#__PURE__*/ initCapacitorGlobal(typeof globalThis !== 'undefined'
    ? globalThis
    : typeof self !== 'undefined'
        ? self
        : typeof window !== 'undefined'
            ? window
            : typeof global !== 'undefined'
                ? global
                : {});
const registerPlugin = Capacitor.registerPlugin;
/**
 * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
 * Capacitor v3 plugins should import the plugin directly. This "Plugins"
 * export is deprecated in v3, and will be removed in v4.
 */
const Plugins = Capacitor.Plugins;
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
const registerWebPlugin = (plugin) => legacyRegisterWebPlugin(Capacitor, plugin);

/**
 * Base class web plugins should extend.
 */
class WebPlugin {
    constructor(config) {
        this.listeners = {};
        this.windowListeners = {};
        if (config) {
            // TODO: add link to upgrade guide
            console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
            this.config = config;
        }
    }
    addListener(eventName, listenerFunc) {
        const listeners = this.listeners[eventName];
        if (!listeners) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(listenerFunc);
        // If we haven't added a window listener for this event and it requires one,
        // go ahead and add it
        const windowListener = this.windowListeners[eventName];
        if (windowListener && !windowListener.registered) {
            this.addWindowListener(windowListener);
        }
        const remove = async () => this.removeListener(eventName, listenerFunc);
        const p = Promise.resolve({ remove });
        Object.defineProperty(p, 'remove', {
            value: async () => {
                console.warn(`Using addListener() without 'await' is deprecated.`);
                await remove();
            },
        });
        return p;
    }
    async removeAllListeners() {
        this.listeners = {};
        for (const listener in this.windowListeners) {
            this.removeWindowListener(this.windowListeners[listener]);
        }
        this.windowListeners = {};
    }
    notifyListeners(eventName, data) {
        const listeners = this.listeners[eventName];
        if (listeners) {
            listeners.forEach(listener => listener(data));
        }
    }
    hasListeners(eventName) {
        return !!this.listeners[eventName].length;
    }
    registerWindowListener(windowEventName, pluginEventName) {
        this.windowListeners[pluginEventName] = {
            registered: false,
            windowEventName,
            pluginEventName,
            handler: event => {
                this.notifyListeners(pluginEventName, event);
            },
        };
    }
    unimplemented(msg = 'not implemented') {
        return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
    }
    unavailable(msg = 'not available') {
        return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
    }
    async removeListener(eventName, listenerFunc) {
        const listeners = this.listeners[eventName];
        if (!listeners) {
            return;
        }
        const index = listeners.indexOf(listenerFunc);
        this.listeners[eventName].splice(index, 1);
        // If there are no more listeners for this type of event,
        // remove the window listener
        if (!this.listeners[eventName].length) {
            this.removeWindowListener(this.windowListeners[eventName]);
        }
    }
    addWindowListener(handle) {
        window.addEventListener(handle.windowEventName, handle.handler);
        handle.registered = true;
    }
    removeWindowListener(handle) {
        if (!handle) {
            return;
        }
        window.removeEventListener(handle.windowEventName, handle.handler);
        handle.registered = false;
    }
}

const WebView = /*#__PURE__*/ registerPlugin('WebView');


//# sourceMappingURL=index.js.map


/***/ }),

/***/ 69586:
/*!********************************************************************!*\
  !*** ./node_modules/@capacitor/filesystem/dist/esm/definitions.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Directory": function() { return /* binding */ Directory; },
/* harmony export */   "Encoding": function() { return /* binding */ Encoding; },
/* harmony export */   "FilesystemDirectory": function() { return /* binding */ FilesystemDirectory; },
/* harmony export */   "FilesystemEncoding": function() { return /* binding */ FilesystemEncoding; }
/* harmony export */ });
var Directory;
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
})(Directory || (Directory = {}));
var Encoding;
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
})(Encoding || (Encoding = {}));
/**
 * @deprecated Use `Directory`.
 * @since 1.0.0
 */
const FilesystemDirectory = Directory;
/**
 * @deprecated Use `Encoding`.
 * @since 1.0.0
 */
const FilesystemEncoding = Encoding;
//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 2679:
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/filesystem/dist/esm/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Directory": function() { return /* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.Directory; },
/* harmony export */   "Encoding": function() { return /* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.Encoding; },
/* harmony export */   "FilesystemDirectory": function() { return /* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.FilesystemDirectory; },
/* harmony export */   "FilesystemEncoding": function() { return /* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.FilesystemEncoding; },
/* harmony export */   "Filesystem": function() { return /* binding */ Filesystem; }
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 68107);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 69586);

const Filesystem = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Filesystem', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_filesystem_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 57843)).then(m => new m.FilesystemWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 37060:
/*!*****************************************************************!*\
  !*** ./node_modules/@capacitor/haptics/dist/esm/definitions.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImpactStyle": function() { return /* binding */ ImpactStyle; },
/* harmony export */   "NotificationType": function() { return /* binding */ NotificationType; },
/* harmony export */   "HapticsNotificationType": function() { return /* binding */ HapticsNotificationType; },
/* harmony export */   "HapticsImpactStyle": function() { return /* binding */ HapticsImpactStyle; }
/* harmony export */ });
var ImpactStyle;
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
})(ImpactStyle || (ImpactStyle = {}));
var NotificationType;
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
})(NotificationType || (NotificationType = {}));
/**
 * @deprecated Use `NotificationType`.
 * @since 1.0.0
 */
const HapticsNotificationType = NotificationType;
/**
 * @deprecated Use `ImpactStyle`.
 * @since 1.0.0
 */
const HapticsImpactStyle = ImpactStyle;
//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 86692:
/*!***********************************************************!*\
  !*** ./node_modules/@capacitor/haptics/dist/esm/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HapticsImpactStyle": function() { return /* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.HapticsImpactStyle; },
/* harmony export */   "HapticsNotificationType": function() { return /* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.HapticsNotificationType; },
/* harmony export */   "ImpactStyle": function() { return /* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.ImpactStyle; },
/* harmony export */   "NotificationType": function() { return /* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.NotificationType; },
/* harmony export */   "Haptics": function() { return /* binding */ Haptics; }
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 68107);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 37060);

const Haptics = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Haptics', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_haptics_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 93640)).then(m => new m.HapticsWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 98423:
/*!***********************************************************************!*\
  !*** ./node_modules/capacitor-voice-recorder/dist/esm/definitions.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 61005:
/*!*****************************************************************!*\
  !*** ./node_modules/capacitor-voice-recorder/dist/esm/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoiceRecorder": function() { return /* binding */ VoiceRecorder; }
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 68107);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 98423);

const VoiceRecorder = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('VoiceRecorder', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-voice-recorder_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 10605)).then(m => new m.VoiceRecorderWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 82831:
/*!***************************************************!*\
  !*** ./src/app/pages/text/text-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextPageRoutingModule": function() { return /* binding */ TextPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _text_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text.page */ 25674);




const routes = [
    {
        path: '',
        component: _text_page__WEBPACK_IMPORTED_MODULE_0__.TextPage
    }
];
let TextPageRoutingModule = class TextPageRoutingModule {
};
TextPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TextPageRoutingModule);



/***/ }),

/***/ 71877:
/*!*******************************************!*\
  !*** ./src/app/pages/text/text.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextPageModule": function() { return /* binding */ TextPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 76820);
/* harmony import */ var _text_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-routing.module */ 82831);
/* harmony import */ var _text_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text.page */ 25674);







let TextPageModule = class TextPageModule {
};
TextPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _text_routing_module__WEBPACK_IMPORTED_MODULE_0__.TextPageRoutingModule
        ],
        declarations: [_text_page__WEBPACK_IMPORTED_MODULE_1__.TextPage]
    })
], TextPageModule);



/***/ }),

/***/ 25674:
/*!*****************************************!*\
  !*** ./src/app/pages/text/text.page.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextPage": function() { return /* binding */ TextPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_text_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./text.page.html */ 1199);
/* harmony import */ var _text_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text.page.scss */ 10500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 76820);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/filesystem */ 2679);
/* harmony import */ var _capacitor_haptics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/haptics */ 86692);
/* harmony import */ var capacitor_voice_recorder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! capacitor-voice-recorder */ 61005);









let TextPage = class TextPage {
    constructor(gestCtrl, route, platform) {
        this.gestCtrl = gestCtrl;
        this.route = route;
        this.platform = platform;
        this.recording = false;
        this.storedFileNames = [];
        this.durationTime = '';
        this.duration = 0;
        this.playing = false;
    }
    test() {
        console.log('***');
        this.route.navigateByUrl('tabs/chats');
    }
    sendMsg() {
        console.log('***sendMsg clicked...');
    }
    sendEmj() {
        console.log('*** sendEmj clicked...');
    }
    ngAfterViewInit() {
        const longpress = this.gestCtrl.create({
            el: this.recordbtn.nativeElement,
            threshold: 0,
            gestureName: 'long-press',
            onStart: ev => {
                _capacitor_haptics__WEBPACK_IMPORTED_MODULE_3__.Haptics.impact({ style: _capacitor_haptics__WEBPACK_IMPORTED_MODULE_3__.ImpactStyle.Light });
                this.startRecording();
            },
            onEnd: ev => {
                _capacitor_haptics__WEBPACK_IMPORTED_MODULE_3__.Haptics.impact({ style: _capacitor_haptics__WEBPACK_IMPORTED_MODULE_3__.ImpactStyle.Light });
                this.stopRecording();
            }
        }, true);
        longpress.enable();
    }
    calculateDuration() {
        if (!this.recording) {
            this.duration = 0;
            this.durationTime = '';
            return;
        }
        this.duration += 1;
        const minutes = Math.floor(this.duration / 60);
        const seconds = (this.duration % 60).toString().padStart(2, '0');
        this.durationTime = `${minutes}:${seconds}`;
        setTimeout(() => {
            this.calculateDuration();
        }, 1000);
    }
    play(FileName) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.playing = true;
            const audioFile = yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.readFile({
                path: FileName,
                directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Directory.Data
            });
            console.log(audioFile);
            const base64Sound = audioFile.data;
            const audioRef = new Audio(`data:audio/aac;base64,${base64Sound}`);
            alert('voice note playng in background');
            audioRef.oncanplaythrough = () => audioRef.play();
            audioRef.load();
            this.playing = false;
        });
    }
    loadFiles() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.readdir({
                path: '',
                directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Directory.Data
            }).then(res => {
                console.log(res);
                this.storedFileNames = res.files;
            });
        });
    }
    startRecording() {
        if (this.recording) {
            return;
        }
        this.recording = true;
        capacitor_voice_recorder__WEBPACK_IMPORTED_MODULE_4__.VoiceRecorder.startRecording();
    }
    stopRecording() {
        if (!this.recording) {
            return;
        }
        capacitor_voice_recorder__WEBPACK_IMPORTED_MODULE_4__.VoiceRecorder.stopRecording().then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            if (res.value && res.value.recordDataBase64) {
                const recordData = res.value.recordDataBase64;
                console.log(recordData);
                const fileName = new Date().getTime() + '.wav';
                yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Filesystem.writeFile({
                    path: fileName,
                    directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_2__.Directory.Data,
                    data: recordData
                });
                this.loadFiles;
            }
        }));
    }
    ngOnInit() {
        this.loadFiles();
        capacitor_voice_recorder__WEBPACK_IMPORTED_MODULE_4__.VoiceRecorder.requestAudioRecordingPermission();
    }
};
TextPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.GestureController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform }
];
TextPage.propDecorators = {
    recordbtn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['recordbtn', { read: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef },] }]
};
TextPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-text',
        template: _raw_loader_text_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_text_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TextPage);



/***/ }),

/***/ 10500:
/*!*******************************************!*\
  !*** ./src/app/pages/text/text.page.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".message {\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 4px;\n  white-space: pre-wrap;\n}\n\n.other-msg {\n  position: relative;\n  margin: 20px 5px 0px;\n  max-width: 80%;\n  align-self: flex-end;\n  padding: 6px 10px 7px;\n  border-radius: 15px 15px 15px 0px;\n  background: #75dd6c;\n  font-size: medium;\n}\n\n.my-msg {\n  position: relative;\n  margin: 20px 5px 0px;\n  max-width: 80%;\n  align-self: flex-start;\n  padding: 6px 10px 7px;\n  border-radius: 15px 15px 0px;\n  background: #dfdfdf;\n  font-size: medium;\n  line-height: 1.4;\n}\n\n.time {\n  color: black;\n  font-size: small;\n}\n\n.msg-input {\n  width: 100%;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 10px;\n  background: #fff;\n  resize: none;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.msg-button {\n  --padding-start: 0.5em;\n  --padding-end: 0.5em;\n}\n\nion-icon {\n  zoom: 2;\n  right: 10px;\n  position: absolute;\n  bottom: 11px;\n  align-content: center;\n}\n\n.main {\n  position: relative;\n}\n\n.audioCard {\n  position: relative;\n  height: 80px;\n  width: 220px;\n  background-color: cornflowerblue;\n  margin: 15px 5px 5px 5px;\n  border-radius: 5px 5px 5px 5px;\n}\n\n.audioLabel {\n  position: relative;\n  top: 35px;\n  padding: 5px 5px 5px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUNBO0VBR0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDSixvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQUE7O0FBS0E7RUFHSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNKLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUpBOztBQU9BO0VBQ0ksWUFBQTtFQUVBLGdCQUFBO0FBTEo7O0FBUUE7RUFDSSxXQUFBO0VBQ0EseUNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFMSjs7QUFPQTtFQUNJLHNCQUFBO0VBQ0Esb0JBQUE7QUFKSjs7QUFNQTtFQUNJLE9BQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFISjs7QUFLQTtFQUNJLGtCQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFBYSxZQUFBO0VBQ2IsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0FBREo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtBQUFKIiwiZmlsZSI6InRleHQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2V7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG59XHJcbi5vdGhlci1tc2d7XHJcbiAgIC8vIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludCk7XHJcbiAgIC8vIGNvbG9yOiNmZmY7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDIwcHggNXB4IDBweDtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG5hbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxucGFkZGluZzogNnB4IDEwcHggN3B4O1xyXG5ib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMTVweCAwcHg7XHJcbmJhY2tncm91bmQ6IHJnYigxMTcsIDIyMSwgMTA4KTtcclxuZm9udC1zaXplOiBtZWRpdW07XHJcbi8vbGluZS1oZWlnaHQ6IDEuNDtcclxuLy8tLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2F1ZGlvL1RzaGVsYS5tcDMnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuXHJcbn1cclxuLm15LW1zZ3tcclxuICAgLy8gYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAvLyBjb2xvcjojZmZmO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAyMHB4IDVweCAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxuYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxucGFkZGluZzogNnB4IDEwcHggN3B4O1xyXG5ib3JkZXItcmFkaXVzOjE1cHggMTVweCAwcHg7XHJcbmJhY2tncm91bmQ6I2RmZGZkZjtcclxuZm9udC1zaXplOiBtZWRpdW07XHJcbmxpbmUtaGVpZ2h0OiAxLjQ7XHJcblxyXG59XHJcbi50aW1le1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgLy9mbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG5cclxufVxyXG4ubXNnLWlucHV0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXIgOjFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5tc2ctYnV0dG9ue1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwLjVlbTtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDAuNWVtO1xyXG59XHJcbmlvbi1pY29ue1xyXG4gICAgem9vbTogMi4wMDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMXB4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcbi5tYWlue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHJcbn1cclxuLmF1ZGlvQ2FyZHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogODBweDt3aWR0aDogMjIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcclxuICAgIG1hcmdpbjogMTVweCA1cHggNXB4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxufVxyXG4uYXVkaW9MYWJlbHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMzVweDtcclxuICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDIwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ 1199:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/text/text.page.html ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-icon name=\"arrow-back-outline\" (click)=\"test()\"></ion-icon>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>ext</ion-title>\r\n\r\n  </ion-toolbar>\r\n  \r\n</ion-header>\r\n\r\n<ion-content>\r\n<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>chat</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content padding class=\"main\">\r\n  \r\n  <!-- <ion-button (click)=\"photo1()\">Next</ion-button>\r\n<ion-button (click)=\"photo()\">Take photo</ion-button>\r\n\r\n<ion-list *ngFor=\"let photo of photos\">\r\n<ion-item>\r\n    <img src={{photo}} style=\"width: 200px; height: 150px;\">  photos : any[];\r\n</ion-item>\r\n\r\n  </ion-list> -->\r\n<!-- <div class=\"message my-msg\" >\r\n\r\n  <h4>{{tem.name}}</h4>\r\n  <p>{{tem.userID}}</p>\r\n  <p>blah blah text ... </p>\r\n  <p>{{tem.message}}</p>\r\n  <div class=\"time\" text-right>\r\n    <br>\r\n    {{tem.time | date : 'short'}}\r\n  </div>\r\n</div> -->\r\n<ion-grid ><!-- *ngIf=\"afAuth.auth.currentUser\" -->\r\n  <ion-row ><!-- *ngFor=\"let tem of temp | async\" -->\r\n    <ion-col size=\"9\" class=\"message other-msg\" ><!-- *ngIf=\"tem.userID !== afAuth.auth.currentUser.uid\" -->\r\n        <!-- <h4><strong>{{tem.name}}</strong></h4>\r\n        <p><strong>{{tem.userID}}</strong></p> -->\r\n        \r\n        <p>tem.message</p> <!-- <p>tem.message</p> -->\r\n        <div class=\"time\" text-right>\r\n          <br>\r\n          <!-- {{tem.time | date : 'short'}} -->time | date : 'short'\r\n        </div>\r\n      </ion-col>\r\n\r\n      <ion-col offset=\"3\" size=\"9\" class=\"message my-msg\" ><!-- *ngIf=\"tem.userID === afAuth.auth.currentUser.uid\" -->\r\n        <!-- <h4><strong>{{tem.name}}</strong></h4>\r\n        <p><strong>{{tem.userID}}</strong></p> -->\r\n        <p>blah blah text ... </p>\r\n        <div class=\"time\" text-right>\r\n          <br>\r\n          <!-- {{tem.time | date : 'short'}} -->time | date : 'short'\r\n        </div>\r\n      </ion-col>\r\n    <ion-list> \r\n      <div class=\"audioCard\" *ngFor=\"let f of storedFileNames\">\r\n        <ion-label class=\"audioLabel\" >\r\n          {{f}}\r\n        </ion-label>\r\n        <ion-progress-bar value=\"0.81\" buffer=\"0.9\"color=\"secondary\" style=\"position: relative; width: 50%;top: 40px;left: 15px;\" ></ion-progress-bar>\r\n        <ion-icon name=\"play-circle-outline\"  *ngIf=\"!playing\" (click)=\"play(f)\"></ion-icon> \r\n        <ion-icon name=\"pause-circle-outline\" *ngIf=\"playing\"></ion-icon>\r\n       </div>\r\n       </ion-list>   \r\n    </ion-row>\r\n  </ion-grid>\r\n  <!-- <ion-button (click)=\"startRecording()\"> Start</ion-button>\r\n  <ion-button (click)=\"stopRecording()\"> Stop</ion-button>\r\n  <ion-list>\r\n    <ion-item button *ngFor=\"let f of storedFileNames\" (click)=\"play(f)\">\r\n      {{ f }}\r\n    </ion-item>\r\n  </ion-list> -->\r\n\r\n\r\n</ion-content>\r\n<ion-footer style=\"position: fixed;bottom: 0; left: 0; right: 0; height: 90px\">\r\n  <ion-toolbar color=\"light\">\r\n    <ion-row>\r\n        <ion-col size=\"2\" >\r\n          <span *ngIf=\"recording\">\r\n            {{durationTime}}\r\n          </span>\r\n            <ion-icon name=\"mic\" #recordbtn></ion-icon>\r\n        \r\n           \r\n          </ion-col>\r\n        \r\n      <ion-col size=\"8\">\r\n       \r\n        <ion-textarea autosize maxRows=\"2\"  style=\"border: 1pt solid;border-radius: 8px 8px 8px 8px;height: 60x;\">\r\n\r\n        </ion-textarea>\r\n      </ion-col>\r\n      <ion-col size=\"2\" >\r\n          <ion-icon name=\"send\" color=\"primary\" (click)=\"sendMsg()\" ></ion-icon>\r\n          \r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_text_text_module_ts-es2015.js.map