/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import { DidDocWithMetadata, Service, VerificationMethod } from "./diddoc.js";
function createBaseMsgCreateDidDoc() {
    return { payload: undefined, signatures: [] };
}
export const MsgCreateDidDoc = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.payload !== undefined) {
            MsgCreateDidDocPayload.encode(message.payload, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.signatures) {
            SignInfo.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.payload = MsgCreateDidDocPayload.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signatures.push(SignInfo.decode(reader, reader.uint32()));
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
            payload: isSet(object.payload) ? MsgCreateDidDocPayload.fromJSON(object.payload) : undefined,
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => SignInfo.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.payload !== undefined &&
            (obj.payload = message.payload ? MsgCreateDidDocPayload.toJSON(message.payload) : undefined);
        if (message.signatures) {
            obj.signatures = message.signatures.map((e) => e ? SignInfo.toJSON(e) : undefined);
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    create(base) {
        return MsgCreateDidDoc.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgCreateDidDoc();
        message.payload = (object.payload !== undefined && object.payload !== null)
            ? MsgCreateDidDocPayload.fromPartial(object.payload)
            : undefined;
        message.signatures = object.signatures?.map((e) => SignInfo.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgUpdateDidDoc() {
    return { payload: undefined, signatures: [] };
}
export const MsgUpdateDidDoc = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.payload !== undefined) {
            MsgUpdateDidDocPayload.encode(message.payload, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.signatures) {
            SignInfo.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.payload = MsgUpdateDidDocPayload.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signatures.push(SignInfo.decode(reader, reader.uint32()));
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
            payload: isSet(object.payload) ? MsgUpdateDidDocPayload.fromJSON(object.payload) : undefined,
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => SignInfo.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.payload !== undefined &&
            (obj.payload = message.payload ? MsgUpdateDidDocPayload.toJSON(message.payload) : undefined);
        if (message.signatures) {
            obj.signatures = message.signatures.map((e) => e ? SignInfo.toJSON(e) : undefined);
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    create(base) {
        return MsgUpdateDidDoc.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateDidDoc();
        message.payload = (object.payload !== undefined && object.payload !== null)
            ? MsgUpdateDidDocPayload.fromPartial(object.payload)
            : undefined;
        message.signatures = object.signatures?.map((e) => SignInfo.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgDeactivateDidDoc() {
    return { payload: undefined, signatures: [] };
}
export const MsgDeactivateDidDoc = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.payload !== undefined) {
            MsgDeactivateDidDocPayload.encode(message.payload, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.signatures) {
            SignInfo.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.payload = MsgDeactivateDidDocPayload.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signatures.push(SignInfo.decode(reader, reader.uint32()));
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
            payload: isSet(object.payload) ? MsgDeactivateDidDocPayload.fromJSON(object.payload) : undefined,
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => SignInfo.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.payload !== undefined &&
            (obj.payload = message.payload ? MsgDeactivateDidDocPayload.toJSON(message.payload) : undefined);
        if (message.signatures) {
            obj.signatures = message.signatures.map((e) => e ? SignInfo.toJSON(e) : undefined);
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    create(base) {
        return MsgDeactivateDidDoc.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgDeactivateDidDoc();
        message.payload = (object.payload !== undefined && object.payload !== null)
            ? MsgDeactivateDidDocPayload.fromPartial(object.payload)
            : undefined;
        message.signatures = object.signatures?.map((e) => SignInfo.fromPartial(e)) || [];
        return message;
    },
};
function createBaseSignInfo() {
    return { verificationMethodId: "", signature: new Uint8Array() };
}
export const SignInfo = {
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
    create(base) {
        return SignInfo.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSignInfo();
        message.verificationMethodId = object.verificationMethodId ?? "";
        message.signature = object.signature ?? new Uint8Array();
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
        service: [],
        alsoKnownAs: [],
        versionId: "",
    };
}
export const MsgCreateDidDocPayload = {
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
            VerificationMethod.encode(v, writer.uint32(34).fork()).ldelim();
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
            Service.encode(v, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.alsoKnownAs) {
            writer.uint32(90).string(v);
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
                    message.verificationMethod.push(VerificationMethod.decode(reader, reader.uint32()));
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
                    message.service.push(Service.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.alsoKnownAs.push(reader.string());
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
            context: Array.isArray(object?.context) ? object.context.map((e) => String(e)) : [],
            id: isSet(object.id) ? String(object.id) : "",
            controller: Array.isArray(object?.controller) ? object.controller.map((e) => String(e)) : [],
            verificationMethod: Array.isArray(object?.verificationMethod)
                ? object.verificationMethod.map((e) => VerificationMethod.fromJSON(e))
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
            service: Array.isArray(object?.service) ? object.service.map((e) => Service.fromJSON(e)) : [],
            alsoKnownAs: Array.isArray(object?.alsoKnownAs) ? object.alsoKnownAs.map((e) => String(e)) : [],
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
            obj.verificationMethod = message.verificationMethod.map((e) => e ? VerificationMethod.toJSON(e) : undefined);
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
            obj.service = message.service.map((e) => e ? Service.toJSON(e) : undefined);
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
        message.versionId !== undefined && (obj.versionId = message.versionId);
        return obj;
    },
    create(base) {
        return MsgCreateDidDocPayload.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgCreateDidDocPayload();
        message.context = object.context?.map((e) => e) || [];
        message.id = object.id ?? "";
        message.controller = object.controller?.map((e) => e) || [];
        message.verificationMethod = object.verificationMethod?.map((e) => VerificationMethod.fromPartial(e)) || [];
        message.authentication = object.authentication?.map((e) => e) || [];
        message.assertionMethod = object.assertionMethod?.map((e) => e) || [];
        message.capabilityInvocation = object.capabilityInvocation?.map((e) => e) || [];
        message.capabilityDelegation = object.capabilityDelegation?.map((e) => e) || [];
        message.keyAgreement = object.keyAgreement?.map((e) => e) || [];
        message.service = object.service?.map((e) => Service.fromPartial(e)) || [];
        message.alsoKnownAs = object.alsoKnownAs?.map((e) => e) || [];
        message.versionId = object.versionId ?? "";
        return message;
    },
};
function createBaseMsgCreateDidDocResponse() {
    return { value: undefined };
}
export const MsgCreateDidDocResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== undefined) {
            DidDocWithMetadata.encode(message.value, writer.uint32(10).fork()).ldelim();
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
                    message.value = DidDocWithMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { value: isSet(object.value) ? DidDocWithMetadata.fromJSON(object.value) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = message.value ? DidDocWithMetadata.toJSON(message.value) : undefined);
        return obj;
    },
    create(base) {
        return MsgCreateDidDocResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgCreateDidDocResponse();
        message.value = (object.value !== undefined && object.value !== null)
            ? DidDocWithMetadata.fromPartial(object.value)
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
        service: [],
        alsoKnownAs: [],
        versionId: "",
    };
}
export const MsgUpdateDidDocPayload = {
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
            VerificationMethod.encode(v, writer.uint32(34).fork()).ldelim();
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
            Service.encode(v, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.alsoKnownAs) {
            writer.uint32(90).string(v);
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
                    message.verificationMethod.push(VerificationMethod.decode(reader, reader.uint32()));
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
                    message.service.push(Service.decode(reader, reader.uint32()));
                    break;
                case 11:
                    message.alsoKnownAs.push(reader.string());
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
            context: Array.isArray(object?.context) ? object.context.map((e) => String(e)) : [],
            id: isSet(object.id) ? String(object.id) : "",
            controller: Array.isArray(object?.controller) ? object.controller.map((e) => String(e)) : [],
            verificationMethod: Array.isArray(object?.verificationMethod)
                ? object.verificationMethod.map((e) => VerificationMethod.fromJSON(e))
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
            service: Array.isArray(object?.service) ? object.service.map((e) => Service.fromJSON(e)) : [],
            alsoKnownAs: Array.isArray(object?.alsoKnownAs) ? object.alsoKnownAs.map((e) => String(e)) : [],
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
            obj.verificationMethod = message.verificationMethod.map((e) => e ? VerificationMethod.toJSON(e) : undefined);
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
            obj.service = message.service.map((e) => e ? Service.toJSON(e) : undefined);
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
        message.versionId !== undefined && (obj.versionId = message.versionId);
        return obj;
    },
    create(base) {
        return MsgUpdateDidDocPayload.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateDidDocPayload();
        message.context = object.context?.map((e) => e) || [];
        message.id = object.id ?? "";
        message.controller = object.controller?.map((e) => e) || [];
        message.verificationMethod = object.verificationMethod?.map((e) => VerificationMethod.fromPartial(e)) || [];
        message.authentication = object.authentication?.map((e) => e) || [];
        message.assertionMethod = object.assertionMethod?.map((e) => e) || [];
        message.capabilityInvocation = object.capabilityInvocation?.map((e) => e) || [];
        message.capabilityDelegation = object.capabilityDelegation?.map((e) => e) || [];
        message.keyAgreement = object.keyAgreement?.map((e) => e) || [];
        message.service = object.service?.map((e) => Service.fromPartial(e)) || [];
        message.alsoKnownAs = object.alsoKnownAs?.map((e) => e) || [];
        message.versionId = object.versionId ?? "";
        return message;
    },
};
function createBaseMsgUpdateDidDocResponse() {
    return { value: undefined };
}
export const MsgUpdateDidDocResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== undefined) {
            DidDocWithMetadata.encode(message.value, writer.uint32(10).fork()).ldelim();
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
                    message.value = DidDocWithMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { value: isSet(object.value) ? DidDocWithMetadata.fromJSON(object.value) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = message.value ? DidDocWithMetadata.toJSON(message.value) : undefined);
        return obj;
    },
    create(base) {
        return MsgUpdateDidDocResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateDidDocResponse();
        message.value = (object.value !== undefined && object.value !== null)
            ? DidDocWithMetadata.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseMsgDeactivateDidDocPayload() {
    return { id: "", versionId: "" };
}
export const MsgDeactivateDidDocPayload = {
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
    create(base) {
        return MsgDeactivateDidDocPayload.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgDeactivateDidDocPayload();
        message.id = object.id ?? "";
        message.versionId = object.versionId ?? "";
        return message;
    },
};
function createBaseMsgDeactivateDidDocResponse() {
    return { value: undefined };
}
export const MsgDeactivateDidDocResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== undefined) {
            DidDocWithMetadata.encode(message.value, writer.uint32(10).fork()).ldelim();
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
                    message.value = DidDocWithMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { value: isSet(object.value) ? DidDocWithMetadata.fromJSON(object.value) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = message.value ? DidDocWithMetadata.toJSON(message.value) : undefined);
        return obj;
    },
    create(base) {
        return MsgDeactivateDidDocResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgDeactivateDidDocResponse();
        message.value = (object.value !== undefined && object.value !== null)
            ? DidDocWithMetadata.fromPartial(object.value)
            : undefined;
        return message;
    },
};
export class MsgClientImpl {
    rpc;
    service;
    constructor(rpc, opts) {
        this.service = opts?.service || "cheqd.did.v2.Msg";
        this.rpc = rpc;
        this.CreateDidDoc = this.CreateDidDoc.bind(this);
        this.UpdateDidDoc = this.UpdateDidDoc.bind(this);
        this.DeactivateDidDoc = this.DeactivateDidDoc.bind(this);
    }
    CreateDidDoc(request) {
        const data = MsgCreateDidDoc.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateDidDoc", data);
        return promise.then((data) => MsgCreateDidDocResponse.decode(new _m0.Reader(data)));
    }
    UpdateDidDoc(request) {
        const data = MsgUpdateDidDoc.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateDidDoc", data);
        return promise.then((data) => MsgUpdateDidDocResponse.decode(new _m0.Reader(data)));
    }
    DeactivateDidDoc(request) {
        const data = MsgDeactivateDidDoc.encode(request).finish();
        const promise = this.rpc.request(this.service, "DeactivateDidDoc", data);
        return promise.then((data) => MsgDeactivateDidDocResponse.decode(new _m0.Reader(data)));
    }
}
var tsProtoGlobalThis = (() => {
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
    if (tsProtoGlobalThis.Buffer) {
        return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
    }
    else {
        const bin = tsProtoGlobalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (tsProtoGlobalThis.Buffer) {
        return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
    }
    else {
        const bin = [];
        arr.forEach((byte) => {
            bin.push(String.fromCharCode(byte));
        });
        return tsProtoGlobalThis.btoa(bin.join(""));
    }
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=tx.js.map