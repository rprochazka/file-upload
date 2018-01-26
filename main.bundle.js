webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"app.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<toaster-container></toaster-container>\n<app-file-upload></app-file-upload>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global__ = __webpack_require__("../../../../../src/app/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(elementRef, global) {
        this.elementRef = elementRef;
        this.global = global;
        this.title = 'app';
        var uploadUri = this.elementRef.nativeElement.getAttribute('uploadUri');
        var dataUri = this.elementRef.nativeElement.getAttribute('dataUri');
        if (uploadUri) {
            this.global.uploadEndpoint = uploadUri;
        }
        if (dataUri) {
            this.global.dataEndpoint = dataUri;
        }
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__global__["a" /* Global */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__file_metadata_file_metadata_component__ = __webpack_require__("../../../../../src/app/file-metadata/file-metadata.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__file_upload_file_upload_component__ = __webpack_require__("../../../../../src/app/file-upload/file-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__file_item_file_item_component__ = __webpack_require__("../../../../../src/app/file-item/file-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_dnd__ = __webpack_require__("../../../../ng2-dnd/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__select_list_select_list_component__ = __webpack_require__("../../../../../src/app/select-list/select-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_code_list_service__ = __webpack_require__("../../../../../src/app/services/code-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular_in_memory_web_api__ = __webpack_require__("../../../../angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_upload_mock_service__ = __webpack_require__("../../../../../src/app/services/upload-mock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__global__ = __webpack_require__("../../../../../src/app/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__core_log_publishers_service__ = __webpack_require__("../../../../../src/app/core/log-publishers.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__core_log_service__ = __webpack_require__("../../../../../src/app/core/log.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__core_global_error_handler__ = __webpack_require__("../../../../../src/app/core/global-error-handler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__core_error_log_service__ = __webpack_require__("../../../../../src/app/core/error-log.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__file_upload_file_upload_component__["a" /* FileUploadComponent */],
                __WEBPACK_IMPORTED_MODULE_9__file_item_file_item_component__["a" /* FileItemComponent */],
                __WEBPACK_IMPORTED_MODULE_0__file_metadata_file_metadata_component__["a" /* FileMetadataComponent */],
                __WEBPACK_IMPORTED_MODULE_11__select_list_select_list_component__["a" /* SelectListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_ng2_dnd__["a" /* DndModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClientModule */],
                !__WEBPACK_IMPORTED_MODULE_16__environments_environment__["a" /* environment */].production
                    ? __WEBPACK_IMPORTED_MODULE_14_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_15__services_upload_mock_service__["a" /* UploaderMockedData */], {
                        apiBase: 'api/mock/',
                        passThruUnknownUrl: true
                    })
                    : [],
                __WEBPACK_IMPORTED_MODULE_18_angular2_toaster__["a" /* ToasterModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__services_code_list_service__["a" /* CodeListService */],
                __WEBPACK_IMPORTED_MODULE_13__services_upload_service__["a" /* UploadService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */],
                    useClass: __WEBPACK_IMPORTED_MODULE_21__core_global_error_handler__["a" /* GlobalErrorHandler */]
                },
                __WEBPACK_IMPORTED_MODULE_17__global__["a" /* Global */],
                __WEBPACK_IMPORTED_MODULE_19__core_log_publishers_service__["a" /* LogPublishersService */],
                __WEBPACK_IMPORTED_MODULE_20__core_log_service__["a" /* LogService */],
                __WEBPACK_IMPORTED_MODULE_22__core_error_log_service__["a" /* ErrorLogService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/error-log.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorLogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__log_service__ = __webpack_require__("../../../../../src/app/core/log.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ErrorLogService = /** @class */ (function () {
    function ErrorLogService(logService) {
        this.logService = logService;
    }
    ErrorLogService.prototype.logError = function (error) {
        if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpErrorResponse */]) {
            this.logService.error("There was an HTTP error.' " + error.message + ", Status code: " + error.status);
        }
        else if (error instanceof TypeError) {
            this.logService.error("There was a Type error. " + error.message);
        }
        else if (error instanceof Error) {
            this.logService.error("There was a general error " + error.message, error.stack);
        }
        else {
            this.logService.error("Nobody threw an error but something happened! ... " + error);
        }
    };
    ErrorLogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__log_service__["a" /* LogService */]])
    ], ErrorLogService);
    return ErrorLogService;
}());



/***/ }),

/***/ "../../../../../src/app/core/global-error-handler.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalErrorHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error_log_service__ = __webpack_require__("../../../../../src/app/core/error-log.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlobalErrorHandler = /** @class */ (function (_super) {
    __extends(GlobalErrorHandler, _super);
    function GlobalErrorHandler(errorLogger) {
        var _this = _super.call(this) || this;
        _this.errorLogger = errorLogger;
        return _this;
    }
    GlobalErrorHandler.prototype.handleError = function (error) {
        this.errorLogger.logError(error);
    };
    GlobalErrorHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__error_log_service__["a" /* ErrorLogService */]])
    ], GlobalErrorHandler);
    return GlobalErrorHandler;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */]));



/***/ }),

