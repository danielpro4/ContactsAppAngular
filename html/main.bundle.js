webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Contact.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
var Contact = (function () {
    function Contact(id, name, email, phone, adddress) {
        if (adddress === void 0) { adddress = ''; }
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = adddress;
    }
    return Contact;
}());

//# sourceMappingURL=Contact.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"uk-navbar\">\n  <div class=\"uk-navbar-container\">\n    <div class=\"uk-navbar\">\n      <div class=\"uk-navbar-left\">\n        <!-- Branding Image -->\n        <a class=\"uk-navbar-item uk-logo\" href=\"#\">\n          <span uk-icon=\"icon: user\"></span><span> Contacts</span>\n        </a>\n      </div>\n      <div class=\"uk-navbar-right\">\n        <div class=\"uk-navbar-item\">\n          <div class=\"uk-search uk-search-large\">\n            <span uk-search-icon></span>\n            <input [(ngModel)]=\"query\" (keyup)=\"onSearch($event)\" class=\"uk-search-input\" type=\"search\" placeholder=\"Search...\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<main class=\"uk-container uk-container-expand\">\n  <br>\n  <button (click)=\"onCreate(contactForm)\" class=\"button-create uk-button\">\n    <span uk-icon=\"icon: plus\"></span> Nuevo</button>\n  <div class=\"uk-grid\">\n    <section class=\"uk-width-expand@m\">\n      <div class=\"uk-container\">\n        <div class=\"uk-grid uk-margin-top\">\n          <div *ngIf=\"loading\">Cargando...</div>\n\n          <ul class=\"uk-list uk-list-divider\">\n            <li *ngFor=\"let contact of contacts\" [class.selected]=\"contact === selectedContact\" class=\"contact-item\" (click)=\"onSelect(contact)\">\n              <article class=\"uk-comment uk-visible-toggle\">\n                <header class=\"uk-comment-header\">\n                  <div class=\"uk-grid uk-grid-medium uk-flex-middle\">\n                    <div class=\"uk-width-auto\">\n                      <img class=\"uk-comment-avatar\" src=\"/assets/imgs/avatar.png\" width=\"80\" height=\"80\" alt=\"Avatar\">\n                    </div>\n                    <div class=\"uk-width-expand\">\n                      <h4 class=\"uk-comment-title uk-margin-remove\">{{contact.name}}</h4>\n                      <div class=\"uk-comment-meta uk-margin-remove-top\">\n                        <div>\n                          <span uk-icon=\"icon: phone\"></span> {{contact.phone}}</div>\n                        <div>\n                          <span uk-icon=\"icon: mail\"></span> {{contact.email}}</div>\n                      </div>\n                    </div>\n                  </div>\n                </header>\n              </article>\n            </li>\n          </ul>\n\n        </div>\n      </div>\n    </section>\n\n    <section class=\"uk-width-expand@m\">\n      <div *ngIf=\"selectedContact\" class=\"uk-container uk-margin-top\">\n\n        <form #contactForm=\"ngForm\" (ngSubmit)=\"onSubmit(contactForm)\" class=\"uk-contact-form uk-form-horizontal uk-margin-large\">\n          <fieldset class=\"uk-fieldset\">\n            <legend class=\"uk-legend\">Contact Data</legend>\n            <div class=\"uk-margin\">\n              <label class=\"uk-form-label\">Name:</label>\n              <div class=\"uk-form-controls\">\n                <input class=\"uk-input\" name=\"name\" [(ngModel)]=\"selectedContact.name\" #name=\"ngModel\" ngModel required minlength=\"4\" placeholder=\"Name, e.g. Daniel\"\n                  type=\"text\" name=\"name\">\n\n                <div [hidden]=\"name.valid || name.pristine\" class=\"uk-text-danger\">\n                  Name is required\n                </div>\n              </div>\n            </div>\n\n\n            <div class=\"uk-margin\">\n              <label class=\"uk-form-label\">Phone:</label>\n              <div class=\"uk-form-controls\">\n                <input class=\"uk-input\" name=\"phone\" [(ngModel)]=\"selectedContact.phone\" placeholder=\"Phone\" pattern=\"^\\d{3}-\\d{3}-\\d{4}$\"\n                  required #phone=\"ngModel\" ngModel type=\"text\">\n                <div [hidden]=\"phone.valid || phone.pristine\" class=\"uk-text-danger\">\n                  Name is required\n                </div>\n              </div>\n            </div>\n\n            <div class=\"uk-margin\">\n              <label class=\"uk-form-label\">E-mail:</label>\n              <div class=\"uk-form-controls\">\n                <input class=\"uk-input\" name=\"email\" [(ngModel)]=\"selectedContact.email\" placeholder=\"E-mail\" required #email=\"ngModel\" ngModel\n                  ngModeltype=\"text\">\n                <div [hidden]=\"email.valid || email.pristine\" class=\"uk-text-danger\">\n                  Name is required\n                </div>\n              </div>\n            </div>\n\n            <div class=\"uk-margin\">\n              <label class=\"uk-form-label\">Address:</label>\n              <div class=\"uk-form-controls\">\n                <textarea class=\"uk-textarea\" name=\"address\" [(ngModel)]=\"selectedContact.address\" placeholder=\"Address\" ngModel rows=\"3\"></textarea>\n              </div>\n            </div>\n          </fieldset>\n\n          <button class=\"uk-button uk-button-primary\" [disabled]=\"!contactForm.form.valid\">\n            <span uk-icon=\"icon: check\"></span> Guardar\n          </button>\n        </form>\n      </div>\n    </section>\n\n  </div>\n</main>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contact-item .avatar {\n  background: blueviolet;\n  border-radius: 50%;\n  height: 60px;\n  width: 60px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 60px;\n          flex: 1 0 60px;\n  padding: 15px; }\n\n.uk-form-horizontal .uk-form-controls {\n  margin-left: 135px; }\n\n.uk-form-horizontal .uk-form-label {\n  width: 120px; }\n\n.uk-logo {\n  text-decoration: none; }\n\n.uk-logo span {\n  color: white;\n  font-size: 32px; }\n\n.uk-navbar-container:not(.uk-navbar-transparent) {\n  background: linear-gradient(to left, #28a5f5, #1e87f0);\n  z-index: 1;\n  width: 100%; }\n\n.uk-search-large .uk-search-icon,\n.uk-search-large .uk-search-input {\n  color: white;\n  font-size: 32px; }\n\n.uk-search-large ::-webkit-input-placeholder {\n  color: white; }\n\n.uk-list {\n  width: 100%; }\n\n.contact-item {\n  border-radius: 7px;\n  cursor: pointer; }\n  .contact-item .uk-comment-avatar {\n    border-radius: 50%;\n    margin: 10px 5px 0px 10px; }\n  .contact-item:hover, .contact-item.selected {\n    background-color: #2aa0f5 !important; }\n    .contact-item:hover .uk-comment-title,\n    .contact-item:hover .uk-comment-meta, .contact-item.selected .uk-comment-title,\n    .contact-item.selected .uk-comment-meta {\n      color: white; }\n\n.uk-contact-form {\n  position: relative; }\n  .uk-contact-form button {\n    float: right; }\n\n.button-create {\n  background: orangered;\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Contact__ = __webpack_require__("../../../../../src/app/Contact.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(http, fb) {
        this.http = http;
        this.fb = fb;
        this.selectedContact = null;
        this.loading = false;
        this.oauthUrl = 'http://contacts.dev/oauth/token';
        this.contactsUrl = 'http://contacts.dev/api/v1/contacts';
        this.title = 'Contacts App';
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc4Yzk4ZTYxNzk4YmM1NTQ4ZThlODI5NGFiZjkyMmIxMTQ3YjRjYzRlYTRkYzhiZjNiMTRmNzRmNTBiM2Q4MDQ2MDAwZmU0ZWE5N2Y5M2U5In0.eyJhdWQiOiIxIiwianRpIjoiNzhjOThlNjE3OThiYzU1NDhlOGU4Mjk0YWJmOTIyYjExNDdiNGNjNGVhNGRjOGJmM2IxNGY3NGY1MGIzZDgwNDYwMDBmZTRlYTk3ZjkzZTkiLCJpYXQiOjE1MDg2OTE5MTMsIm5iZiI6MTUwODY5MTkxMywiZXhwIjoxNTQwMjI3OTEzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.sgA1IqGX1_3BjKhXbHLYt_GtdrS0PL0XfKTXfgr8uU5Jt8x7DRkR9dzPVt9eBkIJlHHnWa20KtxFSsToh7vRsz3kENksynGIrX71HrFBDCWtXFH3wLN58qePiM5zMCPpJjSmtFXwa-KXy4jTqBcuiFz1hs05n797pqLo95qtE-uhIWuMVb1mvE-BixkXJIVO5cucke44lG0Yq02VQa3ZzHuL1zQTbUWfNQR2kN_bBwsSdDxd0V_0HC4kzX4yhLNO4jKli2rxLtjd3mrh9wTEcPr8Hnyq3r3cULJWHOGBVyofO1U2ApsTOSNUj5jzUb-I5R9GbtUvolq2viS9G1NdyLHBdelghmApRTlOkibqQxt-qR6QZNa-ZvqEi5va1sa3aSzjH_7dIW_OzK8AYFzh1FDmgEsDsb2MM7OiQylegVBbZKUqmvXFQp0Xk5vxqXIu2Q4n7oHZBNNeQy72mvcfV-WTR4_yyvQSU6JVpRKoOTMyXpgru8moEYV54uT7kXN4JKWeFxJBdDbPdWAshef-KE3gZNIQ1up3M4eEN-6Ca_Tby6ZAsSfDl4q6r4p3xoGnfR8FNP3iPZ4WMs7SOt-SuCIOKtMKbU0HxPB613VVGwdk6cYA4LFXFv0byKSrdhqoA5Zecl16c7cu-Eoa4m2nm4lYafffJsu-UaKoWM447xg',
            'Content-Type': 'application/json'
        });
        this.contacts = [];
        this.contact = new __WEBPACK_IMPORTED_MODULE_3__Contact__["a" /* Contact */](1, 'Daniel Pérez Atanacio', 'daniel@pagelab.io', '2225810011', 'Josefa O. de Doguez. No. 11 San Cristóbal Tepeteopan Tehuacan, Pue.');
    }
    AppComponent.prototype.getAccessToken = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            "Content-Type": "application/json",
            "Accept": "application/json"
        });
        var postData = {
            grant_type: "password",
            client_id: 1,
            client_secret: "ZJTFE49jzVRUoIDFjLo6836ZUpUBxqEwZFGSt3gg",
            username: "daniel.perez.atanacio@gmail.com",
            password: "123456",
            scope: ""
        };
        return this.http.post(this.oauthUrl, JSON.stringify(postData), {
            headers: headers
        });
    };
    AppComponent.prototype.getContacts = function (accessToken) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + accessToken,
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        return this.http.get(this.contactsUrl, {
            headers: headers
        });
    };
    AppComponent.prototype.getToken = function () {
        var _this = this;
        this.getAccessToken().subscribe(function (response) {
            var oauthToken = response.json();
            _this.getContacts(oauthToken.access_token).subscribe(function (response) {
                var json = response.json();
                if (json) {
                    _this.contacts = json.data;
                }
            });
        });
    };
    AppComponent.prototype.onCreate = function (form) {
        form.reset();
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: this.headers
        });
        this.loading = true;
        this.http.get(this.contactsUrl, options).subscribe(function (response) {
            var json = response.json();
            if (json.data) {
                _this.contacts = json.data;
                if (_this.contacts.length > 0) {
                    _this.selectedContact = _this.contacts[0];
                }
            }
            _this.loading = false;
        });
    };
    AppComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: this.headers
        });
        this.loading = true;
        this.http.post(this.contactsUrl, JSON.stringify(form.value), options).subscribe(function (response) {
            var json = response.json();
            if (json.data) {
                _this.contacts = _this.contacts.concat(json.data);
            }
            form.reset();
            _this.loading = false;
        });
    };
    AppComponent.prototype.onSearch = function ($event) {
        var _this = this;
        var query = String($event.target.value).length ?
            '/' + $event.target.value :
            '';
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({
            headers: this.headers
        });
        this.loading = true;
        this.http.get(this.contactsUrl + query, options).subscribe(function (response) {
            var json = response.json();
            if (json.data) {
                _this.contacts = json.data;
            }
            _this.loading = false;
        });
    };
    AppComponent.prototype.onSelect = function (contact) {
        this.selectedContact = contact;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
// https://appdividend.com/2017/09/22/laravel-5-5-angular-4-tutorial-example-scratch/?utm_source=hashnode.com
// https://appdividend.com/2017/09/22/laravel-5-5-angular-4-tutorial-example-scratch/
// http://albanafmeti.com/2016/using-laravel-passport-with-an-angular2-client-app/
// https://blog.alex-miller.co/angular/2017/05/13/default-headers-in-angular.html
// http://itsolutionstuff.com/post/laravel-5-how-to-create-api-authentication-using-passport-example.html 
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__filter_pipe__ = __webpack_require__("../../../../../src/app/filter.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__filter_pipe__["a" /* FilterPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        exports: [],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (contact) {
            return contact['name'].toLowerCase().includes(searchText);
        });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
        name: 'filter'
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map