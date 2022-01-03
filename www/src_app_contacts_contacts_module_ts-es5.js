(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkionic_app_base"] = self["webpackChunkionic_app_base"] || []).push([["src_app_contacts_contacts_module_ts"], {
    /***/
    61100:
    /*!*****************************************************!*\
      !*** ./src/app/contacts/contacts-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactsPageRoutingModule": function ContactsPageRoutingModule() {
          return (
            /* binding */
            _ContactsPageRoutingModule
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


      var _contacts_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./contacts.page */
      40692);

      var routes = [{
        path: '',
        component: _contacts_page__WEBPACK_IMPORTED_MODULE_0__.ContactsPage
      }];

      var _ContactsPageRoutingModule = function ContactsPageRoutingModule() {
        _classCallCheck(this, ContactsPageRoutingModule);
      };

      _ContactsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ContactsPageRoutingModule);
      /***/
    },

    /***/
    14303:
    /*!*********************************************!*\
      !*** ./src/app/contacts/contacts.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactsPageModule": function ContactsPageModule() {
          return (
            /* binding */
            _ContactsPageModule
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


      var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./contacts-routing.module */
      61100);
      /* harmony import */


      var _contacts_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./contacts.page */
      40692);

      var _ContactsPageModule = function ContactsPageModule() {
        _classCallCheck(this, ContactsPageModule);
      };

      _ContactsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _contacts_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactsPageRoutingModule],
        declarations: [_contacts_page__WEBPACK_IMPORTED_MODULE_1__.ContactsPage]
      })], _ContactsPageModule);
      /***/
    },

    /***/
    40692:
    /*!*******************************************!*\
      !*** ./src/app/contacts/contacts.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContactsPage": function ContactsPage() {
          return (
            /* binding */
            _ContactsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_contacts_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./contacts.page.html */
      33519);
      /* harmony import */


      var _contacts_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./contacts.page.scss */
      3063);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      29535);

      var _ContactsPage = /*#__PURE__*/function () {
        function ContactsPage(route) {
          _classCallCheck(this, ContactsPage);

          this.route = route;
        }

        _createClass(ContactsPage, [{
          key: "test",
          value: function test() {
            this.route.navigateByUrl('text');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ContactsPage;
      }();

      _ContactsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }];
      };

      _ContactsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-contacts',
        template: _raw_loader_contacts_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_contacts_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ContactsPage);
      /***/
    },

    /***/
    3063:
    /*!*********************************************!*\
      !*** ./src/app/contacts/contacts.page.scss ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0cy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    33519:
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contacts.page.html ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar >\r\n    <ion-title>\r\n      <ion-title>Contacts</ion-title>\r\n      <ion-icon name=\"search-outline\" ></ion-icon>\r\n      \r\n    </ion-title>\r\n    \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-list-header lines=\"full\">\r\n    <ion-label>Contacts</ion-label>\r\n    <ion-button>Search</ion-button>\r\n  </ion-list-header>\r\n  <ion-list>\r\n  <ion-item (click)=\"test()\"> \r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n    </ion-avatar>\r\n    <ion-label>Item Avatar</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n    </ion-avatar>\r\n    <ion-label>Item Avatar</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n    </ion-avatar>\r\n    <ion-label>Item Avatar</ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-avatar slot=\"start\">\r\n      <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n    </ion-avatar>\r\n    <ion-label>Item Avatar</ion-label>\r\n  </ion-item>\r\n</ion-list>\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_contacts_contacts_module_ts-es5.js.map