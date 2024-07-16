(self["webpackChunkace_linters_root"] = self["webpackChunkace_linters_root"] || []).push([[5031],{

/***/ 5031:
/***/ (function(module) {

(function webpackUniversalModuleDefinition(root, factory) {
    if (true) module.exports = factory();
    else { var i, a; }
})(this, ()=>{
    return /******/ (()=>{
        /******/ "use strict";
        /******/ var __webpack_modules__ = {
            /***/ 6002: /***/ (__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_553__)=>{
                /* harmony export */ __nested_webpack_require_553__.d(__nested_webpack_exports__, {
                    /* harmony export */ Cs: ()=>/* binding */ MessageType
                });
                /* unused harmony exports BaseMessage, InitMessage, FormatMessage, CompleteMessage, ResolveCompletionMessage, HoverMessage, ValidateMessage, ChangeMessage, DeltasMessage, ChangeModeMessage, ChangeOptionsMessage, CloseDocumentMessage, DisposeMessage, GlobalOptionsMessage, ConfigureFeaturesMessage, SignatureHelpMessage, DocumentHighlightMessage, GetSemanticTokensMessage */ function _define_property(obj, key, value) {
                    if (key in obj) {
                        Object.defineProperty(obj, key, {
                            value: value,
                            enumerable: true,
                            configurable: true,
                            writable: true
                        });
                    } else {
                        obj[key] = value;
                    }
                    return obj;
                }
                class BaseMessage {
                    constructor(sessionId){
                        _define_property(this, "sessionId", void 0);
                        _define_property(this, "version", void 0);
                        this.sessionId = sessionId;
                    }
                }
                class InitMessage extends /* unused pure expression or super */ (null && 0) {
                    constructor(sessionId, value, version, mode, options){
                        super(sessionId);
                        _define_property(this, "type", MessageType.init);
                        _define_property(this, "mode", void 0);
                        _define_property(this, "options", void 0);
                        _define_property(this, "value", void 0);
                        _define_property(this, "version", void 0);
                        this.version = version;
                        this.options = options;
                        this.mode = mode;
                        this.value = value;
                    }
                }
                class FormatMessage extends /* unused pure expression or super */ (null && 0) {
                    constructor(sessionId, value, format){
                        super(sessionId);
                        _define_property(this, "type", MessageType.format);
                        _define_property(this, "value", void 0);
                        _define_property(this, "format", void 0);
                        this.value = value;
                        this.format = format;
                    }
                }
                class CompleteMessage extends /* unused pure expression or super */ (null && 0) {
                    constructor(sessionId, value){
                        super(sessionId);
                        _define_property(this, "type", MessageType.complete);
                        _define_property(this, "value", void 0);
                        this.value = value;
                    }
                }
                class ResolveCompletionMessage extends /* unused pure expression or super */ (null && 0) {
                    constructor(sessionId, value){
                        super(sessionId);
                        _define_property(this, "type", MessageType.resolveCompletion);
                        _define_property(this, "value", void 0);
                        this.value = value;
                    }
                }
                class HoverMessage extends /* unused pure expression or super */ (null && 0) {
                    constructor(sessionId, value){
                        super(sessionId);
                        _define_property(this, "type", MessageType.hover);
                        _define_property(this, "value", void 0);
                        this.value = value;
                    }
                }
                class ValidateMessage extends /* unused pure expression or super */ (null && 0) {
                    constructor(sessionId){
                        super(sessionId);
                        _define_property(this, "type", MessageType.validate);
                    }
                }
                class ChangeMessage extends /* unused pure expression or super */ (null && 0) {
                    constructor(sessionId, value, version){
                        super(sessionId);
                        _define_property(this, "type", MessageType.change);
                        _define_property(this, "value", void 0);
                        _define_property(this, "version", void 0);
                        this.value = value;
                        this.version = version;
                    }
                }
                class DeltasMessage extends /* unused pure expression or super */ (null && 0) {
                    constructor(sessionId, value, version){
                        super(sessionId);
                        _define_property(this, "type", MessageType.applyDelta);
                        _define_property(this, "value", void 0);
                        _define_property(this, "version", void 0);
                        this.value = value;
                        this.version = version;
                    }
                }
                class ChangeModeMessage extends /* unused pure expression or super */ (null && 0) {
                    constructor(sessionId, value, version, mode){
                        super(sessionId);
                        _define_property(this, "type", MessageType.changeMode);
                        _define_property(this, "mode", void 0);
                        _define_property(this, "value", void 0);
                        _define_property(this, "version", void 0);
                        this.value = value;
                        this.mode = mode;
                        this.version = version;
                    }
                }
                class ChangeOptionsMessage extends /* unused pure expression or super */ (null && 0) {
                    constructor(sessionId, options, merge = false){
                        super(sessionId);
                        _define_property(this, "type", MessageType.changeOptions);
                        _define_property(this, "options", void 0);
                        _define_property(this, "merge", void 0);
                        this.options = options;
                        this.merge = merge;
                    }
                }
                class CloseDocumentMessage extends /* unused pure expression or super */ (null && 0) {
                    constructor(sessionId){
                        super(sessionId);
                        _define_property(this, "type", MessageType.closeDocument);
                    }
                }
                class DisposeMessage extends /* unused pure expression or super */ (null && 0) {
                    constructor(){
                        super("");
                        _define_property(this, "type", MessageType.dispose);
                    }
                }
                class GlobalOptionsMessage {
                    constructor(serviceName, options, merge){
                        _define_property(this, "type", MessageType.globalOptions);
                        _define_property(this, "serviceName", void 0);
                        _define_property(this, "options", void 0);
                        _define_property(this, "merge", void 0);
                        this.serviceName = serviceName;
                        this.options = options;
                        this.merge = merge;
                    }
                }
                class ConfigureFeaturesMessage {
                    constructor(serviceName, options){
                        _define_property(this, "type", MessageType.configureFeatures);
                        _define_property(this, "serviceName", void 0);
                        _define_property(this, "options", void 0);
                        this.serviceName = serviceName;
                        this.options = options;
                    }
                }
                class SignatureHelpMessage extends /* unused pure expression or super */ (null && 0) {
                    constructor(sessionId, value){
                        super(sessionId);
                        _define_property(this, "type", MessageType.signatureHelp);
                        _define_property(this, "value", void 0);
                        this.value = value;
                    }
                }
                class DocumentHighlightMessage extends /* unused pure expression or super */ (null && 0) {
                    constructor(sessionId, value){
                        super(sessionId);
                        _define_property(this, "type", MessageType.documentHighlight);
                        _define_property(this, "value", void 0);
                        this.value = value;
                    }
                }
                class GetSemanticTokensMessage extends /* unused pure expression or super */ (null && 0) {
                    constructor(sessionId, value){
                        super(sessionId);
                        _define_property(this, "type", MessageType.getSemanticTokens);
                        _define_property(this, "value", void 0);
                        this.value = value;
                    }
                }
                var MessageType;
                (function(MessageType) {
                    MessageType[MessageType["init"] = 0] = "init";
                    MessageType[MessageType["format"] = 1] = "format";
                    MessageType[MessageType["complete"] = 2] = "complete";
                    MessageType[MessageType["resolveCompletion"] = 3] = "resolveCompletion";
                    MessageType[MessageType["change"] = 4] = "change";
                    MessageType[MessageType["hover"] = 5] = "hover";
                    MessageType[MessageType["validate"] = 6] = "validate";
                    MessageType[MessageType["applyDelta"] = 7] = "applyDelta";
                    MessageType[MessageType["changeMode"] = 8] = "changeMode";
                    MessageType[MessageType["changeOptions"] = 9] = "changeOptions";
                    MessageType[MessageType["closeDocument"] = 10] = "closeDocument";
                    MessageType[MessageType["globalOptions"] = 11] = "globalOptions";
                    MessageType[MessageType["configureFeatures"] = 12] = "configureFeatures";
                    MessageType[MessageType["signatureHelp"] = 13] = "signatureHelp";
                    MessageType[MessageType["documentHighlight"] = 14] = "documentHighlight";
                    MessageType[MessageType["dispose"] = 15] = "dispose";
                    MessageType[MessageType["capabilitiesChange"] = 16] = "capabilitiesChange";
                    MessageType[MessageType["getSemanticTokens"] = 17] = "getSemanticTokens";
                })(MessageType || (MessageType = {}));
            /***/ },
            /***/ 6297: /***/ (__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_11914__)=>{
                /* harmony export */ __nested_webpack_require_11914__.d(__nested_webpack_exports__, {
                    /* harmony export */ Dw: ()=>/* binding */ notEmpty,
                    /* harmony export */ PM: ()=>/* binding */ mergeObjects
                });
                /* unused harmony exports mergeRanges, checkValueAgainstRegexpArray */ function mergeObjects(obj1, obj2, excludeUndefined = false) {
                    if (!obj1) return obj2;
                    if (!obj2) return obj1;
                    if (excludeUndefined) {
                        obj1 = excludeUndefinedValues(obj1);
                        obj2 = excludeUndefinedValues(obj2);
                    }
                    const mergedObjects = {
                        ...obj2,
                        ...obj1
                    }; // Give priority to obj1 values by spreading obj2 first, then obj1
                    for (const key of Object.keys(mergedObjects)){
                        if (obj1[key] && obj2[key]) {
                            if (Array.isArray(obj1[key])) {
                                mergedObjects[key] = obj1[key].concat(obj2[key]);
                            } else if (Array.isArray(obj2[key])) {
                                mergedObjects[key] = obj2[key].concat(obj1[key]);
                            } else if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
                                mergedObjects[key] = mergeObjects(obj1[key], obj2[key]);
                            }
                        }
                    }
                    return mergedObjects;
                }
                function excludeUndefinedValues(obj) {
                    const filteredEntries = Object.entries(obj).filter(([_, value])=>value !== undefined);
                    return Object.fromEntries(filteredEntries);
                }
                function notEmpty(value) {
                    return value !== null && value !== undefined;
                }
                //taken with small changes from ace-code
                function mergeRanges(ranges) {
                    var list = ranges;
                    list = list.sort(function(a, b) {
                        return comparePoints(a.start, b.start);
                    });
                    var next = list[0], range;
                    for(var i = 1; i < list.length; i++){
                        range = next;
                        next = list[i];
                        var cmp = comparePoints(range.end, next.start);
                        if (cmp < 0) continue;
                        if (cmp == 0 && !range.isEmpty() && !next.isEmpty()) continue;
                        if (comparePoints(range.end, next.end) < 0) {
                            range.end.row = next.end.row;
                            range.end.column = next.end.column;
                        }
                        list.splice(i, 1);
                        next = range;
                        i--;
                    }
                    return list;
                }
                function comparePoints(p1, p2) {
                    return p1.row - p2.row || p1.column - p2.column;
                }
                function checkValueAgainstRegexpArray(value, regexpArray) {
                    if (!regexpArray) {
                        return false;
                    }
                    for(let i = 0; i < regexpArray.length; i++){
                        if (regexpArray[i].test(value)) {
                            return true;
                        }
                    }
                    return false;
                }
            /***/ }
        };
        /************************************************************************/ /******/ // The module cache
        /******/ var __webpack_module_cache__ = {};
        /******/ /******/ // The require function
        /******/ function __nested_webpack_require_15841__(moduleId) {
            /******/ // Check if module is in cache
            /******/ var cachedModule = __webpack_module_cache__[moduleId];
            /******/ if (cachedModule !== undefined) {
                /******/ return cachedModule.exports;
            /******/ }
            /******/ // Create a new module (and put it into the cache)
            /******/ var module1 = __webpack_module_cache__[moduleId] = {
                /******/ // no module.id needed
                /******/ // no module.loaded needed
                /******/ exports: {}
            };
            /******/ /******/ // Execute the module function
            /******/ __webpack_modules__[moduleId](module1, module1.exports, __nested_webpack_require_15841__);
            /******/ /******/ // Return the exports of the module
            /******/ return module1.exports;
        /******/ }
        /******/ /************************************************************************/ /******/ /* webpack/runtime/define property getters */ /******/ (()=>{
            /******/ // define getter functions for harmony exports
            /******/ __nested_webpack_require_15841__.d = (exports1, definition)=>{
                /******/ for(var key in definition){
                    /******/ if (__nested_webpack_require_15841__.o(definition, key) && !__nested_webpack_require_15841__.o(exports1, key)) {
                        /******/ Object.defineProperty(exports1, key, {
                            enumerable: true,
                            get: definition[key]
                        });
                    /******/ }
                /******/ }
            /******/ };
        /******/ })();
        /******/ /******/ /* webpack/runtime/hasOwnProperty shorthand */ /******/ (()=>{
            /******/ __nested_webpack_require_15841__.o = (obj, prop)=>Object.prototype.hasOwnProperty.call(obj, prop);
        /******/ })();
        /******/ /******/ /* webpack/runtime/make namespace object */ /******/ (()=>{
            /******/ // define __esModule on exports
            /******/ __nested_webpack_require_15841__.r = (exports1)=>{
                /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                    /******/ Object.defineProperty(exports1, Symbol.toStringTag, {
                        value: 'Module'
                    });
                /******/ }
                /******/ Object.defineProperty(exports1, '__esModule', {
                    value: true
                });
            /******/ };
        /******/ })();
        /******/ /************************************************************************/ var __nested_webpack_exports__ = {};
        // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
        (()=>{
            __nested_webpack_require_15841__.r(__nested_webpack_exports__);
            /* harmony export */ __nested_webpack_require_15841__.d(__nested_webpack_exports__, {
                /* harmony export */ ServiceManager: ()=>/* binding */ ServiceManager
            });
            /* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_15841__(6297);
            /* harmony import */ var _message_types__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_15841__(6002);
            function _define_property(obj, key, value) {
                if (key in obj) {
                    Object.defineProperty(obj, key, {
                        value: value,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    });
                } else {
                    obj[key] = value;
                }
                return obj;
            }
            class ServiceManager {
                async getServicesCapabilitiesAfterCallback(documentIdentifier, message, callback) {
                    let services = await callback(documentIdentifier, message.value, message.mode, message.options);
                    if (services) {
                        return Object.keys(services).reduce((acc, key)=>{
                            var _services_key_serviceInstance, _services_key;
                            acc[key] = ((_services_key = services[key]) === null || _services_key === void 0 ? void 0 : (_services_key_serviceInstance = _services_key.serviceInstance) === null || _services_key_serviceInstance === void 0 ? void 0 : _services_key_serviceInstance.serviceCapabilities) || null;
                            return acc;
                        }, {});
                    }
                }
                async aggregateFeatureResponses(serviceInstances, feature, methodName, documentIdentifier, value) {
                    return (await Promise.all(this.filterByFeature(serviceInstances, feature).map(async (service)=>{
                        return service[methodName](documentIdentifier, value);
                    }))).filter(_utils__WEBPACK_IMPORTED_MODULE_1__ /* .notEmpty */ .Dw);
                }
                applyOptionsToServices(serviceInstances, sessionID, options) {
                    serviceInstances.forEach((service)=>{
                        service.setOptions(sessionID, options);
                    });
                }
                async disposeAll() {
                    var services = this.$services;
                    for(let serviceName in services){
                        var _services_serviceName_serviceInstance, _services_serviceName;
                        await ((_services_serviceName = services[serviceName]) === null || _services_serviceName === void 0 ? void 0 : (_services_serviceName_serviceInstance = _services_serviceName.serviceInstance) === null || _services_serviceName_serviceInstance === void 0 ? void 0 : _services_serviceName_serviceInstance.dispose());
                    }
                }
                static async $initServiceInstance(service, ctx) {
                    let module1;
                    if ('type' in service) {
                        if ([
                            "socket",
                            "webworker"
                        ].includes(service.type)) {
                            module1 = await service.module();
                            service.serviceInstance = new module1["LanguageClient"](service, ctx);
                        } else throw "Unknown service type";
                    } else {
                        module1 = await service.module();
                        service.serviceInstance = new module1[service.className](service.modes);
                    }
                    if (service.options || service.initializationOptions) {
                        var _service_options, _ref;
                        service.serviceInstance.setGlobalOptions((_ref = (_service_options = service.options) !== null && _service_options !== void 0 ? _service_options : service.initializationOptions) !== null && _ref !== void 0 ? _ref : {});
                    }
                    service.serviceInstance.serviceData = service;
                    return service.serviceInstance;
                }
                async $getServicesInstancesByMode(mode) {
                    let services = this.findServicesByMode(mode);
                    if (Object.keys(services).length === 0) {
                        return [];
                    }
                    for(let serviceName in services){
                        await this.initializeService(serviceName);
                    }
                    return services;
                }
                async initializeService(serviceName) {
                    let service = this.$services[serviceName];
                    if (!service.serviceInstance) {
                        if (!this.serviceInitPromises[service.id]) {
                            this.serviceInitPromises[service.id] = ServiceManager.$initServiceInstance(service, this.ctx).then((instance)=>{
                                service.serviceInstance = instance;
                                service.serviceInstance.serviceName = serviceName;
                                delete this.serviceInitPromises[service.id]; // Clean up
                                return instance;
                            });
                        }
                        return this.serviceInitPromises[service.id];
                    } else {
                        if (!service.serviceInstance.serviceName) {
                            service.serviceInstance.serviceName = serviceName;
                        }
                        return service.serviceInstance;
                    }
                }
                setGlobalOptions(serviceName, options, merge = false) {
                    let service = this.$services[serviceName];
                    if (!service) return;
                    service.options = merge ? (0, _utils__WEBPACK_IMPORTED_MODULE_1__ /* .mergeObjects */ .PM)(options, service.options) : options;
                    if (service.serviceInstance) {
                        service.serviceInstance.setGlobalOptions(service.options);
                    }
                }
                async addDocument(documentIdentifier, documentValue, mode, options) {
                    if (!mode || !/^ace\/mode\//.test(mode)) return;
                    mode = mode.replace("ace/mode/", "");
                    let services = await this.$getServicesInstancesByMode(mode);
                    if (Object.keys(services).length === 0) return;
                    let documentItem = {
                        uri: documentIdentifier.uri,
                        version: documentIdentifier.version,
                        languageId: mode,
                        text: documentValue
                    };
                    Object.values(services).forEach((el)=>el.serviceInstance.addDocument(documentItem));
                    this.$sessionIDToMode[documentIdentifier.uri] = mode;
                    return services;
                }
                async changeDocumentMode(documentIdentifier, value, mode, options) {
                    this.removeDocument(documentIdentifier);
                    return await this.addDocument(documentIdentifier, value, mode, options);
                }
                removeDocument(document) {
                    let services = this.getServicesInstances(document.uri);
                    if (services.length > 0) {
                        services.forEach((el)=>el.removeDocument(document));
                        delete this.$sessionIDToMode[document.uri];
                    }
                }
                getServicesInstances(sessionID) {
                    let mode = this.$sessionIDToMode[sessionID];
                    if (!mode) return []; //TODO:
                    let services = this.findServicesByMode(mode);
                    return Object.values(services).map((el)=>el.serviceInstance).filter(_utils__WEBPACK_IMPORTED_MODULE_1__ /* .notEmpty */ .Dw);
                }
                filterByFeature(serviceInstances, feature) {
                    return serviceInstances.filter((el)=>{
                        if (!el.serviceData.features[feature]) {
                            return false;
                        }
                        const capabilities = el.serviceCapabilities;
                        switch(feature){
                            case "hover":
                                var _capabilities_hoverProvider;
                                return capabilities.hoverProvider == true || typeof capabilities.hoverProvider == 'object' && ((_capabilities_hoverProvider = capabilities.hoverProvider) === null || _capabilities_hoverProvider === void 0 ? void 0 : _capabilities_hoverProvider.workDoneProgress) == true;
                            case "completion":
                                return capabilities.completionProvider != undefined;
                            case "completionResolve":
                                var _capabilities_completionProvider;
                                return ((_capabilities_completionProvider = capabilities.completionProvider) === null || _capabilities_completionProvider === void 0 ? void 0 : _capabilities_completionProvider.resolveProvider) === true;
                            case "format":
                                return capabilities.documentRangeFormattingProvider == true || capabilities.documentFormattingProvider == true;
                            case "diagnostics":
                                return capabilities.diagnosticProvider != undefined;
                            case "signatureHelp":
                                return capabilities.signatureHelpProvider != undefined;
                            case "documentHighlight":
                                return capabilities.documentHighlightProvider == true;
                            case "semanticTokens":
                                return capabilities.semanticTokensProvider != undefined;
                        }
                    });
                }
                findServicesByMode(mode) {
                    let servicesWithName = {};
                    Object.entries(this.$services).forEach(([key, value])=>{
                        let extensions = value.modes.split('|');
                        if (extensions.includes(mode)) servicesWithName[key] = this.$services[key];
                    });
                    return servicesWithName;
                }
                registerService(name, service) {
                    service.id = name;
                    service.features = this.setDefaultFeaturesState(service.features);
                    this.$services[name] = service;
                }
                registerServer(name, clientConfig) {
                    clientConfig.id = name;
                    clientConfig.className = "LanguageClient";
                    clientConfig.features = this.setDefaultFeaturesState(clientConfig.features);
                    this.$services[name] = clientConfig;
                }
                configureFeatures(name, features) {
                    features = this.setDefaultFeaturesState(features);
                    if (!this.$services[name]) return;
                    this.$services[name].features = features;
                }
                setDefaultFeaturesState(serviceFeatures) {
                    var _features, _features1, _features2, _features3, _features4, _features5, _features6, _features7;
                    let features = serviceFeatures !== null && serviceFeatures !== void 0 ? serviceFeatures : {};
                    var _hover;
                    (_hover = (_features = features).hover) !== null && _hover !== void 0 ? _hover : _features.hover = true;
                    var _completion;
                    (_completion = (_features1 = features).completion) !== null && _completion !== void 0 ? _completion : _features1.completion = true;
                    var _completionResolve;
                    (_completionResolve = (_features2 = features).completionResolve) !== null && _completionResolve !== void 0 ? _completionResolve : _features2.completionResolve = true;
                    var _format;
                    (_format = (_features3 = features).format) !== null && _format !== void 0 ? _format : _features3.format = true;
                    var _diagnostics;
                    (_diagnostics = (_features4 = features).diagnostics) !== null && _diagnostics !== void 0 ? _diagnostics : _features4.diagnostics = true;
                    var _signatureHelp;
                    (_signatureHelp = (_features5 = features).signatureHelp) !== null && _signatureHelp !== void 0 ? _signatureHelp : _features5.signatureHelp = true;
                    var _documentHighlight;
                    (_documentHighlight = (_features6 = features).documentHighlight) !== null && _documentHighlight !== void 0 ? _documentHighlight : _features6.documentHighlight = true;
                    var _semanticTokens;
                    (_semanticTokens = (_features7 = features).semanticTokens) !== null && _semanticTokens !== void 0 ? _semanticTokens : _features7.semanticTokens = true;
                    return features;
                }
                constructor(ctx){
                    _define_property(this, "$services", {});
                    _define_property(this, "serviceInitPromises", {});
                    _define_property(this, "$sessionIDToMode", {});
                    _define_property(this, "ctx", void 0);
                    this.ctx = ctx;
                    let doValidation = async (document, servicesInstances)=>{
                        servicesInstances !== null && servicesInstances !== void 0 ? servicesInstances : servicesInstances = this.getServicesInstances(document.uri);
                        if (servicesInstances.length === 0) {
                            return;
                        }
                        //this is list of documents linked to services
                        let sessionIDList = Object.keys(servicesInstances[0].documents);
                        servicesInstances = this.filterByFeature(servicesInstances, "diagnostics");
                        servicesInstances = servicesInstances.filter((el)=>{
                            return el.serviceCapabilities.diagnosticProvider;
                        });
                        if (servicesInstances.length === 0) {
                            return;
                        }
                        let postMessage = {
                            "type": _message_types__WEBPACK_IMPORTED_MODULE_0__ /* .MessageType */ .Cs.validate
                        };
                        for (let sessionID of sessionIDList){
                            var _ref;
                            let diagnostics = (_ref = await Promise.all(servicesInstances.map((el)=>{
                                return el.doValidation({
                                    uri: sessionID
                                });
                            }))) !== null && _ref !== void 0 ? _ref : [];
                            postMessage["sessionId"] = sessionID;
                            postMessage["value"] = diagnostics.flat();
                            ctx.postMessage(postMessage);
                        }
                    };
                    let provideValidationForServiceInstance = async (serviceName)=>{
                        let service = this.$services[serviceName];
                        if (!service) return;
                        var serviceInstance = service.serviceInstance;
                        if (serviceInstance) await doValidation(undefined, [
                            serviceInstance
                        ]);
                    };
                    ctx.addEventListener("message", async (ev)=>{
                        let message = ev.data;
                        var _message_sessionId;
                        let sessionID = (_message_sessionId = message["sessionId"]) !== null && _message_sessionId !== void 0 ? _message_sessionId : "";
                        let version = message["version"];
                        let postMessage = {
                            "type": message.type,
                            "sessionId": sessionID
                        };
                        let serviceInstances = this.getServicesInstances(sessionID);
                        let documentIdentifier = {
                            uri: sessionID,
                            version: version
                        };
                        switch(message.type){
                            case _message_types__WEBPACK_IMPORTED_MODULE_0__ /* .MessageType */ .Cs.format:
                                serviceInstances = this.filterByFeature(serviceInstances, "format");
                                if (serviceInstances.length > 0) {
                                    //we will use only first service to format
                                    postMessage["value"] = await serviceInstances[0].format(documentIdentifier, message.value, message.format);
                                }
                                break;
                            case _message_types__WEBPACK_IMPORTED_MODULE_0__ /* .MessageType */ .Cs.complete:
                                postMessage["value"] = (await Promise.all(this.filterByFeature(serviceInstances, "completion").map(async (service)=>{
                                    return {
                                        completions: await service.doComplete(documentIdentifier, message["value"]),
                                        service: service.serviceData.className
                                    };
                                }))).filter(_utils__WEBPACK_IMPORTED_MODULE_1__ /* .notEmpty */ .Dw);
                                break;
                            case _message_types__WEBPACK_IMPORTED_MODULE_0__ /* .MessageType */ .Cs.resolveCompletion:
                                var _this_filterByFeature_find;
                                let serviceName = message.value["service"];
                                postMessage["value"] = await ((_this_filterByFeature_find = this.filterByFeature(serviceInstances, "completionResolve").find((service)=>{
                                    if (service.serviceData.className === serviceName) {
                                        return service;
                                    }
                                })) === null || _this_filterByFeature_find === void 0 ? void 0 : _this_filterByFeature_find.doResolve(message.value));
                                break;
                            case _message_types__WEBPACK_IMPORTED_MODULE_0__ /* .MessageType */ .Cs.change:
                                serviceInstances.forEach((service)=>{
                                    service.setValue(documentIdentifier, message["value"]);
                                });
                                await doValidation(documentIdentifier, serviceInstances);
                                break;
                            case _message_types__WEBPACK_IMPORTED_MODULE_0__ /* .MessageType */ .Cs.applyDelta:
                                serviceInstances.forEach((service)=>{
                                    service.applyDeltas(documentIdentifier, message["value"]);
                                });
                                await doValidation(documentIdentifier, serviceInstances);
                                break;
                            case _message_types__WEBPACK_IMPORTED_MODULE_0__ /* .MessageType */ .Cs.hover:
                                postMessage["value"] = await this.aggregateFeatureResponses(serviceInstances, "hover", "doHover", documentIdentifier, message.value);
                                break;
                            case _message_types__WEBPACK_IMPORTED_MODULE_0__ /* .MessageType */ .Cs.validate:
                                postMessage["value"] = await doValidation(documentIdentifier, serviceInstances);
                                break;
                            case _message_types__WEBPACK_IMPORTED_MODULE_0__ /* .MessageType */ .Cs.init:
                                postMessage["value"] = await this.getServicesCapabilitiesAfterCallback(documentIdentifier, message, this.addDocument.bind(this));
                                await doValidation(documentIdentifier);
                                break;
                            case _message_types__WEBPACK_IMPORTED_MODULE_0__ /* .MessageType */ .Cs.changeMode:
                                postMessage["value"] = await this.getServicesCapabilitiesAfterCallback(documentIdentifier, message, this.changeDocumentMode.bind(this));
                                await doValidation(documentIdentifier);
                                break;
                            case _message_types__WEBPACK_IMPORTED_MODULE_0__ /* .MessageType */ .Cs.changeOptions:
                                this.applyOptionsToServices(serviceInstances, sessionID, message.options);
                                await doValidation(documentIdentifier, serviceInstances);
                                break;
                            case _message_types__WEBPACK_IMPORTED_MODULE_0__ /* .MessageType */ .Cs.closeDocument:
                                this.removeDocument(documentIdentifier);
                                await doValidation(documentIdentifier, serviceInstances);
                                break;
                            case _message_types__WEBPACK_IMPORTED_MODULE_0__ /* .MessageType */ .Cs.dispose:
                                await this.disposeAll();
                                break;
                            case _message_types__WEBPACK_IMPORTED_MODULE_0__ /* .MessageType */ .Cs.globalOptions:
                                this.setGlobalOptions(message.serviceName, message.options, message.merge);
                                await provideValidationForServiceInstance(message.serviceName);
                                break;
                            case _message_types__WEBPACK_IMPORTED_MODULE_0__ /* .MessageType */ .Cs.configureFeatures:
                                this.configureFeatures(message.serviceName, message.options);
                                await provideValidationForServiceInstance(message.serviceName);
                                break;
                            case _message_types__WEBPACK_IMPORTED_MODULE_0__ /* .MessageType */ .Cs.signatureHelp:
                                postMessage["value"] = await this.aggregateFeatureResponses(serviceInstances, "signatureHelp", "provideSignatureHelp", documentIdentifier, message.value);
                                break;
                            case _message_types__WEBPACK_IMPORTED_MODULE_0__ /* .MessageType */ .Cs.documentHighlight:
                                let highlights = await this.aggregateFeatureResponses(serviceInstances, "documentHighlight", "findDocumentHighlights", documentIdentifier, message.value);
                                postMessage["value"] = highlights.flat();
                                break;
                            case _message_types__WEBPACK_IMPORTED_MODULE_0__ /* .MessageType */ .Cs.getSemanticTokens:
                                serviceInstances = this.filterByFeature(serviceInstances, "semanticTokens");
                                if (serviceInstances.length > 0) {
                                    //we will use only first service
                                    postMessage["value"] = await serviceInstances[0].getSemanticTokens(documentIdentifier, message.value);
                                }
                                break;
                        }
                        ctx.postMessage(postMessage);
                    });
                }
            }
        })();
        /******/ return __nested_webpack_exports__;
    /******/ })();
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxRQUFRMUcsS0FBSztnQ0FDeEc7Z0NBQ0E7d0JBQ1I7d0JBQ0FxSSxJQUFJOEUsV0FBVyxDQUFDQTtvQkFDcEI7Z0JBQ0o7WUFDSjtRQUVBO1FBRUEsTUFBTSxHQUFJLE9BQU8zTiwwQkFBbUJBO0lBQ3BDLE1BQU0sR0FBRztBQUVUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWNlLWxpbnRlcnMtcm9vdC8uL3BhY2thZ2VzL2FjZS1saW50ZXJzL2J1aWxkL3NlcnZpY2UtbWFuYWdlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodGhpcywgKCkgPT4ge1xucmV0dXJuIC8qKioqKiovICgoKSA9PiB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0XCJ1c2Ugc3RyaWN0XCI7XG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlc19fID0gKHtcblxuLyoqKi8gNjAwMjpcbi8qKiovICgoX191bnVzZWRfd2VicGFja19tb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pID0+IHtcblxuLyogaGFybW9ueSBleHBvcnQgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIHtcbi8qIGhhcm1vbnkgZXhwb3J0ICovICAgQ3M6ICgpID0+ICgvKiBiaW5kaW5nICovIE1lc3NhZ2VUeXBlKVxuLyogaGFybW9ueSBleHBvcnQgKi8gfSk7XG4vKiB1bnVzZWQgaGFybW9ueSBleHBvcnRzIEJhc2VNZXNzYWdlLCBJbml0TWVzc2FnZSwgRm9ybWF0TWVzc2FnZSwgQ29tcGxldGVNZXNzYWdlLCBSZXNvbHZlQ29tcGxldGlvbk1lc3NhZ2UsIEhvdmVyTWVzc2FnZSwgVmFsaWRhdGVNZXNzYWdlLCBDaGFuZ2VNZXNzYWdlLCBEZWx0YXNNZXNzYWdlLCBDaGFuZ2VNb2RlTWVzc2FnZSwgQ2hhbmdlT3B0aW9uc01lc3NhZ2UsIENsb3NlRG9jdW1lbnRNZXNzYWdlLCBEaXNwb3NlTWVzc2FnZSwgR2xvYmFsT3B0aW9uc01lc3NhZ2UsIENvbmZpZ3VyZUZlYXR1cmVzTWVzc2FnZSwgU2lnbmF0dXJlSGVscE1lc3NhZ2UsIERvY3VtZW50SGlnaGxpZ2h0TWVzc2FnZSwgR2V0U2VtYW50aWNUb2tlbnNNZXNzYWdlICovXG5mdW5jdGlvbiBfZGVmaW5lX3Byb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG5jbGFzcyBCYXNlTWVzc2FnZSB7XG4gICAgY29uc3RydWN0b3Ioc2Vzc2lvbklkKXtcbiAgICAgICAgX2RlZmluZV9wcm9wZXJ0eSh0aGlzLCBcInNlc3Npb25JZFwiLCB2b2lkIDApO1xuICAgICAgICBfZGVmaW5lX3Byb3BlcnR5KHRoaXMsIFwidmVyc2lvblwiLCB2b2lkIDApO1xuICAgICAgICB0aGlzLnNlc3Npb25JZCA9IHNlc3Npb25JZDtcbiAgICB9XG59XG5jbGFzcyBJbml0TWVzc2FnZSBleHRlbmRzICgvKiB1bnVzZWQgcHVyZSBleHByZXNzaW9uIG9yIHN1cGVyICovIG51bGwgJiYgKEJhc2VNZXNzYWdlKSkge1xuICAgIGNvbnN0cnVjdG9yKHNlc3Npb25JZCwgdmFsdWUsIHZlcnNpb24sIG1vZGUsIG9wdGlvbnMpe1xuICAgICAgICBzdXBlcihzZXNzaW9uSWQpO1xuICAgICAgICBfZGVmaW5lX3Byb3BlcnR5KHRoaXMsIFwidHlwZVwiLCBNZXNzYWdlVHlwZS5pbml0KTtcbiAgICAgICAgX2RlZmluZV9wcm9wZXJ0eSh0aGlzLCBcIm1vZGVcIiwgdm9pZCAwKTtcbiAgICAgICAgX2RlZmluZV9wcm9wZXJ0eSh0aGlzLCBcIm9wdGlvbnNcIiwgdm9pZCAwKTtcbiAgICAgICAgX2RlZmluZV9wcm9wZXJ0eSh0aGlzLCBcInZhbHVlXCIsIHZvaWQgMCk7XG4gICAgICAgIF9kZWZpbmVfcHJvcGVydHkodGhpcywgXCJ2ZXJzaW9uXCIsIHZvaWQgMCk7XG4gICAgICAgIHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMubW9kZSA9IG1vZGU7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG59XG5jbGFzcyBGb3JtYXRNZXNzYWdlIGV4dGVuZHMgKC8qIHVudXNlZCBwdXJlIGV4cHJlc3Npb24gb3Igc3VwZXIgKi8gbnVsbCAmJiAoQmFzZU1lc3NhZ2UpKSB7XG4gICAgY29uc3RydWN0b3Ioc2Vzc2lvbklkLCB2YWx1ZSwgZm9ybWF0KXtcbiAgICAgICAgc3VwZXIoc2Vzc2lvbklkKTtcbiAgICAgICAgX2RlZmluZV9wcm9wZXJ0eSh0aGlzLCBcInR5cGVcIiwgTWVzc2FnZVR5cGUuZm9ybWF0KTtcbiAgICAgICAgX2RlZmluZV9wcm9wZXJ0eSh0aGlzLCBcInZhbHVlXCIsIHZvaWQgMCk7XG4gICAgICAgIF9kZWZpbmVfcHJvcGVydHkodGhpcywgXCJmb3JtYXRcIiwgdm9pZCAwKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmZvcm1hdCA9IGZvcm1hdDtcbiAgICB9XG59XG5jbGFzcyBDb21wbGV0ZU1lc3NhZ2UgZXh0ZW5kcyAoLyogdW51c2VkIHB1cmUgZXhwcmVzc2lvbiBvciBzdXBlciAqLyBudWxsICYmIChCYXNlTWVzc2FnZSkpIHtcbiAgICBjb25zdHJ1Y3RvcihzZXNzaW9uSWQsIHZhbHVlKXtcbiAgICAgICAgc3VwZXIoc2Vzc2lvbklkKTtcbiAgICAgICAgX2RlZmluZV9wcm9wZXJ0eSh0aGlzLCBcInR5cGVcIiwgTWVzc2FnZVR5cGUuY29tcGxldGUpO1xuICAgICAgICBfZGVmaW5lX3Byb3BlcnR5KHRoaXMsIFwidmFsdWVcIiwgdm9pZCAwKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbn1cbmNsYXNzIFJlc29sdmVDb21wbGV0aW9uTWVzc2FnZSBleHRlbmRzICgvKiB1bnVzZWQgcHVyZSBleHByZXNzaW9uIG9yIHN1cGVyICovIG51bGwgJiYgKEJhc2VNZXNzYWdlKSkge1xuICAgIGNvbnN0cnVjdG9yKHNlc3Npb25JZCwgdmFsdWUpe1xuICAgICAgICBzdXBlcihzZXNzaW9uSWQpO1xuICAgICAgICBfZGVmaW5lX3Byb3BlcnR5KHRoaXMsIFwidHlwZVwiLCBNZXNzYWdlVHlwZS5yZXNvbHZlQ29tcGxldGlvbik7XG4gICAgICAgIF9kZWZpbmVfcHJvcGVydHkodGhpcywgXCJ2YWx1ZVwiLCB2b2lkIDApO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxufVxuY2xhc3MgSG92ZXJNZXNzYWdlIGV4dGVuZHMgKC8qIHVudXNlZCBwdXJlIGV4cHJlc3Npb24gb3Igc3VwZXIgKi8gbnVsbCAmJiAoQmFzZU1lc3NhZ2UpKSB7XG4gICAgY29uc3RydWN0b3Ioc2Vzc2lvbklkLCB2YWx1ZSl7XG4gICAgICAgIHN1cGVyKHNlc3Npb25JZCk7XG4gICAgICAgIF9kZWZpbmVfcHJvcGVydHkodGhpcywgXCJ0eXBlXCIsIE1lc3NhZ2VUeXBlLmhvdmVyKTtcbiAgICAgICAgX2RlZmluZV9wcm9wZXJ0eSh0aGlzLCBcInZhbHVlXCIsIHZvaWQgMCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG59XG5jbGFzcyBWYWxpZGF0ZU1lc3NhZ2UgZXh0ZW5kcyAoLyogdW51c2VkIHB1cmUgZXhwcmVzc2lvbiBvciBzdXBlciAqLyBudWxsICYmIChCYXNlTWVzc2FnZSkpIHtcbiAgICBjb25zdHJ1Y3RvcihzZXNzaW9uSWQpe1xuICAgICAgICBzdXBlcihzZXNzaW9uSWQpO1xuICAgICAgICBfZGVmaW5lX3Byb3BlcnR5KHRoaXMsIFwidHlwZVwiLCBNZXNzYWdlVHlwZS52YWxpZGF0ZSk7XG4gICAgfVxufVxuY2xhc3MgQ2hhbmdlTWVzc2FnZSBleHRlbmRzICgvKiB1bnVzZWQgcHVyZSBleHByZXNzaW9uIG9yIHN1cGVyICovIG51bGwgJiYgKEJhc2VNZXNzYWdlKSkge1xuICAgIGNvbnN0cnVjdG9yKHNlc3Npb25JZCwgdmFsdWUsIHZlcnNpb24pe1xuICAgICAgICBzdXBlcihzZXNzaW9uSWQpO1xuICAgICAgICBfZGVmaW5lX3Byb3BlcnR5KHRoaXMsIFwidHlwZVwiLCBNZXNzYWdlVHlwZS5jaGFuZ2UpO1xuICAgICAgICBfZGVmaW5lX3Byb3BlcnR5KHRoaXMsIFwidmFsdWVcIiwgdm9pZCAwKTtcbiAgICAgICAgX2RlZmluZV9wcm9wZXJ0eSh0aGlzLCBcInZlcnNpb25cIiwgdm9pZCAwKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuICAgIH1cbn1cbmNsYXNzIERlbHRhc01lc3NhZ2UgZXh0ZW5kcyAoLyogdW51c2VkIHB1cmUgZXhwcmVzc2lvbiBvciBzdXBlciAqLyBudWxsICYmIChCYXNlTWVzc2FnZSkpIHtcbiAgICBjb25zdHJ1Y3RvcihzZXNzaW9uSWQsIHZhbHVlLCB2ZXJzaW9uKXtcbiAgICAgICAgc3VwZXIoc2Vzc2lvbklkKTtcbiAgICAgICAgX2RlZmluZV9wcm9wZXJ0eSh0aGlzLCBcInR5cGVcIiwgTWVzc2FnZVR5cGUuYXBwbHlEZWx0YSk7XG4gICAgICAgIF9kZWZpbmVfcHJvcGVydHkodGhpcywgXCJ2YWx1ZVwiLCB2b2lkIDApO1xuICAgICAgICBfZGVmaW5lX3Byb3BlcnR5KHRoaXMsIFwidmVyc2lvblwiLCB2b2lkIDApO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG4gICAgfVxufVxuY2xhc3MgQ2hhbmdlTW9kZU1lc3NhZ2UgZXh0ZW5kcyAoLyogdW51c2VkIHB1cmUgZXhwcmVzc2lvbiBvciBzdXBlciAqLyBudWxsICYmIChCYXNlTWVzc2FnZSkpIHtcbiAgICBjb25zdHJ1Y3RvcihzZXNzaW9uSWQsIHZhbHVlLCB2ZXJzaW9uLCBtb2RlKXtcbiAgICAgICAgc3VwZXIoc2Vzc2lvbklkKTtcbiAgICAgICAgX2RlZmluZV9wcm9wZXJ0eSh0aGlzLCBcInR5cGVcIiwgTWVzc2FnZVR5cGUuY2hhbmdlTW9kZSk7XG4gICAgICAgIF9kZWZpbmVfcHJvcGVydHkodGhpcywgXCJtb2RlXCIsIHZvaWQgMCk7XG4gICAgICAgIF9kZWZpbmVfcHJvcGVydHkodGhpcywgXCJ2YWx1ZVwiLCB2b2lkIDApO1xuICAgICAgICBfZGVmaW5lX3Byb3BlcnR5KHRoaXMsIFwidmVyc2lvblwiLCB2b2lkIDApO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubW9kZSA9IG1vZGU7XG4gICAgICAgIHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG4gICAgfVxufVxuY2xhc3MgQ2hhbmdlT3B0aW9uc01lc3NhZ2UgZXh0ZW5kcyAoLyogdW51c2VkIHB1cmUgZXhwcmVzc2lvbiBvciBzdXBlciAqLyBudWxsICYmIChCYXNlTWVzc2FnZSkpIHtcbiAgICBjb25zdHJ1Y3RvcihzZXNzaW9uSWQsIG9wdGlvbnMsIG1lcmdlID0gZmFsc2Upe1xuICAgICAgICBzdXBlcihzZXNzaW9uSWQpO1xuICAgICAgICBfZGVmaW5lX3Byb3BlcnR5KHRoaXMsIFwidHlwZVwiLCBNZXNzYWdlVHlwZS5jaGFuZ2VPcHRpb25zKTtcbiAgICAgICAgX2RlZmluZV9wcm9wZXJ0eSh0aGlzLCBcIm9wdGlvbnNcIiwgdm9pZCAwKTtcbiAgICAgICAgX2RlZmluZV9wcm9wZXJ0eSh0aGlzLCBcIm1lcmdlXCIsIHZvaWQgMCk7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMubWVyZ2UgPSBtZXJnZTtcbiAgICB9XG59XG5jbGFzcyBDbG9zZURvY3VtZW50TWVzc2FnZSBleHRlbmRzICgvKiB1bnVzZWQgcHVyZSBleHByZXNzaW9uIG9yIHN1cGVyICovIG51bGwgJiYgKEJhc2VNZXNzYWdlKSkge1xuICAgIGNvbnN0cnVjdG9yKHNlc3Npb25JZCl7XG4gICAgICAgIHN1cGVyKHNlc3Npb25JZCk7XG4gICAgICAgIF9kZWZpbmVfcHJvcGVydHkodGhpcywgXCJ0eXBlXCIsIE1lc3NhZ2VUeXBlLmNsb3NlRG9jdW1lbnQpO1xuICAgIH1cbn1cbmNsYXNzIERpc3Bvc2VNZXNzYWdlIGV4dGVuZHMgKC8qIHVudXNlZCBwdXJlIGV4cHJlc3Npb24gb3Igc3VwZXIgKi8gbnVsbCAmJiAoQmFzZU1lc3NhZ2UpKSB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoXCJcIik7XG4gICAgICAgIF9kZWZpbmVfcHJvcGVydHkodGhpcywgXCJ0eXBlXCIsIE1lc3NhZ2VUeXBlLmRpc3Bvc2UpO1xuICAgIH1cbn1cbmNsYXNzIEdsb2JhbE9wdGlvbnNNZXNzYWdlIHtcbiAgICBjb25zdHJ1Y3RvcihzZXJ2aWNlTmFtZSwgb3B0aW9ucywgbWVyZ2Upe1xuICAgICAgICBfZGVmaW5lX3Byb3BlcnR5KHRoaXMsIFwidHlwZVwiLCBNZXNzYWdlVHlwZS5nbG9iYWxPcHRpb25zKTtcbiAgICAgICAgX2RlZmluZV9wcm9wZXJ0eSh0aGlzLCBcInNlcnZpY2VOYW1lXCIsIHZvaWQgMCk7XG4gICAgICAgIF9kZWZpbmVfcHJvcGVydHkodGhpcywgXCJvcHRpb25zXCIsIHZvaWQgMCk7XG4gICAgICAgIF9kZWZpbmVfcHJvcGVydHkodGhpcywgXCJtZXJnZVwiLCB2b2lkIDApO1xuICAgICAgICB0aGlzLnNlcnZpY2VOYW1lID0gc2VydmljZU5hbWU7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMubWVyZ2UgPSBtZXJnZTtcbiAgICB9XG59XG5jbGFzcyBDb25maWd1cmVGZWF0dXJlc01lc3NhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKHNlcnZpY2VOYW1lLCBvcHRpb25zKXtcbiAgICAgICAgX2RlZmluZV9wcm9wZXJ0eSh0aGlzLCBcInR5cGVcIiwgTWVzc2FnZVR5cGUuY29uZmlndXJlRmVhdHVyZXMpO1xuICAgICAgICBfZGVmaW5lX3Byb3BlcnR5KHRoaXMsIFwic2VydmljZU5hbWVcIiwgdm9pZCAwKTtcbiAgICAgICAgX2RlZmluZV9wcm9wZXJ0eSh0aGlzLCBcIm9wdGlvbnNcIiwgdm9pZCAwKTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlTmFtZSA9IHNlcnZpY2VOYW1lO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cbn1cbmNsYXNzIFNpZ25hdHVyZUhlbHBNZXNzYWdlIGV4dGVuZHMgKC8qIHVudXNlZCBwdXJlIGV4cHJlc3Npb24gb3Igc3VwZXIgKi8gbnVsbCAmJiAoQmFzZU1lc3NhZ2UpKSB7XG4gICAgY29uc3RydWN0b3Ioc2Vzc2lvbklkLCB2YWx1ZSl7XG4gICAgICAgIHN1cGVyKHNlc3Npb25JZCk7XG4gICAgICAgIF9kZWZpbmVfcHJvcGVydHkodGhpcywgXCJ0eXBlXCIsIE1lc3NhZ2VUeXBlLnNpZ25hdHVyZUhlbHApO1xuICAgICAgICBfZGVmaW5lX3Byb3BlcnR5KHRoaXMsIFwidmFsdWVcIiwgdm9pZCAwKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbn1cbmNsYXNzIERvY3VtZW50SGlnaGxpZ2h0TWVzc2FnZSBleHRlbmRzICgvKiB1bnVzZWQgcHVyZSBleHByZXNzaW9uIG9yIHN1cGVyICovIG51bGwgJiYgKEJhc2VNZXNzYWdlKSkge1xuICAgIGNvbnN0cnVjdG9yKHNlc3Npb25JZCwgdmFsdWUpe1xuICAgICAgICBzdXBlcihzZXNzaW9uSWQpO1xuICAgICAgICBfZGVmaW5lX3Byb3BlcnR5KHRoaXMsIFwidHlwZVwiLCBNZXNzYWdlVHlwZS5kb2N1bWVudEhpZ2hsaWdodCk7XG4gICAgICAgIF9kZWZpbmVfcHJvcGVydHkodGhpcywgXCJ2YWx1ZVwiLCB2b2lkIDApO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxufVxuY2xhc3MgR2V0U2VtYW50aWNUb2tlbnNNZXNzYWdlIGV4dGVuZHMgKC8qIHVudXNlZCBwdXJlIGV4cHJlc3Npb24gb3Igc3VwZXIgKi8gbnVsbCAmJiAoQmFzZU1lc3NhZ2UpKSB7XG4gICAgY29uc3RydWN0b3Ioc2Vzc2lvbklkLCB2YWx1ZSl7XG4gICAgICAgIHN1cGVyKHNlc3Npb25JZCk7XG4gICAgICAgIF9kZWZpbmVfcHJvcGVydHkodGhpcywgXCJ0eXBlXCIsIE1lc3NhZ2VUeXBlLmdldFNlbWFudGljVG9rZW5zKTtcbiAgICAgICAgX2RlZmluZV9wcm9wZXJ0eSh0aGlzLCBcInZhbHVlXCIsIHZvaWQgMCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG59XG52YXIgTWVzc2FnZVR5cGU7XG4oZnVuY3Rpb24oTWVzc2FnZVR5cGUpIHtcbiAgICBNZXNzYWdlVHlwZVtNZXNzYWdlVHlwZVtcImluaXRcIl0gPSAwXSA9IFwiaW5pdFwiO1xuICAgIE1lc3NhZ2VUeXBlW01lc3NhZ2VUeXBlW1wiZm9ybWF0XCJdID0gMV0gPSBcImZvcm1hdFwiO1xuICAgIE1lc3NhZ2VUeXBlW01lc3NhZ2VUeXBlW1wiY29tcGxldGVcIl0gPSAyXSA9IFwiY29tcGxldGVcIjtcbiAgICBNZXNzYWdlVHlwZVtNZXNzYWdlVHlwZVtcInJlc29sdmVDb21wbGV0aW9uXCJdID0gM10gPSBcInJlc29sdmVDb21wbGV0aW9uXCI7XG4gICAgTWVzc2FnZVR5cGVbTWVzc2FnZVR5cGVbXCJjaGFuZ2VcIl0gPSA0XSA9IFwiY2hhbmdlXCI7XG4gICAgTWVzc2FnZVR5cGVbTWVzc2FnZVR5cGVbXCJob3ZlclwiXSA9IDVdID0gXCJob3ZlclwiO1xuICAgIE1lc3NhZ2VUeXBlW01lc3NhZ2VUeXBlW1widmFsaWRhdGVcIl0gPSA2XSA9IFwidmFsaWRhdGVcIjtcbiAgICBNZXNzYWdlVHlwZVtNZXNzYWdlVHlwZVtcImFwcGx5RGVsdGFcIl0gPSA3XSA9IFwiYXBwbHlEZWx0YVwiO1xuICAgIE1lc3NhZ2VUeXBlW01lc3NhZ2VUeXBlW1wiY2hhbmdlTW9kZVwiXSA9IDhdID0gXCJjaGFuZ2VNb2RlXCI7XG4gICAgTWVzc2FnZVR5cGVbTWVzc2FnZVR5cGVbXCJjaGFuZ2VPcHRpb25zXCJdID0gOV0gPSBcImNoYW5nZU9wdGlvbnNcIjtcbiAgICBNZXNzYWdlVHlwZVtNZXNzYWdlVHlwZVtcImNsb3NlRG9jdW1lbnRcIl0gPSAxMF0gPSBcImNsb3NlRG9jdW1lbnRcIjtcbiAgICBNZXNzYWdlVHlwZVtNZXNzYWdlVHlwZVtcImdsb2JhbE9wdGlvbnNcIl0gPSAxMV0gPSBcImdsb2JhbE9wdGlvbnNcIjtcbiAgICBNZXNzYWdlVHlwZVtNZXNzYWdlVHlwZVtcImNvbmZpZ3VyZUZlYXR1cmVzXCJdID0gMTJdID0gXCJjb25maWd1cmVGZWF0dXJlc1wiO1xuICAgIE1lc3NhZ2VUeXBlW01lc3NhZ2VUeXBlW1wic2lnbmF0dXJlSGVscFwiXSA9IDEzXSA9IFwic2lnbmF0dXJlSGVscFwiO1xuICAgIE1lc3NhZ2VUeXBlW01lc3NhZ2VUeXBlW1wiZG9jdW1lbnRIaWdobGlnaHRcIl0gPSAxNF0gPSBcImRvY3VtZW50SGlnaGxpZ2h0XCI7XG4gICAgTWVzc2FnZVR5cGVbTWVzc2FnZVR5cGVbXCJkaXNwb3NlXCJdID0gMTVdID0gXCJkaXNwb3NlXCI7XG4gICAgTWVzc2FnZVR5cGVbTWVzc2FnZVR5cGVbXCJjYXBhYmlsaXRpZXNDaGFuZ2VcIl0gPSAxNl0gPSBcImNhcGFiaWxpdGllc0NoYW5nZVwiO1xuICAgIE1lc3NhZ2VUeXBlW01lc3NhZ2VUeXBlW1wiZ2V0U2VtYW50aWNUb2tlbnNcIl0gPSAxN10gPSBcImdldFNlbWFudGljVG9rZW5zXCI7XG59KShNZXNzYWdlVHlwZSB8fCAoTWVzc2FnZVR5cGUgPSB7fSkpO1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyA2Mjk3OlxuLyoqKi8gKChfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykgPT4ge1xuXG4vKiBoYXJtb255IGV4cG9ydCAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywge1xuLyogaGFybW9ueSBleHBvcnQgKi8gICBEdzogKCkgPT4gKC8qIGJpbmRpbmcgKi8gbm90RW1wdHkpLFxuLyogaGFybW9ueSBleHBvcnQgKi8gICBQTTogKCkgPT4gKC8qIGJpbmRpbmcgKi8gbWVyZ2VPYmplY3RzKVxuLyogaGFybW9ueSBleHBvcnQgKi8gfSk7XG4vKiB1bnVzZWQgaGFybW9ueSBleHBvcnRzIG1lcmdlUmFuZ2VzLCBjaGVja1ZhbHVlQWdhaW5zdFJlZ2V4cEFycmF5ICovXG5mdW5jdGlvbiBtZXJnZU9iamVjdHMob2JqMSwgb2JqMiwgZXhjbHVkZVVuZGVmaW5lZCA9IGZhbHNlKSB7XG4gICAgaWYgKCFvYmoxKSByZXR1cm4gb2JqMjtcbiAgICBpZiAoIW9iajIpIHJldHVybiBvYmoxO1xuICAgIGlmIChleGNsdWRlVW5kZWZpbmVkKSB7XG4gICAgICAgIG9iajEgPSBleGNsdWRlVW5kZWZpbmVkVmFsdWVzKG9iajEpO1xuICAgICAgICBvYmoyID0gZXhjbHVkZVVuZGVmaW5lZFZhbHVlcyhvYmoyKTtcbiAgICB9XG4gICAgY29uc3QgbWVyZ2VkT2JqZWN0cyA9IHtcbiAgICAgICAgLi4ub2JqMixcbiAgICAgICAgLi4ub2JqMVxuICAgIH07IC8vIEdpdmUgcHJpb3JpdHkgdG8gb2JqMSB2YWx1ZXMgYnkgc3ByZWFkaW5nIG9iajIgZmlyc3QsIHRoZW4gb2JqMVxuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG1lcmdlZE9iamVjdHMpKXtcbiAgICAgICAgaWYgKG9iajFba2V5XSAmJiBvYmoyW2tleV0pIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG9iajFba2V5XSkpIHtcbiAgICAgICAgICAgICAgICBtZXJnZWRPYmplY3RzW2tleV0gPSBvYmoxW2tleV0uY29uY2F0KG9iajJba2V5XSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob2JqMltrZXldKSkge1xuICAgICAgICAgICAgICAgIG1lcmdlZE9iamVjdHNba2V5XSA9IG9iajJba2V5XS5jb25jYXQob2JqMVtrZXldKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iajFba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG9iajJba2V5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBtZXJnZWRPYmplY3RzW2tleV0gPSBtZXJnZU9iamVjdHMob2JqMVtrZXldLCBvYmoyW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXJnZWRPYmplY3RzO1xufVxuZnVuY3Rpb24gZXhjbHVkZVVuZGVmaW5lZFZhbHVlcyhvYmopIHtcbiAgICBjb25zdCBmaWx0ZXJlZEVudHJpZXMgPSBPYmplY3QuZW50cmllcyhvYmopLmZpbHRlcigoW18sIHZhbHVlXSk9PnZhbHVlICE9PSB1bmRlZmluZWQpO1xuICAgIHJldHVybiBPYmplY3QuZnJvbUVudHJpZXMoZmlsdGVyZWRFbnRyaWVzKTtcbn1cbmZ1bmN0aW9uIG5vdEVtcHR5KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQ7XG59XG4vL3Rha2VuIHdpdGggc21hbGwgY2hhbmdlcyBmcm9tIGFjZS1jb2RlXG5mdW5jdGlvbiBtZXJnZVJhbmdlcyhyYW5nZXMpIHtcbiAgICB2YXIgbGlzdCA9IHJhbmdlcztcbiAgICBsaXN0ID0gbGlzdC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBhcmVQb2ludHMoYS5zdGFydCwgYi5zdGFydCk7XG4gICAgfSk7XG4gICAgdmFyIG5leHQgPSBsaXN0WzBdLCByYW5nZTtcbiAgICBmb3IodmFyIGkgPSAxOyBpIDwgbGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHJhbmdlID0gbmV4dDtcbiAgICAgICAgbmV4dCA9IGxpc3RbaV07XG4gICAgICAgIHZhciBjbXAgPSBjb21wYXJlUG9pbnRzKHJhbmdlLmVuZCwgbmV4dC5zdGFydCk7XG4gICAgICAgIGlmIChjbXAgPCAwKSBjb250aW51ZTtcbiAgICAgICAgaWYgKGNtcCA9PSAwICYmICFyYW5nZS5pc0VtcHR5KCkgJiYgIW5leHQuaXNFbXB0eSgpKSBjb250aW51ZTtcbiAgICAgICAgaWYgKGNvbXBhcmVQb2ludHMocmFuZ2UuZW5kLCBuZXh0LmVuZCkgPCAwKSB7XG4gICAgICAgICAgICByYW5nZS5lbmQucm93ID0gbmV4dC5lbmQucm93O1xuICAgICAgICAgICAgcmFuZ2UuZW5kLmNvbHVtbiA9IG5leHQuZW5kLmNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICBsaXN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgbmV4dCA9IHJhbmdlO1xuICAgICAgICBpLS07XG4gICAgfVxuICAgIHJldHVybiBsaXN0O1xufVxuZnVuY3Rpb24gY29tcGFyZVBvaW50cyhwMSwgcDIpIHtcbiAgICByZXR1cm4gcDEucm93IC0gcDIucm93IHx8IHAxLmNvbHVtbiAtIHAyLmNvbHVtbjtcbn1cbmZ1bmN0aW9uIGNoZWNrVmFsdWVBZ2FpbnN0UmVnZXhwQXJyYXkodmFsdWUsIHJlZ2V4cEFycmF5KSB7XG4gICAgaWYgKCFyZWdleHBBcnJheSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCByZWdleHBBcnJheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmIChyZWdleHBBcnJheVtpXS50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5cbi8qKiovIH0pXG5cbi8qKioqKiovIFx0fSk7XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi8gXHRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyAqL1xuLyoqKioqKi8gXHQoKCkgPT4ge1xuLyoqKioqKi8gXHRcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuLyoqKioqKi8gXHRcdFx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuLyoqKioqKi8gXHRcdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcbi8qKioqKiovIFx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuLyoqKioqKi8gXHRcdFx0XHR9XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0fSkoKTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQgKi9cbi8qKioqKiovIFx0KCgpID0+IHtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpXG4vKioqKioqLyBcdH0pKCk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0ICovXG4vKioqKioqLyBcdCgoKSA9PiB7XG4vKioqKioqLyBcdFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG4vKioqKioqLyBcdFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdH0pKCk7XG4vKioqKioqLyBcdFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0ge307XG4vLyBUaGlzIGVudHJ5IG5lZWQgdG8gYmUgd3JhcHBlZCBpbiBhbiBJSUZFIGJlY2F1c2UgaXQgbmVlZCB0byBiZSBpc29sYXRlZCBhZ2FpbnN0IG90aGVyIG1vZHVsZXMgaW4gdGhlIGNodW5rLlxuKCgpID0+IHtcbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0ICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCB7XG4vKiBoYXJtb255IGV4cG9ydCAqLyAgIFNlcnZpY2VNYW5hZ2VyOiAoKSA9PiAoLyogYmluZGluZyAqLyBTZXJ2aWNlTWFuYWdlcilcbi8qIGhhcm1vbnkgZXhwb3J0ICovIH0pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF91dGlsc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2Mjk3KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfbWVzc2FnZV90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2MDAyKTtcbmZ1bmN0aW9uIF9kZWZpbmVfcHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn1cblxuXG5jbGFzcyBTZXJ2aWNlTWFuYWdlciB7XG4gICAgYXN5bmMgZ2V0U2VydmljZXNDYXBhYmlsaXRpZXNBZnRlckNhbGxiYWNrKGRvY3VtZW50SWRlbnRpZmllciwgbWVzc2FnZSwgY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IHNlcnZpY2VzID0gYXdhaXQgY2FsbGJhY2soZG9jdW1lbnRJZGVudGlmaWVyLCBtZXNzYWdlLnZhbHVlLCBtZXNzYWdlLm1vZGUsIG1lc3NhZ2Uub3B0aW9ucyk7XG4gICAgICAgIGlmIChzZXJ2aWNlcykge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHNlcnZpY2VzKS5yZWR1Y2UoKGFjYywga2V5KT0+e1xuICAgICAgICAgICAgICAgIHZhciBfc2VydmljZXNfa2V5X3NlcnZpY2VJbnN0YW5jZSwgX3NlcnZpY2VzX2tleTtcbiAgICAgICAgICAgICAgICBhY2Nba2V5XSA9ICgoX3NlcnZpY2VzX2tleSA9IHNlcnZpY2VzW2tleV0pID09PSBudWxsIHx8IF9zZXJ2aWNlc19rZXkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfc2VydmljZXNfa2V5X3NlcnZpY2VJbnN0YW5jZSA9IF9zZXJ2aWNlc19rZXkuc2VydmljZUluc3RhbmNlKSA9PT0gbnVsbCB8fCBfc2VydmljZXNfa2V5X3NlcnZpY2VJbnN0YW5jZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3NlcnZpY2VzX2tleV9zZXJ2aWNlSW5zdGFuY2Uuc2VydmljZUNhcGFiaWxpdGllcykgfHwgbnVsbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgfSwge30pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGFnZ3JlZ2F0ZUZlYXR1cmVSZXNwb25zZXMoc2VydmljZUluc3RhbmNlcywgZmVhdHVyZSwgbWV0aG9kTmFtZSwgZG9jdW1lbnRJZGVudGlmaWVyLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gKGF3YWl0IFByb21pc2UuYWxsKHRoaXMuZmlsdGVyQnlGZWF0dXJlKHNlcnZpY2VJbnN0YW5jZXMsIGZlYXR1cmUpLm1hcChhc3luYyAoc2VydmljZSk9PntcbiAgICAgICAgICAgIHJldHVybiBzZXJ2aWNlW21ldGhvZE5hbWVdKGRvY3VtZW50SWRlbnRpZmllciwgdmFsdWUpO1xuICAgICAgICB9KSkpLmZpbHRlcihfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXy8qIC5ub3RFbXB0eSAqLyAuRHcpO1xuICAgIH1cbiAgICBhcHBseU9wdGlvbnNUb1NlcnZpY2VzKHNlcnZpY2VJbnN0YW5jZXMsIHNlc3Npb25JRCwgb3B0aW9ucykge1xuICAgICAgICBzZXJ2aWNlSW5zdGFuY2VzLmZvckVhY2goKHNlcnZpY2UpPT57XG4gICAgICAgICAgICBzZXJ2aWNlLnNldE9wdGlvbnMoc2Vzc2lvbklELCBvcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIGRpc3Bvc2VBbGwoKSB7XG4gICAgICAgIHZhciBzZXJ2aWNlcyA9IHRoaXMuJHNlcnZpY2VzO1xuICAgICAgICBmb3IobGV0IHNlcnZpY2VOYW1lIGluIHNlcnZpY2VzKXtcbiAgICAgICAgICAgIHZhciBfc2VydmljZXNfc2VydmljZU5hbWVfc2VydmljZUluc3RhbmNlLCBfc2VydmljZXNfc2VydmljZU5hbWU7XG4gICAgICAgICAgICBhd2FpdCAoKF9zZXJ2aWNlc19zZXJ2aWNlTmFtZSA9IHNlcnZpY2VzW3NlcnZpY2VOYW1lXSkgPT09IG51bGwgfHwgX3NlcnZpY2VzX3NlcnZpY2VOYW1lID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX3NlcnZpY2VzX3NlcnZpY2VOYW1lX3NlcnZpY2VJbnN0YW5jZSA9IF9zZXJ2aWNlc19zZXJ2aWNlTmFtZS5zZXJ2aWNlSW5zdGFuY2UpID09PSBudWxsIHx8IF9zZXJ2aWNlc19zZXJ2aWNlTmFtZV9zZXJ2aWNlSW5zdGFuY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9zZXJ2aWNlc19zZXJ2aWNlTmFtZV9zZXJ2aWNlSW5zdGFuY2UuZGlzcG9zZSgpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgYXN5bmMgJGluaXRTZXJ2aWNlSW5zdGFuY2Uoc2VydmljZSwgY3R4KSB7XG4gICAgICAgIGxldCBtb2R1bGU7XG4gICAgICAgIGlmICgndHlwZScgaW4gc2VydmljZSkge1xuICAgICAgICAgICAgaWYgKFtcbiAgICAgICAgICAgICAgICBcInNvY2tldFwiLFxuICAgICAgICAgICAgICAgIFwid2Vid29ya2VyXCJcbiAgICAgICAgICAgIF0uaW5jbHVkZXMoc2VydmljZS50eXBlKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZSA9IGF3YWl0IHNlcnZpY2UubW9kdWxlKCk7XG4gICAgICAgICAgICAgICAgc2VydmljZS5zZXJ2aWNlSW5zdGFuY2UgPSBuZXcgbW9kdWxlW1wiTGFuZ3VhZ2VDbGllbnRcIl0oc2VydmljZSwgY3R4KTtcbiAgICAgICAgICAgIH0gZWxzZSB0aHJvdyBcIlVua25vd24gc2VydmljZSB0eXBlXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtb2R1bGUgPSBhd2FpdCBzZXJ2aWNlLm1vZHVsZSgpO1xuICAgICAgICAgICAgc2VydmljZS5zZXJ2aWNlSW5zdGFuY2UgPSBuZXcgbW9kdWxlW3NlcnZpY2UuY2xhc3NOYW1lXShzZXJ2aWNlLm1vZGVzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VydmljZS5vcHRpb25zIHx8IHNlcnZpY2UuaW5pdGlhbGl6YXRpb25PcHRpb25zKSB7XG4gICAgICAgICAgICB2YXIgX3NlcnZpY2Vfb3B0aW9ucywgX3JlZjtcbiAgICAgICAgICAgIHNlcnZpY2Uuc2VydmljZUluc3RhbmNlLnNldEdsb2JhbE9wdGlvbnMoKF9yZWYgPSAoX3NlcnZpY2Vfb3B0aW9ucyA9IHNlcnZpY2Uub3B0aW9ucykgIT09IG51bGwgJiYgX3NlcnZpY2Vfb3B0aW9ucyAhPT0gdm9pZCAwID8gX3NlcnZpY2Vfb3B0aW9ucyA6IHNlcnZpY2UuaW5pdGlhbGl6YXRpb25PcHRpb25zKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDoge30pO1xuICAgICAgICB9XG4gICAgICAgIHNlcnZpY2Uuc2VydmljZUluc3RhbmNlLnNlcnZpY2VEYXRhID0gc2VydmljZTtcbiAgICAgICAgcmV0dXJuIHNlcnZpY2Uuc2VydmljZUluc3RhbmNlO1xuICAgIH1cbiAgICBhc3luYyAkZ2V0U2VydmljZXNJbnN0YW5jZXNCeU1vZGUobW9kZSkge1xuICAgICAgICBsZXQgc2VydmljZXMgPSB0aGlzLmZpbmRTZXJ2aWNlc0J5TW9kZShtb2RlKTtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHNlcnZpY2VzKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IHNlcnZpY2VOYW1lIGluIHNlcnZpY2VzKXtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuaW5pdGlhbGl6ZVNlcnZpY2Uoc2VydmljZU5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZXJ2aWNlcztcbiAgICB9XG4gICAgYXN5bmMgaW5pdGlhbGl6ZVNlcnZpY2Uoc2VydmljZU5hbWUpIHtcbiAgICAgICAgbGV0IHNlcnZpY2UgPSB0aGlzLiRzZXJ2aWNlc1tzZXJ2aWNlTmFtZV07XG4gICAgICAgIGlmICghc2VydmljZS5zZXJ2aWNlSW5zdGFuY2UpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zZXJ2aWNlSW5pdFByb21pc2VzW3NlcnZpY2UuaWRdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlSW5pdFByb21pc2VzW3NlcnZpY2UuaWRdID0gU2VydmljZU1hbmFnZXIuJGluaXRTZXJ2aWNlSW5zdGFuY2Uoc2VydmljZSwgdGhpcy5jdHgpLnRoZW4oKGluc3RhbmNlKT0+e1xuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlLnNlcnZpY2VJbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlLnNlcnZpY2VJbnN0YW5jZS5zZXJ2aWNlTmFtZSA9IHNlcnZpY2VOYW1lO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5zZXJ2aWNlSW5pdFByb21pc2VzW3NlcnZpY2UuaWRdOyAvLyBDbGVhbiB1cFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXJ2aWNlSW5pdFByb21pc2VzW3NlcnZpY2UuaWRdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFzZXJ2aWNlLnNlcnZpY2VJbnN0YW5jZS5zZXJ2aWNlTmFtZSkge1xuICAgICAgICAgICAgICAgIHNlcnZpY2Uuc2VydmljZUluc3RhbmNlLnNlcnZpY2VOYW1lID0gc2VydmljZU5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc2VydmljZS5zZXJ2aWNlSW5zdGFuY2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0R2xvYmFsT3B0aW9ucyhzZXJ2aWNlTmFtZSwgb3B0aW9ucywgbWVyZ2UgPSBmYWxzZSkge1xuICAgICAgICBsZXQgc2VydmljZSA9IHRoaXMuJHNlcnZpY2VzW3NlcnZpY2VOYW1lXTtcbiAgICAgICAgaWYgKCFzZXJ2aWNlKSByZXR1cm47XG4gICAgICAgIHNlcnZpY2Uub3B0aW9ucyA9IG1lcmdlID8gKDAsX3V0aWxzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18vKiAubWVyZ2VPYmplY3RzICovIC5QTSkob3B0aW9ucywgc2VydmljZS5vcHRpb25zKSA6IG9wdGlvbnM7XG4gICAgICAgIGlmIChzZXJ2aWNlLnNlcnZpY2VJbnN0YW5jZSkge1xuICAgICAgICAgICAgc2VydmljZS5zZXJ2aWNlSW5zdGFuY2Uuc2V0R2xvYmFsT3B0aW9ucyhzZXJ2aWNlLm9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGFkZERvY3VtZW50KGRvY3VtZW50SWRlbnRpZmllciwgZG9jdW1lbnRWYWx1ZSwgbW9kZSwgb3B0aW9ucykge1xuICAgICAgICBpZiAoIW1vZGUgfHwgIS9eYWNlXFwvbW9kZVxcLy8udGVzdChtb2RlKSkgcmV0dXJuO1xuICAgICAgICBtb2RlID0gbW9kZS5yZXBsYWNlKFwiYWNlL21vZGUvXCIsIFwiXCIpO1xuICAgICAgICBsZXQgc2VydmljZXMgPSBhd2FpdCB0aGlzLiRnZXRTZXJ2aWNlc0luc3RhbmNlc0J5TW9kZShtb2RlKTtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKHNlcnZpY2VzKS5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICAgICAgbGV0IGRvY3VtZW50SXRlbSA9IHtcbiAgICAgICAgICAgIHVyaTogZG9jdW1lbnRJZGVudGlmaWVyLnVyaSxcbiAgICAgICAgICAgIHZlcnNpb246IGRvY3VtZW50SWRlbnRpZmllci52ZXJzaW9uLFxuICAgICAgICAgICAgbGFuZ3VhZ2VJZDogbW9kZSxcbiAgICAgICAgICAgIHRleHQ6IGRvY3VtZW50VmFsdWVcbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhzZXJ2aWNlcykuZm9yRWFjaCgoZWwpPT5lbC5zZXJ2aWNlSW5zdGFuY2UuYWRkRG9jdW1lbnQoZG9jdW1lbnRJdGVtKSk7XG4gICAgICAgIHRoaXMuJHNlc3Npb25JRFRvTW9kZVtkb2N1bWVudElkZW50aWZpZXIudXJpXSA9IG1vZGU7XG4gICAgICAgIHJldHVybiBzZXJ2aWNlcztcbiAgICB9XG4gICAgYXN5bmMgY2hhbmdlRG9jdW1lbnRNb2RlKGRvY3VtZW50SWRlbnRpZmllciwgdmFsdWUsIG1vZGUsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVEb2N1bWVudChkb2N1bWVudElkZW50aWZpZXIpO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5hZGREb2N1bWVudChkb2N1bWVudElkZW50aWZpZXIsIHZhbHVlLCBtb2RlLCBvcHRpb25zKTtcbiAgICB9XG4gICAgcmVtb3ZlRG9jdW1lbnQoZG9jdW1lbnQpIHtcbiAgICAgICAgbGV0IHNlcnZpY2VzID0gdGhpcy5nZXRTZXJ2aWNlc0luc3RhbmNlcyhkb2N1bWVudC51cmkpO1xuICAgICAgICBpZiAoc2VydmljZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2VydmljZXMuZm9yRWFjaCgoZWwpPT5lbC5yZW1vdmVEb2N1bWVudChkb2N1bWVudCkpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuJHNlc3Npb25JRFRvTW9kZVtkb2N1bWVudC51cmldO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFNlcnZpY2VzSW5zdGFuY2VzKHNlc3Npb25JRCkge1xuICAgICAgICBsZXQgbW9kZSA9IHRoaXMuJHNlc3Npb25JRFRvTW9kZVtzZXNzaW9uSURdO1xuICAgICAgICBpZiAoIW1vZGUpIHJldHVybiBbXTsgLy9UT0RPOlxuICAgICAgICBsZXQgc2VydmljZXMgPSB0aGlzLmZpbmRTZXJ2aWNlc0J5TW9kZShtb2RlKTtcbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoc2VydmljZXMpLm1hcCgoZWwpPT5lbC5zZXJ2aWNlSW5zdGFuY2UpLmZpbHRlcihfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXy8qIC5ub3RFbXB0eSAqLyAuRHcpO1xuICAgIH1cbiAgICBmaWx0ZXJCeUZlYXR1cmUoc2VydmljZUluc3RhbmNlcywgZmVhdHVyZSkge1xuICAgICAgICByZXR1cm4gc2VydmljZUluc3RhbmNlcy5maWx0ZXIoKGVsKT0+e1xuICAgICAgICAgICAgaWYgKCFlbC5zZXJ2aWNlRGF0YS5mZWF0dXJlc1tmZWF0dXJlXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNhcGFiaWxpdGllcyA9IGVsLnNlcnZpY2VDYXBhYmlsaXRpZXM7XG4gICAgICAgICAgICBzd2l0Y2goZmVhdHVyZSl7XG4gICAgICAgICAgICAgICAgY2FzZSBcImhvdmVyXCI6XG4gICAgICAgICAgICAgICAgICAgIHZhciBfY2FwYWJpbGl0aWVzX2hvdmVyUHJvdmlkZXI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYXBhYmlsaXRpZXMuaG92ZXJQcm92aWRlciA9PSB0cnVlIHx8IHR5cGVvZiBjYXBhYmlsaXRpZXMuaG92ZXJQcm92aWRlciA9PSAnb2JqZWN0JyAmJiAoKF9jYXBhYmlsaXRpZXNfaG92ZXJQcm92aWRlciA9IGNhcGFiaWxpdGllcy5ob3ZlclByb3ZpZGVyKSA9PT0gbnVsbCB8fCBfY2FwYWJpbGl0aWVzX2hvdmVyUHJvdmlkZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jYXBhYmlsaXRpZXNfaG92ZXJQcm92aWRlci53b3JrRG9uZVByb2dyZXNzKSA9PSB0cnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJjb21wbGV0aW9uXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYXBhYmlsaXRpZXMuY29tcGxldGlvblByb3ZpZGVyICE9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBjYXNlIFwiY29tcGxldGlvblJlc29sdmVcIjpcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9jYXBhYmlsaXRpZXNfY29tcGxldGlvblByb3ZpZGVyO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKChfY2FwYWJpbGl0aWVzX2NvbXBsZXRpb25Qcm92aWRlciA9IGNhcGFiaWxpdGllcy5jb21wbGV0aW9uUHJvdmlkZXIpID09PSBudWxsIHx8IF9jYXBhYmlsaXRpZXNfY29tcGxldGlvblByb3ZpZGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfY2FwYWJpbGl0aWVzX2NvbXBsZXRpb25Qcm92aWRlci5yZXNvbHZlUHJvdmlkZXIpID09PSB0cnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJmb3JtYXRcIjpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhcGFiaWxpdGllcy5kb2N1bWVudFJhbmdlRm9ybWF0dGluZ1Byb3ZpZGVyID09IHRydWUgfHwgY2FwYWJpbGl0aWVzLmRvY3VtZW50Rm9ybWF0dGluZ1Byb3ZpZGVyID09IHRydWU7XG4gICAgICAgICAgICAgICAgY2FzZSBcImRpYWdub3N0aWNzXCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYXBhYmlsaXRpZXMuZGlhZ25vc3RpY1Byb3ZpZGVyICE9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBjYXNlIFwic2lnbmF0dXJlSGVscFwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FwYWJpbGl0aWVzLnNpZ25hdHVyZUhlbHBQcm92aWRlciAhPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgY2FzZSBcImRvY3VtZW50SGlnaGxpZ2h0XCI6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYXBhYmlsaXRpZXMuZG9jdW1lbnRIaWdobGlnaHRQcm92aWRlciA9PSB0cnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzZW1hbnRpY1Rva2Vuc1wiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FwYWJpbGl0aWVzLnNlbWFudGljVG9rZW5zUHJvdmlkZXIgIT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZmluZFNlcnZpY2VzQnlNb2RlKG1vZGUpIHtcbiAgICAgICAgbGV0IHNlcnZpY2VzV2l0aE5hbWUgPSB7fTtcbiAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy4kc2VydmljZXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSk9PntcbiAgICAgICAgICAgIGxldCBleHRlbnNpb25zID0gdmFsdWUubW9kZXMuc3BsaXQoJ3wnKTtcbiAgICAgICAgICAgIGlmIChleHRlbnNpb25zLmluY2x1ZGVzKG1vZGUpKSBzZXJ2aWNlc1dpdGhOYW1lW2tleV0gPSB0aGlzLiRzZXJ2aWNlc1trZXldO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHNlcnZpY2VzV2l0aE5hbWU7XG4gICAgfVxuICAgIHJlZ2lzdGVyU2VydmljZShuYW1lLCBzZXJ2aWNlKSB7XG4gICAgICAgIHNlcnZpY2UuaWQgPSBuYW1lO1xuICAgICAgICBzZXJ2aWNlLmZlYXR1cmVzID0gdGhpcy5zZXREZWZhdWx0RmVhdHVyZXNTdGF0ZShzZXJ2aWNlLmZlYXR1cmVzKTtcbiAgICAgICAgdGhpcy4kc2VydmljZXNbbmFtZV0gPSBzZXJ2aWNlO1xuICAgIH1cbiAgICByZWdpc3RlclNlcnZlcihuYW1lLCBjbGllbnRDb25maWcpIHtcbiAgICAgICAgY2xpZW50Q29uZmlnLmlkID0gbmFtZTtcbiAgICAgICAgY2xpZW50Q29uZmlnLmNsYXNzTmFtZSA9IFwiTGFuZ3VhZ2VDbGllbnRcIjtcbiAgICAgICAgY2xpZW50Q29uZmlnLmZlYXR1cmVzID0gdGhpcy5zZXREZWZhdWx0RmVhdHVyZXNTdGF0ZShjbGllbnRDb25maWcuZmVhdHVyZXMpO1xuICAgICAgICB0aGlzLiRzZXJ2aWNlc1tuYW1lXSA9IGNsaWVudENvbmZpZztcbiAgICB9XG4gICAgY29uZmlndXJlRmVhdHVyZXMobmFtZSwgZmVhdHVyZXMpIHtcbiAgICAgICAgZmVhdHVyZXMgPSB0aGlzLnNldERlZmF1bHRGZWF0dXJlc1N0YXRlKGZlYXR1cmVzKTtcbiAgICAgICAgaWYgKCF0aGlzLiRzZXJ2aWNlc1tuYW1lXSkgcmV0dXJuO1xuICAgICAgICB0aGlzLiRzZXJ2aWNlc1tuYW1lXS5mZWF0dXJlcyA9IGZlYXR1cmVzO1xuICAgIH1cbiAgICBzZXREZWZhdWx0RmVhdHVyZXNTdGF0ZShzZXJ2aWNlRmVhdHVyZXMpIHtcbiAgICAgICAgdmFyIF9mZWF0dXJlcywgX2ZlYXR1cmVzMSwgX2ZlYXR1cmVzMiwgX2ZlYXR1cmVzMywgX2ZlYXR1cmVzNCwgX2ZlYXR1cmVzNSwgX2ZlYXR1cmVzNiwgX2ZlYXR1cmVzNztcbiAgICAgICAgbGV0IGZlYXR1cmVzID0gc2VydmljZUZlYXR1cmVzICE9PSBudWxsICYmIHNlcnZpY2VGZWF0dXJlcyAhPT0gdm9pZCAwID8gc2VydmljZUZlYXR1cmVzIDoge307XG4gICAgICAgIHZhciBfaG92ZXI7XG4gICAgICAgIChfaG92ZXIgPSAoX2ZlYXR1cmVzID0gZmVhdHVyZXMpLmhvdmVyKSAhPT0gbnVsbCAmJiBfaG92ZXIgIT09IHZvaWQgMCA/IF9ob3ZlciA6IF9mZWF0dXJlcy5ob3ZlciA9IHRydWU7XG4gICAgICAgIHZhciBfY29tcGxldGlvbjtcbiAgICAgICAgKF9jb21wbGV0aW9uID0gKF9mZWF0dXJlczEgPSBmZWF0dXJlcykuY29tcGxldGlvbikgIT09IG51bGwgJiYgX2NvbXBsZXRpb24gIT09IHZvaWQgMCA/IF9jb21wbGV0aW9uIDogX2ZlYXR1cmVzMS5jb21wbGV0aW9uID0gdHJ1ZTtcbiAgICAgICAgdmFyIF9jb21wbGV0aW9uUmVzb2x2ZTtcbiAgICAgICAgKF9jb21wbGV0aW9uUmVzb2x2ZSA9IChfZmVhdHVyZXMyID0gZmVhdHVyZXMpLmNvbXBsZXRpb25SZXNvbHZlKSAhPT0gbnVsbCAmJiBfY29tcGxldGlvblJlc29sdmUgIT09IHZvaWQgMCA/IF9jb21wbGV0aW9uUmVzb2x2ZSA6IF9mZWF0dXJlczIuY29tcGxldGlvblJlc29sdmUgPSB0cnVlO1xuICAgICAgICB2YXIgX2Zvcm1hdDtcbiAgICAgICAgKF9mb3JtYXQgPSAoX2ZlYXR1cmVzMyA9IGZlYXR1cmVzKS5mb3JtYXQpICE9PSBudWxsICYmIF9mb3JtYXQgIT09IHZvaWQgMCA/IF9mb3JtYXQgOiBfZmVhdHVyZXMzLmZvcm1hdCA9IHRydWU7XG4gICAgICAgIHZhciBfZGlhZ25vc3RpY3M7XG4gICAgICAgIChfZGlhZ25vc3RpY3MgPSAoX2ZlYXR1cmVzNCA9IGZlYXR1cmVzKS5kaWFnbm9zdGljcykgIT09IG51bGwgJiYgX2RpYWdub3N0aWNzICE9PSB2b2lkIDAgPyBfZGlhZ25vc3RpY3MgOiBfZmVhdHVyZXM0LmRpYWdub3N0aWNzID0gdHJ1ZTtcbiAgICAgICAgdmFyIF9zaWduYXR1cmVIZWxwO1xuICAgICAgICAoX3NpZ25hdHVyZUhlbHAgPSAoX2ZlYXR1cmVzNSA9IGZlYXR1cmVzKS5zaWduYXR1cmVIZWxwKSAhPT0gbnVsbCAmJiBfc2lnbmF0dXJlSGVscCAhPT0gdm9pZCAwID8gX3NpZ25hdHVyZUhlbHAgOiBfZmVhdHVyZXM1LnNpZ25hdHVyZUhlbHAgPSB0cnVlO1xuICAgICAgICB2YXIgX2RvY3VtZW50SGlnaGxpZ2h0O1xuICAgICAgICAoX2RvY3VtZW50SGlnaGxpZ2h0ID0gKF9mZWF0dXJlczYgPSBmZWF0dXJlcykuZG9jdW1lbnRIaWdobGlnaHQpICE9PSBudWxsICYmIF9kb2N1bWVudEhpZ2hsaWdodCAhPT0gdm9pZCAwID8gX2RvY3VtZW50SGlnaGxpZ2h0IDogX2ZlYXR1cmVzNi5kb2N1bWVudEhpZ2hsaWdodCA9IHRydWU7XG4gICAgICAgIHZhciBfc2VtYW50aWNUb2tlbnM7XG4gICAgICAgIChfc2VtYW50aWNUb2tlbnMgPSAoX2ZlYXR1cmVzNyA9IGZlYXR1cmVzKS5zZW1hbnRpY1Rva2VucykgIT09IG51bGwgJiYgX3NlbWFudGljVG9rZW5zICE9PSB2b2lkIDAgPyBfc2VtYW50aWNUb2tlbnMgOiBfZmVhdHVyZXM3LnNlbWFudGljVG9rZW5zID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZlYXR1cmVzO1xuICAgIH1cbiAgICBjb25zdHJ1Y3RvcihjdHgpe1xuICAgICAgICBfZGVmaW5lX3Byb3BlcnR5KHRoaXMsIFwiJHNlcnZpY2VzXCIsIHt9KTtcbiAgICAgICAgX2RlZmluZV9wcm9wZXJ0eSh0aGlzLCBcInNlcnZpY2VJbml0UHJvbWlzZXNcIiwge30pO1xuICAgICAgICBfZGVmaW5lX3Byb3BlcnR5KHRoaXMsIFwiJHNlc3Npb25JRFRvTW9kZVwiLCB7fSk7XG4gICAgICAgIF9kZWZpbmVfcHJvcGVydHkodGhpcywgXCJjdHhcIiwgdm9pZCAwKTtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgICAgIGxldCBkb1ZhbGlkYXRpb24gPSBhc3luYyAoZG9jdW1lbnQsIHNlcnZpY2VzSW5zdGFuY2VzKT0+e1xuICAgICAgICAgICAgc2VydmljZXNJbnN0YW5jZXMgIT09IG51bGwgJiYgc2VydmljZXNJbnN0YW5jZXMgIT09IHZvaWQgMCA/IHNlcnZpY2VzSW5zdGFuY2VzIDogc2VydmljZXNJbnN0YW5jZXMgPSB0aGlzLmdldFNlcnZpY2VzSW5zdGFuY2VzKGRvY3VtZW50LnVyaSk7XG4gICAgICAgICAgICBpZiAoc2VydmljZXNJbnN0YW5jZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy90aGlzIGlzIGxpc3Qgb2YgZG9jdW1lbnRzIGxpbmtlZCB0byBzZXJ2aWNlc1xuICAgICAgICAgICAgbGV0IHNlc3Npb25JRExpc3QgPSBPYmplY3Qua2V5cyhzZXJ2aWNlc0luc3RhbmNlc1swXS5kb2N1bWVudHMpO1xuICAgICAgICAgICAgc2VydmljZXNJbnN0YW5jZXMgPSB0aGlzLmZpbHRlckJ5RmVhdHVyZShzZXJ2aWNlc0luc3RhbmNlcywgXCJkaWFnbm9zdGljc1wiKTtcbiAgICAgICAgICAgIHNlcnZpY2VzSW5zdGFuY2VzID0gc2VydmljZXNJbnN0YW5jZXMuZmlsdGVyKChlbCk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwuc2VydmljZUNhcGFiaWxpdGllcy5kaWFnbm9zdGljUHJvdmlkZXI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChzZXJ2aWNlc0luc3RhbmNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcG9zdE1lc3NhZ2UgPSB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IF9tZXNzYWdlX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18vKiAuTWVzc2FnZVR5cGUgKi8gLkNzLnZhbGlkYXRlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZm9yIChsZXQgc2Vzc2lvbklEIG9mIHNlc3Npb25JRExpc3Qpe1xuICAgICAgICAgICAgICAgIHZhciBfcmVmO1xuICAgICAgICAgICAgICAgIGxldCBkaWFnbm9zdGljcyA9IChfcmVmID0gYXdhaXQgUHJvbWlzZS5hbGwoc2VydmljZXNJbnN0YW5jZXMubWFwKChlbCk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsLmRvVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmk6IHNlc3Npb25JRFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KSkpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiBbXTtcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZVtcInNlc3Npb25JZFwiXSA9IHNlc3Npb25JRDtcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZVtcInZhbHVlXCJdID0gZGlhZ25vc3RpY3MuZmxhdCgpO1xuICAgICAgICAgICAgICAgIGN0eC5wb3N0TWVzc2FnZShwb3N0TWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGxldCBwcm92aWRlVmFsaWRhdGlvbkZvclNlcnZpY2VJbnN0YW5jZSA9IGFzeW5jIChzZXJ2aWNlTmFtZSk9PntcbiAgICAgICAgICAgIGxldCBzZXJ2aWNlID0gdGhpcy4kc2VydmljZXNbc2VydmljZU5hbWVdO1xuICAgICAgICAgICAgaWYgKCFzZXJ2aWNlKSByZXR1cm47XG4gICAgICAgICAgICB2YXIgc2VydmljZUluc3RhbmNlID0gc2VydmljZS5zZXJ2aWNlSW5zdGFuY2U7XG4gICAgICAgICAgICBpZiAoc2VydmljZUluc3RhbmNlKSBhd2FpdCBkb1ZhbGlkYXRpb24odW5kZWZpbmVkLCBbXG4gICAgICAgICAgICAgICAgc2VydmljZUluc3RhbmNlXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfTtcbiAgICAgICAgY3R4LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGFzeW5jIChldik9PntcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gZXYuZGF0YTtcbiAgICAgICAgICAgIHZhciBfbWVzc2FnZV9zZXNzaW9uSWQ7XG4gICAgICAgICAgICBsZXQgc2Vzc2lvbklEID0gKF9tZXNzYWdlX3Nlc3Npb25JZCA9IG1lc3NhZ2VbXCJzZXNzaW9uSWRcIl0pICE9PSBudWxsICYmIF9tZXNzYWdlX3Nlc3Npb25JZCAhPT0gdm9pZCAwID8gX21lc3NhZ2Vfc2Vzc2lvbklkIDogXCJcIjtcbiAgICAgICAgICAgIGxldCB2ZXJzaW9uID0gbWVzc2FnZVtcInZlcnNpb25cIl07XG4gICAgICAgICAgICBsZXQgcG9zdE1lc3NhZ2UgPSB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IG1lc3NhZ2UudHlwZSxcbiAgICAgICAgICAgICAgICBcInNlc3Npb25JZFwiOiBzZXNzaW9uSURcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsZXQgc2VydmljZUluc3RhbmNlcyA9IHRoaXMuZ2V0U2VydmljZXNJbnN0YW5jZXMoc2Vzc2lvbklEKTtcbiAgICAgICAgICAgIGxldCBkb2N1bWVudElkZW50aWZpZXIgPSB7XG4gICAgICAgICAgICAgICAgdXJpOiBzZXNzaW9uSUQsXG4gICAgICAgICAgICAgICAgdmVyc2lvbjogdmVyc2lvblxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHN3aXRjaChtZXNzYWdlLnR5cGUpe1xuICAgICAgICAgICAgICAgIGNhc2UgX21lc3NhZ2VfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXy8qIC5NZXNzYWdlVHlwZSAqLyAuQ3MuZm9ybWF0OlxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlSW5zdGFuY2VzID0gdGhpcy5maWx0ZXJCeUZlYXR1cmUoc2VydmljZUluc3RhbmNlcywgXCJmb3JtYXRcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXJ2aWNlSW5zdGFuY2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vd2Ugd2lsbCB1c2Ugb25seSBmaXJzdCBzZXJ2aWNlIHRvIGZvcm1hdFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VbXCJ2YWx1ZVwiXSA9IGF3YWl0IHNlcnZpY2VJbnN0YW5jZXNbMF0uZm9ybWF0KGRvY3VtZW50SWRlbnRpZmllciwgbWVzc2FnZS52YWx1ZSwgbWVzc2FnZS5mb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgX21lc3NhZ2VfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXy8qIC5NZXNzYWdlVHlwZSAqLyAuQ3MuY29tcGxldGU6XG4gICAgICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlW1widmFsdWVcIl0gPSAoYXdhaXQgUHJvbWlzZS5hbGwodGhpcy5maWx0ZXJCeUZlYXR1cmUoc2VydmljZUluc3RhbmNlcywgXCJjb21wbGV0aW9uXCIpLm1hcChhc3luYyAoc2VydmljZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGlvbnM6IGF3YWl0IHNlcnZpY2UuZG9Db21wbGV0ZShkb2N1bWVudElkZW50aWZpZXIsIG1lc3NhZ2VbXCJ2YWx1ZVwiXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZTogc2VydmljZS5zZXJ2aWNlRGF0YS5jbGFzc05hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0pKSkuZmlsdGVyKF91dGlsc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fLyogLm5vdEVtcHR5ICovIC5Edyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgX21lc3NhZ2VfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXy8qIC5NZXNzYWdlVHlwZSAqLyAuQ3MucmVzb2x2ZUNvbXBsZXRpb246XG4gICAgICAgICAgICAgICAgICAgIHZhciBfdGhpc19maWx0ZXJCeUZlYXR1cmVfZmluZDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlcnZpY2VOYW1lID0gbWVzc2FnZS52YWx1ZVtcInNlcnZpY2VcIl07XG4gICAgICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlW1widmFsdWVcIl0gPSBhd2FpdCAoKF90aGlzX2ZpbHRlckJ5RmVhdHVyZV9maW5kID0gdGhpcy5maWx0ZXJCeUZlYXR1cmUoc2VydmljZUluc3RhbmNlcywgXCJjb21wbGV0aW9uUmVzb2x2ZVwiKS5maW5kKChzZXJ2aWNlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlcnZpY2Uuc2VydmljZURhdGEuY2xhc3NOYW1lID09PSBzZXJ2aWNlTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXJ2aWNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSkgPT09IG51bGwgfHwgX3RoaXNfZmlsdGVyQnlGZWF0dXJlX2ZpbmQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzX2ZpbHRlckJ5RmVhdHVyZV9maW5kLmRvUmVzb2x2ZShtZXNzYWdlLnZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgX21lc3NhZ2VfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXy8qIC5NZXNzYWdlVHlwZSAqLyAuQ3MuY2hhbmdlOlxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlSW5zdGFuY2VzLmZvckVhY2goKHNlcnZpY2UpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlLnNldFZhbHVlKGRvY3VtZW50SWRlbnRpZmllciwgbWVzc2FnZVtcInZhbHVlXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGRvVmFsaWRhdGlvbihkb2N1bWVudElkZW50aWZpZXIsIHNlcnZpY2VJbnN0YW5jZXMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIF9tZXNzYWdlX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18vKiAuTWVzc2FnZVR5cGUgKi8gLkNzLmFwcGx5RGVsdGE6XG4gICAgICAgICAgICAgICAgICAgIHNlcnZpY2VJbnN0YW5jZXMuZm9yRWFjaCgoc2VydmljZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2UuYXBwbHlEZWx0YXMoZG9jdW1lbnRJZGVudGlmaWVyLCBtZXNzYWdlW1widmFsdWVcIl0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgZG9WYWxpZGF0aW9uKGRvY3VtZW50SWRlbnRpZmllciwgc2VydmljZUluc3RhbmNlcyk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgX21lc3NhZ2VfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXy8qIC5NZXNzYWdlVHlwZSAqLyAuQ3MuaG92ZXI6XG4gICAgICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlW1widmFsdWVcIl0gPSBhd2FpdCB0aGlzLmFnZ3JlZ2F0ZUZlYXR1cmVSZXNwb25zZXMoc2VydmljZUluc3RhbmNlcywgXCJob3ZlclwiLCBcImRvSG92ZXJcIiwgZG9jdW1lbnRJZGVudGlmaWVyLCBtZXNzYWdlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBfbWVzc2FnZV90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fLyogLk1lc3NhZ2VUeXBlICovIC5Dcy52YWxpZGF0ZTpcbiAgICAgICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VbXCJ2YWx1ZVwiXSA9IGF3YWl0IGRvVmFsaWRhdGlvbihkb2N1bWVudElkZW50aWZpZXIsIHNlcnZpY2VJbnN0YW5jZXMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIF9tZXNzYWdlX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18vKiAuTWVzc2FnZVR5cGUgKi8gLkNzLmluaXQ6XG4gICAgICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlW1widmFsdWVcIl0gPSBhd2FpdCB0aGlzLmdldFNlcnZpY2VzQ2FwYWJpbGl0aWVzQWZ0ZXJDYWxsYmFjayhkb2N1bWVudElkZW50aWZpZXIsIG1lc3NhZ2UsIHRoaXMuYWRkRG9jdW1lbnQuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGRvVmFsaWRhdGlvbihkb2N1bWVudElkZW50aWZpZXIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIF9tZXNzYWdlX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18vKiAuTWVzc2FnZVR5cGUgKi8gLkNzLmNoYW5nZU1vZGU6XG4gICAgICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlW1widmFsdWVcIl0gPSBhd2FpdCB0aGlzLmdldFNlcnZpY2VzQ2FwYWJpbGl0aWVzQWZ0ZXJDYWxsYmFjayhkb2N1bWVudElkZW50aWZpZXIsIG1lc3NhZ2UsIHRoaXMuY2hhbmdlRG9jdW1lbnRNb2RlLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBkb1ZhbGlkYXRpb24oZG9jdW1lbnRJZGVudGlmaWVyKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBfbWVzc2FnZV90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fLyogLk1lc3NhZ2VUeXBlICovIC5Dcy5jaGFuZ2VPcHRpb25zOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGx5T3B0aW9uc1RvU2VydmljZXMoc2VydmljZUluc3RhbmNlcywgc2Vzc2lvbklELCBtZXNzYWdlLm9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBkb1ZhbGlkYXRpb24oZG9jdW1lbnRJZGVudGlmaWVyLCBzZXJ2aWNlSW5zdGFuY2VzKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBfbWVzc2FnZV90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fLyogLk1lc3NhZ2VUeXBlICovIC5Dcy5jbG9zZURvY3VtZW50OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZURvY3VtZW50KGRvY3VtZW50SWRlbnRpZmllcik7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGRvVmFsaWRhdGlvbihkb2N1bWVudElkZW50aWZpZXIsIHNlcnZpY2VJbnN0YW5jZXMpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIF9tZXNzYWdlX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18vKiAuTWVzc2FnZVR5cGUgKi8gLkNzLmRpc3Bvc2U6XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZGlzcG9zZUFsbCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIF9tZXNzYWdlX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18vKiAuTWVzc2FnZVR5cGUgKi8gLkNzLmdsb2JhbE9wdGlvbnM6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0R2xvYmFsT3B0aW9ucyhtZXNzYWdlLnNlcnZpY2VOYW1lLCBtZXNzYWdlLm9wdGlvbnMsIG1lc3NhZ2UubWVyZ2UpO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBwcm92aWRlVmFsaWRhdGlvbkZvclNlcnZpY2VJbnN0YW5jZShtZXNzYWdlLnNlcnZpY2VOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBfbWVzc2FnZV90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fLyogLk1lc3NhZ2VUeXBlICovIC5Dcy5jb25maWd1cmVGZWF0dXJlczpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmVGZWF0dXJlcyhtZXNzYWdlLnNlcnZpY2VOYW1lLCBtZXNzYWdlLm9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBwcm92aWRlVmFsaWRhdGlvbkZvclNlcnZpY2VJbnN0YW5jZShtZXNzYWdlLnNlcnZpY2VOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBfbWVzc2FnZV90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fLyogLk1lc3NhZ2VUeXBlICovIC5Dcy5zaWduYXR1cmVIZWxwOlxuICAgICAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZVtcInZhbHVlXCJdID0gYXdhaXQgdGhpcy5hZ2dyZWdhdGVGZWF0dXJlUmVzcG9uc2VzKHNlcnZpY2VJbnN0YW5jZXMsIFwic2lnbmF0dXJlSGVscFwiLCBcInByb3ZpZGVTaWduYXR1cmVIZWxwXCIsIGRvY3VtZW50SWRlbnRpZmllciwgbWVzc2FnZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgX21lc3NhZ2VfdHlwZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXy8qIC5NZXNzYWdlVHlwZSAqLyAuQ3MuZG9jdW1lbnRIaWdobGlnaHQ6XG4gICAgICAgICAgICAgICAgICAgIGxldCBoaWdobGlnaHRzID0gYXdhaXQgdGhpcy5hZ2dyZWdhdGVGZWF0dXJlUmVzcG9uc2VzKHNlcnZpY2VJbnN0YW5jZXMsIFwiZG9jdW1lbnRIaWdobGlnaHRcIiwgXCJmaW5kRG9jdW1lbnRIaWdobGlnaHRzXCIsIGRvY3VtZW50SWRlbnRpZmllciwgbWVzc2FnZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlW1widmFsdWVcIl0gPSBoaWdobGlnaHRzLmZsYXQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBfbWVzc2FnZV90eXBlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fLyogLk1lc3NhZ2VUeXBlICovIC5Dcy5nZXRTZW1hbnRpY1Rva2VuczpcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZUluc3RhbmNlcyA9IHRoaXMuZmlsdGVyQnlGZWF0dXJlKHNlcnZpY2VJbnN0YW5jZXMsIFwic2VtYW50aWNUb2tlbnNcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZXJ2aWNlSW5zdGFuY2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vd2Ugd2lsbCB1c2Ugb25seSBmaXJzdCBzZXJ2aWNlXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZVtcInZhbHVlXCJdID0gYXdhaXQgc2VydmljZUluc3RhbmNlc1swXS5nZXRTZW1hbnRpY1Rva2Vucyhkb2N1bWVudElkZW50aWZpZXIsIG1lc3NhZ2UudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3R4LnBvc3RNZXNzYWdlKHBvc3RNZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG59KSgpO1xuXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfZXhwb3J0c19fO1xuLyoqKioqKi8gfSkoKVxuO1xufSk7Il0sIm5hbWVzIjpbIndlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwicm9vdCIsImZhY3RvcnkiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmaW5lIiwiYW1kIiwiYSIsImkiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiX191bnVzZWRfd2VicGFja19tb2R1bGUiLCJfX3dlYnBhY2tfZXhwb3J0c19fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsImQiLCJDcyIsIk1lc3NhZ2VUeXBlIiwiX2RlZmluZV9wcm9wZXJ0eSIsIm9iaiIsImtleSIsInZhbHVlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJCYXNlTWVzc2FnZSIsImNvbnN0cnVjdG9yIiwic2Vzc2lvbklkIiwiSW5pdE1lc3NhZ2UiLCJ2ZXJzaW9uIiwibW9kZSIsIm9wdGlvbnMiLCJpbml0IiwiRm9ybWF0TWVzc2FnZSIsImZvcm1hdCIsIkNvbXBsZXRlTWVzc2FnZSIsImNvbXBsZXRlIiwiUmVzb2x2ZUNvbXBsZXRpb25NZXNzYWdlIiwicmVzb2x2ZUNvbXBsZXRpb24iLCJIb3Zlck1lc3NhZ2UiLCJob3ZlciIsIlZhbGlkYXRlTWVzc2FnZSIsInZhbGlkYXRlIiwiQ2hhbmdlTWVzc2FnZSIsImNoYW5nZSIsIkRlbHRhc01lc3NhZ2UiLCJhcHBseURlbHRhIiwiQ2hhbmdlTW9kZU1lc3NhZ2UiLCJjaGFuZ2VNb2RlIiwiQ2hhbmdlT3B0aW9uc01lc3NhZ2UiLCJtZXJnZSIsImNoYW5nZU9wdGlvbnMiLCJDbG9zZURvY3VtZW50TWVzc2FnZSIsImNsb3NlRG9jdW1lbnQiLCJEaXNwb3NlTWVzc2FnZSIsImRpc3Bvc2UiLCJHbG9iYWxPcHRpb25zTWVzc2FnZSIsInNlcnZpY2VOYW1lIiwiZ2xvYmFsT3B0aW9ucyIsIkNvbmZpZ3VyZUZlYXR1cmVzTWVzc2FnZSIsImNvbmZpZ3VyZUZlYXR1cmVzIiwiU2lnbmF0dXJlSGVscE1lc3NhZ2UiLCJzaWduYXR1cmVIZWxwIiwiRG9jdW1lbnRIaWdobGlnaHRNZXNzYWdlIiwiZG9jdW1lbnRIaWdobGlnaHQiLCJHZXRTZW1hbnRpY1Rva2Vuc01lc3NhZ2UiLCJnZXRTZW1hbnRpY1Rva2VucyIsIkR3Iiwibm90RW1wdHkiLCJQTSIsIm1lcmdlT2JqZWN0cyIsIm9iajEiLCJvYmoyIiwiZXhjbHVkZVVuZGVmaW5lZCIsImV4Y2x1ZGVVbmRlZmluZWRWYWx1ZXMiLCJtZXJnZWRPYmplY3RzIiwia2V5cyIsIkFycmF5IiwiaXNBcnJheSIsImNvbmNhdCIsImZpbHRlcmVkRW50cmllcyIsImVudHJpZXMiLCJmaWx0ZXIiLCJfIiwidW5kZWZpbmVkIiwiZnJvbUVudHJpZXMiLCJtZXJnZVJhbmdlcyIsInJhbmdlcyIsImxpc3QiLCJzb3J0IiwiYiIsImNvbXBhcmVQb2ludHMiLCJzdGFydCIsIm5leHQiLCJyYW5nZSIsImxlbmd0aCIsImNtcCIsImVuZCIsImlzRW1wdHkiLCJyb3ciLCJjb2x1bW4iLCJzcGxpY2UiLCJwMSIsInAyIiwiY2hlY2tWYWx1ZUFnYWluc3RSZWdleHBBcnJheSIsInJlZ2V4cEFycmF5IiwidGVzdCIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwiZGVmaW5pdGlvbiIsIm8iLCJnZXQiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwiU2VydmljZU1hbmFnZXIiLCJfdXRpbHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyIsIl9tZXNzYWdlX3R5cGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18iLCJnZXRTZXJ2aWNlc0NhcGFiaWxpdGllc0FmdGVyQ2FsbGJhY2siLCJkb2N1bWVudElkZW50aWZpZXIiLCJtZXNzYWdlIiwiY2FsbGJhY2siLCJzZXJ2aWNlcyIsInJlZHVjZSIsImFjYyIsIl9zZXJ2aWNlc19rZXlfc2VydmljZUluc3RhbmNlIiwiX3NlcnZpY2VzX2tleSIsInNlcnZpY2VJbnN0YW5jZSIsInNlcnZpY2VDYXBhYmlsaXRpZXMiLCJhZ2dyZWdhdGVGZWF0dXJlUmVzcG9uc2VzIiwic2VydmljZUluc3RhbmNlcyIsImZlYXR1cmUiLCJtZXRob2ROYW1lIiwiUHJvbWlzZSIsImFsbCIsImZpbHRlckJ5RmVhdHVyZSIsIm1hcCIsInNlcnZpY2UiLCJhcHBseU9wdGlvbnNUb1NlcnZpY2VzIiwic2Vzc2lvbklEIiwiZm9yRWFjaCIsInNldE9wdGlvbnMiLCJkaXNwb3NlQWxsIiwiJHNlcnZpY2VzIiwiX3NlcnZpY2VzX3NlcnZpY2VOYW1lX3NlcnZpY2VJbnN0YW5jZSIsIl9zZXJ2aWNlc19zZXJ2aWNlTmFtZSIsIiRpbml0U2VydmljZUluc3RhbmNlIiwiY3R4IiwiaW5jbHVkZXMiLCJ0eXBlIiwiY2xhc3NOYW1lIiwibW9kZXMiLCJpbml0aWFsaXphdGlvbk9wdGlvbnMiLCJfc2VydmljZV9vcHRpb25zIiwiX3JlZiIsInNldEdsb2JhbE9wdGlvbnMiLCJzZXJ2aWNlRGF0YSIsIiRnZXRTZXJ2aWNlc0luc3RhbmNlc0J5TW9kZSIsImZpbmRTZXJ2aWNlc0J5TW9kZSIsImluaXRpYWxpemVTZXJ2aWNlIiwic2VydmljZUluaXRQcm9taXNlcyIsImlkIiwidGhlbiIsImluc3RhbmNlIiwiYWRkRG9jdW1lbnQiLCJkb2N1bWVudFZhbHVlIiwicmVwbGFjZSIsImRvY3VtZW50SXRlbSIsInVyaSIsImxhbmd1YWdlSWQiLCJ0ZXh0IiwidmFsdWVzIiwiZWwiLCIkc2Vzc2lvbklEVG9Nb2RlIiwiY2hhbmdlRG9jdW1lbnRNb2RlIiwicmVtb3ZlRG9jdW1lbnQiLCJkb2N1bWVudCIsImdldFNlcnZpY2VzSW5zdGFuY2VzIiwiZmVhdHVyZXMiLCJjYXBhYmlsaXRpZXMiLCJfY2FwYWJpbGl0aWVzX2hvdmVyUHJvdmlkZXIiLCJob3ZlclByb3ZpZGVyIiwid29ya0RvbmVQcm9ncmVzcyIsImNvbXBsZXRpb25Qcm92aWRlciIsIl9jYXBhYmlsaXRpZXNfY29tcGxldGlvblByb3ZpZGVyIiwicmVzb2x2ZVByb3ZpZGVyIiwiZG9jdW1lbnRSYW5nZUZvcm1hdHRpbmdQcm92aWRlciIsImRvY3VtZW50Rm9ybWF0dGluZ1Byb3ZpZGVyIiwiZGlhZ25vc3RpY1Byb3ZpZGVyIiwic2lnbmF0dXJlSGVscFByb3ZpZGVyIiwiZG9jdW1lbnRIaWdobGlnaHRQcm92aWRlciIsInNlbWFudGljVG9rZW5zUHJvdmlkZXIiLCJzZXJ2aWNlc1dpdGhOYW1lIiwiZXh0ZW5zaW9ucyIsInNwbGl0IiwicmVnaXN0ZXJTZXJ2aWNlIiwibmFtZSIsInNldERlZmF1bHRGZWF0dXJlc1N0YXRlIiwicmVnaXN0ZXJTZXJ2ZXIiLCJjbGllbnRDb25maWciLCJzZXJ2aWNlRmVhdHVyZXMiLCJfZmVhdHVyZXMiLCJfZmVhdHVyZXMxIiwiX2ZlYXR1cmVzMiIsIl9mZWF0dXJlczMiLCJfZmVhdHVyZXM0IiwiX2ZlYXR1cmVzNSIsIl9mZWF0dXJlczYiLCJfZmVhdHVyZXM3IiwiX2hvdmVyIiwiX2NvbXBsZXRpb24iLCJjb21wbGV0aW9uIiwiX2NvbXBsZXRpb25SZXNvbHZlIiwiY29tcGxldGlvblJlc29sdmUiLCJfZm9ybWF0IiwiX2RpYWdub3N0aWNzIiwiZGlhZ25vc3RpY3MiLCJfc2lnbmF0dXJlSGVscCIsIl9kb2N1bWVudEhpZ2hsaWdodCIsIl9zZW1hbnRpY1Rva2VucyIsInNlbWFudGljVG9rZW5zIiwiZG9WYWxpZGF0aW9uIiwic2VydmljZXNJbnN0YW5jZXMiLCJzZXNzaW9uSURMaXN0IiwiZG9jdW1lbnRzIiwicG9zdE1lc3NhZ2UiLCJmbGF0IiwicHJvdmlkZVZhbGlkYXRpb25Gb3JTZXJ2aWNlSW5zdGFuY2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZXYiLCJkYXRhIiwiX21lc3NhZ2Vfc2Vzc2lvbklkIiwiY29tcGxldGlvbnMiLCJkb0NvbXBsZXRlIiwiX3RoaXNfZmlsdGVyQnlGZWF0dXJlX2ZpbmQiLCJmaW5kIiwiZG9SZXNvbHZlIiwic2V0VmFsdWUiLCJhcHBseURlbHRhcyIsImJpbmQiLCJoaWdobGlnaHRzIl0sInNvdXJjZVJvb3QiOiIifQ==