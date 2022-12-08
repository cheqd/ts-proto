"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceHeader = exports.Resource = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
function createBaseResource() {
    return { header: undefined, data: new Uint8Array() };
}
exports.Resource = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.header !== undefined) {
            exports.ResourceHeader.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
        const message = createBaseResource();
        message.header = (object.header !== undefined && object.header !== null)
            ? exports.ResourceHeader.fromPartial(object.header)
            : undefined;
        message.data = object.data ?? new Uint8Array();
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
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
        const message = createBaseResourceHeader();
        message.collectionId = object.collectionId ?? "";
        message.id = object.id ?? "";
        message.name = object.name ?? "";
        message.resourceType = object.resourceType ?? "";
        message.mediaType = object.mediaType ?? "";
        message.created = object.created ?? "";
        message.checksum = object.checksum ?? new Uint8Array();
        message.previousVersionId = object.previousVersionId ?? "";
        message.nextVersionId = object.nextVersionId ?? "";
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
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=resource.js.map