/***/ "../../../../../src/app/core/log-publishers.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogPublishersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__log_publishers__ = __webpack_require__("../../../../../src/app/core/log-publishers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PUBLISHERS_FILE = 'assets/log-publishers.json';
var LogPublishersService = /** @class */ (function () {
    function LogPublishersService(http) {
        this.http = http;
        this.publishers = [];
        this.buildPublishers();
    }
    LogPublishersService.prototype.buildPublishers = function () {
        var _this = this;
        var logPub;
        this.getLoggers().subscribe(function (response) {
            for (var _i = 0, _a = response.filter(function (p) { return p.isActive; }); _i < _a.length; _i++) {
                var pub = _a[_i];
                switch (pub.loggerName.toLowerCase()) {
                    case 'console':
                        logPub = new __WEBPACK_IMPORTED_MODULE_1__log_publishers__["a" /* LogConsole */]();
                        break;
                    case 'loggly':
                        logPub = new __WEBPACK_IMPORTED_MODULE_1__log_publishers__["b" /* LogLoggly */]();
                        break;
                }
                _this.publishers.push(logPub);
            }
        });
    };
    LogPublishersService.prototype.getLoggers = function () {
        return this.http.get(PUBLISHERS_FILE)
            .catch(this.handleErrors);
    };
    LogPublishersService.prototype.handleErrors = function (error) {
        var errors = [];
        var msg = '';
        msg = 'Status: ' + error.status;
        msg += ' - Status Text: ' + error.statusText;
        if (error.json()) {
            msg += ' - Exception Message: ' + error.json().exceptionMessage;
        }
        errors.push(msg);
        console.error('An error occurred', errors);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(errors);
    };
    LogPublishersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], LogPublishersService);
    return LogPublishersService;
}());



/***/ }),

/***/ "../../../../../src/app/core/log-publishers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogConsole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LogLoggly; });
/* unused harmony export LogPublisherConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");




var LogConsole = /** @class */ (function () {
    function LogConsole() {
    }
    LogConsole.prototype.log = function (record) {
        console.log(record.buildLogString());
    };
    return LogConsole;
}());

var LogLoggly = /** @class */ (function () {
    function LogLoggly() {
        this.loggly = new LogglyTracker();
        this.loggly.push({
            logglyKey: 'f6373e20-de74-40c3-a05f-c46a30d50d2a',
            sendConsoleErrors: true,
            tag: 'Bohemka-UI-logs'
        });
    }
    LogLoggly.prototype.log = function (record) {
        this.loggly.push(record);
    };
    return LogLoggly;
}());

var LogPublisherConfig = /** @class */ (function () {
    function LogPublisherConfig() {
    }
    return LogPublisherConfig;
}());



/***/ }),

/***/ "../../../../../src/app/core/log.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LogLevel */
/* unused harmony export LogEntry */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__log_publishers_service__ = __webpack_require__("../../../../../src/app/core/log-publishers.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["All"] = 0] = "All";
    LogLevel[LogLevel["Debug"] = 1] = "Debug";
    LogLevel[LogLevel["Info"] = 2] = "Info";
    LogLevel[LogLevel["Warn"] = 3] = "Warn";
    LogLevel[LogLevel["Error"] = 4] = "Error";
    LogLevel[LogLevel["Off"] = 5] = "Off";
})(LogLevel || (LogLevel = {}));
var LogEntry = /** @class */ (function () {
    function LogEntry() {
        this.entryDate = new Date();
        this.message = '';
        this.level = LogLevel.Debug;
        this.extraInfo = [];
    }
    LogEntry.prototype.buildLogString = function () {
        var ret = '';
        ret = new Date() + ' - ';
        ret += 'Type: ' + LogLevel[this.level];
        ret += ' - Message: ' + this.message;
        if (this.extraInfo.length) {
            ret += ' - Extra Info: ' + this.formatParams(this.extraInfo);
        }
        return ret;
    };
    LogEntry.prototype.formatParams = function (params) {
        var ret = params.join(',');
        if (params.some(function (p) { return typeof p === 'object'; })) {
            ret = '';
            for (var _i = 0, params_1 = params; _i < params_1.length; _i++) {
                var item = params_1[_i];
                ret += JSON.stringify(item) + ',';
            }
        }
        return ret;
    };
    return LogEntry;
}());

var LogService = /** @class */ (function () {
    function LogService(publishersService) {
        this.publishersService = publishersService;
        this.level = LogLevel.All;
        this.publishers = this.publishersService.publishers;
    }
    LogService.prototype.shouldLog = function (level) {
        var ret = false;
        if (this.level !== LogLevel.Off && level >= this.level) {
            ret = true;
        }
        return ret;
    };
    LogService.prototype.debug = function (msg) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.writeToLog(msg, LogLevel.Debug, optionalParams);
    };
    LogService.prototype.info = function (msg) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.writeToLog(msg, LogLevel.Info, optionalParams);
    };
    LogService.prototype.warn = function (msg) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.writeToLog(msg, LogLevel.Warn, optionalParams);
    };
    LogService.prototype.error = function (msg) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.writeToLog(msg, LogLevel.Error, optionalParams);
    };
    LogService.prototype.log = function (msg) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        this.writeToLog(msg, LogLevel.All, optionalParams);
    };
    LogService.prototype.writeToLog = function (msg, level, params) {
        if (this.shouldLog(level)) {
            var entry = new LogEntry();
            entry.message = msg;
            entry.level = level;
            entry.extraInfo = params;
            // Log the value to all publishers
            for (var _i = 0, _a = this.publishers; _i < _a.length; _i++) {
                var logger = _a[_i];
                logger.log(entry);
            }
        }
    };
    LogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__log_publishers_service__["a" /* LogPublishersService */]])
    ], LogService);
    return LogService;
}());



