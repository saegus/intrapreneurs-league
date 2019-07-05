(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/atoms/button/button.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/atoms/button/button.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button [ngClass]=\"{\n  'saegus-lp-button':true,\n  'saegus-lp-button--primary': class == 'primary',\n  'saegus-lp-button--secondary': class == 'secondary',\n  'saegus-lp-button--third': class == 'third'\n}\">\n  <ng-content></ng-content>\n</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/atoms/circle-img/circle-img.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/atoms/circle-img/circle-img.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div \n  class=\"saegus-lp-circle-img\" \n  [ngStyle]=\"{background: 'url('+ src + ')'}\"\n  >\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/layouts/jumbo-tile/jumbo-tile.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/layouts/jumbo-tile/jumbo-tile.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"saegus-lp-jumbo-tile\">\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/layouts/layout/layout.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/layouts/layout/layout.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  [ngClass]=\"{\n    'saegus-lp-layout': true,\n    'saegus-lp-layout--primary': class == 'primary',\n    'saegus-lp-layout--secondary': class == 'secondary',\n    'saegus-lp-layout--third': class == 'third'\n  }\">\n  <div class=\"saegus-lp-layout-container\">\n    <ng-content></ng-content>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/layouts/tile/tile.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/layouts/tile/tile.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  [ngClass]=\"{\n    'saegus-lp-tile--timeline-left': class[1] == 'timeline-left',\n    'saegus-lp-tile--timeline-right': class[1] == 'timeline-right',\n    'saegus-lp-tile': true,\n    'saegus-lp-tile--primary': class[0] == 'primary',\n    'saegus-lp-tile--secondary': class[0] =='secondary',\n    'saegus-lp-tile--third': class[0] == 'third'\n    }\"\n  >\n  <ng-content></ng-content>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/organisms/tile-image/tile-image.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/organisms/tile-image/tile-image.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"saegus-lp-tile-image\">\n  <app-tile [class]=\"class\">\n    <app-circle-img [src]=\"src\"></app-circle-img>\n    <div class=\"col-12 saegus-app-text-justify-center\">\n      <ng-content></ng-content>\n    </div>\n  </app-tile>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/organisms/timeline/timeline.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/organisms/timeline/timeline.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"saegus-app-container saegus-app-container-row col-12 saegus-app-container-align-items-center saegus-timeline\"\n  *ngFor=\"let p of elements; let i = index\">\n  <div \n    [ngClass]=\"{\n      'col-6': true,\n      'saegus-lp-timeline-left': true,\n      'saegus-app-container-column': true,\n      'saegus-app-container-align-items-center': true,\n      'saegus-app-container': true\n    }\">\n    <div class=\"col-6\">\n      <app-tile [class]=\"[point.displayAs, 'timeline-left']\" *ngFor=\"let point of p.left; let j = index\">\n        <div class=\"col-12 saegus-app-text-justify-center saegus-app-container-justify-center\">\n          <h3 class=\"saegus-lp-body--contrast\"> {{ point.title }} </h3>\n          <img class=\"saegus-lp-tile-logo\" [src]=\"point.logo\" *ngIf=\"point.logo\" />\n          <ol *ngIf=\"point.type == 'list'\">\n            <li *ngFor=\"let x of point.values; let k = index\">\n              {{ x }}\n            </li>\n          </ol>\n        </div>\n      </app-tile>\n    </div>\n  </div>\n  <div \n    [ngClass]=\"{\n    'col-6': true,\n    'saegus-lp-timeline-right': true,\n    'saegus-app-container-column': true,\n    'saegus-app-container-align-items-center': true,\n    'saegus-app-container': true\n    }\">\n    <div class=\"col-6\">\n      <app-tile \n        [class]=\"[point.displayAs, 'timeline-right']\"\n        *ngFor=\"let point of p.right; let l = index\">\n        <div class=\"col-12 saegus-app-text-justify-center saegus-app-container-justify-center\">\n          <h3 class=\"saegus-lp-body--contrast\"> {{ point.title }} </h3>\n          <img class=\"saegus-lp-tile-logo\" [src]=\"point.logo\" *ngIf=\"point.logo\" />\n          <ol *ngIf=\"point.type == 'list'\">\n            <li *ngFor=\"let x of point.values; let m = index\">\n              {{ x }}\n            </li>\n          </ol>\n        </div>\n      </app-tile>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/home/home.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"saegus-lp-container\">\n  <app-layout [class]=\"'primary'\">\n    <div class=\"saegus-lp-header-logo saegus-app-container saegus-app-container-row col-12 saegus-app-justify-start\">\n      <div class=\"saegus-lp-header-logo--container\">\n        <div class=\"saegus-lp-svg\" aria-label=\"il-logo\" [inlineSVG]=\"'/assets/images/IL-BLANC.svg'\"></div>\n        <div class=\"saegus-lp-sm-spacer\"></div>\n        <i class=\"saegus-lp-body--contrast\">Lorem ipsum pour baseline</i>\n      </div>\n    </div>\n    <div class=\"saegus-lp-lg-spacer\"></div>\n    <div class=\"saegus-app-container saegus-app-container-row col-12\">\n      <div class=\"saegus-lp-body saegus-lp-body--contrast col-6 saegus-app-padding\">\n        <h2>\n          Donnez vie à vos idées innovantes<br/>en moins de 3 mois\n        </h2>\n        <p>Notre promesse ? Donner aux intrapreneurs les moyens de concrétiser rapidement leurs idées.</p>\n        <div class=\"saegus-lp-md-spacer\"></div>\n        <div class=\"\">\n          <app-button [class]=\"'secondary'\">\n            Contactez un coach\n          </app-button>\n        </div>\n\n      </div>\n      <div class=\"saegus-lp-body saegus-lp-body--contrast col-6 saegus-app-padding saegus-lp-no-padding\">\n        <div class=\"saegus-lp-svg\" aria-label=\"il-logo\" [inlineSVG]=\"'/assets/images/illustration_1.svg'\"></div>\n      </div>\n    </div>\n  </app-layout>\n  <app-layout [class]=\"'secondary'\">\n    <div class=\"saegus-app-container saegus-app-container-row\">\n      <div class=\"saegus-lp-body col-6 saegus-app-padding\">\n        <h2>\n          Tout le monde peut devenir <br /> un intrapreneur.\n        </h2>\n        <span>\n          <p>\n            C’est au travers de nos propres expériences intrapreneuriales que nous nous sommes forgés cette conviction :\n            qui\n            mieux que les personnes qui vivent et côtoient les problèmes pour les résoudre ?\n          </p>\n          <p>\n            Bien que porteurs de vision, les intrapreneurs ont besoin d’aide dans leur exécution, aussi bien en termes de\n            méthodologie que d’outillage : c’est pour cela que nous avons créé l’Intrapreneurs League.\n          </p>\n        </span>\n      </div>\n      <div class=\"saegus-lp-body col-6 saegus-app-padding\">\n        <h2>\n          L’Intrapreneurs League,<br />c’est quoi ?\n        </h2>\n        <span>\n          <p>\n            C’est une équipe de coachs, qui a développé une méthode – l’Intracubation© - destinée à cadencer, accélérer\n            et outiller toutes les phases de conception de nouveaux produits & services par vos intrapreneurs : de\n            l’idéation au passage à l’échelle, en passant par la priorisation et le co-financement des initiatives.\n          </p>\n        </span>\n      </div>\n    </div>\n  </app-layout>\n  <app-layout [class]=\"'third'\">\n    <div class=\"saegus-app-container saegus-app-container-column\">\n      <h2 class=\"saegus-app-text-justify-center col-12\">\n        Nous l’avons vécu … et nous l’avons résolu\n      </h2>\n      <div\n        class=\"saegus-app-container saegus-app-container-row col-12 saegus-app-container-justify-center saegus-lp-testimonials\">\n          <div \n            class=\"col-4 saegus-app-container\" \n            *ngFor=\"let testimonial of testimonials\">\n            <app-tile\n              [class]=\"['secondary']\"\n            >\n              <div class=\"col-12 saegus-app-text-justify-center\">\n                <div class=\"saegus-lp-testimonials-container\">\n                  <div class=\"saegus-lp-svg saegus-lp-testimonials--quote\" aria-label=\"il-logo\" [inlineSVG]=\"'/assets/images/quote.svg'\"></div>\n                  <p>{{ testimonial.value }}</p>\n                  <div class=\"saegus-lp-svg saegus-lp-testimonials--quote\" aria-label=\"il-logo\" [inlineSVG]=\"'/assets/images/quote.svg'\"></div>\n                </div>\n              </div>\n            </app-tile>\n          </div>\n      </div>\n    </div>\n  </app-layout>\n\n  <app-layout [class]=\"'secondary'\">\n    <div class=\"saegus-app-container saegus-app-container-column\">\n      <h2 class=\"saegus-app-text-justify-center col-12 saegus-lp-title-spacing\">\n        Testez notre démarche !<br />\n        Une heure de coaching gratuite avec un membre de notre équipe\n      </h2>\n      <div\n        class=\"saegus-app-container saegus-app-container-row col-12 saegus-app-text-justify-center\">\n        <app-tile-image class=\"['secondary']\" src=\"'/assets/images/IMG_4892.JPG'\">\n          <p>\n            Préparer un pitch, comprendre sa cible et son marché, dynamiser l’idéation, concrétiser le résultat d’un\n            hackathon… Echangez avec Pierre, l’un de nos coachs Intracubation© !\n            <br /><br />\n            Une heure de coaching pour repartir avec quelques tips qui vont aideront à accélérer vos projets.\n            L’occasion de nous rencontrer et de découvrir notre démarche Intrapreneurs League.\n          </p>\n        </app-tile-image>\n      </div>\n\n      <div class=\"saegus-lp-lg-spacer\"></div>\n\n      <h2 class=\"saegus-app-text-justify-center col-12\">\n        Une démarche créée sur-mesure pour accélérer <br/> votre projet intrapreneurial\n      </h2>\n      <div class=\"saegus-lp-md-spacer\"></div>\n\n      <app-timeline [elements]=\"timeline\"></app-timeline>\n      <div class=\"saegus-lp-md-spacer\"></div>\n      <div class=\"saegus-app-container col-12 saegus-app-container-justify-center\">\n        <app-button [class]=\"'primary'\">\n           Prendre rendez-vous 🚀\n        </app-button>\n      </div>\n    </div>\n  </app-layout>\n\n   <app-layout [class]=\"'third'\">\n    <div class=\"saegus-app-container saegus-app-container-column col-12 saegus-app-container-align-items-center\">\n      <div class=\"col-10\">\n        <app-jumbo-tile>\n          <div class=\"saegus-app-container saegus-app-container-column\">\n            <h2 class=\"saegus-app-text-justify-center col-12\">Qui sommes nous ?<br /> 👀</h2>\n            <div class=\"col-12 saegus-app-container saegus-app-container-row saegus-app-container-align-items-center\">\n              <div class=\"col-3\">\n                <h4>Notre passion</h4>\n              </div>\n              <div class=\"col-9\">\n                <p> Nous sommes des coachs, des intrapreneurs, des experts de l’Agile, du Design Thinking ou encore du\n                  Lean Start-up, capables de choisir pour chaque contexte la meilleure méthodologie et les bons outils.\n                </p>\n              </div>\n            </div>\n            <div class=\"saegus-lp-sm-spacer\"></div>\n            <div class=\"col-12 saegus-app-container saegus-app-container-row saegus-app-container-align-items-center\">\n              <div class=\"col-3\">\n                <h4>Notre team</h4>\n              </div>\n              <div\n                class=\"col-9 saegus-app-container saegus-app-container-row saegus-app-container-justify-space-around saegus-lp-who-are-we\">\n                <div class=\"saegus-app-container saegus-app-container-column saegus-app-container-align-items-center\">\n                  <app-circle-img [src]=\"'/assets/images/IMG_4892.JPG'\"></app-circle-img>\n                  <span class=\"image-caption\">Pierre</span>\n                </div>\n                <div class=\"saegus-app-container saegus-app-container-column saegus-app-container-align-items-center\">\n                  <app-circle-img [src]=\"'/assets/images/IMG_4853.JPG'\"></app-circle-img>\n                  <span class=\"image-caption\">Hadi</span>\n                </div>\n                <div class=\"saegus-app-container saegus-app-container-column saegus-app-container-align-items-center\">\n                  <app-circle-img [src]=\"'/assets/images/IMG_3532.JPG'\"></app-circle-img>\n                  <span class=\"image-caption\">Chloé</span>\n                </div>\n              </div>\n            </div>\n            <div class=\"saegus-lp-sm-spacer\"></div>\n            <div class=\"col-12  saegus-app-container saegus-app-container-row saegus-app-container-align-items-center\">\n              <div class=\"col-3\">\n                <h4>Nos clients</h4>\n              </div>\n              <div class=\"col-9 saegus-app-container saegus-app-container-row saegus-app-container-justify-space-around saegus-app-container-align-items-center saegus-lp-row-to-column-mobile\">\n                <img src=\"/assets/images/loreal.png\"/>\n                <img src=\"/assets/images/orange.png\"/>\n                <img src=\"/assets/images/thales.png\"/>\n              </div>\n            </div>\n\n          </div>\n        </app-jumbo-tile>\n      </div>\n      \n    </div>\n   </app-layout>\n\n   <app-layout [class]=\"'primary'\">\n    <div class=\"saegus-app-container saegus-app-container-column saegus-app-container-align-items-center col-12 saegus-lp-body--contrast\">\n      <div class=\"col-2\">\n        <div class=\"saegus-lp-svg\" aria-label=\"il-logo\" [inlineSVG]=\"'/assets/images/IL-BLANC.svg'\"></div>\n      </div>\n      <h3>Où nous trouver ?</h3>\n      <small>19, avenue Georges V, 75008 PARIS</small>\n      <div class=\"saegus-lp-sm-spacer\"></div>\n      <app-button [class]=\"'secondary'\">\n        Contactez-nous !\n      </app-button>\n    </div>\n   </app-layout>\n\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");




const routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'saegus-intracubation';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-inline-svg */ "./node_modules/ng-inline-svg/lib/index.js");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_inline_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_layouts_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/layouts/layout/layout.component */ "./src/app/components/layouts/layout/layout.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _components_layouts_tile_tile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/layouts/tile/tile.component */ "./src/app/components/layouts/tile/tile.component.ts");
/* harmony import */ var _components_organisms_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/organisms/timeline/timeline.component */ "./src/app/components/organisms/timeline/timeline.component.ts");
/* harmony import */ var _components_atoms_circle_img_circle_img_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/atoms/circle-img/circle-img.component */ "./src/app/components/atoms/circle-img/circle-img.component.ts");
/* harmony import */ var _components_organisms_tile_image_tile_image_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/organisms/tile-image/tile-image.component */ "./src/app/components/organisms/tile-image/tile-image.component.ts");
/* harmony import */ var _components_layouts_jumbo_tile_jumbo_tile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/layouts/jumbo-tile/jumbo-tile.component */ "./src/app/components/layouts/jumbo-tile/jumbo-tile.component.ts");
/* harmony import */ var _components_atoms_button_button_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/atoms/button/button.component */ "./src/app/components/atoms/button/button.component.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _components_layouts_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"],
            _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _components_layouts_tile_tile_component__WEBPACK_IMPORTED_MODULE_9__["TileComponent"],
            _components_organisms_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_10__["TimelineComponent"],
            _components_atoms_circle_img_circle_img_component__WEBPACK_IMPORTED_MODULE_11__["CircleImgComponent"],
            _components_organisms_tile_image_tile_image_component__WEBPACK_IMPORTED_MODULE_12__["TileImageComponent"],
            _components_layouts_jumbo_tile_jumbo_tile_component__WEBPACK_IMPORTED_MODULE_13__["JumboTileComponent"],
            _components_atoms_button_button_component__WEBPACK_IMPORTED_MODULE_14__["ButtonComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            ng_inline_svg__WEBPACK_IMPORTED_MODULE_4__["InlineSVGModule"].forRoot()
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/atoms/button/button.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/atoms/button/button.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".saegus-lp-button {\n  font-family: \"Gilroy\";\n  font-weight: bold;\n  padding: 1em 2em;\n  border-radius: 3px;\n  border: none;\n  cursor: pointer;\n  font-size: 0.8em;\n}\n.saegus-lp-button--primary {\n  background-color: #182c41;\n  color: #FFF;\n}\n.saegus-lp-button--secondary {\n  background-color: #FAFAFA;\n  color: #192C41;\n}\n.saegus-lp-button--third {\n  background-color: #F2F2F2;\n  color: #192C41;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWJhc3RpZW5wZXJyb3QvRG9jdW1lbnRzL0RldmVsb3BtZW50L1NhZWd1cy9zYWVndXMtaW50cmFjdWJhdGlvbi9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL2F0b21zL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYXRvbXMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZWJhc3RpZW5wZXJyb3QvRG9jdW1lbnRzL0RldmVsb3BtZW50L1NhZWd1cy9zYWVndXMtaW50cmFjdWJhdGlvbi9jbGllbnQvc3JjL3Njc3MvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNERjtBREdFO0VBQ0UseUJFWGU7RUZZZixXRUpjO0FER2xCO0FER0U7RUFDRSx5QkVkaUI7RUZlakIsY0VUWTtBRFFoQjtBREdFO0VBQ0UseUJFakJhO0VGa0JiLGNFYlk7QURZaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2F0b21zL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9zY3NzL2NvbG9ycy5zY3NzJztcblxuLnNhZWd1cy1scC1idXR0b24ge1xuICBmb250LWZhbWlseTogJ0dpbHJveSc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxZW0gMmVtO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBcbiAgJi0tcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktYmctY29sb3I7XG4gICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gIH1cbiAgJi0tc2Vjb25kYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWJnLWNvbG9yO1xuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgfVxuICAmLS10aGlyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRoaXJkLWJnLWNvbG9yO1xuICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgfVxufSIsIi5zYWVndXMtbHAtYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IFwiR2lscm95XCI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxZW0gMmVtO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuLnNhZWd1cy1scC1idXR0b24tLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTgyYzQxO1xuICBjb2xvcjogI0ZGRjtcbn1cbi5zYWVndXMtbHAtYnV0dG9uLS1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xuICBjb2xvcjogIzE5MkM0MTtcbn1cbi5zYWVndXMtbHAtYnV0dG9uLS10aGlyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG4gIGNvbG9yOiAjMTkyQzQxO1xufSIsIi8vIGJhY2tncm91bmQgY29sb3JzXG4kcHJpbWFyeS1iZy1jb2xvcjogIzE4MmM0MTtcbiRzZWNvbmRhcnktYmctY29sb3I6ICNGQUZBRkE7XG4kdGhpcmQtYmctY29sb3I6ICNGMkYyRjI7XG4kZm91cnRoLWNvbG9yOiAjRkY3Mjg4O1xuXG5cbi8vIHRleHQtY29sb3IgLyBjb21tb24gY29sb3JzIFxuJHByaW1hcnktY29sb3I6ICMxOTJDNDE7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjRkZGO1xuJHRoaXJkLWNvbG9yOiAjRkY3Mjg4O1xuJGZvdXJ0aC1jb2xvcjogI0YyRjJGMjsiXX0= */"

/***/ }),

