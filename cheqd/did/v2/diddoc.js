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
exports.Metadata = exports.DidDocWithMetadata = exports.Service = exports.VerificationMethod = exports.DidDoc = exports.protobufPackage = void 0;
/* eslint-disable */
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "cheqd.did.v2";
function createBaseDidDoc() {
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
exports.DidDoc = {
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
        const message = createBaseDidDoc();
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
        const message = createBaseDidDoc();
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
    return { id: "", type: "", controller: "", verificationMaterial: "" };
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
        if (message.verificationMaterial !== "") {
            writer.uint32(34).string(message.verificationMaterial);
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
                    message.verificationMaterial = reader.string();
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
            verificationMaterial: isSet(object.verificationMaterial) ? String(object.verificationMaterial) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.type !== undefined && (obj.type = message.type);
        message.controller !== undefined && (obj.controller = message.controller);
        message.verificationMaterial !== undefined && (obj.verificationMaterial = message.verificationMaterial);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseVerificationMethod();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : "";
        message.controller = (_c = object.controller) !== null && _c !== void 0 ? _c : "";
        message.verificationMaterial = (_d = object.verificationMaterial) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseService() {
    return { id: "", type: "", serviceEndpoint: [] };
}
exports.Service = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== "") {
            writer.uint32(18).string(message.type);
        }
        for (const v of message.serviceEndpoint) {
            writer.uint32(26).string(v);
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
                    message.serviceEndpoint.push(reader.string());
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
            serviceEndpoint: Array.isArray(object === null || object === void 0 ? void 0 : object.serviceEndpoint) ? object.serviceEndpoint.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.type !== undefined && (obj.type = message.type);
        if (message.serviceEndpoint) {
            obj.serviceEndpoint = message.serviceEndpoint.map((e) => e);
        }
        else {
            obj.serviceEndpoint = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseService();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.type = (_b = object.type) !== null && _b !== void 0 ? _b : "";
        message.serviceEndpoint = ((_c = object.serviceEndpoint) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
function createBaseDidDocWithMetadata() {
    return { didDoc: undefined, metadata: undefined };
}
exports.DidDocWithMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.didDoc !== undefined) {
            exports.DidDoc.encode(message.didDoc, writer.uint32(10).fork()).ldelim();
        }
        if (message.metadata !== undefined) {
            exports.Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDidDocWithMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.didDoc = exports.DidDoc.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.metadata = exports.Metadata.decode(reader, reader.uint32());
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
            didDoc: isSet(object.didDoc) ? exports.DidDoc.fromJSON(object.didDoc) : undefined,
            metadata: isSet(object.metadata) ? exports.Metadata.fromJSON(object.metadata) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.didDoc !== undefined && (obj.didDoc = message.didDoc ? exports.DidDoc.toJSON(message.didDoc) : undefined);
        message.metadata !== undefined && (obj.metadata = message.metadata ? exports.Metadata.toJSON(message.metadata) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDidDocWithMetadata();
        message.didDoc = (object.didDoc !== undefined && object.didDoc !== null)
            ? exports.DidDoc.fromPartial(object.didDoc)
            : undefined;
        message.metadata = (object.metadata !== undefined && object.metadata !== null)
            ? exports.Metadata.fromPartial(object.metadata)
            : undefined;
        return message;
    },
};
function createBaseMetadata() {
    return { created: "", updated: "", deactivated: false, versionId: "", nextVersionId: "", previousVersionId: "" };
}
exports.Metadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.created !== "") {
            writer.uint32(10).string(message.created);
        }
        if (message.updated !== "") {
            writer.uint32(18).string(message.updated);
        }
        if (message.deactivated === true) {
            writer.uint32(24).bool(message.deactivated);
        }
        if (message.versionId !== "") {
            writer.uint32(34).string(message.versionId);
        }
        if (message.nextVersionId !== "") {
            writer.uint32(42).string(message.nextVersionId);
        }
        if (message.previousVersionId !== "") {
            writer.uint32(50).string(message.previousVersionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.created = reader.string();
                    break;
                case 2:
                    message.updated = reader.string();
                    break;
                case 3:
                    message.deactivated = reader.bool();
                    break;
                case 4:
                    message.versionId = reader.string();
                    break;
                case 5:
                    message.nextVersionId = reader.string();
                    break;
                case 6:
                    message.previousVersionId = reader.string();
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
            created: isSet(object.created) ? String(object.created) : "",
            updated: isSet(object.updated) ? String(object.updated) : "",
            deactivated: isSet(object.deactivated) ? Boolean(object.deactivated) : false,
            versionId: isSet(object.versionId) ? String(object.versionId) : "",
            nextVersionId: isSet(object.nextVersionId) ? String(object.nextVersionId) : "",
            previousVersionId: isSet(object.previousVersionId) ? String(object.previousVersionId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.created !== undefined && (obj.created = message.created);
        message.updated !== undefined && (obj.updated = message.updated);
        message.deactivated !== undefined && (obj.deactivated = message.deactivated);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.nextVersionId !== undefined && (obj.nextVersionId = message.nextVersionId);
        message.previousVersionId !== undefined && (obj.previousVersionId = message.previousVersionId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseMetadata();
        message.created = (_a = object.created) !== null && _a !== void 0 ? _a : "";
        message.updated = (_b = object.updated) !== null && _b !== void 0 ? _b : "";
        message.deactivated = (_c = object.deactivated) !== null && _c !== void 0 ? _c : false;
        message.versionId = (_d = object.versionId) !== null && _d !== void 0 ? _d : "";
        message.nextVersionId = (_e = object.nextVersionId) !== null && _e !== void 0 ? _e : "";
        message.previousVersionId = (_f = object.previousVersionId) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
