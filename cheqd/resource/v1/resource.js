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
exports.ResourceHeader = exports.Resource = exports.protobufPackage = void 0;
/* eslint-disable */
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "cheqdid.cheqdnode.resource.v1";
function createBaseResource() {
    return { header: undefined, data: new Uint8Array() };
}
exports.Resource = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.header !== undefined) {
            exports.ResourceHeader.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
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
                    message.header = exports.ResourceHeader.decode(reader, reader.uint32());
                    break;
                case 2:
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
        return {
            header: isSet(object.header) ? exports.ResourceHeader.fromJSON(object.header) : undefined,
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.header !== undefined && (obj.header = message.header ? exports.ResourceHeader.toJSON(message.header) : undefined);
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseResource();
        message.header = (object.header !== undefined && object.header !== null)
            ? exports.ResourceHeader.fromPartial(object.header)
            : undefined;
        message.data = (_a = object.data) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseResourceHeader() {
    return {
        collectionId: "",
        id: "",
        name: "",
        resourceType: "",
        mediaType: "",
        created: "",
        checksum: new Uint8Array(),
        previousVersionId: "",
        nextVersionId: "",
    };
}
exports.ResourceHeader = {
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
        if (message.resourceType !== "") {
            writer.uint32(34).string(message.resourceType);
        }
        if (message.mediaType !== "") {
            writer.uint32(42).string(message.mediaType);
        }
        if (message.created !== "") {
            writer.uint32(50).string(message.created);
        }
        if (message.checksum.length !== 0) {
            writer.uint32(58).bytes(message.checksum);
        }
        if (message.previousVersionId !== "") {
            writer.uint32(66).string(message.previousVersionId);
        }
        if (message.nextVersionId !== "") {
            writer.uint32(74).string(message.nextVersionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResourceHeader();
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
                    message.resourceType = reader.string();
                    break;
                case 5:
                    message.mediaType = reader.string();
                    break;
                case 6:
                    message.created = reader.string();
                    break;
                case 7:
                    message.checksum = reader.bytes();
                    break;
                case 8:
                    message.previousVersionId = reader.string();
                    break;
                case 9:
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
            resourceType: isSet(object.resourceType) ? String(object.resourceType) : "",
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
        message.resourceType !== undefined && (obj.resourceType = message.resourceType);
        message.mediaType !== undefined && (obj.mediaType = message.mediaType);
        message.created !== undefined && (obj.created = message.created);
        message.checksum !== undefined &&
            (obj.checksum = base64FromBytes(message.checksum !== undefined ? message.checksum : new Uint8Array()));
        message.previousVersionId !== undefined && (obj.previousVersionId = message.previousVersionId);
        message.nextVersionId !== undefined && (obj.nextVersionId = message.nextVersionId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseResourceHeader();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.resourceType = (_d = object.resourceType) !== null && _d !== void 0 ? _d : "";
        message.mediaType = (_e = object.mediaType) !== null && _e !== void 0 ? _e : "";
        message.created = (_f = object.created) !== null && _f !== void 0 ? _f : "";
        message.checksum = (_g = object.checksum) !== null && _g !== void 0 ? _g : new Uint8Array();
        message.previousVersionId = (_h = object.previousVersionId) !== null && _h !== void 0 ? _h : "";
        message.nextVersionId = (_j = object.nextVersionId) !== null && _j !== void 0 ? _j : "";
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