/***/ "./src/app/components/atoms/button/button.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/atoms/button/button.component.ts ***!
  \*************************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ButtonComponent = class ButtonComponent {
    constructor() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ButtonComponent.prototype, "class", void 0);
ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-button',
        template: __webpack_require__(/*! raw-loader!./button.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/atoms/button/button.component.html"),
        styles: [__webpack_require__(/*! ./button.component.scss */ "./src/app/components/atoms/button/button.component.scss")]
    })
], ButtonComponent);

;


/***/ }),

/***/ "./src/app/components/atoms/circle-img/circle-img.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/atoms/circle-img/circle-img.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".saegus-lp-circle-img {\n  background-position: center !important;\n  background-repeat: no-repeat !important;\n  background-size: cover !important;\n  width: 10em;\n  height: 10em;\n  border-radius: 100%;\n  border: solid 2px #FFF;\n  box-shadow: 2px 3px 6px 0px #b5b1b5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWJhc3RpZW5wZXJyb3QvRG9jdW1lbnRzL0RldmVsb3BtZW50L1NhZWd1cy9zYWVndXMtaW50cmFjdWJhdGlvbi9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL2F0b21zL2NpcmNsZS1pbWcvY2lyY2xlLWltZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hdG9tcy9jaXJjbGUtaW1nL2NpcmNsZS1pbWcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFHQSxtQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hdG9tcy9jaXJjbGUtaW1nL2NpcmNsZS1pbWcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2FlZ3VzLWxwLWNpcmNsZS1pbWcge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMGVtO1xuICBoZWlnaHQ6IDEwZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJvcmRlcjogc29saWQgMnB4ICNGRkY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDNweCA2cHggMHB4IHJnYmEoMTgxLCAxNzcsIDE4MSwgMSk7XG4gIC1tb3otYm94LXNoYWRvdzogMnB4IDNweCA2cHggMHB4IHJnYmEoMTgxLCAxNzcsIDE4MSwgMSk7XG4gIGJveC1zaGFkb3c6IDJweCAzcHggNnB4IDBweCByZ2JhKDE4MSwgMTc3LCAxODEsIDEpO1xufSIsIi5zYWVndXMtbHAtY2lyY2xlLWltZyB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwZW07XG4gIGhlaWdodDogMTBlbTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm9yZGVyOiBzb2xpZCAycHggI0ZGRjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggM3B4IDZweCAwcHggI2I1YjFiNTtcbiAgLW1vei1ib3gtc2hhZG93OiAycHggM3B4IDZweCAwcHggI2I1YjFiNTtcbiAgYm94LXNoYWRvdzogMnB4IDNweCA2cHggMHB4ICNiNWIxYjU7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/atoms/circle-img/circle-img.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/atoms/circle-img/circle-img.component.ts ***!
  \*********************************************************************/
/*! exports provided: CircleImgComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleImgComponent", function() { return CircleImgComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CircleImgComponent = class CircleImgComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CircleImgComponent.prototype, "src", void 0);
CircleImgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-circle-img',
        template: __webpack_require__(/*! raw-loader!./circle-img.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/atoms/circle-img/circle-img.component.html"),
        styles: [__webpack_require__(/*! ./circle-img.component.scss */ "./src/app/components/atoms/circle-img/circle-img.component.scss")]
    })
], CircleImgComponent);



