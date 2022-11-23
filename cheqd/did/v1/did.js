"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = exports.VerificationMethod = exports.Did = exports.protobufPackage = void 0;
/* eslint-disable */
const _m0 = __importStar(require("protobufjs/minimal"));
const common_1 = require("./common");
exports.protobufPackage = "cheqdid.cheqdnode.cheqd.v1";
function createBaseDid() {
    return {
        context: [],
        id: "",
        controller: [],
        verificationMethod: [],
        authentication: [],
        assertionMethod: [],
        capabilityInvocation: [],
        capabilityDelegation: [],
        keyAgreement: [],
        service: [],
        alsoKnownAs: [],
    };
}
exports.Did = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.context) {
            writer.uint32(10).string(v);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        for (const v of message.controller) {
            writer.uint32(26).string(v);
        }
        for (const v of message.verificationMethod) {
            exports.VerificationMethod.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.authentication) {
            writer.uint32(42).string(v);
        }
        for (const v of message.assertionMethod) {
            writer.uint32(50).string(v);
        }
        for (const v of message.capabilityInvocation) {
            writer.uint32(58).string(v);
        }
        for (const v of message.capabilityDelegation) {
            writer.uint32(66).string(v);
        }
        for (const v of message.keyAgreement) {
            writer.uint32(74).string(v);
        }
        for (const v of message.service) {
            exports.Service.encode(v, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.alsoKnownAs) {
            writer.uint32(90).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDid();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.context.push(reader.string());
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.controller.push(reader.string());
                    break;
                case 4:
                    message.verificationMethod.push(exports.VerificationMethod.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.authentication.push(reader.string());
                    break;
                case 6:
                    message.assertionMethod.push(reader.string());
                    break;
                case 7:
                    message.capabilityInvocation.push(reader.string());
                    break;
                case 8:
                    message.capabilityDelegation.push(reader.string());
                    break;
                case 9:
                    message.keyAgreement.push(reader.string());
                    break;
                case 10:
                    message.service.push(exports.Service.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.alsoKnownAs.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            context: Array.isArray(object === null || object === void 0 ? void 0 : object.context) ? object.context.map((e) => String(e)) : [],
            id: isSet(object.id) ? String(object.id) : "",
            controller: Array.isArray(object === null || object === void 0 ? void 0 : object.controller) ? object.controller.map((e) => String(e)) : [],
            verificationMethod: Array.isArray(object === null || object === void 0 ? void 0 : object.verificationMethod)
                ? object.verificationMethod.map((e) => exports.VerificationMethod.fromJSON(e))
                : [],
            authentication: Array.isArray(object === null || object === void 0 ? void 0 : object.authentication) ? object.authentication.map((e) => String(e)) : [],
            assertionMethod: Array.isArray(object === null || object === void 0 ? void 0 : object.assertionMethod) ? object.assertionMethod.map((e) => String(e)) : [],
            capabilityInvocation: Array.isArray(object === null || object === void 0 ? void 0 : object.capabilityInvocation)
                ? object.capabilityInvocation.map((e) => String(e))
                : [],
            capabilityDelegation: Array.isArray(object === null || object === void 0 ? void 0 : object.capabilityDelegation)
                ? object.capabilityDelegation.map((e) => String(e))
                : [],
            keyAgreement: Array.isArray(object === null || object === void 0 ? void 0 : object.keyAgreement) ? object.keyAgreement.map((e) => String(e)) : [],
            service: Array.isArray(object === null || object === void 0 ? void 0 : object.service) ? object.service.map((e) => exports.Service.fromJSON(e)) : [],
            alsoKnownAs: Array.isArray(object === null || object === void 0 ? void 0 : object.alsoKnownAs) ? object.alsoKnownAs.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.context) {
            obj.context = message.context.map((e) => e);
        }
        else {
            obj.context = [];
        }
        message.id !== undefined && (obj.id = message.id);
        if (message.controller) {
            obj.controller = message.controller.map((e) => e);
        }
        else {
            obj.controller = [];
        }
        if (message.verificationMethod) {
            obj.verificationMethod = message.verificationMethod.map((e) => e ? exports.VerificationMethod.toJSON(e) : undefined);
        }
        else {
            obj.verificationMethod = [];
        }
        if (message.authentication) {
            obj.authentication = message.authentication.map((e) => e);
        }
        else {
            obj.authentication = [];
        }
        if (message.assertionMethod) {
            obj.assertionMethod = message.assertionMethod.map((e) => e);
        }
        else {
            obj.assertionMethod = [];
        }
        if (message.capabilityInvocation) {
            obj.capabilityInvocation = message.capabilityInvocation.map((e) => e);
        }
        else {
            obj.capabilityInvocation = [];
        }
        if (message.capabilityDelegation) {
            obj.capabilityDelegation = message.capabilityDelegation.map((e) => e);
        }
        else {
            obj.capabilityDelegation = [];
        }
        if (message.keyAgreement) {
            obj.keyAgreement = message.keyAgreement.map((e) => e);
        }
        else {
            obj.keyAgreement = [];
        }
        if (message.service) {
            obj.service = message.service.map((e) => e ? exports.Service.toJSON(e) : undefined);
        }
        else {
            obj.service = [];
        }
        if (message.alsoKnownAs) {
            obj.alsoKnownAs = message.alsoKnownAs.map((e) => e);
        }
        else {
            obj.alsoKnownAs = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = createBaseDid();
        message.context = ((_a = object.context) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        message.controller = ((_c = object.controller) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.verificationMethod = ((_d = object.verificationMethod) === null || _d === void 0 ? void 0 : _d.map((e) => exports.VerificationMethod.fromPartial(e))) || [];
        message.authentication = ((_e = object.authentication) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        message.assertionMethod = ((_f = object.assertionMethod) === null || _f === void 0 ? void 0 : _f.map((e) => e)) || [];
        message.capabilityInvocation = ((_g = object.capabilityInvocation) === null || _g === void 0 ? void 0 : _g.map((e) => e)) || [];
        message.capabilityDelegation = ((_h = object.capabilityDelegation) === null || _h === void 0 ? void 0 : _h.map((e) => e)) || [];
        message.keyAgreement = ((_j = object.keyAgreement) === null || _j === void 0 ? void 0 : _j.map((e) => e)) || [];
        message.service = ((_k = object.service) === null || _k === void 0 ? void 0 : _k.map((e) => exports.Service.fromPartial(e))) || [];
        message.alsoKnownAs = ((_l = object.alsoKnownAs) === null || _l === void 0 ? void 0 : _l.map((e) => e)) || [];
        return message;
    },
};
function createBaseVerificationMethod() {
    return { id: "", type: "", controller: "", publicKeyJwk: [], publicKeyMultibase: "" };
}
exports.VerificationMethod = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== "") {
            writer.uint32(18).string(message.type);
        }
        if (message.controller !== "") {
            writer.uint32(26).string(message.controller);
        }
        for (const v of message.publicKeyJwk) {
            common_1.KeyValuePair.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.publicKeyMultibase !== "") {
            writer.uint32(42).string(message.publicKeyMultibase);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerificationMethod();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                case 3:
                    message.controller = reader.string();
                    break;
                case 4:
                    message.publicKeyJwk.push(common_1.KeyValuePair.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.publicKeyMultibase = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : "",
            type: isSet(object.type) ? String(object.type) : "",
            controller: isSet(object.controller) ? String(object.controller) : "",
            publicKeyJwk: Array.isArray(object === null || object === void 0 ? void 0 : object.publicKeyJwk)
                ? object.publicKeyJwk.map((e) => common_1.KeyValuePair.fromJSON(e))
                : [],
            publicKeyMultibase: isSet(object.publicKeyMultibase) ? String(object.publicKeyMultibase) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.type !== undefined && (obj.type = message.type);
        message.controller !== undefined && (obj.controller = message.controller);
        if (message.publicKeyJwk) {
            obj.publicKeyJwk = message.publicKeyJwk.map((e) => e ? common_1.KeyValuePair.toJSON(e) : undefined);
        }
        else {
            obj.publicKeyJwk = [];
        }
        message.publicKeyMultibase !== undefined && (obj.publicKeyMultibase = message.publicKeyMultibase);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseVerificationMethod();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : "";
        message.controller = (_c = object.controller) !== null && _c !== void 0 ? _c : "";
        message.publicKeyJwk = ((_d = object.publicKeyJwk) === null || _d === void 0 ? void 0 : _d.map((e) => common_1.KeyValuePair.fromPartial(e))) || [];
        message.publicKeyMultibase = (_e = object.publicKeyMultibase) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseService() {
    return { id: "", type: "", serviceEndpoint: "" };
}
exports.Service = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== "") {
            writer.uint32(18).string(message.type);
        }
        if (message.serviceEndpoint !== "") {
            writer.uint32(26).string(message.serviceEndpoint);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseService();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.type = reader.string();
                    break;
                case 3:
                    message.serviceEndpoint = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? String(object.id) : "",
            type: isSet(object.type) ? String(object.type) : "",
            serviceEndpoint: isSet(object.serviceEndpoint) ? String(object.serviceEndpoint) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.type !== undefined && (obj.type = message.type);
        message.serviceEndpoint !== undefined && (obj.serviceEndpoint = message.serviceEndpoint);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseService();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : "";
        message.serviceEndpoint = (_c = object.serviceEndpoint) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
