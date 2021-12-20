(self["webpackChunkionic_app_base"] = self["webpackChunkionic_app_base"] || []).push([["src_app_pages_update-profile_update-profile_module_ts"],{

/***/ 93186:
/*!***********************************************************************!*\
  !*** ./src/app/pages/update-profile/update-profile-routing.module.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateProfilePageRoutingModule": function() { return /* binding */ UpdateProfilePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _update_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-profile.page */ 43481);




const routes = [
    {
        path: '',
        component: _update_profile_page__WEBPACK_IMPORTED_MODULE_0__.UpdateProfilePage
    }
];
let UpdateProfilePageRoutingModule = class UpdateProfilePageRoutingModule {
};
UpdateProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UpdateProfilePageRoutingModule);



/***/ }),

/***/ 64003:
/*!***************************************************************!*\
  !*** ./src/app/pages/update-profile/update-profile.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateProfilePageModule": function() { return /* binding */ UpdateProfilePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 76820);
/* harmony import */ var _update_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-profile-routing.module */ 93186);
/* harmony import */ var _update_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-profile.page */ 43481);







let UpdateProfilePageModule = class UpdateProfilePageModule {
};
UpdateProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _update_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdateProfilePageRoutingModule
        ],
        declarations: [_update_profile_page__WEBPACK_IMPORTED_MODULE_1__.UpdateProfilePage]
    })
], UpdateProfilePageModule);



/***/ }),

/***/ 43481:
/*!*************************************************************!*\
  !*** ./src/app/pages/update-profile/update-profile.page.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateProfilePage": function() { return /* binding */ UpdateProfilePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_update_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./update-profile.page.html */ 93807);
/* harmony import */ var _update_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-profile.page.scss */ 82678);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 46683);






let UpdateProfilePage = class UpdateProfilePage {
    constructor(camera, route) {
        this.camera = camera;
        this.route = route;
    }
    pickImage() {
        console.log('***');
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then((imageData) => {
            console.log('start');
            console.log(imageData);
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            let base64Image = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
            // Handle error
            console.log('err');
        });
    }
    test() {
        console.log('***');
        this.route.navigateByUrl('tabs/profile');
    }
    ngOnInit() {
    }
};
UpdateProfilePage.ctorParameters = () => [
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
UpdateProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-update-profile',
        template: _raw_loader_update_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_update_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UpdateProfilePage);



/***/ }),

/***/ 82678:
/*!***************************************************************!*\
  !*** ./src/app/pages/update-profile/update-profile.page.scss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGRhdGUtcHJvZmlsZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 93807:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/update-profile/update-profile.page.html ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"padding\">Update Profile</ion-title>\n    <ion-icon name=\"arrow-back-outline\" (click)=\"test()\"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n                    <div class=\"middle\">\n                      <ion-list lines=\"none\">\n                          <br>\n                          <div>\n                              <div class=\"profile-image\">\n                                  <div>\n                                      <img src=\"/assets/img/avatar.svg\">\n                                  </div>\n                                  <div>\n                                      <!-- <img data-src=\"{{user.photoURL}}\" (click)=\"zoom(user)\"> -->\n                                      <!-- <div *ngIf=\"(uploadPercent | async ) >0 && (uploadPercent | async ) !=''\"> -->\n                                  </div>\n                                  <div class=\"image-upload\">\n                                      <ion-fab horizontal=\"center\" vertical=\"top\" class=\"fab\">\n                                          <ion-fab-button color=\"light\">\n                                              <ion-icon name=\"camera\" class=\"input\" color=\"medium\">\n                                              </ion-icon>\n                                          </ion-fab-button>\n                                          <ion-fab-list side=\"start\">\n                                              <ion-fab-button color=\"warning\">\n                                                  <ion-icon name=\"camera\" color=\"light\" (click)=\"pickImage()\" class=\"camera\">\n                                                  </ion-icon>\n                                              </ion-fab-button>\n                                          </ion-fab-list>\n                                          <ion-fab-list side=\"end\">\n                                              <ion-fab-button color=\"warning\">\n                                                  <label for=\"file-input1\">\n                                                   <ion-icon name=\"document\" color=\"light\" class=\"document\" >\n                                                <input style=\"display: none\" type=\"file\" (change)=\"upload($event)\" #fileInput>\n                                               </ion-icon> \n                                                                      </label>\n                                              </ion-fab-button>\n                                          </ion-fab-list>\n                                      </ion-fab>\n                                      <input id=\"file-input1\" class=\"input\" type=\"file\" (change)=\"uploadProfilePic($event)\" />\n                                  </div>\n                              </div>\n                              <div class=\"spinner\">\n                                  <ion-spinner name=\"crescent\" color=\"success\"></ion-spinner>\n                              </div>\n                              <br>\n                              <ion-list >  <!--  *ngFor = \"let user_info of UserInfo\" -->\n                                  <ion-item>\n                                      <ion-label>Persona Details</ion-label>\n                                  </ion-item>\n                                  <ion-item>\n                                      <ion-label>User Name: </ion-label>\n                                      <ion-icon name=\"person\" slot=\"start\"></ion-icon>\n                                      <ion-icon name=\"create\" slot=\"end\"></ion-icon>\n                                  </ion-item>\n                                  <ion-item>\n                                      <ion-label>Location:</ion-label>\n                                      <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n                                      <ion-icon name=\"create\" slot=\"end\"></ion-icon>\n                                  </ion-item>\n                                  <ion-item>\n                                      <ion-label>Email: </ion-label>\n                                      <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n                                  </ion-item>\n                                  <ion-item>\n                                      <ion-label>Phone Number: </ion-label>\n                                      <ion-icon ios=\"ios-phone-portrait\" md=\"md-phone-portrait\" slot=\"start\"></ion-icon>\n                                      <ion-icon name=\"create\" slot=\"end\"></ion-icon>\n                                  </ion-item>\n                              </ion-list>\n                              <ion-button expand=\"block\" fill=\"outline\" id=\"btn\"> Log Out</ion-button>\n                          </div>\n                      </ion-list>\n                  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_update-profile_update-profile_module_ts-es2015.js.map