/***/ }),

/***/ "./src/app/components/layouts/jumbo-tile/jumbo-tile.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/layouts/jumbo-tile/jumbo-tile.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".saegus-lp-jumbo-tile {\n  box-shadow: 2px 3px 6px 0px #b5b1b5;\n  background: #FFF;\n  padding: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWJhc3RpZW5wZXJyb3QvRG9jdW1lbnRzL0RldmVsb3BtZW50L1NhZWd1cy9zYWVndXMtaW50cmFjdWJhdGlvbi9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL2xheW91dHMvanVtYm8tdGlsZS9qdW1iby10aWxlLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlYmFzdGllbnBlcnJvdC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvU2FlZ3VzL3NhZWd1cy1pbnRyYWN1YmF0aW9uL2NsaWVudC9zcmMvc2Nzcy9jb2xvcnMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXRzL2p1bWJvLXRpbGUvanVtYm8tdGlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUdFLG1DQUFBO0VBRUEsZ0JDRWdCO0VERGhCLFlBQUE7QUVGRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0cy9qdW1iby10aWxlL2p1bWJvLXRpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9zY3NzL2NvbG9ycy5zY3NzJztcblxuLnNhZWd1cy1scC1qdW1iby10aWxlIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggM3B4IDZweCAwcHggcmdiYSgxODEsIDE3NywgMTgxLCAxKTtcbiAgLW1vei1ib3gtc2hhZG93OiAycHggM3B4IDZweCAwcHggcmdiYSgxODEsIDE3NywgMTgxLCAxKTtcbiAgYm94LXNoYWRvdzogMnB4IDNweCA2cHggMHB4IHJnYmEoMTgxLCAxNzcsIDE4MSwgMSk7XG5cbiAgYmFja2dyb3VuZDogJHNlY29uZGFyeS1jb2xvcjtcbiAgcGFkZGluZzogMmVtO1xufSIsIi8vIGJhY2tncm91bmQgY29sb3JzXG4kcHJpbWFyeS1iZy1jb2xvcjogIzE4MmM0MTtcbiRzZWNvbmRhcnktYmctY29sb3I6ICNGQUZBRkE7XG4kdGhpcmQtYmctY29sb3I6ICNGMkYyRjI7XG4kZm91cnRoLWNvbG9yOiAjRkY3Mjg4O1xuXG5cbi8vIHRleHQtY29sb3IgLyBjb21tb24gY29sb3JzIFxuJHByaW1hcnktY29sb3I6ICMxOTJDNDE7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjRkZGO1xuJHRoaXJkLWNvbG9yOiAjRkY3Mjg4O1xuJGZvdXJ0aC1jb2xvcjogI0YyRjJGMjsiLCIuc2FlZ3VzLWxwLWp1bWJvLXRpbGUge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAzcHggNnB4IDBweCAjYjViMWI1O1xuICAtbW96LWJveC1zaGFkb3c6IDJweCAzcHggNnB4IDBweCAjYjViMWI1O1xuICBib3gtc2hhZG93OiAycHggM3B4IDZweCAwcHggI2I1YjFiNTtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbiAgcGFkZGluZzogMmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/layouts/jumbo-tile/jumbo-tile.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/layouts/jumbo-tile/jumbo-tile.component.ts ***!
  \***********************************************************************/
/*! exports provided: JumboTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JumboTileComponent", function() { return JumboTileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let JumboTileComponent = class JumboTileComponent {
    constructor() { }
    ngOnInit() {
    }
};
JumboTileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-jumbo-tile',
        template: __webpack_require__(/*! raw-loader!./jumbo-tile.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/layouts/jumbo-tile/jumbo-tile.component.html"),
        styles: [__webpack_require__(/*! ./jumbo-tile.component.scss */ "./src/app/components/layouts/jumbo-tile/jumbo-tile.component.scss")]
    })
], JumboTileComponent);



/***/ }),

/***/ "./src/app/components/layouts/layout/layout.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/layouts/layout/layout.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".saegus-lp-layout {\n  width: 100%;\n  padding: 3em 8em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.saegus-lp-layout--primary {\n  background: #182c41;\n}\n.saegus-lp-layout--secondary {\n  background: #FAFAFA;\n}\n.saegus-lp-layout--third {\n  background: #F2F2F2;\n}\n.saegus-lp-layout-container {\n  max-width: 1140px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWJhc3RpZW5wZXJyb3QvRG9jdW1lbnRzL0RldmVsb3BtZW50L1NhZWd1cy9zYWVndXMtaW50cmFjdWJhdGlvbi9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL2xheW91dHMvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXRzL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2ViYXN0aWVucGVycm90L0RvY3VtZW50cy9EZXZlbG9wbWVudC9TYWVndXMvc2FlZ3VzLWludHJhY3ViYXRpb24vY2xpZW50L3NyYy9zY3NzL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0RGO0FERUU7RUFDRSxtQkVQZTtBRE9uQjtBREVFO0VBQ0UsbUJFVGlCO0FEU3JCO0FERUU7RUFDRSxtQkVYYTtBRFdqQjtBREVFO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xheW91dHMvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3Njc3MvY29sb3JzLnNjc3MnO1xuXG4uc2FlZ3VzLWxwLWxheW91dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAzZW0gOGVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgJi0tcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZDogJHByaW1hcnktYmctY29sb3I7XG4gIH1cbiAgJi0tc2Vjb25kYXJ5IHtcbiAgICBiYWNrZ3JvdW5kOiAkc2Vjb25kYXJ5LWJnLWNvbG9yO1xuICB9XG4gICYtLXRoaXJkIHtcbiAgICBiYWNrZ3JvdW5kOiAkdGhpcmQtYmctY29sb3I7XG4gIH1cbiAgJi1jb250YWluZXIge1xuICAgIG1heC13aWR0aDogMTE0MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cblxufSIsIi5zYWVndXMtbHAtbGF5b3V0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDNlbSA4ZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnNhZWd1cy1scC1sYXlvdXQtLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kOiAjMTgyYzQxO1xufVxuLnNhZWd1cy1scC1sYXlvdXQtLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQ6ICNGQUZBRkE7XG59XG4uc2FlZ3VzLWxwLWxheW91dC0tdGhpcmQge1xuICBiYWNrZ3JvdW5kOiAjRjJGMkYyO1xufVxuLnNhZWd1cy1scC1sYXlvdXQtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMTQwcHg7XG4gIHdpZHRoOiAxMDAlO1xufSIsIi8vIGJhY2tncm91bmQgY29sb3JzXG4kcHJpbWFyeS1iZy1jb2xvcjogIzE4MmM0MTtcbiRzZWNvbmRhcnktYmctY29sb3I6ICNGQUZBRkE7XG4kdGhpcmQtYmctY29sb3I6ICNGMkYyRjI7XG4kZm91cnRoLWNvbG9yOiAjRkY3Mjg4O1xuXG5cbi8vIHRleHQtY29sb3IgLyBjb21tb24gY29sb3JzIFxuJHByaW1hcnktY29sb3I6ICMxOTJDNDE7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjRkZGO1xuJHRoaXJkLWNvbG9yOiAjRkY3Mjg4O1xuJGZvdXJ0aC1jb2xvcjogI0YyRjJGMjsiXX0= */"

/***/ }),

