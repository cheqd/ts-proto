"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metadata = exports.DidDocWithMetadata = exports.Service = exports.VerificationMethod = exports.DidDoc = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_js_1 = __importDefault(require("protobufjs/minimal.js"));
const timestamp_js_1 = require("../../../google/protobuf/timestamp.js");
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
    encode(message, writer = minimal_js_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
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
            context: Array.isArray(object?.context) ? object.context.map((e) => String(e)) : [],
            id: isSet(object.id) ? String(object.id) : "",
            controller: Array.isArray(object?.controller) ? object.controller.map((e) => String(e)) : [],
            verificationMethod: Array.isArray(object?.verificationMethod)
                ? object.verificationMethod.map((e) => exports.VerificationMethod.fromJSON(e))
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
            service: Array.isArray(object?.service) ? object.service.map((e) => exports.Service.fromJSON(e)) : [],
            alsoKnownAs: Array.isArray(object?.alsoKnownAs) ? object.alsoKnownAs.map((e) => String(e)) : [],
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
    create(base) {
        return exports.DidDoc.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDidDoc();
        message.context = object.context?.map((e) => e) || [];
        message.id = object.id ?? "";
        message.controller = object.controller?.map((e) => e) || [];
        message.verificationMethod = object.verificationMethod?.map((e) => exports.VerificationMethod.fromPartial(e)) || [];
        message.authentication = object.authentication?.map((e) => e) || [];
        message.assertionMethod = object.assertionMethod?.map((e) => e) || [];
        message.capabilityInvocation = object.capabilityInvocation?.map((e) => e) || [];
        message.capabilityDelegation = object.capabilityDelegation?.map((e) => e) || [];
        message.keyAgreement = object.keyAgreement?.map((e) => e) || [];
        message.service = object.service?.map((e) => exports.Service.fromPartial(e)) || [];
        message.alsoKnownAs = object.alsoKnownAs?.map((e) => e) || [];
        return message;
    },
};
function createBaseVerificationMethod() {
    return { id: "", verificationMethodType: "", controller: "", verificationMaterial: "" };
}
exports.VerificationMethod = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.verificationMethodType !== "") {
            writer.uint32(18).string(message.verificationMethodType);
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
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerificationMethod();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.verificationMethodType = reader.string();
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
            verificationMethodType: isSet(object.verificationMethodType) ? String(object.verificationMethodType) : "",
            controller: isSet(object.controller) ? String(object.controller) : "",
            verificationMaterial: isSet(object.verificationMaterial) ? String(object.verificationMaterial) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.verificationMethodType !== undefined && (obj.verificationMethodType = message.verificationMethodType);
        message.controller !== undefined && (obj.controller = message.controller);
        message.verificationMaterial !== undefined && (obj.verificationMaterial = message.verificationMaterial);
        return obj;
    },
    create(base) {
        return exports.VerificationMethod.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVerificationMethod();
        message.id = object.id ?? "";
        message.verificationMethodType = object.verificationMethodType ?? "";
        message.controller = object.controller ?? "";
        message.verificationMaterial = object.verificationMaterial ?? "";
        return message;
    },
};
function createBaseService() {
    return { id: "", serviceType: "", serviceEndpoint: [] };
}
exports.Service = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.serviceType !== "") {
            writer.uint32(18).string(message.serviceType);
        }
        for (const v of message.serviceEndpoint) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseService();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.serviceType = reader.string();
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
            serviceType: isSet(object.serviceType) ? String(object.serviceType) : "",
            serviceEndpoint: Array.isArray(object?.serviceEndpoint) ? object.serviceEndpoint.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.serviceType !== undefined && (obj.serviceType = message.serviceType);
        if (message.serviceEndpoint) {
            obj.serviceEndpoint = message.serviceEndpoint.map((e) => e);
        }
        else {
            obj.serviceEndpoint = [];
        }
        return obj;
    },
    create(base) {
        return exports.Service.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseService();
        message.id = object.id ?? "";
        message.serviceType = object.serviceType ?? "";
        message.serviceEndpoint = object.serviceEndpoint?.map((e) => e) || [];
        return message;
    },
};
function createBaseDidDocWithMetadata() {
    return { didDoc: undefined, metadata: undefined };
}
exports.DidDocWithMetadata = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.didDoc !== undefined) {
            exports.DidDoc.encode(message.didDoc, writer.uint32(10).fork()).ldelim();
        }
        if (message.metadata !== undefined) {
            exports.Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
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
    create(base) {
        return exports.DidDocWithMetadata.fromPartial(base ?? {});
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
    return {
        created: undefined,
        updated: undefined,
        deactivated: false,
        versionId: "",
        nextVersionId: "",
        previousVersionId: "",
    };
}
exports.Metadata = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.created !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.created), writer.uint32(10).fork()).ldelim();
        }
        if (message.updated !== undefined) {
            timestamp_js_1.Timestamp.encode(toTimestamp(message.updated), writer.uint32(18).fork()).ldelim();
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
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.created = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.updated = fromTimestamp(timestamp_js_1.Timestamp.decode(reader, reader.uint32()));
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
            created: isSet(object.created) ? fromJsonTimestamp(object.created) : undefined,
            updated: isSet(object.updated) ? fromJsonTimestamp(object.updated) : undefined,
            deactivated: isSet(object.deactivated) ? Boolean(object.deactivated) : false,
            versionId: isSet(object.versionId) ? String(object.versionId) : "",
            nextVersionId: isSet(object.nextVersionId) ? String(object.nextVersionId) : "",
            previousVersionId: isSet(object.previousVersionId) ? String(object.previousVersionId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.created !== undefined && (obj.created = message.created.toISOString());
        message.updated !== undefined && (obj.updated = message.updated.toISOString());
        message.deactivated !== undefined && (obj.deactivated = message.deactivated);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        message.nextVersionId !== undefined && (obj.nextVersionId = message.nextVersionId);
        message.previousVersionId !== undefined && (obj.previousVersionId = message.previousVersionId);
        return obj;
    },
    create(base) {
        return exports.Metadata.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMetadata();
        message.created = object.created ?? undefined;
        message.updated = object.updated ?? undefined;
        message.deactivated = object.deactivated ?? false;
        message.versionId = object.versionId ?? "";
        message.nextVersionId = object.nextVersionId ?? "";
        message.previousVersionId = object.previousVersionId ?? "";
        return message;
    },
};
function toTimestamp(date) {
    const seconds = numberToLong(date.getTime() / 1_000);
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds.toNumber() * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_js_1.Timestamp.fromJSON(o));
    }
}
function numberToLong(number) {
    return long_1.default.fromNumber(number);
}
if (minimal_js_1.default.util.Long !== long_1.default) {
    minimal_js_1.default.util.Long = long_1.default;
    minimal_js_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=diddoc.js.map