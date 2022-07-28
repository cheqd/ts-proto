"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgUpdateDidResponse = exports.MsgUpdateDidPayload = exports.MsgCreateDidResponse = exports.MsgCreateDidPayload = exports.SignInfo = exports.MsgUpdateDid = exports.MsgCreateDid = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const did_1 = require("./did");
exports.protobufPackage = "cheqdid.cheqdnode.cheqd.v1";
const baseMsgCreateDid = {};
exports.MsgCreateDid = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.payload !== undefined) {
            exports.MsgCreateDidPayload.encode(message.payload, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.signatures) {
            exports.SignInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateDid };
        message.signatures = [];
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
        const message = { ...baseMsgCreateDid };
        message.signatures = [];
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = exports.MsgCreateDidPayload.fromJSON(object.payload);
        }
        else {
            message.payload = undefined;
        }
        if (object.signatures !== undefined && object.signatures !== null) {
            for (const e of object.signatures) {
                message.signatures.push(exports.SignInfo.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.payload !== undefined &&
            (obj.payload = message.payload
                ? exports.MsgCreateDidPayload.toJSON(message.payload)
                : undefined);
        if (message.signatures) {
            obj.signatures = message.signatures.map((e) => e ? exports.SignInfo.toJSON(e) : undefined);
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateDid };
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = exports.MsgCreateDidPayload.fromPartial(object.payload);
        }
        else {
            message.payload = undefined;
        }
        message.signatures = [];
        if (object.signatures !== undefined && object.signatures !== null) {
            for (const e of object.signatures) {
                message.signatures.push(exports.SignInfo.fromPartial(e));
            }
        }
        return message;
    },
};
const baseMsgUpdateDid = {};
exports.MsgUpdateDid = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.payload !== undefined) {
            exports.MsgUpdateDidPayload.encode(message.payload, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.signatures) {
            exports.SignInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateDid };
        message.signatures = [];
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
        const message = { ...baseMsgUpdateDid };
        message.signatures = [];
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = exports.MsgUpdateDidPayload.fromJSON(object.payload);
        }
        else {
            message.payload = undefined;
        }
        if (object.signatures !== undefined && object.signatures !== null) {
            for (const e of object.signatures) {
                message.signatures.push(exports.SignInfo.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.payload !== undefined &&
            (obj.payload = message.payload
                ? exports.MsgUpdateDidPayload.toJSON(message.payload)
                : undefined);
        if (message.signatures) {
            obj.signatures = message.signatures.map((e) => e ? exports.SignInfo.toJSON(e) : undefined);
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateDid };
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = exports.MsgUpdateDidPayload.fromPartial(object.payload);
        }
        else {
            message.payload = undefined;
        }
        message.signatures = [];
        if (object.signatures !== undefined && object.signatures !== null) {
            for (const e of object.signatures) {
                message.signatures.push(exports.SignInfo.fromPartial(e));
            }
        }
        return message;
    },
};
const baseSignInfo = { verificationMethodId: "", signature: "" };
exports.SignInfo = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.verificationMethodId !== "") {
            writer.uint32(10).string(message.verificationMethodId);
        }
        if (message.signature !== "") {
            writer.uint32(18).string(message.signature);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSignInfo };
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
        const message = { ...baseSignInfo };
        if (object.verificationMethodId !== undefined &&
            object.verificationMethodId !== null) {
            message.verificationMethodId = String(object.verificationMethodId);
        }
        else {
            message.verificationMethodId = "";
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = String(object.signature);
        }
        else {
            message.signature = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.verificationMethodId !== undefined &&
            (obj.verificationMethodId = message.verificationMethodId);
        message.signature !== undefined && (obj.signature = message.signature);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = { ...baseSignInfo };
        message.verificationMethodId = (_a = object.verificationMethodId) !== null && _a !== void 0 ? _a : "";
        message.signature = (_b = object.signature) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
const baseMsgCreateDidPayload = {
    context: "",
    id: "",
    controller: "",
    authentication: "",
    assertionMethod: "",
    capabilityInvocation: "",
    capabilityDelegation: "",
    keyAgreement: "",
    alsoKnownAs: "",
};
exports.MsgCreateDidPayload = {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateDidPayload };
        message.context = [];
        message.controller = [];
        message.verificationMethod = [];
        message.authentication = [];
        message.assertionMethod = [];
        message.capabilityInvocation = [];
        message.capabilityDelegation = [];
        message.keyAgreement = [];
        message.alsoKnownAs = [];
        message.service = [];
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
        const message = { ...baseMsgCreateDidPayload };
        message.context = [];
        message.controller = [];
        message.verificationMethod = [];
        message.authentication = [];
        message.assertionMethod = [];
        message.capabilityInvocation = [];
        message.capabilityDelegation = [];
        message.keyAgreement = [];
        message.alsoKnownAs = [];
        message.service = [];
        if (object.context !== undefined && object.context !== null) {
            for (const e of object.context) {
                message.context.push(String(e));
            }
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.controller !== undefined && object.controller !== null) {
            for (const e of object.controller) {
                message.controller.push(String(e));
            }
        }
        if (object.verificationMethod !== undefined &&
            object.verificationMethod !== null) {
            for (const e of object.verificationMethod) {
                message.verificationMethod.push(did_1.VerificationMethod.fromJSON(e));
            }
        }
        if (object.authentication !== undefined && object.authentication !== null) {
            for (const e of object.authentication) {
                message.authentication.push(String(e));
            }
        }
        if (object.assertionMethod !== undefined &&
            object.assertionMethod !== null) {
            for (const e of object.assertionMethod) {
                message.assertionMethod.push(String(e));
            }
        }
        if (object.capabilityInvocation !== undefined &&
            object.capabilityInvocation !== null) {
            for (const e of object.capabilityInvocation) {
                message.capabilityInvocation.push(String(e));
            }
        }
        if (object.capabilityDelegation !== undefined &&
            object.capabilityDelegation !== null) {
            for (const e of object.capabilityDelegation) {
                message.capabilityDelegation.push(String(e));
            }
        }
        if (object.keyAgreement !== undefined && object.keyAgreement !== null) {
            for (const e of object.keyAgreement) {
                message.keyAgreement.push(String(e));
            }
        }
        if (object.alsoKnownAs !== undefined && object.alsoKnownAs !== null) {
            for (const e of object.alsoKnownAs) {
                message.alsoKnownAs.push(String(e));
            }
        }
        if (object.service !== undefined && object.service !== null) {
            for (const e of object.service) {
                message.service.push(did_1.Service.fromJSON(e));
            }
        }
        return message;
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
        var _a;
        const message = { ...baseMsgCreateDidPayload };
        message.context = [];
        if (object.context !== undefined && object.context !== null) {
            for (const e of object.context) {
                message.context.push(e);
            }
        }
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.controller = [];
        if (object.controller !== undefined && object.controller !== null) {
            for (const e of object.controller) {
                message.controller.push(e);
            }
        }
        message.verificationMethod = [];
        if (object.verificationMethod !== undefined &&
            object.verificationMethod !== null) {
            for (const e of object.verificationMethod) {
                message.verificationMethod.push(did_1.VerificationMethod.fromPartial(e));
            }
        }
        message.authentication = [];
        if (object.authentication !== undefined && object.authentication !== null) {
            for (const e of object.authentication) {
                message.authentication.push(e);
            }
        }
        message.assertionMethod = [];
        if (object.assertionMethod !== undefined &&
            object.assertionMethod !== null) {
            for (const e of object.assertionMethod) {
                message.assertionMethod.push(e);
            }
        }
        message.capabilityInvocation = [];
        if (object.capabilityInvocation !== undefined &&
            object.capabilityInvocation !== null) {
            for (const e of object.capabilityInvocation) {
                message.capabilityInvocation.push(e);
            }
        }
        message.capabilityDelegation = [];
        if (object.capabilityDelegation !== undefined &&
            object.capabilityDelegation !== null) {
            for (const e of object.capabilityDelegation) {
                message.capabilityDelegation.push(e);
            }
        }
        message.keyAgreement = [];
        if (object.keyAgreement !== undefined && object.keyAgreement !== null) {
            for (const e of object.keyAgreement) {
                message.keyAgreement.push(e);
            }
        }
        message.alsoKnownAs = [];
        if (object.alsoKnownAs !== undefined && object.alsoKnownAs !== null) {
            for (const e of object.alsoKnownAs) {
                message.alsoKnownAs.push(e);
            }
        }
        message.service = [];
        if (object.service !== undefined && object.service !== null) {
            for (const e of object.service) {
                message.service.push(did_1.Service.fromPartial(e));
            }
        }
        return message;
    },
};
const baseMsgCreateDidResponse = { id: "" };
exports.MsgCreateDidResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateDidResponse };
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
        const message = { ...baseMsgCreateDidResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = { ...baseMsgCreateDidResponse };
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
const baseMsgUpdateDidPayload = {
    context: "",
    id: "",
    controller: "",
    authentication: "",
    assertionMethod: "",
    capabilityInvocation: "",
    capabilityDelegation: "",
    keyAgreement: "",
    alsoKnownAs: "",
    versionId: "",
};
exports.MsgUpdateDidPayload = {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateDidPayload };
        message.context = [];
        message.controller = [];
        message.verificationMethod = [];
        message.authentication = [];
        message.assertionMethod = [];
        message.capabilityInvocation = [];
        message.capabilityDelegation = [];
        message.keyAgreement = [];
        message.alsoKnownAs = [];
        message.service = [];
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
        const message = { ...baseMsgUpdateDidPayload };
        message.context = [];
        message.controller = [];
        message.verificationMethod = [];
        message.authentication = [];
        message.assertionMethod = [];
        message.capabilityInvocation = [];
        message.capabilityDelegation = [];
        message.keyAgreement = [];
        message.alsoKnownAs = [];
        message.service = [];
        if (object.context !== undefined && object.context !== null) {
            for (const e of object.context) {
                message.context.push(String(e));
            }
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.controller !== undefined && object.controller !== null) {
            for (const e of object.controller) {
                message.controller.push(String(e));
            }
        }
        if (object.verificationMethod !== undefined &&
            object.verificationMethod !== null) {
            for (const e of object.verificationMethod) {
                message.verificationMethod.push(did_1.VerificationMethod.fromJSON(e));
            }
        }
        if (object.authentication !== undefined && object.authentication !== null) {
            for (const e of object.authentication) {
                message.authentication.push(String(e));
            }
        }
        if (object.assertionMethod !== undefined &&
            object.assertionMethod !== null) {
            for (const e of object.assertionMethod) {
                message.assertionMethod.push(String(e));
            }
        }
        if (object.capabilityInvocation !== undefined &&
            object.capabilityInvocation !== null) {
            for (const e of object.capabilityInvocation) {
                message.capabilityInvocation.push(String(e));
            }
        }
        if (object.capabilityDelegation !== undefined &&
            object.capabilityDelegation !== null) {
            for (const e of object.capabilityDelegation) {
                message.capabilityDelegation.push(String(e));
            }
        }
        if (object.keyAgreement !== undefined && object.keyAgreement !== null) {
            for (const e of object.keyAgreement) {
                message.keyAgreement.push(String(e));
            }
        }
        if (object.alsoKnownAs !== undefined && object.alsoKnownAs !== null) {
            for (const e of object.alsoKnownAs) {
                message.alsoKnownAs.push(String(e));
            }
        }
        if (object.service !== undefined && object.service !== null) {
            for (const e of object.service) {
                message.service.push(did_1.Service.fromJSON(e));
            }
        }
        if (object.versionId !== undefined && object.versionId !== null) {
            message.versionId = String(object.versionId);
        }
        else {
            message.versionId = "";
        }
        return message;
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
        var _a, _b;
        const message = { ...baseMsgUpdateDidPayload };
        message.context = [];
        if (object.context !== undefined && object.context !== null) {
            for (const e of object.context) {
                message.context.push(e);
            }
        }
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.controller = [];
        if (object.controller !== undefined && object.controller !== null) {
            for (const e of object.controller) {
                message.controller.push(e);
            }
        }
        message.verificationMethod = [];
        if (object.verificationMethod !== undefined &&
            object.verificationMethod !== null) {
            for (const e of object.verificationMethod) {
                message.verificationMethod.push(did_1.VerificationMethod.fromPartial(e));
            }
        }
        message.authentication = [];
        if (object.authentication !== undefined && object.authentication !== null) {
            for (const e of object.authentication) {
                message.authentication.push(e);
            }
        }
        message.assertionMethod = [];
        if (object.assertionMethod !== undefined &&
            object.assertionMethod !== null) {
            for (const e of object.assertionMethod) {
                message.assertionMethod.push(e);
            }
        }
        message.capabilityInvocation = [];
        if (object.capabilityInvocation !== undefined &&
            object.capabilityInvocation !== null) {
            for (const e of object.capabilityInvocation) {
                message.capabilityInvocation.push(e);
            }
        }
        message.capabilityDelegation = [];
        if (object.capabilityDelegation !== undefined &&
            object.capabilityDelegation !== null) {
            for (const e of object.capabilityDelegation) {
                message.capabilityDelegation.push(e);
            }
        }
        message.keyAgreement = [];
        if (object.keyAgreement !== undefined && object.keyAgreement !== null) {
            for (const e of object.keyAgreement) {
                message.keyAgreement.push(e);
            }
        }
        message.alsoKnownAs = [];
        if (object.alsoKnownAs !== undefined && object.alsoKnownAs !== null) {
            for (const e of object.alsoKnownAs) {
                message.alsoKnownAs.push(e);
            }
        }
        message.service = [];
        if (object.service !== undefined && object.service !== null) {
            for (const e of object.service) {
                message.service.push(did_1.Service.fromPartial(e));
            }
        }
        message.versionId = (_b = object.versionId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
const baseMsgUpdateDidResponse = { id: "" };
exports.MsgUpdateDidResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateDidResponse };
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
        const message = { ...baseMsgUpdateDidResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = { ...baseMsgUpdateDidResponse };
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CreateDid = this.CreateDid.bind(this);
        this.UpdateDid = this.UpdateDid.bind(this);
    }
    CreateDid(request) {
        const data = exports.MsgCreateDid.encode(request).finish();
        const promise = this.rpc.request("cheqdid.cheqdnode.cheqd.v1.Msg", "CreateDid", data);
        return promise.then((data) => exports.MsgCreateDidResponse.decode(new minimal_1.default.Reader(data)));
    }
    UpdateDid(request) {
        const data = exports.MsgUpdateDid.encode(request).finish();
        const promise = this.rpc.request("cheqdid.cheqdnode.cheqd.v1.Msg", "UpdateDid", data);
        return promise.then((data) => exports.MsgUpdateDidResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
