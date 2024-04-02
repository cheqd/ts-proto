"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceHeader = exports.Resource = void 0;
/* eslint-disable */
const minimal_js_1 = __importDefault(require("protobufjs/minimal.js"));
function createBaseResource() {
    return { header: undefined, data: new Uint8Array(0) };
}
exports.Resource = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.header !== undefined) {
            exports.ResourceHeader.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : minimal_js_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResource();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.header = exports.ResourceHeader.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.data = reader.bytes();
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
            header: isSet(object.header) ? exports.ResourceHeader.fromJSON(object.header) : undefined,
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.header !== undefined) {
            obj.header = exports.ResourceHeader.toJSON(message.header);
        }
        if (message.data.length !== 0) {
            obj.data = base64FromBytes(message.data);
        }
        return obj;
    },
    create(base) {
        return exports.Resource.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseResource();
        message.header = (object.header !== undefined && object.header !== null)
            ? exports.ResourceHeader.fromPartial(object.header)
            : undefined;
        message.data = object.data ?? new Uint8Array(0);
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
        checksum: new Uint8Array(0),
        previousVersionId: "",
        nextVersionId: "",
    };
}
exports.ResourceHeader = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_js_1.default.Reader ? input : minimal_js_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResourceHeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.collectionId = reader.string();
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
                    message.name = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.resourceType = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.mediaType = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.created = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.checksum = reader.bytes();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.previousVersionId = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.nextVersionId = reader.string();
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
            collectionId: isSet(object.collectionId) ? globalThis.String(object.collectionId) : "",
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            resourceType: isSet(object.resourceType) ? globalThis.String(object.resourceType) : "",
            mediaType: isSet(object.mediaType) ? globalThis.String(object.mediaType) : "",
            created: isSet(object.created) ? globalThis.String(object.created) : "",
            checksum: isSet(object.checksum) ? bytesFromBase64(object.checksum) : new Uint8Array(0),
            previousVersionId: isSet(object.previousVersionId) ? globalThis.String(object.previousVersionId) : "",
            nextVersionId: isSet(object.nextVersionId) ? globalThis.String(object.nextVersionId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.collectionId !== "") {
            obj.collectionId = message.collectionId;
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.resourceType !== "") {
            obj.resourceType = message.resourceType;
        }
        if (message.mediaType !== "") {
            obj.mediaType = message.mediaType;
        }
        if (message.created !== "") {
            obj.created = message.created;
        }
        if (message.checksum.length !== 0) {
            obj.checksum = base64FromBytes(message.checksum);
        }
        if (message.previousVersionId !== "") {
            obj.previousVersionId = message.previousVersionId;
        }
        if (message.nextVersionId !== "") {
            obj.nextVersionId = message.nextVersionId;
        }
        return obj;
    },
    create(base) {
        return exports.ResourceHeader.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseResourceHeader();
        message.collectionId = object.collectionId ?? "";
        message.id = object.id ?? "";
        message.name = object.name ?? "";
        message.resourceType = object.resourceType ?? "";
        message.mediaType = object.mediaType ?? "";
        message.created = object.created ?? "";
        message.checksum = object.checksum ?? new Uint8Array(0);
        message.previousVersionId = object.previousVersionId ?? "";
        message.nextVersionId = object.nextVersionId ?? "";
        return message;
    },
};
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
            bin.push(globalThis.String.fromCharCode(byte));
        });
        return globalThis.btoa(bin.join(""));
    }
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=resource.js.map