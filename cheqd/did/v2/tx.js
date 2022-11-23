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
exports.MsgClientImpl = exports.MsgDeactivateDidDocResponse = exports.MsgDeactivateDidDocPayload = exports.MsgUpdateDidDocResponse = exports.MsgUpdateDidDocPayload = exports.MsgCreateDidDocResponse = exports.MsgCreateDidDocPayload = exports.SignInfo = exports.MsgDeactivateDidDoc = exports.MsgUpdateDidDoc = exports.MsgCreateDidDoc = exports.protobufPackage = void 0;
/* eslint-disable */
const _m0 = __importStar(require("protobufjs/minimal"));
const diddoc_1 = require("./diddoc");
exports.protobufPackage = "cheqd.did.v2";
function createBaseMsgCreateDidDoc() {
    return { payload: undefined, signatures: [] };
}
exports.MsgCreateDidDoc = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.payload !== undefined) {
            exports.MsgCreateDidDocPayload.encode(message.payload, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.signatures) {
            exports.SignInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDidDoc();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.payload = exports.MsgCreateDidDocPayload.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signatures.push(exports.SignInfo.decode(reader, reader.uint32()));
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
            payload: isSet(object.payload) ? exports.MsgCreateDidDocPayload.fromJSON(object.payload) : undefined,
            signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures) ? object.signatures.map((e) => exports.SignInfo.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.payload !== undefined &&
            (obj.payload = message.payload ? exports.MsgCreateDidDocPayload.toJSON(message.payload) : undefined);
        if (message.signatures) {
            obj.signatures = message.signatures.map((e) => e ? exports.SignInfo.toJSON(e) : undefined);
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgCreateDidDoc();
        message.payload = (object.payload !== undefined && object.payload !== null)
            ? exports.MsgCreateDidDocPayload.fromPartial(object.payload)
            : undefined;
        message.signatures = ((_a = object.signatures) === null || _a === void 0 ? void 0 : _a.map((e) => exports.SignInfo.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMsgUpdateDidDoc() {
    return { payload: undefined, signatures: [] };
}
exports.MsgUpdateDidDoc = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.payload !== undefined) {
            exports.MsgUpdateDidDocPayload.encode(message.payload, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.signatures) {
            exports.SignInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateDidDoc();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.payload = exports.MsgUpdateDidDocPayload.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signatures.push(exports.SignInfo.decode(reader, reader.uint32()));
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
            payload: isSet(object.payload) ? exports.MsgUpdateDidDocPayload.fromJSON(object.payload) : undefined,
            signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures) ? object.signatures.map((e) => exports.SignInfo.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.payload !== undefined &&
            (obj.payload = message.payload ? exports.MsgUpdateDidDocPayload.toJSON(message.payload) : undefined);
        if (message.signatures) {
            obj.signatures = message.signatures.map((e) => e ? exports.SignInfo.toJSON(e) : undefined);
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgUpdateDidDoc();
        message.payload = (object.payload !== undefined && object.payload !== null)
            ? exports.MsgUpdateDidDocPayload.fromPartial(object.payload)
            : undefined;
        message.signatures = ((_a = object.signatures) === null || _a === void 0 ? void 0 : _a.map((e) => exports.SignInfo.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMsgDeactivateDidDoc() {
    return { payload: undefined, signatures: [] };
}
exports.MsgDeactivateDidDoc = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.payload !== undefined) {
            exports.MsgDeactivateDidDocPayload.encode(message.payload, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.signatures) {
            exports.SignInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeactivateDidDoc();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.payload = exports.MsgDeactivateDidDocPayload.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signatures.push(exports.SignInfo.decode(reader, reader.uint32()));
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
            payload: isSet(object.payload) ? exports.MsgDeactivateDidDocPayload.fromJSON(object.payload) : undefined,
            signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures) ? object.signatures.map((e) => exports.SignInfo.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.payload !== undefined &&
            (obj.payload = message.payload ? exports.MsgDeactivateDidDocPayload.toJSON(message.payload) : undefined);
        if (message.signatures) {
            obj.signatures = message.signatures.map((e) => e ? exports.SignInfo.toJSON(e) : undefined);
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgDeactivateDidDoc();
        message.payload = (object.payload !== undefined && object.payload !== null)
            ? exports.MsgDeactivateDidDocPayload.fromPartial(object.payload)
            : undefined;
        message.signatures = ((_a = object.signatures) === null || _a === void 0 ? void 0 : _a.map((e) => exports.SignInfo.fromPartial(e))) || [];
        return message;
    },
};
function createBaseSignInfo() {
    return { verificationMethodId: "", signature: new Uint8Array() };
}
exports.SignInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.verificationMethodId !== "") {
            writer.uint32(10).string(message.verificationMethodId);
        }
        if (message.signature.length !== 0) {
            writer.uint32(18).bytes(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.verificationMethodId = reader.string();
                    break;
                case 2:
                    message.signature = reader.bytes();
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
            verificationMethodId: isSet(object.verificationMethodId) ? String(object.verificationMethodId) : "",
            signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.verificationMethodId !== undefined && (obj.verificationMethodId = message.verificationMethodId);
        message.signature !== undefined &&
            (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSignInfo();
        message.verificationMethodId = (_a = object.verificationMethodId) !== null && _a !== void 0 ? _a : "";
        message.signature = (_b = object.signature) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseMsgCreateDidDocPayload() {
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
        alsoKnownAs: [],
        service: [],
        versionId: "",
    };
}
exports.MsgCreateDidDocPayload = {
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
            diddoc_1.VerificationMethod.encode(v, writer.uint32(34).fork()).ldelim();
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
        for (const v of message.alsoKnownAs) {
            writer.uint32(82).string(v);
        }
        for (const v of message.service) {
            diddoc_1.Service.encode(v, writer.uint32(90).fork()).ldelim();
        }
        if (message.versionId !== "") {
            writer.uint32(98).string(message.versionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDidDocPayload();
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
                    message.verificationMethod.push(diddoc_1.VerificationMethod.decode(reader, reader.uint32()));
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
                    message.alsoKnownAs.push(reader.string());
                    break;
                case 11:
                    message.service.push(diddoc_1.Service.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.versionId = reader.string();
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
                ? object.verificationMethod.map((e) => diddoc_1.VerificationMethod.fromJSON(e))
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
            alsoKnownAs: Array.isArray(object === null || object === void 0 ? void 0 : object.alsoKnownAs) ? object.alsoKnownAs.map((e) => String(e)) : [],
            service: Array.isArray(object === null || object === void 0 ? void 0 : object.service) ? object.service.map((e) => diddoc_1.Service.fromJSON(e)) : [],
            versionId: isSet(object.versionId) ? String(object.versionId) : "",
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
            obj.verificationMethod = message.verificationMethod.map((e) => e ? diddoc_1.VerificationMethod.toJSON(e) : undefined);
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
        if (message.alsoKnownAs) {
            obj.alsoKnownAs = message.alsoKnownAs.map((e) => e);
        }
        else {
            obj.alsoKnownAs = [];
        }
        if (message.service) {
            obj.service = message.service.map((e) => e ? diddoc_1.Service.toJSON(e) : undefined);
        }
        else {
            obj.service = [];
        }
        message.versionId !== undefined && (obj.versionId = message.versionId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const message = createBaseMsgCreateDidDocPayload();
        message.context = ((_a = object.context) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        message.controller = ((_c = object.controller) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.verificationMethod = ((_d = object.verificationMethod) === null || _d === void 0 ? void 0 : _d.map((e) => diddoc_1.VerificationMethod.fromPartial(e))) || [];
        message.authentication = ((_e = object.authentication) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        message.assertionMethod = ((_f = object.assertionMethod) === null || _f === void 0 ? void 0 : _f.map((e) => e)) || [];
        message.capabilityInvocation = ((_g = object.capabilityInvocation) === null || _g === void 0 ? void 0 : _g.map((e) => e)) || [];
        message.capabilityDelegation = ((_h = object.capabilityDelegation) === null || _h === void 0 ? void 0 : _h.map((e) => e)) || [];
        message.keyAgreement = ((_j = object.keyAgreement) === null || _j === void 0 ? void 0 : _j.map((e) => e)) || [];
        message.alsoKnownAs = ((_k = object.alsoKnownAs) === null || _k === void 0 ? void 0 : _k.map((e) => e)) || [];
        message.service = ((_l = object.service) === null || _l === void 0 ? void 0 : _l.map((e) => diddoc_1.Service.fromPartial(e))) || [];
        message.versionId = (_m = object.versionId) !== null && _m !== void 0 ? _m : "";
        return message;
    },
};
function createBaseMsgCreateDidDocResponse() {
    return { value: undefined };
}
exports.MsgCreateDidDocResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== undefined) {
            diddoc_1.DidDocWithMetadata.encode(message.value, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDidDocResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = diddoc_1.DidDocWithMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { value: isSet(object.value) ? diddoc_1.DidDocWithMetadata.fromJSON(object.value) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = message.value ? diddoc_1.DidDocWithMetadata.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateDidDocResponse();
        message.value = (object.value !== undefined && object.value !== null)
            ? diddoc_1.DidDocWithMetadata.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseMsgUpdateDidDocPayload() {
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
        alsoKnownAs: [],
        service: [],
        versionId: "",
    };
}
exports.MsgUpdateDidDocPayload = {
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
            diddoc_1.VerificationMethod.encode(v, writer.uint32(34).fork()).ldelim();
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
        for (const v of message.alsoKnownAs) {
            writer.uint32(82).string(v);
        }
        for (const v of message.service) {
            diddoc_1.Service.encode(v, writer.uint32(90).fork()).ldelim();
        }
        if (message.versionId !== "") {
            writer.uint32(98).string(message.versionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateDidDocPayload();
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
                    message.verificationMethod.push(diddoc_1.VerificationMethod.decode(reader, reader.uint32()));
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
                    message.alsoKnownAs.push(reader.string());
                    break;
                case 11:
                    message.service.push(diddoc_1.Service.decode(reader, reader.uint32()));
                    break;
                case 12:
                    message.versionId = reader.string();
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
                ? object.verificationMethod.map((e) => diddoc_1.VerificationMethod.fromJSON(e))
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
            alsoKnownAs: Array.isArray(object === null || object === void 0 ? void 0 : object.alsoKnownAs) ? object.alsoKnownAs.map((e) => String(e)) : [],
            service: Array.isArray(object === null || object === void 0 ? void 0 : object.service) ? object.service.map((e) => diddoc_1.Service.fromJSON(e)) : [],
            versionId: isSet(object.versionId) ? String(object.versionId) : "",
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
            obj.verificationMethod = message.verificationMethod.map((e) => e ? diddoc_1.VerificationMethod.toJSON(e) : undefined);
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
        if (message.alsoKnownAs) {
            obj.alsoKnownAs = message.alsoKnownAs.map((e) => e);
        }
        else {
            obj.alsoKnownAs = [];
        }
        if (message.service) {
            obj.service = message.service.map((e) => e ? diddoc_1.Service.toJSON(e) : undefined);
        }
        else {
            obj.service = [];
        }
        message.versionId !== undefined && (obj.versionId = message.versionId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const message = createBaseMsgUpdateDidDocPayload();
        message.context = ((_a = object.context) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        message.controller = ((_c = object.controller) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.verificationMethod = ((_d = object.verificationMethod) === null || _d === void 0 ? void 0 : _d.map((e) => diddoc_1.VerificationMethod.fromPartial(e))) || [];
        message.authentication = ((_e = object.authentication) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        message.assertionMethod = ((_f = object.assertionMethod) === null || _f === void 0 ? void 0 : _f.map((e) => e)) || [];
        message.capabilityInvocation = ((_g = object.capabilityInvocation) === null || _g === void 0 ? void 0 : _g.map((e) => e)) || [];
        message.capabilityDelegation = ((_h = object.capabilityDelegation) === null || _h === void 0 ? void 0 : _h.map((e) => e)) || [];
        message.keyAgreement = ((_j = object.keyAgreement) === null || _j === void 0 ? void 0 : _j.map((e) => e)) || [];
        message.alsoKnownAs = ((_k = object.alsoKnownAs) === null || _k === void 0 ? void 0 : _k.map((e) => e)) || [];
        message.service = ((_l = object.service) === null || _l === void 0 ? void 0 : _l.map((e) => diddoc_1.Service.fromPartial(e))) || [];
        message.versionId = (_m = object.versionId) !== null && _m !== void 0 ? _m : "";
        return message;
    },
};
function createBaseMsgUpdateDidDocResponse() {
    return { value: undefined };
}
exports.MsgUpdateDidDocResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== undefined) {
            diddoc_1.DidDocWithMetadata.encode(message.value, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateDidDocResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = diddoc_1.DidDocWithMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { value: isSet(object.value) ? diddoc_1.DidDocWithMetadata.fromJSON(object.value) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = message.value ? diddoc_1.DidDocWithMetadata.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateDidDocResponse();
        message.value = (object.value !== undefined && object.value !== null)
            ? diddoc_1.DidDocWithMetadata.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseMsgDeactivateDidDocPayload() {
    return { id: "", versionId: "" };
}
exports.MsgDeactivateDidDocPayload = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.versionId !== "") {
            writer.uint32(18).string(message.versionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeactivateDidDocPayload();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.versionId = reader.string();
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
            versionId: isSet(object.versionId) ? String(object.versionId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgDeactivateDidDocPayload();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.versionId = (_b = object.versionId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgDeactivateDidDocResponse() {
    return { value: undefined };
}
exports.MsgDeactivateDidDocResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== undefined) {
            diddoc_1.DidDocWithMetadata.encode(message.value, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeactivateDidDocResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = diddoc_1.DidDocWithMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { value: isSet(object.value) ? diddoc_1.DidDocWithMetadata.fromJSON(object.value) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = message.value ? diddoc_1.DidDocWithMetadata.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgDeactivateDidDocResponse();
        message.value = (object.value !== undefined && object.value !== null)
            ? diddoc_1.DidDocWithMetadata.fromPartial(object.value)
            : undefined;
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "cheqd.did.v2.Msg";
        this.rpc = rpc;
        this.CreateDidDoc = this.CreateDidDoc.bind(this);
        this.UpdateDidDoc = this.UpdateDidDoc.bind(this);
        this.DeactivateDidDoc = this.DeactivateDidDoc.bind(this);
    }
    CreateDidDoc(request) {
        const data = exports.MsgCreateDidDoc.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateDidDoc", data);
        return promise.then((data) => exports.MsgCreateDidDocResponse.decode(new _m0.Reader(data)));
    }
    UpdateDidDoc(request) {
        const data = exports.MsgUpdateDidDoc.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateDidDoc", data);
        return promise.then((data) => exports.MsgUpdateDidDocResponse.decode(new _m0.Reader(data)));
    }
    DeactivateDidDoc(request) {
        const data = exports.MsgDeactivateDidDoc.encode(request).finish();
        const promise = this.rpc.request(this.service, "DeactivateDidDoc", data);
        return promise.then((data) => exports.MsgDeactivateDidDocResponse.decode(new _m0.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
var globalThis = (() => {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
function bytesFromBase64(b64) {
    if (globalThis.Buffer) {
        return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
    }
    else {
        const bin = globalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (globalThis.Buffer) {
        return globalThis.Buffer.from(arr).toString("base64");
    }
    else {
        const bin = [];
        arr.forEach((byte) => {
            bin.push(String.fromCharCode(byte));
        });
        return globalThis.btoa(bin.join(""));
    }
}
function isSet(value) {
    return value !== null && value !== undefined;
}
