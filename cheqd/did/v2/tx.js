"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgDeactivateDidDocResponse = exports.MsgDeactivateDidDocPayload = exports.MsgUpdateDidDocResponse = exports.MsgUpdateDidDocPayload = exports.MsgCreateDidDocResponse = exports.MsgCreateDidDocPayload = exports.SignInfo = exports.MsgDeactivateDidDoc = exports.MsgUpdateDidDoc = exports.MsgCreateDidDoc = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
const diddoc_1 = require("./diddoc");
exports.protobufPackage = "cheqd.did.v2";
function createBaseMsgCreateDidDoc() {
    return { $type: "cheqd.did.v2.MsgCreateDidDoc", payload: undefined, signatures: [] };
}
exports.MsgCreateDidDoc = {
    $type: "cheqd.did.v2.MsgCreateDidDoc",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.payload !== undefined) {
            exports.MsgCreateDidDocPayload.encode(message.payload, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.signatures) {
            exports.SignInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
            $type: exports.MsgCreateDidDoc.$type,
            payload: isSet(object.payload) ? exports.MsgCreateDidDocPayload.fromJSON(object.payload) : undefined,
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => exports.SignInfo.fromJSON(e)) : [],
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
        const message = createBaseMsgCreateDidDoc();
        message.payload = (object.payload !== undefined && object.payload !== null)
            ? exports.MsgCreateDidDocPayload.fromPartial(object.payload)
            : undefined;
        message.signatures = object.signatures?.map((e) => exports.SignInfo.fromPartial(e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgCreateDidDoc.$type, exports.MsgCreateDidDoc);
function createBaseMsgUpdateDidDoc() {
    return { $type: "cheqd.did.v2.MsgUpdateDidDoc", payload: undefined, signatures: [] };
}
exports.MsgUpdateDidDoc = {
    $type: "cheqd.did.v2.MsgUpdateDidDoc",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.payload !== undefined) {
            exports.MsgUpdateDidDocPayload.encode(message.payload, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.signatures) {
            exports.SignInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
            $type: exports.MsgUpdateDidDoc.$type,
            payload: isSet(object.payload) ? exports.MsgUpdateDidDocPayload.fromJSON(object.payload) : undefined,
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => exports.SignInfo.fromJSON(e)) : [],
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
        const message = createBaseMsgUpdateDidDoc();
        message.payload = (object.payload !== undefined && object.payload !== null)
            ? exports.MsgUpdateDidDocPayload.fromPartial(object.payload)
            : undefined;
        message.signatures = object.signatures?.map((e) => exports.SignInfo.fromPartial(e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgUpdateDidDoc.$type, exports.MsgUpdateDidDoc);
function createBaseMsgDeactivateDidDoc() {
    return { $type: "cheqd.did.v2.MsgDeactivateDidDoc", payload: undefined, signatures: [] };
}
exports.MsgDeactivateDidDoc = {
    $type: "cheqd.did.v2.MsgDeactivateDidDoc",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.payload !== undefined) {
            exports.MsgDeactivateDidDocPayload.encode(message.payload, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.signatures) {
            exports.SignInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
            $type: exports.MsgDeactivateDidDoc.$type,
            payload: isSet(object.payload) ? exports.MsgDeactivateDidDocPayload.fromJSON(object.payload) : undefined,
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => exports.SignInfo.fromJSON(e)) : [],
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
        const message = createBaseMsgDeactivateDidDoc();
        message.payload = (object.payload !== undefined && object.payload !== null)
            ? exports.MsgDeactivateDidDocPayload.fromPartial(object.payload)
            : undefined;
        message.signatures = object.signatures?.map((e) => exports.SignInfo.fromPartial(e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgDeactivateDidDoc.$type, exports.MsgDeactivateDidDoc);
function createBaseSignInfo() {
    return { $type: "cheqd.did.v2.SignInfo", verificationMethodId: "", signature: new Uint8Array() };
}
exports.SignInfo = {
    $type: "cheqd.did.v2.SignInfo",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.verificationMethodId !== "") {
            writer.uint32(10).string(message.verificationMethodId);
        }
        if (message.signature.length !== 0) {
            writer.uint32(18).bytes(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
            $type: exports.SignInfo.$type,
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
        const message = createBaseSignInfo();
        message.verificationMethodId = object.verificationMethodId ?? "";
        message.signature = object.signature ?? new Uint8Array();
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.SignInfo.$type, exports.SignInfo);
function createBaseMsgCreateDidDocPayload() {
    return {
        $type: "cheqd.did.v2.MsgCreateDidDocPayload",
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
    $type: "cheqd.did.v2.MsgCreateDidDocPayload",
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
            $type: exports.MsgCreateDidDocPayload.$type,
            context: Array.isArray(object?.context) ? object.context.map((e) => String(e)) : [],
            id: isSet(object.id) ? String(object.id) : "",
            controller: Array.isArray(object?.controller) ? object.controller.map((e) => String(e)) : [],
            verificationMethod: Array.isArray(object?.verificationMethod)
                ? object.verificationMethod.map((e) => diddoc_1.VerificationMethod.fromJSON(e))
                : [],
            authentication: Array.isArray(object?.authentication) ? object.authentication.map((e) => String(e)) : [],
            assertionMethod: Array.isArray(object?.assertionMethod) ? object.assertionMethod.map((e) => String(e)) : [],
            capabilityInvocation: Array.isArray(object?.capabilityInvocation)
                ? object.capabilityInvocation.map((e) => String(e))
                : [],
            capabilityDelegation: Array.isArray(object?.capabilityDelegation)
                ? object.capabilityDelegation.map((e) => String(e))
                : [],
            keyAgreement: Array.isArray(object?.keyAgreement) ? object.keyAgreement.map((e) => String(e)) : [],
            alsoKnownAs: Array.isArray(object?.alsoKnownAs) ? object.alsoKnownAs.map((e) => String(e)) : [],
            service: Array.isArray(object?.service) ? object.service.map((e) => diddoc_1.Service.fromJSON(e)) : [],
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
        const message = createBaseMsgCreateDidDocPayload();
        message.context = object.context?.map((e) => e) || [];
        message.id = object.id ?? "";
        message.controller = object.controller?.map((e) => e) || [];
        message.verificationMethod = object.verificationMethod?.map((e) => diddoc_1.VerificationMethod.fromPartial(e)) || [];
        message.authentication = object.authentication?.map((e) => e) || [];
        message.assertionMethod = object.assertionMethod?.map((e) => e) || [];
        message.capabilityInvocation = object.capabilityInvocation?.map((e) => e) || [];
        message.capabilityDelegation = object.capabilityDelegation?.map((e) => e) || [];
        message.keyAgreement = object.keyAgreement?.map((e) => e) || [];
        message.alsoKnownAs = object.alsoKnownAs?.map((e) => e) || [];
        message.service = object.service?.map((e) => diddoc_1.Service.fromPartial(e)) || [];
        message.versionId = object.versionId ?? "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgCreateDidDocPayload.$type, exports.MsgCreateDidDocPayload);
function createBaseMsgCreateDidDocResponse() {
    return { $type: "cheqd.did.v2.MsgCreateDidDocResponse", value: undefined };
}
exports.MsgCreateDidDocResponse = {
    $type: "cheqd.did.v2.MsgCreateDidDocResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.value !== undefined) {
            diddoc_1.DidDocWithMetadata.encode(message.value, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
        return {
            $type: exports.MsgCreateDidDocResponse.$type,
            value: isSet(object.value) ? diddoc_1.DidDocWithMetadata.fromJSON(object.value) : undefined,
        };
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
typeRegistry_1.messageTypeRegistry.set(exports.MsgCreateDidDocResponse.$type, exports.MsgCreateDidDocResponse);
function createBaseMsgUpdateDidDocPayload() {
    return {
        $type: "cheqd.did.v2.MsgUpdateDidDocPayload",
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
    $type: "cheqd.did.v2.MsgUpdateDidDocPayload",
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
            $type: exports.MsgUpdateDidDocPayload.$type,
            context: Array.isArray(object?.context) ? object.context.map((e) => String(e)) : [],
            id: isSet(object.id) ? String(object.id) : "",
            controller: Array.isArray(object?.controller) ? object.controller.map((e) => String(e)) : [],
            verificationMethod: Array.isArray(object?.verificationMethod)
                ? object.verificationMethod.map((e) => diddoc_1.VerificationMethod.fromJSON(e))
                : [],
            authentication: Array.isArray(object?.authentication) ? object.authentication.map((e) => String(e)) : [],
            assertionMethod: Array.isArray(object?.assertionMethod) ? object.assertionMethod.map((e) => String(e)) : [],
            capabilityInvocation: Array.isArray(object?.capabilityInvocation)
                ? object.capabilityInvocation.map((e) => String(e))
                : [],
            capabilityDelegation: Array.isArray(object?.capabilityDelegation)
                ? object.capabilityDelegation.map((e) => String(e))
                : [],
            keyAgreement: Array.isArray(object?.keyAgreement) ? object.keyAgreement.map((e) => String(e)) : [],
            alsoKnownAs: Array.isArray(object?.alsoKnownAs) ? object.alsoKnownAs.map((e) => String(e)) : [],
            service: Array.isArray(object?.service) ? object.service.map((e) => diddoc_1.Service.fromJSON(e)) : [],
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
        const message = createBaseMsgUpdateDidDocPayload();
        message.context = object.context?.map((e) => e) || [];
        message.id = object.id ?? "";
        message.controller = object.controller?.map((e) => e) || [];
        message.verificationMethod = object.verificationMethod?.map((e) => diddoc_1.VerificationMethod.fromPartial(e)) || [];
        message.authentication = object.authentication?.map((e) => e) || [];
        message.assertionMethod = object.assertionMethod?.map((e) => e) || [];
        message.capabilityInvocation = object.capabilityInvocation?.map((e) => e) || [];
        message.capabilityDelegation = object.capabilityDelegation?.map((e) => e) || [];
        message.keyAgreement = object.keyAgreement?.map((e) => e) || [];
        message.alsoKnownAs = object.alsoKnownAs?.map((e) => e) || [];
        message.service = object.service?.map((e) => diddoc_1.Service.fromPartial(e)) || [];
        message.versionId = object.versionId ?? "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgUpdateDidDocPayload.$type, exports.MsgUpdateDidDocPayload);
function createBaseMsgUpdateDidDocResponse() {
    return { $type: "cheqd.did.v2.MsgUpdateDidDocResponse", value: undefined };
}
exports.MsgUpdateDidDocResponse = {
    $type: "cheqd.did.v2.MsgUpdateDidDocResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.value !== undefined) {
            diddoc_1.DidDocWithMetadata.encode(message.value, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
        return {
            $type: exports.MsgUpdateDidDocResponse.$type,
            value: isSet(object.value) ? diddoc_1.DidDocWithMetadata.fromJSON(object.value) : undefined,
        };
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
typeRegistry_1.messageTypeRegistry.set(exports.MsgUpdateDidDocResponse.$type, exports.MsgUpdateDidDocResponse);
function createBaseMsgDeactivateDidDocPayload() {
    return { $type: "cheqd.did.v2.MsgDeactivateDidDocPayload", id: "", versionId: "" };
}
exports.MsgDeactivateDidDocPayload = {
    $type: "cheqd.did.v2.MsgDeactivateDidDocPayload",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.versionId !== "") {
            writer.uint32(18).string(message.versionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
            $type: exports.MsgDeactivateDidDocPayload.$type,
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
        const message = createBaseMsgDeactivateDidDocPayload();
        message.id = object.id ?? "";
        message.versionId = object.versionId ?? "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.MsgDeactivateDidDocPayload.$type, exports.MsgDeactivateDidDocPayload);
function createBaseMsgDeactivateDidDocResponse() {
    return { $type: "cheqd.did.v2.MsgDeactivateDidDocResponse", value: undefined };
}
exports.MsgDeactivateDidDocResponse = {
    $type: "cheqd.did.v2.MsgDeactivateDidDocResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.value !== undefined) {
            diddoc_1.DidDocWithMetadata.encode(message.value, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
        return {
            $type: exports.MsgDeactivateDidDocResponse.$type,
            value: isSet(object.value) ? diddoc_1.DidDocWithMetadata.fromJSON(object.value) : undefined,
        };
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
typeRegistry_1.messageTypeRegistry.set(exports.MsgDeactivateDidDocResponse.$type, exports.MsgDeactivateDidDocResponse);
class MsgClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || "cheqd.did.v2.Msg";
        this.rpc = rpc;
        this.CreateDidDoc = this.CreateDidDoc.bind(this);
        this.UpdateDidDoc = this.UpdateDidDoc.bind(this);
        this.DeactivateDidDoc = this.DeactivateDidDoc.bind(this);
    }
    CreateDidDoc(request) {
        const data = exports.MsgCreateDidDoc.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateDidDoc", data);
        return promise.then((data) => exports.MsgCreateDidDocResponse.decode(new minimal_1.default.Reader(data)));
    }
    UpdateDidDoc(request) {
        const data = exports.MsgUpdateDidDoc.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateDidDoc", data);
        return promise.then((data) => exports.MsgUpdateDidDocResponse.decode(new minimal_1.default.Reader(data)));
    }
    DeactivateDidDoc(request) {
        const data = exports.MsgDeactivateDidDoc.encode(request).finish();
        const promise = this.rpc.request(this.service, "DeactivateDidDoc", data);
        return promise.then((data) => exports.MsgDeactivateDidDocResponse.decode(new minimal_1.default.Reader(data)));
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
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=tx.js.map