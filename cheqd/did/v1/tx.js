/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import { Did, Service, VerificationMethod } from "./did.js";
import { Metadata } from "./stateValue.js";
function createBaseMsgCreateDid() {
    return { payload: undefined, signatures: [] };
}
export const MsgCreateDid = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.payload !== undefined) {
            MsgCreateDidPayload.encode(message.payload, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.signatures) {
            SignInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDid();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.payload = MsgCreateDidPayload.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.signatures.push(SignInfo.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            payload: isSet(object.payload) ? MsgCreateDidPayload.fromJSON(object.payload) : undefined,
            signatures: globalThis.Array.isArray(object?.signatures)
                ? object.signatures.map((e) => SignInfo.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.payload !== undefined) {
            obj.payload = MsgCreateDidPayload.toJSON(message.payload);
        }
        if (message.signatures?.length) {
            obj.signatures = message.signatures.map((e) => SignInfo.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return MsgCreateDid.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgCreateDid();
        message.payload = (object.payload !== undefined && object.payload !== null)
            ? MsgCreateDidPayload.fromPartial(object.payload)
            : undefined;
        message.signatures = object.signatures?.map((e) => SignInfo.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgUpdateDid() {
    return { payload: undefined, signatures: [] };
}
export const MsgUpdateDid = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.payload !== undefined) {
            MsgUpdateDidPayload.encode(message.payload, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.signatures) {
            SignInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateDid();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.payload = MsgUpdateDidPayload.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.signatures.push(SignInfo.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            payload: isSet(object.payload) ? MsgUpdateDidPayload.fromJSON(object.payload) : undefined,
            signatures: globalThis.Array.isArray(object?.signatures)
                ? object.signatures.map((e) => SignInfo.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.payload !== undefined) {
            obj.payload = MsgUpdateDidPayload.toJSON(message.payload);
        }
        if (message.signatures?.length) {
            obj.signatures = message.signatures.map((e) => SignInfo.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return MsgUpdateDid.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateDid();
        message.payload = (object.payload !== undefined && object.payload !== null)
            ? MsgUpdateDidPayload.fromPartial(object.payload)
            : undefined;
        message.signatures = object.signatures?.map((e) => SignInfo.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgDeactivateDid() {
    return { payload: undefined, signatures: [] };
}
export const MsgDeactivateDid = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.payload !== undefined) {
            MsgDeactivateDidPayload.encode(message.payload, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.signatures) {
            SignInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeactivateDid();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.payload = MsgDeactivateDidPayload.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.signatures.push(SignInfo.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            payload: isSet(object.payload) ? MsgDeactivateDidPayload.fromJSON(object.payload) : undefined,
            signatures: globalThis.Array.isArray(object?.signatures)
                ? object.signatures.map((e) => SignInfo.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.payload !== undefined) {
            obj.payload = MsgDeactivateDidPayload.toJSON(message.payload);
        }
        if (message.signatures?.length) {
            obj.signatures = message.signatures.map((e) => SignInfo.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return MsgDeactivateDid.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgDeactivateDid();
        message.payload = (object.payload !== undefined && object.payload !== null)
            ? MsgDeactivateDidPayload.fromPartial(object.payload)
            : undefined;
        message.signatures = object.signatures?.map((e) => SignInfo.fromPartial(e)) || [];
        return message;
    },
};
function createBaseSignInfo() {
    return { verificationMethodId: "", signature: "" };
}
export const SignInfo = {
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.verificationMethodId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.signature = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            verificationMethodId: isSet(object.verificationMethodId) ? globalThis.String(object.verificationMethodId) : "",
            signature: isSet(object.signature) ? globalThis.String(object.signature) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.verificationMethodId !== "") {
            obj.verificationMethodId = message.verificationMethodId;
        }
        if (message.signature !== "") {
            obj.signature = message.signature;
        }
        return obj;
    },
    create(base) {
        return SignInfo.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseSignInfo();
        message.verificationMethodId = object.verificationMethodId ?? "";
        message.signature = object.signature ?? "";
        return message;
    },
};
function createBaseMsgDeactivateDidPayload() {
    return { id: "" };
}
export const MsgDeactivateDidPayload = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeactivateDidPayload();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return MsgDeactivateDidPayload.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgDeactivateDidPayload();
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseMsgDeactivateDidResponse() {
    return { did: undefined, metadata: undefined };
}
export const MsgDeactivateDidResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.did !== undefined) {
            Did.encode(message.did, writer.uint32(10).fork()).ldelim();
        }
        if (message.metadata !== undefined) {
            Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDeactivateDidResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.did = Did.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.metadata = Metadata.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            did: isSet(object.did) ? Did.fromJSON(object.did) : undefined,
            metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.did !== undefined) {
            obj.did = Did.toJSON(message.did);
        }
        if (message.metadata !== undefined) {
            obj.metadata = Metadata.toJSON(message.metadata);
        }
        return obj;
    },
    create(base) {
        return MsgDeactivateDidResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgDeactivateDidResponse();
        message.did = (object.did !== undefined && object.did !== null) ? Did.fromPartial(object.did) : undefined;
        message.metadata = (object.metadata !== undefined && object.metadata !== null)
            ? Metadata.fromPartial(object.metadata)
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
export const MsgCreateDidPayload = {
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
        for (const v of message.alsoKnownAs) {
            writer.uint32(82).string(v);
        }
        for (const v of message.service) {
            Service.encode(v, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDidPayload();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.context.push(reader.string());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.controller.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.verificationMethod.push(VerificationMethod.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.authentication.push(reader.string());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.assertionMethod.push(reader.string());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.capabilityInvocation.push(reader.string());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.capabilityDelegation.push(reader.string());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.keyAgreement.push(reader.string());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.alsoKnownAs.push(reader.string());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.service.push(Service.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            context: globalThis.Array.isArray(object?.context) ? object.context.map((e) => globalThis.String(e)) : [],
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            controller: globalThis.Array.isArray(object?.controller)
                ? object.controller.map((e) => globalThis.String(e))
                : [],
            verificationMethod: globalThis.Array.isArray(object?.verificationMethod)
                ? object.verificationMethod.map((e) => VerificationMethod.fromJSON(e))
                : [],
            authentication: globalThis.Array.isArray(object?.authentication)
                ? object.authentication.map((e) => globalThis.String(e))
                : [],
            assertionMethod: globalThis.Array.isArray(object?.assertionMethod)
                ? object.assertionMethod.map((e) => globalThis.String(e))
                : [],
            capabilityInvocation: globalThis.Array.isArray(object?.capabilityInvocation)
                ? object.capabilityInvocation.map((e) => globalThis.String(e))
                : [],
            capabilityDelegation: globalThis.Array.isArray(object?.capabilityDelegation)
                ? object.capabilityDelegation.map((e) => globalThis.String(e))
                : [],
            keyAgreement: globalThis.Array.isArray(object?.keyAgreement)
                ? object.keyAgreement.map((e) => globalThis.String(e))
                : [],
            alsoKnownAs: globalThis.Array.isArray(object?.alsoKnownAs)
                ? object.alsoKnownAs.map((e) => globalThis.String(e))
                : [],
            service: globalThis.Array.isArray(object?.service)
                ? object.service.map((e) => Service.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.context?.length) {
            obj.context = message.context;
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.controller?.length) {
            obj.controller = message.controller;
        }
        if (message.verificationMethod?.length) {
            obj.verificationMethod = message.verificationMethod.map((e) => VerificationMethod.toJSON(e));
        }
        if (message.authentication?.length) {
            obj.authentication = message.authentication;
        }
        if (message.assertionMethod?.length) {
            obj.assertionMethod = message.assertionMethod;
        }
        if (message.capabilityInvocation?.length) {
            obj.capabilityInvocation = message.capabilityInvocation;
        }
        if (message.capabilityDelegation?.length) {
            obj.capabilityDelegation = message.capabilityDelegation;
        }
        if (message.keyAgreement?.length) {
            obj.keyAgreement = message.keyAgreement;
        }
        if (message.alsoKnownAs?.length) {
            obj.alsoKnownAs = message.alsoKnownAs;
        }
        if (message.service?.length) {
            obj.service = message.service.map((e) => Service.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return MsgCreateDidPayload.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgCreateDidPayload();
        message.context = object.context?.map((e) => e) || [];
        message.id = object.id ?? "";
        message.controller = object.controller?.map((e) => e) || [];
        message.verificationMethod = object.verificationMethod?.map((e) => VerificationMethod.fromPartial(e)) || [];
        message.authentication = object.authentication?.map((e) => e) || [];
        message.assertionMethod = object.assertionMethod?.map((e) => e) || [];
        message.capabilityInvocation = object.capabilityInvocation?.map((e) => e) || [];
        message.capabilityDelegation = object.capabilityDelegation?.map((e) => e) || [];
        message.keyAgreement = object.keyAgreement?.map((e) => e) || [];
        message.alsoKnownAs = object.alsoKnownAs?.map((e) => e) || [];
        message.service = object.service?.map((e) => Service.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgCreateDidResponse() {
    return { id: "" };
}
export const MsgCreateDidResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateDidResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return MsgCreateDidResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgCreateDidResponse();
        message.id = object.id ?? "";
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
export const MsgUpdateDidPayload = {
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
        for (const v of message.alsoKnownAs) {
            writer.uint32(82).string(v);
        }
        for (const v of message.service) {
            Service.encode(v, writer.uint32(90).fork()).ldelim();
        }
        if (message.versionId !== "") {
            writer.uint32(98).string(message.versionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateDidPayload();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.context.push(reader.string());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.controller.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.verificationMethod.push(VerificationMethod.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.authentication.push(reader.string());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.assertionMethod.push(reader.string());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.capabilityInvocation.push(reader.string());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.capabilityDelegation.push(reader.string());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.keyAgreement.push(reader.string());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.alsoKnownAs.push(reader.string());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.service.push(Service.decode(reader, reader.uint32()));
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.versionId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            context: globalThis.Array.isArray(object?.context) ? object.context.map((e) => globalThis.String(e)) : [],
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            controller: globalThis.Array.isArray(object?.controller)
                ? object.controller.map((e) => globalThis.String(e))
                : [],
            verificationMethod: globalThis.Array.isArray(object?.verificationMethod)
                ? object.verificationMethod.map((e) => VerificationMethod.fromJSON(e))
                : [],
            authentication: globalThis.Array.isArray(object?.authentication)
                ? object.authentication.map((e) => globalThis.String(e))
                : [],
            assertionMethod: globalThis.Array.isArray(object?.assertionMethod)
                ? object.assertionMethod.map((e) => globalThis.String(e))
                : [],
            capabilityInvocation: globalThis.Array.isArray(object?.capabilityInvocation)
                ? object.capabilityInvocation.map((e) => globalThis.String(e))
                : [],
            capabilityDelegation: globalThis.Array.isArray(object?.capabilityDelegation)
                ? object.capabilityDelegation.map((e) => globalThis.String(e))
                : [],
            keyAgreement: globalThis.Array.isArray(object?.keyAgreement)
                ? object.keyAgreement.map((e) => globalThis.String(e))
                : [],
            alsoKnownAs: globalThis.Array.isArray(object?.alsoKnownAs)
                ? object.alsoKnownAs.map((e) => globalThis.String(e))
                : [],
            service: globalThis.Array.isArray(object?.service)
                ? object.service.map((e) => Service.fromJSON(e))
                : [],
            versionId: isSet(object.versionId) ? globalThis.String(object.versionId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.context?.length) {
            obj.context = message.context;
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.controller?.length) {
            obj.controller = message.controller;
        }
        if (message.verificationMethod?.length) {
            obj.verificationMethod = message.verificationMethod.map((e) => VerificationMethod.toJSON(e));
        }
        if (message.authentication?.length) {
            obj.authentication = message.authentication;
        }
        if (message.assertionMethod?.length) {
            obj.assertionMethod = message.assertionMethod;
        }
        if (message.capabilityInvocation?.length) {
            obj.capabilityInvocation = message.capabilityInvocation;
        }
        if (message.capabilityDelegation?.length) {
            obj.capabilityDelegation = message.capabilityDelegation;
        }
        if (message.keyAgreement?.length) {
            obj.keyAgreement = message.keyAgreement;
        }
        if (message.alsoKnownAs?.length) {
            obj.alsoKnownAs = message.alsoKnownAs;
        }
        if (message.service?.length) {
            obj.service = message.service.map((e) => Service.toJSON(e));
        }
        if (message.versionId !== "") {
            obj.versionId = message.versionId;
        }
        return obj;
    },
    create(base) {
        return MsgUpdateDidPayload.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateDidPayload();
        message.context = object.context?.map((e) => e) || [];
        message.id = object.id ?? "";
        message.controller = object.controller?.map((e) => e) || [];
        message.verificationMethod = object.verificationMethod?.map((e) => VerificationMethod.fromPartial(e)) || [];
        message.authentication = object.authentication?.map((e) => e) || [];
        message.assertionMethod = object.assertionMethod?.map((e) => e) || [];
        message.capabilityInvocation = object.capabilityInvocation?.map((e) => e) || [];
        message.capabilityDelegation = object.capabilityDelegation?.map((e) => e) || [];
        message.keyAgreement = object.keyAgreement?.map((e) => e) || [];
        message.alsoKnownAs = object.alsoKnownAs?.map((e) => e) || [];
        message.service = object.service?.map((e) => Service.fromPartial(e)) || [];
        message.versionId = object.versionId ?? "";
        return message;
    },
};
function createBaseMsgUpdateDidResponse() {
    return { id: "" };
}
export const MsgUpdateDidResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateDidResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return MsgUpdateDidResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgUpdateDidResponse();
        message.id = object.id ?? "";
        return message;
    },
};
export const MsgServiceName = "cheqdid.cheqdnode.cheqd.v1.Msg";
export class MsgClientImpl {
    rpc;
    service;
    constructor(rpc, opts) {
        this.service = opts?.service || MsgServiceName;
        this.rpc = rpc;
        this.CreateDid = this.CreateDid.bind(this);
        this.UpdateDid = this.UpdateDid.bind(this);
        this.DeactivateDid = this.DeactivateDid.bind(this);
    }
    CreateDid(request) {
        const data = MsgCreateDid.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateDid", data);
        return promise.then((data) => MsgCreateDidResponse.decode(_m0.Reader.create(data)));
    }
    UpdateDid(request) {
        const data = MsgUpdateDid.encode(request).finish();
        const promise = this.rpc.request(this.service, "UpdateDid", data);
        return promise.then((data) => MsgUpdateDidResponse.decode(_m0.Reader.create(data)));
    }
    DeactivateDid(request) {
        const data = MsgDeactivateDid.encode(request).finish();
        const promise = this.rpc.request(this.service, "DeactivateDid", data);
        return promise.then((data) => MsgDeactivateDidResponse.decode(_m0.Reader.create(data)));
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