/***/ "./src/app/components/layouts/layout/layout.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/layouts/layout/layout.component.ts ***!
  \***************************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LayoutComponent = class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LayoutComponent.prototype, "class", void 0);
LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout',
        template: __webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/layouts/layout/layout.component.html"),
        styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/components/layouts/layout/layout.component.scss")]
    })
], LayoutComponent);



/***/ }),

/***/ "./src/app/components/layouts/tile/tile.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/layouts/tile/tile.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".saegus-lp-tile {\n  box-shadow: 2px 3px 6px 0px #b5b1b5;\n  border-radius: 0.5em;\n  padding: 2em;\n}\n.saegus-lp-tile--primary {\n  background: #182c41;\n}\n.saegus-lp-tile--secondary {\n  background: #FAFAFA;\n}\n.saegus-lp-tile--third {\n  background: #F2F2F2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWJhc3RpZW5wZXJyb3QvRG9jdW1lbnRzL0RldmVsb3BtZW50L1NhZWd1cy9zYWVndXMtaW50cmFjdWJhdGlvbi9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL2xheW91dHMvdGlsZS90aWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xheW91dHMvdGlsZS90aWxlLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlYmFzdGllbnBlcnJvdC9Eb2N1bWVudHMvRGV2ZWxvcG1lbnQvU2FlZ3VzL3NhZWd1cy1pbnRyYWN1YmF0aW9uL2NsaWVudC9zcmMvc2Nzcy9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUdFLG1DQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FDREY7QURHRTtFQUNFLG1CRVRlO0FEUW5CO0FESUU7RUFDRSxtQkVaaUI7QURVckI7QURLRTtFQUNFLG1CRWZhO0FEWWpCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXRzL3RpbGUvdGlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3Njc3MvY29sb3JzLnNjc3MnO1xuXG4uc2FlZ3VzLWxwLXRpbGUge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAzcHggNnB4IDBweCByZ2JhKDE4MSwgMTc3LCAxODEsIDEpO1xuICAtbW96LWJveC1zaGFkb3c6IDJweCAzcHggNnB4IDBweCByZ2JhKDE4MSwgMTc3LCAxODEsIDEpO1xuICBib3gtc2hhZG93OiAycHggM3B4IDZweCAwcHggcmdiYSgxODEsIDE3NywgMTgxLCAxKTtcbiAgYm9yZGVyLXJhZGl1czogLjVlbTtcbiAgcGFkZGluZzogMmVtO1xuXG4gICYtLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LWJnLWNvbG9yO1xuICB9XG5cbiAgJi0tc2Vjb25kYXJ5IHtcbiAgICBiYWNrZ3JvdW5kOiAkc2Vjb25kYXJ5LWJnLWNvbG9yO1xuICB9XG5cbiAgJi0tdGhpcmQge1xuICAgIGJhY2tncm91bmQ6ICR0aGlyZC1iZy1jb2xvcjtcbiAgfVxufSIsIi5zYWVndXMtbHAtdGlsZSB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDNweCA2cHggMHB4ICNiNWIxYjU7XG4gIC1tb3otYm94LXNoYWRvdzogMnB4IDNweCA2cHggMHB4ICNiNWIxYjU7XG4gIGJveC1zaGFkb3c6IDJweCAzcHggNnB4IDBweCAjYjViMWI1O1xuICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgcGFkZGluZzogMmVtO1xufVxuLnNhZWd1cy1scC10aWxlLS1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogIzE4MmM0MTtcbn1cbi5zYWVndXMtbHAtdGlsZS0tc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZDogI0ZBRkFGQTtcbn1cbi5zYWVndXMtbHAtdGlsZS0tdGhpcmQge1xuICBiYWNrZ3JvdW5kOiAjRjJGMkYyO1xufSIsIi8vIGJhY2tncm91bmQgY29sb3JzXG4kcHJpbWFyeS1iZy1jb2xvcjogIzE4MmM0MTtcbiRzZWNvbmRhcnktYmctY29sb3I6ICNGQUZBRkE7XG4kdGhpcmQtYmctY29sb3I6ICNGMkYyRjI7XG4kZm91cnRoLWNvbG9yOiAjRkY3Mjg4O1xuXG5cbi8vIHRleHQtY29sb3IgLyBjb21tb24gY29sb3JzIFxuJHByaW1hcnktY29sb3I6ICMxOTJDNDE7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjRkZGO1xuJHRoaXJkLWNvbG9yOiAjRkY3Mjg4O1xuJGZvdXJ0aC1jb2xvcjogI0YyRjJGMjsiXX0= */"

/***/ }),

/***/ "./src/app/components/layouts/tile/tile.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/layouts/tile/tile.component.ts ***!
  \***********************************************************/
/*! exports provided: TileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileComponent", function() { return TileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TileComponent = class TileComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TileComponent.prototype, "class", void 0);
TileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tile',
        template: __webpack_require__(/*! raw-loader!./tile.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/layouts/tile/tile.component.html"),
        styles: [__webpack_require__(/*! ./tile.component.scss */ "./src/app/components/layouts/tile/tile.component.scss")]
    })
], TileComponent);



/***/ }),

