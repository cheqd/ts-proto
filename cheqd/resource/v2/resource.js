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
exports.Metadata = exports.AlternativeUri = exports.ResourceWithMetadata = exports.Resource = exports.protobufPackage = void 0;
/* eslint-disable */
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "cheqd.resource.v2";
function createBaseResource() {
    return { data: new Uint8Array() };
}
exports.Resource = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResource();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array() };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseResource();
        message.data = (_a = object.data) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseResourceWithMetadata() {
    return { resource: undefined, metadata: undefined };
}
exports.ResourceWithMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.resource !== undefined) {
            exports.Resource.encode(message.resource, writer.uint32(10).fork()).ldelim();
        }
        if (message.metadata !== undefined) {
            exports.Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResourceWithMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resource = exports.Resource.decode(reader, reader.uint32());
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
            resource: isSet(object.resource) ? exports.Resource.fromJSON(object.resource) : undefined,
            metadata: isSet(object.metadata) ? exports.Metadata.fromJSON(object.metadata) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.resource !== undefined && (obj.resource = message.resource ? exports.Resource.toJSON(message.resource) : undefined);
        message.metadata !== undefined && (obj.metadata = message.metadata ? exports.Metadata.toJSON(message.metadata) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResourceWithMetadata();
        message.resource = (object.resource !== undefined && object.resource !== null)
            ? exports.Resource.fromPartial(object.resource)
            : undefined;
        message.metadata = (object.metadata !== undefined && object.metadata !== null)
            ? exports.Metadata.fromPartial(object.metadata)
            : undefined;
        return message;
    },
};
function createBaseAlternativeUri() {
    return { uri: "", description: "" };
}
exports.AlternativeUri = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.uri !== "") {
            writer.uint32(10).string(message.uri);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAlternativeUri();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uri = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
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
            uri: isSet(object.uri) ? String(object.uri) : "",
            description: isSet(object.description) ? String(object.description) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.uri !== undefined && (obj.uri = message.uri);
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAlternativeUri();
        message.uri = (_a = object.uri) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMetadata() {
    return {
        collectionId: "",
        id: "",
        name: "",
        version: "",
        resourceType: "",
        alsoKnownAs: [],
        mediaType: "",
        created: "",
        checksum: new Uint8Array(),
        previousVersionId: "",
        nextVersionId: "",
    };
}
exports.Metadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.version !== "") {
            writer.uint32(34).string(message.version);
        }
        if (message.resourceType !== "") {
            writer.uint32(42).string(message.resourceType);
        }
        for (const v of message.alsoKnownAs) {
            exports.AlternativeUri.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.mediaType !== "") {
            writer.uint32(58).string(message.mediaType);
        }
        if (message.created !== "") {
            writer.uint32(66).string(message.created);
        }
        if (message.checksum.length !== 0) {
            writer.uint32(74).bytes(message.checksum);
        }
        if (message.previousVersionId !== "") {
            writer.uint32(82).string(message.previousVersionId);
        }
        if (message.nextVersionId !== "") {
            writer.uint32(90).string(message.nextVersionId);
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
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.version = reader.string();
                    break;
                case 5:
                    message.resourceType = reader.string();
                    break;
                case 6:
                    message.alsoKnownAs.push(exports.AlternativeUri.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.mediaType = reader.string();
                    break;
                case 8:
                    message.created = reader.string();
                    break;
                case 9:
                    message.checksum = reader.bytes();
                    break;
                case 10:
                    message.previousVersionId = reader.string();
                    break;
                case 11:
                    message.nextVersionId = reader.string();
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
            collectionId: isSet(object.collectionId) ? String(object.collectionId) : "",
            id: isSet(object.id) ? String(object.id) : "",
            name: isSet(object.name) ? String(object.name) : "",
            version: isSet(object.version) ? String(object.version) : "",
            resourceType: isSet(object.resourceType) ? String(object.resourceType) : "",
            alsoKnownAs: Array.isArray(object === null || object === void 0 ? void 0 : object.alsoKnownAs)
                ? object.alsoKnownAs.map((e) => exports.AlternativeUri.fromJSON(e))
                : [],
            mediaType: isSet(object.mediaType) ? String(object.mediaType) : "",
            created: isSet(object.created) ? String(object.created) : "",
            checksum: isSet(object.checksum) ? bytesFromBase64(object.checksum) : new Uint8Array(),
            previousVersionId: isSet(object.previousVersionId) ? String(object.previousVersionId) : "",
            nextVersionId: isSet(object.nextVersionId) ? String(object.nextVersionId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined && (obj.collectionId = message.collectionId);
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.version !== undefined && (obj.version = message.version);
        message.resourceType !== undefined && (obj.resourceType = message.resourceType);
        if (message.alsoKnownAs) {
            obj.alsoKnownAs = message.alsoKnownAs.map((e) => e ? exports.AlternativeUri.toJSON(e) : undefined);
        }
        else {
            obj.alsoKnownAs = [];
        }
        message.mediaType !== undefined && (obj.mediaType = message.mediaType);
        message.created !== undefined && (obj.created = message.created);
        message.checksum !== undefined &&
            (obj.checksum = base64FromBytes(message.checksum !== undefined ? message.checksum : new Uint8Array()));
        message.previousVersionId !== undefined && (obj.previousVersionId = message.previousVersionId);
        message.nextVersionId !== undefined && (obj.nextVersionId = message.nextVersionId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = createBaseMetadata();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.version = (_d = object.version) !== null && _d !== void 0 ? _d : "";
        message.resourceType = (_e = object.resourceType) !== null && _e !== void 0 ? _e : "";
        message.alsoKnownAs = ((_f = object.alsoKnownAs) === null || _f === void 0 ? void 0 : _f.map((e) => exports.AlternativeUri.fromPartial(e))) || [];
        message.mediaType = (_g = object.mediaType) !== null && _g !== void 0 ? _g : "";
        message.created = (_h = object.created) !== null && _h !== void 0 ? _h : "";
        message.checksum = (_j = object.checksum) !== null && _j !== void 0 ? _j : new Uint8Array();
        message.previousVersionId = (_k = object.previousVersionId) !== null && _k !== void 0 ? _k : "";
        message.nextVersionId = (_l = object.nextVersionId) !== null && _l !== void 0 ? _l : "";
        return message;
    },
};
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
