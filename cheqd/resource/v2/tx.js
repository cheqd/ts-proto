"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgCreateResourceResponse = exports.MsgCreateResourcePayload = exports.MsgCreateResource = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const tx_1 = require("../../did/v2/tx");
const resource_1 = require("./resource");
function createBaseMsgCreateResource() {
    return { payload: undefined, signatures: [] };
}
exports.MsgCreateResource = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.payload !== undefined) {
            exports.MsgCreateResourcePayload.encode(message.payload, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.signatures) {
            tx_1.SignInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateResource();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.payload = exports.MsgCreateResourcePayload.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signatures.push(tx_1.SignInfo.decode(reader, reader.uint32()));
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
            payload: isSet(object.payload) ? exports.MsgCreateResourcePayload.fromJSON(object.payload) : undefined,
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => tx_1.SignInfo.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.payload !== undefined &&
            (obj.payload = message.payload ? exports.MsgCreateResourcePayload.toJSON(message.payload) : undefined);
        if (message.signatures) {
            obj.signatures = message.signatures.map((e) => e ? tx_1.SignInfo.toJSON(e) : undefined);
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateResource();
        message.payload = (object.payload !== undefined && object.payload !== null)
            ? exports.MsgCreateResourcePayload.fromPartial(object.payload)
            : undefined;
        message.signatures = object.signatures?.map((e) => tx_1.SignInfo.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgCreateResourcePayload() {
    return { data: new Uint8Array(), collectionId: "", id: "", name: "", version: "", resourceType: "", alsoKnownAs: [] };
}
exports.MsgCreateResourcePayload = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        if (message.collectionId !== "") {
            writer.uint32(18).string(message.collectionId);
        }
        if (message.id !== "") {
            writer.uint32(26).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.version !== "") {
            writer.uint32(42).string(message.version);
        }
        if (message.resourceType !== "") {
            writer.uint32(50).string(message.resourceType);
        }
        for (const v of message.alsoKnownAs) {
            resource_1.AlternativeUri.encode(v, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateResourcePayload();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                case 2:
                    message.collectionId = reader.string();
                    break;
                case 3:
                    message.id = reader.string();
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.version = reader.string();
                    break;
                case 6:
                    message.resourceType = reader.string();
                    break;
                case 7:
                    message.alsoKnownAs.push(resource_1.AlternativeUri.decode(reader, reader.uint32()));
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
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
            collectionId: isSet(object.collectionId) ? String(object.collectionId) : "",
            id: isSet(object.id) ? String(object.id) : "",
            name: isSet(object.name) ? String(object.name) : "",
            version: isSet(object.version) ? String(object.version) : "",
            resourceType: isSet(object.resourceType) ? String(object.resourceType) : "",
            alsoKnownAs: Array.isArray(object?.alsoKnownAs)
                ? object.alsoKnownAs.map((e) => resource_1.AlternativeUri.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.collectionId !== undefined && (obj.collectionId = message.collectionId);
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.version !== undefined && (obj.version = message.version);
        message.resourceType !== undefined && (obj.resourceType = message.resourceType);
        if (message.alsoKnownAs) {
            obj.alsoKnownAs = message.alsoKnownAs.map((e) => e ? resource_1.AlternativeUri.toJSON(e) : undefined);
        }
        else {
            obj.alsoKnownAs = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateResourcePayload();
        message.data = object.data ?? new Uint8Array();
        message.collectionId = object.collectionId ?? "";
        message.id = object.id ?? "";
        message.name = object.name ?? "";
        message.version = object.version ?? "";
        message.resourceType = object.resourceType ?? "";
        message.alsoKnownAs = object.alsoKnownAs?.map((e) => resource_1.AlternativeUri.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgCreateResourceResponse() {
    return { resource: undefined };
}
exports.MsgCreateResourceResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resource !== undefined) {
            resource_1.Metadata.encode(message.resource, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateResourceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resource = resource_1.Metadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { resource: isSet(object.resource) ? resource_1.Metadata.fromJSON(object.resource) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.resource !== undefined && (obj.resource = message.resource ? resource_1.Metadata.toJSON(message.resource) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgCreateResourceResponse();
        message.resource = (object.resource !== undefined && object.resource !== null)
            ? resource_1.Metadata.fromPartial(object.resource)
            : undefined;
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || "cheqd.resource.v2.Msg";
        this.rpc = rpc;
        this.CreateResource = this.CreateResource.bind(this);
    }
    CreateResource(request) {
        const data = exports.MsgCreateResource.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateResource", data);
        return promise.then((data) => exports.MsgCreateResourceResponse.decode(new minimal_1.default.Reader(data)));
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