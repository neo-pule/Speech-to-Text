(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkionic_app_base"] = self["webpackChunkionic_app_base"] || []).push([["src_app_profile_profile_module_ts"], {
    /***/
    75434:
    /*!***************************************************!*\
      !*** ./src/app/profile/profile-routing.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfilePageRoutingModule": function ProfilePageRoutingModule() {
          return (
            /* binding */
            _ProfilePageRoutingModule
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


      var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./profile.page */
      29755);

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
      }];

      var _ProfilePageRoutingModule = function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      };

      _ProfilePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ProfilePageRoutingModule);
      /***/
    },

    /***/
    47350:
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfilePageModule": function ProfilePageModule() {
          return (
            /* binding */
            _ProfilePageModule
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


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./profile-routing.module */
      75434);
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./profile.page */
      29755);

      var _ProfilePageModule = function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      };

      _ProfilePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
      })], _ProfilePageModule);
      /***/
    },

    /***/
    29755:
    /*!*****************************************!*\
      !*** ./src/app/profile/profile.page.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfilePage": function ProfilePage() {
          return (
            /* binding */
            _ProfilePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./profile.page.html */
      52907);
      /* harmony import */


      var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./profile.page.scss */
      70231);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      29535);

      var _ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(route) {
          _classCallCheck(this, ProfilePage);

          this.route = route;
        }

        _createClass(ProfilePage, [{
          key: "run",
          value: function run() {
            this.route.navigateByUrl('tabs/update-profile');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProfilePage;
      }();

      _ProfilePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }];
      };

      _ProfilePage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProfilePage);
      /***/
    },

    /***/
    70231:
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.page.scss ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".main {\n  display: grid;\n  grid-template-rows: 10%;\n  height: 100%;\n}\n.main .top {\n  width: 100%;\n  box-shadow: 1px;\n  background-color: #940a0a;\n}\n.main .top h2 {\n  text-align: center;\n  color: white;\n}\n:root .profile {\n  height: 100%;\n  width: 100%;\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75);\n}\nion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\n.profile-image img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.input {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n.profile-image img {\n  height: 160px;\n  width: 160px;\n  border-radius: 50%;\n  border: 4px solid rgba(255, 255, 255, 0.4);\n  box-shadow: 0px 0px 142px -37px rgba(0, 0, 0, 0.75);\n}\n.image-upload > input {\n  display: none;\n}\n.input {\n  font-size: 50px;\n}\nion-spinner {\n  display: block;\n  margin: auto;\n  top: -107px;\n  width: 50px;\n  height: 50px;\n}\n#btn {\n  background-color: #940a0a;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQUk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBRVI7QUFEUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQUdaO0FBR0k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUdBLG1EQUFBO0FBQVI7QUFJQTtFQUNJLHlCQUFBO0VBQ0Esd0NBQUE7QUFESjtBQUlBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUlBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUtJO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0VBR0EsbURBQUE7QUFGUjtBQVVBO0VBQ0ksYUFBQTtBQVBKO0FBVUE7RUFDSSxlQUFBO0FBUEo7QUFVQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBUEo7QUFVQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQVBKIiwiZmlsZSI6InByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC50b3Age1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm94LXNoYWRvdzogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTQwYTBhO1xuICAgICAgICBoMiB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbjpyb290IHtcbiAgICAucHJvZmlsZSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTQycHggLTM3cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgIH1cbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLnByb2ZpbGUtaW1hZ2UgaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5pbnB1dCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4ucHJvZmlsZS1pbWFnZSB7XG4gICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAxNjBweDtcbiAgICAgICAgd2lkdGg6IDE2MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogNHB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE0MnB4IC0zN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNDJweCAtMzdweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDE0MnB4IC0zN3B4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgfVxufVxuXG4vLyAuaW1hZ2UtdXBsb2FkIHtcbi8vICAgICBtYXJnaW4tdG9wOiA3MHB4O1xuLy8gICAgIHRvcDogMTgwcHg7XG4vLyB9XG4uaW1hZ2UtdXBsb2FkPmlucHV0IHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbn1cblxuaW9uLXNwaW5uZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0b3A6IC0xMDdweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG5cbiNidG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NDBhMGE7XG4gICAgY29sb3I6IHdoaXRlO1xufSJdfQ== */";
      /***/
    },

    /***/
    52907:
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-list > <!-- *ngIf=\"afAuth.auth.currentUser; else logOut\" -->\n   <ion-list-header>\n     <ion-label>Support</ion-label>\n   </ion-list-header>\n\n   <ion-item-sliding>\n     <ion-item button (click)=\"run()\">\n       <ion-label>\n         Profile\n       </ion-label>\n     </ion-item>\n     <!-- <ion-item-options side=\"end\">\n       <ion-item-option >Update Profile</ion-item-option>\n     </ion-item-options> -->\n   </ion-item-sliding>\n\n   <ion-item-sliding>\n     <ion-item button >\n       <ion-label>\n        Overview of App\n       </ion-label>\n     </ion-item>\n     \n     <ion-item-options side=\"end\">\n       <ion-item-option (click)=\"run()\">Update Profile</ion-item-option>\n     </ion-item-options>\n   </ion-item-sliding>\n\n   <ion-item-sliding>\n     <ion-item button >\n       <ion-label>Privacy Policy</ion-label>\n     </ion-item>\n     <ion-item-options side=\"end\">\n       <ion-item-option (click)=\"unread(item)\">Unread</ion-item-option>\n     </ion-item-options>\n   </ion-item-sliding>\n   \n   <ion-item-sliding>\n     <ion-item  (click)=\"signOut()\">\n       <ion-label>Sign Out</ion-label>\n     </ion-item>\n\n   </ion-item-sliding>\n   </ion-list>\n\n   <!-- <ng-template #logOut >\n     <img src=\"../../../assets//default-profile.gif\" style=\"height: 90%;\">\n     <p><a (click)=\"runs()\">Log in </a> to view Profile</p>\n   </ng-template> -->\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_profile_profile_module_ts-es5.js.map