"use strict";
(self["webpackChunkEZui"] = self["webpackChunkEZui"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);




const routes = [{
  path: 'account',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/account/account.module */ 475)).then(m => m.AccountModule)
}
// { path: '**', redirectTo: '' }
// {
//   path: '**',
//   redirectTo: '   '
// }
];

class AppRoutingModule {
  constructor(router, viewportScroller) {
    // router.events
    //   .pipe( filter((e: Event): boolean => e instanceof Scroll))
    //   .subscribe(() => {
    //     setTimeout(() => viewportScroller.scrollToPosition([0, 0]), 0);
    //   });
  }
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.ViewportScroller));
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'ignore',
      paramsInheritanceStrategy: 'always',
      urlUpdateStrategy: 'eager',
      //relativeLinkResolution: 'corrected',
      scrollPositionRestoration: 'disabled'
    }), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _material_material_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material/material.service */ 218);
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/settings.service */ 9752);
/* harmony import */ var _pages_mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/mainpage/mainpage.component */ 9379);
/* harmony import */ var _pages_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/header/header.component */ 9773);
/* harmony import */ var _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/footer/footer.component */ 5177);







class AppComponent {
  constructor(materialService, renderer, settingsService) {
    this.materialService = materialService;
    this.renderer = renderer;
    this.settingsService = settingsService;
    this.title = 'Eves art';
    this.bgrndUrl$ = this.settingsService.curBgnd$;
  }
  ngOnInit() {
    this.applyTheme();
    this.materialService.initCustomIcons();
    this.bgrndUrl$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(x => this.bgrndUrl = x)).subscribe();
  }
  applyTheme() {
    const containerToApplyTheme = document.querySelector('body');
    this.renderer.addClass(containerToApplyTheme, 'standard-theme');
  }
  showProfileEvent(event) {
    this.showProfile = event;
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_material_material_service__WEBPACK_IMPORTED_MODULE_0__.MaterialService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_settings_service__WEBPACK_IMPORTED_MODULE_1__.SettingsService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 3,
    vars: 4,
    consts: [[2, "flex-shrink", "0", "flex-grow", "0", 3, "show"], [3, "showProfile"], [2, "flex-shrink", "0", "flex-grow", "0"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("show", function AppComponent_Template_app_header_show_0_listener($event) {
          return ctx.showProfileEvent($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-mainpage", 1)(2, "app-footer", 2);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleMapInterpolate1"]("flex-shrink: 0; flex-grow: 1; background-size: 100%; background-image: url(", ctx.bgrndUrl, ");");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("showProfile", ctx.showProfile);
      }
    },
    dependencies: [_pages_mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_2__.MainpageComponent, _pages_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent],
    styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _pages_common_entity_common_entity_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/common-entity/common-entity.component */ 7763);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _core_interceptors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/interceptors */ 6031);
/* harmony import */ var _core_utils_storage_storage_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/utils/storage/storage.module */ 8713);
/* harmony import */ var _modules_alert_alert_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/alert/alert.module */ 6472);
/* harmony import */ var _modules_account_account_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/account/account.module */ 475);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material/material.module */ 6889);
/* harmony import */ var _pages_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/sidenav/sidenav.component */ 7310);
/* harmony import */ var _pages_mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/mainpage/mainpage.component */ 9379);
/* harmony import */ var _pages_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/header/header.component */ 9773);
/* harmony import */ var _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/footer/footer.component */ 5177);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _dialogref_menu_item_menu_item_dialogref_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dialogref/menu-item/menu-item-dialogref.component */ 8624);
/* harmony import */ var _pages_admin_admin_common_entity_admin_common_entity_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/admin/admin-common-entity/admin-common-entity.component */ 8001);
/* harmony import */ var _dialogref_art_item_art_item_dialogref_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dialogref/art-item/art-item-dialogref.component */ 3577);
/* harmony import */ var _dragdrop_drag_directives__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dragdrop/drag.directives */ 3802);
/* harmony import */ var _pipes_fileSizePipe___WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipes/fileSizePipe  */ 2416);
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-color-picker */ 3158);
/* harmony import */ var _pipes_stringGetNumbersPipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pipes/stringGetNumbersPipe */ 2412);
/* harmony import */ var _pages_admin_admin_menu_entity_admin_menu_entity_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/admin/admin-menu-entity/admin-menu-entity.component */ 4073);
/* harmony import */ var _pages_admin_admin_sorting_entity_admin_sorting_entity_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/admin/admin-sorting-entity/admin-sorting-entity.component */ 3922);
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-loading */ 9066);
/* harmony import */ var _pages_admin_admin_format_settings_admin_format_settings_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/admin/admin-format-settings/admin-format-settings.component */ 8328);
/* harmony import */ var _modules_circular_slider_circular_slider_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/circular-slider/circular-slider.module */ 1790);
/* harmony import */ var _dialogref_feedback_feedback_dialogref_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dialogref/feedback/feedback-dialogref.component */ 8106);
/* harmony import */ var _dialogref_feedback_message_feedback_message_dialogref_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dialogref/feedback-message/feedback-message-dialogref.component */ 5449);
/* harmony import */ var _meddv_ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @meddv/ngx-pinch-zoom */ 3649);
/* harmony import */ var _dialogref_aboutMe_aboutme_dialogref_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dialogref/aboutMe/aboutme-dialogref.component */ 4181);
/* harmony import */ var _pages_admin_admin_newsletter_entity_admin_newsletter_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/admin/admin-newsletter-entity/admin-newsletter.component */ 8885);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 1699);






































class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineInjector"]({
    providers: [_core_interceptors__WEBPACK_IMPORTED_MODULE_3__.interceptorProviders],
    imports: [_core_utils_storage_storage_module__WEBPACK_IMPORTED_MODULE_4__.BrowserStorageModule.forRoot(), _modules_account_account_module__WEBPACK_IMPORTED_MODULE_6__.AccountModule, _modules_alert_alert_module__WEBPACK_IMPORTED_MODULE_5__.AlertModule, _angular_common__WEBPACK_IMPORTED_MODULE_27__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_30__.BrowserAnimationsModule, _material_material_module__WEBPACK_IMPORTED_MODULE_7__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormsModule, ngx_color_picker__WEBPACK_IMPORTED_MODULE_32__.ColorPickerModule, _modules_circular_slider_circular_slider_module__WEBPACK_IMPORTED_MODULE_21__.CircularSliderModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_33__.NgxSpinnerModule,
    // AtomSpinnerModule
    _meddv_ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_34__.PinchZoomModule, ngx_loading__WEBPACK_IMPORTED_MODULE_35__.NgxLoadingModule.forRoot({
      animationType: ngx_loading__WEBPACK_IMPORTED_MODULE_35__.ngxLoadingAnimationTypes.circleSwish,
      backdropBackgroundColour: "rgba(0,0,0,0.1)",
      backdropBorderRadius: "6px",
      primaryColour: "#ffffff",
      secondaryColour: "#ef80c3",
      tertiaryColour: "#e8a9fb"
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _pages_mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_9__.MainpageComponent, _pages_common_entity_common_entity_component__WEBPACK_IMPORTED_MODULE_2__.CommonEntityComponent, _pages_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_8__.SidenavComponent, _pages_header_header_component__WEBPACK_IMPORTED_MODULE_10__.HeaderComponent, _pages_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__.FooterComponent, _pages_admin_admin_common_entity_admin_common_entity_component__WEBPACK_IMPORTED_MODULE_13__.AdminCommonEntityComponent, _pages_admin_admin_menu_entity_admin_menu_entity_component__WEBPACK_IMPORTED_MODULE_18__.AdminMenuEntityComponent, _pages_admin_admin_sorting_entity_admin_sorting_entity_component__WEBPACK_IMPORTED_MODULE_19__.AdminSortingEntityComponent, _dialogref_menu_item_menu_item_dialogref_component__WEBPACK_IMPORTED_MODULE_12__.MenuItemDialogrefComponent, _dialogref_art_item_art_item_dialogref_component__WEBPACK_IMPORTED_MODULE_14__.ArtItemDialogrefComponent, _dialogref_feedback_feedback_dialogref_component__WEBPACK_IMPORTED_MODULE_22__.FeedbackDialogrefComponent, _dialogref_feedback_message_feedback_message_dialogref_component__WEBPACK_IMPORTED_MODULE_23__.FeedbackMessageDialogrefComponent, _pages_admin_admin_format_settings_admin_format_settings_component__WEBPACK_IMPORTED_MODULE_20__.AdminFormatSettingsComponent, _dragdrop_drag_directives__WEBPACK_IMPORTED_MODULE_15__.DragDirective, _dialogref_aboutMe_aboutme_dialogref_component__WEBPACK_IMPORTED_MODULE_24__.AboutMeDialogrefComponent, _pages_admin_admin_newsletter_entity_admin_newsletter_component__WEBPACK_IMPORTED_MODULE_25__.AdminNewsletterComponent, _pipes_fileSizePipe___WEBPACK_IMPORTED_MODULE_16__.FileSizePipe, _pipes_stringGetNumbersPipe__WEBPACK_IMPORTED_MODULE_17__.StringGetNumbersPipe],
    imports: [_core_utils_storage_storage_module__WEBPACK_IMPORTED_MODULE_4__.BrowserStorageModule, _modules_account_account_module__WEBPACK_IMPORTED_MODULE_6__.AccountModule, _modules_alert_alert_module__WEBPACK_IMPORTED_MODULE_5__.AlertModule, _angular_common__WEBPACK_IMPORTED_MODULE_27__.CommonModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_30__.BrowserAnimationsModule, _material_material_module__WEBPACK_IMPORTED_MODULE_7__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormsModule, ngx_color_picker__WEBPACK_IMPORTED_MODULE_32__.ColorPickerModule, _modules_circular_slider_circular_slider_module__WEBPACK_IMPORTED_MODULE_21__.CircularSliderModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_33__.NgxSpinnerModule,
    // AtomSpinnerModule
    _meddv_ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_34__.PinchZoomModule, ngx_loading__WEBPACK_IMPORTED_MODULE_35__.NgxLoadingModule]
  });
})();

/***/ }),

/***/ 7932:
/*!*********************************************!*\
  !*** ./src/app/core/guards/anonym.guard.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnonymGuard: () => (/* binding */ AnonymGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/user.service */ 3076);



class AnonymGuard {
  constructor(_router, _userService) {
    this._router = _router;
    this._userService = _userService;
    this._isRunning = false;
  }
  get isRunning() {
    return this._isRunning;
  }
  static #_ = this.ɵfac = function AnonymGuard_Factory(t) {
    return new (t || AnonymGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AnonymGuard,
    factory: AnonymGuard.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8036:
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/user.service */ 3076);



class AuthGuard {
  constructor(_router, _userService) {
    this._router = _router;
    this._userService = _userService;
    this._isRunning = false;
  }
  get isRunning() {
    return this._isRunning;
  }
  static #_ = this.ɵfac = function AuthGuard_Factory(t) {
    return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AuthGuard,
    factory: AuthGuard.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 4047:
/*!*******************************************************!*\
  !*** ./src/app/core/interceptors/auth.interceptor.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptor: () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 3738);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../guards/auth.guard */ 8036);
/* harmony import */ var _guards_anonym_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../guards/anonym.guard */ 7932);
/* harmony import */ var _utils_storage_interfaces_local_storage_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/storage/interfaces/local-storage.interface */ 5926);
/* harmony import */ var _modules_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/alert/alert.service */ 8479);
/* harmony import */ var _modules_account_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/account/account.service */ 6992);










class AuthInterceptor {
  constructor(_router, _authGuard, _anonymGuard, _localStorage, _alertService, _accountService) {
    this._router = _router;
    this._authGuard = _authGuard;
    this._anonymGuard = _anonymGuard;
    this._localStorage = _localStorage;
    this._alertService = _alertService;
    this._accountService = _accountService;
    this._anonymUrls = ['/'];
  }
  intercept(request, next) {
    const idToken = this._localStorage.getItem("id_token");
    if (idToken) {
      const cloned = request.clone({
        headers: request.headers.set("Authorization", "Bearer " + idToken)
      });
      request = cloned;
    }
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(err => {
      switch (err.status) {
        case 401:
          this._accountService.isSignedIn$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(signedin => {
            if (signedin) this._accountService.signOut();
          })).subscribe();
          break;
        case 402:
        case 403:
          if (this._anonymUrls.find(url => this._router.url.includes(url)) == null && !this._authGuard.isRunning && !this._anonymGuard.isRunning) {
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.loginRedirect) {
              //   window.location.replace(
              //     `${
              //       environment.loginRedirect
              //     }?backURL=${window.encodeURIComponent(window.location.href)}`
              //   );
              // } else {
              this._router.navigateByUrl(this._anonymUrls[0], {
                state: {
                  redirect: this._router.url
                }
              });
            }
          }
          break;
        case 500:
          this._alertService.error("Возникла ошибка.");
          break;
        default:
          this._alertService.error(err.message);
          break;
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(() => new Error(err.error));
    }));
  }
  static #_ = this.ɵfac = function AuthInterceptor_Factory(t) {
    return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_guards_anonym_guard__WEBPACK_IMPORTED_MODULE_2__.AnonymGuard), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_utils_storage_interfaces_local_storage_interface__WEBPACK_IMPORTED_MODULE_3__.LocalStorage), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_modules_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_modules_account_account_service__WEBPACK_IMPORTED_MODULE_5__.AccountService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
    token: AuthInterceptor,
    factory: AuthInterceptor.ɵfac
  });
}

/***/ }),

/***/ 6031:
/*!********************************************!*\
  !*** ./src/app/core/interceptors/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   interceptorProviders: () => (/* binding */ interceptorProviders)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.interceptor */ 4047);
/* harmony import */ var _retry_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./retry.interceptor */ 9745);



const interceptorProviders = [{
  provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HTTP_INTERCEPTORS,
  useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_0__.AuthInterceptor,
  multi: true
}, {
  provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HTTP_INTERCEPTORS,
  useClass: _retry_interceptor__WEBPACK_IMPORTED_MODULE_1__.RetryInterceptor,
  multi: true
}];

/***/ }),

/***/ 9745:
/*!********************************************************!*\
  !*** ./src/app/core/interceptors/retry.interceptor.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RetryInterceptor: () => (/* binding */ RetryInterceptor)
/* harmony export */ });
/* harmony import */ var _operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../operators */ 5957);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class RetryInterceptor {
  static #_ = this.retryHeaderName = 'App-maxRetry';
  constructor() {
    this.maxRetry = 2;
  }
  intercept(request, next) {
    // const maxRetry = Number(
    //   request.headers.get(RetryInterceptor.retryHeaderName)
    // );
    // request = request.clone({
    //   headers: request.headers.delete(RetryInterceptor.retryHeaderName),
    // });
    // console.warn('ZZZZZZZZZZZZZZZZZZZZZZZZZZ retry intercept' + maxRetry);
    return next.handle(request).pipe((0,_operators__WEBPACK_IMPORTED_MODULE_0__.retryWithBackoff)(this.maxRetry));
  }
  static #_2 = this.ɵfac = function RetryInterceptor_Factory(t) {
    return new (t || RetryInterceptor)();
  };
  static #_3 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: RetryInterceptor,
    factory: RetryInterceptor.ɵfac
  });
}

/***/ }),

/***/ 5957:
/*!***********************************!*\
  !*** ./src/app/core/operators.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cache: () => (/* binding */ cache),
/* harmony export */   retryWithBackoff: () => (/* binding */ retryWithBackoff),
/* harmony export */   smooth: () => (/* binding */ smooth)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5400);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5584);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 4524);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6143);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 2607);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 7592);


function cache() {
  return source => {
    const rSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.ReplaySubject(1);
    return source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.share)({
      connector: () => rSubject,
      resetOnError: false,
      resetOnComplete: false,
      resetOnRefCountZero: true
    }));
  };
}
function smooth() {
  return source => source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.throttleTime)(50, undefined, {
    leading: false,
    trailing: true
  }));
}
const DEFAULT_MAX_RETRIES = -1;
const DEFAULT_BACKOFF = 1000;
const DEFAULT_RETRY_DELAY = 2000;
function retryWithBackoff(maxRetry = DEFAULT_MAX_RETRIES, delayMs = DEFAULT_RETRY_DELAY, backoffMs = DEFAULT_BACKOFF) {
  let retries = 0;
  return source => source.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.retryWhen)(errors => errors.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(error => {
    maxRetry = maxRetry >= 0 ? maxRetry : error.status === 429 ? 2 : error.status >= 500 ? 3 : 0;
    if (retries < maxRetry) {
      const backoffTime = backoffMs + retries * delayMs;
      retries++;
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(error).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.delay)(backoffTime));
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(error);
  }))));
}

/***/ }),

/***/ 9110:
/*!*****************************************************************************!*\
  !*** ./src/app/core/utils/storage/interfaces/abstract-storage.interface.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractStorage: () => (/* binding */ AbstractStorage)
/* harmony export */ });
/**
 * Abstract Storage for all storage's
 *
 * @description
 * The Storage interface of the Web Storage API provides access to a particular domain's session or local storage.
 * It allows, for example, the addition, modification, or deletion of stored data items.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
 */
class AbstractStorage {}

/***/ }),

/***/ 5926:
/*!**************************************************************************!*\
  !*** ./src/app/core/utils/storage/interfaces/local-storage.interface.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalStorage: () => (/* binding */ LocalStorage)
/* harmony export */ });
/* harmony import */ var _abstract_storage_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-storage.interface */ 9110);

/**
 * Local Storage
 *
 * @see https://developer.mozilla.org/ru/docs/Web/API/Window/localStorage
 */
class LocalStorage extends _abstract_storage_interface__WEBPACK_IMPORTED_MODULE_0__.AbstractStorage {}

/***/ }),

/***/ 2268:
/*!***************************************************************************!*\
  !*** ./src/app/core/utils/storage/interfaces/memory-storage.interface.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MemoryStorage: () => (/* binding */ MemoryStorage)
/* harmony export */ });
/* harmony import */ var _abstract_storage_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-storage.interface */ 9110);

/**
 * Memory Storage
 *
 * @description
 * It simple storage for emulate Web Storage API
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
 */
class MemoryStorage extends _abstract_storage_interface__WEBPACK_IMPORTED_MODULE_0__.AbstractStorage {}

/***/ }),

/***/ 9541:
/*!****************************************************************************!*\
  !*** ./src/app/core/utils/storage/interfaces/session-storage.interface.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SessionStorage: () => (/* binding */ SessionStorage)
/* harmony export */ });
/* harmony import */ var _abstract_storage_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-storage.interface */ 9110);

/**
 * Session Storage
 *
 * @see https://developer.mozilla.org/ru/docs/Web/API/Window/sessionStorage
 */
class SessionStorage extends _abstract_storage_interface__WEBPACK_IMPORTED_MODULE_0__.AbstractStorage {}

/***/ }),

/***/ 8713:
/*!******************************************************!*\
  !*** ./src/app/core/utils/storage/storage.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowserStorageModule: () => (/* binding */ BrowserStorageModule)
/* harmony export */ });
/* harmony import */ var _interfaces_local_storage_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaces/local-storage.interface */ 5926);
/* harmony import */ var _interfaces_memory_storage_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interfaces/memory-storage.interface */ 2268);
/* harmony import */ var _interfaces_session_storage_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interfaces/session-storage.interface */ 9541);
/* harmony import */ var _storage_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.tokens */ 7379);
/* harmony import */ var _storages_base_local_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storages/base-local.storage */ 9361);
/* harmony import */ var _storages_base_memory_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storages/base-memory.storage */ 4942);
/* harmony import */ var _storages_base_session_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storages/base-session.storage */ 2736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
// import { CookieService } from 'ngx-cookie-service';
// import { CookieStorage } from './interfaces/cookie-storage.interface';




// import { BaseCookieStorage } from './storages/base-cookie.storage';




class BrowserStorageModule {
  static forRoot(options = {}) {
    return {
      ngModule: BrowserStorageModule,
      providers: [{
        provide: _storage_tokens__WEBPACK_IMPORTED_MODULE_3__.COOKIE_IN_INCOGNITO,
        useValue: !!options.cookieInIncognito
      },
      // {
      //   provide: CookieService,
      //   useClass: options.cookieService || CookieService,
      // },
      {
        provide: _interfaces_memory_storage_interface__WEBPACK_IMPORTED_MODULE_1__.MemoryStorage,
        useClass: options.memoryStorage || _storages_base_memory_storage__WEBPACK_IMPORTED_MODULE_5__.BaseMemoryStorage
      },
      // {
      //   provide: CookieStorage,
      //   useClass: options.cookieStorage || BaseCookieStorage,
      // },
      {
        provide: _interfaces_local_storage_interface__WEBPACK_IMPORTED_MODULE_0__.LocalStorage,
        useClass: options.localStorage || _storages_base_local_storage__WEBPACK_IMPORTED_MODULE_4__.BaseLocalStorage
      }, {
        provide: _interfaces_session_storage_interface__WEBPACK_IMPORTED_MODULE_2__.SessionStorage,
        useClass: options.sessionStorage || _storages_base_session_storage__WEBPACK_IMPORTED_MODULE_6__.BaseSessionStorage
      }]
    };
  }
  static #_ = this.ɵfac = function BrowserStorageModule_Factory(t) {
    return new (t || BrowserStorageModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: BrowserStorageModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({});
}

/***/ }),

/***/ 7379:
/*!******************************************************!*\
  !*** ./src/app/core/utils/storage/storage.tokens.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COOKIE_IN_INCOGNITO: () => (/* binding */ COOKIE_IN_INCOGNITO)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

const COOKIE_IN_INCOGNITO = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CookieInIncognito');

/***/ }),

/***/ 9361:
/*!*******************************************************************!*\
  !*** ./src/app/core/utils/storage/storages/base-local.storage.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseLocalStorage: () => (/* binding */ BaseLocalStorage)
/* harmony export */ });
/* harmony import */ var _storage_tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage.tokens */ 7379);
/* harmony import */ var _utils_storage_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/storage.util */ 6908);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _interfaces_memory_storage_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/memory-storage.interface */ 2268);




class BaseLocalStorage {
  constructor(_cookieInIncognito,
  // private _cookieStorage: CookieStorage,
  _memoryStorage) {
    this._cookieInIncognito = _cookieInIncognito;
    this._memoryStorage = _memoryStorage;
    if ((0,_utils_storage_util__WEBPACK_IMPORTED_MODULE_1__.storageAvailable)('localStorage')) {
      this.storage = window.localStorage;
      // } else if (this._cookieInIncognito) {
      //   this.storage = this._cookieStorage;
    } else {
      this.storage = this._memoryStorage;
    }
  }
  get length() {
    return this.storage.length;
  }
  clear() {
    this.storage.clear();
  }
  getItem(key) {
    return this.storage.getItem(key);
  }
  key(index) {
    return this.storage.key(index);
  }
  removeItem(key) {
    this.storage.removeItem(key);
  }
  setItem(key, value) {
    this.storage.setItem(key, value);
  }
  static #_ = this.ɵfac = function BaseLocalStorage_Factory(t) {
    return new (t || BaseLocalStorage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_storage_tokens__WEBPACK_IMPORTED_MODULE_0__.COOKIE_IN_INCOGNITO), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_interfaces_memory_storage_interface__WEBPACK_IMPORTED_MODULE_2__.MemoryStorage));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: BaseLocalStorage,
    factory: BaseLocalStorage.ɵfac
  });
}

/***/ }),

/***/ 4942:
/*!********************************************************************!*\
  !*** ./src/app/core/utils/storage/storages/base-memory.storage.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseMemoryStorage: () => (/* binding */ BaseMemoryStorage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class BaseMemoryStorage {
  constructor() {
    /**
     * Storage data
     */
    this.data = {};
  }
  get length() {
    return Object.keys(this.data).length;
  }
  clear() {
    this.data = {};
  }
  getItem(key) {
    console.warn("BASE MEMORY STORAGE GET");
    return key in this.data ? this.data[key] : null;
  }
  key(index) {
    const keys = Object.keys(this.data);
    return index >= 0 && keys.length < index ? keys[index] : null;
  }
  removeItem(key) {
    delete this.data[key];
  }
  setItem(key, value) {
    console.warn("BASE MEMORY STORAGE SET");
    this.data[key] = value;
  }
  static #_ = this.ɵfac = function BaseMemoryStorage_Factory(t) {
    return new (t || BaseMemoryStorage)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: BaseMemoryStorage,
    factory: BaseMemoryStorage.ɵfac
  });
}

/***/ }),

/***/ 2736:
/*!*********************************************************************!*\
  !*** ./src/app/core/utils/storage/storages/base-session.storage.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseSessionStorage: () => (/* binding */ BaseSessionStorage)
/* harmony export */ });
/* harmony import */ var _storage_tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage.tokens */ 7379);
/* harmony import */ var _utils_storage_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/storage.util */ 6908);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _interfaces_memory_storage_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/memory-storage.interface */ 2268);




/**
 * Browser session storage
 */
class BaseSessionStorage {
  constructor(_cookieInIncognito,
  // private _cookieStorage: CookieStorage,
  _memoryStorage) {
    this._cookieInIncognito = _cookieInIncognito;
    this._memoryStorage = _memoryStorage;
    if ((0,_utils_storage_util__WEBPACK_IMPORTED_MODULE_1__.storageAvailable)('sessionStorage')) {
      this.storage = window.sessionStorage;
      // } else if (this._cookieInIncognito) {
      //   this.storage = this._cookieStorage;
    } else {
      this.storage = this._memoryStorage;
    }
  }
  get length() {
    return this.storage.length;
  }
  clear() {
    this.storage.clear();
  }
  getItem(key) {
    console.warn("BASE SESSION STORAGE GET");
    return this.storage.getItem(key);
  }
  key(index) {
    return this.storage.key(index);
  }
  removeItem(key) {
    this.storage.removeItem(key);
  }
  setItem(key, value) {
    console.warn("BASE SESSION STORAGE SET");
    this.storage.setItem(key, value);
  }
  static #_ = this.ɵfac = function BaseSessionStorage_Factory(t) {
    return new (t || BaseSessionStorage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_storage_tokens__WEBPACK_IMPORTED_MODULE_0__.COOKIE_IN_INCOGNITO), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_interfaces_memory_storage_interface__WEBPACK_IMPORTED_MODULE_2__.MemoryStorage));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: BaseSessionStorage,
    factory: BaseSessionStorage.ɵfac
  });
}

/***/ }),

/***/ 6908:
/*!**********************************************************!*\
  !*** ./src/app/core/utils/storage/utils/storage.util.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   storageAvailable: () => (/* binding */ storageAvailable)
/* harmony export */ });
/**
 * Return is storage available
 *
 * @param type Storage name like as localStorage, sessionStorage
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
 */
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
    // everything except Firefox
    e.code === 22 ||
    // Firefox
    e.code === 1014 ||
    // test name field too, because code might not be present
    // everything except Firefox
    e.name === 'QuotaExceededError' ||
    // Firefox
    e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
    // acknowledge QuotaExceededError only if there's something already stored
    storage && storage.length !== 0;
  }
}

/***/ }),

/***/ 4181:
/*!******************************************************************!*\
  !*** ./src/app/dialogref/aboutMe/aboutme-dialogref.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutMeDialogrefComponent: () => (/* binding */ AboutMeDialogrefComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ 7520);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 26);






const _c0 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({
  "width": a0,
  "height": a1,
  "font-size": a2,
  "fontFamily": a3,
  "color": a4,
  "font-style": a5,
  "font-weight": a6,
  "text-align": a7,
  "border": "hidden"
});
class AboutMeDialogrefComponent {
  constructor(data) {
    this.data = data;
    this.font = "";
    this.font = data.font?.replace('-', ' ');
    // this.text2 = data.text?.replaceAll("\n", "<br>");
  }
  static #_ = this.ɵfac = function AboutMeDialogrefComponent_Factory(t) {
    return new (t || AboutMeDialogrefComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AboutMeDialogrefComponent,
    selectors: [["app-aboutme-dialogref"]],
    decls: 2,
    vars: 12,
    consts: [[2, "overflow", "hidden"], ["matInput", "", 3, "ngModel", "disabled", "ngStyle", "ngModelChange"]],
    template: function AboutMeDialogrefComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "textarea", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AboutMeDialogrefComponent_Template_textarea_ngModelChange_1_listener($event) {
          return ctx.data.text = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.text)("disabled", true)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction8"](3, _c0, ctx.data.width, ctx.data.height, ctx.data.size, ctx.font, ctx.data.color, ctx.data.style, ctx.data.weight, ctx.data.align));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__.DefaultStyleDirective, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput],
    styles: ["[_nghost-%COMP%] {\n  opacity: 1;\n  border-radius: 8px;\n  padding: 8px 16px;\n  animation: custom-dialog-enter 1s ease;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGlhbG9ncmVmL2Fib3V0TWUvYWJvdXRtZS1kaWFsb2dyZWYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNDQUFBO0FBQUYiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLy9kaXNwbGF5OiBibG9jaztcclxuICBvcGFjaXR5OiAxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICBhbmltYXRpb246IGN1c3RvbS1kaWFsb2ctZW50ZXIgMXMgZWFzZTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 3577:
/*!********************************************************************!*\
  !*** ./src/app/dialogref/art-item/art-item-dialogref.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArtItemDialogrefComponent: () => (/* binding */ ArtItemDialogrefComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ 7520);
/* harmony import */ var _meddv_ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @meddv/ngx-pinch-zoom */ 3649);





const _c0 = (a0, a1) => ({
  "max-width": a0,
  "max-height": a1
});
class ArtItemDialogrefComponent {
  constructor(data) {
    this.data = data;
  }
  static #_ = this.ɵfac = function ArtItemDialogrefComponent_Factory(t) {
    return new (t || ArtItemDialogrefComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ArtItemDialogrefComponent,
    selectors: [["app-art-item-dialogref"]],
    decls: 2,
    vars: 9,
    consts: [[3, "transition-duration", "limit-zoom", "zoomControlScale", "wheelZoomFactor"], [3, "src", "ngStyle"]],
    template: function ArtItemDialogrefComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pinch-zoom", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("transition-duration", 400)("limit-zoom", 10)("zoomControlScale", 2)("wheelZoomFactor", 0.4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "data:Image/*;base64," + ctx.data.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, ctx.data.maxW, ctx.data.maxH));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__.DefaultStyleDirective, _meddv_ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_4__.PinchZoomComponent],
    styles: ["[_nghost-%COMP%] {\n  opacity: 1;\n  border-radius: 8px;\n  padding: 8px 16px;\n  animation: _ngcontent-%COMP%_custom-dialog-enter 1s ease;\n}\n\n@keyframes _ngcontent-%COMP%_custom-dialog-enter {\n  from {\n    transform: scale(0) rotate(360deg);\n  }\n  to {\n    transform: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGlhbG9ncmVmL2FydC1pdGVtL2FydC1pdGVtLWRpYWxvZ3JlZi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0NBQUE7QUFBRjs7QUFHQTtFQUNFO0lBQ0Usa0NBQUE7RUFBRjtFQUdBO0lBQ0UsZUFBQTtFQURGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLy9kaXNwbGF5OiBibG9jaztcclxuICBvcGFjaXR5OiAxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICBhbmltYXRpb246IGN1c3RvbS1kaWFsb2ctZW50ZXIgMXMgZWFzZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBjdXN0b20tZGlhbG9nLWVudGVyIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 5449:
/*!************************************************************************************!*\
  !*** ./src/app/dialogref/feedback-message/feedback-message-dialogref.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeedbackMessageDialogrefComponent: () => (/* binding */ FeedbackMessageDialogrefComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5356);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ 7520);






const _c0 = ["autosize"];
const _c1 = (a0, a1) => ({
  "width": a0,
  "height": a1
});
class FeedbackMessageDialogrefComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.text = "";
    this.text = data.message.replaceAll("\n", "<br>");
  }
  static #_ = this.ɵfac = function FeedbackMessageDialogrefComponent_Factory(t) {
    return new (t || FeedbackMessageDialogrefComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FeedbackMessageDialogrefComponent,
    selectors: [["app-feedback-message-dialogref"]],
    viewQuery: function FeedbackMessageDialogrefComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.autosize = _t.first);
      }
    },
    decls: 5,
    vars: 9,
    consts: [["fxLayout", "column", 3, "ngStyle"], [2, "text-align", "center", "margin", "15px"], [2, "margin", "15px", 3, "innerHTML"]],
    template: function FeedbackMessageDialogrefComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c1, ctx.data.width, ctx.data.height));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 3, ctx.data.date, "medium"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__.DefaultStyleDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
    styles: ["[_nghost-%COMP%] {\n  opacity: 1;\n  border-radius: 8px;\n  padding: 8px 16px;\n  animation: _ngcontent-%COMP%_custom-dialog-enter 1s ease;\n}\n\n@keyframes _ngcontent-%COMP%_custom-dialog-enter {\n  from {\n    transform: scale(0) rotate(360deg);\n  }\n  to {\n    transform: none;\n  }\n}\n.circle[_ngcontent-%COMP%] {\n  border: 5px solid #e1e1e1;\n  border-radius: 100%;\n  position: relative;\n}\n\n.circle-handle[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 100%;\n  background-color: #686868;\n  cursor: -webkit-grab;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGlhbG9ncmVmL2ZlZWRiYWNrLW1lc3NhZ2UvZmVlZGJhY2stbWVzc2FnZS1kaWFsb2dyZWYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNDQUFBO0FBQUY7O0FBR0E7RUFDRTtJQUNFLGtDQUFBO0VBQUY7RUFHQTtJQUNFLGVBQUE7RUFERjtBQUNGO0FBSUE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsdURBQUE7RUFDQSwrR0FBQTtBQUZGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC8vZGlzcGxheTogYmxvY2s7XHJcbiAgb3BhY2l0eTogMTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgYW5pbWF0aW9uOiBjdXN0b20tZGlhbG9nLWVudGVyIDFzIGVhc2U7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgY3VzdG9tLWRpYWxvZy1lbnRlciB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmNpcmNsZSB7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgI2UxZTFlMTtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNpcmNsZS1oYW5kbGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ODY4Njg7XHJcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAgICAgICAgICAgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 8106:
/*!********************************************************************!*\
  !*** ./src/app/dialogref/feedback/feedback-dialogref.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FeedbackDialogrefComponent: () => (/* binding */ FeedbackDialogrefComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5356);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ 7520);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/text-field */ 5802);










const _c0 = ["autosize"];
const _c1 = () => ({
  "width.px": 100,
  "height.px": 100,
  "margin.vh": 3
});
function FeedbackDialogrefComponent_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 8);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1))("src", "data:Image/*;base64," + ctx_r0.data.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
const _c2 = (a0, a1) => ({
  "width": a0,
  "height": a1
});
const _c3 = () => ({
  "margin.px": 10,
  "font-size": 16,
  "fontFamily": "Roboto",
  "color": "black"
});
class FeedbackDialogrefComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.text = "";
    this.areaText = "Форма для связи. <br> Здесь Вы можете также оставить свой заказ.";
  }
  onSubmit() {
    this.dialogRef.close(this.text);
  }
  static #_ = this.ɵfac = function FeedbackDialogrefComponent_Factory(t) {
    return new (t || FeedbackDialogrefComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FeedbackDialogrefComponent,
    selectors: [["app-feedback-dialogref"]],
    viewQuery: function FeedbackDialogrefComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.autosize = _t.first);
      }
    },
    decls: 10,
    vars: 11,
    consts: [["fxLayout", "column", 3, "ngStyle"], ["fxLayout", "row"], ["class", "circle", 3, "ngStyle", "src", 4, "ngIf"], [2, "text-align", "center", "margin", "15px", 3, "innerHTML"], ["matInput", "", "fxFlex", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "10", "cdkAutosizeMaxRows", "30", 3, "ngModel", "ngStyle", "value", "ngModelChange"], ["autosize", "cdkTextareaAutosize"], [1, "login-button", 2, "align-self", "center"], ["mat-raised-button", "", "buttonsNavigable", "", 2, "margin", "10px", 3, "disabled", "click"], [1, "circle", 3, "ngStyle", "src"]],
    template: function FeedbackDialogrefComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FeedbackDialogrefComponent_img_2_Template, 1, 3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FeedbackDialogrefComponent_Template_textarea_ngModelChange_4_listener($event) {
          return ctx.text = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6)(8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FeedbackDialogrefComponent_Template_button_click_8_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c2, ctx.data.width, ctx.data.height));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.avatar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.areaText, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.text)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c3))("value", ctx.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.text.length == 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__.DefaultStyleDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_8__.CdkTextareaAutosize],
    styles: ["[_nghost-%COMP%] {\n  opacity: 1;\n  border-radius: 8px;\n  padding: 8px 16px;\n  animation: _ngcontent-%COMP%_custom-dialog-enter 1s ease;\n}\n\n@keyframes _ngcontent-%COMP%_custom-dialog-enter {\n  from {\n    transform: scale(0) rotate(360deg);\n  }\n  to {\n    transform: none;\n  }\n}\n.circle[_ngcontent-%COMP%] {\n  border: 5px solid #e1e1e1;\n  border-radius: 100%;\n  position: relative;\n}\n\n.circle-handle[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 100%;\n  background-color: #686868;\n  cursor: -webkit-grab;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGlhbG9ncmVmL2ZlZWRiYWNrL2ZlZWRiYWNrLWRpYWxvZ3JlZi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0NBQUE7QUFBRjs7QUFHQTtFQUNFO0lBQ0Usa0NBQUE7RUFBRjtFQUdBO0lBQ0UsZUFBQTtFQURGO0FBQ0Y7QUFJQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1REFBQTtFQUNBLCtHQUFBO0FBRkYiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLy9kaXNwbGF5OiBibG9jaztcclxuICBvcGFjaXR5OiAxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICBhbmltYXRpb246IGN1c3RvbS1kaWFsb2ctZW50ZXIgMXMgZWFzZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBjdXN0b20tZGlhbG9nLWVudGVyIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uY2lyY2xlIHtcclxuICBib3JkZXI6IDVweCBzb2xpZCAjZTFlMWUxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2lyY2xlLWhhbmRsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY4Njg2ODtcclxuICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDIwMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgICAgICAgICAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgICAgICAgICAgIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8624:
/*!**********************************************************************!*\
  !*** ./src/app/dialogref/menu-item/menu-item-dialogref.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuItemDialogrefComponent: () => (/* binding */ MenuItemDialogrefComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ 6658);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 1333);










function MenuItemDialogrefComponent_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class MenuItemDialogrefComponent {
  constructor(formBuilder, dialogRef, data) {
    this.formBuilder = formBuilder;
    this.dialogRef = dialogRef;
    this.data = data;
    this.createForm();
  }
  isDisabled() {
    return this.data.name === this.menuItemForm.value.name && this.data.isActive === this.menuItemForm.value.isActive || this.menuItemForm.pristine;
  }
  onSubmit() {
    if (this.menuItemForm.valid) {
      if (this.menuItemForm.controls.isActive.value === undefined) this.menuItemForm.value.isActive = false;
      this.dialogRef.close(this.menuItemForm.value);
    }
  }
  createForm() {
    this.menuItemForm = this.formBuilder.group({
      isActive: [this.data.isActive ? true : false],
      name: [this.data.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]]
    });
  }
  static #_ = this.ɵfac = function MenuItemDialogrefComponent_Factory(t) {
    return new (t || MenuItemDialogrefComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MenuItemDialogrefComponent,
    selectors: [["app-menu-item-dialogref"]],
    decls: 10,
    vars: 3,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1003465719456735786$$SRC_APP_DIALOGREF_MENU_ITEM_MENU_ITEM_DIALOGREF_COMPONENT_TS_1 = goog.getMsg(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ");
        i18n_0 = MSG_EXTERNAL_1003465719456735786$$SRC_APP_DIALOGREF_MENU_ITEM_MENU_ITEM_DIALOGREF_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize` Сохранить `;
      }
      return [[1, "menu-form", 3, "formGroup", "ngSubmit"], ["appearance", "outline", "color", "accent", 2, "display", "flex", "flex-direction", "column", "margin", "10px"], ["type", "name", "placeholder", "Name", "required", "", "formControlName", "name", "matInput", ""], [4, "ngIf"], ["formControlName", "isActive", 1, "menu-form__helpers"], ["type", "button", "mat-raised-button", "", "color", "grey", 1, "menu-form__submit", "mat-elevation-z12", 3, "disabled", "click"], i18n_0];
    },
    template: function MenuItemDialogrefComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MenuItemDialogrefComponent_Template_form_ngSubmit_0_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MenuItemDialogrefComponent_mat_error_5_Template, 2, 0, "mat-error", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-checkbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuItemDialogrefComponent_Template_button_click_8_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](9, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.menuItemForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menuItemForm.controls.name.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__.MatCheckbox, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3802:
/*!*********************************************!*\
  !*** ./src/app/dragdrop/drag.directives.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DragDirective: () => (/* binding */ DragDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);



class DragDirective {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
    this.files = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.background = "#eee";
  }
  onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = "#999";
  }
  onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = "#eee";
  }
  onDrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';
    let files = [];
    for (let i = 0; i < evt.dataTransfer.files?.length; i++) {
      const file = evt.dataTransfer.files[i];
      const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
      files.push({
        file,
        url
      });
    }
    if (files.length > 0) {
      this.files.emit(files);
    }
  }
  static #_ = this.ɵfac = function DragDirective_Factory(t) {
    return new (t || DragDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: DragDirective,
    selectors: [["", "appDragDrop", ""]],
    hostVars: 2,
    hostBindings: function DragDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragover", function DragDirective_dragover_HostBindingHandler($event) {
          return ctx.onDragOver($event);
        })("dragleave", function DragDirective_dragleave_HostBindingHandler($event) {
          return ctx.onDragLeave($event);
        })("drop", function DragDirective_drop_HostBindingHandler($event) {
          return ctx.onDrop($event);
        });
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.background);
      }
    },
    outputs: {
      files: "files"
    }
  });
}

/***/ }),

/***/ 1944:
/*!************************************!*\
  !*** ./src/app/globalConstants.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalConstants: () => (/* binding */ GlobalConstants)
/* harmony export */ });
class GlobalConstants {
  static #_ = this.fonts = {
    "Arbor": "Arbor",
    "AmaticSC": "AmaticSC",
    "AmaticSC Bold": "AmaticSC-Bold",
    "BadScript": "BadScript",
    "Caveat": "Caveat",
    "Caveat Medium": "Caveat-Medium",
    "Caveat Bold": "Caveat-Bold",
    "Comfortaa": "Comfortaa",
    "Comfortaa Medium": "Comfortaa-Medium",
    "Comfortaa Bold": "Comfortaa-Bold",
    "Comforter": "Comforter",
    "CormorantGaramond": "CormorantGaramond",
    "CormorantGaramond Italic": "CormorantGaramond-Italic",
    "CormorantGaramond Medium": "CormorantGaramond-Medium",
    "CormorantGaramond Bold": "CormorantGaramond-Bold",
    "CormorantGaramond Bold Italic": "CormorantGaramond-BoldItalic",
    "CormorantInfant": "CormorantInfant",
    "CormorantInfant Italic": "CormorantInfant-Italic",
    "CormorantInfant Medium": "CormorantInfant-Medium",
    "CormorantInfant Bold": "CormorantInfant-Bold",
    "CormorantInfant Bold Italic": "CormorantInfant-BoldItalic",
    "Honk": "Honk",
    "Inter": "Inter",
    "Inter Medium": "Inter-Medium",
    "Inter Bold": "Inter-Bold",
    "Inter Black": "Inter-Black",
    "Inter Thin": "Inter-Thin",
    "Kablammo": "Kablammo",
    "Lobster": "Lobster",
    "MarckScript": "MarckScript",
    "Merriweather": "Merriweather",
    "Merriweather Italic": "Merriweather-Italic",
    "Merriweather Bold": "Merriweather-Bold",
    "Merriweather Bold Italic": "Merriweather-BoldItalic",
    "Merriweather Black": "Merriweather-Black",
    "MontserratAlternates": "MontserratAlternates",
    "MontserratAlternates Italic": "MontserratAlternates-Italic",
    "MontserratAlternates Medium": "MontserratAlternates-Medium",
    "MontserratAlternates Thin": "MontserratAlternates-Thin",
    "MontserratAlternates Bold": "MontserratAlternates-Bold",
    "MontserratAlternates Bold Italic": "MontserratAlternates-BoldItalic",
    "MontserratAlternates Black": "MontserratAlternates-Black",
    "Roboto": "Roboto",
    "Roboto Italic": "Roboto-Italic",
    "Roboto Bold": "'Roboto-Bold",
    "Roboto Bold Italic": "Roboto-BoldItalic"
  };
  static #_2 = this.fontSizes = ["8px", "10px", "12px", "14px", "16px", "18px", "20px", "22px", "24px", "26px", "28px", "30px", "32px", "34px", "36px", "38px", "40px", "50px", "60px", "70px", "80px", "90px", "100px", "150", "200", "250", "300", "350", "400"];
}

/***/ }),

/***/ 2703:
/*!******************************************!*\
  !*** ./src/app/material/images/icons.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  subFolder: '/icons',
  imagesList: [{
    name: 'question-circle-outlined',
    size: '0 0 24 24'
  }, {
    name: 'close',
    size: '0 0 14 14'
  }, {
    name: 'close-bounds',
    size: '0 0 24 24'
  }, {
    name: 'back-to-top',
    size: '0 0 16 16'
  }, {
    name: 'navigate_before',
    size: '0 0 12 8'
  }, {
    name: 'close-circle-o',
    size: '0 0 24 24'
  }, {
    name: 'search',
    size: '0 0 24 24'
  }, {
    name: 'check',
    size: '0 0 19 16'
  }, {
    name: 'check-status',
    size: '0 0 44 32'
  }, {
    name: 'arrow-sort-down',
    size: '0 0 12 13'
  }, {
    name: 'paginate_next',
    size: '0 0 24 24'
  }, {
    name: 'paginate_first',
    size: '0 0 24 24'
  }, {
    name: 'paginate_before',
    size: '0 0 24 24'
  }, {
    name: 'paginate_last',
    size: '0 0 24 24'
  }, {
    name: 'paginate_down',
    size: '0 0 24 24'
  }, {
    name: 'info_outline',
    size: '0 0 16 16'
  }, {
    name: 'trend_flat',
    size: '0 0 27 32'
  }, {
    name: 'trend_positive',
    size: '0 0 24 28'
  }, {
    name: 'trend_negative',
    size: '0 0 26 28'
  }, {
    name: 'video',
    size: '0 0 24 24'
  }, {
    name: 'top',
    size: '0 0 67 18'
  }, {
    name: 'location',
    size: '0 0 20 20'
  }, {
    name: 'phone-small',
    size: '0 0 20 20'
  }, {
    name: 'web-small',
    size: '0 0 20 20'
  }, {
    name: 'round-person',
    size: '0 0 20 20'
  }, {
    name: 'error-validation',
    size: '0 0 144 130'
  }, {
    name: 'open-ac',
    size: '0 0 24 24'
  }, {
    name: 'close-ac',
    size: '0 0 16 16'
  }, {
    name: 'circle',
    size: '0 0 9 9'
  }, {
    name: 'round',
    size: '0 0 20 20'
  }, {
    name: 'round-filled',
    size: '0 0 20 20'
  }, {
    name: 'checkbox',
    size: '0 0 18 18'
  }, {
    name: 'user',
    size: '0 0 21 21'
  }, {
    name: 'password',
    size: '0 0 24 24'
  }, {
    name: 'visibility',
    size: '0 0 24 24'
  }, {
    name: 'visibility-off',
    size: '0 0 24 24'
  }, {
    name: 'datepicker',
    size: '0 0 16 16'
  }, {
    name: 'mail',
    size: '0 0 24 24'
  }, {
    name: 'mail-sm',
    size: '0 0 18 16'
  }, {
    name: 'arrow-long--left',
    size: '0 0 32 32'
  }, {
    name: 'calculator',
    size: '0 0 14 18'
  }, {
    name: 'error',
    size: '0 0 24 24'
  }, {
    name: 'warn',
    size: '0 0 24 24'
  }, {
    name: 'file-ppt',
    size: '0 0 24 25'
  }, {
    name: 'file-pdf',
    size: '0 0 24 24'
  }, {
    name: 'external-link',
    size: '0 0 24 24'
  }, {
    name: 'check-circle',
    size: '0 0 24 24'
  }, {
    name: 'refresh',
    size: '0 0 24 24'
  }, {
    name: 'exclefile',
    size: '0 0 24 24'
  }, {
    name: 'logout',
    size: '0 0 20 20'
  }, {
    name: 'report',
    size: '0 0 20 20'
  }, {
    name: 'settings',
    size: '0 0 24 24'
  }, {
    name: 'settings-horizontal',
    size: '0 0 20 20'
  }, {
    name: 'description',
    size: '0 0 24 25'
  }, {
    name: 'add_circle-o',
    size: '0 0 24 24'
  }, {
    name: 'status-suspended',
    size: '0 0 16 16'
  }, {
    name: 'remove-circle',
    size: '0 0 16 16'
  }, {
    name: 'edit',
    size: '0 0 24 24'
  }, {
    name: 'more',
    size: '0 0 24 24'
  }, {
    name: 'file-csv',
    size: '0 0 24 24'
  }, {
    name: 'image',
    size: '0 0 120 120'
  }]
});

/***/ }),

/***/ 6889:
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialModule: () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/cdk/a11y */ 3170);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/cdk/overlay */ 2698);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ 3274);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/cdk/portal */ 3517);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button-toggle */ 727);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ 6658);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ 1757);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ 2226);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ 8060);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-spinner */ 3910);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/radio */ 2106);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/slide-toggle */ 9293);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/sort */ 7963);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/stepper */ 6272);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tabs */ 989);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var _material_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material.service */ 218);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/autocomplete */ 9892);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/grid-list */ 647);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ 3228);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-bar */ 8173);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ 5249);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slider */ 549);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7792);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/cdk/scrolling */ 275);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/core */ 1699);























// import { AppDateAdapter } from './date-adapter';



















// import { MaterialFileInputModule } from 'ngx-material-file-input';
const materialModules = [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.PlatformModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.FlexLayoutModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__.MatAutocompleteModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__.MatChipsModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_17__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__.MatSortModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__.MatStepperModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__.MatTooltipModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__.MatFormFieldModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDividerModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_36__.ScrollingModule];
const cdkModules = [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_37__.A11yModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_38__.PortalModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__.OverlayModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_40__.DragDropModule];
class MaterialModule {
  static #_ = this.ɵfac = function MaterialModule_Factory(t) {
    return new (t || MaterialModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_41__["ɵɵdefineNgModule"]({
    type: MaterialModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_41__["ɵɵdefineInjector"]({
    providers: [_material_service__WEBPACK_IMPORTED_MODULE_0__.MaterialService, {
      provide: _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__.MAT_CHECKBOX_DEFAULT_OPTIONS,
      useValue: {
        color: 'primary'
      }
    }, {
      provide: _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__.MAT_TOOLTIP_DEFAULT_OPTIONS,
      useValue: {
        position: 'above'
      }
    },
    // {
    //   provide: MAT_DIALOG_DEFAULT_OPTIONS,
    //   useValue: {
    //     closeOnNavigation: true,
    //     disableClose: false,
    //     hasBackdrop: false, //true,
    //     // maxHeight: '650px',
    //     // width: '624px',
    //   } as MatDialogConfig,
    // },
    // {
    //   provide: DateAdapter,
    //   useClass: AppDateAdapter,
    // },
    // {
    //   provide: MatDialogRef,
    //   useValue: {} ,
    // },
    {
      provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MAT_DATE_FORMATS,
      useValue: {
        parse: {
          dateInput: {
            month: 'long',
            year: 'numeric',
            day: 'numeric'
          }
        },
        display: {
          dateInput: 'input',
          monthYearLabel: 'MMM yyyy',
          // dateA11yLabel: AppDateAdapter.pattern,
          monthYearA11yLabel: 'MMMM yyyy'
        }
      }
    }],
    imports: [materialModules, cdkModules, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.PlatformModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.FlexLayoutModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__.MatAutocompleteModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__.MatChipsModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_17__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__.MatSortModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__.MatStepperModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__.MatTooltipModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__.MatFormFieldModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDividerModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_36__.ScrollingModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_37__.A11yModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_38__.PortalModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__.OverlayModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_40__.DragDropModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_41__["ɵɵsetNgModuleScope"](MaterialModule, {
    imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.PlatformModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.FlexLayoutModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__.MatAutocompleteModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__.MatChipsModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_17__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__.MatSortModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__.MatStepperModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__.MatTooltipModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__.MatFormFieldModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDividerModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_36__.ScrollingModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_37__.A11yModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_38__.PortalModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__.OverlayModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_40__.DragDropModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule],
    exports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.PlatformModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.FlexLayoutModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__.MatAutocompleteModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__.MatChipsModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_17__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_20__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_26__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__.MatSortModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__.MatStepperModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_31__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_32__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_33__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_34__.MatTooltipModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_35__.MatFormFieldModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDividerModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_36__.ScrollingModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_37__.A11yModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_38__.PortalModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__.OverlayModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_40__.DragDropModule]
  });
})();

/***/ }),

/***/ 218:
/*!**********************************************!*\
  !*** ./src/app/material/material.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MaterialService: () => (/* binding */ MaterialService)
/* harmony export */ });
/* harmony import */ var _images_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/icons */ 2703);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
// Image folders




// import headerOpportunities from './images/header-opportunities';
class MaterialService {
  constructor(matIconRegistry, domSanitizer) {
    this.matIconRegistry = matIconRegistry;
    this.domSanitizer = domSanitizer;
    this.imageFolders = [_images_icons__WEBPACK_IMPORTED_MODULE_0__["default"]]; //, headerOpportunities];
  }

  initCustomIcons() {
    this.loadIcons(this.imageFolders, '/assets/images');
  }
  loadIcons(imageFolders, baseUrl) {
    for (const imageFolder of imageFolders) {
      const {
        imagesList,
        subFolder
      } = imageFolder;
      imagesList.forEach(image => {
        const {
          name,
          size = '0 0 24 24'
        } = image;
        const imageUrl = `${baseUrl}${subFolder}/${name}.svg`;
        const url = this.domSanitizer.bypassSecurityTrustResourceUrl(imageUrl);
        this.matIconRegistry.addSvgIcon(name, url, {
          viewBox: size
        });
      });
    }
  }
  static #_ = this.ɵfac = function MaterialService_Factory(t) {
    return new (t || MaterialService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: MaterialService,
    factory: MaterialService.ɵfac
  });
}

/***/ }),

/***/ 6916:
/*!*********************************!*\
  !*** ./src/app/models/alert.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Alert: () => (/* binding */ Alert),
/* harmony export */   AlertOptions: () => (/* binding */ AlertOptions),
/* harmony export */   AlertType: () => (/* binding */ AlertType)
/* harmony export */ });
class Alert {
  constructor(init) {
    Object.assign(this, init);
  }
}
var AlertType;
(function (AlertType) {
  AlertType[AlertType["Success"] = 0] = "Success";
  AlertType[AlertType["Error"] = 1] = "Error";
  AlertType[AlertType["Info"] = 2] = "Info";
  AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));
class AlertOptions {}

/***/ }),

/***/ 7230:
/*!*************************************!*\
  !*** ./src/app/models/api.model.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiOptions: () => (/* binding */ ApiOptions)
/* harmony export */ });
class ApiOptions {}

/***/ }),

/***/ 4724:
/*!*******************************************!*\
  !*** ./src/app/models/mydetails.model.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fontStyleWeight: () => (/* binding */ fontStyleWeight)
/* harmony export */ });
var fontStyleWeight;
(function (fontStyleWeight) {
  fontStyleWeight[fontStyleWeight["regular"] = 0] = "regular";
  fontStyleWeight[fontStyleWeight["bold"] = 1] = "bold";
  fontStyleWeight[fontStyleWeight["italic"] = 2] = "italic";
  fontStyleWeight[fontStyleWeight["boldItalic"] = 3] = "boldItalic";
})(fontStyleWeight || (fontStyleWeight = {}));

/***/ }),

/***/ 5783:
/*!**************************************!*\
  !*** ./src/app/models/page.model.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Page: () => (/* binding */ Page)
/* harmony export */ });
class Page {
  constructor() {
    this.pageNumber = 0;
    this.pageSize = 30;
  }
}

/***/ }),

/***/ 351:
/*!*******************************************!*\
  !*** ./src/app/models/watermark.model.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fontStyleWeight: () => (/* binding */ fontStyleWeight)
/* harmony export */ });
var fontStyleWeight;
(function (fontStyleWeight) {
  fontStyleWeight[fontStyleWeight["regular"] = 0] = "regular";
  fontStyleWeight[fontStyleWeight["bold"] = 1] = "bold";
  fontStyleWeight[fontStyleWeight["italic"] = 2] = "italic";
  fontStyleWeight[fontStyleWeight["boldItalic"] = 3] = "boldItalic";
})(fontStyleWeight || (fontStyleWeight = {}));

/***/ }),

/***/ 8827:
/*!***********************************************************!*\
  !*** ./src/app/modules/account/account-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountRoutingModule: () => (/* binding */ AccountRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account.component */ 6567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




const routes = [{
  path: '',
  component: _account_component__WEBPACK_IMPORTED_MODULE_0__.AccountComponent,
  children: [
    // {
    //   path: 'sign-in',
    //    // component: SignInFormComponent,
    //   component: SignInComponent,
    // },
    // {
    //   path: 'user-profile',
    //   component: UserProfileComponent,
    // }       
  ]
}];
class AccountRoutingModule {
  static #_ = this.ɵfac = function AccountRoutingModule_Factory(t) {
    return new (t || AccountRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AccountRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AccountRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6567:
/*!******************************************************!*\
  !*** ./src/app/modules/account/account.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountComponent: () => (/* binding */ AccountComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class AccountComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function AccountComponent_Factory(t) {
    return new (t || AccountComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AccountComponent,
    selectors: [["app-account"]],
    decls: 1,
    vars: 0,
    template: function AccountComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 475:
/*!***************************************************!*\
  !*** ./src/app/modules/account/account.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountModule: () => (/* binding */ AccountModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-routing.module */ 8827);
/* harmony import */ var _account_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account.component */ 6567);
/* harmony import */ var _modules_validation_validation_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/validation/validation-error.component */ 2340);
/* harmony import */ var _modules_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/sign-in/sign-in.component */ 2033);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../material/material.module */ 6889);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var _modules_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/user-profile/user-profile.component */ 4038);
/* harmony import */ var _pipes_users_pipi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/users.pipi */ 4432);
/* harmony import */ var _modules_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/register/register.component */ 8300);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);












class AccountModule {
  static #_ = this.ɵfac = function AccountModule_Factory(t) {
    return new (t || AccountModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: AccountModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_account_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _material_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AccountModule, {
    declarations: [_account_component__WEBPACK_IMPORTED_MODULE_1__.AccountComponent, _modules_validation_validation_error_component__WEBPACK_IMPORTED_MODULE_2__.ValidationErrorComponent, _modules_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__.SignInComponent, _modules_register_register_component__WEBPACK_IMPORTED_MODULE_7__.RegisterComponent, _modules_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__.UserProfileComponent, _pipes_users_pipi__WEBPACK_IMPORTED_MODULE_6__.UsersPipe],
    imports: [_account_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountRoutingModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _material_material_module__WEBPACK_IMPORTED_MODULE_4__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerModule],
    exports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _modules_validation_validation_error_component__WEBPACK_IMPORTED_MODULE_2__.ValidationErrorComponent, _modules_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__.UserProfileComponent]
  });
})();

/***/ }),

/***/ 6992:
/*!****************************************************!*\
  !*** ./src/app/modules/account/account.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountService: () => (/* binding */ AccountService)
/* harmony export */ });
/* harmony import */ var E_EVA_EZ_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 331);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 3738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 1891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var _services_user_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.store */ 2361);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ 9045);
/* harmony import */ var _core_utils_storage_interfaces_local_storage_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/utils/storage/interfaces/local-storage.interface */ 5926);
/* harmony import */ var _alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../alert/alert.service */ 8479);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ 3076);











class AccountService {
  constructor(router, apiService, _localStorage, alertService, userService, userStore) {
    this.router = router;
    this.apiService = apiService;
    this._localStorage = _localStorage;
    this.alertService = alertService;
    this.userService = userService;
    this.userStore = userStore;
    this.isSignedIn = new rxjs__WEBPACK_IMPORTED_MODULE_6__.BehaviorSubject(false);
    this.isSignedIn$ = this.isSignedIn.asObservable();
    if (this._localStorage.getItem("id_token")) {
      this.isSignedIn.next(true);
      setTimeout(() => {
        this.userService.isAdmin().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(isAdmin => {
          this.userStore.setRole(isAdmin ? _services_user_store__WEBPACK_IMPORTED_MODULE_1__.UserRole.ADMIN : _services_user_store__WEBPACK_IMPORTED_MODULE_1__.UserRole.USER);
        })).subscribe();
      }, 0);
    } else {
      this.isSignedIn.next(false);
    }
  }
  signIn(form) {
    var _this = this;
    this.alertService.clear();
    return this.apiService.post('login', form).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(res => {
      this._localStorage.setItem('id_token', res.accessToken);
      this.router.navigateByUrl('/');
      this.isSignedIn.next(true);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)( /*#__PURE__*/function () {
      var _ref = (0,E_EVA_EZ_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
        _this.alertService.error(err.message);
        _this.isSignedIn.next(false);
        _this.userStore.clearRole();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(null);
        //return throwError(() => err);
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(() => {
      return this._localStorage.getItem('id_token') ? this.userService.isAdmin().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(isAdmin => {
        this.userStore.setRole(isAdmin ? _services_user_store__WEBPACK_IMPORTED_MODULE_1__.UserRole.ADMIN : _services_user_store__WEBPACK_IMPORTED_MODULE_1__.UserRole.USER);
      })) : (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(null);
    }));
  }
  signOut() {
    var _this2 = this;
    return (0,E_EVA_EZ_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.alertService.clear();
      _this2.isSignedIn.next(false);
      _this2.userStore.clearRole();
      return yield (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.firstValueFrom)(_this2.apiService.post('logout', {}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(res => {
        _this2._localStorage.removeItem("id_token");
        _this2.alertService.info(res);
        _this2.router.navigate(['/']);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(() => true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)( /*#__PURE__*/function () {
        var _ref2 = (0,E_EVA_EZ_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
          _this2._localStorage.removeItem("id_token");
          _this2.alertService.error(err.message ?? ' ');
        });
        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }())));
    })();
  }
  register(form) {
    var _this3 = this;
    this.alertService.clear();
    return this.apiService.post('register', form).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(res => {
      this.alertService.info(res);
      this.router.navigateByUrl('/');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(result => result), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)( /*#__PURE__*/function () {
      var _ref3 = (0,E_EVA_EZ_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
        return _this3.alertService.error(err.message);
      });
      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()));
  }
  restorePassword(form) {
    var _this4 = this;
    this.alertService.clear();
    return this.apiService.post('restore', form).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(res => {
      this.alertService.info(res);
      this.router.navigateByUrl('/');
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)( /*#__PURE__*/function () {
      var _ref4 = (0,E_EVA_EZ_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
        return _this4.alertService.error(err.message);
      });
      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }()));
  }
  getProfile() {
    var _this5 = this;
    this.alertService.clear();
    return this.apiService.get('users').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(res => {
      this.alertService.info(res);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(data => data.items), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)( /*#__PURE__*/function () {
      var _ref5 = (0,E_EVA_EZ_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
        return _this5.alertService.error(err.message);
      });
      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }()));
  }
  sendFeedback(feedback) {
    var _this6 = this;
    return this.apiService.post('feedback', feedback).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(res => {
      return res;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)( /*#__PURE__*/function () {
      var _ref6 = (0,E_EVA_EZ_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
        return _this6.alertService.error(err.message);
      });
      return function (_x6) {
        return _ref6.apply(this, arguments);
      };
    }()));
  }
  getFeedback() {
    var _this7 = this;
    return this.apiService.get('feedback').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(res => {
      this.alertService.info(res);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(data => data.items), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)( /*#__PURE__*/function () {
      var _ref7 = (0,E_EVA_EZ_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
        return _this7.alertService.error(err.message);
      });
      return function (_x7) {
        return _ref7.apply(this, arguments);
      };
    }()));
  }
  sendMyDetails(details) {
    var _this8 = this;
    return this.apiService.post('mydetails', details).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(res => {
      return res;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)( /*#__PURE__*/function () {
      var _ref8 = (0,E_EVA_EZ_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
        return _this8.alertService.error(err.message);
      });
      return function (_x8) {
        return _ref8.apply(this, arguments);
      };
    }()));
  }
  getMyDetails() {
    var _this9 = this;
    return this.apiService.get('mydetails').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(res => {
      this.alertService.info(res);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(data => data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)( /*#__PURE__*/function () {
      var _ref9 = (0,E_EVA_EZ_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
        return _this9.alertService.error(err.message);
      });
      return function (_x9) {
        return _ref9.apply(this, arguments);
      };
    }()));
  }
  saveNewsletter(newsletter) {
    var _this10 = this;
    return this.apiService.post('newsletter', newsletter).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(res => {
      return res;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)( /*#__PURE__*/function () {
      var _ref10 = (0,E_EVA_EZ_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
        return _this10.alertService.error(err.message);
      });
      return function (_x10) {
        return _ref10.apply(this, arguments);
      };
    }()));
  }
  getMNewsletter() {
    var _this11 = this;
    return this.apiService.get('newsletter').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(res => {
      this.alertService.info(res);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(data => data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)( /*#__PURE__*/function () {
      var _ref11 = (0,E_EVA_EZ_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
        return _this11.alertService.error(err.message);
      });
      return function (_x11) {
        return _ref11.apply(this, arguments);
      };
    }()));
  }
  getSubscribers() {
    var _this12 = this;
    return this.apiService.get('subscribers').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(res => {
      this.alertService.info(res);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.map)(data => data.subscribed), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.catchError)( /*#__PURE__*/function () {
      var _ref12 = (0,E_EVA_EZ_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (err) {
        return _this12.alertService.error(err.message);
      });
      return function (_x12) {
        return _ref12.apply(this, arguments);
      };
    }()));
  }
  static #_ = this.ɵfac = function AccountService_Factory(t) {
    return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_core_utils_storage_interfaces_local_storage_interface__WEBPACK_IMPORTED_MODULE_3__.LocalStorage), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵinject"](_services_user_store__WEBPACK_IMPORTED_MODULE_1__.UserStore));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjectable"]({
    token: AccountService,
    factory: AccountService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8300:
/*!************************************************************************!*\
  !*** ./src/app/modules/account/modules/register/register.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5356);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ 702);











function RegisterComponent_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_mat_error_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0414\u043B\u0438\u043D\u0430 \u043F\u0430\u0440\u043E\u043B\u044F \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 8 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_mat_error_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class RegisterComponent {
  constructor(formBuilder, dialogRef) {
    this.formBuilder = formBuilder;
    this.dialogRef = dialogRef;
    this.hidePass = true;
    this.imgUrl = "assets/images/palete.gif";
    this._createForm();
  }
  get _email() {
    return this.signInForm.get('email');
  }
  get _password() {
    return this.signInForm.get('password');
  }
  get _name() {
    return this.signInForm.get('name');
  }
  get _familyName() {
    return this.signInForm.get('familyName');
  }
  onRegister() {
    this._name.enable();
    this.signInForm.markAllAsTouched();
    if (this.signInForm.valid) {
      this.dialogRef.close(this.signInForm.value);
    }
  }
  _createForm() {
    this.signInForm = this.formBuilder.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
      familyName: ['']
    });
  }
  static #_ = this.ɵfac = function RegisterComponent_Factory(t) {
    return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: RegisterComponent,
    selectors: [["app-register"]],
    decls: 32,
    vars: 14,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7004996334508163737$$SRC_APP_MODULES_ACCOUNT_MODULES_REGISTER_REGISTER_COMPONENT_TS_1 = goog.getMsg("{$startParagraph}\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F{$closeParagraph}", {
          "closeParagraph": "\uFFFD/#30\uFFFD",
          "startParagraph": "\uFFFD#30\uFFFD"
        }, {
          original_code: {
            "closeParagraph": "</p>",
            "startParagraph": "<p style=\"margin-top: 30px; color: white; font-weight: bold; font-size: 18px;\">"
          }
        });
        i18n_0 = MSG_EXTERNAL_7004996334508163737$$SRC_APP_MODULES_ACCOUNT_MODULES_REGISTER_REGISTER_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`${"\uFFFD#30\uFFFD"}:START_PARAGRAPH:Регистрация${"\uFFFD/#30\uFFFD"}:CLOSE_PARAGRAPH:`;
      }
      return [[2, "display", "flex", "flex-direction", "column"], ["fxLayout", "column", "fxLayoutAlign", "center", 1, "sign-in-form", 3, "formGroup", "ngSubmit"], [2, "padding-top", "300px"], ["appearance", "outline", "color", "accent", 2, "display", "flex", "flex-direction", "column", "margin-left", "145px", "width", "370px", "background-color", "rgb(231, 231, 110)", "; \n          border-radius", "25px 25px 25px 25px"], ["matPrefix", "", "svgIcon", "mail-sm", 1, "sign-in-form__email-icon", "mat-icon-stroke"], ["type", "email", "placeholder", "email", "required", "", "matInput", "", "formControlName", "email", 2, "border-radius", "0px 15px 0px 15px", "background-color", "rgb(231, 231, 110)"], [4, "ngIf"], ["appearance", "outline", "color", "accent", 2, "display", "flex", "flex-direction", "column", "margin-left", "100px", "margin-top", "10px", "width", "370px", "background-color", "rgb(231, 231, 110)", "border-radius", "25px 25px 25px 25px"], ["matPrefix", "", "svgIcon", "password", 1, "sign-in-form__email-icon", "mat-icon-stroke"], ["placeholder", "\u041F\u0430\u0440\u043E\u043B\u044C", "required", "", "minlength", "8", "matInput", "", "formControlName", "password", 2, "background-color", "rgb(231, 231, 110)", 3, "type"], ["type", "button", "mat-icon-button", "", "matSuffix", "", 3, "matTooltip", "click"], ["aria-hidden", "false", "matPrefix", "", 1, "sign-in-form__visibility-icon", "mat-icon-stroke", 3, "svgIcon"], ["appearance", "outline", "color", "accent", 2, "display", "flex", "flex-direction", "column", "margin-left", "80px", "margin-top", "10px", "width", "370px", "background-color", "rgb(231, 231, 110)", "border-radius", "25px 25px 25px 25px"], ["type", "name", "placeholder", "\u0418\u043C\u044F", "required", "", "formControlName", "name", "matInput", "", 2, "background-color", "rgb(231, 231, 110)"], ["appearance", "outline", "color", "accent", 2, "display", "flex", "flex-direction", "column", "margin-left", "145px", "margin-top", "10px", "width", "370px", "background-color", "rgb(231, 231, 110)", "border-radius", "25px 25px 25px 25px"], ["type", "familyName", "placeholder", "\u0424\u0430\u043C\u0438\u043B\u0438\u044F", "matInput", "", "formControlName", "familyName", 2, "background-color", "rgb(231, 231, 110)"], [2, "margin-top", "-15px", "margin-right", "30px"], ["type", "button", "mat-raised-button", "", "color", "grey", 1, "sign-in-form__register", "mat-elevation-z10", 2, "width", "160px", "height", "118px", "background-color", "transparent", "border-radius", "110px 30px 90px 60px", 3, "click"], i18n_0, [2, "margin-top", "30px", "color", "white", "font-weight", "bold", "font-size", "18px"], [2, "margin-top", "50px"]];
    },
    template: function RegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_1_listener() {
          return ctx.onRegister();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-icon", 4)(5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RegisterComponent_mat_error_8_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-icon", 8)(11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_12_listener() {
          return ctx.hidePass = !ctx.hidePass;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u041F\u0430\u0440\u043E\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RegisterComponent_mat_error_16_Template, 2, 0, "mat-error", 6)(17, RegisterComponent_mat_error_17_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0418\u043C\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RegisterComponent_mat_error_22_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16)(28, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_28_listener() {
          return ctx.onRegister();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](29, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-image: url(", ctx.imgUrl, ");");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signInForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._email.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hidePass ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx.hidePass ? "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C" : "\u0421\u043A\u0440\u044B\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "\u0421\u043A\u0440\u044B\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C")("aria-pressed", ctx.hidePass)("tabIndex", -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", ctx.hidePass ? "visibility-off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._password.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._password.hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._name.hasError("required"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatSuffix, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltip],
    styles: [".mat-mdc-dialog-container {\n  --mdc-dialog-container-color: transparent;\n}\n\n[_nghost-%COMP%]     .mdc-text-field--outlined {\n  --mdc-outlined-text-field-container-shape: 25px;\n}\n\n.fiels[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 10px;\n}\n\n.link[_ngcontent-%COMP%], .link-colorized[_ngcontent-%COMP%], .link-underlined[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #34668a;\n}\n.link[_ngcontent-%COMP%]:hover, .link-colorized[_ngcontent-%COMP%]:hover, .link-underlined[_ngcontent-%COMP%]:hover {\n  color: #34668a;\n}\n.link[_ngcontent-%COMP%]:active, .link-colorized[_ngcontent-%COMP%]:active, .link-underlined[_ngcontent-%COMP%]:active {\n  color: #134d5f;\n}\n\n.link-underlined[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.link-underlined[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.link-underlined[_ngcontent-%COMP%]:active {\n  text-decoration: none;\n}\n\n.link-colorized[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.link-colorized[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.link-colorized[_ngcontent-%COMP%]:active {\n  text-decoration: underline;\n}\n\n.text-h1[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 27px;\n  font-weight: bold;\n  line-height: 32px;\n  margin: 0;\n  letter-spacing: 0.2px;\n}\n\n.text-h2[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 22px;\n  font-weight: bold;\n  line-height: 24px;\n  margin: 0;\n  letter-spacing: 0.15px;\n}\n\n.text-h3[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 19px;\n  font-weight: bold;\n  line-height: 24px;\n  margin: 0;\n  letter-spacing: 0.15px;\n}\n\n.text-h4[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  font-weight: bold;\n  line-height: 24px;\n  margin: 0;\n  letter-spacing: 0.15px;\n}\n\n.text-h5[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n  line-height: 24px;\n  margin: 0;\n  letter-spacing: 0.15px;\n}\n\n.text-h6[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 24px;\n  margin: 0;\n  letter-spacing: 0.15px;\n}\n\n.text-body1[_ngcontent-%COMP%], .sign-in-form__forgot[_ngcontent-%COMP%], .base-info[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 20px;\n}\n\n.text-body1-md[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 20px;\n}\n\n.text-body2[_ngcontent-%COMP%] {\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0;\n}\n\n.text-th[_ngcontent-%COMP%] {\n  font-size: 13px;\n  line-height: 15px;\n}\n\n.text-td[_ngcontent-%COMP%] {\n  font-size: 13px;\n  line-height: 32px;\n}\n\n.text-nav[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 32px;\n  letter-spacing: -0.2px;\n  text-transform: uppercase;\n}\n\n.text-tab[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n  line-height: 40px;\n  letter-spacing: 0.15px;\n}\n\n.text-subtitle1[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 26px;\n}\n\n.text-subtitle2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 20px;\n}\n\n.text-subtitle3[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n  line-height: 20px;\n}\n\n.text-button[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 40px;\n  letter-spacing: 1.25px;\n  text-transform: uppercase;\n}\n\n.text-button-small[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n  line-height: 32px;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n}\n\n.text-caption[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 14px;\n}\n\n.text-overline[_ngcontent-%COMP%] {\n  font-size: 10px;\n  line-height: 16px;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n}\n\n.non-button[_ngcontent-%COMP%] {\n  border-radius: 0;\n  background-color: transparent;\n  -webkit-appearance: none;\n  padding: 0;\n  border-width: 0;\n}\n\n.base-info[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 204px;\n  padding: 16px 20px;\n}\n\n.with-word-break[_ngcontent-%COMP%] {\n  word-break: normal;\n  overflow-wrap: anywhere;\n}\n@media not all and (min-resolution: 0.001dpcm) {\n  @supports (-webkit-appearance: none) {\n    .with-word-break[_ngcontent-%COMP%] {\n      word-break: break-word;\n      overflow-wrap: normal;\n    }\n  }\n}\n\n.sign-in-form__error[_ngcontent-%COMP%] {\n  display: block;\n  color: red;\n  margin-bottom: 28px;\n}\n.sign-in-form__error-icon[_ngcontent-%COMP%] {\n  margin-right: 16px;\n  vertical-align: middle;\n}\n.sign-in-form__error-icon[_ngcontent-%COMP%]     svg {\n  fill: currentColor;\n}\n.sign-in-form__submit[_ngcontent-%COMP%] {\n  display: flex;\n  width: 264px;\n  margin: 16px auto;\n}\n.sign-in-form__register[_ngcontent-%COMP%] {\n  display: flex;\n  width: 264px;\n  margin: 16px auto;\n}\n.sign-in-form__helpers[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  padding-bottom: 12px;\n  align-items: center;\n}\n.sign-in-form__forgot[_ngcontent-%COMP%] {\n  margin-left: auto;\n  text-decoration: underline;\n  color: #134d5f;\n}\n.sign-in-form__forgot[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.sign-in-form__email-icon[_ngcontent-%COMP%] {\n  line-height: 16px;\n  width: 18px;\n  height: 16px;\n}\n.sign-in-form__visibility-icon[_ngcontent-%COMP%] {\n  line-height: 16px;\n  width: 24px;\n  height: 24px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hY2NvdW50L21vZHVsZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy90eXBvZ3JhcGh5LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlDQUFBO0FBQ0Y7O0FBQ0E7RUFDRSwrQ0FBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUVGOztBQ2tCQTtFQUNFLGVBQUE7RUFFQSxjQ1FXO0FGeEJiO0FDa0JFO0VBQ0UsY0NLUztBRnJCYjtBQ21CRTtFQUNFLGNBQUE7QURqQko7O0FDcUJBO0VBR0UsMEJBQUE7QURwQkY7QUNzQkU7RUFDRSxxQkFBQTtBRHBCSjtBQ3VCRTtFQUNFLHFCQUFBO0FEckJKOztBQ3lCQTtFQUdFLHFCQUFBO0FEeEJGO0FDMEJFO0VBQ0UsMEJBQUE7QUR4Qko7QUMyQkU7RUFDRSwwQkFBQTtBRHpCSjs7QUM2QkE7RUFDRSxrQ0N0RXNCO0VEdUV0QixlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUVBLFNBQUE7RUFFQSxxQkFBQTtBRDVCRjs7QUMrQkE7RUFDRSxrQ0NqRnNCO0VEa0Z0QixlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUVBLFNBQUE7RUFFQSxzQkFBQTtBRDlCRjs7QUNpQ0E7RUFDRSxrQ0M1RnNCO0VENkZ0QixlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUVBLFNBQUE7RUFFQSxzQkFBQTtBRGhDRjs7QUNtQ0E7RUFDRSxrQ0N2R3NCO0VEd0d0QixlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUVBLFNBQUE7RUFFQSxzQkFBQTtBRGxDRjs7QUNxQ0E7RUFDRSxrQ0NsSHNCO0VEbUh0QixlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUVBLFNBQUE7RUFFQSxzQkFBQTtBRHBDRjs7QUN1Q0E7RUFDRSxrQ0M3SHNCO0VEOEh0QixlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUVBLFNBQUE7RUFFQSxzQkFBQTtBRHRDRjs7QUN5Q0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUR0Q0Y7O0FDeUNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUR0Q0Y7O0FDeUNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsaUJBQUE7QUR2Q0Y7O0FDMENBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FEdkNGOztBQzBDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBRHZDRjs7QUMwQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUVBLHNCQUFBO0VBQ0EseUJBQUE7QUR4Q0Y7O0FDMkNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFFQSxzQkFBQTtBRHpDRjs7QUM0Q0E7RUFDRSxpQ0N0TG9CO0VEdUxwQixlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRHpDRjs7QUM0Q0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUR6Q0Y7O0FDNENBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUR6Q0Y7O0FDNENBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFFQSxzQkFBQTtFQUNBLHlCQUFBO0FEMUNGOztBQzZDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBRUEscUJBQUE7RUFDQSx5QkFBQTtBRDNDRjs7QUM4Q0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUQzQ0Y7O0FDOENBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEscUJBQUE7RUFDQSx5QkFBQTtBRDVDRjs7QUMrQ0E7RUEvTkUsZ0JBSndCO0VBS3hCLDZCQUpxQjtFQU1yQix3QkFBQTtFQUVFLFVBQUE7RUFJQSxlQUFBO0FEZ0xKOztBQzBDQTtFQUdFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FEekNGOztBQzRDQTtFQUNFLGtCQUFBO0VBRUEsdUJBQUE7QUQxQ0Y7QUM0Q0U7RUFDRTtJQU5KO01BT00sc0JBQUE7TUFFQSxxQkFBQTtJRDFDRjtFQUNGO0FBQ0Y7O0FBcE1FO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFFQSxtQkFBQTtBQXNNSjtBQXJNSTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7QUF1TU47QUFyTVE7RUFDRSxrQkFBQTtBQXVNVjtBQWxNRTtFQUNFLGFBQUE7RUFFQSxZQUFBO0VBQ0EsaUJBQUE7QUFtTUo7QUFqTUU7RUFDRSxhQUFBO0VBRUEsWUFBQTtFQUNBLGlCQUFBO0FBa01KO0FBL0xFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBRUEsb0JBQUE7RUFFQSxtQkFBQTtBQStMSjtBQTVMRTtFQUdFLGlCQUFBO0VBRUEsMEJBQUE7RUFFQSxjRXJCYztBRitNbEI7QUF6TEk7RUFDRSxxQkFBQTtBQTJMTjtBQXZMRTtFQUNFLGlCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7QUF3TEo7QUFyTEU7RUFDRSxpQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0FBc0xKIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtbWRjLWRpYWxvZy1jb250YWluZXIge1xyXG4gIC0tbWRjLWRpYWxvZy1jb250YWluZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAubWRjLXRleHQtZmllbGQtLW91dGxpbmVkIHtcclxuICAtLW1kYy1vdXRsaW5lZC10ZXh0LWZpZWxkLWNvbnRhaW5lci1zaGFwZTogMjVweDtcclxufVxyXG5cclxuLmZpZWxze1xyXG4gIGRpc3BsYXk6IGZsZXg7IFxyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuQGltcG9ydCAndmFyaWFibGVzJztcclxuQGltcG9ydCAndHlwb2dyYXBoeSc7XHJcblxyXG4uc2lnbi1pbi1mb3JtIHtcclxuICAmX19lcnJvciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiByZWQ7XHJcblxyXG4gICAgbWFyZ2luLWJvdHRvbTogMjhweDtcclxuICAgICYtaWNvbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgOjpuZy1kZWVwIHtcclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgZmlsbDogY3VycmVudENvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAmX19zdWJtaXQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICB3aWR0aDogMjY0cHg7XHJcbiAgICBtYXJnaW46IDE2cHggYXV0bztcclxuICB9XHJcbiAgJl9fcmVnaXN0ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICB3aWR0aDogMjY0cHg7XHJcbiAgICBtYXJnaW46IDE2cHggYXV0bztcclxuICB9XHJcblxyXG4gICZfX2hlbHBlcnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcblxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICZfX2ZvcmdvdCB7XHJcbiAgICBAZXh0ZW5kIC50ZXh0LWJvZHkxO1xyXG5cclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5cclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG5cclxuICAgIGNvbG9yOiAkY29sb3ItYmx1ZS1kYXJrO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2VtYWlsLWljb24ge1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcblxyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAmX192aXNpYmlsaXR5LWljb24ge1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcblxyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcblxyXG5AbWl4aW4gbm9uLWJ1dHRvbi1taXhpbihcclxuICAkd2l0aC1wYWRkaW5nOiB0cnVlLFxyXG4gICR3aXRoLWJvcmRlcjogdHJ1ZSxcclxuICAkZGVmYXVsdC1ib3JkZXItcmFkaXVzOiAwLFxyXG4gICRkZWZhdWx0LWJhY2tncm91bmQ6IHRyYW5zcGFyZW50XHJcbikge1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogJGRlZmF1bHQtYm9yZGVyLXJhZGl1cztcclxuICBib3JkZXItcmFkaXVzOiAkZGVmYXVsdC1ib3JkZXItcmFkaXVzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRkZWZhdWx0LWJhY2tncm91bmQ7XHJcblxyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBAaWYgJHdpdGgtcGFkZGluZyB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgQGlmICR3aXRoLWJvcmRlciB7XHJcbiAgICBib3JkZXItd2lkdGg6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4vLyAkY3VzdG9tLWxldmVsOiBtYXQuZGVmaW5lLXR5cG9ncmFwaHktbGV2ZWwoXHJcbi8vICAgJGZvbnQtZmFtaWx5OiBSb2JvdG8sXHJcbi8vICAgJGZvbnQtd2VpZ2h0OiA0MDAsXHJcbi8vICAgJGZvbnQtc2l6ZTogMXJlbSxcclxuLy8gICAkbGluZS1oZWlnaHQ6IDEsXHJcbi8vICAgJGxldHRlci1zcGFjaW5nOiBub3JtYWwsXHJcbi8vICk7XHJcblxyXG4ubGluayB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICBjb2xvcjogJGNvbG9yLWJsdWU7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICRjb2xvci1ibHVlO1xyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgY29sb3I6ICRjb2xvci1ibHVlLWRhcms7XHJcbiAgfVxyXG59XHJcblxyXG4ubGluay11bmRlcmxpbmVkIHtcclxuICBAZXh0ZW5kIC5saW5rO1xyXG5cclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4ubGluay1jb2xvcml6ZWQge1xyXG4gIEBleHRlbmQgLmxpbms7XHJcblxyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxufVxyXG5cclxuLnRleHQtaDEge1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktc2Vjb25kYXJ5O1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsaW5lLWhlaWdodDogMzJweDtcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG5cclxuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbn1cclxuXHJcbi50ZXh0LWgyIHtcclxuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LXNlY29uZGFyeTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcblxyXG4gIG1hcmdpbjogMDtcclxuXHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTVweDtcclxufVxyXG5cclxuLnRleHQtaDMge1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktc2Vjb25kYXJ5O1xyXG4gIGZvbnQtc2l6ZTogMTlweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG5cclxuICBsZXR0ZXItc3BhY2luZzogMC4xNXB4O1xyXG59XHJcblxyXG4udGV4dC1oNCB7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1zZWNvbmRhcnk7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG5cclxuICBtYXJnaW46IDA7XHJcblxyXG4gIGxldHRlci1zcGFjaW5nOiAwLjE1cHg7XHJcbn1cclxuXHJcbi50ZXh0LWg1IHtcclxuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LXNlY29uZGFyeTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcblxyXG4gIG1hcmdpbjogMDtcclxuXHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTVweDtcclxufVxyXG5cclxuLnRleHQtaDYge1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktc2Vjb25kYXJ5O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG5cclxuICBtYXJnaW46IDA7XHJcblxyXG4gIGxldHRlci1zcGFjaW5nOiAwLjE1cHg7XHJcbn1cclxuXHJcbi50ZXh0LWJvZHkxIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi50ZXh0LWJvZHkxLW1kIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxufVxyXG5cclxuLnRleHQtYm9keTIge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuXHJcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcbi50ZXh0LXRoIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi50ZXh0LXRkIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbn1cclxuXHJcbi50ZXh0LW5hdiB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcblxyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnRleHQtdGFiIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuXHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTVweDtcclxufVxyXG5cclxuLnRleHQtc3VidGl0bGUxIHtcclxuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LXByaW1hcnk7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbi50ZXh0LXN1YnRpdGxlMiB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4udGV4dC1zdWJ0aXRsZTMge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4udGV4dC1idXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuXHJcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMjVweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4udGV4dC1idXR0b24tc21hbGwge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsaW5lLWhlaWdodDogMzJweDtcclxuXHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi50ZXh0LWNhcHRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMTRweDtcclxufVxyXG5cclxuLnRleHQtb3ZlcmxpbmUge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuXHJcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5ub24tYnV0dG9uIHtcclxuICBAaW5jbHVkZSBub24tYnV0dG9uLW1peGluO1xyXG59XHJcblxyXG4uYmFzZS1pbmZvIHtcclxuICBAZXh0ZW5kIC50ZXh0LWJvZHkxO1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHdpZHRoOiAyMDRweDtcclxuICBwYWRkaW5nOiAxNnB4IDIwcHg7XHJcbn1cclxuXHJcbi53aXRoLXdvcmQtYnJlYWsge1xyXG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcclxuXHJcbiAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XHJcblxyXG4gIEBtZWRpYSBub3QgYWxsIGFuZCAobWluLXJlc29sdXRpb246IDAuMDAxZHBjbSkge1xyXG4gICAgQHN1cHBvcnRzICgtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmUpIHtcclxuICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuXHJcbiAgICAgIG92ZXJmbG93LXdyYXA6IG5vcm1hbDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCAnbWl4aW5zL2JyZWFrcG9pbnRzJztcclxuXHJcbiRmb250LWZhbWlseS1wcmltYXJ5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuJGZvbnQtZmFtaWx5LXNlY29uZGFyeTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1zaXplOiAxNHB4O1xyXG5cclxuJGNvbnRhaW5lci14LWxhcmdlLXdpZHRoOiAxNTYwcHg7XHJcbiRjb250YWluZXIteC1sYXJnZS1pbmRlbnQ6IDA7XHJcblxyXG4kY29udGFpbmVyLXdpZHRoOiAxMzIwcHg7XHJcbiRjb250YWluZXItaW5kZW50OiAyMHB4OyAvLyBUT0RPOiB0aGlzIGlzIG5vdCB0aGUgZmluYWwgaW5kZW50XHJcblxyXG4kY29udGFpbmVyLXRhYmxldC13aWR0aDogMTExMnB4O1xyXG4kY29udGFpbmVyLXRhYmxldC1pbmRlbnQ6IDIwcHg7XHJcbiRjb250YWluZXItdGFibGV0LXBvcnRyYWl0LXdpZHRoOiA3NjhweDtcclxuXHJcbi8vIGJyZWFrcG9pbnRzXHJcbiRzY3JlZW4teC1sYXJnZTogY2FsY3VsYXRlV2lkdGgoXHJcbiAgJGNvbnRhaW5lci14LWxhcmdlLXdpZHRoLFxyXG4gICRjb250YWluZXIteC1sYXJnZS1pbmRlbnRcclxuKTtcclxuJHNjcmVlbi1sYXJnZTogY2FsY3VsYXRlV2lkdGgoJGNvbnRhaW5lci13aWR0aCArIDEwLCAkY29udGFpbmVyLWluZGVudCk7XHJcbiRzY3JlZW4tdGFibGV0OiBjYWxjdWxhdGVXaWR0aChcclxuICAkY29udGFpbmVyLXRhYmxldC13aWR0aCxcclxuICAkY29udGFpbmVyLXRhYmxldC1pbmRlbnRcclxuKTtcclxuJHNjcmVlbi10YWJsZXQtcG9ydHJhaXQ6IGNhbGN1bGF0ZVdpZHRoKFxyXG4gICRjb250YWluZXItdGFibGV0LXBvcnRyYWl0LXdpZHRoLFxyXG4gICRjb250YWluZXItdGFibGV0LWluZGVudFxyXG4pO1xyXG5cclxuLy8gbmV3IGNvbG9yc1xyXG4kY29sb3ItYmxhY2s6ICMwMDAwMDA7XHJcbiRjb2xvci10ZXh0OiByZ2JhKCRjb2xvci1ibGFjaywgMC44Nyk7XHJcbiRjb2xvci1ncmV5OiAjYWJhY2FjO1xyXG4kY29sb3Itd2hpdGU6ICNmZmZmZmY7XHJcbiRjb2xvci13aGl0ZS10cjogcmdiYSgkY29sb3Itd2hpdGUsIDAuNCk7XHJcbiRjb2xvci1maXNoOiAjZTBlMGUwO1xyXG4kY29sb3ItYmctdGFiOiAjZWJlYmViO1xyXG4kY29sb3ItYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxuJGNvbG9yLWJsdWUtZGFyazogIzEzNGQ1ZjtcclxuJGNvbG9yLWJsdWU6ICMzNDY2OGE7XHJcbiRjb2xvci1ibHVlLWxpZ2h0OiAjM2U5OWFjO1xyXG4kY29sb3ItZ3JlZW46ICNhYWM2Mzg7XHJcbiRjb2xvci1ncmVlbi1kYXJrOiAjMWM0YjM1O1xyXG4kY29sb3ItYmx1ZS10ZXh0OiAkY29sb3ItYmx1ZS1saWdodDtcclxuJGNvbG9yLXRleHQtZ3JlZW46ICMzMzhjNDc7XHJcbiRjb2xvci10ZXh0LW51bWJlcjogIzZiYTcyZjtcclxuJGNvbG9yLXJlZDogI2YyNDUzZDtcclxuJGNvbG9yLWNvb2wtZ3JheTFjOiAkY29sb3ItZmlzaDtcclxuJGNvbG9yLW9yYW5nZTogI2ZmN2I1OTtcclxuJGNvbG9yLXllbGxvdzogI2YyYzk0YztcclxuJGNvbG9yLWJnLTM6ICNmM2Y0Zjc7XHJcblxyXG4kY29sb3ItYmctbGluZTogI2E4YmNjYjtcclxuJGNvbG9yLXRyZWUtc3RpY2s6ICNhZWMyZDA7XHJcbiRjb2xvci1zcGVjaWFsOiAjYjljNmQ4O1xyXG4kY29sb3ItYnV0dG9uLWRpc2FibGVkOiAjZDZkN2Q5O1xyXG5cclxuJGNvbG9yLW5ldy1yYW5kb20tY29sb3I6ICNlYmYwZjM7XHJcblxyXG4vLyBvbGQgY29sb3JzIC0gcmVtb3ZlIGFmdGVyIHVwZGF0aW5nXHJcbiRjb2xvci1ibGFjay10cjogcmdiYSgkY29sb3ItYmxhY2ssIDAuODcpO1xyXG5cclxuLy8gc2hhZG93XHJcblxyXG4kc2hhZG93LWJsb2NrOiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiRzaGFkb3ctYmxvY2stZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSkpO1xyXG4kc2hhZG93LXBvcHVwOiAwcHggMXB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiRzaGFkb3ctcG9wdXAtZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMikpXHJcbiAgZHJvcC1zaGFkb3coMHB4IDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKSk7XHJcblxyXG4kYW5pbWF0aW9uOiB2YXIoLS1maW4tYW5pbWF0aW9uLXNwZWVkLCAwLjJzKSBlYXNlO1xyXG5cclxuJG92ZXJsYXktei1pbmRleDogMTAwMDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2033:
/*!**********************************************************************!*\
  !*** ./src/app/modules/account/modules/sign-in/sign-in.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignInComponent: () => (/* binding */ SignInComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5356);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ 702);











function SignInComponent_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function SignInComponent_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function SignInComponent_mat_error_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0414\u043B\u0438\u043D\u0430 \u043F\u0430\u0440\u043E\u043B\u044F \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 8 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class SignInComponent {
  constructor(formBuilder, dialogRef) {
    this.formBuilder = formBuilder;
    this.dialogRef = dialogRef;
    this.hidePass = true;
    this.restorePass = false;
    this.register = false;
    this.imgUrl = "assets/images/palete.gif";
    this._createForm();
  }
  get _email() {
    return this.signInForm.get('email');
  }
  get _password() {
    return this.signInForm.get('password');
  }
  onSubmit() {
    this.register = false;
    this.restorePass = false;
    this._password.markAsTouched();
    if (this.signInForm.valid) {
      this.signInForm.value.signin = true;
      this.dialogRef.close(this.signInForm.value);
    }
  }
  onForgot() {
    this.register = false;
    this.restorePass = true;
    if (this.signInForm.value.email) {
      this.signInForm.value.signin = false;
      this.signInForm.value.forgotPswd = true;
      this.dialogRef.close(this.signInForm.value);
    }
  }
  _createForm() {
    this.signInForm = this.formBuilder.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]],
      password: ['', [this.restorePass ? _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.nullValidator : _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]]
    });
  }
  static #_ = this.ɵfac = function SignInComponent_Factory(t) {
    return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SignInComponent,
    selectors: [["app-sign-in"]],
    decls: 27,
    vars: 13,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2846118528788550891$$SRC_APP_MODULES_ACCOUNT_MODULES_SIGN_IN_SIGN_IN_COMPONENT_TS_1 = goog.getMsg("{$startParagraph}\u0412\u043E\u0439\u0442\u0438{$closeParagraph}", {
          "closeParagraph": "\uFFFD/#21\uFFFD",
          "startParagraph": "\uFFFD#21\uFFFD"
        }, {
          original_code: {
            "closeParagraph": "</p>",
            "startParagraph": "<p style=\"margin-top: 40px; font-weight: bold; font-size: 20px;\">"
          }
        });
        i18n_0 = MSG_EXTERNAL_2846118528788550891$$SRC_APP_MODULES_ACCOUNT_MODULES_SIGN_IN_SIGN_IN_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize`${"\uFFFD#21\uFFFD"}:START_PARAGRAPH:Войти${"\uFFFD/#21\uFFFD"}:CLOSE_PARAGRAPH:`;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_637920543106528925$$SRC_APP_MODULES_ACCOUNT_MODULES_SIGN_IN_SIGN_IN_COMPONENT_TS_3 = goog.getMsg("{$startParagraph}\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C{$closeParagraph}", {
          "closeParagraph": "\uFFFD/#25\uFFFD",
          "startParagraph": "\uFFFD#25\uFFFD"
        }, {
          original_code: {
            "closeParagraph": "</p>",
            "startParagraph": "<p style=\"margin-top: 40px; color: white; font-weight: bold; font-size: 16px;\">"
          }
        });
        i18n_2 = MSG_EXTERNAL_637920543106528925$$SRC_APP_MODULES_ACCOUNT_MODULES_SIGN_IN_SIGN_IN_COMPONENT_TS_3;
      } else {
        i18n_2 = $localize`${"\uFFFD#25\uFFFD"}:START_PARAGRAPH:Восстановить пароль${"\uFFFD/#25\uFFFD"}:CLOSE_PARAGRAPH:`;
      }
      return [[2, "display", "flex", "flex-direction", "column"], ["fxLayout", "column", "fxLayoutAlign", "center", 1, "sign-in-form", 3, "formGroup", "ngSubmit"], [2, "padding-top", "300px"], ["appearance", "outline", "color", "accent", 2, "display", "flex", "flex-direction", "column", "margin-left", "145px", "width", "370px", "background-color", "rgb(231, 231, 110)", "border-radius", "25px 25px 25px 25px"], ["matPrefix", "", "svgIcon", "mail-sm", 1, "sign-in-form__email-icon", "mat-icon-stroke"], ["type", "email", "placeholder", "email", "required", "", "matInput", "", "formControlName", "email", 2, "border-radius", "0px 15px 0px 15px", "background-color", "rgb(231, 231, 110)"], [4, "ngIf"], ["appearance", "outline", "color", "accent", 2, "display", "flex", "flex-direction", "column", "margin-left", "100px", "margin-top", "50px", "width", "370px", "background-color", "rgb(231, 231, 110)", "border-radius", "25px 25px 25px 25px"], ["matPrefix", "", "svgIcon", "password", 1, "sign-in-form__email-icon", "mat-icon-stroke"], ["placeholder", "\u041F\u0430\u0440\u043E\u043B\u044C", "required", "", "minlength", "8", "matInput", "", "formControlName", "password", 2, "background-color", "rgb(231, 231, 110)", 3, "type"], ["type", "button", "mat-icon-button", "", "matSuffix", "", 3, "matTooltip", "click"], ["aria-hidden", "false", "matPrefix", "", 1, "sign-in-form__visibility-icon", "mat-icon-stroke", 3, "svgIcon"], [2, "display", "flex", "flex-direction", "column", "margin-top", "45px", "margin-right", "370px"], ["type", "button", "mat-raised-button", "", "color", "grey", 1, "sign-in-form__submit", "mat-elevation-z10", 2, "width", "142px", "height", "116px", "background-color", "transparent", "border-radius", "130px 30px 50px 50px", 3, "click"], i18n_0, [2, "margin-top", "40px", "font-weight", "bold", "font-size", "20px"], [2, "flex-direction", "column", "margin-top", "-85px", "margin-right", "30px"], ["type", "button", "mat-raised-button", "", "color", "grey", 1, "sign-in-form__submit", "mat-elevation-z10", 2, "width", "160px", "height", "128px", "background-color", "transparent", "border-radius", "110px 30px 80px 60px", 3, "click"], i18n_2, [2, "margin-top", "40px", "color", "white", "font-weight", "bold", "font-size", "16px"], [2, "margin-top", "50px"]];
    },
    template: function SignInComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SignInComponent_Template_form_ngSubmit_1_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-icon", 4)(5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SignInComponent_mat_error_8_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-icon", 8)(11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_12_listener() {
          return ctx.hidePass = !ctx.hidePass;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u041F\u0430\u0440\u043E\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SignInComponent_mat_error_16_Template, 2, 0, "mat-error", 6)(17, SignInComponent_mat_error_17_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12)(19, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_19_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](20, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16)(23, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_23_listener() {
          return ctx.onForgot();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](24, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-image: url(", ctx.imgUrl, ");");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signInForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._email.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hidePass ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx.hidePass ? "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C" : "\u0421\u043A\u0440\u044B\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "\u0421\u043A\u0440\u044B\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C")("aria-pressed", ctx.hidePass)("tabIndex", -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("svgIcon", ctx.hidePass ? "visibility-off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.restorePass && ctx._password.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.restorePass && ctx._password.hasError("minlength"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatSuffix, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltip],
    styles: [".mat-mdc-dialog-container {\n  --mdc-dialog-container-color: transparent;\n}\n\n[_nghost-%COMP%]     .mdc-text-field--outlined {\n  --mdc-outlined-text-field-container-shape: 25px;\n}\n\n.fiels[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 10px;\n}\n\n.link[_ngcontent-%COMP%], .link-colorized[_ngcontent-%COMP%], .link-underlined[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #34668a;\n}\n.link[_ngcontent-%COMP%]:hover, .link-colorized[_ngcontent-%COMP%]:hover, .link-underlined[_ngcontent-%COMP%]:hover {\n  color: #34668a;\n}\n.link[_ngcontent-%COMP%]:active, .link-colorized[_ngcontent-%COMP%]:active, .link-underlined[_ngcontent-%COMP%]:active {\n  color: #134d5f;\n}\n\n.link-underlined[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.link-underlined[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.link-underlined[_ngcontent-%COMP%]:active {\n  text-decoration: none;\n}\n\n.link-colorized[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.link-colorized[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.link-colorized[_ngcontent-%COMP%]:active {\n  text-decoration: underline;\n}\n\n.text-h1[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 27px;\n  font-weight: bold;\n  line-height: 32px;\n  margin: 0;\n  letter-spacing: 0.2px;\n}\n\n.text-h2[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 22px;\n  font-weight: bold;\n  line-height: 24px;\n  margin: 0;\n  letter-spacing: 0.15px;\n}\n\n.text-h3[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 19px;\n  font-weight: bold;\n  line-height: 24px;\n  margin: 0;\n  letter-spacing: 0.15px;\n}\n\n.text-h4[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 18px;\n  font-weight: bold;\n  line-height: 24px;\n  margin: 0;\n  letter-spacing: 0.15px;\n}\n\n.text-h5[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n  line-height: 24px;\n  margin: 0;\n  letter-spacing: 0.15px;\n}\n\n.text-h6[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 24px;\n  margin: 0;\n  letter-spacing: 0.15px;\n}\n\n.text-body1[_ngcontent-%COMP%], .sign-in-form__forgot[_ngcontent-%COMP%], .base-info[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 20px;\n}\n\n.text-body1-md[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 20px;\n}\n\n.text-body2[_ngcontent-%COMP%] {\n  font-size: 13px;\n  line-height: 16px;\n  letter-spacing: 0;\n}\n\n.text-th[_ngcontent-%COMP%] {\n  font-size: 13px;\n  line-height: 15px;\n}\n\n.text-td[_ngcontent-%COMP%] {\n  font-size: 13px;\n  line-height: 32px;\n}\n\n.text-nav[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 32px;\n  letter-spacing: -0.2px;\n  text-transform: uppercase;\n}\n\n.text-tab[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n  line-height: 40px;\n  letter-spacing: 0.15px;\n}\n\n.text-subtitle1[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 26px;\n}\n\n.text-subtitle2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 20px;\n}\n\n.text-subtitle3[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n  line-height: 20px;\n}\n\n.text-button[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 40px;\n  letter-spacing: 1.25px;\n  text-transform: uppercase;\n}\n\n.text-button-small[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n  line-height: 32px;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n}\n\n.text-caption[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 14px;\n}\n\n.text-overline[_ngcontent-%COMP%] {\n  font-size: 10px;\n  line-height: 16px;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n}\n\n.non-button[_ngcontent-%COMP%] {\n  border-radius: 0;\n  background-color: transparent;\n  -webkit-appearance: none;\n  padding: 0;\n  border-width: 0;\n}\n\n.base-info[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 204px;\n  padding: 16px 20px;\n}\n\n.with-word-break[_ngcontent-%COMP%] {\n  word-break: normal;\n  overflow-wrap: anywhere;\n}\n@media not all and (min-resolution: 0.001dpcm) {\n  @supports (-webkit-appearance: none) {\n    .with-word-break[_ngcontent-%COMP%] {\n      word-break: break-word;\n      overflow-wrap: normal;\n    }\n  }\n}\n\n.sign-in-form__error[_ngcontent-%COMP%] {\n  display: block;\n  color: red;\n  margin-bottom: 28px;\n}\n.sign-in-form__error-icon[_ngcontent-%COMP%] {\n  margin-right: 16px;\n  vertical-align: middle;\n}\n.sign-in-form__error-icon[_ngcontent-%COMP%]     svg {\n  fill: currentColor;\n}\n.sign-in-form__submit[_ngcontent-%COMP%] {\n  display: flex;\n  width: 264px;\n  margin: 16px auto;\n}\n.sign-in-form__register[_ngcontent-%COMP%] {\n  display: flex;\n  width: 264px;\n  margin: 16px auto;\n}\n.sign-in-form__helpers[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  padding-bottom: 12px;\n  align-items: center;\n}\n.sign-in-form__forgot[_ngcontent-%COMP%] {\n  margin-left: auto;\n  text-decoration: underline;\n  color: #134d5f;\n}\n.sign-in-form__forgot[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.sign-in-form__email-icon[_ngcontent-%COMP%] {\n  line-height: 16px;\n  width: 18px;\n  height: 16px;\n}\n.sign-in-form__visibility-icon[_ngcontent-%COMP%] {\n  line-height: 16px;\n  width: 24px;\n  height: 24px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hY2NvdW50L21vZHVsZXMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3Njc3MvdHlwb2dyYXBoeS5zY3NzIiwid2VicGFjazovLy4vc3JjL3Njc3MvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5Q0FBQTtBQUNGOztBQUNBO0VBQ0UsK0NBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFFRjs7QUNrQkE7RUFDRSxlQUFBO0VBRUEsY0NRVztBRnhCYjtBQ2tCRTtFQUNFLGNDS1M7QUZyQmI7QUNtQkU7RUFDRSxjQUFBO0FEakJKOztBQ3FCQTtFQUdFLDBCQUFBO0FEcEJGO0FDc0JFO0VBQ0UscUJBQUE7QURwQko7QUN1QkU7RUFDRSxxQkFBQTtBRHJCSjs7QUN5QkE7RUFHRSxxQkFBQTtBRHhCRjtBQzBCRTtFQUNFLDBCQUFBO0FEeEJKO0FDMkJFO0VBQ0UsMEJBQUE7QUR6Qko7O0FDNkJBO0VBQ0Usa0NDdEVzQjtFRHVFdEIsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFFQSxTQUFBO0VBRUEscUJBQUE7QUQ1QkY7O0FDK0JBO0VBQ0Usa0NDakZzQjtFRGtGdEIsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFFQSxTQUFBO0VBRUEsc0JBQUE7QUQ5QkY7O0FDaUNBO0VBQ0Usa0NDNUZzQjtFRDZGdEIsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFFQSxTQUFBO0VBRUEsc0JBQUE7QURoQ0Y7O0FDbUNBO0VBQ0Usa0NDdkdzQjtFRHdHdEIsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFFQSxTQUFBO0VBRUEsc0JBQUE7QURsQ0Y7O0FDcUNBO0VBQ0Usa0NDbEhzQjtFRG1IdEIsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFFQSxTQUFBO0VBRUEsc0JBQUE7QURwQ0Y7O0FDdUNBO0VBQ0Usa0NDN0hzQjtFRDhIdEIsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFFQSxTQUFBO0VBRUEsc0JBQUE7QUR0Q0Y7O0FDeUNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FEdENGOztBQ3lDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FEdENGOztBQ3lDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGlCQUFBO0FEdkNGOztBQzBDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBRHZDRjs7QUMwQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUR2Q0Y7O0FDMENBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFFQSxzQkFBQTtFQUNBLHlCQUFBO0FEeENGOztBQzJDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBRUEsc0JBQUE7QUR6Q0Y7O0FDNENBO0VBQ0UsaUNDdExvQjtFRHVMcEIsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUR6Q0Y7O0FDNENBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FEekNGOztBQzRDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FEekNGOztBQzRDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBRUEsc0JBQUE7RUFDQSx5QkFBQTtBRDFDRjs7QUM2Q0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUVBLHFCQUFBO0VBQ0EseUJBQUE7QUQzQ0Y7O0FDOENBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FEM0NGOztBQzhDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLHFCQUFBO0VBQ0EseUJBQUE7QUQ1Q0Y7O0FDK0NBO0VBL05FLGdCQUp3QjtFQUt4Qiw2QkFKcUI7RUFNckIsd0JBQUE7RUFFRSxVQUFBO0VBSUEsZUFBQTtBRGdMSjs7QUMwQ0E7RUFHRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRHpDRjs7QUM0Q0E7RUFDRSxrQkFBQTtFQUVBLHVCQUFBO0FEMUNGO0FDNENFO0VBQ0U7SUFOSjtNQU9NLHNCQUFBO01BRUEscUJBQUE7SUQxQ0Y7RUFDRjtBQUNGOztBQXBNRTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBRUEsbUJBQUE7QUFzTUo7QUFyTUk7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FBdU1OO0FBck1RO0VBQ0Usa0JBQUE7QUF1TVY7QUFsTUU7RUFDRSxhQUFBO0VBRUEsWUFBQTtFQUNBLGlCQUFBO0FBbU1KO0FBak1FO0VBQ0UsYUFBQTtFQUVBLFlBQUE7RUFDQSxpQkFBQTtBQWtNSjtBQS9MRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUVBLG9CQUFBO0VBRUEsbUJBQUE7QUErTEo7QUE1TEU7RUFHRSxpQkFBQTtFQUVBLDBCQUFBO0VBRUEsY0VyQmM7QUYrTWxCO0FBekxJO0VBQ0UscUJBQUE7QUEyTE47QUF2TEU7RUFDRSxpQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0FBd0xKO0FBckxFO0VBQ0UsaUJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtBQXNMSiIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWF0LW1kYy1kaWFsb2ctY29udGFpbmVyIHtcclxuICAtLW1kYy1kaWFsb2ctY29udGFpbmVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLm1kYy10ZXh0LWZpZWxkLS1vdXRsaW5lZCB7XHJcbiAgLS1tZGMtb3V0bGluZWQtdGV4dC1maWVsZC1jb250YWluZXItc2hhcGU6IDI1cHg7XHJcbn1cclxuXHJcbi5maWVsc3tcclxuICBkaXNwbGF5OiBmbGV4OyBcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJ3R5cG9ncmFwaHknO1xyXG5cclxuLnNpZ24taW4tZm9ybSB7XHJcbiAgJl9fZXJyb3Ige1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb2xvcjogcmVkO1xyXG5cclxuICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XHJcbiAgICAmLWljb24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIDo6bmctZGVlcCB7XHJcbiAgICAgICAgc3ZnIHtcclxuICAgICAgICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgJl9fc3VibWl0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgd2lkdGg6IDI2NHB4O1xyXG4gICAgbWFyZ2luOiAxNnB4IGF1dG87XHJcbiAgfVxyXG4gICZfX3JlZ2lzdGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgd2lkdGg6IDI2NHB4O1xyXG4gICAgbWFyZ2luOiAxNnB4IGF1dG87XHJcbiAgfVxyXG5cclxuICAmX19oZWxwZXJzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG5cclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAmX19mb3Jnb3Qge1xyXG4gICAgQGV4dGVuZCAudGV4dC1ib2R5MTtcclxuXHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuXHJcbiAgICBjb2xvcjogJGNvbG9yLWJsdWUtZGFyaztcclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19lbWFpbC1pY29uIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG5cclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgJl9fdmlzaWJpbGl0eS1pY29uIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG5cclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xyXG5cclxuQG1peGluIG5vbi1idXR0b24tbWl4aW4oXHJcbiAgJHdpdGgtcGFkZGluZzogdHJ1ZSxcclxuICAkd2l0aC1ib3JkZXI6IHRydWUsXHJcbiAgJGRlZmF1bHQtYm9yZGVyLXJhZGl1czogMCxcclxuICAkZGVmYXVsdC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudFxyXG4pIHtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRkZWZhdWx0LWJvcmRlci1yYWRpdXM7XHJcbiAgYm9yZGVyLXJhZGl1czogJGRlZmF1bHQtYm9yZGVyLXJhZGl1cztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGVmYXVsdC1iYWNrZ3JvdW5kO1xyXG5cclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgQGlmICR3aXRoLXBhZGRpbmcge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gIEBpZiAkd2l0aC1ib3JkZXIge1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLy8gJGN1c3RvbS1sZXZlbDogbWF0LmRlZmluZS10eXBvZ3JhcGh5LWxldmVsKFxyXG4vLyAgICRmb250LWZhbWlseTogUm9ib3RvLFxyXG4vLyAgICRmb250LXdlaWdodDogNDAwLFxyXG4vLyAgICRmb250LXNpemU6IDFyZW0sXHJcbi8vICAgJGxpbmUtaGVpZ2h0OiAxLFxyXG4vLyAgICRsZXR0ZXItc3BhY2luZzogbm9ybWFsLFxyXG4vLyApO1xyXG5cclxuLmxpbmsge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgY29sb3I6ICRjb2xvci1ibHVlO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAkY29sb3ItYmx1ZTtcclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIGNvbG9yOiAkY29sb3ItYmx1ZS1kYXJrO1xyXG4gIH1cclxufVxyXG5cclxuLmxpbmstdW5kZXJsaW5lZCB7XHJcbiAgQGV4dGVuZCAubGluaztcclxuXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmxpbmstY29sb3JpemVkIHtcclxuICBAZXh0ZW5kIC5saW5rO1xyXG5cclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcbn1cclxuXHJcbi50ZXh0LWgxIHtcclxuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LXNlY29uZGFyeTtcclxuICBmb250LXNpemU6IDI3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcblxyXG4gIG1hcmdpbjogMDtcclxuXHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xyXG59XHJcblxyXG4udGV4dC1oMiB7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1zZWNvbmRhcnk7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG5cclxuICBtYXJnaW46IDA7XHJcblxyXG4gIGxldHRlci1zcGFjaW5nOiAwLjE1cHg7XHJcbn1cclxuXHJcbi50ZXh0LWgzIHtcclxuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LXNlY29uZGFyeTtcclxuICBmb250LXNpemU6IDE5cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcblxyXG4gIG1hcmdpbjogMDtcclxuXHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTVweDtcclxufVxyXG5cclxuLnRleHQtaDQge1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktc2Vjb25kYXJ5O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG5cclxuICBsZXR0ZXItc3BhY2luZzogMC4xNXB4O1xyXG59XHJcblxyXG4udGV4dC1oNSB7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1zZWNvbmRhcnk7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG5cclxuICBtYXJnaW46IDA7XHJcblxyXG4gIGxldHRlci1zcGFjaW5nOiAwLjE1cHg7XHJcbn1cclxuXHJcbi50ZXh0LWg2IHtcclxuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LXNlY29uZGFyeTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG5cclxuICBsZXR0ZXItc3BhY2luZzogMC4xNXB4O1xyXG59XHJcblxyXG4udGV4dC1ib2R5MSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4udGV4dC1ib2R5MS1tZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi50ZXh0LWJvZHkyIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcblxyXG4gIGxldHRlci1zcGFjaW5nOiAwO1xyXG59XHJcblxyXG4udGV4dC10aCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4udGV4dC10ZCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG59XHJcblxyXG4udGV4dC1uYXYge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG5cclxuICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi50ZXh0LXRhYiB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcblxyXG4gIGxldHRlci1zcGFjaW5nOiAwLjE1cHg7XHJcbn1cclxuXHJcbi50ZXh0LXN1YnRpdGxlMSB7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1wcmltYXJ5O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG4udGV4dC1zdWJ0aXRsZTIge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxufVxyXG5cclxuLnRleHQtc3VidGl0bGUzIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxufVxyXG5cclxuLnRleHQtYnV0dG9uIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcblxyXG4gIGxldHRlci1zcGFjaW5nOiAxLjI1cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnRleHQtYnV0dG9uLXNtYWxsIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcblxyXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4udGV4dC1jYXB0aW9uIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbn1cclxuXHJcbi50ZXh0LW92ZXJsaW5lIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcblxyXG4gIGxldHRlci1zcGFjaW5nOiAxLjVweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4ubm9uLWJ1dHRvbiB7XHJcbiAgQGluY2x1ZGUgbm9uLWJ1dHRvbi1taXhpbjtcclxufVxyXG5cclxuLmJhc2UtaW5mbyB7XHJcbiAgQGV4dGVuZCAudGV4dC1ib2R5MTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB3aWR0aDogMjA0cHg7XHJcbiAgcGFkZGluZzogMTZweCAyMHB4O1xyXG59XHJcblxyXG4ud2l0aC13b3JkLWJyZWFrIHtcclxuICB3b3JkLWJyZWFrOiBub3JtYWw7XHJcblxyXG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xyXG5cclxuICBAbWVkaWEgbm90IGFsbCBhbmQgKG1pbi1yZXNvbHV0aW9uOiAwLjAwMWRwY20pIHtcclxuICAgIEBzdXBwb3J0cyAoLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lKSB7XHJcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcblxyXG4gICAgICBvdmVyZmxvdy13cmFwOiBub3JtYWw7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIkBpbXBvcnQgJ21peGlucy9icmVha3BvaW50cyc7XHJcblxyXG4kZm9udC1mYW1pbHktcHJpbWFyeTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1zZWNvbmRhcnk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuJGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiRjb250YWluZXIteC1sYXJnZS13aWR0aDogMTU2MHB4O1xyXG4kY29udGFpbmVyLXgtbGFyZ2UtaW5kZW50OiAwO1xyXG5cclxuJGNvbnRhaW5lci13aWR0aDogMTMyMHB4O1xyXG4kY29udGFpbmVyLWluZGVudDogMjBweDsgLy8gVE9ETzogdGhpcyBpcyBub3QgdGhlIGZpbmFsIGluZGVudFxyXG5cclxuJGNvbnRhaW5lci10YWJsZXQtd2lkdGg6IDExMTJweDtcclxuJGNvbnRhaW5lci10YWJsZXQtaW5kZW50OiAyMHB4O1xyXG4kY29udGFpbmVyLXRhYmxldC1wb3J0cmFpdC13aWR0aDogNzY4cHg7XHJcblxyXG4vLyBicmVha3BvaW50c1xyXG4kc2NyZWVuLXgtbGFyZ2U6IGNhbGN1bGF0ZVdpZHRoKFxyXG4gICRjb250YWluZXIteC1sYXJnZS13aWR0aCxcclxuICAkY29udGFpbmVyLXgtbGFyZ2UtaW5kZW50XHJcbik7XHJcbiRzY3JlZW4tbGFyZ2U6IGNhbGN1bGF0ZVdpZHRoKCRjb250YWluZXItd2lkdGggKyAxMCwgJGNvbnRhaW5lci1pbmRlbnQpO1xyXG4kc2NyZWVuLXRhYmxldDogY2FsY3VsYXRlV2lkdGgoXHJcbiAgJGNvbnRhaW5lci10YWJsZXQtd2lkdGgsXHJcbiAgJGNvbnRhaW5lci10YWJsZXQtaW5kZW50XHJcbik7XHJcbiRzY3JlZW4tdGFibGV0LXBvcnRyYWl0OiBjYWxjdWxhdGVXaWR0aChcclxuICAkY29udGFpbmVyLXRhYmxldC1wb3J0cmFpdC13aWR0aCxcclxuICAkY29udGFpbmVyLXRhYmxldC1pbmRlbnRcclxuKTtcclxuXHJcbi8vIG5ldyBjb2xvcnNcclxuJGNvbG9yLWJsYWNrOiAjMDAwMDAwO1xyXG4kY29sb3ItdGV4dDogcmdiYSgkY29sb3ItYmxhY2ssIDAuODcpO1xyXG4kY29sb3ItZ3JleTogI2FiYWNhYztcclxuJGNvbG9yLXdoaXRlOiAjZmZmZmZmO1xyXG4kY29sb3Itd2hpdGUtdHI6IHJnYmEoJGNvbG9yLXdoaXRlLCAwLjQpO1xyXG4kY29sb3ItZmlzaDogI2UwZTBlMDtcclxuJGNvbG9yLWJnLXRhYjogI2ViZWJlYjtcclxuJGNvbG9yLWJhY2tncm91bmQ6ICNmNmY2ZjY7XHJcbiRjb2xvci1ibHVlLWRhcms6ICMxMzRkNWY7XHJcbiRjb2xvci1ibHVlOiAjMzQ2NjhhO1xyXG4kY29sb3ItYmx1ZS1saWdodDogIzNlOTlhYztcclxuJGNvbG9yLWdyZWVuOiAjYWFjNjM4O1xyXG4kY29sb3ItZ3JlZW4tZGFyazogIzFjNGIzNTtcclxuJGNvbG9yLWJsdWUtdGV4dDogJGNvbG9yLWJsdWUtbGlnaHQ7XHJcbiRjb2xvci10ZXh0LWdyZWVuOiAjMzM4YzQ3O1xyXG4kY29sb3ItdGV4dC1udW1iZXI6ICM2YmE3MmY7XHJcbiRjb2xvci1yZWQ6ICNmMjQ1M2Q7XHJcbiRjb2xvci1jb29sLWdyYXkxYzogJGNvbG9yLWZpc2g7XHJcbiRjb2xvci1vcmFuZ2U6ICNmZjdiNTk7XHJcbiRjb2xvci15ZWxsb3c6ICNmMmM5NGM7XHJcbiRjb2xvci1iZy0zOiAjZjNmNGY3O1xyXG5cclxuJGNvbG9yLWJnLWxpbmU6ICNhOGJjY2I7XHJcbiRjb2xvci10cmVlLXN0aWNrOiAjYWVjMmQwO1xyXG4kY29sb3Itc3BlY2lhbDogI2I5YzZkODtcclxuJGNvbG9yLWJ1dHRvbi1kaXNhYmxlZDogI2Q2ZDdkOTtcclxuXHJcbiRjb2xvci1uZXctcmFuZG9tLWNvbG9yOiAjZWJmMGYzO1xyXG5cclxuLy8gb2xkIGNvbG9ycyAtIHJlbW92ZSBhZnRlciB1cGRhdGluZ1xyXG4kY29sb3ItYmxhY2stdHI6IHJnYmEoJGNvbG9yLWJsYWNrLCAwLjg3KTtcclxuXHJcbi8vIHNoYWRvd1xyXG5cclxuJHNoYWRvdy1ibG9jazogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4kc2hhZG93LWJsb2NrLWZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpKTtcclxuJHNoYWRvdy1wb3B1cDogMHB4IDFweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggM3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4kc2hhZG93LXBvcHVwLWZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDFweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpKVxyXG4gIGRyb3Atc2hhZG93KDBweCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMikpO1xyXG5cclxuJGFuaW1hdGlvbjogdmFyKC0tZmluLWFuaW1hdGlvbi1zcGVlZCwgMC4ycykgZWFzZTtcclxuXHJcbiRvdmVybGF5LXotaW5kZXg6IDEwMDA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 4038:
/*!********************************************************************************!*\
  !*** ./src/app/modules/account/modules/user-profile/user-profile.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserProfileComponent: () => (/* binding */ UserProfileComponent)
/* harmony export */ });
/* harmony import */ var E_EVA_EZ_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 1650);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 4520);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 7592);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 5267);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 3317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 331);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs */ 5400);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/animations */ 2501);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/sort */ 7963);
/* harmony import */ var _dialogref_art_item_art_item_dialogref_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../dialogref/art-item/art-item-dialogref.component */ 3577);
/* harmony import */ var _services_user_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/user.store */ 2361);
/* harmony import */ var _dialogref_feedback_message_feedback_message_dialogref_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../dialogref/feedback-message/feedback-message-dialogref.component */ 5449);
/* harmony import */ var _models_page_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/page.model */ 5783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../account.service */ 6992);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/user.service */ 3076);
/* harmony import */ var _services_favourite_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/favourite.service */ 7266);
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/settings.service */ 9752);
/* harmony import */ var _services_masterwork_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../services/masterwork.service */ 568);
/* harmony import */ var _services_menu_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/menu.service */ 2042);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5356);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/flex-layout/extended */ 7520);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/checkbox */ 6658);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tabs */ 989);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ 702);




































const _c0 = ["adminFeedbackPaginator"];
const _c1 = ["adminFeedbackSort"];
function UserProfileComponent_mat_error_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function UserProfileComponent_mat_error_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function UserProfileComponent_mat_error_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function UserProfileComponent_mat_error_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "\u0414\u043B\u0438\u043D\u0430 \u043F\u0430\u0440\u043E\u043B\u044F \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 8 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function UserProfileComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("files", function UserProfileComponent_div_36_Template_div_files_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r8.filesDropped($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r4.fileUploadMessage, " ");
  }
}
function UserProfileComponent_img_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("files", function UserProfileComponent_img_38_Template_img_files_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r10.filesDropped($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("src", "data:Image/*;base64," + ctx_r5.base64Output, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
  }
}
function UserProfileComponent_div_47_ng_container_16_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r27.columnsToDisplayName[column_r26], " ");
  }
}
function UserProfileComponent_div_47_ng_container_16_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r30 = ctx.$implicit;
    const column_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", element_r30[column_r26], " ");
  }
}
function UserProfileComponent_div_47_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, UserProfileComponent_div_47_ng_container_16_th_1_Template, 2, 1, "th", 49)(2, UserProfileComponent_div_47_ng_container_16_td_2_Template, 2, 1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matColumnDef", column_r26);
  }
}
function UserProfileComponent_div_47_td_18_img_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "img", 57);
  }
  if (rf & 2) {
    const element_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("src", "data:Image/*;base64," + element_r32.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
  }
}
function UserProfileComponent_div_47_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 51)(1, "div")(2, "table", 52)(3, "tr")(4, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "\u0410\u0432\u0430\u0442\u0430\u0440");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "\u041F\u043E\u0434\u043F\u0438\u0441\u043A\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "tr")(11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, UserProfileComponent_div_47_td_18_img_12_Template, 1, 1, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const element_r32 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵattribute"]("colspan", ctx_r14.columnsToDisplay.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("@detailExpand", element_r32.expanded ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", element_r32.avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", element_r32.phone, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("checked", element_r32.subscription)("disabled", true);
  }
}
function UserProfileComponent_div_47_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "tr", 58);
  }
}
function UserProfileComponent_div_47_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UserProfileComponent_div_47_tr_20_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r37);
      const element_r35 = restoredCtx.$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r36.toggleRow(element_r35));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("expanded-row", element_r35.expanded);
  }
}
function UserProfileComponent_div_47_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "tr", 60);
  }
}
function UserProfileComponent_div_47_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr", 61)(1, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \"", _r12.value, "\"");
  }
}
const _c4 = () => ({
  "background": "rgb(253, 235, 213)",
  "text-align": "start"
});
function UserProfileComponent_div_47_ng_container_33_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](2, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r40.adminFeedbackToDisplayName[column_r39], " ");
  }
}
const _c5 = (a0, a1) => ({
  "width": a0,
  "max-width": a1,
  "text-overflow": "ellipsis",
  "overflow": "hidden",
  "white-space": "nowrap"
});
function UserProfileComponent_div_47_ng_container_33_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("dblclick", function UserProfileComponent_div_47_ng_container_33_td_2_Template_td_dblclick_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r45);
      const element_r43 = restoredCtx.$implicit;
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r44.openFeedback(element_r43));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r43 = ctx.$implicit;
    const column_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](5, _c5, ctx_r41.isDate(element_r43[column_r39]) ? "260px" : column_r39 == "message" ? "40vw" : "10vw", ctx_r41.isDate(element_r43[column_r39]) ? "260px" : column_r39 == "message" ? "40vw" : "10vw"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r41.isDate(element_r43[column_r39]) ? _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 2, element_r43[column_r39], "medium") : element_r43[column_r39], "");
  }
}
function UserProfileComponent_div_47_ng_container_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, UserProfileComponent_div_47_ng_container_33_th_1_Template, 2, 3, "th", 63)(2, UserProfileComponent_div_47_ng_container_33_td_2_Template, 3, 8, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matColumnDef", column_r39);
  }
}
function UserProfileComponent_div_47_tr_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "tr", 58);
  }
}
function UserProfileComponent_div_47_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "tr", 67);
  }
}
function UserProfileComponent_div_47_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr", 61)(1, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \"", _r12.value, "\"");
  }
}
const _c6 = () => ["expandedDetail"];
const _c7 = () => [10, 15, 20, 25];
function UserProfileComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "mat-tab", 26)(2, "div", 27)(3, "h1", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4, "\u0421\u043F\u0438\u0441\u043E\u043A \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 29)(6, "mat-form-field")(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "\u0424\u0438\u043B\u044C\u0442\u0440 \u043F\u043E \u0441\u0442\u043E\u043B\u0431\u0446\u0430\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "input", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup", function UserProfileComponent_div_47_Template_input_keyup_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r49);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r48.applyFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UserProfileComponent_div_47_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r49);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r50.manageAllRows(true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12, "\u0420\u0430\u0441\u043A\u0440\u044B\u0442\u044C \u0432\u0441\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UserProfileComponent_div_47_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r49);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r51.manageAllRows(false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](14, "\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0432\u0441\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "table", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](16, UserProfileComponent_div_47_ng_container_16_Template, 3, 1, "ng-container", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](17, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, UserProfileComponent_div_47_td_18_Template, 17, 6, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](19, UserProfileComponent_div_47_tr_19_Template, 1, 0, "tr", 37)(20, UserProfileComponent_div_47_tr_20_Template, 1, 2, "tr", 38)(21, UserProfileComponent_div_47_tr_21_Template, 1, 0, "tr", 39)(22, UserProfileComponent_div_47_tr_22_Template, 3, 1, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](23, "mat-paginator", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "mat-tab", 42)(25, "div", 43)(26, "mat-form-field")(27, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28, "\u0424\u0438\u043B\u044C\u0442\u0440 \u043F\u043E \u0441\u0442\u043E\u043B\u0431\u0446\u0430\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "input", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup", function UserProfileComponent_div_47_Template_input_keyup_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r49);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r52.applyFeedbackFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "table", 44, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](33, UserProfileComponent_div_47_ng_container_33_Template, 3, 1, "ng-container", 34)(34, UserProfileComponent_div_47_tr_34_Template, 1, 0, "tr", 37)(35, UserProfileComponent_div_47_tr_35_Template, 1, 0, "tr", 46)(36, UserProfileComponent_div_47_tr_36_Template, 3, 1, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](37, "mat-paginator", 41, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dataSource", ctx_r6.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r6.columnsToDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matHeaderRowDef", ctx_r6.columnsToDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matRowDefColumns", ctx_r6.columnsToDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](11, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](12, _c7));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dataSource", ctx_r6.adminFeedbackDataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r6.adminFeedbackToDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matHeaderRowDef", ctx_r6.adminFeedbackToDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matRowDefColumns", ctx_r6.adminFeedbackToDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](13, _c7));
  }
}
function UserProfileComponent_div_49_div_3_img_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UserProfileComponent_div_49_div_3_img_14_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r64);
      const art_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r62.updateFavourite(art_r59.uid));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function UserProfileComponent_div_49_div_3_img_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "img", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UserProfileComponent_div_49_div_3_img_15_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r67);
      const art_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r65.updateFavourite(art_r59.uid));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
const _c8 = (a0, a1, a2, a3, a4, a5, a6) => ({
  "font-size": a0,
  "fontFamily": a1,
  "color": a2,
  "text-align": a3,
  "font-style": a4,
  "font-weight": a5,
  "text-decoration": a6
});
const _c9 = (a0, a1, a2, a3, a4, a5, a6) => ({
  "font-size": a0,
  "fontFamily": a1,
  "color": a2,
  "text-align": a3,
  "font-style": a4,
  "font-weight": a5,
  "text-decoration": a6,
  "padding": "0.3rem"
});
function UserProfileComponent_div_49_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 72)(1, "mat-card", 73)(2, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 75)(5, "img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("dblclick", function UserProfileComponent_div_49_div_3_Template_img_dblclick_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r69);
      const art_r59 = restoredCtx.$implicit;
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r68.openArt(art_r59.pictureImage));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](12, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "span", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](14, UserProfileComponent_div_49_div_3_img_14_Template, 1, 0, "img", 80)(15, UserProfileComponent_div_49_div_3_img_15_Template, 1, 0, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const art_r59 = ctx.$implicit;
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    let tmp_3_0;
    let tmp_5_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction7"](10, _c8, ctx_r53.currentItemFontSize(art_r59.uid, true, false, false), ctx_r53.currentItemFont(art_r59.uid, true, false, false), ctx_r53.currentItemColor(art_r59.uid, true, false, false), ctx_r53.currentItemAlign(art_r59.uid, true, false, false), ctx_r53.currentItemStyle(art_r59.uid, true, false, false), ctx_r53.currentItemWeight(art_r59.uid, true, false, false), ctx_r53.currentItemStroke(art_r59.uid, true, false, false)));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", art_r59.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", "data:Image/*;base64," + art_r59.pictureImage, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction7"](18, _c8, ctx_r53.currentItemFontSize(art_r59.uid, false, true, false), (tmp_3_0 = ctx_r53.currentItemFont(art_r59.uid, false, true, false)) == null ? null : tmp_3_0.replace("-", " "), ctx_r53.currentItemColor(art_r59.uid, false, true, false), ctx_r53.currentItemAlign(art_r59.uid, false, true, false), ctx_r53.currentItemStyle(art_r59.uid, false, true, false), ctx_r53.currentItemWeight(art_r59.uid, false, true, false), ctx_r53.currentItemStroke(art_r59.uid, false, true, false)));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", art_r59.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction7"](26, _c9, ctx_r53.currentItemFontSize(art_r59.uid, false, false, true), (tmp_5_0 = ctx_r53.currentItemFont(art_r59.uid, false, false, true)) == null ? null : tmp_5_0.replace("-", " "), ctx_r53.currentItemColor(art_r59.uid, false, false, true), ctx_r53.currentItemAlign(art_r59.uid, false, false, true), ctx_r53.currentItemStyle(art_r59.uid, false, false, true), ctx_r53.currentItemWeight(art_r59.uid, false, false, true), ctx_r53.currentItemStroke(art_r59.uid, false, false, true)));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", art_r59.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r53.getMenuFullName(art_r59.subMenuUid), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r53.isFavourite(art_r59.uid));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r53.isFavourite(art_r59.uid));
  }
}
function UserProfileComponent_div_49_ng_container_12_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](2, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r71.feedbackToDisplayName[column_r70], " ");
  }
}
function UserProfileComponent_div_49_ng_container_12_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("dblclick", function UserProfileComponent_div_49_ng_container_12_td_2_Template_td_dblclick_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r76);
      const element_r74 = restoredCtx.$implicit;
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r75.openFeedback(element_r74));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r74 = ctx.$implicit;
    const column_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction2"](5, _c5, ctx_r72.isDate(element_r74[column_r70]) ? "260px" : column_r70 == "message" ? "40vw" : "10vw", ctx_r72.isDate(element_r74[column_r70]) ? "260px" : column_r70 == "message" ? "40vw" : "10vw"));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx_r72.isDate(element_r74[column_r70]) ? _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind2"](2, 2, element_r74[column_r70], "medium") : element_r74[column_r70], "");
  }
}
function UserProfileComponent_div_49_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, UserProfileComponent_div_49_ng_container_12_th_1_Template, 2, 3, "th", 63)(2, UserProfileComponent_div_49_ng_container_12_td_2_Template, 3, 8, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matColumnDef", column_r70);
  }
}
function UserProfileComponent_div_49_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "tr", 58);
  }
}
function UserProfileComponent_div_49_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "tr", 84);
  }
}
function UserProfileComponent_div_49_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tr", 61)(1, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \"", _r54.value, "\"");
  }
}
function UserProfileComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div")(1, "mat-tab", 68)(2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, UserProfileComponent_div_49_div_3_Template, 16, 34, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "mat-tab", 42)(5, "div", 43)(6, "mat-form-field")(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "\u0424\u0438\u043B\u044C\u0442\u0440 \u043F\u043E \u0441\u0442\u043E\u043B\u0431\u0446\u0430\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "input", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup", function UserProfileComponent_div_49_Template_input_keyup_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r80);
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r79.applyFeedbackFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "table", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, UserProfileComponent_div_49_ng_container_12_Template, 3, 1, "ng-container", 34)(13, UserProfileComponent_div_49_tr_13_Template, 1, 0, "tr", 37)(14, UserProfileComponent_div_49_tr_14_Template, 1, 0, "tr", 71)(15, UserProfileComponent_div_49_tr_15_Template, 3, 1, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](16, "mat-paginator", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r7.arts);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dataSource", ctx_r7.feedbackDataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r7.feedbackToDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matHeaderRowDef", ctx_r7.feedbackToDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matRowDefColumns", ctx_r7.feedbackToDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](6, _c7));
  }
}
class UserProfileComponent {
  constructor(formBuilder, accountService, spinner, userService, favouriteService, settingsService, masterworkService, menuService, dialog, userStore) {
    this.formBuilder = formBuilder;
    this.accountService = accountService;
    this.spinner = spinner;
    this.userService = userService;
    this.favouriteService = favouriteService;
    this.settingsService = settingsService;
    this.masterworkService = masterworkService;
    this.menuService = menuService;
    this.dialog = dialog;
    this.userStore = userStore;
    this.componentDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
    this.hidePass = true;
    this.columnsToDisplay = ['name', 'familyName', 'email'];
    this.columnsToDisplayName = {
      name: 'Имя',
      familyName: 'Фамилия',
      email: 'Почта'
    };
    this.fileUploadMessage = 'Переместите файл сюда';
    this.favouritesToRemove = [];
    this.feedbackToDisplay = ['askedDateTime', 'message'];
    this.feedbackToDisplayName = {
      askedDateTime: 'Дата',
      message: 'Сообщение'
    };
    this.adminFeedbackToDisplay = ['userFullName', 'userEmail', 'askedDateTime', 'sentDateTime', 'message'];
    this.adminFeedbackToDisplayName = {
      userFullName: 'Пользователь',
      userEmail: 'email',
      askedDateTime: 'Дата вопроса',
      sentDateTime: 'Дата отправки',
      message: 'Сообщение'
    };
    this.isDate = value => {
      const date = new Date(value);
      return date instanceof Date && !isNaN(date.getTime());
    };
  }
  ngOnInit() {
    const profiles$ = this.accountService.getProfile().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.catchError)(() => {
      this.spinner.hide();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)([]);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.shareReplay)(1));
    this.isAdmin$ = this.userStore.curRole$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.map)(role => role === _services_user_store__WEBPACK_IMPORTED_MODULE_2__.UserRole.ADMIN));
    profiles$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.filter)(users => !!users), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.delay)(1000), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.tap)(users => {
      this.base64Output = users[0].avatar;
      this.users = users;
      this.updateForm(users[0]);
      this.tabSelectionChanged(0);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.first)()).subscribe();
    this.getFavourites();
    this.getMenu();
    this.createForm();
    this.userProfileForm.statusChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_21__.takeUntil)(this.componentDestroy), (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.distinctUntilChanged)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.tap)(() => this.isButtonDisabled())).subscribe();
    this.userService.isAdmin().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.tap)(isAdmin => this._isAdmin = isAdmin)).subscribe();
  }
  tabSelectionChanged(event) {
    if (event == 0 && this._isAdmin) {
      this.getUsers();
    }
    if (event == 1) {
      this.getFeedback();
    }
  }
  getUsers() {
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatTableDataSource(this.users);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  getFeedback() {
    this.accountService.getFeedback().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.catchError)(() => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)([]);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.shareReplay)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.tap)(messages => {
      if (this._isAdmin) {
        this.adminFeedbackDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatTableDataSource(messages);
        this.adminFeedbackDataSource.sort = this.adminFeedbackSort;
        this.adminFeedbackDataSource.paginator = this.adminFeedbackPaginator;
      } else {
        this.feedbackDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatTableDataSource(messages);
        this.feedbackDataSource.sort = this.feedbackSort;
        this.feedbackDataSource.paginator = this.feedbackPaginator;
      }
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.first)()).subscribe();
  }
  ngOnDestroy() {
    this.componentDestroy.next();
    this.componentDestroy.complete();
  }
  getFavourites() {
    this.spinner.show();
    const favourites$ = this.favouriteService.getFavourites().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.shareReplay)(1));
    favourites$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.tap)(result => {
      this.favourites = result.items;
      this.getArts(this.favourites);
      this.getFormatting(this.favourites);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.catchError)(() => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)([]);
    })).subscribe();
  }
  getArts(favourites) {
    var _this = this;
    return (0,E_EVA_EZ_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let paged = {
        uids: favourites.map(element => element.artUid),
        page: new _models_page_model__WEBPACK_IMPORTED_MODULE_4__.Page()
      };
      let totalCount = 0;
      let currentCount = 0;
      const page = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_24__.firstValueFrom)(_this.masterworkService.getMasterworkByUids(paged));
      totalCount = page.totalCount;
      currentCount += page.items.length;
      const pagesPromises = [];
      while (totalCount > currentCount) {
        paged.page.pageNumber++;
        currentCount += page.items.length;
        pagesPromises.push((0,rxjs__WEBPACK_IMPORTED_MODULE_24__.firstValueFrom)(_this.masterworkService.getMasterworkByUids(paged)));
      }
      let pages = yield Promise.all(pagesPromises);
      pages = [page, ...pages];
      const files$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)(pages.flatMap(page => page.items)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.shareReplay)(1));
      files$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.tap)(result => {
        _this.arts = result;
        _this.spinner.hide();
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.catchError)(() => {
        _this.spinner.hide();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)([]);
      })).subscribe();
    })();
  }
  getFormatting(favourites) {
    const formats$ = this.settingsService.getTextFormattingByArtUids(favourites.map(element => element.artUid)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.shareReplay)(1));
    formats$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.tap)(formats => {
      this.textFormats = formats;
      this.spinner.hide();
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.catchError)(() => {
      this.spinner.hide();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)([]);
    })).subscribe();
  }
  getMenu() {
    const menu$ = this.menuService.getMenu().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_13__.catchError)(() => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)([]);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.shareReplay)(1));
    menu$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_19__.tap)(menu => {
      this.menu = menu;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.first)()).subscribe();
  }
  applyFilter(event) {
    const filterValue = event.target.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  toggleRow(element) {
    element.expanded = !element.expanded;
  }
  manageAllRows(flag) {
    this.users.forEach(row => {
      row.expanded = flag;
    });
  }
  isButtonDisabled() {
    return this.name === this.userProfileForm.value.name && this.familyName === this.userProfileForm.value.familyName && this.phone === this.userProfileForm.value.phone && this.password === this.userProfileForm.value.password && this.subscription === this.userProfileForm.value.subscription && this.avatar === this.base64Output && this.favouritesToRemove.length === 0;
  }
  onSubmit() {
    if (this.userProfileForm.valid) {
      this.formData = {
        name: this.userProfileForm.value.name,
        familyName: this.userProfileForm.value.familyName,
        password: this.userProfileForm.value.password,
        phone: this.userProfileForm.value.phone,
        subscription: this.userProfileForm.value.subscription,
        avatar: this.base64Output
      };
      this.userService.updateUserInfo(this.formData).subscribe();
      this.name = this.userProfileForm.value.name;
      this.familyName = this.userProfileForm.value.familyName ?? null;
      this.password = this.userProfileForm.value.password;
      this.phone = this.userProfileForm.value.phone ?? null;
      this.subscription = this.userProfileForm.value.subscription;
      this.avatar = this.base64Output;
      if (this.favouritesToRemove.length > 0) {
        this.favouriteService.removeFavourite(this.favouritesToRemove).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.catchError)(() => {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)(false);
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.tap)(result => {
          if (result.isSucceed === true) {
            this.favouritesToRemove = [];
            this.getFavourites();
          }
        })).subscribe();
      }
    }
  }
  get _userpassword() {
    return this.userProfileForm.get('password');
  }
  get _username() {
    return this.userProfileForm.get('name');
  }
  get _userfamilyName() {
    return this.userProfileForm.get('familyName');
  }
  get _userphone() {
    return this.userProfileForm.get('phone');
  }
  get _subscription() {
    return this.userProfileForm.get('subscription');
  }
  createForm() {
    this.spinner.show();
    this.userProfileForm = this.formBuilder.group({
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_25__.Validators.required]],
      phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_25__.Validators.pattern('[- +()0-9]+')]],
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_25__.Validators.required]],
      email: [''],
      familyName: [''],
      subscription: [false]
    });
  }
  updateForm(user) {
    this.spinner.hide();
    this.userProfileForm.patchValue({
      password: user.password,
      phone: user.phone ?? '',
      name: user.name,
      familyName: user.familyName ?? '',
      email: user.email,
      subscription: user.subscription
    });
    this.name = user.name;
    this.familyName = user.familyName ?? '';
    this.phone = user.phone ?? '';
    this.password = user.password;
    this.subscription = user.subscription;
    this.avatar = user.avatar;
  }
  filesDropped(files) {
    var mimeType = files[0].file.type;
    if (mimeType.match(/image\/*/) == null) {
      this.fileUploadMessage = "Поддерживаются только изображения";
      return;
    }
    if (files[0].file.size > 1048576) {
      this.fileUploadMessage = "Размер аватара не должен превышать 1 Мб";
      return;
    }
    this.onFileSelected(files);
  }
  onFileSelected(files) {
    this.convertFile(files).subscribe(base64 => {
      this.base64Output = base64;
    });
  }
  convertFile(files) {
    const result = new rxjs__WEBPACK_IMPORTED_MODULE_26__.ReplaySubject(1);
    const reader = new FileReader();
    reader.readAsBinaryString(files[0].file);
    reader.onload = event => result.next(btoa(event.target.result.toString()));
    return result;
  }
  removeAvatar() {
    this.base64Output = '';
  }
  isFavourite(uid) {
    return this.favourites.find(x => x.artUid == uid) === undefined ? false : true;
  }
  updateFavourite(uid) {
    if (this.isFavourite(uid)) {
      this.favouritesToRemove.push(uid);
      const i = this.favourites.findIndex(item => item.artUid == uid);
      this.favourites.splice(i, 1);
    } else {
      const index = this.favouritesToRemove.findIndex(value => value == uid);
      if (index != -1) this.favouritesToRemove.splice(index, 1);
      const i = this.favourites.findIndex(item => item.artUid == uid);
      this.favourites.push({
        artUid: uid
      });
    }
  }
  getMenuFullName(submenuUid) {
    const submenuName = this.menu?.find(x => x.subMenuItems?.filter(y => y.uid == submenuUid))?.subMenuItems?.find(z => z.uid == submenuUid)?.name;
    const menuName = this.menu?.find(x => x.uid == x.subMenuItems?.find(y => y.uid == submenuUid)?.menuUid)?.name;
    return !menuName ? "" : `Меню:  ${menuName} / ${submenuName}`;
  }
  currentItemFont(itemUid, text, date, desc) {
    let x = this.textFormats?.items.find(x => x.masterworkUid === itemUid && x.isText === text && x.isDate === date && x.isDesc === desc)?.font;
    return x === undefined || x === null ? "Arbor" : x;
  }
  currentItemFontSize(itemUid, text, date, desc) {
    let x = this.textFormats?.items.find(x => x.masterworkUid === itemUid && x.isText === text && x.isDate === date && x.isDesc === desc)?.fontSize;
    return x === undefined || x === null ? "20px" : x;
  }
  currentItemColor(itemUid, text, date, desc) {
    let x = this.textFormats?.items.find(x => x.masterworkUid === itemUid && x.isText === text && x.isDate === date && x.isDesc === desc)?.color;
    return x === undefined || x === null ? "black" : x;
  }
  currentItemStyle(itemUid, text, date, desc) {
    let x = this.textFormats?.items.find(x => x.masterworkUid === itemUid && x.isText === text && x.isDate === date && x.isDesc === desc)?.style;
    return x === undefined ? null : x;
  }
  currentItemWeight(itemUid, text, date, desc) {
    let x = this.textFormats?.items.find(x => x.masterworkUid === itemUid && x.isText === text && x.isDate === date && x.isDesc === desc)?.weight;
    return x === undefined ? null : x;
  }
  currentItemAlign(itemUid, text, date, desc) {
    let x = this.textFormats?.items.find(x => x.masterworkUid === itemUid && x.isText === text && x.isDate === date && x.isDesc === desc)?.align;
    return x === undefined ? null : x;
  }
  currentItemStroke(itemUid, text, date, desc) {
    let x = this.textFormats?.items.find(x => x.masterworkUid === itemUid && x.isText === text && x.isDate === date && x.isDesc === desc)?.strokeUnderline;
    return x === undefined ? null : x;
  }
  openArt(image) {
    const maxW = "1200px";
    const maxH = "900px";
    this.dialog.open(_dialogref_art_item_art_item_dialogref_component__WEBPACK_IMPORTED_MODULE_1__.ArtItemDialogrefComponent, {
      maxWidth: maxW,
      maxHeight: maxH,
      data: {
        image: image,
        maxW: maxW,
        maxH: maxH
      }
    });
  }
  openFeedback(element) {
    const maxW = "900px";
    const maxH = "600px";
    this.dialog.open(_dialogref_feedback_message_feedback_message_dialogref_component__WEBPACK_IMPORTED_MODULE_3__.FeedbackMessageDialogrefComponent, {
      maxWidth: maxW,
      maxHeight: maxH,
      data: {
        message: element[this._isAdmin ? this.adminFeedbackToDisplay[4] : this.feedbackToDisplay[1]],
        date: element[this._isAdmin ? this.adminFeedbackToDisplay[2] : this.feedbackToDisplay[0]],
        width: maxW,
        height: maxH
      }
    });
  }
  applyFeedbackFilter(event) {
    const filterValue = event.target.value;
    if (this._isAdmin) {
      this.adminFeedbackDataSource.filter = filterValue.trim().toLowerCase();
      if (this.adminFeedbackDataSource.paginator) {
        this.adminFeedbackDataSource.paginator.firstPage();
      }
    } else {
      this.feedbackDataSource.filter = filterValue.trim().toLowerCase();
      if (this.feedbackDataSource.paginator) {
        this.feedbackDataSource.paginator.firstPage();
      }
    }
  }
  static #_ = this.ɵfac = function UserProfileComponent_Factory(t) {
    return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_25__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_account_service__WEBPACK_IMPORTED_MODULE_5__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_27__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_favourite_service__WEBPACK_IMPORTED_MODULE_7__.FavouriteService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_settings_service__WEBPACK_IMPORTED_MODULE_8__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_masterwork_service__WEBPACK_IMPORTED_MODULE_9__.MasterworkService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_menu_service__WEBPACK_IMPORTED_MODULE_10__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_user_store__WEBPACK_IMPORTED_MODULE_2__.UserStore));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: UserProfileComponent,
    selectors: [["app-user-profile"]],
    viewQuery: function UserProfileComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_30__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__.MatPaginator, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_30__.MatSort, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.feedbackPaginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.feedbackSort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.adminFeedbackPaginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.adminFeedbackSort = _t.first);
      }
    },
    decls: 51,
    vars: 22,
    consts: () => {
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2504581474466771325$$SRC_APP_MODULES_ACCOUNT_MODULES_USER_PROFILE_USER_PROFILE_COMPONENT_TS_3 = goog.getMsg(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ");
        i18n_2 = MSG_EXTERNAL_2504581474466771325$$SRC_APP_MODULES_ACCOUNT_MODULES_USER_PROFILE_USER_PROFILE_COMPONENT_TS_3;
      } else {
        i18n_2 = $localize` Сохранить `;
      }
      return [["type", "square-jelly-box"], ["fxLayout", "row", 1, "protected"], [1, "profile-item"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "sticky-top", 3, "formGroup", "ngSubmit"], [1, "profile-field"], ["type", "name", "placeholder", "\u0418\u043C\u044F", "required", "", "formControlName", "name", "matInput", ""], [4, "ngIf"], ["type", "familyName", "placeholder", "\u0424\u0430\u043C\u0438\u043B\u0438\u044F", "matInput", "", "formControlName", "familyName"], ["matInput", "", "formControlName", "email", 3, "readonly"], ["matPrefix", "", "svgIcon", "mail-sm"], ["type", "phone", "placeholder", "\u0422\u0435\u043B\u0435\u0444\u043E\u043D", "matInput", "", "formControlName", "phone"], ["matPrefix", "", "svgIcon", "password", 1, "menu-form__email-icon", "mat-icon-stroke"], ["placeholder", "\u041F\u0430\u0440\u043E\u043B\u044C", "required", "", "minlength", "8", "matInput", "", "formControlName", "password", 3, "type"], ["type", "button", "mat-icon-button", "", "matSuffix", "", 3, "matTooltip", "click"], ["aria-hidden", "false", "matPrefix", "", 1, "menu-form__visibility-icon", "mat-icon-stroke", 2, "margin-bottom", "5px !important", 3, "svgIcon"], [2, "margin-top", "2rem"], ["class", "col-12 rmpm dropzone", "appDragDrop", "", 3, "files", 4, "ngIf"], [2, "margin-bottom", "2vh"], ["style", "max-width: 150px", "appDragDrop", "", 3, "src", "files", 4, "ngIf"], ["type", "button", 2, "margin-bottom", "2vh", 3, "disabled", "click"], ["formControlName", "subscription"], ["type", "button", "mat-raised-button", "", "color", "grey", 1, "menu-form__submit", 3, "disabled", "click"], i18n_2, ["mat-stretch-tabs", "", "fxFlex", "", 2, "padding-bottom", "2rem", 3, "selectedIndexChange"], ["appDragDrop", "", 1, "col-12", "rmpm", "dropzone", 3, "files"], ["appDragDrop", "", 2, "max-width", "150px", 3, "src", "files"], ["label", "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438"], [1, "row", "mt-3"], [2, "text-align", "center"], ["fxLayout", "column"], ["matInput", "", "placeholder", "\u041F\u0440\u0438\u043C\u0435\u0440: gl", 3, "keyup"], ["input", ""], [3, "click"], ["mat-table", "", "matSort", "", "multiTemplateDataRows", "", 1, "mat-elevation-z8", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["matColumnDef", "expandedDetail"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "element-row", 3, "expanded-row", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "detail-row", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", 1, "mat-elevation-z2", 3, "pageSizeOptions"], ["label", "\u041E\u0431\u0440\u0430\u0442\u043D\u0430\u044F \u0441\u0432\u044F\u0437\u044C"], ["fxLayout", "column", 1, "row", "mt-3", "protected", 2, "padding-right", "1em", "padding-left", "1em"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["adminFeedbackSort", "matSort"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["adminFeedbackPaginator", ""], [3, "matColumnDef"], ["class", "cell-table", "style", "background: rgb(253, 235, 213);", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-sort-header", "", 1, "cell-table", 2, "background", "rgb(253, 235, 213)"], ["mat-cell", ""], [1, "detail-table"], [2, "width", "10vw"], [2, "width", "5vw"], ["style", "max-width: 50px", 3, "src", 4, "ngIf"], ["type", "checkbox", 3, "checked", "disabled"], [2, "max-width", "50px", 3, "src"], ["mat-header-row", ""], ["mat-row", "", 1, "element-row", 3, "click"], ["mat-row", "", 1, "detail-row"], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"], ["mat-header-cell", "", "mat-sort-header", "", 3, "ngStyle", 4, "matHeaderCellDef"], ["mat-cell", "", "matTooltip", "\u041A\u043B\u0438\u043A\u043D\u0438\u0442\u0435 \u0434\u0432\u0430\u0436\u0434\u044B, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C", "matTooltipPosition", "right", 3, "ngStyle", "dblclick", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", "", 3, "ngStyle"], ["mat-cell", "", "matTooltip", "\u041A\u043B\u0438\u043A\u043D\u0438\u0442\u0435 \u0434\u0432\u0430\u0436\u0434\u044B, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C", "matTooltipPosition", "right", 3, "ngStyle", "dblclick"], ["mat-row", ""], ["label", "\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435"], ["fxLayout", "row", "fxLayoutAlign", "center", 1, "wrap-files"], ["class", "mat-elevation-z8", 4, "ngFor", "ngForOf"], ["mat-row", "", "style", "text-wrap: wrap;", 4, "matRowDef", "matRowDefColumns"], [1, "mat-elevation-z8"], ["fxLayout", "column", 1, "arts-card", "protected", 2, "background-color", "white", "height", "100%"], [3, "ngStyle"], ["matTooltip", "\u041A\u043B\u0438\u043A\u043D\u0438\u0442\u0435 \u0434\u0432\u0430\u0436\u0434\u044B, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C", "matTooltipPosition", "right", 1, "protected", 2, "align-self", "center", "margin", "0.3rem"], [2, "max-width", "300px", "max-height", "300px", 3, "src", "dblclick"], [2, "padding-top", "10px"], ["fxFlex", ""], ["fxLayoutAlign", "center"], ["width", "40", "height", "36", "src", "assets/images/favourite.png", 3, "click", 4, "ngIf"], ["width", "40", "height", "36", "src", "assets/images/favouriteEmpty.png", 3, "click", 4, "ngIf"], ["width", "40", "height", "36", "src", "assets/images/favourite.png", 3, "click"], ["width", "40", "height", "36", "src", "assets/images/favouriteEmpty.png", 3, "click"], ["mat-row", "", 2, "text-wrap", "wrap"]];
    },
    template: function UserProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("ngSubmit", function UserProfileComponent_Template_form_ngSubmit_3_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5, "\u041F\u0420\u041E\u0424\u0418\u041B\u042C");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "mat-form-field", 4)(7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "\u0418\u043C\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](10, UserProfileComponent_mat_error_10_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "mat-form-field", 4)(12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](13, "\u0424\u0430\u043C\u0438\u043B\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "mat-form-field", 4)(16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17, "\u041F\u043E\u0447\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "input", 8)(19, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](20, "mat-form-field", 4)(21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](23, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](24, UserProfileComponent_mat_error_24_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](26, "mat-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28, "\u041F\u0430\u0440\u043E\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](29, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](30, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UserProfileComponent_Template_button_click_30_listener() {
          return ctx.hidePass = !ctx.hidePass;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](31, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](32, UserProfileComponent_mat_error_32_Template, 2, 0, "mat-error", 6)(33, UserProfileComponent_mat_error_33_Template, 2, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "mat-label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](35, "\u0410\u0432\u0430\u0442\u0430\u0440");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](36, UserProfileComponent_div_36_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](38, UserProfileComponent_img_38_Template, 1, 1, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UserProfileComponent_Template_button_click_39_listener() {
          return ctx.removeAvatar();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](40, "\u0423\u0431\u0440\u0430\u0442\u044C \u0430\u0432\u0430\u0442\u0430\u0440");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "mat-checkbox", 20)(42, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](43, "\u041F\u043E\u0434\u043F\u0438\u0441\u043A\u0430 \u043D\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](44, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function UserProfileComponent_Template_button_click_44_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵi18n"](45, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "mat-tab-group", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("selectedIndexChange", function UserProfileComponent_Template_mat_tab_group_selectedIndexChange_46_listener($event) {
          return ctx.tabSelectionChanged($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](47, UserProfileComponent_div_47_Template, 39, 14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](48, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](49, UserProfileComponent_div_49_Template, 17, 7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](50, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formGroup", ctx.userProfileForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx._username.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("readonly", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx._userphone.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("type", ctx.hidePass ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matTooltip", ctx.hidePass ? "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C" : "\u0421\u043A\u0440\u044B\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵattribute"]("aria-label", "\u0421\u043A\u0440\u044B\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C")("aria-pressed", ctx.hidePass)("tabIndex", -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("svgIcon", ctx.hidePass ? "visibility-off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx._userpassword.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx._userpassword.hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.base64Output);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.base64Output);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", !ctx.base64Output);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("disabled", ctx.userProfileForm.invalid || ctx.isButtonDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](48, 18, ctx.isAdmin$));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](50, 20, ctx.isAdmin$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_31__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_31__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_31__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_32__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_32__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_32__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_33__.DefaultStyleDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_34__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_34__.MatIconButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_35__.MatCard, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_36__.MatCheckbox, _angular_material_icon__WEBPACK_IMPORTED_MODULE_37__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_38__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__.MatSuffix, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_30__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatNoDataRow, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__.MatTabGroup, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__.MatTooltip, ngx_spinner__WEBPACK_IMPORTED_MODULE_27__.NgxSpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_31__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_31__.DatePipe],
    styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  overflow: auto;\n  height: 100%;\n  position: fixed;\n  padding-bottom: 2.5rem;\n}\n\n.profile-item[_ngcontent-%COMP%] {\n  width: 25rem;\n  display: flex;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  flex-wrap: nowrap;\n  padding-bottom: 6rem;\n}\n\n.profile-field[_ngcontent-%COMP%] {\n  appearance: \"outline\";\n  color: \"accent\";\n  width: 22rem;\n}\n\n.dropzone[_ngcontent-%COMP%] {\n  height: 70px;\n  width: 70px;\n  padding: 2rem;\n  border: dashed 4px #979797;\n  display: table;\n}\n\n.cell-table[_ngcontent-%COMP%] {\n  width: 22vw;\n  height: 4vh;\n  background: rgb(253, 235, 213);\n}\n\n.detail-table[_ngcontent-%COMP%] {\n  background: rgba(199, 199, 199, 0.4509803922);\n  text-align: center;\n}\n\n.detail-row[_ngcontent-%COMP%] {\n  height: 0;\n}\n\n.element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 0;\n}\n\nmat-grid-list[_ngcontent-%COMP%] {\n  width: 65vw;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\nmat-grid-tile[_ngcontent-%COMP%] {\n  background: rgb(169, 170, 170);\n  min-width: 15vw;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hY2NvdW50L21vZHVsZXMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2Q0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBwYWRkaW5nLWJvdHRvbTogMi41cmVtO1xyXG59XHJcblxyXG4ucHJvZmlsZS1pdGVteyBcclxuICB3aWR0aDogMjVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nLWxlZnQ6IDFyZW07IFxyXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgcGFkZGluZy1ib3R0b206IDZyZW07XHJcbn1cclxuXHJcbi5wcm9maWxlLWZpZWxke1xyXG4gIGFwcGVhcmFuY2U6IFwib3V0bGluZVwiO1xyXG4gIGNvbG9yOiBcImFjY2VudFwiO1xyXG4gIHdpZHRoOiAyMnJlbTtcclxufVxyXG5cclxuLmRyb3B6b25lIHtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgcGFkZGluZzoycmVtO1xyXG4gIGJvcmRlcjpkYXNoZWQgNHB4ICM5Nzk3OTc7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbn1cclxuXHJcbi5jZWxsLXRhYmxle1xyXG4gIHdpZHRoOiAyMnZ3O1xyXG4gIGhlaWdodDogNHZoO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTMsIDIzNSwgMjEzKVxyXG59XHJcblxyXG4uZGV0YWlsLXRhYmxlIHtcclxuICBiYWNrZ3JvdW5kOiAjYzdjN2M3NzM7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGV0YWlsLXJvdyB7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG4uZWxlbWVudC1yb3cgdGQge1xyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbn1cclxuXHJcbm1hdC1ncmlkLWxpc3R7XHJcbiAgd2lkdGg6IDY1dnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxubWF0LWdyaWQtdGlsZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDE2OSwgMTcwLCAxNzApO1xyXG4gIG1pbi13aWR0aDogMTV2dzsgXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_42__.trigger)('detailExpand', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_42__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_42__.style)({
        height: '0px',
        minHeight: '0'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_42__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_42__.style)({
        height: '*'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_42__.transition)('expanded <=> collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_42__.animate)('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])]
    }
  });
}

/***/ }),

/***/ 2340:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/account/modules/validation/validation-error.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValidationErrorComponent: () => (/* binding */ ValidationErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 6515);




function ValidationErrorComponent_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ValidationErrorComponent_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
const _c0 = ["*"];
class ValidationErrorComponent {
  constructor() {
    this.canRemove = true;
    this.hideError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  close() {
    this.hideError.emit();
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function ValidationErrorComponent_Factory(t) {
    return new (t || ValidationErrorComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ValidationErrorComponent,
    selectors: [["app-validation-error"]],
    inputs: {
      canRemove: "canRemove"
    },
    outputs: {
      hideError: "hideError"
    },
    ngContentSelectors: _c0,
    decls: 4,
    vars: 1,
    consts: [[1, "validation-error__container"], ["class", "validation-error__button", 3, "click", 4, "ngIf"], [1, "validation-error__content"], [1, "validation-error__button", 3, "click"], ["svgIcon", "close-circle-o"]],
    template: function ValidationErrorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ValidationErrorComponent_button_1_Template, 2, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canRemove);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon],
    styles: ["[_nghost-%COMP%]   .validation-error__container[_ngcontent-%COMP%] {\n  display: flex;\n  box-sizing: border-box;\n  padding: 8px 14px;\n  color: #ffffff;\n  border: 1px solid #f2453d;\n  border-radius: 8px;\n  flex-flow: row nowrap;\n  align-items: center;\n}\n[_nghost-%COMP%]   .validation-error__button[_ngcontent-%COMP%] {\n  margin: 0;\n  margin: 3px 16px 0 0;\n  padding: 0;\n  cursor: pointer;\n  border: none;\n  outline: none;\n  background: none;\n}\n[_nghost-%COMP%]   .validation-error__content[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 20px;\n  color: red;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9hY2NvdW50L21vZHVsZXMvdmFsaWRhdGlvbi92YWxpZGF0aW9uLWVycm9yLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL3Njc3MvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUk7RUFDRSxhQUFBO0VBRUEsc0JBQUE7RUFDQSxpQkFBQTtFQUVBLGNDeUJRO0VEeEJSLHlCQUFBO0VBQ0Esa0JBQUE7RUFHQSxxQkFBQTtFQUNBLG1CQUFBO0FBUE47QUFVSTtFQUNFLFNBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFFQSxlQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQVZOO0FBbUJJO0VBQ0UsZUNsQ007RURtQ04sbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBakJOIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL3Njc3MvdmFyaWFibGVzJztcclxuXHJcbjpob3N0IHtcclxuICAudmFsaWRhdGlvbi1lcnJvciB7XHJcbiAgICAmX19jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgcGFkZGluZzogOHB4IDE0cHg7XHJcblxyXG4gICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItcmVkO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIC8vIGJhY2tncm91bmQ6ICRjb2xvci1yZWQ7XHJcblxyXG4gICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fYnV0dG9uIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBtYXJnaW46IDNweCAxNnB4IDAgMDtcclxuICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuXHJcbiAgICAgIC8vIDo6bmctZGVlcCB7XHJcbiAgICAgIC8vICAgc3ZnIHtcclxuICAgICAgLy8gICAgIGZpbGw6ICRjb2xvci13aGl0ZTtcclxuICAgICAgLy8gICB9XHJcbiAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICAmX19jb250ZW50IHtcclxuICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAaW1wb3J0ICdtaXhpbnMvYnJlYWtwb2ludHMnO1xyXG5cclxuJGZvbnQtZmFtaWx5LXByaW1hcnk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1mYW1pbHktc2Vjb25kYXJ5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiRmb250LXNpemU6IDE0cHg7XHJcblxyXG4kY29udGFpbmVyLXgtbGFyZ2Utd2lkdGg6IDE1NjBweDtcclxuJGNvbnRhaW5lci14LWxhcmdlLWluZGVudDogMDtcclxuXHJcbiRjb250YWluZXItd2lkdGg6IDEzMjBweDtcclxuJGNvbnRhaW5lci1pbmRlbnQ6IDIwcHg7IC8vIFRPRE86IHRoaXMgaXMgbm90IHRoZSBmaW5hbCBpbmRlbnRcclxuXHJcbiRjb250YWluZXItdGFibGV0LXdpZHRoOiAxMTEycHg7XHJcbiRjb250YWluZXItdGFibGV0LWluZGVudDogMjBweDtcclxuJGNvbnRhaW5lci10YWJsZXQtcG9ydHJhaXQtd2lkdGg6IDc2OHB4O1xyXG5cclxuLy8gYnJlYWtwb2ludHNcclxuJHNjcmVlbi14LWxhcmdlOiBjYWxjdWxhdGVXaWR0aChcclxuICAkY29udGFpbmVyLXgtbGFyZ2Utd2lkdGgsXHJcbiAgJGNvbnRhaW5lci14LWxhcmdlLWluZGVudFxyXG4pO1xyXG4kc2NyZWVuLWxhcmdlOiBjYWxjdWxhdGVXaWR0aCgkY29udGFpbmVyLXdpZHRoICsgMTAsICRjb250YWluZXItaW5kZW50KTtcclxuJHNjcmVlbi10YWJsZXQ6IGNhbGN1bGF0ZVdpZHRoKFxyXG4gICRjb250YWluZXItdGFibGV0LXdpZHRoLFxyXG4gICRjb250YWluZXItdGFibGV0LWluZGVudFxyXG4pO1xyXG4kc2NyZWVuLXRhYmxldC1wb3J0cmFpdDogY2FsY3VsYXRlV2lkdGgoXHJcbiAgJGNvbnRhaW5lci10YWJsZXQtcG9ydHJhaXQtd2lkdGgsXHJcbiAgJGNvbnRhaW5lci10YWJsZXQtaW5kZW50XHJcbik7XHJcblxyXG4vLyBuZXcgY29sb3JzXHJcbiRjb2xvci1ibGFjazogIzAwMDAwMDtcclxuJGNvbG9yLXRleHQ6IHJnYmEoJGNvbG9yLWJsYWNrLCAwLjg3KTtcclxuJGNvbG9yLWdyZXk6ICNhYmFjYWM7XHJcbiRjb2xvci13aGl0ZTogI2ZmZmZmZjtcclxuJGNvbG9yLXdoaXRlLXRyOiByZ2JhKCRjb2xvci13aGl0ZSwgMC40KTtcclxuJGNvbG9yLWZpc2g6ICNlMGUwZTA7XHJcbiRjb2xvci1iZy10YWI6ICNlYmViZWI7XHJcbiRjb2xvci1iYWNrZ3JvdW5kOiAjZjZmNmY2O1xyXG4kY29sb3ItYmx1ZS1kYXJrOiAjMTM0ZDVmO1xyXG4kY29sb3ItYmx1ZTogIzM0NjY4YTtcclxuJGNvbG9yLWJsdWUtbGlnaHQ6ICMzZTk5YWM7XHJcbiRjb2xvci1ncmVlbjogI2FhYzYzODtcclxuJGNvbG9yLWdyZWVuLWRhcms6ICMxYzRiMzU7XHJcbiRjb2xvci1ibHVlLXRleHQ6ICRjb2xvci1ibHVlLWxpZ2h0O1xyXG4kY29sb3ItdGV4dC1ncmVlbjogIzMzOGM0NztcclxuJGNvbG9yLXRleHQtbnVtYmVyOiAjNmJhNzJmO1xyXG4kY29sb3ItcmVkOiAjZjI0NTNkO1xyXG4kY29sb3ItY29vbC1ncmF5MWM6ICRjb2xvci1maXNoO1xyXG4kY29sb3Itb3JhbmdlOiAjZmY3YjU5O1xyXG4kY29sb3IteWVsbG93OiAjZjJjOTRjO1xyXG4kY29sb3ItYmctMzogI2YzZjRmNztcclxuXHJcbiRjb2xvci1iZy1saW5lOiAjYThiY2NiO1xyXG4kY29sb3ItdHJlZS1zdGljazogI2FlYzJkMDtcclxuJGNvbG9yLXNwZWNpYWw6ICNiOWM2ZDg7XHJcbiRjb2xvci1idXR0b24tZGlzYWJsZWQ6ICNkNmQ3ZDk7XHJcblxyXG4kY29sb3ItbmV3LXJhbmRvbS1jb2xvcjogI2ViZjBmMztcclxuXHJcbi8vIG9sZCBjb2xvcnMgLSByZW1vdmUgYWZ0ZXIgdXBkYXRpbmdcclxuJGNvbG9yLWJsYWNrLXRyOiByZ2JhKCRjb2xvci1ibGFjaywgMC44Nyk7XHJcblxyXG4vLyBzaGFkb3dcclxuXHJcbiRzaGFkb3ctYmxvY2s6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuJHNoYWRvdy1ibG9jay1maWx0ZXI6IGRyb3Atc2hhZG93KDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKSk7XHJcbiRzaGFkb3ctcG9wdXA6IDBweCAxcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDNweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuJHNoYWRvdy1wb3B1cC1maWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxcHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKSlcclxuICBkcm9wLXNoYWRvdygwcHggM3B4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpKTtcclxuXHJcbiRhbmltYXRpb246IHZhcigtLWZpbi1hbmltYXRpb24tc3BlZWQsIDAuMnMpIGVhc2U7XHJcblxyXG4kb3ZlcmxheS16LWluZGV4OiAxMDAwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    changeDetection: 0
  });
}

/***/ }),

/***/ 6472:
/*!***********************************************!*\
  !*** ./src/app/modules/alert/alert.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertModule: () => (/* binding */ AlertModule)
/* harmony export */ });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);


class AlertModule {
  static #_ = this.ɵfac = function AlertModule_Factory(t) {
    return new (t || AlertModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: AlertModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 6000
      }
    }]
  });
}

/***/ }),

/***/ 8479:
/*!************************************************!*\
  !*** ./src/app/modules/alert/alert.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertService: () => (/* binding */ AlertService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 4520);
/* harmony import */ var _models_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/alert */ 6916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 9409);





class AlertService {
  constructor(_snackBar) {
    this._snackBar = _snackBar;
    this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.defaultId = 'default-alert';
    this.horizontalPosition = 'end';
    this.verticalPosition = 'top';
    this.subject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(alert => {
      if (alert && alert.message && alert.message.length > 0) {
        this._snackBar.open(alert.message, 'Close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          panelClass: ["alert-style"]
        });
      } else this._snackBar.dismiss();
    })).subscribe();
  }
  // enable subscribing to alerts observable
  onAlert(id = this.defaultId) {
    return this.subject.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(x => x && x.id === id));
  }
  success(message, options) {
    this.alert(new _models_alert__WEBPACK_IMPORTED_MODULE_0__.Alert({
      ...options,
      type: _models_alert__WEBPACK_IMPORTED_MODULE_0__.AlertType.Success,
      message
    }));
  }
  error(message, options) {
    if (message && message.length > 0) {
      this.alert(new _models_alert__WEBPACK_IMPORTED_MODULE_0__.Alert({
        ...options,
        type: _models_alert__WEBPACK_IMPORTED_MODULE_0__.AlertType.Error,
        message
      }));
    }
  }
  info(message, options) {
    if (message && message.length > 0) {
      this.alert(new _models_alert__WEBPACK_IMPORTED_MODULE_0__.Alert({
        ...options,
        type: _models_alert__WEBPACK_IMPORTED_MODULE_0__.AlertType.Info,
        message
      }));
    }
  }
  warn(message, options) {
    this.alert(new _models_alert__WEBPACK_IMPORTED_MODULE_0__.Alert({
      ...options,
      type: _models_alert__WEBPACK_IMPORTED_MODULE_0__.AlertType.Warning,
      message
    }));
  }
  alert(alert) {
    alert.id = alert.id || this.defaultId;
    this.subject.next(alert);
  }
  clear(id = this.defaultId) {
    this.subject.next(new _models_alert__WEBPACK_IMPORTED_MODULE_0__.Alert({
      id
    }));
  }
  static #_ = this.ɵfac = function AlertService_Factory(t) {
    return new (t || AlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: AlertService,
    factory: AlertService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1790:
/*!*******************************************************************!*\
  !*** ./src/app/modules/circular-slider/circular-slider.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CircularSliderModule: () => (/* binding */ CircularSliderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _directives_circular_slider_handle_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives/circular-slider-handle.directive */ 8510);
/* harmony import */ var _components_circular_slider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/circular-slider.component */ 3065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




class CircularSliderModule {
  static #_ = this.ɵfac = function CircularSliderModule_Factory(t) {
    return new (t || CircularSliderModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: CircularSliderModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CircularSliderModule, {
    declarations: [_components_circular_slider_component__WEBPACK_IMPORTED_MODULE_1__.CircularSliderComponent, _directives_circular_slider_handle_directive__WEBPACK_IMPORTED_MODULE_0__.CircularSliderHandleDirective],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
    exports: [_components_circular_slider_component__WEBPACK_IMPORTED_MODULE_1__.CircularSliderComponent, _directives_circular_slider_handle_directive__WEBPACK_IMPORTED_MODULE_0__.CircularSliderHandleDirective]
  });
})();

/***/ }),

/***/ 3065:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/circular-slider/components/circular-slider.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CircularSliderComponent: () => (/* binding */ CircularSliderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _directives_circular_slider_handle_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../directives/circular-slider-handle.directive */ 8510);




const _c0 = (a0, a1) => ({
  "width.px": a0,
  "height.px": a1
});
class CircularSliderComponent {
  static #_ = this._counter = 0;
  get angle() {
    return this._angle;
  }
  set angle(deg) {
    this._angle = deg || 0;
    this.angleChange.emit(this._angle);
  }
  constructor() {
    this._angle = 0;
    this.diameter = 0;
    this.angleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    CircularSliderComponent._counter++;
    this.counter = CircularSliderComponent._counter;
  }
  ngOnInit() {}
  static #_2 = this.ɵfac = function CircularSliderComponent_Factory(t) {
    return new (t || CircularSliderComponent)();
  };
  static #_3 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CircularSliderComponent,
    selectors: [["circular-slider"]],
    inputs: {
      diameter: "diameter",
      angle: "angle"
    },
    outputs: {
      angleChange: "angleChange"
    },
    decls: 5,
    vars: 9,
    consts: [[1, "circle", 3, "id", "ngStyle"], ["container", ""], [1, "rotation", "protected"], ["circularSliderHandle", "", 1, "circle-handle", 3, "_counter", "diameter", "angle", "angleChange"]],
    template: function CircularSliderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("angleChange", function CircularSliderComponent_Template_div_angleChange_4_listener($event) {
          return ctx.angle = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "circleContainer" + ctx.counter)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](6, _c0, ctx.diameter, ctx.diameter));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.angle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("_counter", ctx.counter)("diameter", ctx.diameter)("angle", ctx.angle);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _directives_circular_slider_handle_directive__WEBPACK_IMPORTED_MODULE_0__.CircularSliderHandleDirective],
    styles: [".circle[_ngcontent-%COMP%] {\n  border: 5px solid #e1e1e1;\n  border-radius: 100%;\n  position: relative;\n}\n\n.circle-handle[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 100%;\n  background-color: #686868;\n  cursor: -webkit-grab;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.circle-handle[_ngcontent-%COMP%]:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.rotation[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.protected[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jaXJjdWxhci1zbGlkZXIvY29tcG9uZW50cy9jaXJjdWxhci1zbGlkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsdURBQUE7RUFDQSwrR0FBQTtBQUFKOztBQUtFO0VBQ0UscUhBQUE7QUFGSjs7QUFPRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFKSjs7QUFRRTtFQUNFLHlCQUFBO1VBQUEsaUJBQUE7QUFMSiIsInNvdXJjZXNDb250ZW50IjpbIi5jaXJjbGUge1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgI2UxZTFlMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaXJjbGUtaGFuZGxlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjg2ODY4O1xyXG4gICAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDIwMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAgICAgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAgIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaXJjbGUtaGFuZGxlOmFjdGl2ZSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgICAgICAgICAgICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICB9XHJcbiAgXHJcbiAgLnJvdGF0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8vIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm90ZWN0ZWQge1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 8510:
/*!****************************************************************************************!*\
  !*** ./src/app/modules/circular-slider/directives/circular-slider-handle.directive.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CircularSliderHandleDirective: () => (/* binding */ CircularSliderHandleDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9016);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3379);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 7835);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 1523);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 4520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 5267);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 274);




const MOUSE_PRIMARY = 0;
class CircularSliderHandleDirective {
  get angle() {
    return this._angle;
  }
  set angle(deg) {
    this._angle = deg || 0;
    this.setTransform(this.calcHandlePosition(this._angle));
    this.angleChange.emit(this._angle);
  }
  constructor(ngZone, elementRef) {
    this.ngZone = ngZone;
    this.elementRef = elementRef;
    this._angle = 0;
    this.circleRadius = 0;
    this.handleDiameter = 0;
    this.angleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.element = this.elementRef.nativeElement;
  }
  ngOnInit() {
    this.positionHandle();
    this.registerStart(this.element);
  }
  positionHandle() {
    this.handleDiameter = this.diameter / 4;
    this.circleRadius = this.diameter / 2;
    this.element.style.width = `${this.handleDiameter}px`;
    this.element.style.height = `${this.handleDiameter}px`;
    this.element.style.top = `${this.circleRadius - this.handleDiameter / 2}px`;
    this.element.style.left = `${this.circleRadius - this.handleDiameter / 2}px`;
    this.setTransform(this.calcHandlePosition(this.angle));
  }
  registerStart(element) {
    this.unregisterStart();
    this.ngZone.runOutsideAngular(() => {
      const mousedown$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(element, "mousedown").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(event => event.button === MOUSE_PRIMARY), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(event => {
        // avoid interference by "native" dragging of <img> tags
        if (event.target && event.target.draggable) {
          event.preventDefault();
        }
        // avoid triggering other draggable parents
        event.stopPropagation();
        const el = document.querySelector('#circleContainer' + this._counter);
        this.x = el.getBoundingClientRect().x;
        this.y = el.getBoundingClientRect().y;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(event => parseMouseEvent(event, this.x, this.y)));
      const touchstart$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(element, "touchstart").pipe(
      // delay touch
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(event => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.interval)(500).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.first)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(document, "touchend")), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => event))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(event => {
        // avoid triggering other draggable parents
        event.stopPropagation();
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(event => parseTouchEvent(event, this.x, this.y)));
      this.elementStartSubscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(mousedown$, touchstart$).subscribe(windowPoint => {
        this.dragStart(windowPoint);
      });
    });
  }
  unregisterStart() {
    if (this.elementStartSubscription) {
      this.elementStartSubscription.unsubscribe();
      this.elementStartSubscription = undefined;
    }
  }
  registerMove() {
    this.unregisterMove();
    this.elementMoveSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subscription();
    const mousemove$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(document, "mousemove").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(event => {
      event.preventDefault();
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(event => parseMouseEvent(event, this.x, this.y)));
    const touchmove$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(document, "touchmove").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(event => {
      event.preventDefault();
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(event => parseTouchEvent(event, this.x, this.y)));
    this.elementMoveSubscription.add((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(mousemove$, touchmove$).subscribe(windowPoint => {
      this.dragMove(windowPoint);
    }));
    const mouseup$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(document, "mouseup");
    const touchend$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(document, "touchend");
    this.elementMoveSubscription.add((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(mouseup$, touchend$).subscribe(() => {
      this.dragStop();
    }));
  }
  unregisterMove() {
    if (this.elementMoveSubscription) {
      this.elementMoveSubscription.unsubscribe();
      this.elementMoveSubscription = undefined;
    }
  }
  dragStart(windowPoint) {
    this.windowStart = windowPoint;
    this.registerMove();
  }
  dragMove(windowPoint) {
    const angle = this.calcAngle(windowPoint);
    this.layerLatestDelta = this.calcHandlePosition(angle);
    this.setTransform(this.layerLatestDelta);
    this.ngZone.run(() => {
      this.angle = Math.round(angle);
    });
  }
  calcAngle(windowPoint) {
    let angle = 0;
    if (this.diameter) {
      const offset = this.circleRadius - this.handleDiameter / 2;
      const mousePos = {
        x: windowPoint.x - offset + this.handleDiameter,
        y: windowPoint.y - offset + this.handleDiameter
      };
      const aTan = Math.atan2(mousePos.x - this.circleRadius, mousePos.y - this.circleRadius);
      angle = -aTan / (Math.PI / 180) + 180;
    }
    return angle;
  }
  calcHandlePosition(angle) {
    const newX = this.circleRadius * Math.sin(angle * Math.PI / 180);
    const newY = this.circleRadius * -Math.cos(angle * Math.PI / 180);
    return {
      x: newX,
      y: newY
    };
  }
  dragStop() {
    this.unregisterMove();
    if (!this.layerLatestDelta) {
      return;
    }
    this.ngZone.run(() => {
      this.layerLatestDelta = undefined;
    });
  }
  setTransform(point) {
    this.element.style.transform = `translate(${point.x}px, ${point.y}px)`;
  }
  static #_ = this.ɵfac = function CircularSliderHandleDirective_Factory(t) {
    return new (t || CircularSliderHandleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
  };
  static #_2 = this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: CircularSliderHandleDirective,
    selectors: [["", "circularSliderHandle", ""]],
    inputs: {
      diameter: "diameter",
      _counter: "_counter",
      angle: "angle"
    },
    outputs: {
      angleChange: "angleChange"
    }
  });
}
function parseMouseEvent(event, x, y) {
  return {
    x: event.pageX - x,
    y: event.pageY - y
  };
}
function parseTouchEvent(event, x, y) {
  const touch = event.touches[0];
  return {
    x: touch.pageX - x,
    y: touch.pageY - y
  };
}

/***/ }),

/***/ 8001:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/admin/admin-common-entity/admin-common-entity.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminCommonEntityComponent: () => (/* binding */ AdminCommonEntityComponent)
/* harmony export */ });
/* harmony import */ var E_EVA_EZ_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 1650);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 5267);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs */ 5400);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! uuid */ 4289);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/animations */ 2501);
/* harmony import */ var _globalConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../globalConstants */ 1944);
/* harmony import */ var _dialogref_art_item_art_item_dialogref_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../dialogref/art-item/art-item-dialogref.component */ 3577);
/* harmony import */ var _models_page_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/page.model */ 5783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _services_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/menu.service */ 2042);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var _services_masterwork_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/masterwork.service */ 568);
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/settings.service */ 9752);
/* harmony import */ var _modules_account_account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../modules/account/account.service */ 6992);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5356);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/flex-layout/extended */ 7520);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/button-toggle */ 727);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/grid-list */ 647);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/cdk/text-field */ 5802);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/menu */ 8128);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/tabs */ 989);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/cdk/scrolling */ 275);
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ngx-color-picker */ 3158);
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ngx-loading */ 9066);
/* harmony import */ var _admin_menu_entity_admin_menu_entity_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../admin-menu-entity/admin-menu-entity.component */ 4073);
/* harmony import */ var _admin_sorting_entity_admin_sorting_entity_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../admin-sorting-entity/admin-sorting-entity.component */ 3922);
/* harmony import */ var _admin_format_settings_admin_format_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../admin-format-settings/admin-format-settings.component */ 8328);
/* harmony import */ var _dragdrop_drag_directives__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../dragdrop/drag.directives */ 3802);
/* harmony import */ var _admin_newsletter_entity_admin_newsletter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../admin-newsletter-entity/admin-newsletter.component */ 8885);
/* harmony import */ var _pipes_fileSizePipe___WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../pipes/fileSizePipe  */ 2416);
/* harmony import */ var _pipes_stringGetNumbersPipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../pipes/stringGetNumbersPipe */ 2412);










































const _c0 = ["autosize"];
function AdminCommonEntityComponent_div_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "div", 48);
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("innerHTML", item_r9, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsanitizeHtml"]);
  }
}
function AdminCommonEntityComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrepeaterCreate"](1, AdminCommonEntityComponent_div_13_For_2_Template, 1, 1, "div", 48, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrepeater"](ctx_r0.fileUploadErrorMessages);
  }
}
function AdminCommonEntityComponent_div_15_mat_grid_tile_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-grid-tile")(1, "div", 55)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](4, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "div")(6, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AdminCommonEntityComponent_div_15_mat_grid_tile_7_Template_img_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r17);
      const item_r15 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r16.deleteNewArt(item_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("src", "data:Image/*;base64," + item_r15.pictureImage, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsanitizeUrl"]);
  }
}
const _c5 = () => ({
  backdropBorderRadius: "5px"
});
function AdminCommonEntityComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 49)(1, "mat-label", 50)(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "\u041D\u043E\u0432\u044B\u0435 \u0448\u0435\u0434\u0435\u0432\u0440\u044B");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "cdk-virtual-scroll-viewport", 51)(5, "mat-grid-list", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](6, "ngx-loading", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](7, AdminCommonEntityComponent_div_15_mat_grid_tile_7_Template, 7, 1, "mat-grid-tile", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("show", ctx_r1.newFiles.items.length !== ctx_r1.addFilesCount)("config", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction0"](4, _c5))("template", ctx_r1.customLoadingTemplate);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r1.newFiles.items);
  }
}
function AdminCommonEntityComponent_mat_option_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const font_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", font_r18.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](font_r18.key);
  }
}
function AdminCommonEntityComponent_mat_option_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "mat-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "stringGetNumbers");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const size_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", size_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 2, size_r19));
  }
}
function AdminCommonEntityComponent_div_76_span_20_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AdminCommonEntityComponent_div_76_span_20_img_1_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r33);
      const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r31.deleteArt(item_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function AdminCommonEntityComponent_div_76_span_20_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "img", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AdminCommonEntityComponent_div_76_span_20_img_2_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r36);
      const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r34.deleteArt(item_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function AdminCommonEntityComponent_div_76_span_20_img_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AdminCommonEntityComponent_div_76_span_20_img_3_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r39);
      const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r37.hideArt(item_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function AdminCommonEntityComponent_div_76_span_20_img_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AdminCommonEntityComponent_div_76_span_20_img_4_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r42);
      const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r40.hideArt(item_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
function AdminCommonEntityComponent_div_76_span_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, AdminCommonEntityComponent_div_76_span_20_img_1_Template, 1, 0, "img", 74)(2, AdminCommonEntityComponent_div_76_span_20_img_2_Template, 1, 0, "img", 75)(3, AdminCommonEntityComponent_div_76_span_20_img_3_Template, 1, 0, "img", 76)(4, AdminCommonEntityComponent_div_76_span_20_img_4_Template, 1, 0, "img", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AdminCommonEntityComponent_div_76_span_20_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r45);
      const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r43.resetMenu(item_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](6, "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043C\u0435\u043D\u044E");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", item_r20.delete);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !item_r20.delete);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", item_r20.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !item_r20.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !item_r20.subMenuUid);
  }
}
function AdminCommonEntityComponent_div_76_div_25_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "img", 88);
  }
}
function AdminCommonEntityComponent_div_76_div_25_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "img", 89);
  }
}
function AdminCommonEntityComponent_div_76_div_25_div_7_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "img", 88);
  }
}
function AdminCommonEntityComponent_div_76_div_25_div_7_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "img", 89);
  }
}
function AdminCommonEntityComponent_div_76_div_25_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div")(1, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AdminCommonEntityComponent_div_76_div_25_div_7_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r56);
      const submenu_r52 = restoredCtx.$implicit;
      const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2).$implicit;
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r55.setSubmenu(submenu_r52.uid, item_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, AdminCommonEntityComponent_div_76_div_25_div_7_img_2_Template, 1, 0, "img", 84)(3, AdminCommonEntityComponent_div_76_div_25_div_7_img_3_Template, 1, 0, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const submenu_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", submenu_r52.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !submenu_r52.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", submenu_r52.name, " ");
  }
}
function AdminCommonEntityComponent_div_76_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div")(1, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, AdminCommonEntityComponent_div_76_div_25_img_2_Template, 1, 0, "img", 84)(3, AdminCommonEntityComponent_div_76_div_25_img_3_Template, 1, 0, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "mat-menu", 86, 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](7, AdminCommonEntityComponent_div_76_div_25_div_7_Template, 5, 3, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const m_r47 = ctx.$implicit;
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("matMenuTriggerFor", _r50);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", m_r47.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !m_r47.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", m_r47.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", m_r47.subMenuItems);
  }
}
function AdminCommonEntityComponent_div_76_span_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "span", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](1, "\u0423\u0434\u0430\u043B\u0435\u043D:");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }
}
const _c6 = a0 => ({
  "background-color": a0
});
const _c7 = (a0, a1, a2, a3, a4, a5, a6) => ({
  "font-size": a0,
  "fontFamily": a1,
  "color": a2,
  "text-align": a3,
  "font-style": a4,
  "font-weight": a5,
  "text-decoration": a6
});
function AdminCommonEntityComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 60)(1, "mat-card", 61)(2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3, "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "mat-form-field")(5, "textarea", 62, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AdminCommonEntityComponent_div_76_Template_textarea_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r59);
      const item_r20 = restoredCtx.$implicit;
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r58.setActiveField("text", item_r20.uid));
    })("ngModelChange", function AdminCommonEntityComponent_div_76_Template_textarea_ngModelChange_5_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r59);
      const item_r20 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](item_r20.text = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](7, "                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](8, "div", 64)(9, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("dblclick", function AdminCommonEntityComponent_div_76_Template_img_dblclick_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r59);
      const item_r20 = restoredCtx.$implicit;
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r61.openArt(item_r20.pictureImage));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](11, "\u0414\u0430\u0442\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](12, "mat-form-field")(13, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AdminCommonEntityComponent_div_76_Template_input_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r59);
      const item_r20 = restoredCtx.$implicit;
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r62.setActiveField("date", item_r20.uid));
    })("ngModelChange", function AdminCommonEntityComponent_div_76_Template_input_ngModelChange_13_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r59);
      const item_r20 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](item_r20.date = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](15, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435:");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "mat-form-field")(17, "textarea", 67, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AdminCommonEntityComponent_div_76_Template_textarea_click_17_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r59);
      const item_r20 = restoredCtx.$implicit;
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](ctx_r64.setActiveField("desc", item_r20.uid));
    })("ngModelChange", function AdminCommonEntityComponent_div_76_Template_textarea_ngModelChange_17_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r59);
      const item_r20 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵresetView"](item_r20.description = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](19, "                  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](20, AdminCommonEntityComponent_div_76_span_20_Template, 7, 5, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](21, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](23, "mat-menu", 70, 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](25, AdminCommonEntityComponent_div_76_div_25_Template, 8, 5, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](26, "span")(27, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](28, "\u0418\u043C\u044F \u0444\u0430\u0439\u043B\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](29, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](31, "span")(32, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](33, "\u0420\u0430\u0437\u043C\u0435\u0440:");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](34, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](36, "fileSize");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](37, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](38, "\u0428\u0438\u0440\u0438\u043D\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](39, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](42, "\u0412\u044B\u0441\u043E\u0442\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](43, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](45, "span")(46, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](47, "\u0414\u043E\u0431\u0430\u0432\u043B\u0435\u043D:");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](48, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](50, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](51, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](52, AdminCommonEntityComponent_div_76_span_52_Template, 2, 0, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](53, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](55, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r20 = ctx.$implicit;
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵreference"](24);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    let tmp_9_0;
    let tmp_13_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngClass", item_r20.font);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction1"](35, _c6, item_r20.dateDeleted != null || item_r20.delete ? "grey" : !item_r20.isActive ? "lightgray" : "white"));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", item_r20.text)("disabled", item_r20.dateDeleted)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction7"](37, _c7, ctx_r7.currentItemFontSize(item_r20.uid, true, false, false), ctx_r7.currentItemFont(item_r20.uid, true, false, false), ctx_r7.currentItemColor(item_r20.uid, true, false, false), ctx_r7.currentItemAlign(item_r20.uid, true, false, false), ctx_r7.currentItemStyle(item_r20.uid, true, false, false), ctx_r7.currentItemWeight(item_r20.uid, true, false, false), ctx_r7.currentItemStroke(item_r20.uid, true, false, false)))("value", item_r20.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("src", "data:Image/*;base64," + item_r20.pictureImage, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", item_r20.date)("disabled", item_r20.dateDeleted)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction7"](45, _c7, ctx_r7.currentItemFontSize(item_r20.uid, false, true, false), (tmp_9_0 = ctx_r7.currentItemFont(item_r20.uid, false, true, false)) == null ? null : tmp_9_0.replace("-", " "), ctx_r7.currentItemColor(item_r20.uid, false, true, false), ctx_r7.currentItemAlign(item_r20.uid, false, true, false), ctx_r7.currentItemStyle(item_r20.uid, false, true, false), ctx_r7.currentItemWeight(item_r20.uid, false, true, false), ctx_r7.currentItemStroke(item_r20.uid, false, true, false)))("value", item_r20.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", item_r20.description)("disabled", item_r20.dateDeleted)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpureFunction7"](53, _c7, ctx_r7.currentItemFontSize(item_r20.uid, false, false, true), (tmp_13_0 = ctx_r7.currentItemFont(item_r20.uid, false, false, true)) == null ? null : tmp_13_0.replace("-", " "), ctx_r7.currentItemColor(item_r20.uid, false, false, true), ctx_r7.currentItemAlign(item_r20.uid, false, false, true), ctx_r7.currentItemStyle(item_r20.uid, false, false, true), ctx_r7.currentItemWeight(item_r20.uid, false, false, true), ctx_r7.currentItemStroke(item_r20.uid, false, false, true)))("value", item_r20.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", !item_r20.dateDeleted);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", ctx_r7.menu.length < 1 || item_r20.dateDeleted)("matMenuTriggerFor", _r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r7.submenuName(item_r20.subMenuUid));
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx_r7.menu);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", item_r20.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](36, 27, item_r20.size), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", item_r20.imageWidth, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", item_r20.imageHeight, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](50, 29, item_r20.dateTimeAdded, "fullDate"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", item_r20.dateDeleted != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind2"](55, 32, item_r20.dateDeleted, "longDate"), "");
  }
}
class AdminCommonEntityComponent {
  constructor(dialog, menuService, spinner, masterworkService, settingsService, ngZone, accountService, cdr) {
    this.dialog = dialog;
    this.menuService = menuService;
    this.spinner = spinner;
    this.masterworkService = masterworkService;
    this.settingsService = settingsService;
    this.ngZone = ngZone;
    this.accountService = accountService;
    this.cdr = cdr;
    this.itemText = "";
    this.fileUploadErrorMessages = [];
    this.fileUploadMessage = "Переместите изображения сюда.<br>Размер каждого не более 15Мб";
    this.artsChanged = false;
    this.addFilesCount = 0;
    this.fonts = _globalConstants__WEBPACK_IMPORTED_MODULE_2__.GlobalConstants.fonts;
    this.fontSizes = _globalConstants__WEBPACK_IMPORTED_MODULE_2__.GlobalConstants.fontSizes;
    this.selectedFont = "Arbor";
    this.selectedFontSize = "20px";
    this.selectedColor = "black";
    this.selectedStyleWeight = ["none", "none"];
    // selectedList:string | null;
    this.textActive = false;
    this.dateActive = false;
    this.descActive = false;
    this.clearFormat = false;
    this.menues = {
      items: []
    };
    this.menu = [];
    this.menuChanged = false;
    this.clicked = {};
    this.removeMenu = false;
    this.subMenu = [];
    this.removeSubMenu = false;
    this.clickedSub = {};
    this.submenuIndex = 1;
    this.sortSubmenu = null;
    this.subscribed = new rxjs__WEBPACK_IMPORTED_MODULE_17__.BehaviorSubject([]);
    this.textFormats = {
      items: []
    };
    this.newTextFormats = {
      items: []
    };
    this.newFiles = {
      items: []
    };
    this.curFiles = {
      items: []
    };
  }
  ngOnInit() {
    this.spinner.show();
    this.getMenu();
    this.getArts();
    this.getFormatting();
    this.getWatermarkSettings();
    this.getMyDetails();
    this.getNewsletter();
    this.getSubscribers();
  }
  onTabChanged($event) {
    if ($event.index === 0) {
      this.spinner.show();
      this.getArts();
    }
    if ($event.index === 1) {
      this.spinner.show();
      this.getMenu();
      this.getArts();
    }
    if ($event.index === 3) {
      this.spinner.show();
      this.getWatermarkSettings();
    }
    if ($event.index === 4) {
      this.spinner.show();
      this.getSubscribers();
    }
    this.sortSubmenu = null;
  }
  getMenu() {
    const menu$ = this.menuService.getMenu().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.catchError)(() => {
      this.spinner.hide();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)([]);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.shareReplay)(1));
    menu$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_21__.tap)(menu => {
      this.menu = menu ?? [];
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.first)()).subscribe();
    this.origMenu = lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep(this.menu);
  }
  getFormatting() {
    const formats$ = this.settingsService.getTextFormatting().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.shareReplay)(1));
    formats$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_21__.tap)(formats => {
      this.textFormats = formats;
      if (this.files && this.files?.length > 0 && this.textFormats && this.textFormats?.items?.length > 0) {
        this.spinner.hide();
      }
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.catchError)(() => {
      this.spinner.hide();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)([]);
    })).subscribe();
  }
  getArts() {
    var _this = this;
    return (0,E_EVA_EZ_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let paged = {
        page: new _models_page_model__WEBPACK_IMPORTED_MODULE_4__.Page()
      };
      const files$ = (yield _this.masterworkService.getMasterworksPaged(paged)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_22__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.shareReplay)(1));
      files$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_21__.tap)(arts => {
        _this.files = arts;
        _this.sortFiles = arts.filter(x => !x.dateDeleted);
        _this.activeItemUid = _this.files[0].uid;
        if (_this.files && _this.files?.length > 0 && _this.textFormats && _this.textFormats?.items?.length > 0) {
          _this.spinner.hide();
        }
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.catchError)(() => {
        _this.spinner.hide();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)([]);
      })).subscribe();
      _this.origFiles = lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep(_this.files);
    })();
  }
  getWatermarkSettings() {
    this.settingsService.getWatermarkSettings().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.shareReplay)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.tap)(settings => {
      this.watermarkSettings = settings;
      this.origWatermarkSettings = lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep(this.watermarkSettings);
      this.spinner.hide();
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.catchError)(() => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)([]);
    })).subscribe();
  }
  getMyDetails() {
    this.accountService.getMyDetails().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.shareReplay)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.catchError)(() => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)([]);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.tap)(res => {
      this.details = res;
      this.origDetails = lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep(res);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.first)()).subscribe();
  }
  getNewsletter() {
    this.accountService.getMNewsletter().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_22__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.catchError)(() => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)([]);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.tap)(res => {
      this.newsletter = res;
      this.origNewsletter = lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep(res);
    })).subscribe();
  }
  getSubscribers() {
    this.accountService.getSubscribers().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.catchError)(() => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)([]);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.tap)(subscribed => {
      this.subscribed.next(subscribed);
      this.spinner.hide();
    })).subscribe();
  }
  onSubmit() {
    if (this.newFiles.items.length > 0) {
      this.masterworkService.addMasterworks(this.newFiles).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_22__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.catchError)(() => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)(false);
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.tap)(result => {
        if (result.isSucceed === true) {
          this.getArts();
          this.getFormatting();
        }
      })).subscribe();
      this.fileUploadErrorMessages = [];
      this.newFiles.items = [];
      this.addFilesCount = 0;
    }
    if (this.artsChanged) {
      this.curFiles.items = this.files.map(x => {
        return {
          uid: x.uid,
          text: x.text,
          date: x.date,
          description: x.description,
          position: x.position,
          isActive: x.isActive,
          delete: x.delete,
          subMenuUid: x.subMenuUid,
          subMenuPosition: x.subMenuPosition
        };
      });
      this.masterworkService.updateMasterworks(this.curFiles).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_22__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.catchError)(() => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)(false);
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.tap)(result => {
        if (result.isSucceed === true) {
          this.getArts();
        }
      })).subscribe();
      this.settingsService.updateTextFormatting(this.textFormats).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_22__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.catchError)(() => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.of)(false);
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.tap)(result => {
        if (result.isSucceed === true) {
          this.getFormatting();
        }
      })).subscribe();
    }
    this.artsChanged = false;
  }
  deleteArt(item) {
    item.delete = !item.delete;
    this.artsChanged = true;
  }
  hideArt(item) {
    item.isActive = !item.isActive;
    this.artsChanged = true;
  }
  openArt(image) {
    const maxW = "1200px";
    const maxH = "900px";
    this.dialog.open(_dialogref_art_item_art_item_dialogref_component__WEBPACK_IMPORTED_MODULE_3__.ArtItemDialogrefComponent, {
      maxWidth: maxW,
      maxHeight: maxH,
      data: {
        image: image,
        maxW: maxW,
        maxH: maxH
      }
    });
  }
  setSubmenu(submenuUid, item) {
    if (item.subMenuUid != submenuUid) {
      item.subMenuUid = submenuUid;
      item.subMenuPosition = null;
      this.artsChanged = true;
    }
  }
  submenuName(submenuUid) {
    return this.menu.find(x => x.subMenuItems?.find(y => y.uid === submenuUid))?.subMenuItems?.find(x => x.uid === submenuUid)?.name ?? "Меню";
  }
  resetMenu(item) {
    item.subMenuUid = null;
    item.subMenuPosition = null;
    this.artsChanged = true;
  }
  currentItemFont(itemUid, text, date, desc) {
    let x = this.textFormats.items.find(x => x.masterworkUid === itemUid && x.isText === text && x.isDate === date && x.isDesc === desc)?.font;
    return x === undefined || x === null ? "Arbor" : x;
  }
  setCurrentItemFont(font, text, date, desc) {
    this.textFormats.items.find(x => x.masterworkUid === this.activeItemUid && x.isText === text && x.isDate === date && x.isDesc === desc).font = font;
  }
  currentItemFontSize(itemUid, text, date, desc) {
    let x = this.textFormats.items.find(x => x.masterworkUid === itemUid && x.isText === text && x.isDate === date && x.isDesc === desc)?.fontSize;
    return x === undefined || x === null ? "20px" : x;
  }
  setCurrentItemFontSize(fontSize, text, date, desc) {
    this.textFormats.items.find(x => x.masterworkUid === this.activeItemUid && x.isText === text && x.isDate === date && x.isDesc === desc).fontSize = fontSize;
  }
  currentItemColor(itemUid, text, date, desc) {
    let x = this.textFormats.items.find(x => x.masterworkUid === itemUid && x.isText === text && x.isDate === date && x.isDesc === desc)?.color;
    return x === undefined || x === null ? "black" : x;
  }
  setCurrentItemColor(color, text, date, desc) {
    this.textFormats.items.find(x => x.masterworkUid === this.activeItemUid && x.isText === text && x.isDate === date && x.isDesc === desc).color = color;
  }
  currentItemStyle(itemUid, text, date, desc) {
    let x = this.textFormats.items.find(x => x.masterworkUid === itemUid && x.isText === text && x.isDate === date && x.isDesc === desc)?.style;
    return x === undefined ? null : x;
  }
  setCurrentItemStyle(style, text, date, desc) {
    this.textFormats.items.find(x => x.masterworkUid === this.activeItemUid && x.isText === text && x.isDate === date && x.isDesc === desc).style = style;
  }
  currentItemWeight(itemUid, text, date, desc) {
    let x = this.textFormats.items.find(x => x.masterworkUid === itemUid && x.isText === text && x.isDate === date && x.isDesc === desc)?.weight;
    return x === undefined ? null : x;
  }
  setCurrentItemWeight(weight, text, date, desc) {
    this.textFormats.items.find(x => x.masterworkUid === this.activeItemUid && x.isText === text && x.isDate === date && x.isDesc === desc).weight = weight;
  }
  currentItemAlign(itemUid, text, date, desc) {
    let x = this.textFormats.items.find(x => x.masterworkUid === itemUid && x.isText === text && x.isDate === date && x.isDesc === desc)?.align;
    return x === undefined ? null : x;
  }
  setCurrentItemAlign(align, text, date, desc) {
    this.textFormats.items.find(x => x.masterworkUid === this.activeItemUid && x.isText === text && x.isDate === date && x.isDesc === desc).align = align;
  }
  currentItemStroke(itemUid, text, date, desc) {
    let x = this.textFormats.items.find(x => x.masterworkUid === itemUid && x.isText === text && x.isDate === date && x.isDesc === desc)?.strokeUnderline;
    return x === undefined ? null : x;
  }
  setCurrentItemStroke(strokeUnderline, text, date, desc) {
    this.textFormats.items.find(x => x.masterworkUid === this.activeItemUid && x.isText === text && x.isDate === date && x.isDesc === desc).strokeUnderline = strokeUnderline;
  }
  // currentItemList(itemUid: number, text: boolean, date: boolean, desc: boolean) : string | null{
  //   return this.textFormats.items.find(x => x.masterworkUid === itemUid && x.isText === text && x.isDate === date && x.isDesc === desc)!.list;
  // }
  // setCurrentItemList(list: string | null, text: boolean, date: boolean, desc: boolean){
  //   this.textFormats.items.find(x => x.masterworkUid === this.activeItemUid && x.isText === text && x.isDate === date && x.isDesc === desc)!.list = list;
  // }
  setActiveField(field, itemUid) {
    this.activeItemUid = itemUid;
    switch (field) {
      case "text":
        this.textActive = true;
        this.dateActive = false;
        this.descActive = false;
        break;
      case "date":
        this.dateActive = true;
        this.textActive = false;
        this.descActive = false;
        break;
      case "desc":
        this.descActive = true;
        this.dateActive = false;
        this.textActive = false;
        break;
    }
    this.selectedFont = this.currentItemFont(itemUid, this.textActive, this.dateActive, this.descActive);
    this.selectedFontSize = this.currentItemFontSize(itemUid, this.textActive, this.dateActive, this.descActive);
    this.selectedColor = this.currentItemColor(itemUid, this.textActive, this.dateActive, this.descActive);
    this.selectedStyle = this.currentItemStyle(itemUid, this.textActive, this.dateActive, this.descActive);
    this.selectedWeight = this.currentItemWeight(itemUid, this.textActive, this.dateActive, this.descActive);
    this.selectedStrokeUnderline = this.currentItemStroke(itemUid, this.textActive, this.dateActive, this.descActive);
    this.selectedAlign = this.currentItemAlign(itemUid, this.textActive, this.dateActive, this.descActive);
    this.selectedStyleWeight = [this.selectedStyle ?? "none", this.selectedWeight ?? "none"];
    // this.selectedList = this.currentItemList(itemUid, this.textActive, this.dateActive, this.descActive);
    this.artsChanged = true;
  }
  cleanFormat() {
    this.selectedFont = "Arbor";
    this.selectedFontSize = "20px";
    this.selectedColor = "black";
    this.selectedStyleWeight = ["none", "none"];
    this.selectedStyle = "";
    this.selectedWeight = "";
    this.selectedStrokeUnderline = "";
    this.selectedAlign = "";
    // this.selectedList = "";
    this.setCurrentItemFont(this.selectedFont, this.textActive, this.dateActive, this.descActive);
    this.setCurrentItemFontSize(this.selectedFontSize, this.textActive, this.dateActive, this.descActive);
    this.setCurrentItemColor(this.selectedColor, this.textActive, this.dateActive, this.descActive);
    this.setCurrentItemStyle(this.selectedStyle, this.textActive, this.dateActive, this.descActive);
    this.setCurrentItemWeight(this.selectedWeight, this.textActive, this.dateActive, this.descActive);
    this.setCurrentItemStroke(this.selectedStrokeUnderline, this.textActive, this.dateActive, this.descActive);
    this.setCurrentItemAlign(this.selectedAlign, this.textActive, this.dateActive, this.descActive);
    // this.setCurrentItemList(this.selectedList, this.textActive, this.dateActive, this.descActive);
    this.artsChanged = true;
  }
  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_23__.take)(1)).subscribe(() => this.autosize.resizeToFitContent(true));
    this.fontChange();
  }
  fontChange() {
    this.setCurrentItemFont(this.selectedFont, this.textActive, this.dateActive, this.descActive);
    this.artsChanged = true;
  }
  fontSizeChange() {
    this.setCurrentItemFontSize(this.selectedFontSize, this.textActive, this.dateActive, this.descActive);
    this.artsChanged = true;
  }
  colorChange($event) {
    this.selectedColor = $event;
    this.setCurrentItemColor(this.selectedColor, this.textActive, this.dateActive, this.descActive);
    this.artsChanged = true;
  }
  styleWeightChange() {
    const style = this.selectedStyleWeight.find(x => x === "italic");
    const weight = this.selectedStyleWeight.find(x => x === "bold");
    this.selectedStyle = style === undefined ? null : style;
    this.selectedWeight = weight === undefined ? null : weight;
    this.setCurrentItemStyle(this.selectedStyle, this.textActive, this.dateActive, this.descActive);
    this.setCurrentItemWeight(this.selectedWeight, this.textActive, this.dateActive, this.descActive);
    this.artsChanged = true;
  }
  strikeChange() {
    this.setCurrentItemStroke(this.selectedStrokeUnderline, this.textActive, this.dateActive, this.descActive);
    this.artsChanged = true;
  }
  alignChange() {
    this.setCurrentItemAlign(this.selectedAlign, this.textActive, this.dateActive, this.descActive);
    this.artsChanged = true;
  }
  // listChange(){
  //   this.setCurrentItemList(this.selectedList, this.textActive, this.dateActive, this.descActive);
  //   this.artsChanged = true;
  // }
  deleteNewArt(item) {
    const index = this.newFiles.items.findIndex(value => value.name === item.name && value.size === item.size);
    this.newFiles.items.splice(index, 1);
    this.addFilesCount -= 1;
    if (this.addFilesCount === 0) {
      this.fileUploadErrorMessages = [];
      this.newFiles.items = [];
    }
  }
  filesDropped(files) {
    this.fileUploadErrorMessages = [];
    this.addFilesCount = files.length + this.addFilesCount;
    files.forEach(file => {
      var mimeType = file.file.type;
      if (mimeType.match(/image\/*/) == null) {
        this.fileUploadErrorMessages.push(file.file.name + " не изображение");
        this.addFilesCount -= 1;
        return;
      }
      if (file.file.size > 15800000) {
        this.fileUploadErrorMessages.push("Размер " + file.file.name + " превышает 15 Мб");
        this.addFilesCount -= 1;
        return;
      }
      if (this.fileExists(file.file)) {
        this.fileUploadErrorMessages.push("Файл " + file.file.name + " уже существует");
        this.addFilesCount -= 1;
        return;
      }
      if (this.newFileExists(file.file)) {
        this.fileUploadErrorMessages.push("Файл " + file.file.name + " уже в загрузке");
        this.addFilesCount -= 1;
        return;
      }
      const artUid = (0,uuid__WEBPACK_IMPORTED_MODULE_24__["default"])();
      this.newTextFormats.items = [];
      this.newTextFormats.items.push({
        uid: (0,uuid__WEBPACK_IMPORTED_MODULE_24__["default"])(),
        masterworkUid: artUid,
        font: this.selectedFont,
        fontSize: this.selectedFontSize,
        color: this.selectedColor,
        align: null,
        style: null,
        weight: null,
        strokeUnderline: null,
        isText: true,
        isDate: false,
        isDesc: false
      });
      this.newTextFormats.items.push({
        uid: (0,uuid__WEBPACK_IMPORTED_MODULE_24__["default"])(),
        masterworkUid: artUid,
        font: this.selectedFont,
        fontSize: this.selectedFontSize,
        color: this.selectedColor,
        align: null,
        style: null,
        weight: null,
        strokeUnderline: null,
        isText: false,
        isDate: true,
        isDesc: false
      });
      this.newTextFormats.items.push({
        uid: (0,uuid__WEBPACK_IMPORTED_MODULE_24__["default"])(),
        masterworkUid: artUid,
        font: this.selectedFont,
        fontSize: this.selectedFontSize,
        color: this.selectedColor,
        align: null,
        style: null,
        weight: null,
        strokeUnderline: null,
        isText: false,
        isDate: false,
        isDesc: true
      });
      this.onFileSelected(file, artUid, this.newTextFormats.items);
    });
  }
  onFileSelected(file, artUid, formattings) {
    if (!this.newFiles.items.find(x => x.name === file.file.name && x.size === file.file.size)) {
      this.convertFile(file).subscribe(base64 => {
        this.newFiles.items.push({
          uid: artUid,
          pictureImage: base64,
          name: file.file.name,
          type: file.file.type,
          size: file.file.size,
          formattings: formattings,
          imageHeight: null,
          imageWidth: null
        });
      });
    }
  }
  convertFile(file) {
    const result = new rxjs__WEBPACK_IMPORTED_MODULE_25__.ReplaySubject(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file.file);
    reader.onload = event => result.next(btoa(event.target.result.toString()));
    return result;
  }
  fileExists(file) {
    return this.files.find(x => x.name === file.name && x.size === file.size && !x.dateDeleted) !== undefined;
  }
  newFileExists(file) {
    return this.newFiles.items.find(x => x.name === file.name && x.size === file.size) !== undefined;
  }
  objectsEqual(item1, item2) {
    return JSON.stringify(item1) !== JSON.stringify(item2);
  }
  static #_ = this.ɵfac = function AdminCommonEntityComponent_Factory(t) {
    return new (t || AdminCommonEntityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_menu_service__WEBPACK_IMPORTED_MODULE_5__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_27__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_masterwork_service__WEBPACK_IMPORTED_MODULE_6__.MasterworkService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_settings_service__WEBPACK_IMPORTED_MODULE_7__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_16__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_modules_account_account_service__WEBPACK_IMPORTED_MODULE_8__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_16__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
    type: AdminCommonEntityComponent,
    selectors: [["app-admin-common-entity"]],
    viewQuery: function AdminCommonEntityComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵloadQuery"]()) && (ctx.autosize = _t.first);
      }
    },
    decls: 86,
    vars: 35,
    consts: () => {
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7753081584797710696$$SRC_APP_PAGES_ADMIN_ADMIN_COMMON_ENTITY_ADMIN_COMMON_ENTITY_COMPONENT_TS_2 = goog.getMsg(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ");
        i18n_1 = MSG_EXTERNAL_7753081584797710696$$SRC_APP_PAGES_ADMIN_ADMIN_COMMON_ENTITY_ADMIN_COMMON_ENTITY_COMPONENT_TS_2;
      } else {
        i18n_1 = $localize` Сохранить `;
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6447542743278473763$$SRC_APP_PAGES_ADMIN_ADMIN_COMMON_ENTITY_ADMIN_COMMON_ENTITY_COMPONENT_TS_4 = goog.getMsg("{$startTagMatIcon}format_clear{$closeTagMatIcon}", {
          "closeTagMatIcon": "\uFFFD/#74\uFFFD",
          "startTagMatIcon": "\uFFFD#74\uFFFD"
        }, {
          original_code: {
            "closeTagMatIcon": "</mat-icon>",
            "startTagMatIcon": "<mat-icon>"
          }
        });
        i18n_3 = MSG_EXTERNAL_6447542743278473763$$SRC_APP_PAGES_ADMIN_ADMIN_COMMON_ENTITY_ADMIN_COMMON_ENTITY_COMPONENT_TS_4;
      } else {
        i18n_3 = $localize`${"\uFFFD#74\uFFFD"}:START_TAG_MAT_ICON:format_clear${"\uFFFD/#74\uFFFD"}:CLOSE_TAG_MAT_ICON:`;
      }
      return [["type", "square-loader"], [1, "common-container", 3, "preserveContent", "selectedTabChange"], ["label", "\u0428\u0435\u0434\u0435\u0432\u0440\u044B"], ["fxLayout", "row"], ["fxLayout", "column", "fxLayoutAlign", "top center", 2, "width", "20rem"], [1, "sticky-top", 2, "text-align", "center"], [1, "protected", 2, "margin", "2vh"], ["appDragDrop", "", 1, "col-12", "rmpm", "dropzone", "protected", 3, "innerHTML", "files"], ["type", "button", "mat-raised-button", "", "color", "grey", 1, "menu-form__submit", 3, "disabled", "click"], i18n_1, [4, "ngIf"], ["fxLayout", "column"], ["fxLayout", "column", "fxLayoutAlign", "top center", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "top center", 2, "overflow-wrap", "wrap"], [1, "protected"], ["fxLayout", "row", "fxLayoutAlign", "center center", 2, "position", "sticky", "top", "40px", "z-index", "99"], [2, "margin-right", "10px", "width", "300px"], [3, "value", "valueChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [2, "margin-right", "10px", "width", "150px"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "protected", 2, "margin-right", "10px", "padding-bottom", "20px"], [2, "border-radius", "10px", "height", "30px", "width", "100px", 3, "colorPicker", "cpCancelButton", "cpCancelButtonClass", "colorPickerChange"], [2, "padding-bottom", "16px"], ["multiple", "", 3, "ngModel", "ngModelChange", "click"], ["group", "matButtonToggleGroup"], ["value", "italic"], ["value", "bold"], [3, "ngModel", "ngModelChange", "click"], ["value", "underline"], ["value", "line-through"], ["value", "none"], ["value", "left"], ["value", "center"], ["value", "right"], ["value", "justify"], [2, "margin-left", "10px", "padding-bottom", "20px"], ["type", "button", "matTooltip", "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0444\u043E\u0440\u043C\u0430\u0442", "mat-fab", "", "color", "grey", 3, "click"], i18n_3, ["fxLayout", "row", "fxLayoutAlign", "center", 1, "wrap-files", 2, "padding-bottom", "9rem"], ["style", "width: 500px;", "class", "mat-elevation-z10", 3, "ngClass", 4, "ngFor", "ngForOf"], ["label", "\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u0448\u0435\u0434\u0435\u0432\u0440\u043E\u0432"], [3, "menu", "arts", "updatedArts", "currentSubmenu", "selectedTabChange"], ["label", "\u041C\u0435\u043D\u044E"], [3, "menu", "origMenu"], ["label", "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"], [3, "watermarkSettings", "origWatermarkSettings", "details", "origDetails"], ["label", "\u0420\u0430\u0441\u0441\u044B\u043B\u043A\u0430"], [3, "newsletter", "origNewsletter", "subscribed"], [3, "innerHTML"], ["fxLayout", "column", "fxLayoutAlign", "top center"], [1, "stroke-text", "protected", 2, "margin", "10px"], ["itemSize", "220px", 1, "viewport"], ["cols", "8", "rowHeight", "1:1.2", "gutterSize", "10px", 2, "padding", "5px"], [3, "show", "config", "template"], [4, "ngFor", "ngForOf"], ["fxFlex", "", "fxLayout", "column", "fxLayoutAlign", "center center"], [2, "max-width", "140px", "max-height", "140px", 3, "src"], ["fxFlex", ""], ["width", "24", "src", "assets/images/delete24.png", "fxLayoutAlign", "left center", 3, "click"], [3, "value"], [1, "mat-elevation-z10", 2, "width", "500px", 3, "ngClass"], ["fxLayout", "column", 1, "arts-card", 3, "ngStyle"], ["matInput", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "1", "cdkAutosizeMaxRows", "5", 3, "ngModel", "disabled", "ngStyle", "value", "click", "ngModelChange"], ["autosize", "cdkTextareaAutosize"], ["matTooltip", "\u041A\u043B\u0438\u043A\u043D\u0438\u0442\u0435 \u0434\u0432\u0430\u0436\u0434\u044B, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C", "matTooltipPosition", "right", 1, "protected", 2, "align-self", "center"], [2, "max-width", "300px", "max-height", "300px", 3, "src", "dblclick"], ["matInput", "", 3, "ngModel", "disabled", "ngStyle", "value", "click", "ngModelChange"], ["matInput", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "2", "cdkAutosizeMaxRows", "5", 3, "ngModel", "disabled", "ngStyle", "value", "click", "ngModelChange"], ["fxLayout", "row", "style", "padding-bottom: 10px;", 4, "ngIf"], ["mat-button", "", 2, "border", "1px solid", 3, "disabled", "matMenuTriggerFor"], ["yPosition", "above", 1, "menu"], ["_menu", "matMenu"], ["class", "protected", "style", "color: white;", 4, "ngIf"], ["fxLayout", "row", 2, "padding-bottom", "10px"], ["width", "36", "height", "36", "src", "assets/images/addButton.png", 3, "click", 4, "ngIf"], ["width", "36", "height", "36", "src", "assets/images/deleteButton.png", 3, "click", 4, "ngIf"], ["style", "margin-left: 20px;", "width", "40", "height", "36", "src", "assets/images/eyeOpen.png", 3, "click", 4, "ngIf"], ["style", "margin-left: 20px;", "width", "40", "height", "36", "src", "assets/images/eyeClose.png", 3, "click", 4, "ngIf"], ["mat-button", "", 1, "mat-elevation-z10", 2, "margin-left", "20px", 3, "disabled", "click"], ["width", "36", "height", "36", "src", "assets/images/addButton.png", 3, "click"], ["width", "36", "height", "36", "src", "assets/images/deleteButton.png", 3, "click"], ["width", "40", "height", "36", "src", "assets/images/eyeOpen.png", 2, "margin-left", "20px", 3, "click"], ["width", "40", "height", "36", "src", "assets/images/eyeClose.png", 2, "margin-left", "20px", 3, "click"], ["mat-menu-item", "", 1, "protected", 3, "matMenuTriggerFor"], ["class", "protected", "width", "24", "src", "assets/images/eyeOpen.png", 4, "ngIf"], ["class", "protected", "width", "24", "src", "assets/images/eyeClose.png", 4, "ngIf"], ["yPosition", "above", 1, "menuitem"], ["_submenu", "matMenu"], ["width", "24", "src", "assets/images/eyeOpen.png", 1, "protected"], ["width", "24", "src", "assets/images/eyeClose.png", 1, "protected"], ["mat-menu-item", "", 3, "click"], [1, "protected", 2, "color", "white"]];
    },
    template: function AdminCommonEntityComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "mat-tab-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("selectedTabChange", function AdminCommonEntityComponent_Template_mat_tab_group_selectedTabChange_1_listener($event) {
          return ctx.onTabChanged($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](3, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "mat-label", 6)(8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](9, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0448\u0435\u0434\u0435\u0432\u0440\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("files", function AdminCommonEntityComponent_Template_div_files_10_listener($event) {
          return ctx.filesDropped($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AdminCommonEntityComponent_Template_button_click_11_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵi18n"](12, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](13, AdminCommonEntityComponent_div_13_Template, 3, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](15, AdminCommonEntityComponent_div_15_Template, 8, 5, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](16, "div", 13)(17, "mat-label", 14)(18, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](19, "\u0428\u0435\u0434\u0435\u0432\u0440\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](20, "div", 15)(21, "mat-form-field", 16)(22, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](23, "\u0428\u0440\u0438\u0444\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](24, "mat-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("valueChange", function AdminCommonEntityComponent_Template_mat_select_valueChange_24_listener($event) {
          return ctx.selectedFont = $event;
        })("selectionChange", function AdminCommonEntityComponent_Template_mat_select_selectionChange_24_listener() {
          return ctx.triggerResize();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](25, AdminCommonEntityComponent_mat_option_25_Template, 2, 2, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](26, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](27, "mat-form-field", 19)(28, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](29, "\u0420\u0430\u0437\u043C\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](30, "mat-select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("valueChange", function AdminCommonEntityComponent_Template_mat_select_valueChange_30_listener($event) {
          return ctx.selectedFontSize = $event;
        })("selectionChange", function AdminCommonEntityComponent_Template_mat_select_selectionChange_30_listener() {
          return ctx.fontSizeChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](31, AdminCommonEntityComponent_mat_option_31_Template, 3, 4, "mat-option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](32, "mat-label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](33, "\u0426\u0432\u0435\u0442 \u0448\u0440\u0438\u0444\u0442\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](34, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("colorPickerChange", function AdminCommonEntityComponent_Template_input_colorPickerChange_34_listener($event) {
          return ctx.colorChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](35, "div", 22)(36, "mat-button-toggle-group", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function AdminCommonEntityComponent_Template_mat_button_toggle_group_ngModelChange_36_listener($event) {
          return ctx.selectedStyleWeight = $event;
        })("click", function AdminCommonEntityComponent_Template_mat_button_toggle_group_click_36_listener() {
          return ctx.styleWeightChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](38, "mat-button-toggle", 25)(39, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](40, "format_italic");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](41, "mat-button-toggle", 26)(42, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](43, "format_bold");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](44, "div", 22)(45, "mat-button-toggle-group", 27, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function AdminCommonEntityComponent_Template_mat_button_toggle_group_ngModelChange_45_listener($event) {
          return ctx.selectedStrokeUnderline = $event;
        })("click", function AdminCommonEntityComponent_Template_mat_button_toggle_group_click_45_listener() {
          return ctx.strikeChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](47, "mat-button-toggle", 28)(48, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](49, "format_underlined");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](50, "mat-button-toggle", 29)(51, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](52, "format_strikethrough");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](53, "mat-button-toggle", 30)(54, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](55, "format_clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](56, "div", 22)(57, "mat-button-toggle-group", 27, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("ngModelChange", function AdminCommonEntityComponent_Template_mat_button_toggle_group_ngModelChange_57_listener($event) {
          return ctx.selectedAlign = $event;
        })("click", function AdminCommonEntityComponent_Template_mat_button_toggle_group_click_57_listener() {
          return ctx.alignChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](59, "mat-button-toggle", 31)(60, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](61, "format_align_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](62, "mat-button-toggle", 32)(63, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](64, "format_align_center");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](65, "mat-button-toggle", 33)(66, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](67, "format_align_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](68, "mat-button-toggle", 34)(69, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](70, "format_align_justify");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](71, "div", 35)(72, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function AdminCommonEntityComponent_Template_button_click_72_listener() {
          return ctx.cleanFormat();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵi18nStart"](73, 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](74, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵi18nEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](75, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](76, AdminCommonEntityComponent_div_76_Template, 56, 61, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](77, "mat-tab", 40)(78, "app-admin-sorting-entity", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("selectedTabChange", function AdminCommonEntityComponent_Template_app_admin_sorting_entity_selectedTabChange_78_listener($event) {
          return ctx.onTabChanged($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](79, "mat-tab", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](80, "app-admin-menu-entity", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](81, "mat-tab", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](82, "app-admin-format-settings", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](83, "mat-tab", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](84, "app-admin-newsletter", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](85, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("preserveContent", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("innerHTML", ctx.fileUploadMessage, _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("disabled", !ctx.artsChanged && (ctx.newFiles.items.length === 0 || ctx.newFiles.items.length !== ctx.addFilesCount));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.fileUploadErrorMessages.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.newFiles.items.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx.selectedFont);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](26, 31, ctx.fonts));
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("value", ctx.selectedFontSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx.fontSizes);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵstyleProp"]("background", ctx.selectedColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("colorPicker", ctx.selectedColor)("cpCancelButton", true)("cpCancelButtonClass", "btn btn-primary btn-xs");
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.selectedStyleWeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.selectedStrokeUnderline);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngModel", ctx.selectedAlign);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngForOf", ctx.files);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("menu", ctx.menu)("arts", ctx.sortFiles)("updatedArts", ctx.sortFiles)("currentSubmenu", ctx.sortSubmenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("menu", ctx.menu)("origMenu", ctx.origMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("watermarkSettings", ctx.watermarkSettings)("origWatermarkSettings", ctx.origWatermarkSettings)("details", ctx.details)("origDetails", ctx.origDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("newsletter", ctx.newsletter)("origNewsletter", ctx.origNewsletter)("subscribed", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](85, 33, ctx.subscribed));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_28__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.NgModel, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_30__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_30__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_30__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_31__.DefaultClassDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_31__.DefaultStyleDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_32__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_33__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_33__.MatFabButton, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_34__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_34__.MatButtonToggle, _angular_material_card__WEBPACK_IMPORTED_MODULE_35__.MatCard, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_36__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_36__.MatGridTile, _angular_material_icon__WEBPACK_IMPORTED_MODULE_37__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_38__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__.MatLabel, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_40__.CdkTextareaAutosize, _angular_material_menu__WEBPACK_IMPORTED_MODULE_41__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_41__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_41__.MatMenuTrigger, _angular_material_select__WEBPACK_IMPORTED_MODULE_42__.MatSelect, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_43__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_43__.MatTabGroup, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_44__.MatTooltip, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__.CdkFixedSizeVirtualScroll, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_45__.CdkVirtualScrollViewport, ngx_color_picker__WEBPACK_IMPORTED_MODULE_46__.ColorPickerDirective, ngx_spinner__WEBPACK_IMPORTED_MODULE_27__.NgxSpinnerComponent, ngx_loading__WEBPACK_IMPORTED_MODULE_47__.NgxLoadingComponent, _admin_menu_entity_admin_menu_entity_component__WEBPACK_IMPORTED_MODULE_9__.AdminMenuEntityComponent, _admin_sorting_entity_admin_sorting_entity_component__WEBPACK_IMPORTED_MODULE_10__.AdminSortingEntityComponent, _admin_format_settings_admin_format_settings_component__WEBPACK_IMPORTED_MODULE_11__.AdminFormatSettingsComponent, _dragdrop_drag_directives__WEBPACK_IMPORTED_MODULE_12__.DragDirective, _admin_newsletter_entity_admin_newsletter_component__WEBPACK_IMPORTED_MODULE_13__.AdminNewsletterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_28__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_28__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_28__.KeyValuePipe, _pipes_fileSizePipe___WEBPACK_IMPORTED_MODULE_14__.FileSizePipe, _pipes_stringGetNumbersPipe__WEBPACK_IMPORTED_MODULE_15__.StringGetNumbersPipe],
    styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  overflow: hidden;\n  height: 100%;\n  position: fixed;\n  display: flex;\n}\n\n.dropzone[_ngcontent-%COMP%] {\n  height: 70px;\n  width: 100px;\n  padding: 2rem;\n  border: dashed 4px #979797;\n  display: inline-table;\n  margin-right: 20px;\n}\n\n.common-container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  overflow: hidden;\n  padding: 2rem;\n  width: 100%;\n}\n\nmat-grid-tile[_ngcontent-%COMP%] {\n  background: lightblue;\n}\n\n.viewport[_ngcontent-%COMP%] {\n  height: 30vh;\n  width: 70vw;\n  margin: 1vw;\n  border: 10px solid #e9e7e9;\n}\n\n.font-selected-value[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n\n.font-button-pressed[_ngcontent-%COMP%] {\n  background-color: lightgrey;\n}\n\n.mat-menu-item[_ngcontent-%COMP%] {\n  width: 250px;\n  min-width: 150px;\n}\n\n.menu[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.menu[_ngcontent-%COMP%]   .menuitem[_ngcontent-%COMP%] {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n  -webkit-user-select: none;\n          user-select: none;\n  line-height: 36px;\n  padding: 0 16px;\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.mat-button-toggle-group[_ngcontent-%COMP%] {\n  border: #825fdd solid !important;\n}\n\n.mat-button-toggle[_ngcontent-%COMP%] {\n  background-color: white !important;\n  color: #825fdd !important;\n}\n\n.mat-button-toggle-checked[_ngcontent-%COMP%] {\n  background-color: #825fdd !important;\n  color: #eff4ef !important;\n}\n\n.stroke-text[_ngcontent-%COMP%] {\n  stroke: 2px white;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tY29tbW9uLWVudGl0eS9hZG1pbi1jb21tb24tZW50aXR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBRUEseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtBQUFGOztBQUdBO0VBQ0UsZ0NBQUE7QUFBRjs7QUFFQTtFQUNFLGtDQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFDQTtFQUNFLG9DQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFDQTtFQUNFLGlCQUFBO0VBRUEsWUFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZHJvcHpvbmUge1xyXG4gIGhlaWdodDogNzBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgcGFkZGluZzoycmVtO1xyXG4gIGJvcmRlcjpkYXNoZWQgNHB4ICM5Nzk3OTc7XHJcbiAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLmNvbW1vbi1jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwJTsgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1ncmlkLXRpbGUge1xyXG4gIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcclxufVxyXG5cclxuLnZpZXdwb3J0IHtcclxuICBoZWlnaHQ6IDMwdmg7XHJcbiAgd2lkdGg6IDcwdnc7XHJcbiAgbWFyZ2luOiAxdnc7ICBcclxuICBib3JkZXI6IDEwcHggc29saWQgI2U5ZTdlOTtcclxufVxyXG5cclxuLmZvbnQtc2VsZWN0ZWQtdmFsdWUge1xyXG4gIG1hcmdpbjogMTVweCAwO1xyXG59XHJcblxyXG4uZm9udC1idXR0b24tcHJlc3NlZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7IC8vcmdiKDUyLCAxMDIsIDEzOCk7XHJcbn1cclxuXHJcbi5tYXQtbWVudS1pdGVte1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4ubWVudSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIHBhZGRpbmc6IDZweCAwO1xyXG59XHJcbi5tZW51IC5tZW51aXRlbSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgcGFkZGluZzogMCAxNnB4O1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXB7XHJcbiAgYm9yZGVyOiAjODI1ZmRkIHNvbGlkICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1idXR0b24tdG9nZ2xlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjODI1ZmRkICFpbXBvcnRhbnQ7ICBcclxufVxyXG4ubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgyNWZkZCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZWZmNGVmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdHJva2UtdGV4dHtcclxuICBzdHJva2U6MnB4IHdoaXRlO1xyXG4gIC8vIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOjJweCBibGFjaztcclxuICBjb2xvcjpibGFjaztcclxuICAvLyB0ZXh0LXNoYWRvdzozcHggMCAwIHdoaXRlLDAgM3B4IDAgd2hpdGU7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_48__.trigger)('detailExpand', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_48__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_48__.style)({
        height: '0px',
        minHeight: '0'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_48__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_48__.style)({
        height: '*'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_48__.transition)('expanded <=> collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_48__.animate)('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])]
    }
  });
}

/***/ }),

/***/ 8328:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/admin/admin-format-settings/admin-format-settings.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminFormatSettingsComponent: () => (/* binding */ AdminFormatSettingsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 1650);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 5267);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 5400);
/* harmony import */ var _dialogref_art_item_art_item_dialogref_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../dialogref/art-item/art-item-dialogref.component */ 3577);
/* harmony import */ var _globalConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../globalConstants */ 1944);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_watermark_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/watermark.model */ 351);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/settings.service */ 9752);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var _modules_account_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../modules/account/account.service */ 6992);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5356);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/flex-layout/extended */ 7520);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button-toggle */ 727);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/checkbox */ 6658);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/divider */ 9400);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/cdk/text-field */ 5802);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ 549);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ngx-color-picker */ 3158);
/* harmony import */ var _modules_circular_slider_components_circular_slider_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../modules/circular-slider/components/circular-slider.component */ 3065);
/* harmony import */ var _dragdrop_drag_directives__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../dragdrop/drag.directives */ 3802);
/* harmony import */ var _pipes_stringGetNumbersPipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../pipes/stringGetNumbersPipe */ 2412);































const _c0 = ["autosize"];
function AdminFormatSettingsComponent_div_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 10);
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", item_r4, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
  }
}
function AdminFormatSettingsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterCreate"](1, AdminFormatSettingsComponent_div_9_For_2_Template, 1, 1, "div", 11, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeater"](ctx_r0.fileUploadErrorMessages);
  }
}
function AdminFormatSettingsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 12)(1, "mat-checkbox", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AdminFormatSettingsComponent_div_10_Template_mat_checkbox_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r9.addWatermark());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "\u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0442\u044C \u0432\u043E\u0434\u044F\u043D\u043E\u0439 \u0437\u043D\u0430\u043A");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "mat-checkbox", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AdminFormatSettingsComponent_div_10_Template_mat_checkbox_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r11.resize());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "\u0418\u0437\u043C\u0435\u043D\u044F\u0442\u044C \u0440\u0430\u0437\u043C\u0435\u0440 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("checked", ctx_r1.watermarkSettings.addWatermark);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("checked", ctx_r1.watermarkSettings.resize);
  }
}
function AdminFormatSettingsComponent_div_11_mat_select_5_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const font_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", font_r27.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](font_r27.key);
  }
}
function AdminFormatSettingsComponent_div_11_mat_select_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-select", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("valueChange", function AdminFormatSettingsComponent_div_11_mat_select_5_Template_mat_select_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r28.selectedAboutmeFont = $event);
    })("selectionChange", function AdminFormatSettingsComponent_div_11_mat_select_5_Template_mat_select_selectionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r29);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r30.triggerResize());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AdminFormatSettingsComponent_div_11_mat_select_5_mat_option_1_Template, 2, 2, "mat-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r12.selectedAboutmeFont);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 2, ctx_r12.fonts));
  }
}
function AdminFormatSettingsComponent_div_11_mat_select_6_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const font_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", font_r32.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](font_r32.key);
  }
}
function AdminFormatSettingsComponent_div_11_mat_select_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-select", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("valueChange", function AdminFormatSettingsComponent_div_11_mat_select_6_Template_mat_select_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r33.selectedFont = $event);
    })("selectionChange", function AdminFormatSettingsComponent_div_11_mat_select_6_Template_mat_select_selectionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r34);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r35.triggerResize());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AdminFormatSettingsComponent_div_11_mat_select_6_mat_option_1_Template, 2, 2, "mat-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r13.selectedFont);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 2, ctx_r13.fonts));
  }
}
function AdminFormatSettingsComponent_div_11_mat_select_10_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "stringGetNumbers");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const size_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", size_r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 2, size_r37));
  }
}
function AdminFormatSettingsComponent_div_11_mat_select_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-select", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("valueChange", function AdminFormatSettingsComponent_div_11_mat_select_10_Template_mat_select_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r38.selectedAboutmeFontSize = $event);
    })("selectionChange", function AdminFormatSettingsComponent_div_11_mat_select_10_Template_mat_select_selectionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r40.fontSizeChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AdminFormatSettingsComponent_div_11_mat_select_10_mat_option_1_Template, 3, 4, "mat-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r14.selectedAboutmeFontSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r14.fontSizes);
  }
}
function AdminFormatSettingsComponent_div_11_mat_select_11_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "stringGetNumbers");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const size_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", size_r42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 2, size_r42));
  }
}
function AdminFormatSettingsComponent_div_11_mat_select_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-select", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("valueChange", function AdminFormatSettingsComponent_div_11_mat_select_11_Template_mat_select_valueChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r43.selectedFontSize = $event);
    })("selectionChange", function AdminFormatSettingsComponent_div_11_mat_select_11_Template_mat_select_selectionChange_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r44);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r45.fontSizeChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AdminFormatSettingsComponent_div_11_mat_select_11_mat_option_1_Template, 3, 4, "mat-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r15.selectedFontSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r15.fontSizes);
  }
}
function AdminFormatSettingsComponent_div_11_mat_button_toggle_group_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-button-toggle-group", 65, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function AdminFormatSettingsComponent_div_11_mat_button_toggle_group_16_Template_mat_button_toggle_group_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r47.selectedAboutmeStyleWeight = $event);
    })("change", function AdminFormatSettingsComponent_div_11_mat_button_toggle_group_16_Template_mat_button_toggle_group_change_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r48);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r49.styleWeightChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "mat-button-toggle", 67)(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "format_italic");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "mat-button-toggle", 68)(6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "format_bold");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r16.selectedAboutmeStyleWeight);
  }
}
function AdminFormatSettingsComponent_div_11_mat_button_toggle_group_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-button-toggle-group", 65, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function AdminFormatSettingsComponent_div_11_mat_button_toggle_group_17_Template_mat_button_toggle_group_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r51.selectedStyleWeight = $event);
    })("change", function AdminFormatSettingsComponent_div_11_mat_button_toggle_group_17_Template_mat_button_toggle_group_change_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r52);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r53.styleWeightChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "mat-button-toggle", 67)(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "format_italic");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "mat-button-toggle", 68)(6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "format_bold");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r17.selectedStyleWeight);
  }
}
function AdminFormatSettingsComponent_div_11_mat_button_toggle_group_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "mat-button-toggle-group", 69, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function AdminFormatSettingsComponent_div_11_mat_button_toggle_group_19_Template_mat_button_toggle_group_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r56);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r55.selectedAboutmeAlign = $event);
    })("change", function AdminFormatSettingsComponent_div_11_mat_button_toggle_group_19_Template_mat_button_toggle_group_change_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r56);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r57.setCurrentItemAlign());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "mat-button-toggle", 70)(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "format_align_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "mat-button-toggle", 71)(6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "format_align_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "mat-button-toggle", 72)(9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "format_align_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "mat-button-toggle", 73)(12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "format_align_justify");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r18.selectedAboutmeAlign);
  }
}
function AdminFormatSettingsComponent_div_11_div_97_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 10);
  }
  if (rf & 2) {
    const item_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", item_r59, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
  }
}
function AdminFormatSettingsComponent_div_11_div_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterCreate"](1, AdminFormatSettingsComponent_div_11_div_97_For_2_Template, 1, 1, "div", 11, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeaterTrackByIdentity"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrepeater"](ctx_r23.fileUploadErrorMessages);
  }
}
function AdminFormatSettingsComponent_div_11_div_98_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 17);
  }
  if (rf & 2) {
    const item_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleMapInterpolate1"]("opacity: 0.3; align-self: center; width: 200px; height: 120px; background-size: 100%; background-image: url(", item_r65.image, ");");
  }
}
function AdminFormatSettingsComponent_div_11_div_98_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 17);
  }
  if (rf & 2) {
    const item_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleMapInterpolate1"]("align-self: center; width: 200px; height: 120px; background-size: 100%; background-image: url(", item_r65.image, ");");
  }
}
function AdminFormatSettingsComponent_div_11_div_98_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 76)(1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, AdminFormatSettingsComponent_div_11_div_98_div_1_div_2_Template, 1, 3, "div", 77)(3, AdminFormatSettingsComponent_div_11_div_98_div_1_div_3_Template, 1, 3, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 78)(5, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AdminFormatSettingsComponent_div_11_div_98_div_1_Template_img_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r71);
      const item_r65 = restoredCtx.$implicit;
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r70.deleteBackground(item_r65));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "mat-checkbox", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AdminFormatSettingsComponent_div_11_div_98_div_1_Template_mat_checkbox_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r71);
      const item_r65 = restoredCtx.$implicit;
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r72.setActiveBackground(item_r65));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "\u0422\u0435\u043A\u0443\u0449\u0438\u0439");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", item_r65.delete);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !item_r65.delete);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", item_r65.isActive)("checked", item_r65.isActive);
  }
}
function AdminFormatSettingsComponent_div_11_div_98_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AdminFormatSettingsComponent_div_11_div_98_div_1_Template, 8, 4, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r24.backgrounds);
  }
}
const _c9 = () => ({
  "width": "80px",
  "height": "20px",
  "color": "black"
});
const _c10 = (a0, a1, a2, a3, a4, a5) => ({
  "font-size": a0,
  "fontFamily": a1,
  "color": a2,
  "font-style": a3,
  "font-weight": a4,
  "line-height": a5
});
const _c11 = (a0, a1, a2, a3, a4, a5, a6) => ({
  "rotate": a0,
  "font-size": a1,
  "fontFamily": a2,
  "color": a3,
  "font-style": a4,
  "font-weight": a5,
  "opacity": a6
});
const _c12 = a1 => ({
  "align-self": "center",
  "rotate": a1,
  "margin-left": "50px"
});
const _c13 = (a3, a4, a5, a6, a7, a8) => ({
  "width": "40vw",
  "min-height": "200px",
  "margin-left": "15px",
  "font-size": a3,
  "fontFamily": a4,
  "color": a5,
  "font-style": a6,
  "font-weight": a7,
  "text-align": a8
});
function AdminFormatSettingsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "mat-form-field", 16)(3, "mat-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "\u0428\u0440\u0438\u0444\u0442\u044B");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, AdminFormatSettingsComponent_div_11_mat_select_5_Template, 3, 4, "mat-select", 18)(6, AdminFormatSettingsComponent_div_11_mat_select_6_Template, 3, 4, "mat-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "mat-form-field", 19)(8, "mat-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "\u0420\u0430\u0437\u043C\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, AdminFormatSettingsComponent_div_11_mat_select_10_Template, 2, 2, "mat-select", 18)(11, AdminFormatSettingsComponent_div_11_mat_select_11_Template, 2, 2, "mat-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "mat-label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "\u0426\u0432\u0435\u0442 \u0448\u0440\u0438\u0444\u0442\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("colorPickerChange", function AdminFormatSettingsComponent_div_11_Template_input_colorPickerChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r74);
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r73.colorChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, AdminFormatSettingsComponent_div_11_mat_button_toggle_group_16_Template, 8, 1, "mat-button-toggle-group", 23)(17, AdminFormatSettingsComponent_div_11_mat_button_toggle_group_17_Template, 8, 1, "mat-button-toggle-group", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](19, AdminFormatSettingsComponent_div_11_mat_button_toggle_group_19_Template, 14, 1, "mat-button-toggle-group", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 25)(21, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AdminFormatSettingsComponent_div_11_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r74);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r75.cleanFormat());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18nStart"](22, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 28)(25, "div", 29)(26, "mat-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "\u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "mat-slider", 30)(29, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("valueChange", function AdminFormatSettingsComponent_div_11_Template_input_valueChange_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r74);
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r76.opacity = $event);
    })("ngModel", function AdminFormatSettingsComponent_div_11_Template_input_ngModel_29_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r74);
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r77.onInput($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "div", 32)(31, "mat-label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "\u041F\u043E\u0432\u043E\u0440\u043E\u0442 \u0442\u0435\u043A\u0441\u0442\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "circular-slider", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("angleChange", function AdminFormatSettingsComponent_div_11_Template_circular_slider_angleChange_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r74);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r78.watermarkSettings.watermarkTextRotation = $event);
    })("click", function AdminFormatSettingsComponent_div_11_Template_circular_slider_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r74);
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r79.angleValueChange("Text"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "div", 32)(35, "mat-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, "\u041F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](37, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38, " \u0442\u0435\u043A\u0441\u0442\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40, "X: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "textarea", 35, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function AdminFormatSettingsComponent_div_11_Template_textarea_ngModelChange_41_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r74);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r80.watermarkSettings.watermarkXPosition = $event);
    })("change", function AdminFormatSettingsComponent_div_11_Template_textarea_change_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r74);
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r81.textareaValueChange("X"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, "        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45, "Y: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "textarea", 35, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function AdminFormatSettingsComponent_div_11_Template_textarea_ngModelChange_46_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r74);
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r82.watermarkSettings.watermarkYPosition = $event);
    })("change", function AdminFormatSettingsComponent_div_11_Template_textarea_change_46_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r74);
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r83.textareaValueChange("Y"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](48, "        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](49, "mat-divider", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "div", 32)(51, "mat-label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](52, "\u041F\u043E\u0432\u043E\u0440\u043E\u0442 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "circular-slider", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("angleChange", function AdminFormatSettingsComponent_div_11_Template_circular_slider_angleChange_53_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r74);
      const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r84.watermarkSettings.imageRotation = $event);
    })("click", function AdminFormatSettingsComponent_div_11_Template_circular_slider_click_53_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r74);
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r85.angleValueChange("Image"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "div", 29)(55, "mat-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](56, "\u041A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "mat-slider", 38)(58, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("valueChange", function AdminFormatSettingsComponent_div_11_Template_input_valueChange_58_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r74);
      const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r86.watermarkSettings.encoderQuality = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "div", 32)(60, "mat-label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](61, "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](62, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](63, " \u0440\u0430\u0437\u043C\u0435\u0440 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "textarea", 35, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function AdminFormatSettingsComponent_div_11_Template_textarea_ngModelChange_64_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r74);
      const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r87.watermarkSettings.imageMaxSize = $event);
    })("change", function AdminFormatSettingsComponent_div_11_Template_textarea_change_64_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r74);
      const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r88.textareaValueChange("Size"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](66, "          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](67, "div", 40)(68, "mat-card", 41)(69, "mat-form-field", 42)(70, "textarea", 43, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function AdminFormatSettingsComponent_div_11_Template_textarea_ngModelChange_70_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r74);
      const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r89.watermarkSettings.watermarkText = $event);
    })("click", function AdminFormatSettingsComponent_div_11_Template_textarea_click_70_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r74);
      const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r90.aboutmeSelected = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](72, "          ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](73, "div", 44)(74, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AdminFormatSettingsComponent_div_11_Template_p_click_74_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r74);
      const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r91.aboutmeSelected = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "mat-card", 46)(77, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](79, "div", 48)(80, "div", 49)(81, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("dblclick", function AdminFormatSettingsComponent_div_11_Template_img_dblclick_81_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r74);
      const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r92.openArt(ctx_r92.watermarkSettings.sampleImage));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](82, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](83, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](84, "div", 53)(85, "mat-card")(86, "mat-label", 17)(87, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](88, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u0444\u043E\u043D\u0430 \u0441\u0430\u0439\u0442\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](89, "div", 48)(90, "div", 54)(91, "mat-label", 3)(92, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](93, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0444\u043E\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](94, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("files", function AdminFormatSettingsComponent_div_11_Template_div_files_94_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r74);
      const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r93.bgndDropped($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](95, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AdminFormatSettingsComponent_div_11_Template_button_click_95_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r74);
      const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r94.updateBackground());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](96, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](97, AdminFormatSettingsComponent_div_11_div_97_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](98, AdminFormatSettingsComponent_div_11_div_98_Template, 2, 1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](99, "div", 57)(100, "mat-card")(101, "mat-label", 17)(102, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](103, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u0434\u0435\u0442\u0430\u043B\u0435\u0439");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](104, "div", 48)(105, "div", 58)(106, "mat-label", 17)(107, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](108, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0442\u0435\u043A\u0441\u0442 \u041E\u0431\u043E \u043C\u043D\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](109, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AdminFormatSettingsComponent_div_11_Template_button_click_109_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r74);
      const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r95.updateDetails(ctx_r95.details));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](110, 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](111, "textarea", 61, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function AdminFormatSettingsComponent_div_11_Template_textarea_ngModelChange_111_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r74);
      const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r96.details.aboutmeText = $event);
    })("click", function AdminFormatSettingsComponent_div_11_Template_textarea_click_111_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r74);
      const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r97.aboutmeSelected = true);
    })("select", function AdminFormatSettingsComponent_div_11_Template_textarea_select_111_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r74);
      const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r98.mm($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    let tmp_32_0;
    let tmp_34_0;
    let tmp_47_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.aboutmeSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r2.aboutmeSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.aboutmeSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r2.aboutmeSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleProp"]("background", ctx_r2.aboutmeSelected ? ctx_r2.selectedAboutmeFontColor : ctx_r2.selectedColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("colorPicker", ctx_r2.aboutmeSelected ? ctx_r2.selectedAboutmeFontColor : ctx_r2.selectedColor)("cpCancelButton", true)("cpCancelButtonClass", "btn btn-primary btn-xs");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.aboutmeSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r2.aboutmeSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.aboutmeSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("displayWith", ctx_r2.formatOpacity.bind(ctx_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r2.opacity);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("diameter", ctx_r2.diameter)("angle", ctx_r2.watermarkSettings.watermarkTextRotation);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r2.watermarkSettings.watermarkXPosition)("value", ctx_r2.watermarkSettings.watermarkXPosition)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](50, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r2.watermarkSettings.watermarkYPosition)("value", ctx_r2.watermarkSettings.watermarkYPosition)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](51, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("vertical", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("diameter", ctx_r2.diameter)("angle", ctx_r2.watermarkSettings.imageRotation);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("color", ctx_r2.qualityColor())("displayWith", ctx_r2.formatQuality.bind(ctx_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r2.watermarkSettings.encoderQuality);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r2.watermarkSettings.imageMaxSize)("value", ctx_r2.watermarkSettings.imageMaxSize)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](52, _c9));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx_r2.watermarkSettings.watermarkFontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r2.watermarkSettings.watermarkText)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction6"](53, _c10, ctx_r2.currentItemFontSize(true), (tmp_32_0 = ctx_r2.currentItemFont(true)) == null ? null : tmp_32_0.replace("-", " "), ctx_r2.currentItemColor(true), ctx_r2.currentItemStyle(true), ctx_r2.currentItemWeight(true), ctx_r2.currentItemFontSize(true)))("value", ctx_r2.watermarkSettings.watermarkText);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction7"](60, _c11, ctx_r2.rotationAngle(ctx_r2.watermarkSettings.watermarkTextRotation), ctx_r2.currentItemFontSize(true), (tmp_34_0 = ctx_r2.currentItemFont(true)) == null ? null : tmp_34_0.replace("-", " "), ctx_r2.currentItemColor(true), ctx_r2.currentItemStyle(true), ctx_r2.currentItemWeight(true), ctx_r2.opacity / 100));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.watermarkSettings.watermarkText, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("\u0428\u0438\u0440\u0438\u043D\u0430: ", ctx_r2.watermarkSettings.imageWidth, " \u0412\u044B\u0441\u043E\u0442\u0430: ", ctx_r2.watermarkSettings.imageHeight, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", "data:Image/*;base64," + ctx_r2.watermarkSettings.sampleImage, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](68, _c12, ctx_r2.rotationAngle(ctx_r2.watermarkSettings.imageRotation)));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("src", "data:Image/*;base64," + ctx_r2.watermarkSettings.sampleImage, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", ctx_r2.fileUploadMessage, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r2.newBgnd.image.length == 0 && !ctx_r2.bgndChanged);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.fileUploadErrorMessages.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r2.backgrounds);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r2.objectsEqual(ctx_r2.origDetails, ctx_r2.details));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r2.details.aboutmeText)("value", ctx_r2.details.aboutmeText)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction6"](70, _c13, ctx_r2.currentItemFontSize(false), (tmp_47_0 = ctx_r2.currentItemFont(false)) == null ? null : tmp_47_0.replace("-", " "), ctx_r2.currentItemColor(false), ctx_r2.currentItemStyle(false), ctx_r2.currentItemWeight(false), ctx_r2.currentItemAlign()));
  }
}
class AdminFormatSettingsComponent {
  constructor(dialog, settingsService, ngZone, spinner, accountService) {
    this.dialog = dialog;
    this.settingsService = settingsService;
    this.ngZone = ngZone;
    this.spinner = spinner;
    this.accountService = accountService;
    this.diameter = 100;
    this.fonts = _globalConstants__WEBPACK_IMPORTED_MODULE_1__.GlobalConstants.fonts;
    this.fontSizes = _globalConstants__WEBPACK_IMPORTED_MODULE_1__.GlobalConstants.fontSizes;
    this.selectedFont = "Arbor";
    this.selectedFontSize = "20px";
    this.selectedColor = "black";
    this.selectedStyleWeight = ["", ""];
    this.selectedStyle = "";
    this.selectedWeight = "";
    this.selectedText = "";
    this.selectedAboutmeFont = "Arbor";
    this.selectedAboutmeFontSize = "20px";
    this.selectedAboutmeFontColor = "black";
    this.selectedAboutmeStyleWeight = ["", ""];
    this.selectedAboutmeStyle = "";
    this.selectedAboutmeWeight = "";
    this.selectedAboutmeAlign = "left";
    this.aboutmeSelected = false;
    this.opacity = 0;
    this.initOpacity = true;
    this.clearFormat = false;
    this.settingsChanged = false;
    this.backgrounds = [];
    this.origBackgrounds = [];
    this.newBgnd = {
      image: "",
      contentType: ""
    };
    this.fileUploadErrorMessages = [];
    this.uploadMessage = "Переместите изображение сюда.<br>Размер не более 15Мб";
    this.fileUploadMessage = this.uploadMessage;
    this.getBackgrounds();
  }
  ngOnInit() {}
  getWatermarkSettings() {
    const settings$ = this.settingsService.getWatermarkSettings().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.shareReplay)(1));
    settings$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.tap)(settings => {
      this.watermarkSettings = settings;
      this.origWatermarkSettings = lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep(this.watermarkSettings);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.catchError)(() => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)([]);
    })).subscribe();
  }
  onSubmit() {
    if (this.settingsChanged || this.origWatermarkSettings.watermarkText !== this.watermarkSettings.watermarkText) {
      this.fileUploadErrorMessages = [];
      this.settingsService.updateWatermarkSettings(this.watermarkSettings).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.catchError)(() => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)(false);
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.tap)(result => {
        if (result.isSucceed === true) {
          this.getWatermarkSettings();
        }
      })).subscribe();
    }
    this.settingsChanged = false;
  }
  openArt(image) {
    const maxW = "1000px";
    const maxH = "1000px";
    this.dialog.open(_dialogref_art_item_art_item_dialogref_component__WEBPACK_IMPORTED_MODULE_0__.ArtItemDialogrefComponent, {
      maxWidth: maxW,
      maxHeight: maxH,
      data: {
        image: image,
        maxW: maxW,
        maxH: maxH
      }
    });
  }
  currentItemFont(isWatermark) {
    if (!isWatermark) {
      this.selectedAboutmeFont = this.details.aboutmeFont;
      return this.details.aboutmeFont;
    } else {
      this.selectedFont = this.watermarkSettings.watermarkFontName;
      return this.watermarkSettings.watermarkFontName;
    }
  }
  setCurrentItemFont(font) {
    if (this.aboutmeSelected) {
      this.details.aboutmeFont = font;
    } else {
      this.watermarkSettings.watermarkFontName = font;
    }
  }
  currentItemFontSize(isWatermark) {
    if (!isWatermark) {
      this.selectedAboutmeFontSize = this.details.aboutmeFontSize;
      return this.details.aboutmeFontSize;
    } else {
      this.selectedFontSize = this.watermarkSettings.watermarkFontSize;
      return this.watermarkSettings.watermarkFontSize;
    }
  }
  setCurrentItemFontSize(fontSize) {
    if (this.aboutmeSelected) {
      this.details.aboutmeFontSize = fontSize;
    } else {
      this.watermarkSettings.watermarkFontSize = fontSize;
    }
  }
  currentItemColor(isWatermark) {
    if (!isWatermark) {
      this.selectedAboutmeFontColor = this.details.aboutmeFontColor;
      return this.details.aboutmeFontColor;
    } else {
      this.selectedColor = this.watermarkSettings.watermarkFontColor.slice(0, 7);
      if (this.initOpacity) {
        this.opacity = Number(this.watermarkSettings.watermarkFontColor.slice(7));
        this.initOpacity = false;
      }
      this.setFontOpacity();
      return this.selectedColor;
    }
  }
  setCurrentItemColor(color) {
    if (this.aboutmeSelected) {
      this.selectedAboutmeFontColor = color;
      this.details.aboutmeFontColor = color;
    } else {
      this.selectedColor = color;
      this.watermarkSettings.watermarkFontColor = color + this.opacity;
    }
  }
  currentItemStyle(isWatermark) {
    if (!isWatermark) {
      this.selectedAboutmeStyleWeight[0] = this.fontStyleText(this.details.aboutmeFontStyleWeight)[0];
      return this.selectedAboutmeStyleWeight[0];
    } else {
      return this.fontStyleText(this.watermarkSettings.watermarkFontStyleWeight)[0];
    }
  }
  setCurrentItemStyle(style) {
    if (this.aboutmeSelected) {
      this.details.aboutmeFontStyleWeight = this.fontStyleNumber([style, this.selectedAboutmeStyleWeight[1]]);
    } else {
      this.watermarkSettings.watermarkFontStyleWeight = this.fontStyleNumber([style, this.selectedStyleWeight[1]]);
    }
  }
  currentItemWeight(isWatermark) {
    if (!isWatermark) {
      this.selectedAboutmeStyleWeight[1] = this.fontStyleText(this.details.aboutmeFontStyleWeight)[1];
      return this.fontStyleText(this.details.aboutmeFontStyleWeight)[1];
    } else {
      return this.fontStyleText(this.watermarkSettings.watermarkFontStyleWeight)[1];
    }
  }
  setCurrentItemWeight(weight) {
    if (this.aboutmeSelected) {
      this.details.aboutmeFontStyleWeight = this.fontStyleNumber([this.selectedAboutmeStyleWeight[0], weight]);
    } else {
      this.watermarkSettings.watermarkFontStyleWeight = this.fontStyleNumber([this.selectedStyleWeight[0], weight]);
    }
  }
  currentItemAlign() {
    this.selectedAboutmeAlign = this.details.aboutmeAlign;
    return this.details.aboutmeAlign;
  }
  setCurrentItemAlign() {
    if (this.aboutmeSelected) {
      this.details.aboutmeAlign = this.selectedAboutmeAlign;
    }
  }
  setFontOpacity() {
    if (this.opacity < 10) {
      this.watermarkSettings.watermarkFontColor = this.watermarkSettings.watermarkFontColor.slice(0, 7) + `0${this.opacity}`;
    } else {
      this.watermarkSettings.watermarkFontColor = this.watermarkSettings.watermarkFontColor.slice(0, 7) + `${this.opacity}`;
    }
  }
  cleanFormat() {
    this.selectedFont = this.selectedAboutmeFont = "Arbor";
    this.selectedFontSize = this.selectedAboutmeFontSize = "20px";
    this.selectedColor = this.selectedAboutmeFontColor = "#FFFFFF";
    this.selectedStyleWeight = this.selectedAboutmeStyleWeight = ["", ""];
    this.selectedStyle = this.selectedAboutmeStyle = "";
    this.selectedWeight = this.selectedAboutmeWeight = "";
    this.setCurrentItemFont(this.aboutmeSelected ? this.selectedAboutmeFont : this.selectedFont);
    this.setCurrentItemFontSize(this.aboutmeSelected ? this.selectedAboutmeFontSize : this.selectedFontSize);
    this.setCurrentItemColor(this.aboutmeSelected ? this.selectedAboutmeFontColor : this.selectedColor);
    this.setCurrentItemStyle(this.aboutmeSelected ? this.selectedAboutmeStyle : this.selectedStyle);
    this.setCurrentItemWeight(this.aboutmeSelected ? this.selectedAboutmeWeight : this.selectedWeight);
    if (this.aboutmeSelected) {
      this.selectedAboutmeAlign = "left";
    } else {
      this.opacity = 40;
      this.watermarkSettings.encoderQuality = 100;
      this.watermarkSettings.watermarkTextRotation = 0;
      this.watermarkSettings.imageRotation = 0;
      this.settingsChanged = !this.objectsEqual(this.origWatermarkSettings, this.watermarkSettings);
    }
  }
  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_15__.take)(1)).subscribe(() => this.autosize.resizeToFitContent(true));
    this.fontChange();
  }
  fontChange() {
    if (this.aboutmeSelected) {
      this.setCurrentItemFont(this.selectedAboutmeFont);
    } else {
      this.setCurrentItemFont(this.selectedFont);
      this.settingsChanged = this.origWatermarkSettings.watermarkFontName !== this.watermarkSettings.watermarkFontName;
    }
  }
  fontSizeChange() {
    if (this.aboutmeSelected) {
      this.setCurrentItemFontSize(this.selectedAboutmeFontSize);
    } else {
      this.setCurrentItemFontSize(this.selectedFontSize);
      this.settingsChanged = this.origWatermarkSettings.watermarkFontSize !== this.watermarkSettings.watermarkFontSize;
    }
  }
  colorChange($event) {
    if (!$event.match("rgba")) {
      if (this.aboutmeSelected) {
        this.selectedAboutmeFontColor = $event;
        this.setCurrentItemColor(this.selectedAboutmeFontColor);
      } else {
        this.selectedColor = $event;
        this.setCurrentItemColor(this.selectedColor);
        this.settingsChanged = this.origWatermarkSettings.watermarkFontColor !== this.watermarkSettings.watermarkFontColor;
      }
    }
  }
  styleWeightChange() {
    if (this.aboutmeSelected) {
      const style = this.selectedAboutmeStyleWeight.find(x => x === "italic");
      const weight = this.selectedAboutmeStyleWeight.find(x => x === "bold");
      this.selectedAboutmeStyle = style === undefined ? "" : style;
      this.selectedAboutmeWeight = weight === undefined ? "" : weight;
      this.selectedAboutmeStyleWeight = [this.selectedAboutmeStyle, this.selectedAboutmeWeight];
    } else {
      const style = this.selectedStyleWeight.find(x => x === "italic");
      const weight = this.selectedStyleWeight.find(x => x === "bold");
      this.selectedStyle = style === undefined ? "" : style;
      this.selectedWeight = weight === undefined ? "" : weight;
      this.selectedStyleWeight = [this.selectedStyle, this.selectedWeight];
    }
    this.setCurrentItemStyle(this.aboutmeSelected ? this.selectedAboutmeStyle : this.selectedStyle);
    this.setCurrentItemWeight(this.aboutmeSelected ? this.selectedAboutmeWeight : this.selectedWeight);
    this.settingsChanged = this.origWatermarkSettings.watermarkFontStyleWeight !== this.watermarkSettings.watermarkFontStyleWeight;
  }
  textareaValueChange(value) {
    if (value === "X") this.settingsChanged = this.origWatermarkSettings.watermarkXPosition != this.watermarkSettings.watermarkXPosition;else if (value === "Y") this.settingsChanged = this.origWatermarkSettings.watermarkYPosition != this.watermarkSettings.watermarkYPosition;else if (value === "Size") this.settingsChanged = this.origWatermarkSettings.imageMaxSize != this.watermarkSettings.imageMaxSize;
  }
  fileDropped(files) {
    if (this.checkDroppedFiles(files)) {
      this.onFileSelected(files[0]);
      this.settingsChanged = true;
    }
  }
  onFileSelected(file) {
    this.watermarkSettings.sampleImageType = file.file.type;
    this.convertFile(file).subscribe(base64 => {
      this.watermarkSettings.sampleImage = base64;
    });
  }
  convertFile(file) {
    const result = new rxjs__WEBPACK_IMPORTED_MODULE_16__.ReplaySubject(1);
    const reader = new FileReader();
    reader.readAsBinaryString(file.file);
    reader.onload = event => result.next(btoa(event.target.result.toString()));
    return result;
  }
  checkDroppedFiles(files) {
    this.fileUploadErrorMessages = [];
    if (files.length > 1) {
      this.fileUploadErrorMessages.push("Более одного изображения");
      return false;
    }
    this.fileUploadErrorMessages = [];
    if (files.length > 1) {
      this.fileUploadErrorMessages.push("Более одного изображения");
      return false;
    }
    var mimeType = files[0].file.type;
    if (mimeType.match(/image\/*/) == null) {
      this.fileUploadErrorMessages.push(files[0].file.name + " не изображение");
      return false;
    }
    if (files[0].file.size > 20971521) {
      this.fileUploadErrorMessages.push("Размер " + files[0].file.name + " превышает 20 Мб");
      return false;
    }
    return true;
  }
  formatOpacity(value) {
    this.opacity = value;
    this.settingsChanged = Number(this.origWatermarkSettings.watermarkFontColor.slice(7)) !== this.opacity;
    return `${value}`;
  }
  formatQuality(value) {
    this.watermarkSettings.encoderQuality = value;
    this.settingsChanged = this.origWatermarkSettings.encoderQuality != this.watermarkSettings.encoderQuality;
    return `${value}`;
  }
  qualityColor() {
    if (this.watermarkSettings.encoderQuality < 75 && this.watermarkSettings.encoderQuality > 25) return "accent";else if (this.watermarkSettings.encoderQuality <= 25) return "warn";else return "primary";
  }
  rotationAngle(value) {
    return value + "deg";
  }
  angleValueChange(value) {
    if (value === "Text") this.settingsChanged = this.origWatermarkSettings.watermarkTextRotation != (this.watermarkSettings.watermarkTextRotation == 360 ? 0 : this.watermarkSettings.watermarkTextRotation);else if (value === "Image") this.settingsChanged = this.origWatermarkSettings.imageRotation != (this.watermarkSettings.imageRotation == 360 ? 0 : this.watermarkSettings.imageRotation);
  }
  addWatermark() {
    this.watermarkSettings.addWatermark = !this.watermarkSettings.addWatermark;
    this.settingsChanged = this.origWatermarkSettings.addWatermark !== this.watermarkSettings.addWatermark;
  }
  resize() {
    this.watermarkSettings.resize = !this.watermarkSettings.resize;
    this.settingsChanged = this.origWatermarkSettings.resize !== this.watermarkSettings.resize;
  }
  fontStyleText(value) {
    if (value === 1) return ["", _models_watermark_model__WEBPACK_IMPORTED_MODULE_3__.fontStyleWeight[_models_watermark_model__WEBPACK_IMPORTED_MODULE_3__.fontStyleWeight.bold]];else if (value === 2) return [_models_watermark_model__WEBPACK_IMPORTED_MODULE_3__.fontStyleWeight[_models_watermark_model__WEBPACK_IMPORTED_MODULE_3__.fontStyleWeight.italic], ""];else if (value === 3) return [_models_watermark_model__WEBPACK_IMPORTED_MODULE_3__.fontStyleWeight[_models_watermark_model__WEBPACK_IMPORTED_MODULE_3__.fontStyleWeight.italic], _models_watermark_model__WEBPACK_IMPORTED_MODULE_3__.fontStyleWeight[_models_watermark_model__WEBPACK_IMPORTED_MODULE_3__.fontStyleWeight.bold]];else return ["", ""];
  }
  fontStyleNumber(value) {
    if (this.objectsEqual(value, ["", _models_watermark_model__WEBPACK_IMPORTED_MODULE_3__.fontStyleWeight[_models_watermark_model__WEBPACK_IMPORTED_MODULE_3__.fontStyleWeight.bold]])) return 1;else if (this.objectsEqual(value, [_models_watermark_model__WEBPACK_IMPORTED_MODULE_3__.fontStyleWeight[_models_watermark_model__WEBPACK_IMPORTED_MODULE_3__.fontStyleWeight.italic], ""])) return 2;else if (this.objectsEqual(value, [_models_watermark_model__WEBPACK_IMPORTED_MODULE_3__.fontStyleWeight[_models_watermark_model__WEBPACK_IMPORTED_MODULE_3__.fontStyleWeight.italic], _models_watermark_model__WEBPACK_IMPORTED_MODULE_3__.fontStyleWeight[_models_watermark_model__WEBPACK_IMPORTED_MODULE_3__.fontStyleWeight.bold]])) return 3;else return 0;
  }
  //--------------------------------------------------------Background
  getBackgrounds() {
    this.settingsService.getBackground().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.tap)(bgnds => {
      this.backgrounds = bgnds.items;
      this.origBackgrounds = lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep(bgnds.items);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.catchError)(() => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)([]);
    })).subscribe();
  }
  updateBackground() {
    if (this.newBgnd.image.length > 0) {
      this.addBackground();
    }
    if (this.bgndChanged) {
      this.updateBackgroundSettings();
    }
  }
  addBackground() {
    this.fileUploadErrorMessages = [];
    this.settingsService.addBackground(this.newBgnd).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.catchError)(() => {
      this.spinner.hide();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)(false);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.tap)(result => {
      if (result.isSucceed === true) {
        this.newBgnd.image = this.newBgnd.contentType = "";
        this.fileUploadMessage = this.uploadMessage;
        this.getBackgrounds();
        this.settingsService.initBackground();
      }
    })).subscribe();
  }
  updateBackgroundSettings() {
    const bgnds = {
      items: this.backgrounds
    };
    this.settingsService.updateBackground(bgnds).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.catchError)(() => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)(false);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.tap)(result => {
      if (result.isSucceed === true) {
        this.bgndChanged = false;
        this.getBackgrounds();
        this.settingsService.initBackground();
      }
    })).subscribe();
  }
  setActiveBackground(bgnd) {
    let index = this.backgrounds.findIndex(x => x.uid == bgnd.uid);
    this.backgrounds.forEach(x => {
      x.isActive = false;
    });
    this.backgrounds[index].isActive = !this.backgrounds[index].isActive;
    this.backgrounds[index].delete = false;
    this.bgndChanged = !this.objectsEqual(this.backgrounds, this.origBackgrounds);
  }
  deleteBackground(bgnd) {
    let index = this.backgrounds.findIndex(x => x.uid == bgnd.uid);
    if (this.backgrounds[index].isActive) {
      this.backgrounds[index == 0 ? 1 : 0].isActive = true;
      this.backgrounds[index == 0 ? 1 : 0].delete = false;
      this.backgrounds[index].isActive = false;
    }
    this.backgrounds[index].delete = !this.backgrounds[index].delete;
    this.bgndChanged = !this.objectsEqual(this.backgrounds, this.origBackgrounds);
  }
  bgndDropped(files) {
    if (this.checkDroppedFiles(files)) {
      this.spinner.show();
      this.newBgnd.contentType = files[0].file.type;
      this.bgndSelected(files[0]);
    }
  }
  bgndSelected(file) {
    this.convertFile(file).subscribe(base64 => {
      this.newBgnd.image = base64;
      this.fileUploadMessage = "Файл загружен";
      this.spinner.hide();
    });
  }
  // ------------------------------------------------------------- About Me
  updateDetails(details) {
    if (!this.objectsEqual(this.origDetails, this.details)) {
      this.accountService.sendMyDetails(details).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.catchError)(() => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.of)([]);
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.tap)(res => {
        this.details = details;
      })).subscribe();
      this.origDetails = lodash__WEBPACK_IMPORTED_MODULE_2__.cloneDeep(details);
    }
  }
  mm(event) {
    const start = event.target.selectionStart;
    const end = event.target.selectionEnd;
    // console.warn(event.target.value.substr(start, end - start))
  }

  objectsEqual(item1, item2) {
    return JSON.stringify(item1) === JSON.stringify(item2);
  }
  checkWatermarkText() {
    return this.origWatermarkSettings !== undefined && this.origWatermarkSettings.watermarkText !== undefined && this.watermarkSettings !== undefined && this.watermarkSettings.watermarkText !== undefined && this.origWatermarkSettings.watermarkText === this.watermarkSettings.watermarkText;
  }
  static #_ = this.ɵfac = function AdminFormatSettingsComponent_Factory(t) {
    return new (t || AdminFormatSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_settings_service__WEBPACK_IMPORTED_MODULE_4__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_18__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_modules_account_account_service__WEBPACK_IMPORTED_MODULE_5__.AccountService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: AdminFormatSettingsComponent,
    selectors: [["app-admin-format-settings"]],
    viewQuery: function AdminFormatSettingsComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.autosize = _t.first);
      }
    },
    inputs: {
      watermarkSettings: "watermarkSettings",
      origWatermarkSettings: "origWatermarkSettings",
      details: "details",
      origDetails: "origDetails"
    },
    decls: 12,
    vars: 5,
    consts: () => {
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2504581474466771325$$SRC_APP_PAGES_ADMIN_ADMIN_FORMAT_SETTINGS_ADMIN_FORMAT_SETTINGS_COMPONENT_TS_2 = goog.getMsg(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ");
        i18n_1 = MSG_EXTERNAL_2504581474466771325$$SRC_APP_PAGES_ADMIN_ADMIN_FORMAT_SETTINGS_ADMIN_FORMAT_SETTINGS_COMPONENT_TS_2;
      } else {
        i18n_1 = $localize` Сохранить `;
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_9140240603138189615$$SRC_APP_PAGES_ADMIN_ADMIN_FORMAT_SETTINGS_ADMIN_FORMAT_SETTINGS_COMPONENT_TS__4 = goog.getMsg("{$startTagMatIcon}format_clear{$closeTagMatIcon}", {
          "closeTagMatIcon": "\uFFFD/#23\uFFFD",
          "startTagMatIcon": "\uFFFD#23\uFFFD"
        }, {
          original_code: {
            "closeTagMatIcon": "</mat-icon>",
            "startTagMatIcon": "<mat-icon>"
          }
        });
        i18n_3 = MSG_EXTERNAL_9140240603138189615$$SRC_APP_PAGES_ADMIN_ADMIN_FORMAT_SETTINGS_ADMIN_FORMAT_SETTINGS_COMPONENT_TS__4;
      } else {
        i18n_3 = $localize`${"\uFFFD#23\uFFFD"}:START_TAG_MAT_ICON:format_clear${"\uFFFD/#23\uFFFD"}:CLOSE_TAG_MAT_ICON:`;
      }
      let i18n_5;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7753081584797710696$$SRC_APP_PAGES_ADMIN_ADMIN_FORMAT_SETTINGS_ADMIN_FORMAT_SETTINGS_COMPONENT_TS__6 = goog.getMsg(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ");
        i18n_5 = MSG_EXTERNAL_7753081584797710696$$SRC_APP_PAGES_ADMIN_ADMIN_FORMAT_SETTINGS_ADMIN_FORMAT_SETTINGS_COMPONENT_TS__6;
      } else {
        i18n_5 = $localize` Сохранить `;
      }
      let i18n_7;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7753081584797710696$$SRC_APP_PAGES_ADMIN_ADMIN_FORMAT_SETTINGS_ADMIN_FORMAT_SETTINGS_COMPONENT_TS__8 = goog.getMsg(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ");
        i18n_7 = MSG_EXTERNAL_7753081584797710696$$SRC_APP_PAGES_ADMIN_ADMIN_FORMAT_SETTINGS_ADMIN_FORMAT_SETTINGS_COMPONENT_TS__8;
      } else {
        i18n_7 = $localize` Сохранить `;
      }
      return [["fxLayout", "row", 2, "margin-top", "20px"], ["fxLayout", "column", "fxLayoutAlign", "top center", 2, "width", "20rem"], [2, "text-align", "center"], [1, "protected", 2, "margin", "2vh"], ["appDragDrop", "", 1, "col-12", "rmpm", "dropzone", "protected", 3, "innerHTML", "files"], ["type", "button", "mat-raised-button", "", "color", "grey", 1, "menu-form__submit", 3, "disabled", "click"], i18n_1, [4, "ngIf"], ["class", "protected", "fxLayout", "column", "fxLayoutAlign", "start", 4, "ngIf"], ["fxFlex", "", "fxLayout", "column", "fxLayoutAlign", "top center", 4, "ngIf"], [2, "color", "red", "font-weight", "bold", "font-size", "large", "margin-bottom", "20px", 3, "innerHTML"], ["style", "color: red; font-weight: bold; font-size: large; margin-bottom: 20px;", 3, "innerHTML"], ["fxLayout", "column", "fxLayoutAlign", "start", 1, "protected"], [3, "checked", "click"], ["fxFlex", "", "fxLayout", "column", "fxLayoutAlign", "top center"], ["fxLayout", "row", "fxLayoutAlign", "center center", 2, "position", "sticky", "top", "40px", "z-index", "99"], [2, "margin-right", "10px", "width", "300px"], [1, "protected"], [3, "value", "valueChange", "selectionChange", 4, "ngIf"], [2, "margin-right", "10px", "width", "150px"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "protected", 2, "margin-right", "10px", "padding-bottom", "20px"], [2, "border-radius", "10px", "height", "30px", "width", "100px", 3, "colorPicker", "cpCancelButton", "cpCancelButtonClass", "colorPickerChange"], [2, "padding-bottom", "16px"], ["multiple", "", 3, "ngModel", "ngModelChange", "change", 4, "ngIf"], [3, "ngModel", "ngModelChange", "change", 4, "ngIf"], [2, "margin-left", "10px", "padding-bottom", "20px"], ["type", "button", "matTooltip", "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0444\u043E\u0440\u043C\u0430\u0442", "mat-fab", "", "color", "grey", 3, "click"], i18n_3, ["fxLayout", "row", "fxLayoutAlign", "center center", 2, "align-items", "center"], ["fxLayout", "column", 1, "text-item"], ["min", "0", "max", "99", "step", "1", "showTickMarks", "", "discrete", "", 3, "displayWith"], ["matSliderThumb", "", 3, "value", "valueChange", "ngModel"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "text-item"], [1, "protected", 2, "margin-bottom", "15px"], [3, "diameter", "angle", "angleChange", "click"], ["matInput", "", "cdkTextareaAutosize", "", 3, "ngModel", "value", "ngStyle", "ngModelChange", "change"], ["autosize", "cdkTextareaAutosize"], [1, "mat-divider", 3, "vertical"], ["min", "0", "max", "100", "step", "1", "showTickMarks", "", "discrete", "", 3, "color", "displayWith"], ["matSliderThumb", "", 3, "value", "valueChange"], ["fxLayout", "row", 3, "ngClass"], ["fxLayout", "column", "fxLayoutAlign", "center", 1, "arts-card", 2, "width", "520px", "height", "600px", "background-color", "white"], [2, "width", "480px", "height", "200px"], ["matInput", "", "cdkTextareaAutosize", "", 3, "ngModel", "ngStyle", "value", "ngModelChange", "click"], ["fxLayoutAlign", "center", 1, "box", 2, "margin-top", "150px", "width", "500px"], [3, "ngStyle", "click"], ["fxLayout", "column", 1, "arts-card", 2, "background-color", "white", "margin-left", "20px"], [1, "protected", 2, "font-weight", "bold", "font-family", "Roboto", "font-size", "20px"], ["fxLayout", "row"], ["fxLayoutAlign", "center center", 2, "height", "400px"], [2, "max-width", "300px", "max-height", "300px", 3, "src", "dblclick"], ["fxLayoutAlign", "center center", 1, "box", 3, "ngStyle"], [2, "max-width", "300px", "max-height", "300px", 3, "src"], [2, "text-align", "center", "margin-top", "5vh"], ["fxLayout", "column", 2, "text-align", "center"], i18n_5, ["fxLayout", "row", "class", "wrap-files", "fxLayoutAlign", "center", "style", "padding-bottom: 2rem; padding-top: 70px;", 4, "ngIf"], [2, "text-align", "center", "margin-top", "1vh", "padding-bottom", "10rem"], ["fxLayoutAlign", "center", "fxLayout", "column", 2, "margin", "2vh"], ["type", "button", "mat-raised-button", "", "color", "grey", 1, "menu-form__submit", 2, "margin-top", "15px", 3, "disabled", "click"], i18n_7, ["matInput", "", "cdkTextareaAutosize", "", 3, "ngModel", "value", "ngStyle", "ngModelChange", "click", "select"], [3, "value", "valueChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["multiple", "", 3, "ngModel", "ngModelChange", "change"], ["group", "matButtonToggleGroup"], ["value", "italic"], ["value", "bold"], [3, "ngModel", "ngModelChange", "change"], ["value", "left"], ["value", "center"], ["value", "right"], ["value", "justify"], ["fxLayout", "row", "fxLayoutAlign", "center", 1, "wrap-files", 2, "padding-bottom", "2rem", "padding-top", "70px"], ["style", "width: 200px; height: 150px;", "class", "mat-elevation-z10", 4, "ngFor", "ngForOf"], [1, "mat-elevation-z10", 2, "width", "200px", "height", "150px"], ["class", "protected", 3, "style", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["disabled", "backgrounds.length == 1", "width", "24", "height", "24", "src", "assets/images/delete24.png", 3, "click"], [3, "disabled", "checked", "click"]];
    },
    template: function AdminFormatSettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-label", 3)(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0442\u0435\u0441\u0442\u043E\u0432\u043E\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("files", function AdminFormatSettingsComponent_Template_div_files_6_listener($event) {
          return ctx.fileDropped($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AdminFormatSettingsComponent_Template_button_click_7_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵi18n"](8, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, AdminFormatSettingsComponent_div_9_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, AdminFormatSettingsComponent_div_10_Template, 5, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, AdminFormatSettingsComponent_div_11_Template, 113, 77, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", ctx.fileUploadMessage, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx.settingsChanged && ctx.checkWatermarkText());
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.fileUploadErrorMessages.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.watermarkSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.watermarkSettings);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_20__.NgModel, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_21__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_22__.DefaultClassDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_22__.DefaultStyleDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_24__.MatFabButton, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__.MatButtonToggle, _angular_material_card__WEBPACK_IMPORTED_MODULE_26__.MatCard, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__.MatCheckbox, _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__.MatDivider, _angular_material_icon__WEBPACK_IMPORTED_MODULE_29__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_30__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__.MatLabel, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_32__.CdkTextareaAutosize, _angular_material_select__WEBPACK_IMPORTED_MODULE_33__.MatSelect, _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__.MatSlider, _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__.MatSliderThumb, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_35__.MatTooltip, ngx_color_picker__WEBPACK_IMPORTED_MODULE_36__.ColorPickerDirective, _modules_circular_slider_components_circular_slider_component__WEBPACK_IMPORTED_MODULE_6__.CircularSliderComponent, _dragdrop_drag_directives__WEBPACK_IMPORTED_MODULE_7__.DragDirective, _angular_common__WEBPACK_IMPORTED_MODULE_19__.KeyValuePipe, _pipes_stringGetNumbersPipe__WEBPACK_IMPORTED_MODULE_8__.StringGetNumbersPipe],
    styles: [".dropzone[_ngcontent-%COMP%] {\n  height: 70px;\n  width: 100px;\n  padding: 2rem;\n  border: dashed 4px #979797;\n  display: inline-table;\n  margin-right: 20px;\n}\n\nmat-grid-tile[_ngcontent-%COMP%] {\n  background: lightblue;\n}\n\n.viewport[_ngcontent-%COMP%] {\n  height: 30vh;\n  width: 70vw;\n  margin-left: 5vw;\n  margin-right: 5vw;\n  border: 10px solid #e9e7e9;\n}\n\n.font-selected-value[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n\n.font-button-pressed[_ngcontent-%COMP%] {\n  background-color: lightgrey;\n}\n\n.mat-button-toggle-group[_ngcontent-%COMP%] {\n  border: #825fdd solid !important;\n}\n\n.mat-button-toggle[_ngcontent-%COMP%] {\n  background-color: white !important;\n  color: #825fdd !important;\n}\n\n.mat-button-toggle-checked[_ngcontent-%COMP%] {\n  background-color: #825fdd !important;\n  color: #eff4ef !important;\n}\n\n.stroke-text[_ngcontent-%COMP%] {\n  stroke: 2px white;\n  color: black;\n}\n\n.mat-divider[_ngcontent-%COMP%] {\n  display: block;\n  --mat-divider-width: 5px;\n  --mat-divider-color: darkblue;\n  height: 150px;\n}\n\n.box[_ngcontent-%COMP%] {\n  display: flex;\n  width: 70%;\n  align-self: center;\n  text-align: center;\n  margin: 50px;\n}\n\n.text-item[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tZm9ybWF0LXNldHRpbmdzL2FkbWluLWZvcm1hdC1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7QUFDRjs7QUFDQTtFQUNFLGtDQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFBQTtFQUNFLG9DQUFBO0VBQ0EseUJBQUE7QUFHRjs7QUFBQTtFQUNFLGlCQUFBO0VBRUEsWUFBQTtBQUVGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFFRiIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wem9uZSB7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBwYWRkaW5nOjJyZW07XHJcbiAgYm9yZGVyOmRhc2hlZCA0cHggIzk3OTc5NztcclxuICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5tYXQtZ3JpZC10aWxlIHtcclxuICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbn1cclxuXHJcbi52aWV3cG9ydCB7XHJcbiAgaGVpZ2h0OiAzMHZoO1xyXG4gIHdpZHRoOiA3MHZ3O1xyXG4gIG1hcmdpbi1sZWZ0OiA1dnc7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1dnc7ICBcclxuICBib3JkZXI6IDEwcHggc29saWQgI2U5ZTdlOTtcclxufVxyXG5cclxuLmZvbnQtc2VsZWN0ZWQtdmFsdWUge1xyXG4gIG1hcmdpbjogMTVweCAwO1xyXG59XHJcblxyXG4uZm9udC1idXR0b24tcHJlc3NlZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7IC8vcmdiKDUyLCAxMDIsIDEzOCk7XHJcbn1cclxuXHJcbi5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cHtcclxuICBib3JkZXI6ICM4MjVmZGQgc29saWQgIWltcG9ydGFudDtcclxufVxyXG4ubWF0LWJ1dHRvbi10b2dnbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICM4MjVmZGQgIWltcG9ydGFudDsgIFxyXG59XHJcbi5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODI1ZmRkICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNlZmY0ZWYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN0cm9rZS10ZXh0e1xyXG4gIHN0cm9rZToycHggd2hpdGU7XHJcbiAgLy8gLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6MnB4IGJsYWNrO1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIC8vIHRleHQtc2hhZG93OjNweCAwIDAgd2hpdGUsMCAzcHggMCB3aGl0ZTtcclxufVxyXG4ubWF0LWRpdmlkZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIC0tbWF0LWRpdmlkZXItd2lkdGg6IDVweDtcclxuICAtLW1hdC1kaXZpZGVyLWNvbG9yOiBkYXJrYmx1ZTtcclxuICBoZWlnaHQ6IDE1MHB4OyAgXHJcbn1cclxuXHJcbi5ib3h7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogNzAlO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiA1MHB4O1xyXG59XHJcblxyXG4udGV4dC1pdGVte1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4073:
/*!******************************************************************************!*\
  !*** ./src/app/pages/admin/admin-menu-entity/admin-menu-entity.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminMenuEntityComponent: () => (/* binding */ AdminMenuEntityComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5267);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1891);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7792);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! uuid */ 4289);
/* harmony import */ var _dialogref_menu_item_menu_item_dialogref_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../dialogref/menu-item/menu-item-dialogref.component */ 8624);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/animations */ 2501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _services_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/menu.service */ 2042);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5356);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 1333);















function AdminMenuEntityComponent_For_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 21);
  }
}
function AdminMenuEntityComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dblclick", function AdminMenuEntityComponent_For_16_Template_div_dblclick_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const i_r3 = restoredCtx.$index;
      const item_r2 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.onMenuDoubleClick(i_r3, item_r2));
    })("click", function AdminMenuEntityComponent_For_16_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const i_r3 = restoredCtx.$index;
      const item_r2 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.onMenuClick(i_r3, item_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AdminMenuEntityComponent_For_16_div_1_Template, 1, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.$index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", ctx_r0.clicked[i_r3] ? "#e3dede" : "white");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", item_r2.isActive ? "visibility" : "visibility-off");
  }
}
function AdminMenuEntityComponent_For_34_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 21);
  }
}
function AdminMenuEntityComponent_For_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("dblclick", function AdminMenuEntityComponent_For_34_Template_div_dblclick_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const i_r12 = restoredCtx.$index;
      const item_r11 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r17.onSubMenuDoubleClick(i_r12, item_r11));
    })("click", function AdminMenuEntityComponent_For_34_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const i_r12 = restoredCtx.$index;
      const item_r11 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r19.onSubMenuClick(i_r12, item_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AdminMenuEntityComponent_For_34_div_1_Template, 1, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    const i_r12 = ctx.$index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-color", ctx_r1.clickedSub[i_r12] ? "#e3dede" : "white");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r11.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("svgIcon", item_r11.isActive ? "visibility" : "visibility-off");
  }
}
class AdminMenuEntityComponent {
  constructor(dialog, menuService, spinner) {
    this.dialog = dialog;
    this.menuService = menuService;
    this.spinner = spinner;
    this.menues = {
      items: []
    };
    this.menuChanged = false;
    this.clicked = {};
    this.removeMenu = false;
    this.subMenu = [];
    this.removeSubMenu = false;
    this.clickedSub = {};
  }
  ngOnInit() {
    this.spinner.show();
  }
  onMenuSubmit() {
    if (this.menu) {
      for (let i = 0; i < this.menu.length; i++) {
        this.menu[i].position = i;
        if (this.menu[i].subMenuItems && this.menu[i].subMenuItems.length > 0) {
          for (let j = 0; j < this.menu[i].subMenuItems.length; j++) this.menu[i].subMenuItems[j].position = j;
          this.menu[i].isActive = this.menu[i].subMenuItems.filter(x => x.isActive === true).length > 0 && this.menu[i].isActive;
        } else {
          this.menu[i].isActive = false;
        }
      }
      this.menues.items = this.menu;
      this.menuService.updateMenu(this.menues).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(menu => {
        this.menues = menu ?? [];
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.first)()).subscribe();
    }
    this.menuChanged = false;
  }
  drop(event) {
    (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__.moveItemInArray)(this.menu, event.previousIndex, event.currentIndex);
    this.menuChanged = this.objectsEqual(this.origMenu, this.menu);
    this.onMenuClick(event.currentIndex, this.menu[event.currentIndex]);
  }
  onMenuClick(i, item) {
    this.clicked = {};
    this.clicked[i] = !this.clicked[i];
    this.removeMenu = true;
    this.currentMenu = item;
    this.subMenu = item.subMenuItems ?? [];
    this.removeSubMenu = false;
    this.clickedSub = {};
  }
  onMenuDoubleClick(i, item) {
    this.dialog.open(_dialogref_menu_item_menu_item_dialogref_component__WEBPACK_IMPORTED_MODULE_0__.MenuItemDialogrefComponent, {
      data: item,
      autoFocus: true,
      width: '400px'
    }).afterClosed().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(result => {
      if (result) {
        item.name = result.name;
        item.isActive = result.isActive;
        this.menuChanged = this.objectsEqual(this.origMenu, this.menu);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(null);
    })).subscribe();
  }
  onMenuAdd() {
    this.dialog.open(_dialogref_menu_item_menu_item_dialogref_component__WEBPACK_IMPORTED_MODULE_0__.MenuItemDialogrefComponent, {
      data: [],
      autoFocus: true,
      width: '400px'
    }).afterClosed().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(result => {
      if (result) {
        if (!this.menu) this.menu = [];
        let item = {
          uid: (0,uuid__WEBPACK_IMPORTED_MODULE_8__["default"])(),
          name: result.name,
          isActive: result.isActive,
          position: this.menu.length,
          subMenuItems: []
        };
        this.menu.push(item);
        this.menuChanged = true;
        this.currentMenu = item;
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(null);
    })).subscribe();
  }
  onMenuDelete() {
    if (this.currentMenu) {
      const index = this.menu.findIndex(x => x.uid === this.currentMenu.uid);
      if (index != -1) {
        this.currentMenu.subMenuItems = [];
        this.subMenu = [];
        this.menu.splice(index, 1);
        this.clicked = {};
        this.menuChanged = this.objectsEqual(this.origMenu, this.currentMenu);
      }
    }
    this.removeMenu = !this.removeMenu;
    this.currentMenu = null;
  }
  dropSub(event) {
    (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__.moveItemInArray)(this.subMenu, event.previousIndex, event.currentIndex);
    this.menuChanged = this.objectsEqual(this.origMenu, this.menu);
    this.onSubMenuClick(event.currentIndex, this.subMenu[event.currentIndex]);
  }
  onSubMenuClick(i, item) {
    this.clickedSub = {};
    this.clickedSub[i] = !this.clickedSub[i];
    this.removeSubMenu = true;
    this.currentSubMenu = item;
  }
  onSubMenuDoubleClick(i, item) {
    this.dialog.open(_dialogref_menu_item_menu_item_dialogref_component__WEBPACK_IMPORTED_MODULE_0__.MenuItemDialogrefComponent, {
      data: item,
      autoFocus: true,
      width: '400px'
    }).afterClosed().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(result => {
      if (result) {
        item.name = result.name;
        item.isActive = result.isActive;
        this.menuChanged = this.objectsEqual(this.origMenu, this.menu);
        this.onSubMenuClick(i, item);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(null);
    })).subscribe();
  }
  onSubMenuAdd() {
    this.dialog.open(_dialogref_menu_item_menu_item_dialogref_component__WEBPACK_IMPORTED_MODULE_0__.MenuItemDialogrefComponent, {
      data: [],
      autoFocus: true,
      width: '400px'
    }).afterClosed().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.switchMap)(result => {
      if (result) {
        if (!this.menu.find(x => x.uid === this.currentMenu.uid)?.subMenuItems) this.menu.find(x => x.uid === this.currentMenu.uid).subMenuItems = [];
        this.subMenu = this.menu.find(x => x.uid === this.currentMenu.uid).subMenuItems;
        let item = {
          uid: (0,uuid__WEBPACK_IMPORTED_MODULE_8__["default"])(),
          menuUid: this.currentMenu.uid,
          name: result.name,
          isActive: result.isActive,
          position: this.subMenu.length
        };
        this.menuChanged = true;
        this.menu.find(x => x.uid === this.currentMenu.uid).subMenuItems.push(item);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(true);
    })).subscribe();
  }
  onSubMenuDelete() {
    if (this.currentSubMenu && this.subMenu) {
      const index = this.subMenu.findIndex(x => x.uid === this.currentSubMenu.uid);
      if (index != -1) {
        this.subMenu.splice(index, 1);
        this.clickedSub = {};
        this.menuChanged = this.objectsEqual(this.origMenu, this.menu);
      }
      this.removeSubMenu = !this.removeSubMenu;
    }
  }
  objectsEqual(item1, item2) {
    return JSON.stringify(item1) !== JSON.stringify(item2);
  }
  static #_ = this.ɵfac = function AdminMenuEntityComponent_Factory(t) {
    return new (t || AdminMenuEntityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_menu_service__WEBPACK_IMPORTED_MODULE_1__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AdminMenuEntityComponent,
    selectors: [["app-admin-menu-entity"]],
    inputs: {
      menu: "menu",
      origMenu: "origMenu"
    },
    decls: 35,
    vars: 4,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7369185749162479865$$SRC_APP_PAGES_ADMIN_ADMIN_MENU_ENTITY_ADMIN_MENU_ENTITY_COMPONENT_TS_1 = goog.getMsg(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C ");
        i18n_0 = MSG_EXTERNAL_7369185749162479865$$SRC_APP_PAGES_ADMIN_ADMIN_MENU_ENTITY_ADMIN_MENU_ENTITY_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize` Добавить `;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7663505953116997578$$SRC_APP_PAGES_ADMIN_ADMIN_MENU_ENTITY_ADMIN_MENU_ENTITY_COMPONENT_TS_3 = goog.getMsg(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C ");
        i18n_2 = MSG_EXTERNAL_7663505953116997578$$SRC_APP_PAGES_ADMIN_ADMIN_MENU_ENTITY_ADMIN_MENU_ENTITY_COMPONENT_TS_3;
      } else {
        i18n_2 = $localize` Удалить `;
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2504581474466771325$$SRC_APP_PAGES_ADMIN_ADMIN_MENU_ENTITY_ADMIN_MENU_ENTITY_COMPONENT_TS_5 = goog.getMsg(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ");
        i18n_4 = MSG_EXTERNAL_2504581474466771325$$SRC_APP_PAGES_ADMIN_ADMIN_MENU_ENTITY_ADMIN_MENU_ENTITY_COMPONENT_TS_5;
      } else {
        i18n_4 = $localize` Сохранить `;
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5720071743580535875$$SRC_APP_PAGES_ADMIN_ADMIN_MENU_ENTITY_ADMIN_MENU_ENTITY_COMPONENT_TS_7 = goog.getMsg(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C ");
        i18n_6 = MSG_EXTERNAL_5720071743580535875$$SRC_APP_PAGES_ADMIN_ADMIN_MENU_ENTITY_ADMIN_MENU_ENTITY_COMPONENT_TS_7;
      } else {
        i18n_6 = $localize` Добавить `;
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_1952628615978178560$$SRC_APP_PAGES_ADMIN_ADMIN_MENU_ENTITY_ADMIN_MENU_ENTITY_COMPONENT_TS_9 = goog.getMsg(" \u0423\u0434\u0430\u043B\u0438\u0442\u044C ");
        i18n_8 = MSG_EXTERNAL_1952628615978178560$$SRC_APP_PAGES_ADMIN_ADMIN_MENU_ENTITY_ADMIN_MENU_ENTITY_COMPONENT_TS_9;
      } else {
        i18n_8 = $localize` Удалить `;
      }
      return [["type", "square-loader"], [1, "flex-container"], ["fxLayout", "column", "fxLayoutAlign", "center center"], [2, "top", "0px", "z-index", "99", "background-color", "white", "max-width", "600px", "text-align", "center"], [1, "labels", "protected", "sticky-top", 2, "background-color", "white", "height", "30px"], ["fxLayout", "row", 1, "menu-buttons"], ["type", "button", "mat-raised-button", "", 1, "menu-form__submit", "mat-elevation-z10", 2, "width", "150px", "margin-left", "40px", 3, "click"], i18n_0, ["fxFlex", "10vw"], ["type", "button", "mat-raised-button", "", 1, "menu-form__submit", "mat-elevation-z10", 2, "width", "150px", "margin-right", "40px", 3, "disabled", "click"], i18n_2, ["cdkDropList", "", 1, "menu-list", 3, "cdkDropListDropped"], [2, "padding-bottom", "20px"], ["type", "button", "mat-raised-button", "", 1, "menu-form__submit", "mat-elevation-z10", 2, "width", "150px", 3, "disabled", "click"], i18n_4, ["type", "button", "mat-raised-button", "", 1, "menu-form__submit", "mat-elevation-z10", 2, "width", "150px", "margin-left", "40px", 3, "disabled", "click"], i18n_6, i18n_8, ["cdkDrag", "", 1, "menu-box", 3, "dblclick", "click"], ["class", "menu-custom-placeholder", 4, "cdkDragPlaceholder"], ["aria-hidden", "false", "matPostfix", "", 1, "menuitem-form__visibility-icon", "mat-icon-stroke", 3, "svgIcon"], [1, "menu-custom-placeholder"], ["class", "menu-box", "cdkDrag", "", 3, "background-color"]];
    },
    template: function AdminMenuEntityComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div")(3, "div", 2)(4, "mat-card", 3)(5, "mat-label", 4)(6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u041C\u0435\u043D\u044E");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5)(9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminMenuEntityComponent_Template_button_click_9_listener() {
          return ctx.onMenuAdd();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminMenuEntityComponent_Template_button_click_12_listener() {
          return ctx.onMenuDelete();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](13, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkDropListDropped", function AdminMenuEntityComponent_Template_div_cdkDropListDropped_14_listener($event) {
          return ctx.drop($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](15, AdminMenuEntityComponent_For_16_Template, 4, 4, "div", 22, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminMenuEntityComponent_Template_button_click_18_listener() {
          return ctx.onMenuSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](19, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div")(21, "div", 2)(22, "mat-card", 3)(23, "mat-label", 4)(24, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "\u041F\u043E\u0434\u043C\u0435\u043D\u044E");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 5)(27, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminMenuEntityComponent_Template_button_click_27_listener() {
          return ctx.onSubMenuAdd();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](28, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminMenuEntityComponent_Template_button_click_30_listener() {
          return ctx.onSubMenuDelete();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](31, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkDropListDropped", function AdminMenuEntityComponent_Template_div_cdkDropListDropped_32_listener($event) {
          return ctx.dropSub($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterCreate"](33, AdminMenuEntityComponent_For_34_Template, 4, 4, "div", 22, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeaterTrackByIdentity"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.removeMenu || !ctx.currentMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.menu);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.menuChanged);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.currentMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.removeSubMenu || !ctx.currentSubMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrepeater"](ctx.subMenu);
      }
    },
    dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__.CdkDrag, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__.CdkDragPlaceholder, ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerComponent],
    styles: [".labels[_ngcontent-%COMP%] {\n  margin: 10px;\n  margin-top: 15px;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n  padding-left: 15vw;\n  padding-right: 15vw;\n}\n\n.menu-buttons[_ngcontent-%COMP%] {\n  justify-content: space-between !important;\n  position: sticky;\n  top: 40px;\n  z-index: 99;\n  padding-bottom: 20px;\n}\n\n.menu-list[_ngcontent-%COMP%] {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.menu-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.menu-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.menu-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .menu-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.menu-custom-placeholder[_ngcontent-%COMP%] {\n  background: #ccc;\n  border: dotted 3px #999;\n  min-height: 60px;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tbWVudS1lbnRpdHkvYWRtaW4tbWVudS1lbnRpdHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UseUNBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxSEFBQTtBQUNGOztBQUlBO0VBQ0Usc0RBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7QUFERjs7QUFJQTtFQUNFLHNEQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzREFBQTtBQURGIiwic291cmNlc0NvbnRlbnQiOlsiLmxhYmVsc3tcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXZ3O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1dnc7XHJcbn1cclxuXHJcbi5tZW51LWJ1dHRvbnN7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7IFxyXG4gIHBvc2l0aW9uOiBzdGlja3k7IFxyXG4gIHRvcDogNDBweDsgXHJcbiAgei1pbmRleDogOTk7IFxyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ubWVudS1saXN0IHtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XHJcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5tZW51LWJveCB7XHJcbiAgcGFkZGluZzogMjBweCAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGN1cnNvcjogbW92ZTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wcmV2aWV3IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAgICAgICAgICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAgICAgICAgICAgICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5tZW51LWJveDpsYXN0LWNoaWxkIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5tZW51LWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAubWVudS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuLm1lbnUtY3VzdG9tLXBsYWNlaG9sZGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gIGJvcmRlcjogZG90dGVkIDNweCAjOTk5O1xyXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.trigger)('detailExpand', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.style)({
        height: '0px',
        minHeight: '0'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.style)({
        height: '*'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.transition)('expanded <=> collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.animate)('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])]
    }
  });
}

/***/ }),

/***/ 8885:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/admin/admin-newsletter-entity/admin-newsletter.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminNewsletterComponent: () => (/* binding */ AdminNewsletterComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 1527);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 5267);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var _globalConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../globalConstants */ 1944);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_watermark_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/watermark.model */ 351);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/collections */ 636);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _modules_account_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modules/account/account.service */ 6992);
/* harmony import */ var _services_newsletter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/newsletter.service */ 5328);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5356);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout/extended */ 7520);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button-toggle */ 727);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/checkbox */ 6658);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/datepicker */ 2226);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/text-field */ 5802);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/sort */ 7963);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/tooltip */ 702);
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-color-picker */ 3158);
/* harmony import */ var _pipes_stringGetNumbersPipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../pipes/stringGetNumbersPipe */ 2412);































const _c0 = ["autosize"];
const _c1 = ["subscribersPaginator"];
const _c2 = ["subscribersSort"];
function AdminNewsletterComponent_div_16_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const font_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", font_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](font_r8.key);
  }
}
function AdminNewsletterComponent_div_16_mat_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "stringGetNumbers");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const size_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", size_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, size_r9));
  }
}
function AdminNewsletterComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 14)(1, "mat-form-field", 15)(2, "mat-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\u0428\u0440\u0438\u0444\u0442\u044B");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("valueChange", function AdminNewsletterComponent_div_16_Template_mat_select_valueChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r10.newsletter.newsletterFont = $event);
    })("selectionChange", function AdminNewsletterComponent_div_16_Template_mat_select_selectionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r12.triggerResize());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, AdminNewsletterComponent_div_16_mat_option_5_Template, 2, 2, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-form-field", 19)(8, "mat-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "\u0420\u0430\u0437\u043C\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("valueChange", function AdminNewsletterComponent_div_16_Template_mat_select_valueChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r13.newsletter.newsletterFontSize = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, AdminNewsletterComponent_div_16_mat_option_11_Template, 3, 4, "mat-option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "\u0426\u0432\u0435\u0442 \u0448\u0440\u0438\u0444\u0442\u0430 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("colorPickerChange", function AdminNewsletterComponent_div_16_Template_input_colorPickerChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r14.colorChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 23)(16, "mat-button-toggle-group", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AdminNewsletterComponent_div_16_Template_mat_button_toggle_group_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r15.selectedNewsletterStyleWeight = $event);
    })("change", function AdminNewsletterComponent_div_16_Template_mat_button_toggle_group_change_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r16.styleWeightChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "mat-button-toggle", 26)(19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "format_italic");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "mat-button-toggle", 27)(22, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "format_bold");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 23)(25, "mat-button-toggle-group", 28, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AdminNewsletterComponent_div_16_Template_mat_button_toggle_group_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r17.newsletter.newsletterAlign = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "mat-button-toggle", 29)(28, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "format_align_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "mat-button-toggle", 30)(31, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "format_align_center");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "mat-button-toggle", 31)(34, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "format_align_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "mat-button-toggle", 32)(37, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "format_align_justify");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 33)(40, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminNewsletterComponent_div_16_Template_button_click_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r18.cleanFormat());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18nStart"](41, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r1.newsletter.newsletterFont);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 11, ctx_r1.fonts));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r1.newsletter.newsletterFontSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.fontSizes);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background", ctx_r1.newsletter.newsletterFontColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("colorPicker", ctx_r1.newsletter.newsletterFontColor)("cpCancelButton", true)("cpCancelButtonClass", "btn btn-primary btn-xs");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r1.selectedNewsletterStyleWeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r1.newsletter.newsletterAlign);
  }
}
const _c9 = (a3, a4, a5, a6, a7, a8) => ({
  "width": "40vw",
  "min-height": "200px",
  "margin-left": "15px",
  "font-size": a3,
  "fontFamily": a4,
  "color": a5,
  "font-style": a6,
  "font-weight": a7,
  "text-align": a8
});
function AdminNewsletterComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 37)(1, "mat-label", 16)(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 2)(5, "div", 38)(6, "mat-label", 16)(7, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "\u0422\u0435\u043A\u0441\u0442 \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminNewsletterComponent_div_17_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r20.updateNewsletter(ctx_r20.newsletter));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](10, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "textarea", 41, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AdminNewsletterComponent_div_17_Template_textarea_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r22.newsletter.newsletterText = $event);
    })("select", function AdminNewsletterComponent_div_17_Template_textarea_select_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r23.mm($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r2.objectsEqual(ctx_r2.origNewsletter, ctx_r2.newsletter));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r2.newsletter.newsletterText)("value", ctx_r2.newsletter.newsletterText)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction6"](4, _c9, ctx_r2.currentItemFontSize(), (tmp_3_0 = ctx_r2.currentItemFont()) == null ? null : tmp_3_0.replace("-", " "), ctx_r2.currentItemColor(), ctx_r2.currentItemStyle(), ctx_r2.currentItemWeight(), ctx_r2.currentItemAlign()));
  }
}
function AdminNewsletterComponent_div_18_ng_container_13_th_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "mat-checkbox", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function AdminNewsletterComponent_div_18_ng_container_13_th_1_div_1_Template_mat_checkbox_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r36.toggleAllRows());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r34.isAllCheckBoxChecked());
  }
}
function AdminNewsletterComponent_div_18_ng_container_13_th_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r35.subscribersToDisplayName[column_r31], " ");
  }
}
const _c10 = () => ({
  "width": "25px",
  "max-width": "30px",
  "min-width": "20px"
});
function AdminNewsletterComponent_div_18_ng_container_13_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AdminNewsletterComponent_div_18_ng_container_13_th_1_div_1_Template, 2, 1, "div", 60)(2, AdminNewsletterComponent_div_18_ng_container_13_th_1_div_2_Template, 2, 1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](3, _c10));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", column_r31 == "checked");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", column_r31 != "checked");
  }
}
function AdminNewsletterComponent_div_18_ng_container_13_td_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "mat-checkbox", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminNewsletterComponent_div_18_ng_container_13_td_2_div_1_Template_mat_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    })("change", function AdminNewsletterComponent_div_18_ng_container_13_td_2_div_1_Template_mat_checkbox_change_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r46);
      const element_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"]($event ? ctx_r44.selection.toggle(element_r40) : null);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx_r41.selection.isSelected(element_r40));
  }
}
function AdminNewsletterComponent_div_18_ng_container_13_td_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const column_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r40[column_r31], " ");
  }
}
const _c11 = (a0, a1, a2) => ({
  "width": a0,
  "max-width": a1,
  "min-width": a2,
  "text-overflow": "ellipsis",
  "overflow": "hidden",
  "white-space": "nowrap"
});
function AdminNewsletterComponent_div_18_ng_container_13_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AdminNewsletterComponent_div_18_ng_container_13_td_2_div_1_Template, 2, 1, "div", 60)(2, AdminNewsletterComponent_div_18_ng_container_13_td_2_div_2_Template, 2, 1, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](3, _c11, column_r31 == "checked" ? "25px" : "120px", column_r31 == "checked" ? "30px" : "140px", column_r31 == "checked" ? "20px" : "115px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", column_r31 == "checked");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", column_r31 != "checked");
  }
}
function AdminNewsletterComponent_div_18_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AdminNewsletterComponent_div_18_ng_container_13_th_1_Template, 3, 4, "th", 57)(2, AdminNewsletterComponent_div_18_ng_container_13_td_2_Template, 3, 7, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matColumnDef", column_r31);
  }
}
function AdminNewsletterComponent_div_18_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 64);
  }
}
function AdminNewsletterComponent_div_18_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 65);
  }
}
function AdminNewsletterComponent_div_18_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 66)(1, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \"", _r24.value, "\"");
  }
}
const _c12 = () => [10, 15, 20, 25];
function AdminNewsletterComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 43)(1, "div", 44)(2, "mat-label", 16)(3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "\u041F\u043E\u0434\u043F\u0438\u0441\u0447\u0438\u043A\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 45)(6, "mat-form-field", 45)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "\u0424\u0438\u043B\u044C\u0442\u0440 \u043F\u043E \u0441\u0442\u043E\u043B\u0431\u0446\u0430\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "input", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keyup", function AdminNewsletterComponent_div_18_Template_input_keyup_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r52.applyFilter($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "table", 48, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, AdminNewsletterComponent_div_18_ng_container_13_Template, 3, 1, "ng-container", 50)(14, AdminNewsletterComponent_div_18_tr_14_Template, 1, 0, "tr", 51)(15, AdminNewsletterComponent_div_18_tr_15_Template, 1, 0, "tr", 52)(16, AdminNewsletterComponent_div_18_tr_16_Template, 3, 1, "tr", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "mat-paginator", 54, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx_r3.subscribersDataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.subscribersToDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx_r3.subscribersToDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx_r3.subscribersToDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c12));
  }
}
const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
class AdminNewsletterComponent {
  constructor(ngZone, accountService, newsletterService, cdr) {
    this.ngZone = ngZone;
    this.accountService = accountService;
    this.newsletterService = newsletterService;
    this.cdr = cdr;
    this.fonts = _globalConstants__WEBPACK_IMPORTED_MODULE_0__.GlobalConstants.fonts;
    this.fontSizes = _globalConstants__WEBPACK_IMPORTED_MODULE_0__.GlobalConstants.fontSizes;
    this.newsletterDates = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
      start: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(today),
      end: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(today)
    });
    this.selectedNewsletterStyleWeight = ["", ""];
    this.selectedNewsletterStyle = "";
    this.selectedNewsletterWeight = "";
    this.clearFormat = false;
    this.settingsChanged = false;
    this.subscribersToDisplay = ['checked', 'name', 'email'];
    this.subscribersToDisplayName = {
      name: 'Пользователь',
      email: 'email'
    };
    this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__.SelectionModel(true, []);
  }
  ngOnInit() {}
  ngOnChanges(changes) {
    if (changes.subscribed) {
      this.getSubscribers();
    }
  }
  getSubscribers() {
    this.subscribersDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTableDataSource(this.subscribed);
    this.subscribersDataSource.sort = this.subscribersSort;
    this.subscribersDataSource.paginator = this.subscribersPaginator;
    this.toggleAllRows();
    this.cdr.detectChanges();
    this.cdr.detectChanges();
  }
  applyFilter(event) {
    const filterValue = event.target.value;
    this.subscribersDataSource.filter = filterValue.trim().toLowerCase();
    if (this.subscribersDataSource.paginator) {
      this.subscribersDataSource.paginator.firstPage();
    }
  }
  isAllCheckBoxChecked() {
    const numSelected = this.selection.selected?.length;
    const numRows = this.subscribersDataSource.data?.length;
    return numSelected === numRows;
  }
  toggleAllRows() {
    if (this.subscribed && this.subscribersDataSource.data && this.selection && this.isAllCheckBoxChecked()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.subscribersDataSource.data);
  }
  get _start() {
    return this.newsletterDates.get('start');
  }
  get _end() {
    return this.newsletterDates.get('end');
  }
  currentItemFont() {
    return this.newsletter.newsletterFont;
  }
  currentItemFontSize() {
    return this.newsletter.newsletterFontSize;
  }
  currentItemColor() {
    return this.newsletter.newsletterFontColor;
  }
  currentItemStyle() {
    this.selectedNewsletterStyleWeight[0] = this.fontStyleText(this.newsletter.newsletterFontStyleWeight)[0];
    return this.selectedNewsletterStyleWeight[0];
  }
  setCurrentItemStyle(style) {
    this.newsletter.newsletterFontStyleWeight = this.fontStyleNumber([style, this.selectedNewsletterStyleWeight[1]]);
  }
  currentItemWeight() {
    this.selectedNewsletterStyleWeight[1] = this.fontStyleText(this.newsletter.newsletterFontStyleWeight)[1];
    return this.fontStyleText(this.newsletter.newsletterFontStyleWeight)[1];
  }
  setCurrentItemWeight(weight) {
    this.newsletter.newsletterFontStyleWeight = this.fontStyleNumber([this.selectedNewsletterStyleWeight[0], weight]);
  }
  currentItemAlign() {
    return this.newsletter.newsletterAlign;
  }
  cleanFormat() {
    this.newsletter.newsletterFont = "Arbor";
    this.newsletter.newsletterFontSize = "20px";
    this.newsletter.newsletterFontColor = "#FFFFFF";
    this.selectedNewsletterStyleWeight = ["", ""];
    this.selectedNewsletterStyle = "";
    this.selectedNewsletterWeight = "";
    this.setCurrentItemStyle(this.selectedNewsletterStyle);
    this.setCurrentItemWeight(this.selectedNewsletterWeight);
    this.newsletter.newsletterAlign = "left";
  }
  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.take)(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }
  colorChange($event) {
    if (!$event.match("rgba")) {
      this.newsletter.newsletterFontColor = $event;
    }
  }
  styleWeightChange() {
    const style = this.selectedNewsletterStyleWeight.find(x => x === "italic");
    const weight = this.selectedNewsletterStyleWeight.find(x => x === "bold");
    this.selectedNewsletterStyle = style === undefined ? "" : style;
    this.selectedNewsletterWeight = weight === undefined ? "" : weight;
    this.selectedNewsletterStyleWeight = [this.selectedNewsletterStyle, this.selectedNewsletterWeight];
    this.setCurrentItemStyle(this.selectedNewsletterStyle);
    this.setCurrentItemWeight(this.selectedNewsletterWeight);
    this.settingsChanged = this.origNewsletter.newsletterFontStyleWeight !== this.newsletter.newsletterFontStyleWeight;
  }
  fontStyleText(value) {
    if (value === 1) return ["", _models_watermark_model__WEBPACK_IMPORTED_MODULE_2__.fontStyleWeight[_models_watermark_model__WEBPACK_IMPORTED_MODULE_2__.fontStyleWeight.bold]];else if (value === 2) return [_models_watermark_model__WEBPACK_IMPORTED_MODULE_2__.fontStyleWeight[_models_watermark_model__WEBPACK_IMPORTED_MODULE_2__.fontStyleWeight.italic], ""];else if (value === 3) return [_models_watermark_model__WEBPACK_IMPORTED_MODULE_2__.fontStyleWeight[_models_watermark_model__WEBPACK_IMPORTED_MODULE_2__.fontStyleWeight.italic], _models_watermark_model__WEBPACK_IMPORTED_MODULE_2__.fontStyleWeight[_models_watermark_model__WEBPACK_IMPORTED_MODULE_2__.fontStyleWeight.bold]];else return ["", ""];
  }
  fontStyleNumber(value) {
    if (this.objectsEqual(value, ["", _models_watermark_model__WEBPACK_IMPORTED_MODULE_2__.fontStyleWeight[_models_watermark_model__WEBPACK_IMPORTED_MODULE_2__.fontStyleWeight.bold]])) return 1;else if (this.objectsEqual(value, [_models_watermark_model__WEBPACK_IMPORTED_MODULE_2__.fontStyleWeight[_models_watermark_model__WEBPACK_IMPORTED_MODULE_2__.fontStyleWeight.italic], ""])) return 2;else if (this.objectsEqual(value, [_models_watermark_model__WEBPACK_IMPORTED_MODULE_2__.fontStyleWeight[_models_watermark_model__WEBPACK_IMPORTED_MODULE_2__.fontStyleWeight.italic], _models_watermark_model__WEBPACK_IMPORTED_MODULE_2__.fontStyleWeight[_models_watermark_model__WEBPACK_IMPORTED_MODULE_2__.fontStyleWeight.bold]])) return 3;else return 0;
  }
  updateNewsletter(newsletter) {
    if (!this.objectsEqual(this.origNewsletter, this.newsletter)) {
      this.accountService.saveNewsletter(newsletter).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.catchError)(() => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)([]);
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.tap)(res => this.newsletter = newsletter)).subscribe();
      this.origNewsletter = lodash__WEBPACK_IMPORTED_MODULE_1__.cloneDeep(newsletter);
    }
  }
  sendNewsletter() {
    const newsletter = {
      dateFrom: this.newsletterDates.value.start,
      dateTo: this.newsletterDates.value.end,
      users: this.selection.selected,
      newsletter: this.newsletter
    };
    this.newsletterService.createNewsletter(newsletter).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.catchError)(() => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)([]);
    })).subscribe();
  }
  mm(event) {
    const start = event.target.selectionStart;
    const end = event.target.selectionEnd;
    // console.warn(event.target.value.substr(start, end - start))
  }

  objectsEqual(item1, item2) {
    return JSON.stringify(item1) === JSON.stringify(item2);
  }
  static #_ = this.ɵfac = function AdminNewsletterComponent_Factory(t) {
    return new (t || AdminNewsletterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_modules_account_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_newsletter_service__WEBPACK_IMPORTED_MODULE_4__.NewsletterService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: AdminNewsletterComponent,
    selectors: [["app-admin-newsletter"]],
    viewQuery: function AdminNewsletterComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c2, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.autosize = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.subscribersPaginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.subscribersSort = _t.first);
      }
    },
    inputs: {
      newsletter: "newsletter",
      origNewsletter: "origNewsletter",
      subscribed: "subscribed"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_15__.provideNativeDateAdapter)()]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
    decls: 19,
    vars: 6,
    consts: () => {
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_8734423350554585541$$SRC_APP_PAGES_ADMIN_ADMIN_NEWSLETTER_ENTITY_ADMIN_NEWSLETTER_COMPONENT_TS_4 = goog.getMsg(" \u0420\u0430\u0441\u0441\u044B\u043B\u043A\u0430 ");
        i18n_3 = MSG_EXTERNAL_8734423350554585541$$SRC_APP_PAGES_ADMIN_ADMIN_NEWSLETTER_ENTITY_ADMIN_NEWSLETTER_COMPONENT_TS_4;
      } else {
        i18n_3 = $localize` Рассылка `;
      }
      let i18n_5;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_9140240603138189615$$SRC_APP_PAGES_ADMIN_ADMIN_NEWSLETTER_ENTITY_ADMIN_NEWSLETTER_COMPONENT_TS__6 = goog.getMsg("{$startTagMatIcon}format_clear{$closeTagMatIcon}", {
          "closeTagMatIcon": "\uFFFD/#42\uFFFD",
          "startTagMatIcon": "\uFFFD#42\uFFFD"
        }, {
          original_code: {
            "closeTagMatIcon": "</mat-icon>",
            "startTagMatIcon": "<mat-icon>"
          }
        });
        i18n_5 = MSG_EXTERNAL_9140240603138189615$$SRC_APP_PAGES_ADMIN_ADMIN_NEWSLETTER_ENTITY_ADMIN_NEWSLETTER_COMPONENT_TS__6;
      } else {
        i18n_5 = $localize`${"\uFFFD#42\uFFFD"}:START_TAG_MAT_ICON:format_clear${"\uFFFD/#42\uFFFD"}:CLOSE_TAG_MAT_ICON:`;
      }
      let i18n_7;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_7753081584797710696$$SRC_APP_PAGES_ADMIN_ADMIN_NEWSLETTER_ENTITY_ADMIN_NEWSLETTER_COMPONENT_TS__8 = goog.getMsg(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ");
        i18n_7 = MSG_EXTERNAL_7753081584797710696$$SRC_APP_PAGES_ADMIN_ADMIN_NEWSLETTER_ENTITY_ADMIN_NEWSLETTER_COMPONENT_TS__8;
      } else {
        i18n_7 = $localize` Сохранить `;
      }
      return [[2, "margin-top", "20px"], ["fxFlex", "", "fxLayout", "column", "fxLayoutAlign", "top center"], ["fxLayout", "row"], [1, "example-form-field"], [3, "formGroup", "rangePicker"], ["matStartDate", "", "placeholder", "\u0421", "formControlName", "start"], ["matEndDate", "", "placeholder", "\u0414\u043E", "formControlName", "end"], ["matIconSuffix", "", 3, "for"], ["newsletterDatesPicker", ""], ["type", "button", "mat-raised-button", "", "color", "grey", 1, "menu-form__submit", 2, "margin", "15px", 3, "click"], i18n_3, ["fxLayout", "row", "fxLayoutAlign", "center center", "style", "margin-top: 40px; z-index: 99;", 4, "ngIf"], ["style", "text-align: center; margin-top: 1vh; padding-bottom: 1rem;", 4, "ngIf"], ["class", "row mt-3 protected", "fxLayout", "column", "style", "padding-bottom: 10rem;", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center", 2, "margin-top", "40px", "z-index", "99"], [2, "margin-right", "10px", "width", "300px"], [1, "protected"], [3, "value", "valueChange", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [2, "margin-right", "10px", "width", "150px"], [3, "value", "valueChange"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "protected", 2, "margin-right", "10px", "padding-bottom", "20px"], [2, "border-radius", "10px", "height", "30px", "width", "100px", 3, "colorPicker", "cpCancelButton", "cpCancelButtonClass", "colorPickerChange"], [2, "padding-bottom", "16px"], ["multiple", "", 3, "ngModel", "ngModelChange", "change"], ["group", "matButtonToggleGroup"], ["value", "italic"], ["value", "bold"], [3, "ngModel", "ngModelChange"], ["value", "left"], ["value", "center"], ["value", "right"], ["value", "justify"], [2, "margin-left", "10px", "padding-bottom", "20px"], ["type", "button", "matTooltip", "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0444\u043E\u0440\u043C\u0430\u0442", "mat-fab", "", "color", "grey", 3, "click"], i18n_5, [3, "value"], [2, "text-align", "center", "margin-top", "1vh", "padding-bottom", "1rem"], ["fxLayoutAlign", "center", "fxLayout", "column", 2, "margin", "2vh"], ["type", "button", "mat-raised-button", "", "color", "grey", 1, "menu-form__submit", 2, "margin-top", "15px", 3, "disabled", "click"], i18n_7, ["matInput", "", "cdkTextareaAutosize", "", 3, "ngModel", "value", "ngStyle", "ngModelChange", "select"], ["autosize", "cdkTextareaAutosize"], ["fxLayout", "column", 1, "row", "mt-3", "protected", 2, "padding-bottom", "10rem"], ["fxLayoutAlign", "center", 2, "padding", "1rem"], [2, "width", "50vw"], ["matInput", "", "placeholder", "\u041F\u0440\u0438\u043C\u0435\u0440: gl", 3, "keyup"], ["input", ""], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["subscribersSort", "matSort"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["showFirstLastButtons", "", 1, "mat-elevation-z2", 3, "pageSizeOptions"], ["subscribersPaginator", ""], [3, "matColumnDef"], ["mat-header-cell", "", "mat-sort-header", "", 3, "ngStyle", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "ngStyle", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", "", 3, "ngStyle"], [4, "ngIf"], [3, "checked", "change"], ["mat-cell", "", 3, "ngStyle"], [3, "checked", "click", "change"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]];
    },
    template: function AdminNewsletterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-form-field", 3)(4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\u0414\u0430\u0442\u044B \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-date-range-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "input", 5)(8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "\u041C\u0435\u0441\u044F\u0446/\u0414\u0435\u043D\u044C/\u0413\u043E\u0434 \u2013 \u041C\u0435\u0441\u044F\u0446/\u0414\u0435\u043D\u044C/\u0413\u043E\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "mat-datepicker-toggle", 7)(12, "mat-date-range-picker", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AdminNewsletterComponent_Template_button_click_14_listener() {
          return ctx.sendNewsletter();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](15, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, AdminNewsletterComponent_div_16_Template, 43, 13, "div", 11)(17, AdminNewsletterComponent_div_17_Template, 13, 11, "div", 12)(18, AdminNewsletterComponent_div_18_Template, 19, 6, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.newsletterDates)("rangePicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.newsletter);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.newsletter);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.subscribersDataSource);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__.DefaultStyleDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatFabButton, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__.MatButtonToggle, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__.MatCheckbox, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__.MatDateRangePicker, _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__.MatSuffix, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_26__.CdkTextareaAutosize, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__.MatPaginator, _angular_material_select__WEBPACK_IMPORTED_MODULE_28__.MatSelect, _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatNoDataRow, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_30__.MatTooltip, ngx_color_picker__WEBPACK_IMPORTED_MODULE_31__.ColorPickerDirective, _angular_common__WEBPACK_IMPORTED_MODULE_16__.KeyValuePipe, _pipes_stringGetNumbersPipe__WEBPACK_IMPORTED_MODULE_5__.StringGetNumbersPipe],
    styles: [".dropzone[_ngcontent-%COMP%] {\n  height: 70px;\n  width: 100px;\n  padding: 2rem;\n  border: dashed 4px #979797;\n  display: inline-table;\n  margin-right: 20px;\n}\n\nmat-grid-tile[_ngcontent-%COMP%] {\n  background: lightblue;\n}\n\n.viewport[_ngcontent-%COMP%] {\n  height: 30vh;\n  width: 70vw;\n  margin-left: 5vw;\n  margin-right: 5vw;\n  border: 10px solid #e9e7e9;\n}\n\n.font-selected-value[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}\n\n.font-button-pressed[_ngcontent-%COMP%] {\n  background-color: lightgrey;\n}\n\n.mat-button-toggle-group[_ngcontent-%COMP%] {\n  border: #825fdd solid !important;\n}\n\n.mat-button-toggle[_ngcontent-%COMP%] {\n  background-color: white !important;\n  color: #825fdd !important;\n}\n\n.mat-button-toggle-checked[_ngcontent-%COMP%] {\n  background-color: #825fdd !important;\n  color: #eff4ef !important;\n}\n\n.stroke-text[_ngcontent-%COMP%] {\n  stroke: 2px white;\n  color: black;\n}\n\n.mat-divider[_ngcontent-%COMP%] {\n  display: block;\n  --mat-divider-width: 5px;\n  --mat-divider-color: darkblue;\n  height: 150px;\n}\n\n.box[_ngcontent-%COMP%] {\n  display: flex;\n  width: 70%;\n  align-self: center;\n  text-align: center;\n  margin: 50px;\n}\n\n.text-item[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 20px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tbmV3c2xldHRlci1lbnRpdHkvYWRtaW4tbmV3c2xldHRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7QUFDRjs7QUFDQTtFQUNFLGtDQUFBO0VBQ0EseUJBQUE7QUFFRjs7QUFBQTtFQUNFLG9DQUFBO0VBQ0EseUJBQUE7QUFHRjs7QUFBQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQUdGOztBQURBO0VBQ0UsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0FBSUY7O0FBREE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBSUY7O0FBREE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFJRiIsInNvdXJjZXNDb250ZW50IjpbIi5kcm9wem9uZSB7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBwYWRkaW5nOjJyZW07XHJcbiAgYm9yZGVyOmRhc2hlZCA0cHggIzk3OTc5NztcclxuICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5tYXQtZ3JpZC10aWxlIHtcclxuICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XHJcbn1cclxuXHJcbi52aWV3cG9ydCB7XHJcbiAgaGVpZ2h0OiAzMHZoO1xyXG4gIHdpZHRoOiA3MHZ3O1xyXG4gIG1hcmdpbi1sZWZ0OiA1dnc7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1dnc7ICBcclxuICBib3JkZXI6IDEwcHggc29saWQgI2U5ZTdlOTtcclxufVxyXG5cclxuLmZvbnQtc2VsZWN0ZWQtdmFsdWUge1xyXG4gIG1hcmdpbjogMTVweCAwO1xyXG59XHJcblxyXG4uZm9udC1idXR0b24tcHJlc3NlZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7IC8vcmdiKDUyLCAxMDIsIDEzOCk7XHJcbn1cclxuXHJcbi5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cHtcclxuICBib3JkZXI6ICM4MjVmZGQgc29saWQgIWltcG9ydGFudDtcclxufVxyXG4ubWF0LWJ1dHRvbi10b2dnbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICM4MjVmZGQgIWltcG9ydGFudDsgIFxyXG59XHJcbi5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODI1ZmRkICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNlZmY0ZWYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN0cm9rZS10ZXh0e1xyXG4gIHN0cm9rZToycHggd2hpdGU7XHJcbiAgY29sb3I6YmxhY2s7XHJcbn1cclxuLm1hdC1kaXZpZGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAtLW1hdC1kaXZpZGVyLXdpZHRoOiA1cHg7XHJcbiAgLS1tYXQtZGl2aWRlci1jb2xvcjogZGFya2JsdWU7XHJcbiAgaGVpZ2h0OiAxNTBweDsgIFxyXG59XHJcblxyXG4uYm94e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogNTBweDtcclxufVxyXG5cclxuLnRleHQtaXRlbXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3922:
/*!************************************************************************************!*\
  !*** ./src/app/pages/admin/admin-sorting-entity/admin-sorting-entity.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminSortingEntityComponent: () => (/* binding */ AdminSortingEntityComponent)
/* harmony export */ });
/* harmony import */ var E_EVA_EZ_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1650);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 5267);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7792);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/animations */ 2501);
/* harmony import */ var _models_page_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/page.model */ 5783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var _services_masterwork_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/masterwork.service */ 568);
/* harmony import */ var _services_favourite_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/favourite.service */ 7266);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5356);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/extended */ 7520);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slider */ 549);





















function AdminSortingEntityComponent_div_6_div_1_mat_option_6_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 24);
  }
}
function AdminSortingEntityComponent_div_6_div_1_mat_option_6_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 25);
  }
}
function AdminSortingEntityComponent_div_6_div_1_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminSortingEntityComponent_div_6_div_1_mat_option_6_Template_mat_option_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const submenu_r5 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.onSubmenuSelected(submenu_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AdminSortingEntityComponent_div_6_div_1_mat_option_6_img_1_Template, 1, 0, "img", 22)(2, AdminSortingEntityComponent_div_6_div_1_mat_option_6_img_2_Template, 1, 0, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const submenu_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", submenu_r5.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !submenu_r5.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", submenu_r5.name, " ");
  }
}
function AdminSortingEntityComponent_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "form")(2, "mat-form-field", 19)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-select");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, AdminSortingEntityComponent_div_6_div_1_mat_option_6_Template, 4, 3, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", item_r3.subMenuItems);
  }
}
function AdminSortingEntityComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AdminSortingEntityComponent_div_6_div_1_Template, 7, 2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.menu);
  }
}
const _c4 = (a0, a1) => ({
  "max-width": a0,
  "max-height": a1
});
function AdminSortingEntityComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cdkDropListEntered", function AdminSortingEntityComponent_div_19_Template_div_cdkDropListEntered_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.onDropListEntered($event));
    })("cdkDropListDropped", function AdminSortingEntityComponent_div_19_Template_div_cdkDropListDropped_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r13.onDropListDropped());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 26)(2, "mat-card", 27)(3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", "data:Image/*;base64," + item_r10.pictureImage, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](4, _c4, ctx_r1.picWidth, ctx_r1.picHeight));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", "assets/images/favourite.png", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getFavouriteCount(item_r10.uid));
  }
}
const _c5 = (a0, a1) => ({
  "--box-width": a0,
  "--box-height": a1
});
class AdminSortingEntityComponent {
  constructor(spinner, masterworkService, favouriteService) {
    this.spinner = spinner;
    this.masterworkService = masterworkService;
    this.favouriteService = favouriteService;
    this.boxWidth = '100px';
    this.boxHeight = '100px';
    this.picWidth = "95px";
    this.picHeight = "95px";
    this.curFiles = {
      items: []
    };
    this.change = false;
  }
  ngOnInit() {
    this.change = false;
    const favourites$ = this.favouriteService.getFavouriteCount().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.shareReplay)(1));
    favourites$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(result => {
      this.favourites = result;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)(() => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)([]);
    })).subscribe();
  }
  ngOnChanges(changes) {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here. 
    this.currentSubmenu = null;
  }
  ngAfterViewInit() {
    const placeholderElement = this.placeholder.element.nativeElement;
    placeholderElement.style.display = 'none';
    placeholderElement.parentNode.removeChild(placeholderElement);
  }
  onSortingSubmit() {
    if (this.change && this.updatedArts.length > 0) {
      this.spinner.show();
      if (this.currentSubmenu === null) {
        for (let i = 0; i < this.updatedArts.length; i++) {
          this.updatedArts[i].position = this.updatedArts.length - i;
        }
      } else {
        for (let i = 0; i < this.updatedArts.length; i++) {
          this.updatedArts[i].subMenuUid = this.currentSubmenu.uid;
          this.updatedArts[i].subMenuPosition = this.updatedArts.length - i;
        }
      }
      this.curFiles.items = this.updatedArts.map(x => {
        return {
          uid: x.uid,
          text: x.text,
          date: x.date,
          description: x.description,
          position: x.position,
          isActive: x.isActive,
          delete: x.delete,
          subMenuUid: x.subMenuUid,
          subMenuPosition: x.subMenuPosition
        };
      });
      this.masterworkService.updateMasterworks(this.curFiles).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)(() => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(false);
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(result => {
        if (result.isSucceed === true) {
          this.getArts();
        }
      })).subscribe();
    }
    this.change = false;
  }
  getArts() {
    var _this = this;
    return (0,E_EVA_EZ_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let paged = {
        page: new _models_page_model__WEBPACK_IMPORTED_MODULE_1__.Page()
      };
      const files$ = (yield _this.masterworkService.getMasterworksPaged(paged)).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.shareReplay)(1));
      files$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.tap)(arts => {
        _this.arts = arts.filter(x => !x.dateDeleted);
        _this.updatedArts = arts.filter(x => !x.dateDeleted);
        _this.currentSubmenu = null;
        _this.spinner.hide();
      }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)(() => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)([]);
      })).subscribe();
    })();
  }
  onSubmenuSelected(submenu) {
    this.currentSubmenu = submenu;
    if (submenu !== null) {
      this.updatedArts = this.arts.filter(x => x.subMenuUid === submenu.uid);
      this.updatedArts.sort((a, b) => a.subMenuPosition < b.subMenuPosition ? 1 : -1);
    } else {
      this.updatedArts = this.arts.sort((a, b) => a.position < b.position ? 1 : -1);
    }
  }
  resetMenu() {
    this.currentSubmenu = null;
    this.updatedArts = this.arts;
  }
  onDropListDropped() {
    if (!this.target) {
      return;
    }
    const placeholderElement = this.placeholder.element.nativeElement;
    const placeholderParentElement = placeholderElement.parentElement;
    placeholderElement.style.display = 'none';
    placeholderParentElement.removeChild(placeholderElement);
    placeholderParentElement.appendChild(placeholderElement);
    placeholderParentElement.insertBefore(this.source.element.nativeElement, placeholderParentElement.children[this.sourceIndex]);
    if (this.placeholder._dropListRef.isDragging()) {
      this.placeholder._dropListRef.exit(this.dragRef);
    }
    this.target = null;
    this.source = null;
    this.dragRef = null;
    if (this.sourceIndex !== this.targetIndex) {
      (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__.moveItemInArray)(this.updatedArts, this.sourceIndex, this.targetIndex);
      this.change = true;
    }
  }
  onDropListEntered({
    item,
    container
  }) {
    if (container == this.placeholder) {
      return;
    }
    const placeholderElement = this.placeholder.element.nativeElement;
    const sourceElement = item.dropContainer.element.nativeElement;
    const dropElement = container.element.nativeElement;
    const dragIndex = Array.prototype.indexOf.call(dropElement.parentElement.children, this.source ? placeholderElement : sourceElement);
    const dropIndex = Array.prototype.indexOf.call(dropElement.parentElement.children, dropElement);
    if (!this.source) {
      this.sourceIndex = dragIndex;
      this.source = item.dropContainer;
      placeholderElement.style.width = this.boxWidth;
      placeholderElement.style.height = this.boxHeight;
      sourceElement.parentElement.removeChild(sourceElement);
    }
    this.targetIndex = dropIndex;
    this.target = container;
    this.dragRef = item._dragRef;
    placeholderElement.style.display = '';
    dropElement.parentElement.insertBefore(placeholderElement, dropIndex > dragIndex ? dropElement.nextSibling : dropElement);
    this.placeholder._dropListRef.enter(item._dragRef, item.element.nativeElement.offsetLeft, item.element.nativeElement.offsetTop);
  }
  formatLabel(value) {
    this.boxWidth = `${value}px`;
    this.boxHeight = `${value}px`;
    this.picWidth = `${value - 5}px`;
    this.picHeight = `${value - 5}px`;
    return `${value}`;
  }
  getFavouriteCount(uid) {
    const item = this.favourites?.find(x => x.artUid === uid);
    return item === undefined || item === null ? 0 : item.count;
  }
  objectsEqual(item1, item2) {
    return JSON.stringify(item1) !== JSON.stringify(item2);
  }
  static #_ = this.ɵfac = function AdminSortingEntityComponent_Factory(t) {
    return new (t || AdminSortingEntityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_masterwork_service__WEBPACK_IMPORTED_MODULE_2__.MasterworkService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_favourite_service__WEBPACK_IMPORTED_MODULE_3__.FavouriteService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: AdminSortingEntityComponent,
    selectors: [["app-admin-sorting-entity"]],
    viewQuery: function AdminSortingEntityComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__.CdkDropList, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.placeholder = _t.first);
      }
    },
    inputs: {
      menu: "menu",
      arts: "arts",
      updatedArts: "updatedArts",
      currentSubmenu: "currentSubmenu"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
    decls: 20,
    vars: 9,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_3285310967095742971$$SRC_APP_PAGES_ADMIN_ADMIN_SORTING_ENTITY_ADMIN_SORTING_ENTITY_COMPONENT_TS_1 = goog.getMsg(" \u0411\u0435\u0437 \u043C\u0435\u043D\u044E ");
        i18n_0 = MSG_EXTERNAL_3285310967095742971$$SRC_APP_PAGES_ADMIN_ADMIN_SORTING_ENTITY_ADMIN_SORTING_ENTITY_COMPONENT_TS_1;
      } else {
        i18n_0 = $localize` Без меню `;
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_2504581474466771325$$SRC_APP_PAGES_ADMIN_ADMIN_SORTING_ENTITY_ADMIN_SORTING_ENTITY_COMPONENT_TS_3 = goog.getMsg(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ");
        i18n_2 = MSG_EXTERNAL_2504581474466771325$$SRC_APP_PAGES_ADMIN_ADMIN_SORTING_ENTITY_ADMIN_SORTING_ENTITY_COMPONENT_TS_3;
      } else {
        i18n_2 = $localize` Сохранить `;
      }
      return [["type", "square-loader"], ["autosize", ""], ["fxFlex", "", "mode", "side", "opened", "", 1, "menu-list"], ["fxLayout", "column", "fxLayoutAlign", "center center"], ["type", "button", "mat-raised-button", "", 1, "menu-form__submit", "mat-elevation-z10", 2, "width", "150px", 3, "click"], i18n_0, [4, "ngIf"], [2, "padding-bottom", "20px"], ["type", "button", "mat-raised-button", "", 1, "menu-form__submit", "mat-elevation-z10", 2, "width", "150px", 3, "disabled", "click"], i18n_2, [2, "padding", "10px"], ["fxLayout", "row", 1, "sticky-top", 2, "text-align", "left", "margin", "20px"], ["min", "100", "max", "500", "step", "10", "showTickMarks", "", "discrete", "", 3, "displayWith"], ["matSliderThumb", ""], [1, "protected", 2, "margin-left", "20px"], ["cdkDropListGroup", "", 1, "arts-container", "protected", 3, "ngStyle"], ["cdkDropList", "", 3, "cdkDropListEntered", "cdkDropListDropped"], ["cdkDropList", "", 3, "cdkDropListEntered", "cdkDropListDropped", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["appearance", "fill", 1, "mat-menu-item"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], ["width", "24", "src", "assets/images/eyeOpen.png", 4, "ngIf"], ["width", "24", "src", "assets/images/eyeClose.png", 4, "ngIf"], ["width", "24", "src", "assets/images/eyeOpen.png"], ["width", "24", "src", "assets/images/eyeClose.png"], ["cdkDrag", ""], ["layout", "column", 1, "item-box", "mat-elevation-z10"], ["fxLayoutAlign", "center center"], [3, "src", "ngStyle"], ["fxFlex", ""], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["width", "34", "height", "34", 3, "src"], ["height", "34", 2, "padding-left", "5px", "font-size", "20px", "font-weight", "bold"]];
    },
    template: function AdminSortingEntityComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-drawer-container", 1)(2, "mat-drawer", 2)(3, "div", 3)(4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminSortingEntityComponent_Template_button_click_4_listener() {
          return ctx.resetMenu();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, AdminSortingEntityComponent_div_6_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AdminSortingEntityComponent_Template_button_click_8_listener() {
          return ctx.onSortingSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](9, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-drawer-content", 10)(11, "div", 11)(12, "mat-slider", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-label", 14)(15, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 15)(18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cdkDropListEntered", function AdminSortingEntityComponent_Template_div_cdkDropListEntered_18_listener($event) {
          return ctx.onDropListEntered($event);
        })("cdkDropListDropped", function AdminSortingEntityComponent_Template_div_cdkDropListDropped_18_listener() {
          return ctx.onDropListDropped();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, AdminSortingEntityComponent_div_19_Template, 10, 7, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        let tmp_3_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.menu);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.change);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("displayWith", ctx.formatLabel.bind(ctx));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((tmp_3_0 = ctx.currentSubmenu == null ? null : ctx.currentSubmenu.name) !== null && tmp_3_0 !== undefined ? tmp_3_0 : "\u0411\u0435\u0437 \u043C\u0435\u043D\u044E");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](6, _c5, ctx.boxWidth, ctx.boxHeight));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.updatedArts);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgForm, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__.DefaultStyleDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCard, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelect, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__.MatDrawerContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__.MatDrawerContent, _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__.MatSlider, _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__.MatSliderThumb, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__.CdkDropList, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__.CdkDropListGroup, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__.CdkDrag, ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerComponent],
    styles: [".menu-list[_ngcontent-%COMP%] {\n  border: solid 1px #ccc;\n  height: 100%;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: flex;\n  padding: 10px;\n}\n\n.mat-menu-item[_ngcontent-%COMP%] {\n  width: 280px;\n  min-width: 150px;\n}\n\n.arts-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  padding-bottom: 9rem;\n}\n\n.item-box[_ngcontent-%COMP%] {\n  width: var(--box-width);\n  height: var(--box-height);\n  padding: 5px;\n  border: 1px solid rgb(52, 102, 138);\n  height: 100%;\n  cursor: grab;\n  align-items: left;\n  background: #fff;\n  border-radius: 4px;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.item-box[_ngcontent-%COMP%]:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  opacity: 0.6;\n}\n\n.cdk-drop-list[_ngcontent-%COMP%] {\n  display: flex;\n  padding-right: 10px;\n  padding-bottom: 10px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.cdk-drop-list-dragging[_ngcontent-%COMP%] {\n  cursor: grabbing !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvYWRtaW4vYWRtaW4tc29ydGluZy1lbnRpdHkvYWRtaW4tc29ydGluZy1lbnRpdHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsdURBQUE7RUFDQSwrR0FBQTtBQUNGOztBQUdBO0VBQ0UscUhBQUE7RUFFQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQURGOztBQUlBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFIQUFBO0FBREY7O0FBS0E7RUFDRSxZQUFBO0FBRkY7O0FBS0E7RUFDRSxzREFBQTtBQUZGOztBQUtBO0VBQ0UsMkJBQUE7QUFGRiIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LWxpc3Qge1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLm1hdC1tZW51LWl0ZW17XHJcbiAgd2lkdGg6IDI4MHB4O1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi5hcnRzLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgcGFkZGluZy1ib3R0b206IDlyZW07XHJcbn1cclxuXHJcbi5pdGVtLWJveCB7XHJcbiAgd2lkdGg6IHZhcigtLWJveC13aWR0aCk7XHJcbiAgaGVpZ2h0OiB2YXIoLS1ib3gtaGVpZ2h0KTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDUyLCAxMDIsIDEzOCk7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGN1cnNvcjogZ3JhYjtcclxuICBhbGlnbi1pdGVtczogbGVmdDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLml0ZW0tYm94OmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICBvcGFjaXR5OiAwLjY7XHJcbn1cclxuXHJcbi5jZGstZHJvcC1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wcmV2aWV3IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gIG9wYWNpdHk6IDAuMztcclxufVxyXG5cclxuLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG4uY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyB7XHJcbiAgY3Vyc29yOiBncmFiYmluZyAhaW1wb3J0YW50O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.trigger)('detailExpand', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.style)({
        height: '0px',
        minHeight: '0'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.style)({
        height: '*'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.transition)('expanded <=> collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_23__.animate)('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])]
    }
  });
}

/***/ }),

/***/ 7763:
/*!****************************************************************!*\
  !*** ./src/app/pages/common-entity/common-entity.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonEntityComponent: () => (/* binding */ CommonEntityComponent)
/* harmony export */ });
/* harmony import */ var E_EVA_EZ_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 1650);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 3738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 5267);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 1891);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var _dialogref_art_item_art_item_dialogref_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dialogref/art-item/art-item-dialogref.component */ 3577);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/animations */ 2501);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 3839);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var _models_page_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/page.model */ 5783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_masterwork_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/masterwork.service */ 568);
/* harmony import */ var _services_favourite_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/favourite.service */ 7266);
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/settings.service */ 9752);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var _services_tempCacheService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/tempCacheService */ 1271);
/* harmony import */ var _modules_account_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/account/account.service */ 6992);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5356);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout/extended */ 7520);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/card */ 8497);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tooltip */ 702);




















function CommonEntityComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 5)(3, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 1, ctx_r0.currentSubmenuName$));
  }
}
function CommonEntityComponent_div_3_div_1_div_11_img_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CommonEntityComponent_div_3_div_1_div_11_img_1_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r9);
      const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r7.updateFavourite(item_r3, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function CommonEntityComponent_div_3_div_1_div_11_img_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function CommonEntityComponent_div_3_div_1_div_11_img_2_Template_img_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r10.updateFavourite(item_r3, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function CommonEntityComponent_div_3_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CommonEntityComponent_div_3_div_1_div_11_img_1_Template, 1, 0, "img", 16)(2, CommonEntityComponent_div_3_div_1_div_11_img_2_Template, 1, 0, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r3.favourite);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !item_r3.favourite);
  }
}
const _c0 = () => ({
  "background-color": "white"
});
const _c1 = (a0, a1, a2, a3, a4, a5, a6) => ({
  "font-size": a0,
  "fontFamily": a1,
  "color": a2,
  "text-align": a3,
  "font-style": a4,
  "font-weight": a5,
  "text-decoration": a6
});
const _c2 = (a0, a1, a2, a3, a4, a5, a6) => ({
  "font-size": a0,
  "fontFamily": a1,
  "color": a2,
  "text-align": a3,
  "font-style": a4,
  "font-weight": a5,
  "text-decoration": a6,
  "padding": "0.3rem"
});
function CommonEntityComponent_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 9)(1, "mat-card", 10)(2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 12)(5, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("dblclick", function CommonEntityComponent_div_3_div_1_Template_img_dblclick_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15);
      const item_r3 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r14.openArt(item_r3.pictureImage));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, CommonEntityComponent_div_3_div_1_div_11_Template, 3, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    let tmp_4_0;
    let tmp_6_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](11, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction7"](12, _c1, ctx_r2.currentItemFontSize(item_r3.uid, true, false, false), ctx_r2.currentItemFont(item_r3.uid, true, false, false), ctx_r2.currentItemColor(item_r3.uid, true, false, false), ctx_r2.currentItemAlign(item_r3.uid, true, false, false), ctx_r2.currentItemStyle(item_r3.uid, true, false, false), ctx_r2.currentItemWeight(item_r3.uid, true, false, false), ctx_r2.currentItemStroke(item_r3.uid, true, false, false)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r3.text, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", "data:Image/*;base64," + item_r3.pictureImage, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction7"](20, _c1, ctx_r2.currentItemFontSize(item_r3.uid, false, true, false), (tmp_4_0 = ctx_r2.currentItemFont(item_r3.uid, false, true, false)) == null ? null : tmp_4_0.replace("-", " "), ctx_r2.currentItemColor(item_r3.uid, false, true, false), ctx_r2.currentItemAlign(item_r3.uid, false, true, false), ctx_r2.currentItemStyle(item_r3.uid, false, true, false), ctx_r2.currentItemWeight(item_r3.uid, false, true, false), ctx_r2.currentItemStroke(item_r3.uid, false, true, false)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r3.date, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction7"](28, _c2, ctx_r2.currentItemFontSize(item_r3.uid, false, false, true), (tmp_6_0 = ctx_r2.currentItemFont(item_r3.uid, false, false, true)) == null ? null : tmp_6_0.replace("-", " "), ctx_r2.currentItemColor(item_r3.uid, false, false, true), ctx_r2.currentItemAlign(item_r3.uid, false, false, true), ctx_r2.currentItemStyle(item_r3.uid, false, false, true), ctx_r2.currentItemWeight(item_r3.uid, false, false, true), ctx_r2.currentItemStroke(item_r3.uid, false, false, true)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r3.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 9, ctx_r2.isSignedIn$));
  }
}
function CommonEntityComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CommonEntityComponent_div_3_div_1_Template, 13, 36, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 1, ctx_r1.arts$));
  }
}
class CommonEntityComponent {
  constructor(masterworkService, favouriteService, settingsService, dialog, spinner, tempCacheService, accountService) {
    this.masterworkService = masterworkService;
    this.favouriteService = favouriteService;
    this.settingsService = settingsService;
    this.dialog = dialog;
    this.spinner = spinner;
    this.tempCacheService = tempCacheService;
    this.accountService = accountService;
    this.favouritesToAdd = [];
    this.favouritesToRemove = [];
    this.isSignedIn$ = this.accountService.isSignedIn$;
  }
  ngOnInit() {
    this.spinner.show();
    this.getArts();
    this.getFormatting();
  }
  getFormatting() {
    const formats$ = this.settingsService.getTextFormatting().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.shareReplay)(1));
    formats$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(formats => {
      this.textFormats = formats;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.first)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(() => {
      this.spinner.hide();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)([]);
    })).subscribe();
  }
  getArts() {
    var _this = this;
    return (0,E_EVA_EZ_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let paged = {
        page: new _models_page_model__WEBPACK_IMPORTED_MODULE_2__.Page()
      };
      _this.origArts$ = yield _this.masterworkService.getMasterworksPaged(paged);
      const currentSubmenu$ = _this.origArts$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(() => _this.tempCacheService.submenu$));
      _this.currentSubmenuName$ = currentSubmenu$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(submenu => submenu ? _this.getMenuFullName(submenu?.uid) : null));
      _this.curFavourites$ = _this.accountService.isSignedIn$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(signedIn => signedIn ? _this.favouriteService.getFavourites() : (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)(null)));
      _this.arts$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.combineLatest)([_this.origArts$, _this.curFavourites$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.switchMap)(([origArts, favourites]) => _this.tempCacheService.submenu$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(submenu => {
        if (!submenu) {
          return [origArts, favourites];
        }
        _this.getMenuFullName(submenu?.uid);
        return [origArts.filter(x => x.subMenuUid == submenu.uid), favourites];
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(([arts, favourites]) => {
        return arts.map(art => {
          _this.spinner.hide();
          return {
            ...art,
            favourite: !!favourites?.items.find(item => art.uid === item.artUid)
          };
        });
      }));
    })();
  }
  openArt(image) {
    const maxW = "1200px";
    const maxH = "900px";
    this.dialog.open(_dialogref_art_item_art_item_dialogref_component__WEBPACK_IMPORTED_MODULE_1__.ArtItemDialogrefComponent, {
      maxWidth: maxW,
      maxHeight: maxH,
      data: {
        image: image,
        maxW: maxW,
        maxH: maxH
      }
    });
  }
  updateFavourite(item, add) {
    if (add) {
      const index = this.favouritesToRemove.findIndex(value => value == item.uid);
      if (index != -1) this.favouritesToRemove.splice(index, 1);
      this.favouritesToAdd.push(item.uid);
      this.favouriteService.addFavourite(this.favouritesToAdd).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.first)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(() => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)(false);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(result => {
        if (result.isSucceed === true) {
          this.favouritesToAdd = [];
          item.favourite = true;
        }
      })).subscribe();
    } else {
      const index = this.favouritesToAdd.findIndex(value => value == item.uid);
      if (index != -1) this.favouritesToAdd.splice(index, 1);
      this.favouritesToRemove.push(item.uid);
      this.favouriteService.removeFavourite(this.favouritesToRemove).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.first)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.catchError)(() => {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.of)(false);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(result => {
        if (result.isSucceed === true) {
          this.favouritesToRemove = [];
          item.favourite = false;
        }
      })).subscribe();
    }
  }
  currentItemFont(itemUid, text, date, desc) {
    let x = this.textFormats?.items.find(x => x.masterworkUid === itemUid && x.isText === text && x.isDate === date && x.isDesc === desc)?.font;
    return x === undefined || x === null ? "Arbor" : x;
  }
  currentItemFontSize(itemUid, text, date, desc) {
    let x = this.textFormats?.items.find(x => x.masterworkUid === itemUid && x.isText === text && x.isDate === date && x.isDesc === desc)?.fontSize;
    return x === undefined || x === null ? "20px" : x;
  }
  currentItemColor(itemUid, text, date, desc) {
    let x = this.textFormats?.items.find(x => x.masterworkUid === itemUid && x.isText === text && x.isDate === date && x.isDesc === desc)?.color;
    return x === undefined || x === null ? "black" : x;
  }
  currentItemStyle(itemUid, text, date, desc) {
    let x = this.textFormats?.items.find(x => x.masterworkUid === itemUid && x.isText === text && x.isDate === date && x.isDesc === desc)?.style;
    return x === undefined ? null : x;
  }
  currentItemWeight(itemUid, text, date, desc) {
    let x = this.textFormats?.items.find(x => x.masterworkUid === itemUid && x.isText === text && x.isDate === date && x.isDesc === desc)?.weight;
    return x === undefined ? null : x;
  }
  currentItemAlign(itemUid, text, date, desc) {
    let x = this.textFormats?.items.find(x => x.masterworkUid === itemUid && x.isText === text && x.isDate === date && x.isDesc === desc)?.align;
    return x === undefined ? null : x;
  }
  currentItemStroke(itemUid, text, date, desc) {
    let x = this.textFormats?.items.find(x => x.masterworkUid === itemUid && x.isText === text && x.isDate === date && x.isDesc === desc)?.strokeUnderline;
    return x === undefined ? null : x;
  }
  getMenuFullName(submenuUid) {
    if (this.menu) {
      const submenuName = this.menu.find(x => x.uid == x.subMenuItems?.find(y => y.uid == submenuUid)?.menuUid)?.subMenuItems?.find(z => z.uid == submenuUid)?.name;
      const menuName = this.menu.find(x => x.uid == x.subMenuItems?.find(y => y.uid == submenuUid)?.menuUid)?.name;
      return !menuName || !submenuName ? null : `${menuName} - ${submenuName}`;
    }
    return null;
  }
  static #_ = this.ɵfac = function CommonEntityComponent_Factory(t) {
    return new (t || CommonEntityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_masterwork_service__WEBPACK_IMPORTED_MODULE_3__.MasterworkService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_favourite_service__WEBPACK_IMPORTED_MODULE_4__.FavouriteService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_settings_service__WEBPACK_IMPORTED_MODULE_5__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_18__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_tempCacheService__WEBPACK_IMPORTED_MODULE_6__.TempCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_modules_account_account_service__WEBPACK_IMPORTED_MODULE_7__.AccountService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: CommonEntityComponent,
    selectors: [["app-common-entity"]],
    inputs: {
      menu: "menu"
    },
    decls: 4,
    vars: 4,
    consts: [["type", "square-jelly-box"], ["fxLayout", "row", 4, "ngIf"], ["fxLayout", "row", "class", "wrap-files", "fxLayoutAlign", "left", 4, "ngIf"], ["fxLayout", "row"], ["fxFlex", ""], ["fxLayoutAlign", "center center", 2, "height", "30px", "border-radius", "5px", "font-weight", "bold", "color", "rgb(13, 14, 114)"], [2, "font-family", "Caveat, 'Caveat-Bold'"], ["fxLayout", "row", "fxLayoutAlign", "left", 1, "wrap-files"], ["style", "width: 320px; padding-bottom: 1rem;", 4, "ngFor", "ngForOf"], [2, "width", "320px", "padding-bottom", "1rem"], ["fxLayout", "column", 1, "arts-card", "protected", "mat-elevation-z8", 3, "ngStyle"], [3, "ngStyle"], ["matTooltip", "\u041A\u043B\u0438\u043A\u043D\u0438\u0442\u0435 \u0434\u0432\u0430\u0436\u0434\u044B, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C", "matTooltipPosition", "right", 2, "align-self", "center", "padding", "0.3rem"], [2, "max-width", "300px", "max-height", "300px", 3, "src", "dblclick"], ["fxLayoutAlign", "center", 4, "ngIf"], ["fxLayoutAlign", "center"], ["width", "40", "height", "36", "src", "assets/images/favourite.png", 3, "click", 4, "ngIf"], ["width", "40", "height", "36", "src", "assets/images/favouriteEmpty.png", 3, "click", 4, "ngIf"], ["width", "40", "height", "36", "src", "assets/images/favourite.png", 3, "click"], ["width", "40", "height", "36", "src", "assets/images/favouriteEmpty.png", 3, "click"]],
    template: function CommonEntityComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, CommonEntityComponent_div_1_Template, 7, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, CommonEntityComponent_div_3_Template, 3, 3, "div", 2);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, ctx.currentSubmenuName$));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.textFormats);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgStyle, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__.DefaultStyleDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_22__.MatCard, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__.MatTooltip, ngx_spinner__WEBPACK_IMPORTED_MODULE_18__.NgxSpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  overflow: hidden;\n  height: 100%;\n  position: sticky;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY29tbW9uLWVudGl0eS9jb21tb24tZW50aXR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7ICBcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogc3RpY2t5OyAgXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_24__.trigger)('detailExpand', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_24__.state)('collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_24__.style)({
        height: '0px',
        minHeight: '0'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_24__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_24__.style)({
        height: '*'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_24__.transition)('expanded <=> collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_24__.animate)('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])]
    }
  });
}

/***/ }),

/***/ 5177:
/*!**************************************************!*\
  !*** ./src/app/pages/footer/footer.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);


class FooterComponent {
  //bgrndUrl = "assets/images/background.jpg";
  constructor() {
    this.events = [];
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 2,
    vars: 0,
    consts: [[1, "protected", 2, "background-color", "gainsboro", "font-size", "small"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Copyright 2021-2025 \u00A9 Burik");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbar],
    styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  vertical-align: top;\n  height: 3rem;\n  overflow: hidden;\n  width: 100%;\n  position: sticky;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIGhlaWdodDogM3JlbTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7ICAgIFxyXG4gIH1cclxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 9773:
/*!**************************************************!*\
  !*** ./src/app/pages/header/header.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var E_EVA_EZ_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 1650);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 5267);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 1891);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var _modules_account_modules_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/account/modules/sign-in/sign-in.component */ 2033);
/* harmony import */ var _modules_account_modules_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/account/modules/register/register.component */ 8300);
/* harmony import */ var _dialogref_feedback_feedback_dialogref_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dialogref/feedback/feedback-dialogref.component */ 8106);
/* harmony import */ var _dialogref_aboutMe_aboutme_dialogref_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dialogref/aboutMe/aboutme-dialogref.component */ 4181);
/* harmony import */ var _models_mydetails_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/mydetails.model */ 4724);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 7401);
/* harmony import */ var _modules_account_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/account/account.service */ 6992);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5356);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);















function HeaderComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HeaderComponent_Conditional_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.onAboutMe());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "\u041E\u0431\u043E \u043C\u043D\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 7)(1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HeaderComponent_div_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r5.onLogin());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u0412\u043E\u0439\u0442\u0438 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HeaderComponent_div_5_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r7.onRegister());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function HeaderComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 7)(1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HeaderComponent_div_7_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.onFeedback());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HeaderComponent_div_7_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r10.onProfile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HeaderComponent_div_7_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r11.onLogout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "\u0412\u044B\u0439\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.profileButtonText);
  }
}
class HeaderComponent {
  constructor(dialog, accountService) {
    this.dialog = dialog;
    this.accountService = accountService;
    this.show = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
    this.profileButtonText = 'Профиль';
    this.imgPreloadUrl = "./../assets/images/palete.gif";
    this.imgUrl = "assets/images/palete.gif";
    this.isSignedIn$ = this.accountService.isSignedIn$;
  }
  ngOnInit() {
    this.isSignedIn$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.shareReplay)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.tap)(result => {
      if (result) {
        this.accountService.getProfile().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.catchError)(() => {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)([]);
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.tap)(users => {
          this.avatar = users[0]?.avatar;
        })).subscribe();
      }
    })).subscribe();
    this.getMyDetails();
  }
  getMyDetails() {
    this.accountService.getMyDetails().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.catchError)(() => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)([]);
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.tap)(res => this.details = res)).subscribe();
  }
  onProfile() {
    this.showProfile = !this.showProfile;
    if (this.showProfile) {
      this.profileButtonText = 'На главную';
      this.show.emit(true);
    } else {
      this.profileButtonText = 'Профиль';
      this.show.emit(false);
    }
  }
  onLogin() {
    this.dialog.open(_modules_account_modules_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_1__.SignInComponent, {
      data: {},
      autoFocus: true,
      width: '760px',
      height: '830px'
    }).afterClosed().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.switchMap)(result => {
      if (result) {
        if (result.signin) {
          return this.accountService.signIn(result).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.map)(data => data));
        } else if (result.forgotPswd) {
          return this.accountService.restorePassword(result).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.map)(data => !data));
        }
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(null);
    })).subscribe();
  }
  onRegister() {
    this.dialog.open(_modules_account_modules_register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent, {
      data: {},
      autoFocus: true,
      width: '760px',
      height: '830px'
    }).afterClosed().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.switchMap)(result => {
      if (result) {
        return this.accountService.register(result).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.map)(data => !data));
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(null);
    })).subscribe();
  }
  onLogout() {
    var _this = this;
    return (0,E_EVA_EZ_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.accountService.signOut();
      _this.profileButtonText = 'Профиль';
      _this.showProfile = false;
      _this.show.emit(false);
    })();
  }
  onFeedback() {
    const width = "600px";
    const height = "600px";
    this.dialog.open(_dialogref_feedback_feedback_dialogref_component__WEBPACK_IMPORTED_MODULE_3__.FeedbackDialogrefComponent, {
      width: width,
      height: height,
      data: {
        avatar: this.avatar,
        width: width,
        height: height
      }
    }).afterClosed().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_10__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_13__.switchMap)(result => {
      if (result) {
        let feedback = {
          message: result
        };
        return this.accountService.sendFeedback(feedback).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.map)(data => !data));
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.of)(null);
    })).subscribe();
  }
  onAboutMe() {
    this.getMyDetails();
    let h = this.details.aboutmeText.split("\n").length * 40;
    const width = "40vw";
    const height = h < 500 ? h + "px" : "700px";
    this.dialog.open(_dialogref_aboutMe_aboutme_dialogref_component__WEBPACK_IMPORTED_MODULE_4__.AboutMeDialogrefComponent, {
      width: width,
      height: height,
      data: {
        text: this.details.aboutmeText,
        width: width,
        height: height,
        align: this.details.aboutmeAlign,
        color: this.details.aboutmeFontColor,
        font: this.details.aboutmeFont,
        size: this.details.aboutmeFontSize,
        style: this.fontStyleText(this.details.aboutmeFontStyleWeight)[0],
        weight: this.fontStyleText(this.details.aboutmeFontStyleWeight)[1]
      }
    });
  }
  fontStyleText(value) {
    if (value === 1) return ["", _models_mydetails_model__WEBPACK_IMPORTED_MODULE_5__.fontStyleWeight[_models_mydetails_model__WEBPACK_IMPORTED_MODULE_5__.fontStyleWeight.bold]];else if (value === 2) return [_models_mydetails_model__WEBPACK_IMPORTED_MODULE_5__.fontStyleWeight[_models_mydetails_model__WEBPACK_IMPORTED_MODULE_5__.fontStyleWeight.italic], ""];else if (value === 3) return [_models_mydetails_model__WEBPACK_IMPORTED_MODULE_5__.fontStyleWeight[_models_mydetails_model__WEBPACK_IMPORTED_MODULE_5__.fontStyleWeight.italic], _models_mydetails_model__WEBPACK_IMPORTED_MODULE_5__.fontStyleWeight[_models_mydetails_model__WEBPACK_IMPORTED_MODULE_5__.fontStyleWeight.bold]];else return ["", ""];
  }
  myDeatilsExist() {
    return this.details !== null && this.details !== undefined && this.details.aboutmeText != null && this.details.aboutmeText != undefined && this.details.aboutmeText.length > 0;
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_modules_account_account_service__WEBPACK_IMPORTED_MODULE_6__.AccountService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    outputs: {
      show: "show"
    },
    decls: 9,
    vars: 8,
    consts: [[1, "protected", 2, "background-color", "gainsboro"], ["preload-src", "assets/images/palete.gif", "fxLayout", "row", 2, "margin-left", "25vw"], ["mat-raised-button", "", "buttonsNavigable", "", "style", "margin: 10px;"], ["fxFlex", ""], ["hidden", "", 3, "src", "load"], ["class", "login-button", 4, "ngIf"], ["mat-raised-button", "", "buttonsNavigable", "", 2, "margin", "10px", 3, "click"], [1, "login-button"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, HeaderComponent_Conditional_2_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("load", function HeaderComponent_Template_img_load_4_listener() {
          return ctx.imgUrl = ctx.imgPreloadUrl;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, HeaderComponent_div_5_Template, 5, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, HeaderComponent_div_7_Template, 7, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵconditional"](2, ctx.myDeatilsExist() ? 2 : -1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx.imgPreloadUrl, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 4, ctx.isSignedIn$));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 6, ctx.isSignedIn$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_19__.MatToolbar, _angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between !important;\n  vertical-align: middle;\n  height: 4rem;\n  width: 100%;\n  overflow: hidden;\n  position: sticky;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.login-button[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  align-items: end !important;\n}\n\n.mat-menu-color[_ngcontent-%COMP%] {\n  background-color: #F8F9EC;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGhlaWdodDogNHJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4ubG9naW4tYnV0dG9ue1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBlbmQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1tZW51LWNvbG9ye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGOEY5RUM7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9379:
/*!******************************************************!*\
  !*** ./src/app/pages/mainpage/mainpage.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainpageComponent: () => (/* binding */ MainpageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var _services_user_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/user.store */ 2361);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _modules_account_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/account/account.service */ 6992);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _modules_account_modules_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/account/modules/user-profile/user-profile.component */ 4038);
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidenav/sidenav.component */ 7310);
/* harmony import */ var _admin_admin_common_entity_admin_common_entity_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin/admin-common-entity/admin-common-entity.component */ 8001);
/* harmony import */ var _dragdrop_drag_directives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dragdrop/drag.directives */ 3802);










function MainpageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-user-profile", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function MainpageComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("load", function MainpageComponent_div_1_div_1_Template_img_load_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r4.delUrl = ctx_r4.delPreloadUrl);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("load", function MainpageComponent_div_1_div_1_Template_img_load_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r6.addUrl = ctx_r6.addPreloadUrl);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("load", function MainpageComponent_div_1_div_1_Template_img_load_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.del2Url = ctx_r7.del2PreloadUrl);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("load", function MainpageComponent_div_1_div_1_Template_img_load_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.eyeOpenUrl = ctx_r8.eyeOpenPreloadUrl);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("load", function MainpageComponent_div_1_div_1_Template_img_load_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r9.eyeCloseUrl = ctx_r9.eyeClosePreloadUrl);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "app-admin-common-entity", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r2.delPreloadUrl, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r2.addPreloadUrl, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r2.delP2reloadUrl, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r2.eyeOpenPreloadUrl, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r2.eyeClosePreloadUrl, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}
function MainpageComponent_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("load", function MainpageComponent_div_1_div_3_Template_img_load_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r10.transparentUrl = ctx_r10.transparentPreloadUrl);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "app-sidenav");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r3.transparentPreloadUrl, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleMapInterpolate1"]("background-image: url('", ctx_r3.transparentUrl, "');");
  }
}
function MainpageComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MainpageComponent_div_1_div_1_Template, 7, 5, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, MainpageComponent_div_1_div_3_Template, 3, 4, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, ctx_r1.isAdmin$));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 4, ctx_r1.isAdmin$));
  }
}
class MainpageComponent {
  constructor(userStore, accountService) {
    this.userStore = userStore;
    this.accountService = accountService;
    this.isSignedIn$ = this.accountService.isSignedIn$;
    this.delPreloadUrl = "./../assets/images/delete24.png";
    this.delUrl = "assets/images/delete24.png";
    this.addPreloadUrl = "./../assets/images/addButton.png";
    this.addUrl = "assets/images/addButton.png";
    this.del2PreloadUrl = "./../assets/images/deleteButton.png";
    this.del2Url = "assets/images/deleteButton.png";
    this.eyeOpenPreloadUrl = "./../assets/images/eyeOpen.png";
    this.eyeOpenUrl = "assets/images/eyeOpen.png";
    this.eyeClosePreloadUrl = "./../assets/images/eyeClose.png";
    this.eyeCloseUrl = "assets/images/eyeClose.png";
    this.transparentPreloadUrl = "./../assets/images/transparent.gif";
    this.transparentUrl = "assets/images/transparent.gif";
  }
  ngOnInit() {
    this.isAdmin$ = this.userStore.curRole$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(role => role === _services_user_store__WEBPACK_IMPORTED_MODULE_0__.UserRole.ADMIN));
  }
  static #_ = this.ɵfac = function MainpageComponent_Factory(t) {
    return new (t || MainpageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_user_store__WEBPACK_IMPORTED_MODULE_0__.UserStore), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_modules_account_account_service__WEBPACK_IMPORTED_MODULE_1__.AccountService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: MainpageComponent,
    selectors: [["app-mainpage"]],
    inputs: {
      showProfile: "showProfile"
    },
    decls: 2,
    vars: 2,
    consts: [[4, "ngIf"], ["appDragDrop", ""], ["hidden", "", 3, "src", "load"], [2, "background-color", "whitesmoke"]],
    template: function MainpageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, MainpageComponent_div_0_Template, 2, 0, "div", 0)(1, MainpageComponent_div_1_Template, 5, 6, "div", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showProfile);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.showProfile);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _modules_account_modules_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_2__.UserProfileComponent, _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__.SidenavComponent, _admin_admin_common_entity_admin_common_entity_component__WEBPACK_IMPORTED_MODULE_4__.AdminCommonEntityComponent, _dragdrop_drag_directives__WEBPACK_IMPORTED_MODULE_5__.DragDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n  display: flex;\n  width: 100%;\n  overflow: hidden;\n  position: sticky;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n[_nghost-%COMP%]     div.mat-mdc-select-panel {\n  border-radius: 4rem !important;\n  background-color: rgb(187, 48, 48) !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbWFpbnBhZ2UvbWFpbnBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBQ0o7O0FBRUU7RUFDRSw4QkFBQTtFQUNBLDZDQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgICBcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICA6aG9zdCA6Om5nLWRlZXAgIGRpdi5tYXQtbWRjLXNlbGVjdC1wYW5lbHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRyZW0gIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODcsIDQ4LCA0OCkgIWltcG9ydGFudDtcclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7310:
/*!****************************************************!*\
  !*** ./src/app/pages/sidenav/sidenav.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidenavComponent: () => (/* binding */ SidenavComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 1650);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 3738);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 5267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/layout */ 9743);
/* harmony import */ var _services_menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/menu.service */ 2042);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 8375);
/* harmony import */ var _services_tempCacheService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/tempCacheService */ 1271);
/* harmony import */ var _modules_account_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/account/account.service */ 6992);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/flex */ 5356);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ 6355);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sidenav */ 1465);
/* harmony import */ var _common_entity_common_entity_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common-entity/common-entity.component */ 7763);


















function SidenavComponent_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidenavComponent_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r1.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function SidenavComponent_div_7_div_1_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidenavComponent_div_7_div_1_mat_option_6_Template_mat_option_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const submenu_r8 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6);
      ctx_r9.onMenuSelected(submenu_r8);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r1.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const submenu_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", submenu_r8.name, " ");
  }
}
function SidenavComponent_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "form")(2, "mat-form-field", 14)(3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-select");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, SidenavComponent_div_7_div_1_mat_option_6_Template, 2, 1, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", item_r6.subMenuItems);
  }
}
function SidenavComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidenavComponent_div_7_div_1_Template, 7, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 11)(3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidenavComponent_div_7_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6);
      ctx_r11.onMenuReset();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r1.toggle());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](4, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.menu);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r2.menuChanged && !_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 2, ctx_r2.tempCacheService.submenu$));
  }
}
class SidenavComponent {
  constructor(changeDetectorRef, media, menuService, spinner, tempCacheService, accountService) {
    this.menuService = menuService;
    this.spinner = spinner;
    this.tempCacheService = tempCacheService;
    this.accountService = accountService;
    this.events = [];
    this.isSignedIn$ = this.accountService.isSignedIn$;
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }
  ngOnInit() {
    this.spinner.show();
    const menu$ = this.menuService.getMenu().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => {
      this.spinner.hide();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)([]);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.shareReplay)(1));
    menu$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.tap)(menu => {
      this.menu = menu;
      this.spinner.hide();
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.first)()).subscribe();
  }
  ngOnDestroy() {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }
  onMenuSelected(item) {
    this.menuChanged = true;
    this.currentSubmenu = item;
    this.tempCacheService.changeSubmenuSelected(item);
  }
  onMenuReset() {
    this.menuChanged = false;
    this.currentSubmenu = null;
    this.tempCacheService.changeSubmenuSelected(null);
  }
  static #_ = this.ɵfac = function SidenavComponent_Factory(t) {
    return new (t || SidenavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__.MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_tempCacheService__WEBPACK_IMPORTED_MODULE_1__.TempCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_modules_account_account_service__WEBPACK_IMPORTED_MODULE_2__.AccountService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: SidenavComponent,
    selectors: [["app-sidenav"]],
    inputs: {
      showProfile: "showProfile"
    },
    decls: 8,
    vars: 4,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_5579346316020377345$$SRC_APP_PAGES_SIDENAV_SIDENAV_COMPONENT_TS__1 = goog.getMsg(" \u0413\u043B\u0430\u0432\u043D\u043E\u0435 \u043C\u0435\u043D\u044E ");
        i18n_0 = MSG_EXTERNAL_5579346316020377345$$SRC_APP_PAGES_SIDENAV_SIDENAV_COMPONENT_TS__1;
      } else {
        i18n_0 = $localize` Главное меню `;
      }
      return [["fxLayout", "column", 1, "sidenav-container"], ["mat-icon-button", "", 3, "click", 4, "ngIf"], [1, "sidenav-container", "background-image"], [2, "width", "100%", "padding-left", "1.5rem", "padding-right", "1,5rem"], [3, "menu"], [1, "background-image", 2, "padding-left", "1rem", "padding-right", "1rem", 3, "mode", "opened", "closed"], ["snav", ""], ["class", "protected", 4, "ngIf"], ["mat-icon-button", "", 3, "click"], [1, "protected"], [4, "ngFor", "ngForOf"], [2, "justify-self", "center"], ["type", "button", "mat-raised-button", "", 1, "menu-form__submit", "mat-elevation-z10", "mmm", 2, "width", "160px", "border-radius", "3rem", "justify-self", "center", 3, "disabled", "click"], i18n_0, ["appearance", "fill"], ["class", "mat-menu-item2", 3, "click", 4, "ngFor", "ngForOf"], [1, "mat-menu-item2", 3, "click"]];
    },
    template: function SidenavComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidenavComponent_button_1_Template, 3, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-sidenav-container", 2)(3, "mat-sidenav-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "app-common-entity", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-sidenav", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("opened", function SidenavComponent_Template_mat_sidenav_opened_5_listener() {
          return ctx.events.push("open!");
        })("closed", function SidenavComponent_Template_mat_sidenav_closed_5_listener() {
          return ctx.events.push("close!");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, SidenavComponent_div_7_Template, 6, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.showProfile);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("menu", ctx.menu);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mode", ctx.mobileQuery.matches ? "push" : "side");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.menu);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgForm, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__.DefaultLayoutDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_19__.MatSelect, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__.MatSidenavContent, _common_entity_common_entity_component__WEBPACK_IMPORTED_MODULE_3__.CommonEntityComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe],
    styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  overflow: hidden;\n  height: 100%;\n  position: fixed;\n  padding-bottom: 4rem;\n}\n\n.sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n}\n\n.login-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .login-button[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n  .mdc-text-field--filled {\n  border-radius: 4rem !important;\n  background-color: rgb(222, 246, 250) !important;\n}\n\n  .mat-mdc-select-panel {\n  border-radius: 12rem !important;\n  background-color: transparent !important;\n}\n\n.mat-menu-item2[_ngcontent-%COMP%] {\n  border-radius: 4rem !important;\n  background-color: rgb(222, 246, 250) !important;\n}\n\n  .mat-dialog-actions .mmm {\n  justify-content: center;\n}\n\n.background-image[_ngcontent-%COMP%] {\n  background-image: \"assets/images/transparent.jpg\";\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLDhCQUFBO0VBQ0EsK0NBQUE7QUFDRjs7QUFDQTtFQUNFLCtCQUFBO0VBQ0Esd0NBQUE7QUFFRjs7QUFBQTtFQUNFLDhCQUFBO0VBQ0EsK0NBQUE7QUFHRjs7QUFEQTtFQUNFLHVCQUFBO0FBSUY7O0FBREE7RUFDRSxpREFBQTtFQUNBLDZCQUFBO0FBSUYiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHBhZGRpbmctYm90dG9tOiA0cmVtO1xyXG59XHJcblxyXG4uc2lkZW5hdi1jb250YWluZXIgeyAgICAgICAgICAgICAgICAgICAgXHJcbiAgaGVpZ2h0OiAxMDAlOyBcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubG9naW4tYnV0dG9uIGJ1dHRvbixcclxuLmxvZ2luLWJ1dHRvbiBhIHtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuOjpuZy1kZWVwICAubWRjLXRleHQtZmllbGQtLWZpbGxlZCB7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDRyZW0gIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIyLCAyNDYsIDI1MCkgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgIC5tYXQtbWRjLXNlbGVjdC1wYW5lbHtcclxuICBib3JkZXItcmFkaXVzOiAxMnJlbSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1hdC1tZW51LWl0ZW0yIHsgIFxyXG4gIGJvcmRlci1yYWRpdXM6IDRyZW0gIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIyLCAyNDYsIDI1MCkgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1kaWFsb2ctYWN0aW9ucyAubW1te1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZC1pbWFnZXtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAnYXNzZXRzL2ltYWdlcy90cmFuc3BhcmVudC5qcGcnO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2416:
/*!****************************************!*\
  !*** ./src/app/pipes/fileSizePipe .ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileSizePipe: () => (/* binding */ FileSizePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class FileSizePipe {
  transform(bytes = 0, decimals = 2) {
    if (bytes === 0) {
      return '0';
    }
    const k = 1024,
      dm = decimals || 2,
      sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
      i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
  static #_ = this.ɵfac = function FileSizePipe_Factory(t) {
    return new (t || FileSizePipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "fileSize",
    type: FileSizePipe,
    pure: true
  });
}

/***/ }),

/***/ 2412:
/*!***********************************************!*\
  !*** ./src/app/pipes/stringGetNumbersPipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StringGetNumbersPipe: () => (/* binding */ StringGetNumbersPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class StringGetNumbersPipe {
  transform(input) {
    const REGEX = /\d+/g;
    this.arrOfNumber = input.match(REGEX);
    return this.arrOfNumber.toString();
  }
  static #_ = this.ɵfac = function StringGetNumbersPipe_Factory(t) {
    return new (t || StringGetNumbersPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "stringGetNumbers",
    type: StringGetNumbersPipe,
    pure: true
  });
}

/***/ }),

/***/ 4432:
/*!*************************************!*\
  !*** ./src/app/pipes/users.pipi.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersPipe: () => (/* binding */ UsersPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class UsersPipe {
  transform(values, filter) {
    if (!filter || filter.length === 0) {
      return values;
    }
    if (values.length === 0) {
      return values;
    }
    return values.filter(value => {
      const nameFound = value.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
      const emailFound = value.email.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
      if (nameFound || emailFound) {
        return value;
      }
    });
  }
  static #_ = this.ɵfac = function UsersPipe_Factory(t) {
    return new (t || UsersPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "users",
    type: UsersPipe,
    pure: true
  });
}

/***/ }),

/***/ 9045:
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiService: () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 7178);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/fp */ 4641);
/* harmony import */ var lodash_fp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_fp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var _core_interceptors_retry_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/interceptors/retry.interceptor */ 9745);
/* harmony import */ var _models_api_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/api.model */ 7230);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);









class ApiService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.aPIUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.apiGateway;
    this.options = {
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        //'X-Requested-With': 'XMLHttpRequest'
        'Content-Type': 'application/json'
      },
      withCredentials: true,
      preFillUrl: true
    };
  }
  get(path, retryNum = -1, skipCatchOrRetryNum) {
    retryNum = this._getRetry(skipCatchOrRetryNum, retryNum);
    let options = new _models_api_model__WEBPACK_IMPORTED_MODULE_3__.ApiOptions();
    options = this._insertMaxRetry(options, retryNum);
    options = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.defaultsDeep)(this.options);
    const fullUrl = `${this.aPIUrl}/${path}`;
    options = (0,lodash_fp__WEBPACK_IMPORTED_MODULE_1__.omit)(['preFillUrl'], options);
    // console.warn('GET   YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY ' + fullUrl );
    return this.http.get(fullUrl, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(response => response));
  }
  post(path, body, retryNum = 0, skipCatchOrRetryNum) {
    retryNum = this._getRetry(skipCatchOrRetryNum, retryNum);
    let options = new _models_api_model__WEBPACK_IMPORTED_MODULE_3__.ApiOptions();
    options = this._insertMaxRetry(options, retryNum);
    options = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.defaultsDeep)(this.options);
    const fullUrl = `${this.aPIUrl}/${path}`;
    options = (0,lodash_fp__WEBPACK_IMPORTED_MODULE_1__.omit)(['preFillUrl'], options);
    // console.warn('POST  CCCCCCCCCCCCC ' + fullUrl  + JSON.stringify(body) + 'nnnnn' + JSON.stringify(options));
    return this.http.post(fullUrl, body, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(response => response));
  }
  put(path, body, retryNum = 0, skipCatchOrRetryNum) {
    retryNum = this._getRetry(skipCatchOrRetryNum, retryNum);
    let options = new _models_api_model__WEBPACK_IMPORTED_MODULE_3__.ApiOptions();
    options = this._insertMaxRetry(options, retryNum);
    options = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.defaultsDeep)(this.options);
    const fullUrl = `${this.aPIUrl}/${path}`;
    options = (0,lodash_fp__WEBPACK_IMPORTED_MODULE_1__.omit)(['preFillUrl'], options);
    // console.warn('PUT  CCCCCCCCCCCCC ', fullUrl , body);
    return this.http.put(fullUrl, body, options).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(response => response));
  }
  // patch<T>(
  //   path: string,
  //   body: any,
  //   retryNum = 0,
  //   skipCatchOrRetryNum?: any
  // ): Observable<T>{   
  //   retryNum = this._getRetry(
  //     skipCatchOrRetryNum,
  //     retryNum
  //   );
  //   let options: ApiOptions = new ApiOptions();
  //   options = this._insertMaxRetry(options, retryNum);
  //   options = defaultsDeep(this.options);
  //   const fullUrl = `${this.aPIUrl}/${path}`;
  //   options = omit(['preFillUrl'], options);
  //   return this.http.patch(fullUrl, body, options)
  //     .pipe(       
  //         map((response: any) => response as T),       
  //     );
  // }
  // downloadByLink(downloadUrl: string, fileName?: string, newTab = true): void {
  //   const aElem = document.createElement('a');
  //   if (
  //     fileName == null ||
  //     fileName.length === 0 ||
  //     typeof aElem.download === 'undefined'
  //   ) {
  //     if (newTab) {
  //       window.open(downloadUrl, '_blank');
  //     } else {
  //       window.location.assign(downloadUrl);
  //     }
  //   } else {
  //     aElem.style.display = 'none';
  //     aElem.href = downloadUrl;
  //     aElem.download = fileName;
  //     if (newTab) {
  //       aElem.target = '_blank';
  //     }
  //     // Firefox requires to append this link.
  //     document.body.appendChild(aElem);
  //     aElem.click();
  //     setTimeout(() => {
  //       URL.revokeObjectURL(downloadUrl);
  //       document.body.removeChild(aElem);
  //     }, 100);
  //   }
  // }
  _getRetry(
  // optionsOrCIdOrSkipCatchOrRetryNum?: ApiOptions | string | boolean | number,
  // cIdOrSkipCatchOrRetryNum?: string | boolean | number,
  retryNum, skipCatchOrRetryNum) {
    return typeof skipCatchOrRetryNum === 'number' ? skipCatchOrRetryNum
    // : typeof cIdOrSkipCatchOrRetryNum === 'number'
    // ? cIdOrSkipCatchOrRetryNum
    // : typeof optionsOrCIdOrSkipCatchOrRetryNum === 'number'
    // ? optionsOrCIdOrSkipCatchOrRetryNum
    : retryNum;
  }
  _insertMaxRetry(options, maxRetry) {
    return {
      ...options,
      headers: {
        ...(options.headers || {}),
        [_core_interceptors_retry_interceptor__WEBPACK_IMPORTED_MODULE_2__.RetryInterceptor.retryHeaderName]: maxRetry.toString()
      }
    };
  }
  static #_ = this.ɵfac = function ApiService_Factory(t) {
    return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: ApiService,
    factory: ApiService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7266:
/*!***********************************************!*\
  !*** ./src/app/services/favourite.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FavouriteService: () => (/* binding */ FavouriteService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 9045);



class FavouriteService {
  constructor(apiService) {
    this.apiService = apiService;
  }
  getFavourites() {
    return this.apiService.get('masterworks/favourites').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(data => data), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)()));
  }
  getFavouriteCount() {
    return this.apiService.get('masterworks/favourites-count').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(data => data.items), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)()));
  }
  addFavourite(artUids) {
    return this.apiService.post('masterworks/favourites', artUids).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)()));
  }
  removeFavourite(artUids) {
    return this.apiService.put('masterworks/favourites', artUids).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)()));
  }
  static #_ = this.ɵfac = function FavouriteService_Factory(t) {
    return new (t || FavouriteService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: FavouriteService,
    factory: FavouriteService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 568:
/*!************************************************!*\
  !*** ./src/app/services/masterwork.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MasterworkService: () => (/* binding */ MasterworkService)
/* harmony export */ });
/* harmony import */ var E_EVA_EZ_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 331);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.service */ 9045);





class MasterworkService {
  constructor(apiService) {
    this.apiService = apiService;
  }
  getMasterworks(paged) {
    return this.apiService // of({items: []} as any)
    .post('masterworks/all', paged)
    //   {
    //       // params: query
    //     params: new HttpParams({
    //       fromObject: {
    //         searchQuery: query,
    //       },
    //     }),
    //   }
    // )
    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)()));
  }
  getMasterworksPaged(paged) {
    var _this = this;
    return (0,E_EVA_EZ_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let totalCount = 0;
      let currentCount = 0;
      const page = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this.getMasterworks(paged));
      totalCount = page.totalCount;
      currentCount += page.items.length;
      const pagesPromises = [];
      while (totalCount > currentCount) {
        paged.page.pageNumber++;
        currentCount += page.items.length;
        pagesPromises.push((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this.getMasterworks(paged)));
      }
      let pages = yield Promise.all(pagesPromises);
      pages = [page, ...pages];
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(pages.flatMap(page => page.items));
    })();
  }
  getMasterworkByUids(uids) {
    return this.apiService.post('masterworks/by-uids', uids).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)()));
  }
  addMasterworks(items) {
    return this.apiService.post('masterworks', items).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)()));
  }
  updateMasterworks(items) {
    return this.apiService.put('masterworks', items).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)()));
  }
  static #_ = this.ɵfac = function MasterworkService_Factory(t) {
    return new (t || MasterworkService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: MasterworkService,
    factory: MasterworkService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2042:
/*!******************************************!*\
  !*** ./src/app/services/menu.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuService: () => (/* binding */ MenuService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 9045);



class MenuService {
  constructor(apiService) {
    this.apiService = apiService;
  }
  getMenu() {
    return this.apiService.get('menu').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(data => data.items), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)()));
  }
  updateMenu(items) {
    return this.apiService.post('menu', items).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)()));
  }
  static #_ = this.ɵfac = function MenuService_Factory(t) {
    return new (t || MenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: MenuService,
    factory: MenuService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5328:
/*!************************************************!*\
  !*** ./src/app/services/newsletter.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewsletterService: () => (/* binding */ NewsletterService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 9045);



class NewsletterService {
  constructor(apiService) {
    this.apiService = apiService;
  }
  createNewsletter(item) {
    return this.apiService.post('newsletter/create', item).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)()));
  }
  static #_ = this.ɵfac = function NewsletterService_Factory(t) {
    return new (t || NewsletterService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: NewsletterService,
    factory: NewsletterService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9752:
/*!**********************************************!*\
  !*** ./src/app/services/settings.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsService: () => (/* binding */ SettingsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9736);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2389);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 9045);



class SettingsService {
  constructor(apiService) {
    this.apiService = apiService;
    this.curBgnd = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject("");
    this.curBgnd$ = this.curBgnd.asObservable();
    this.initBackground();
  }
  getTextFormatting() {
    return this.apiService.get('settings/text-formatting').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(data => data), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)()));
  }
  getTextFormattingByArtUids(uids) {
    return this.apiService.post('settings/text-formatting/by-arts', uids).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(data => data), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)()));
  }
  updateTextFormatting(textFormats) {
    return this.apiService.put('settings/text-formatting', textFormats).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)()));
  }
  getWatermarkSettings() {
    return this.apiService.get('settings/watermark').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(data => data), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)()));
  }
  updateWatermarkSettings(settings) {
    return this.apiService.put('settings/watermark', settings).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)()));
  }
  initBackground() {
    this.getBackground().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.tap)(data => {
      let bgnd;
      if (data && data.items && data.items.some(x => x.isActive)) {
        bgnd = data.items.find(x => x.isActive)?.image;
      }
      if (bgnd && bgnd?.length > 0) {
        this.curBgnd.next(bgnd);
      } else {
        this.curBgnd.next("'assets/images/background.jpg'");
      }
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)())).subscribe();
  }
  getBackground() {
    return this.apiService.get('settings/background').pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(data => data), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)()));
  }
  addBackground(image) {
    return this.apiService.post('settings/background', image).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)()));
  }
  updateBackground(items) {
    return this.apiService.put('settings/background', items).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)()));
  }
  static #_ = this.ɵfac = function SettingsService_Factory(t) {
    return new (t || SettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: SettingsService,
    factory: SettingsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1271:
/*!**********************************************!*\
  !*** ./src/app/services/tempCacheService.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TempCacheService: () => (/* binding */ TempCacheService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class TempCacheService {
  constructor() {
    this.submenu = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.submenu$ = this.submenu.asObservable();
  }
  get submenuSnapshot() {
    return this.submenu.value;
  }
  changeSubmenuSelected(submenu) {
    this.submenu.next(submenu);
  }
  static #_ = this.ɵfac = function TempCacheService_Factory(t) {
    return new (t || TempCacheService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: TempCacheService,
    factory: TempCacheService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3076:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserService: () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 9045);
/* harmony import */ var _modules_alert_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/alert/alert.service */ 8479);





class UserService {
  constructor(_apiService, alertService) {
    this._apiService = _apiService;
    this.alertService = alertService;
  }
  updateUserInfo(form) {
    return this._apiService.put('user', form).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)()));
  }
  isAdmin() {
    return this._apiService.get('user/isadmin').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(result => {
      result = result;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(false);
    }));
  }
  static #_ = this.ɵfac = function UserService_Factory(t) {
    return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_modules_alert_alert_service__WEBPACK_IMPORTED_MODULE_1__.AlertService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: UserService,
    factory: UserService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2361:
/*!****************************************!*\
  !*** ./src/app/services/user.store.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserRole: () => (/* binding */ UserRole),
/* harmony export */   UserStore: () => (/* binding */ UserStore)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


var UserRole;
(function (UserRole) {
  UserRole["ADMIN"] = "admin";
  UserRole["USER"] = "user";
})(UserRole || (UserRole = {}));
class UserStore {
  constructor() {
    this.curRole = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.curRole$ = this.curRole.asObservable();
  }
  setRole(role) {
    this.curRole.next(role);
  }
  clearRole() {
    this.curRole.next(null);
  }
  static #_ = this.ɵfac = function UserStore_Factory(t) {
    return new (t || UserStore)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: UserStore,
    factory: UserStore.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const api = 'http://localhost:5000/api';
const environment = {
  production: false,
  experimental: true,
  apiGateway: api,
  loginRedirect: `${api}`,
  logoutRedirect: `${api}`
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

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4686), __webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map