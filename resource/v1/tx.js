"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgCreateResourceResponse = exports.MsgCreateResourcePayload = exports.MsgCreateResource = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const resource_1 = require("./resource");
const tx_1 = require("../../cheqd/v1/tx");
exports.protobufPackage = "cheqdid.cheqdnode.resource.v1";
const baseMsgCreateResource = {};
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
        const message = { ...baseMsgCreateResource };
        message.signatures = [];
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
        const message = { ...baseMsgCreateResource };
        message.signatures = [];
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = exports.MsgCreateResourcePayload.fromJSON(object.payload);
        }
        else {
            message.payload = undefined;
        }
        if (object.signatures !== undefined && object.signatures !== null) {
            for (const e of object.signatures) {
                message.signatures.push(tx_1.SignInfo.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.payload !== undefined &&
            (obj.payload = message.payload
                ? exports.MsgCreateResourcePayload.toJSON(message.payload)
                : undefined);
        if (message.signatures) {
            obj.signatures = message.signatures.map((e) => e ? tx_1.SignInfo.toJSON(e) : undefined);
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateResource };
        if (object.payload !== undefined && object.payload !== null) {
            message.payload = exports.MsgCreateResourcePayload.fromPartial(object.payload);
        }
        else {
            message.payload = undefined;
        }
        message.signatures = [];
        if (object.signatures !== undefined && object.signatures !== null) {
            for (const e of object.signatures) {
                message.signatures.push(tx_1.SignInfo.fromPartial(e));
            }
        }
        return message;
    },
};
const baseMsgCreateResourcePayload = {
    collectionId: "",
    id: "",
    name: "",
    resourceType: "",
};
exports.MsgCreateResourcePayload = {
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
        if (message.data.length !== 0) {
            writer.uint32(50).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCreateResourcePayload,
        };
        message.data = new Uint8Array();
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
                case 6:
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
        const message = {
            ...baseMsgCreateResourcePayload,
        };
        message.data = new Uint8Array();
        if (object.collectionId !== undefined && object.collectionId !== null) {
            message.collectionId = String(object.collectionId);
        }
        else {
            message.collectionId = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.resourceType !== undefined && object.resourceType !== null) {
            message.resourceType = String(object.resourceType);
        }
        else {
            message.resourceType = "";
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.resourceType !== undefined &&
            (obj.resourceType = message.resourceType);
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = {
            ...baseMsgCreateResourcePayload,
        };
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.resourceType = (_d = object.resourceType) !== null && _d !== void 0 ? _d : "";
        message.data = (_e = object.data) !== null && _e !== void 0 ? _e : new Uint8Array();
        return message;
    },
};
const baseMsgCreateResourceResponse = {};
exports.MsgCreateResourceResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resource !== undefined) {
            resource_1.Resource.encode(message.resource, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCreateResourceResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resource = resource_1.Resource.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgCreateResourceResponse,
        };
        if (object.resource !== undefined && object.resource !== null) {
            message.resource = resource_1.Resource.fromJSON(object.resource);
        }
        else {
            message.resource = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resource !== undefined &&
            (obj.resource = message.resource
                ? resource_1.Resource.toJSON(message.resource)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgCreateResourceResponse,
        };
        if (object.resource !== undefined && object.resource !== null) {
            message.resource = resource_1.Resource.fromPartial(object.resource);
        }
        else {
            message.resource = undefined;
        }
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CreateResource = this.CreateResource.bind(this);
    }
    CreateResource(request) {
        const data = exports.MsgCreateResource.encode(request).finish();
        const promise = this.rpc.request("cheqdid.cheqdnode.resource.v1.Msg", "CreateResource", data);
        return promise.then((data) => exports.MsgCreateResourceResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
    const bin = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(""));
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