/***/ "./src/app/components/organisms/tile-image/tile-image.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/organisms/tile-image/tile-image.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".saegus-lp-tile-image {\n  position: relative;\n}\n\n:host ::ng-deep .saegus-lp-circle-img {\n  position: absolute;\n  top: calc(50% - 5em);\n  left: 0;\n  box-shadow: 2px 3px 6px 0px #b5b1b5;\n}\n\n:host ::ng-deep .saegus-lp-tile {\n  margin-left: 5em;\n  padding-left: 8em;\n  padding-right: 8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWJhc3RpZW5wZXJyb3QvRG9jdW1lbnRzL0RldmVsb3BtZW50L1NhZWd1cy9zYWVndXMtaW50cmFjdWJhdGlvbi9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL29yZ2FuaXNtcy90aWxlLWltYWdlL3RpbGUtaW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvb3JnYW5pc21zL3RpbGUtaW1hZ2UvdGlsZS1pbWFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FESUU7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBRUEsT0FBQTtFQUdBLG1DQUFBO0FDRko7O0FESUU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JnYW5pc21zL3RpbGUtaW1hZ2UvdGlsZS1pbWFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zYWVndXMtbHAtdGlsZS1pbWFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuXG46aG9zdCA6Om5nLWRlZXAge1xuICAuc2FlZ3VzLWxwLWNpcmNsZS1pbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IGNhbGMoNTAlIC0gNWVtKTtcbiAgICAvLyBsZWZ0OiAtNGVtO1xuICAgIGxlZnQ6IDA7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggM3B4IDZweCAwcHggcmdiYSgxODEsIDE3NywgMTgxLCAxKTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDJweCAzcHggNnB4IDBweCByZ2JhKDE4MSwgMTc3LCAxODEsIDEpO1xuICAgIGJveC1zaGFkb3c6IDJweCAzcHggNnB4IDBweCByZ2JhKDE4MSwgMTc3LCAxODEsIDEpO1xuICB9XG4gIC5zYWVndXMtbHAtdGlsZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDVlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDhlbSA7XG4gICAgcGFkZGluZy1yaWdodDogOGVtIDtcbiAgfVxufSIsIi5zYWVndXMtbHAtdGlsZS1pbWFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5zYWVndXMtbHAtY2lyY2xlLWltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKDUwJSAtIDVlbSk7XG4gIGxlZnQ6IDA7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDNweCA2cHggMHB4ICNiNWIxYjU7XG4gIC1tb3otYm94LXNoYWRvdzogMnB4IDNweCA2cHggMHB4ICNiNWIxYjU7XG4gIGJveC1zaGFkb3c6IDJweCAzcHggNnB4IDBweCAjYjViMWI1O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5zYWVndXMtbHAtdGlsZSB7XG4gIG1hcmdpbi1sZWZ0OiA1ZW07XG4gIHBhZGRpbmctbGVmdDogOGVtO1xuICBwYWRkaW5nLXJpZ2h0OiA4ZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/components/organisms/tile-image/tile-image.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/organisms/tile-image/tile-image.component.ts ***!
  \*************************************************************************/
/*! exports provided: TileImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileImageComponent", function() { return TileImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TileImageComponent = class TileImageComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TileImageComponent.prototype, "class", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TileImageComponent.prototype, "src", void 0);
TileImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tile-image',
        template: __webpack_require__(/*! raw-loader!./tile-image.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/organisms/tile-image/tile-image.component.html"),
        styles: [__webpack_require__(/*! ./tile-image.component.scss */ "./src/app/components/organisms/tile-image/tile-image.component.scss")]
    })
], TileImageComponent);



/***/ }),