/***/ }),

/***/ "../../../../../src/app/file-item/file-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row row-margin file-item\">\r\n  <div class=\"col-lg-2\" dnd-sortable [sortableIndex]=\"index\">\r\n    <img *ngIf=\"url\" [src]=\"url\" class='img-fluid img-thumbnail rounded mx-auto d-block' />\r\n  </div>\r\n\r\n  <div class=\"col-lg-9\">\r\n    <app-file-metadata [categories]=\"categories\" [sources]=\"sources\" [licenses]=\"licenses\" [seasons]=\"seasons\" [teams]=\"teams\"\r\n                       [matches]=\"currMatches\" [articles]=\"articles\" [(baseSelection)]=\"fileItem.metadata\" [disabled]=\"useBaseSelection\"\r\n                       [index]=\"index\" (newMatchesLoaded)=\"onNewMatchesLoaded($event)\">\r\n    </app-file-metadata>\r\n  </div>\r\n\r\n  <div class=\"col-lg-1\">\r\n\r\n    <div class=\"row row-margin action-col\">\r\n      <div>\r\n        <label class=\"btn btn-primary\">\r\n          <input type=\"checkbox\" [(ngModel)]=\"useBaseSelection\" (change)=\"onUseBaseSelectionChanged()\">\r\n          <!-- <span class=\"custom-control-indicator\"></span> -->\r\n          <span class=\"custom-control-description\">Hromadné</span>\r\n        </label>\r\n      </div>\r\n\r\n      <div>\r\n        <button (click)=\"onDeleteItem()\" type=\"button\" class=\"btn btn-danger\">Vymazat</button>\r\n      </div>\r\n\r\n      <div>\r\n        Pořadí: <span>{{index + 1}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/file-item/file-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, ".file-item {\n  border: 1px dashed gray;\n  border-radius: 5px;\n  padding: 10px;\n  margin-bottom: 10px; }\n\n.action-col > div {\n  margin-bottom: 15px; }\n", "", {"version":3,"sources":["D:/git/github/file-uploader/src/app/file-item/D:/git/github/file-uploader/src/app/file-item/file-item.component.scss"],"names":[],"mappings":"AAAA;EACE,wBAAuB;EACvB,mBAAkB;EAClB,cAAa;EACb,oBAAmB,EACpB;;AAED;EACE,oBAAmB,EACpB","file":"file-item.component.scss","sourcesContent":[".file-item {\r\n  border: 1px dashed gray;\r\n  border-radius: 5px;\r\n  padding: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.action-col > div {\r\n  margin-bottom: 15px;\r\n}\r\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/file-item/file-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__file_metadata_fileItemMetadataModel__ = __webpack_require__("../../../../../src/app/file-metadata/fileItemMetadataModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fileItemModel__ = __webpack_require__("../../../../../src/app/file-item/fileItemModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileItemComponent = /** @class */ (function () {
    function FileItemComponent(differs) {
        this.differs = differs;
        this.itemDelete = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* EventEmitter */]();
        this.differ = differs.find({}).create();
        this.useBaseSelection = true;
    }
    FileItemComponent.prototype.onUseBaseSelectionChanged = function () {
        this.fileItem.metadata = null;
        this.fileItem.metadata = this.useBaseSelection ? this.baseSelection : __assign({}, this.baseSelection);
        if (this.useBaseSelection) {
            this.currMatches = this.matches;
        }
    };
    FileItemComponent.prototype.onNewMatchesLoaded = function (newMatches) {
        if (!this.useBaseSelection) {
            this.currMatches = newMatches;
        }
    };
    FileItemComponent.prototype.ngOnChanges = function (changes) {
        if (changes['baseSelection']) {
            this.fileItem.metadata = changes['baseSelection'].currentValue;
        }
        if (changes['matches'] && this.useBaseSelection) {
            this.currMatches = changes['matches'].currentValue;
        }
        if (changes['index']) {
            this.fileItem.order = changes['index'].currentValue;
        }
    };
    FileItemComponent.prototype.ngDoCheck = function () {
        var _this = this;
        var changes = this.differ.diff(this.fileItem.metadata);
        if (changes) {
            changes.forEachChangedItem(function (r) {
                _this.fileItem.metadata[r.key] = r.currentValue;
            });
        }
    };
    FileItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.url = event.target.result;
        };
        reader.readAsDataURL(this.fileItem.file);
    };
    FileItemComponent.prototype.onDeleteItem = function () {
        this.itemDelete.emit(this.fileItem);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__fileItemModel__["a" /* FileItemModel */])
    ], FileItemComponent.prototype, "fileItem", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Input */])(),
        __metadata("design:type", Array)
    ], FileItemComponent.prototype, "categories", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Input */])(),
        __metadata("design:type", Array)
    ], FileItemComponent.prototype, "sources", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Input */])(),
        __metadata("design:type", Array)
    ], FileItemComponent.prototype, "licenses", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Input */])(),
        __metadata("design:type", Array)
    ], FileItemComponent.prototype, "seasons", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Input */])(),
        __metadata("design:type", Array)
    ], FileItemComponent.prototype, "teams", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Input */])(),
        __metadata("design:type", Array)
    ], FileItemComponent.prototype, "matches", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Input */])(),
        __metadata("design:type", Array)
    ], FileItemComponent.prototype, "articles", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Input */])(),
        __metadata("design:type", Number)
    ], FileItemComponent.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__file_metadata_fileItemMetadataModel__["a" /* FileItemMetadataModel */])
    ], FileItemComponent.prototype, "baseSelection", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* EventEmitter */])
    ], FileItemComponent.prototype, "itemDelete", void 0);
    FileItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'app-file-item',
            template: __webpack_require__("../../../../../src/app/file-item/file-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/file-item/file-item.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_core__["D" /* KeyValueDiffers */]])
    ], FileItemComponent);
    return FileItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/file-item/fileItemModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileItemModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__file_metadata_fileItemMetadataModel__ = __webpack_require__("../../../../../src/app/file-metadata/fileItemMetadataModel.ts");

