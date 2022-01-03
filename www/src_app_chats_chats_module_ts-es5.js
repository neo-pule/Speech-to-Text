(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkionic_app_base"] = self["webpackChunkionic_app_base"] || []).push([["src_app_chats_chats_module_ts"], {
    /***/
    54874:
    /*!***********************************************!*\
      !*** ./src/app/chats/chats-routing.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChatsPageRoutingModule": function ChatsPageRoutingModule() {
          return (
            /* binding */
            _ChatsPageRoutingModule
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


      var _chats_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./chats.page */
      35608);

      var routes = [{
        path: '',
        component: _chats_page__WEBPACK_IMPORTED_MODULE_0__.ChatsPage
      }];

      var _ChatsPageRoutingModule = function ChatsPageRoutingModule() {
        _classCallCheck(this, ChatsPageRoutingModule);
      };

      _ChatsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ChatsPageRoutingModule);
      /***/
    },

    /***/
    23675:
    /*!***************************************!*\
      !*** ./src/app/chats/chats.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChatsPageModule": function ChatsPageModule() {
          return (
            /* binding */
            _ChatsPageModule
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


      var _chats_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./chats-routing.module */
      54874);
      /* harmony import */


      var _chats_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./chats.page */
      35608);

      var _ChatsPageModule = function ChatsPageModule() {
        _classCallCheck(this, ChatsPageModule);
      };

      _ChatsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _chats_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChatsPageRoutingModule],
        declarations: [_chats_page__WEBPACK_IMPORTED_MODULE_1__.ChatsPage]
      })], _ChatsPageModule);
      /***/
    },

    /***/
    35608:
    /*!*************************************!*\
      !*** ./src/app/chats/chats.page.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChatsPage": function ChatsPage() {
          return (
            /* binding */
            _ChatsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_chats_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./chats.page.html */
      23250);
      /* harmony import */


      var _chats_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./chats.page.scss */
      45759);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      29535);

      var _ChatsPage = /*#__PURE__*/function () {
        function ChatsPage(route) {
          _classCallCheck(this, ChatsPage);

          this.route = route;
        }

        _createClass(ChatsPage, [{
          key: "test",
          value: function test() {
            this.route.navigateByUrl('text');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ChatsPage;
      }();

      _ChatsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }];
      };

      _ChatsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-chats',
        template: _raw_loader_chats_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_chats_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ChatsPage);
      /***/
    },

    /***/
    45759:
    /*!***************************************!*\
      !*** ./src/app/chats/chats.page.scss ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".time {\n  position: relative;\n  font-size: 10px;\n  top: 30px;\n}\n\n.badge {\n  position: absolute;\n  top: 12px;\n  right: 2px;\n}\n\n.container {\n  height: 100%;\n  position: relative;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFDQTs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7QUFHSiIsImZpbGUiOiJjaGF0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGltZXtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG5mb250LXNpemU6IDEwcHg7XHJcbnRvcDozMHB4O1xyXG59XHJcbi5iYWRnZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTJweDtcclxuICAgIHJpZ2h0OiAycHg7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDA7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    23250:
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chats/chats.page.html ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header >\r\n  <ion-toolbar padding>\r\n    <ion-title >\r\n      <ion-title >Chats</ion-title>\r\n      <ion-icon name=\"search-outline\" ></ion-icon>\r\n      \r\n    </ion-title>\r\n    \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n  <ion-item (click)=\"test()\">\r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n    </ion-avatar>\r\n    <ion-label>Item Avatar</ion-label>\r\n    <div class=\"container\"> \r\n    <ion-badge color=\"primary\" class=\"badge\">3</ion-badge>\r\n    <span class=\"time\">11:49</span>\r\n  </div>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n    </ion-avatar>\r\n    <ion-label>Item Avatar</ion-label>\r\n    <ion-badge color=\"primary\">11</ion-badge>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n    </ion-avatar>\r\n    <ion-label>Item Avatar</ion-label>\r\n    <ion-badge color=\"primary\">6</ion-badge>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n    </ion-avatar>\r\n    <ion-label>Item Avatar</ion-label>\r\n    <ion-badge color=\"primary\">2</ion-badge>\r\n  </ion-item>\r\n</ion-list>\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_chats_chats_module_ts-es5.js.map