/***/ "./src/app/components/organisms/timeline/timeline.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/organisms/timeline/timeline.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .saegus-lp-tile {\n  position: relative;\n  margin: 1em 0;\n  padding: 0.5em !important;\n}\n:host ::ng-deep .saegus-lp-tile .saegus-lp-tile-logo {\n  height: 3em;\n}\n:host ::ng-deep .saegus-lp-tile:before, :host ::ng-deep .saegus-lp-tile:after {\n  content: \"\";\n  position: absolute;\n}\n:host ::ng-deep .saegus-lp-tile--timeline-right:before {\n  width: 1em;\n  height: 1em;\n  background-color: #192C41;\n  border-radius: 100%;\n  top: 50%;\n  left: calc(-50% - .5em);\n}\n:host ::ng-deep .saegus-lp-tile--timeline-right:after {\n  width: 2em;\n  height: 3px;\n  border-top-right-radius: 2px;\n  border-bottom-right-radius: 2px;\n  background-color: #192C41;\n  top: calc(50% + 0.4em);\n  left: calc(-50% - .5em );\n}\n:host ::ng-deep .saegus-lp-tile--timeline-left:before {\n  width: 1em;\n  height: 1em;\n  background-color: #192C41;\n  border-radius: 100%;\n  top: 50%;\n  right: calc(-50% - .5em);\n}\n:host ::ng-deep .saegus-lp-tile--timeline-left:after {\n  width: 2em;\n  height: 3px;\n  border-top-right-radius: 2px;\n  border-bottom-right-radius: 2px;\n  background-color: #192C41;\n  top: calc(50% + 0.4em);\n  right: calc(-50% - .5em );\n}\n.saegus-timeline {\n  position: relative;\n}\n.saegus-timeline:after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  top: -20px;\n  bottom: -20px;\n  width: 1px;\n  border-left: dashed #192C41;\n  -webkit-transform: translateX(-2px);\n          transform: translateX(-2px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWJhc3RpZW5wZXJyb3QvRG9jdW1lbnRzL0RldmVsb3BtZW50L1NhZWd1cy9zYWVndXMtaW50cmFjdWJhdGlvbi9jbGllbnQvc3JjL2FwcC9jb21wb25lbnRzL29yZ2FuaXNtcy90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9vcmdhbmlzbXMvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2ViYXN0aWVucGVycm90L0RvY3VtZW50cy9EZXZlbG9wbWVudC9TYWVndXMvc2FlZ3VzLWludHJhY3ViYXRpb24vY2xpZW50L3NyYy9zY3NzL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBTUUsa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNORjtBREFFO0VBQ0UsV0FBQTtBQ0VKO0FES0U7RUFFRSxXQUFBO0VBQ0Esa0JBQUE7QUNKSjtBRE9FO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkViWTtFRmNaLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLHVCQUFBO0FDTEo7QURRRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLHlCRXhCWTtFRnlCWixzQkFBQTtFQUNBLHdCQUFBO0FDTko7QURRRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJFL0JZO0VGZ0NaLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLHdCQUFBO0FDTko7QURTRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLHlCRTFDWTtFRjJDWixzQkFBQTtFQUNBLHlCQUFBO0FDUEo7QURXQTtFQUNFLGtCQUFBO0FDUkY7QURVRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUNSSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JnYW5pc21zL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vc2Nzcy9jb2xvcnMuc2Nzcyc7XG5cbjpob3N0IDo6bmctZGVlcCAuc2FlZ3VzLWxwLXRpbGUge1xuXG4gIC5zYWVndXMtbHAtdGlsZS1sb2dvIHtcbiAgICBoZWlnaHQ6IDNlbTtcbiAgfVxuICBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDFlbSAwO1xuICBwYWRkaW5nOiAuNWVtICFpbXBvcnRhbnQ7XG5cbiAgJjpiZWZvcmUsXG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG5cbiAgJi0tdGltZWxpbmUtcmlnaHQ6YmVmb3JlIHtcbiAgICB3aWR0aDogMWVtO1xuICAgIGhlaWdodDogMWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogY2FsYygtNTAlIC0gLjVlbSk7XG4gIH1cblxuICAmLS10aW1lbGluZS1yaWdodDphZnRlciB7XG4gICAgd2lkdGg6IDJlbTtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgdG9wOiBjYWxjKDUwJSArIDAuNGVtKTtcbiAgICBsZWZ0OiBjYWxjKC01MCUgLSAuNWVtICk7XG4gIH1cbiAgJi0tdGltZWxpbmUtbGVmdDpiZWZvcmUge1xuICAgIHdpZHRoOiAxZW07XG4gICAgaGVpZ2h0OiAxZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB0b3A6IDUwJTtcbiAgICByaWdodDogY2FsYygtNTAlIC0gLjVlbSk7XG4gIH1cblxuICAmLS10aW1lbGluZS1sZWZ0OmFmdGVyIHtcbiAgICB3aWR0aDogMmVtO1xuICAgIGhlaWdodDogM3B4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAycHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICB0b3A6IGNhbGMoNTAlICsgMC40ZW0pO1xuICAgIHJpZ2h0OiBjYWxjKC01MCUgLSAuNWVtICk7XG4gIH1cbn1cblxuLnNhZWd1cy10aW1lbGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiAtMjBweDtcbiAgICBib3R0b206IC0yMHB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLWxlZnQ6IGRhc2hlZCAkcHJpbWFyeS1jb2xvcjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJweCk7XG4gIH1cbn1cbiIsIjpob3N0IDo6bmctZGVlcCAuc2FlZ3VzLWxwLXRpbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMWVtIDA7XG4gIHBhZGRpbmc6IDAuNWVtICFpbXBvcnRhbnQ7XG59XG46aG9zdCA6Om5nLWRlZXAgLnNhZWd1cy1scC10aWxlIC5zYWVndXMtbHAtdGlsZS1sb2dvIHtcbiAgaGVpZ2h0OiAzZW07XG59XG46aG9zdCA6Om5nLWRlZXAgLnNhZWd1cy1scC10aWxlOmJlZm9yZSwgOmhvc3QgOjpuZy1kZWVwIC5zYWVndXMtbHAtdGlsZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbjpob3N0IDo6bmctZGVlcCAuc2FlZ3VzLWxwLXRpbGUtLXRpbWVsaW5lLXJpZ2h0OmJlZm9yZSB7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkyQzQxO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogY2FsYygtNTAlIC0gLjVlbSk7XG59XG46aG9zdCA6Om5nLWRlZXAgLnNhZWd1cy1scC10aWxlLS10aW1lbGluZS1yaWdodDphZnRlciB7XG4gIHdpZHRoOiAyZW07XG4gIGhlaWdodDogM3B4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkyQzQxO1xuICB0b3A6IGNhbGMoNTAlICsgMC40ZW0pO1xuICBsZWZ0OiBjYWxjKC01MCUgLSAuNWVtICk7XG59XG46aG9zdCA6Om5nLWRlZXAgLnNhZWd1cy1scC10aWxlLS10aW1lbGluZS1sZWZ0OmJlZm9yZSB7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkyQzQxO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IGNhbGMoLTUwJSAtIC41ZW0pO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5zYWVndXMtbHAtdGlsZS0tdGltZWxpbmUtbGVmdDphZnRlciB7XG4gIHdpZHRoOiAyZW07XG4gIGhlaWdodDogM3B4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMnB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkyQzQxO1xuICB0b3A6IGNhbGMoNTAlICsgMC40ZW0pO1xuICByaWdodDogY2FsYygtNTAlIC0gLjVlbSApO1xufVxuXG4uc2FlZ3VzLXRpbWVsaW5lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNhZWd1cy10aW1lbGluZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IC0yMHB4O1xuICBib3R0b206IC0yMHB4O1xuICB3aWR0aDogMXB4O1xuICBib3JkZXItbGVmdDogZGFzaGVkICMxOTJDNDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnB4KTtcbn0iLCIvLyBiYWNrZ3JvdW5kIGNvbG9yc1xuJHByaW1hcnktYmctY29sb3I6ICMxODJjNDE7XG4kc2Vjb25kYXJ5LWJnLWNvbG9yOiAjRkFGQUZBO1xuJHRoaXJkLWJnLWNvbG9yOiAjRjJGMkYyO1xuJGZvdXJ0aC1jb2xvcjogI0ZGNzI4ODtcblxuXG4vLyB0ZXh0LWNvbG9yIC8gY29tbW9uIGNvbG9ycyBcbiRwcmltYXJ5LWNvbG9yOiAjMTkyQzQxO1xuJHNlY29uZGFyeS1jb2xvcjogI0ZGRjtcbiR0aGlyZC1jb2xvcjogI0ZGNzI4ODtcbiRmb3VydGgtY29sb3I6ICNGMkYyRjI7Il19 */"

/***/ }),

/***/ "./src/app/components/organisms/timeline/timeline.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/organisms/timeline/timeline.component.ts ***!
  \*********************************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TimelineComponent = class TimelineComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TimelineComponent.prototype, "elements", void 0);
TimelineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-timeline',
        template: __webpack_require__(/*! raw-loader!./timeline.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/organisms/timeline/timeline.component.html"),
        styles: [__webpack_require__(/*! ./timeline.component.scss */ "./src/app/components/organisms/timeline/timeline.component.scss")]
    })
], TimelineComponent);