var FileItemModel = /** @class */ (function () {
    function FileItemModel(file) {
        this.file = file;
        this.metadata = new __WEBPACK_IMPORTED_MODULE_0__file_metadata_fileItemMetadataModel__["a" /* FileItemMetadataModel */]();
    }
    return FileItemModel;
}());



/***/ }),

/***/ "../../../../../src/app/file-metadata/file-metadata.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row row-margin\">\r\n  <div class=\"col-lg-4\">\r\n    <div class=\"form-group row\">\r\n      <label for=\"title\" class=\"col-lg-3 col-form-label\">Titulek</label>\r\n      <div class=\"col-lg-9\">\r\n        <input type=\"text\" [disabled]=\"disabled\" [(ngModel)]=\"baseSelection.title\" class=\"form-control\" id=\"title\" placeholder=\"Kratky popis\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group row\">\r\n      <label for=\"description\" class=\"col-lg-3 col-form-label\">Popis</label>\r\n      <div class=\"col-lg-9\">\r\n        <textarea [disabled]=\"disabled\" [(ngModel)]=\"baseSelection.description\" class=\"form-control\" id=\"description\" placeholder=\"Popis\"\r\n          rows=\"3\"></textarea>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"col-lg-4\">\r\n    <app-select-list label=\"Kategorie\" [(ngModel)]=\"baseSelection.selectedCategory\" [items]=\"categories\" [disabled]=\"disabled\">\r\n    </app-select-list>\r\n\r\n    <app-select-list label=\"Zdroj\" [(ngModel)]=\"baseSelection.selectedSource\" [items]=\"sources\" [disabled]=\"disabled\">\r\n    </app-select-list>\r\n\r\n    <app-select-list label=\"Licence\" [(ngModel)]=\"baseSelection.selectedLicense\" [items]=\"licenses\" [disabled]=\"disabled\">\r\n    </app-select-list>\r\n  </div>\r\n\r\n  <div class=\"col-lg-4\">\r\n    <div>\r\n      <label for=\"addGalleryCheckbox\">Vytvořit galerii</label>\r\n      <input id=\"addGalleryCheckbox\" type=\"checkbox\" [(ngModel)]=\"baseSelection.addGallery\" [disabled]=\"disabled\">\r\n\r\n      <span *ngIf=\"baseSelection.addGallery\">\r\n        <input type=\"radio\" name=\"galleryType{{index}}\" (click)=\"galleryTypeChange('match')\" [disabled]=\"disabled\" [checked]=\"showMatchGalleryProperties()\">Zápas\r\n        <input type=\"radio\" name=\"galleryType{{index}}\" (click)=\"galleryTypeChange('article')\" [disabled]=\"disabled\" [checked]=\"showArticleGalleryProperties()\">Článek<br>\r\n      </span>\r\n    </div>\r\n\r\n    <div *ngIf=\"showMatchGalleryProperties()\">\r\n      <app-select-list label=\"Ročník\" [(ngModel)]=\"baseSelection.selectedSeason\" [items]=\"seasons\" [disabled]=\"disabled\" (selectionChanged)=\"loadNewMatches()\">\r\n      </app-select-list>\r\n      <app-select-list label=\"Tým\" [(ngModel)]=\"baseSelection.selectedTeam\" [items]=\"teams\" [disabled]=\"disabled\" (selectionChanged)=\"loadNewMatches()\">\r\n      </app-select-list>\r\n      <app-select-list label=\"Zápas\" [(ngModel)]=\"baseSelection.selectedMatch\" [items]=\"matches\" [disabled]=\"disabled\">\r\n      </app-select-list>\r\n    </div>\r\n   \r\n    <div *ngIf=\"showArticleGalleryProperties()\">\r\n      <app-select-list label=\"Článek\" [(ngModel)]=\"baseSelection.selectedArticle\" [items]=\"articles\" [disabled]=\"disabled\">\r\n      </app-select-list>\r\n    </div>\r\n    \r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/file-metadata/file-metadata.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileMetadataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_code_list_service__ = __webpack_require__("../../../../../src/app/services/code-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fileItemMetadataModel__ = __webpack_require__("../../../../../src/app/file-metadata/fileItemMetadataModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_selected_gallery_type_enum__ = __webpack_require__("../../../../../src/app/shared/selected-gallery-type-enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FileMetadataComponent = /** @class */ (function () {
    function FileMetadataComponent(codeListService) {
        this.codeListService = codeListService;
        this.newMatchesLoaded = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* EventEmitter */]();
    }
    FileMetadataComponent.prototype.loadNewMatches = function () {
        var _this = this;
        var seasonId = this.baseSelection.selectedSeason;
        var teamId = this.baseSelection.selectedTeam;
        if (seasonId && teamId) {
            this.codeListService.getMatches(seasonId, teamId).subscribe(function (resp) {
                _this.newMatchesLoaded.emit(resp);
            });
        }
        else {
            this.newMatchesLoaded.emit(null);
        }
    };
    FileMetadataComponent.prototype.galleryTypeChange = function (type) {
        if (type === 'match') {
            this.baseSelection.selectedGalleryType = __WEBPACK_IMPORTED_MODULE_3__shared_selected_gallery_type_enum__["a" /* MyEnums */].SelectedGalleryTypeEnum.Match;
        }
        else {
            this.baseSelection.selectedGalleryType = __WEBPACK_IMPORTED_MODULE_3__shared_selected_gallery_type_enum__["a" /* MyEnums */].SelectedGalleryTypeEnum.Article;
        }
    };
    FileMetadataComponent.prototype.showMatchGalleryProperties = function () {
        return this.baseSelection.addGallery && this.baseSelection.selectedGalleryType === __WEBPACK_IMPORTED_MODULE_3__shared_selected_gallery_type_enum__["a" /* MyEnums */].SelectedGalleryTypeEnum.Match;
    };
    FileMetadataComponent.prototype.showArticleGalleryProperties = function () {
        return this.baseSelection.addGallery && this.baseSelection.selectedGalleryType === __WEBPACK_IMPORTED_MODULE_3__shared_selected_gallery_type_enum__["a" /* MyEnums */].SelectedGalleryTypeEnum.Article;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Input */])(),
        __metadata("design:type", Array)
    ], FileMetadataComponent.prototype, "categories", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Input */])(),
        __metadata("design:type", Array)
    ], FileMetadataComponent.prototype, "sources", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Input */])(),
        __metadata("design:type", Array)
    ], FileMetadataComponent.prototype, "licenses", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Input */])(),
        __metadata("design:type", Array)
    ], FileMetadataComponent.prototype, "seasons", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Input */])(),
        __metadata("design:type", Array)
    ], FileMetadataComponent.prototype, "teams", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Input */])(),
        __metadata("design:type", Array)
    ], FileMetadataComponent.prototype, "matches", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Input */])(),
        __metadata("design:type", Array)
    ], FileMetadataComponent.prototype, "articles", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__fileItemMetadataModel__["a" /* FileItemMetadataModel */])
    ], FileMetadataComponent.prototype, "baseSelection", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Input */])(),
        __metadata("design:type", Boolean)
    ], FileMetadataComponent.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Input */])(),
        __metadata("design:type", Number)
    ], FileMetadataComponent.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* EventEmitter */])
    ], FileMetadataComponent.prototype, "newMatchesLoaded", void 0);
    FileMetadataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'app-file-metadata',
            template: __webpack_require__("../../../../../src/app/file-metadata/file-metadata.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_code_list_service__["a" /* CodeListService */]])
    ], FileMetadataComponent);
    return FileMetadataComponent;
}());



