(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkionic_app_base"] = self["webpackChunkionic_app_base"] || []).push([["src_app_register_register_module_ts"], {
    /***/
    91654:
    /*!*****************************************************!*\
      !*** ./src/app/register/register-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterPageRoutingModule": function RegisterPageRoutingModule() {
          return (
            /* binding */
            _RegisterPageRoutingModule
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


      var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./register.page */
      52133);

      var routes = [{
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
      }];

      var _RegisterPageRoutingModule = function RegisterPageRoutingModule() {
        _classCallCheck(this, RegisterPageRoutingModule);
      };

      _RegisterPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _RegisterPageRoutingModule);
      /***/
    },

    /***/
    22474:
    /*!*********************************************!*\
      !*** ./src/app/register/register.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterPageModule": function RegisterPageModule() {
          return (
            /* binding */
            _RegisterPageModule
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


      var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./register-routing.module */
      91654);
      /* harmony import */


      var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./register.page */
      52133);

      var _RegisterPageModule = function RegisterPageModule() {
        _classCallCheck(this, RegisterPageModule);
      };

      _RegisterPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
      })], _RegisterPageModule);
      /***/
    },

    /***/
    52133:
    /*!*******************************************!*\
      !*** ./src/app/register/register.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterPage": function RegisterPage() {
          return (
            /* binding */
            _RegisterPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./register.page.html */
      29200);
      /* harmony import */


      var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./register.page.scss */
      69728);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      93324);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      29535);
      /* harmony import */


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../service/auth.service */
      54972);

      var _RegisterPage = /*#__PURE__*/function () {
        function RegisterPage(fb, auth, route) {
          _classCallCheck(this, RegisterPage);

          this.fb = fb;
          this.auth = auth;
          this.route = route;
          this.register1 = {
            Fname: '',
            Lname: '',
            email: '',
            phone: 0,
            address: '',
            password: ''
          };
        }

        _createClass(RegisterPage, [{
          key: "run",
          value: function run() {
            // console.log(this.register1);
            // this.signUp();
            this.route.navigateByUrl('tabs/chats');
          }
        }, {
          key: "signUp",
          value: function signUp() {
            this.auth.signUp(this.register1.email, this.register1.password);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {// this.register = this.fb.group({
            //   Fname: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30), Validators.required])],
            //   Lname: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30), Validators.required])],
            //   phone: ['', Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30),Validators.required])],
            //   address: ['', Validators.required],
            //   email: ['', Validators.compose([Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.required])],
            //    password: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(12), Validators.required])],
            //    cpassword: ['', Validators.required],
            // }, {
            //   //  validator: MustMatch('password', 'cpassword')
            // });
          }
        }, {
          key: "back",
          value: function back() {
            this.route.navigateByUrl('/login');
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(form) {
            console.log('Valid?', form.valid); // true or false

            console.log('Name', form.value.Fname);
            console.log('Name', form.value.Lname);
            console.log('Email', form.value.email);
            console.log('Name', form.value.phone);
            console.log('Name', form.value.address);
            console.log('Name', form.value.password);
          }
        }]);

        return RegisterPage;
      }();

      _RegisterPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder
        }, {
          type: _service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }];
      };

      _RegisterPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _RegisterPage);
      /***/
    },

    /***/
    69728:
    /*!*********************************************!*\
      !*** ./src/app/register/register.page.scss ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".main {\n  position: relative;\n  top: 5%;\n  padding: 0 10px 0 10px;\n}\n\n.header {\n  position: relative;\n  top: 15%;\n  text-align: center;\n}\n\n.body {\n  color: #497cda;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUFFO0VBRUUsY0FBQTtBQUVKIiwiZmlsZSI6InJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWlue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA1JTtcclxuICAgIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XHJcbiAgfVxyXG4gIC5oZWFkZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDE1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLmJvZHl7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2JhY2staW1nLnBuZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gICAgY29sb3I6IHJnYig3MywgMTI0LCAyMTgpO1xyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    29200:
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar >\r\n    <ion-icon name=\"arrow-back-outline\" (click)=\"back()\"></ion-icon>\r\n    <ion-title>Register</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!-- <h3 class=\"header\">Login </h3> -->\r\n  <div class=\"main\">\r\n    <ion-card>\r\n      <form [formGroup]=\"register\" >\r\n      <ion-item class=\"ion-activated\">\r\n        <ion-label position=\"floating\"> First Name </ion-label>\r\n        <ion-input [(ngModel)]=\"register1.Fname\" placeholder=\"Enter First Name\"></ion-input>\r\n      </ion-item>\r\n    \r\n      <ion-item >\r\n        <ion-label position=\"floating\"> Last Name </ion-label>\r\n        <ion-input [(ngModel)]=\"register1.Lname\" placeholder=\"Enter Last Name\"></ion-input>\r\n      </ion-item>\r\n    \r\n      <ion-item>\r\n        <ion-label position=\"floating\"> Email </ion-label>\r\n        <ion-input [(ngModel)]=\"register1.email\" placeholder=\"Enter Email\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item >\r\n        <ion-label position=\"floating\"> Contact Number</ion-label>\r\n        <ion-input [(ngModel)]=\"register1.phone\" placeholder=\"Enter Contact Number\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item >\r\n        <ion-label position=\"floating\"> Address </ion-label>\r\n        <ion-input [(ngModel)]=\"register1.address\" placeholder=\"Enter Address\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item >\r\n        <ion-label position=\"floating\"> Password </ion-label>\r\n        <ion-input [(ngModel)]=\"register1.password\" placeholder=\"Enter Password\" type=\"password\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item >\r\n        <ion-label position=\"floating\"> Confirm Password </ion-label>\r\n        <ion-input placeholder=\"Re-enter Password\" type=\"password\"></ion-input>\r\n      </ion-item>\r\n      </form>\r\n    </ion-card>\r\n    <br>\r\n    <ion-button expand=\"block\" fill=\"outline\" type=\"submit\" (click)=\"run()\">Sign Up</ion-button>\r\n    <p>Alreadyhave an account, click <a [routerLink]=\"['/login']\">here</a>.</p>\r\n  </div>\r\n\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_register_register_module_ts-es5.js.map