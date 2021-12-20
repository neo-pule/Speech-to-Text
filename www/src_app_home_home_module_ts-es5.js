(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkionic_app_base"] = self["webpackChunkionic_app_base"] || []).push([["src_app_home_home_module_ts"], {
    /***/
    65089:
    /*!*********************************************!*\
      !*** ./src/app/home/home-routing.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePageRoutingModule": function HomePageRoutingModule() {
          return (
            /* binding */
            _HomePageRoutingModule
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


      var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home.page */
      19460);

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
      }];

      var _HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      _HomePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _HomePageRoutingModule);
      /***/
    },

    /***/
    82711:
    /*!*************************************!*\
      !*** ./src/app/home/home.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePageModule": function HomePageModule() {
          return (
            /* binding */
            _HomePageModule
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      76820);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      93324);
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home.page */
      19460);
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home-routing.module */
      65089);

      var _HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      _HomePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
      })], _HomePageModule);
      /***/
    },

    /***/
    19460:
    /*!***********************************!*\
      !*** ./src/app/home/home.page.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePage": function HomePage() {
          return (
            /* binding */
            _HomePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      61855);
      /* harmony import */


      var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./home.page.html */
      49764);
      /* harmony import */


      var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home.page.scss */
      2610);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      42741);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      29535);

      ;

      var _HomePage = /*#__PURE__*/function () {
        function HomePage(route) {
          _classCallCheck(this, HomePage);

          this.route = route;
          var obj; // const collections = collection(firestore, 'save');
          // obj = collectionData(collections).subscribe((res) =>{
          //   console.log(res)
          // });
          // console.log(obj)
        }

        _createClass(HomePage, [{
          key: "login",
          value: function login() {
            console.log('***');
            this.route.navigateByUrl('login');
          }
        }]);

        return HomePage;
      }();

      _HomePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
        }];
      };

      _HomePage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _HomePage);
      /***/
    },

    /***/
    2610:
    /*!*************************************!*\
      !*** ./src/app/home/home.page.scss ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/* Without setting height the slides will take up the height of the slide's content */\nion-slides {\n  height: 100%;\n}\n.body {\n  position: relative;\n  width: 100%;\n}\n.header {\n  position: absolute;\n  background-color: gray;\n  right: 1rem;\n  z-index: 10;\n}\n.slide-item {\n  --background: url('splash.gif') 0 0/100% 100% no-repeat;\n  height: 100%;\n  width: 190%;\n}\n.slide-item1 {\n  --background: url('splash1.gif') 0 0/100% 100% no-repeat;\n  height: 100%;\n  width: 190%;\n}\n.slide-item2 {\n  --background: url('sign-back.png') 0 0/100% 100% no-repeat;\n  height: 100%;\n  width: 190%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFGQUFBO0FBQ0E7RUFDRSxZQUFBO0FBQ0Y7QUFDQTtFQUVFLGtCQUFBO0VBRUEsV0FBQTtBQUFGO0FBRUE7RUFDRSxrQkFBQTtFQUdBLHNCQUFBO0VBRUEsV0FBQTtFQUNBLFdBQUE7QUFGRjtBQU1BO0VBQ0UsdURBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUhGO0FBS0E7RUFDRSx3REFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBRkY7QUFJQTtFQUNFLDBEQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFERiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFdpdGhvdXQgc2V0dGluZyBoZWlnaHQgdGhlIHNsaWRlcyB3aWxsIHRha2UgdXAgdGhlIGhlaWdodCBvZiB0aGUgc2xpZGUncyBjb250ZW50ICovXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmJvZHl7XG4gIC8vIGJhY2tncm91bmQ6IGdyYXk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy9ib3JkZXItcmFkaXVzOiAwIDIwJSAwIDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmhlYWRlcntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvL2NvbG9yOiBncmF5O1xuICAvL2JvcmRlci1yYWRpdXM6IDAgMCAwIDIwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgLy8gdG9wOiA4cHg7XG4gIHJpZ2h0OiAxcmVtO1xuICB6LWluZGV4OiAxMDtcbi8vIHJpZ2h0OiAwO1xuLy8gcGFkZGluZzogMnB4IDVweCAycHggNXB4O1xufVxuLnNsaWRlLWl0ZW17XG4gIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvc3BsYXNoLmdpZicpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxOTAlO1xufVxuLnNsaWRlLWl0ZW0xe1xuICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL3NwbGFzaDEuZ2lmJykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDE5MCU7XG59XG4uc2xpZGUtaXRlbTJ7XG4gIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvc2lnbi1iYWNrLnBuZycpIDAgMC8xMDAlIDEwMCUgbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxOTAlO1xufSJdfQ== */";
      /***/
    },

    /***/
    49764:
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\n  <!-- <span class=\"header\" (click)=\"login()\">Skip</span> -->\n  <div class=\"header\" (click)=\"login()\">Skip</div>\n  <ion-slides pager=\"true\" [options]=\"slideOpts\" class=\"body\">\n    \n    <ion-slide>\n    <ion-card class=\"slide-item\">\n    </ion-card>\n    </ion-slide>\n    <ion-slide>\n      <ion-card class=\"slide-item1\">\n        <p>...</p>\n      </ion-card>\n    </ion-slide>\n    <ion-slide>\n      <ion-card class=\"slide-item2\">\n        <p>...</p>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_home_home_module_ts-es5.js.map