/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".saegus-lp-header-logo {\n  padding: 0 3em;\n}\n.saegus-lp-header-logo svg {\n  height: 8em;\n}\n.saegus-lp-testimonials p {\n  text-align: center;\n}\n.saegus-lp-testimonials app-tile {\n  width: 100%;\n}\n:host ::ng-deep .saegus-lp-tile {\n  margin: 1em;\n}\n:host ::ng-deep .saegus-lp-tile .col-12 {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.image-caption {\n  margin: 1em 0;\n}\n:host ::ng-deep .saegus-lp-who-are-we .saegus-lp-circle-img {\n  width: 5em;\n  height: 5em;\n}\n.saegus-lp-testimonials-container {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n}\n.saegus-lp-testimonials--quote {\n  width: 5em;\n  display: -webkit-box;\n  display: flex;\n}\n.saegus-lp-testimonials--quote:first-child {\n  align-self: flex-start;\n}\n.saegus-lp-testimonials--quote:last-child {\n  align-self: flex-end;\n  -webkit-transform: rotateZ(180deg);\n          transform: rotateZ(180deg);\n}\n:host ::ng-deep .saegus-lp-testimonials--quote svg {\n  fill: #FF7288 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZWJhc3RpZW5wZXJyb3QvRG9jdW1lbnRzL0RldmVsb3BtZW50L1NhZWd1cy9zYWVndXMtaW50cmFjdWJhdGlvbi9jbGllbnQvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGNBQUE7QUNERjtBREVFO0VBQ0UsV0FBQTtBQ0FKO0FES0U7RUFDRSxrQkFBQTtBQ0ZKO0FETUE7RUFDRSxXQUFBO0FDSEY7QURNQTtFQUNFLFdBQUE7QUNIRjtBRElFO0VBQ0UsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0ZKO0FETUE7RUFDRSxhQUFBO0FDSEY7QURLQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FDRkY7QURJQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFdBQUE7QUNERjtBREdBO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0FGO0FEQ0U7RUFDRSxzQkFBQTtBQ0NKO0FEQ0U7RUFDRSxvQkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7QUNDSjtBRElFO0VBQ0Usd0JBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3Njc3MvY29sb3JzLnNjc3MnO1xuXG4uc2FlZ3VzLWxwLWhlYWRlci1sb2dvIHtcbiAgcGFkZGluZzogMCAzZW07XG4gIHN2ZyB7XG4gICAgaGVpZ2h0OiA4ZW07XG4gIH1cbn1cbi5zYWVndXMtbHAtdGVzdGltb25pYWxzIHtcbiAgXG4gIHAge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG4uc2FlZ3VzLWxwLXRlc3RpbW9uaWFscyBhcHAtdGlsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnNhZWd1cy1scC10aWxlIHtcbiAgbWFyZ2luOiAxZW07XG4gIC5jb2wtMTIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG5cbi5pbWFnZS1jYXB0aW9uIHtcbiAgbWFyZ2luOiAxZW0gMDtcbn1cbjpob3N0IDo6bmctZGVlcCAuc2FlZ3VzLWxwLXdoby1hcmUtd2UgLnNhZWd1cy1scC1jaXJjbGUtaW1nIHtcbiAgd2lkdGg6IDVlbTtcbiAgaGVpZ2h0OiA1ZW07XG59XG4uc2FlZ3VzLWxwLXRlc3RpbW9uaWFscy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5zYWVndXMtbHAtdGVzdGltb25pYWxzLS1xdW90ZSB7XG4gIHdpZHRoOiA1ZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gICY6Zmlyc3QtY2hpbGQge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gIH0gXG4gICY6bGFzdC1jaGlsZCB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDE4MGRlZyk7XG4gIH1cbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5zYWVndXMtbHAtdGVzdGltb25pYWxzLS1xdW90ZSB7XG4gIHN2ZyB7XG4gICAgZmlsbDogJHRoaXJkLWNvbG9yICFpbXBvcnRhbnQ7XG4gIH1cbn0iLCIuc2FlZ3VzLWxwLWhlYWRlci1sb2dvIHtcbiAgcGFkZGluZzogMCAzZW07XG59XG4uc2FlZ3VzLWxwLWhlYWRlci1sb2dvIHN2ZyB7XG4gIGhlaWdodDogOGVtO1xufVxuXG4uc2FlZ3VzLWxwLXRlc3RpbW9uaWFscyBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2FlZ3VzLWxwLXRlc3RpbW9uaWFscyBhcHAtdGlsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnNhZWd1cy1scC10aWxlIHtcbiAgbWFyZ2luOiAxZW07XG59XG46aG9zdCA6Om5nLWRlZXAgLnNhZWd1cy1scC10aWxlIC5jb2wtMTIge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW1hZ2UtY2FwdGlvbiB7XG4gIG1hcmdpbjogMWVtIDA7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuc2FlZ3VzLWxwLXdoby1hcmUtd2UgLnNhZWd1cy1scC1jaXJjbGUtaW1nIHtcbiAgd2lkdGg6IDVlbTtcbiAgaGVpZ2h0OiA1ZW07XG59XG5cbi5zYWVndXMtbHAtdGVzdGltb25pYWxzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2FlZ3VzLWxwLXRlc3RpbW9uaWFscy0tcXVvdGUge1xuICB3aWR0aDogNWVtO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnNhZWd1cy1scC10ZXN0aW1vbmlhbHMtLXF1b3RlOmZpcnN0LWNoaWxkIHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cbi5zYWVndXMtbHAtdGVzdGltb25pYWxzLS1xdW90ZTpsYXN0LWNoaWxkIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIHRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLnNhZWd1cy1scC10ZXN0aW1vbmlhbHMtLXF1b3RlIHN2ZyB7XG4gIGZpbGw6ICNGRjcyODggIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let HomeComponent = class HomeComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.timeline = [{
                id: 0,
                left: [{
                        displayAs: 'primary',
                        type: 'text',
                        title: 'Identifier vos leviers & thématiques d’innovation'
                    }],
                right: [{
                        displayAs: 'secondary',
                        type: 'list',
                        title: null,
                        values: [
                            'Immersion & synthèse : dresser un état des lieux des parties prenantes internes et externes(clients, partenaires, concurrents…)',
                            'Executive workshop : challenger & prioriser les thématiques et leviers identifiés',
                            'Crowthinking workshop : concrétiser tout de suite les pistes identifiées.',
                        ]
                    }]
            },
            {
                id: 1,
                left: [
                    {
                        displayAs: 'secondary',
                        type: 'list',
                        title: null,
                        values: [
                            'Identifier le  bon format d’idéation(crowdthinking, boost - camp, Foreseeds…)',
                            'Définir les critères d’évaluation & de sélection des idées',
                            'Animer les ateliers ou la plateforme en ligne(facilitateurs ou community managers)',
                            'Synthétiser la matière issues des ateliers / plateformes.'
                        ]
                    },
                    {
                        displayAs: 'secondary',
                        logo: '/assets/images/Foreseeds_Logo.png'
                    }
                ],
                right: [{
                        displayAs: 'primary',
                        type: 'text',
                        title: 'Animer un challenge d’idéation'
                    }],
            },
            {
                id: 2,
                left: [{
                        displayAs: 'primary',
                        type: 'text',
                        title: 'Convertir une idée a un MVP en moins de 3 mois'
                    }],
                right: [{
                        displayAs: 'secondary',
                        type: 'list',
                        title: null,
                        values: [
                            'Définir la vision produit(problème, value proposition, cibles & business model)',
                            'Formuler les hypothèses et les prototypes permettant de les tester',
                            'Rédiger le backlog priorisé et le développer en sprint Agile',
                        ]
                    }
                ]
            },
            {
                id: 1,
                left: [{
                        displayAs: 'secondary',
                        type: 'list',
                        title: null,
                        values: [
                            'Définition de la gouvernance de suivi & financement des projets(Growth boards)',
                            'Formalisation et animation du framework de coaching des équipes',
                            'Mise à disposition des compétences clés nécessaires aux projets',
                            'Animation du réseau interne et externe d’intrapreneurs et partenaires(think tank)',
                        ]
                    }],
                right: [{
                        displayAs: 'primary',
                        type: 'text',
                        title: '« Scaler » votre démarche intrapreneuriale'
                    }],
            },
        ];
        this.testimonials = [
            {
                id: 0,
                illustration: null,
                value: 'Je perds des parts de marché face à des jeunes entrants / startups, innover d’accord, mais par où commencer ?'
            },
            {
                id: 0,
                illustration: null,
                value: "J'ai une idée de produit et service, mais il me manque les moyens / la méthodologie pour la faire aboutir."
            },
            {
                id: 0,
                illustration: null,
                value: "Nous avons de nombreuses idées émanant des salariés, mais nous ne savons pas les exploiter."
            },
        ];
    }
    ngOnInit() {
        this.svg = this.sanitizer.bypassSecurityTrustHtml("");
    }
    ;
};
HomeComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sebastienperrot/Documents/Development/Saegus/saegus-intracubation/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map