/***/ }),

/***/ "../../../../../src/app/file-metadata/fileItemMetadataModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileItemMetadataModel; });
var FileItemMetadataModel = /** @class */ (function () {
    function FileItemMetadataModel() {
        this.selectedCategory = 0;
        this.selectedSource = 0;
        this.selectedLicense = 0;
        this.addGallery = false;
        this.selectedSeason = 0;
        this.selectedTeam = 0;
        this.selectedMatch = 0;
        this.selectedArticle = 0;
    }
    return FileItemMetadataModel;
}());



/***/ }),

/***/ "../../../../../src/app/file-upload/file-upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mw-100\">\r\n  <form action=\"\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        Hromadné nastavení\r\n      </div>\r\n      <div class=\"card-block\">\r\n        <app-file-metadata [categories]=\"categories\" [sources]=\"sources\" [licenses]=\"licenses\" [seasons]=\"seasons\" [teams]=\"teams\"\r\n                           [matches]=\"matches\" [articles]=\"articles\" [(baseSelection)]=\"baseMetadata\" (newMatchesLoaded)=\"onNewMatchesLoaded($event)\">\r\n        </app-file-metadata>\r\n      </div>\r\n    </div>\r\n    <br />\r\n\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">\r\n        <label class=\"custom-file\">\r\n          <input type=\"file\" id=\"file\" multiple (change)=\"fileSelected($event)\" class=\"custom-file-input form-control\" /> \r\n          <span class=\"custom-file-control btn btn-primary\">Vyber soubory</span>\r\n        </label>\r\n        <button type=\"button\" [disabled]=\"!canUpload()\" (click)=\"onUpload()\" class=\"btn btn-primary\" style=\"float: right\">Nahrát na server</button>\r\n      </div>\r\n      <div class=\"card-block\">\r\n        <div dnd-sortable-container [sortableData]=\"fileItems\" class=\"row\">\r\n          <div *ngFor=\"let fileItem of fileItems; let i = index\" class=\"list-group-item\" class=\"col-sm-12\">\r\n            <app-file-item [fileItem]=\"fileItem\" [categories]=\"categories\" [sources]=\"sources\" [licenses]=\"licenses\" [seasons]=\"seasons\"\r\n                           [teams]=\"teams\" [matches]=\"matches\" [articles]=\"articles\" [baseSelection]=\"baseMetadata\" (itemDelete)=\"onFileDelete($event)\" [index]=\"i\"></app-file-item>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card-block\">\r\n      <span>Upload Endpoint: {{uploadUri}}, Data Endpoint: {{dataUri}}</span>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/file-upload/file-upload.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"file-upload.component.scss","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/file-upload/file-upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__ = __webpack_require__("../../../../angular2-toaster/angular2-toaster.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_upload_service__ = __webpack_require__("../../../../../src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__file_metadata_fileItemMetadataModel__ = __webpack_require__("../../../../../src/app/file-metadata/fileItemMetadataModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__file_item_fileItemModel__ = __webpack_require__("../../../../../src/app/file-item/fileItemModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_code_list_service__ = __webpack_require__("../../../../../src/app/services/code-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__global__ = __webpack_require__("../../../../../src/app/global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_core_log_service__ = __webpack_require__("../../../../../src/app/core/log.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FileUploadComponent = /** @class */ (function () {
    function FileUploadComponent(codeListService, uploadService, global, toaster, logService) {
        this.codeListService = codeListService;
        this.uploadService = uploadService;
        this.global = global;
        this.toaster = toaster;
        this.logService = logService;
        this.fileItems = new Array();
        this.baseMetadata = new __WEBPACK_IMPORTED_MODULE_4__file_metadata_fileItemMetadataModel__["a" /* FileItemMetadataModel */]();
        this.uploadedFileItems = [];
    }
    Object.defineProperty(FileUploadComponent.prototype, "uploadUri", {
        get: function () {
            return this.global.uploadEndpoint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileUploadComponent.prototype, "dataUri", {
        get: function () {
            return this.global.dataEndpoint;
        },
        enumerable: true,
        configurable: true
    });
    FileUploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].forkJoin(this.codeListService.getCategories(), this.codeListService.getSources(), this.codeListService.getLicenses(), this.codeListService.getSeasons(), this.codeListService.getTeams(), this.codeListService.getArticles()).subscribe(function (_a) {
            var categories = _a[0], sources = _a[1], licenses = _a[2], seasons = _a[3], teams = _a[4], articles = _a[5];
            _this.categories = categories;
            _this.sources = sources;
            _this.licenses = licenses;
            _this.seasons = seasons;
            _this.teams = teams;
            _this.articles = articles;
        });
    };
    FileUploadComponent.prototype.onNewMatchesLoaded = function (newMatches) {
        this.matches = newMatches;
    };
    FileUploadComponent.prototype.fileSelected = function (event) {
        var _this = this;
        var fileList = event.target.files;
        if (fileList) {
            Object.keys(fileList).forEach(function (key) {
                _this.fileItems.push(new __WEBPACK_IMPORTED_MODULE_5__file_item_fileItemModel__["a" /* FileItemModel */](fileList[key]));
            });
        }
    };
    FileUploadComponent.prototype.onFileDelete = function (fileItem) {
        this.fileItems = this.fileItems.filter(function (i) { return i !== fileItem; });
    };
    FileUploadComponent.prototype.onUpload = function () {
        // const tasks$ = this.fileItems.map(fileItem => {
        //   return this.uploadService.uploadFileItem(fileItem)
        //     .map(resp => {
        //       this.onUploadItemSuccess(fileItem, resp.itemId);
        //       return <IUploadedFileItem>{
        //         fileItem: fileItem,
        //         newItemId: resp.itemId
        //       }
        //     })
        //     .catch(error => {
        //       this.onUploadItemFailed(fileItem, error);
        //       return Observable.empty();
        //     })
        //   //.filter((uploadedItem: IUploadedFileItem) => uploadedItem !== null)
        // });
        // Observable.forkJoin(tasks$).subscribe(
        //   (uploadedItems: IUploadedFileItem[]) => {
        //     debugger
        //     this.onUploadComplete(uploadedItems)
        //   },
        //   (error) => console.log('Error ' + error),
        //   (() => console.log('Complete'))
        // );
        var _this = this;
        this.uploadedFileItems = [];
        __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].from(this.fileItems)
            .mergeMap(function (fileItem) {
            return _this.uploadService.uploadFileItem(fileItem)
                .map(function (resp) {
                return {
                    fileItem: fileItem,
                    newItemId: resp.itemId
                };
            })
                .catch(function (error) {
                _this.onUploadItemFailed(fileItem, error);
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].empty();
            });
        })
            .subscribe((function (uploadedItem) { return _this.onUploadItemSuccess(uploadedItem.fileItem, uploadedItem.newItemId); }), (function (error) { return console.log('Error', error); }), (function () { return _this.onUploadComplete(); }));
    };
    FileUploadComponent.prototype.canUpload = function () {
        if (this.fileItems && this.fileItems.length > 0) {
            for (var _i = 0, _a = this.fileItems; _i < _a.length; _i++) {
                var fi = _a[_i];
                if (!this.fileMetadataOk(fi.metadata)) {
                    return false;
                }
            }
            return true;
        }
        return false;
    };
    FileUploadComponent.prototype.onUploadItemSuccess = function (fileItem, newItemId) {
        this.toaster.pop('success', 'File uploaded', "File uploaded: " + fileItem.file.name);
        var uploadedItem = this.fileItems.splice(this.fileItems.findIndex(function (i) { return i.order !== fileItem.order; }), 1);
        this.uploadedFileItems.push({ fileItem: fileItem, newItemId: newItemId });
    };
    FileUploadComponent.prototype.onUploadItemFailed = function (fileItem, error) {
        this.logService.error("Upload failed: " + fileItem.file.name, error, fileItem.metadata);
        this.toaster.pop('error', 'Upload failed', "Upload failed for " + fileItem.file.name);
    };
    FileUploadComponent.prototype.onUploadComplete = function () {
        var _this = this;
        var itemsToGallery = this.uploadedFileItems.filter(function (i) { return i.fileItem.metadata.addGallery; });
        if (!itemsToGallery || itemsToGallery.length === 0) {
            return;
        }
        ;
        var itemOrders = itemsToGallery.map(function (i) {
            return {
                itemId: i.newItemId,
                itemOrder: i.fileItem.order
            };
        });
        var galleryType = itemsToGallery[0].fileItem.metadata.selectedGalleryType;
        this.uploadService.uploadToGalery({
            galleryType: galleryType,
            itemId: 0,
            itemOrders: itemOrders
        }).subscribe(function () { return _this.toaster.pop('success', 'Gallery uploaded'); }, function () { return _this.toaster.pop('error', 'Gallery upload failed'); });
    };
    FileUploadComponent.prototype.fileMetadataOk = function (metadata) {
        return metadata.title &&
            metadata.description &&
            metadata.selectedCategory > 0 &&
            metadata.selectedSource > 0 &&
            metadata.selectedLicense > 0;
    };
    FileUploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-file-upload',
            template: __webpack_require__("../../../../../src/app/file-upload/file-upload.component.html"),
            styles: [__webpack_require__("../../../../../src/app/file-upload/file-upload.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_code_list_service__["a" /* CodeListService */],
            __WEBPACK_IMPORTED_MODULE_3__services_upload_service__["a" /* UploadService */],
            __WEBPACK_IMPORTED_MODULE_7__global__["a" /* Global */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_toaster__["b" /* ToasterService */],
            __WEBPACK_IMPORTED_MODULE_8_app_core_log_service__["a" /* LogService */]])
    ], FileUploadComponent);
    return FileUploadComponent;
}());



