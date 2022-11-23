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
exports.MsgClientImpl = exports.MsgUpdateDidResponse = exports.MsgUpdateDidPayload = exports.MsgCreateDidResponse = exports.MsgCreateDidPayload = exports.MsgDeactivateDidResponse = exports.MsgDeactivateDidPayload = exports.SignInfo = exports.MsgDeactivateDid = exports.MsgUpdateDid = exports.MsgCreateDid = exports.protobufPackage = void 0;
/* eslint-disable */
const _m0 = __importStar(require("protobufjs/minimal"));
const did_1 = require("./did");
const stateValue_1 = require("./stateValue");
exports.protobufPackage = "cheqdid.cheqdnode.cheqd.v1";
function createBaseMsgCreateDid() {
    return { payload: undefined, signatures: [] };
}
exports.MsgCreateDid = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.payload !== undefined) {
            exports.MsgCreateDidPayload.encode(message.payload, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.signatures) {
            exports.SignInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDid();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.payload = exports.MsgCreateDidPayload.decode(reader, reader.uint32());
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
            payload: isSet(object.payload) ? exports.MsgCreateDidPayload.fromJSON(object.payload) : undefined,
            signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures) ? object.signatures.map((e) => exports.SignInfo.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.payload !== undefined &&
            (obj.payload = message.payload ? exports.MsgCreateDidPayload.toJSON(message.payload) : undefined);
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
        const message = createBaseMsgCreateDid();
        message.payload = (object.payload !== undefined && object.payload !== null)
            ? exports.MsgCreateDidPayload.fromPartial(object.payload)
            : undefined;
        message.signatures = ((_a = object.signatures) === null || _a === void 0 ? void 0 : _a.map((e) => exports.SignInfo.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMsgUpdateDid() {
    return { payload: undefined, signatures: [] };
}
exports.MsgUpdateDid = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.payload !== undefined) {
            exports.MsgUpdateDidPayload.encode(message.payload, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.signatures) {
            exports.SignInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateDid();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.payload = exports.MsgUpdateDidPayload.decode(reader, reader.uint32());
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
            payload: isSet(object.payload) ? exports.MsgUpdateDidPayload.fromJSON(object.payload) : undefined,
            signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures) ? object.signatures.map((e) => exports.SignInfo.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.payload !== undefined &&
            (obj.payload = message.payload ? exports.MsgUpdateDidPayload.toJSON(message.payload) : undefined);
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
        const message = createBaseMsgUpdateDid();
        message.payload = (object.payload !== undefined && object.payload !== null)
            ? exports.MsgUpdateDidPayload.fromPartial(object.payload)
            : undefined;
        message.signatures = ((_a = object.signatures) === null || _a === void 0 ? void 0 : _a.map((e) => exports.SignInfo.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMsgDeactivateDid() {
    return { payload: undefined, signatures: [] };
}
exports.MsgDeactivateDid = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.payload !== undefined) {
            exports.MsgDeactivateDidPayload.encode(message.payload, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.signatures) {
            exports.SignInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeactivateDid();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.payload = exports.MsgDeactivateDidPayload.decode(reader, reader.uint32());
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
            payload: isSet(object.payload) ? exports.MsgDeactivateDidPayload.fromJSON(object.payload) : undefined,
            signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures) ? object.signatures.map((e) => exports.SignInfo.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.payload !== undefined &&
            (obj.payload = message.payload ? exports.MsgDeactivateDidPayload.toJSON(message.payload) : undefined);
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
        const message = createBaseMsgDeactivateDid();
        message.payload = (object.payload !== undefined && object.payload !== null)
            ? exports.MsgDeactivateDidPayload.fromPartial(object.payload)
            : undefined;
        message.signatures = ((_a = object.signatures) === null || _a === void 0 ? void 0 : _a.map((e) => exports.SignInfo.fromPartial(e))) || [];
        return message;
    },
};
function createBaseSignInfo() {
    return { verificationMethodId: "", signature: "" };
}
exports.SignInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.verificationMethodId !== "") {
            writer.uint32(10).string(message.verificationMethodId);
        }
        if (message.signature !== "") {
            writer.uint32(18).string(message.signature);
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
                    message.signature = reader.string();
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
            signature: isSet(object.signature) ? String(object.signature) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.verificationMethodId !== undefined && (obj.verificationMethodId = message.verificationMethodId);
        message.signature !== undefined && (obj.signature = message.signature);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSignInfo();
        message.verificationMethodId = (_a = object.verificationMethodId) !== null && _a !== void 0 ? _a : "";
        message.signature = (_b = object.signature) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgDeactivateDidPayload() {
    return { id: "" };
}
exports.MsgDeactivateDidPayload = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeactivateDidPayload();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgDeactivateDidPayload();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMsgDeactivateDidResponse() {
    return { did: undefined, metadata: undefined };
}
exports.MsgDeactivateDidResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.did !== undefined) {
            did_1.Did.encode(message.did, writer.uint32(10).fork()).ldelim();
        }
        if (message.metadata !== undefined) {
            stateValue_1.Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeactivateDidResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.did = did_1.Did.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.metadata = stateValue_1.Metadata.decode(reader, reader.uint32());
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
            did: isSet(object.did) ? did_1.Did.fromJSON(object.did) : undefined,
            metadata: isSet(object.metadata) ? stateValue_1.Metadata.fromJSON(object.metadata) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.did !== undefined && (obj.did = message.did ? did_1.Did.toJSON(message.did) : undefined);
        message.metadata !== undefined && (obj.metadata = message.metadata ? stateValue_1.Metadata.toJSON(message.metadata) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgDeactivateDidResponse();
        message.did = (object.did !== undefined && object.did !== null) ? did_1.Did.fromPartial(object.did) : undefined;
        message.metadata = (object.metadata !== undefined && object.metadata !== null)
            ? stateValue_1.Metadata.fromPartial(object.metadata)
            : undefined;
        return message;
    },
};
function createBaseMsgCreateDidPayload() {
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
    };
}
exports.MsgCreateDidPayload = {
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
            did_1.VerificationMethod.encode(v, writer.uint32(34).fork()).ldelim();
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
            did_1.Service.encode(v, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDidPayload();
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
                    message.verificationMethod.push(did_1.VerificationMethod.decode(reader, reader.uint32()));
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
                    message.service.push(did_1.Service.decode(reader, reader.uint32()));
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
                ? object.verificationMethod.map((e) => did_1.VerificationMethod.fromJSON(e))
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
            service: Array.isArray(object === null || object === void 0 ? void 0 : object.service) ? object.service.map((e) => did_1.Service.fromJSON(e)) : [],
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
            obj.verificationMethod = message.verificationMethod.map((e) => e ? did_1.VerificationMethod.toJSON(e) : undefined);
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
            obj.service = message.service.map((e) => e ? did_1.Service.toJSON(e) : undefined);
        }
        else {
            obj.service = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = createBaseMsgCreateDidPayload();
        message.context = ((_a = object.context) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        message.controller = ((_c = object.controller) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.verificationMethod = ((_d = object.verificationMethod) === null || _d === void 0 ? void 0 : _d.map((e) => did_1.VerificationMethod.fromPartial(e))) || [];
        message.authentication = ((_e = object.authentication) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        message.assertionMethod = ((_f = object.assertionMethod) === null || _f === void 0 ? void 0 : _f.map((e) => e)) || [];
        message.capabilityInvocation = ((_g = object.capabilityInvocation) === null || _g === void 0 ? void 0 : _g.map((e) => e)) || [];
        message.capabilityDelegation = ((_h = object.capabilityDelegation) === null || _h === void 0 ? void 0 : _h.map((e) => e)) || [];
        message.keyAgreement = ((_j = object.keyAgreement) === null || _j === void 0 ? void 0 : _j.map((e) => e)) || [];
        message.alsoKnownAs = ((_k = object.alsoKnownAs) === null || _k === void 0 ? void 0 : _k.map((e) => e)) || [];
        message.service = ((_l = object.service) === null || _l === void 0 ? void 0 : _l.map((e) => did_1.Service.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMsgCreateDidResponse() {
    return { id: "" };
}
exports.MsgCreateDidResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDidResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgCreateDidResponse();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMsgUpdateDidPayload() {
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
exports.MsgUpdateDidPayload = {
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
            did_1.VerificationMethod.encode(v, writer.uint32(34).fork()).ldelim();
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
            did_1.Service.encode(v, writer.uint32(90).fork()).ldelim();
        }
        if (message.versionId !== "") {
            writer.uint32(98).string(message.versionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateDidPayload();
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
                    message.verificationMethod.push(did_1.VerificationMethod.decode(reader, reader.uint32()));
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
                    message.service.push(did_1.Service.decode(reader, reader.uint32()));
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
                ? object.verificationMethod.map((e) => did_1.VerificationMethod.fromJSON(e))
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
            service: Array.isArray(object === null || object === void 0 ? void 0 : object.service) ? object.service.map((e) => did_1.Service.fromJSON(e)) : [],
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
            obj.verificationMethod = message.verificationMethod.map((e) => e ? did_1.VerificationMethod.toJSON(e) : undefined);
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
            obj.service = message.service.map((e) => e ? did_1.Service.toJSON(e) : undefined);
        }
        else {
            obj.service = [];
        }
        message.versionId !== undefined && (obj.versionId = message.versionId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const message = createBaseMsgUpdateDidPayload();
        message.context = ((_a = object.context) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        message.controller = ((_c = object.controller) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.verificationMethod = ((_d = object.verificationMethod) === null || _d === void 0 ? void 0 : _d.map((e) => did_1.VerificationMethod.fromPartial(e))) || [];
        message.authentication = ((_e = object.authentication) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        message.assertionMethod = ((_f = object.assertionMethod) === null || _f === void 0 ? void 0 : _f.map((e) => e)) || [];
        message.capabilityInvocation = ((_g = object.capabilityInvocation) === null || _g === void 0 ? void 0 : _g.map((e) => e)) || [];
        message.capabilityDelegation = ((_h = object.capabilityDelegation) === null || _h === void 0 ? void 0 : _h.map((e) => e)) || [];
        message.keyAgreement = ((_j = object.keyAgreement) === null || _j === void 0 ? void 0 : _j.map((e) => e)) || [];
        message.alsoKnownAs = ((_k = object.alsoKnownAs) === null || _k === void 0 ? void 0 : _k.map((e) => e)) || [];
        message.service = ((_l = object.service) === null || _l === void 0 ? void 0 : _l.map((e) => did_1.Service.fromPartial(e))) || [];
        message.versionId = (_m = object.versionId) !== null && _m !== void 0 ? _m : "";
        return message;
    },
};
function createBaseMsgUpdateDidResponse() {
    return { id: "" };
}
exports.MsgUpdateDidResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateDidResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgUpdateDidResponse();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "cheqdid.cheqdnode.cheqd.v1.Msg";
        this.rpc = rpc;
        this.CreateDid = this.CreateDid.bind(this);
        this.UpdateDid = this.UpdateDid.bind(this);
        this.DeactivateDid = this.DeactivateDid.bind(this);
    }
    CreateDid(request) {
        const data = exports.MsgCreateDid.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateDid", data);
        return promise.then((data) => exports.MsgCreateDidResponse.decode(new _m0.Reader(data)));
    }
    UpdateDid(request) {
        const data = exports.MsgUpdateDid.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateDid", data);
        return promise.then((data) => exports.MsgUpdateDidResponse.decode(new _m0.Reader(data)));
    }
    DeactivateDid(request) {
        const data = exports.MsgDeactivateDid.encode(request).finish();
        const promise = this.rpc.request(this.service, "DeactivateDid", data);
        return promise.then((data) => exports.MsgDeactivateDidResponse.decode(new _m0.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
