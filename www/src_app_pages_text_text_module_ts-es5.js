(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkionic_app_base"] = self["webpackChunkionic_app_base"] || []).push([["src_app_pages_text_text_module_ts"], {
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


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      29535);

      var _TextPage = /*#__PURE__*/function () {
        function TextPage(route) {
          _classCallCheck(this, TextPage);

          this.route = route;
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
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TextPage;
      }();

      _TextPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }];
      };

      _TextPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
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


      __webpack_exports__["default"] = ".message {\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 4px;\n  white-space: pre-wrap;\n}\n\n.other-msg {\n  position: relative;\n  margin: 20px 5px 0px;\n  max-width: 80%;\n  align-self: flex-end;\n  padding: 6px 10px 7px;\n  border-radius: 15px 15px 15px 0px;\n  background: #75dd6c;\n  font-size: medium;\n}\n\n.my-msg {\n  position: relative;\n  margin: 20px 5px 0px;\n  max-width: 80%;\n  align-self: flex-start;\n  padding: 6px 10px 7px;\n  border-radius: 15px 15px 0px;\n  background: #dfdfdf;\n  font-size: medium;\n  line-height: 1.4;\n}\n\n.time {\n  color: black;\n  font-size: small;\n}\n\n.msg-input {\n  width: 100%;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 10px;\n  background: #fff;\n  resize: none;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.msg-button {\n  --padding-start: 0.5em;\n  --padding-end: 0.5em;\n}\n\nion-icon {\n  zoom: 2;\n  right: 10px;\n  position: absolute;\n  bottom: 11px;\n  align-content: center;\n}\n\n.main {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUNBO0VBR0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDSixvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQUE7O0FBS0E7RUFHSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNKLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUpBOztBQU9BO0VBQ0ksWUFBQTtFQUVBLGdCQUFBO0FBTEo7O0FBUUE7RUFDSSxXQUFBO0VBQ0EseUNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFMSjs7QUFPQTtFQUNJLHNCQUFBO0VBQ0Esb0JBQUE7QUFKSjs7QUFNQTtFQUNJLE9BQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFISjs7QUFLQTtFQUNJLGtCQUFBO0FBRkoiLCJmaWxlIjoidGV4dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZXtcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xufVxuLm90aGVyLW1zZ3tcbiAgIC8vIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludCk7XG4gICAvLyBjb2xvcjojZmZmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDIwcHggNXB4IDBweDtcbiAgICBtYXgtd2lkdGg6IDgwJTtcbmFsaWduLXNlbGY6IGZsZXgtZW5kO1xucGFkZGluZzogNnB4IDEwcHggN3B4O1xuYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDE1cHggMHB4O1xuYmFja2dyb3VuZDogcmdiKDExNywgMjIxLCAxMDgpO1xuZm9udC1zaXplOiBtZWRpdW07XG4vL2xpbmUtaGVpZ2h0OiAxLjQ7XG5cblxufVxuLm15LW1zZ3tcbiAgIC8vIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIC8vIGNvbG9yOiNmZmY7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMjBweCA1cHggMHB4O1xuICAgIG1heC13aWR0aDogODAlO1xuYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbnBhZGRpbmc6IDZweCAxMHB4IDdweDtcbmJvcmRlci1yYWRpdXM6MTVweCAxNXB4IDBweDtcbmJhY2tncm91bmQ6I2RmZGZkZjtcbmZvbnQtc2l6ZTogbWVkaXVtO1xubGluZS1oZWlnaHQ6IDEuNDtcblxufVxuLnRpbWV7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIC8vZmxvYXQ6IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG5cbn1cbi5tc2ctaW5wdXR7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyIDoxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcmVzaXplOiBub25lO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuLm1zZy1idXR0b257XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwLjVlbTtcbiAgICAtLXBhZGRpbmctZW5kOiAwLjVlbTtcbn1cbmlvbi1pY29ue1xuICAgIHpvb206IDIuMDA7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTFweDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG4ubWFpbntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgXG59Il19 */";
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


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    \n    <ion-title>text</ion-title>\n    <ion-icon name=\"arrow-back-outline\" (click)=\"test()\"></ion-icon>\n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-content>\n<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>chat</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content padding class=\"main\">\n  \n  <!-- <ion-button (click)=\"photo1()\">Next</ion-button>\n<ion-button (click)=\"photo()\">Take photo</ion-button>\n\n<ion-list *ngFor=\"let photo of photos\">\n<ion-item>\n    <img src={{photo}} style=\"width: 200px; height: 150px;\">  photos : any[];\n</ion-item>\n\n  </ion-list> -->\n<!-- <div class=\"message my-msg\" >\n\n  <h4>{{tem.name}}</h4>\n  <p>{{tem.userID}}</p>\n  <p>blah blah text ... </p>\n  <p>{{tem.message}}</p>\n  <div class=\"time\" text-right>\n    <br>\n    {{tem.time | date : 'short'}}\n  </div>\n</div> -->\n<ion-grid ><!-- *ngIf=\"afAuth.auth.currentUser\" -->\n  <ion-row ><!-- *ngFor=\"let tem of temp | async\" -->\n    <ion-col size=\"9\" class=\"message other-msg\" ><!-- *ngIf=\"tem.userID !== afAuth.auth.currentUser.uid\" -->\n        <!-- <h4><strong>{{tem.name}}</strong></h4>\n        <p><strong>{{tem.userID}}</strong></p> -->\n        \n        <p>tem.message</p> <!-- <p>tem.message</p> -->\n        <div class=\"time\" text-right>\n          <br>\n          <!-- {{tem.time | date : 'short'}} -->time | date : 'short'\n        </div>\n      </ion-col>\n\n      <ion-col offset=\"3\" size=\"9\" class=\"message my-msg\" ><!-- *ngIf=\"tem.userID === afAuth.auth.currentUser.uid\" -->\n        <!-- <h4><strong>{{tem.name}}</strong></h4>\n        <p><strong>{{tem.userID}}</strong></p> -->\n        <p>blah blah text ... </p>\n        <div class=\"time\" text-right>\n          <br>\n          <!-- {{tem.time | date : 'short'}} -->time | date : 'short'\n        </div>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer style=\"position: fixed;bottom: 0; left: 0; right: 0; height: 90px\">\n  <ion-toolbar color=\"light\">\n    <ion-row>\n        <ion-col size=\"2\" >\n            <ion-icon name=\"happy\" (click)=\"sendEmj()\"></ion-icon>\n          </ion-col>\n        \n      <ion-col size=\"8\">\n       \n        <ion-textarea autosize maxRows=\"3\"  >\n\n        </ion-textarea>\n      </ion-col>\n      <ion-col size=\"2\" >\n          <ion-icon name=\"send\" color=\"primary\" (click)=\"sendMsg()\" ></ion-icon>\n          \n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_text_text_module_ts-es5.js.map