/***/ }),

/***/ "../../../../../src/app/global.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Global; });
var Global = /** @class */ (function () {
    function Global() {
        this.uploadEndpoint = 'TEST';
        this.dataEndpoint = 'https://www.bohemians.cz/api/uploader';
    }
    return Global;
}());



/***/ }),

/***/ "../../../../../src/app/select-list/select-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group row\">\r\n  <label [for]=\"id\" class=\"col-lg-4 col-form-label\">{{label}}</label>\r\n  <select [disabled]=\"disabled\" [(ngModel)]=\"value\" (change)=\"onSelectionChanged($event)\" [id]=\"id\" class=\"col-lg-8 form-control\">\r\n        <option [ngValue]=\"0\">--- Vyber ---</option>\r\n        <option *ngFor=\"let item of items\" [ngValue]=\"item.id\">{{item.value}}</option>\r\n      </select>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/select-list/select-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectListComponent = /** @class */ (function () {
    function SelectListComponent(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this.selectionChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.propagateChange = function (_) { };
        this.id = this.generateId();
    }
    SelectListComponent_1 = SelectListComponent;
    SelectListComponent.prototype.generateId = function () {
        return Math.random().toString().substring(2);
    };
    Object.defineProperty(SelectListComponent.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (val) {
            if (val !== this.innerValue) {
                this.innerValue = val;
                this.propagateChange(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    SelectListComponent.prototype.writeValue = function (value) {
        if (value !== undefined) {
            this.innerValue = value;
        }
    };
    SelectListComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    SelectListComponent.prototype.registerOnTouched = function () { };
    SelectListComponent.prototype.onSelectionChanged = function (item) {
        this.selectionChanged.emit(item);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", String)
    ], SelectListComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Array)
    ], SelectListComponent.prototype, "items", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(),
        __metadata("design:type", Boolean)
    ], SelectListComponent.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], SelectListComponent.prototype, "selectionChanged", void 0);
    SelectListComponent = SelectListComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-select-list',
            template: __webpack_require__("../../../../../src/app/select-list/select-list.component.html"),
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* forwardRef */])(function () { return SelectListComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Renderer */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], SelectListComponent);
    return SelectListComponent;
    var SelectListComponent_1;
}());



/***/ }),

/***/ "../../../../../src/app/services/code-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global__ = __webpack_require__("../../../../../src/app/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CodeListService = /** @class */ (function () {
    function CodeListService(http, global) {
        this.http = http;
        this.global = global;
        this.baseUrl = this.global.dataEndpoint;
    }
    CodeListService.prototype.getCategories = function () {
        var url = this.baseUrl + "/GetImageCategories";
        return this.http.get(url).map(function (resp) { return resp; });
    };
    CodeListService.prototype.getSources = function () {
        var url = this.baseUrl + "/GetImageSources";
        return this.http.get(url).map(function (resp) { return resp; });
    };
    CodeListService.prototype.getLicenses = function () {
        var url = this.baseUrl + "/GetImageLicenses";
        return this.http.get(url).map(function (resp) { return resp; });
    };
    CodeListService.prototype.getSeasons = function () {
        var url = this.baseUrl + "/GetRocniky";
        return this.http.get(url).map(function (resp) { return resp; });
    };
    CodeListService.prototype.getTeams = function () {
        var url = this.baseUrl + "/GetTymy";
        return this.http.get(url).map(function (resp) { return resp; });
    };
    CodeListService.prototype.getMatches = function (seasonId, teamId) {
        var url = this.baseUrl + "/GetZapasy";
        return this.http.post(url, { rocnikId: seasonId, bohemkaTymId: teamId }).map(function (resp) { return resp; });
    };
    CodeListService.prototype.getArticles = function () {
        var url = this.baseUrl + "/GetArticles";
        return this.http.get(url).map(function (resp) { return resp; });
    };
    CodeListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__global__["a" /* Global */]])
    ], CodeListService);
    return CodeListService;
}());



/***/ }),

/***/ "../../../../../src/app/services/upload-mock.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploaderMockedData; });
var UploaderMockedData = /** @class */ (function () {
    function UploaderMockedData() {
    }
    UploaderMockedData.prototype.createDb = function () {
        var fileItems = [];
        var galleries = [];
        return { fileItems: fileItems, galleries: galleries };
    };
    UploaderMockedData.prototype.post = function (request) {
        var _this = this;
        var collectionName = request.collectionName;
        if (collectionName === 'fileItems' || collectionName === 'galleries') {
            return request.utils.createResponse$(function () {
                var randId = Math.floor((Math.random() * 1000) + 1);
                return randId % 2 === 0
                    ? _this.createdResponse({
                        itemId: randId
                    })
                    : _this.badRequestResponse();
            });
        }
        return undefined;
    };
    UploaderMockedData.prototype.createdResponse = function (newItem) {
        return {
            status: 201,
            body: newItem
        };
    };
    UploaderMockedData.prototype.badRequestResponse = function () {
        return {
            status: 400,
            statusText: 'Bad request'
        };
    };
    return UploaderMockedData;
}());



/***/ }),

/***/ "../../../../../src/app/services/upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global__ = __webpack_require__("../../../../../src/app/global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadService = /** @class */ (function () {
    function UploadService(http, global) {
        this.http = http;
        this.global = global;
    }
    UploadService.prototype.uploadFileItem = function (fileItem) {
        // if (this.global.uploadEndpoint === 'TEST') {
        //   console.log(JSON.stringify(fileItem));
        //   return Observable.of();
        // }
        // console.log(`FileItem order ${fileItem.order}`);
        return this.http.post(this.apiDomain + "/fileItems", this.mapToFormData(fileItem));
    };
    UploadService.prototype.uploadToGalery = function (uploaderGallery) {
        return this.http.post(this.apiDomain + "/galleries", uploaderGallery);
    };
    Object.defineProperty(UploadService.prototype, "apiDomain", {
        get: function () {
            return this.global.uploadEndpoint === 'TEST' ? 'api/mock' : 'api';
        },
        enumerable: true,
        configurable: true
    });
    UploadService.prototype.mapToFormData = function (fileItem) {
        var formData = new FormData();
        for (var name_1 in fileItem.metadata) {
            if (typeof (fileItem.metadata[name_1]) !== 'function') {
                formData.append(name_1, fileItem.metadata[name_1]);
            }
        }
        formData.append('order', fileItem.order.toString());
        formData.append('file', fileItem.file);
        return formData;
    };
    UploadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["y" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__global__["a" /* Global */]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/selected-gallery-type-enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyEnums; });
var MyEnums;
(function (MyEnums) {
    var SelectedGalleryTypeEnum;
    (function (SelectedGalleryTypeEnum) {
        SelectedGalleryTypeEnum[SelectedGalleryTypeEnum["Article"] = 1] = "Article";
        SelectedGalleryTypeEnum[SelectedGalleryTypeEnum["Match"] = 2] = "Match";
    })(SelectedGalleryTypeEnum = MyEnums.SelectedGalleryTypeEnum || (MyEnums.SelectedGalleryTypeEnum = {}));
})(MyEnums || (MyEnums = {}));


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map