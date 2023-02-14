/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import { SignInfo } from "../../did/v1/tx.js";
import { Resource } from "./resource.js";
function createBaseMsgCreateResource() {
    return { payload: undefined, signatures: [] };
}
export const MsgCreateResource = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.payload !== undefined) {
            MsgCreateResourcePayload.encode(message.payload, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.signatures) {
            SignInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateResource();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.payload = MsgCreateResourcePayload.decode(reader, reader.uint32());
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
            payload: isSet(object.payload) ? MsgCreateResourcePayload.fromJSON(object.payload) : undefined,
            signatures: Array.isArray(object?.signatures) ? object.signatures.map((e) => SignInfo.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.payload !== undefined &&
            (obj.payload = message.payload ? MsgCreateResourcePayload.toJSON(message.payload) : undefined);
        if (message.signatures) {
            obj.signatures = message.signatures.map((e) => e ? SignInfo.toJSON(e) : undefined);
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    create(base) {
        return MsgCreateResource.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgCreateResource();
        message.payload = (object.payload !== undefined && object.payload !== null)
            ? MsgCreateResourcePayload.fromPartial(object.payload)
            : undefined;
        message.signatures = object.signatures?.map((e) => SignInfo.fromPartial(e)) || [];
        return message;
    },
};
function createBaseMsgCreateResourcePayload() {
    return { collectionId: "", id: "", name: "", resourceType: "", data: new Uint8Array() };
}
export const MsgCreateResourcePayload = {
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
        if (message.data.length !== 0) {
            writer.uint32(50).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateResourcePayload();
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
        return {
            collectionId: isSet(object.collectionId) ? String(object.collectionId) : "",
            id: isSet(object.id) ? String(object.id) : "",
            name: isSet(object.name) ? String(object.name) : "",
            resourceType: isSet(object.resourceType) ? String(object.resourceType) : "",
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined && (obj.collectionId = message.collectionId);
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.resourceType !== undefined && (obj.resourceType = message.resourceType);
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    create(base) {
        return MsgCreateResourcePayload.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgCreateResourcePayload();
        message.collectionId = object.collectionId ?? "";
        message.id = object.id ?? "";
        message.name = object.name ?? "";
        message.resourceType = object.resourceType ?? "";
        message.data = object.data ?? new Uint8Array();
        return message;
    },
};
function createBaseMsgCreateResourceResponse() {
    return { resource: undefined };
}
export const MsgCreateResourceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.resource !== undefined) {
            Resource.encode(message.resource, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateResourceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resource = Resource.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { resource: isSet(object.resource) ? Resource.fromJSON(object.resource) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.resource !== undefined && (obj.resource = message.resource ? Resource.toJSON(message.resource) : undefined);
        return obj;
    },
    create(base) {
        return MsgCreateResourceResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgCreateResourceResponse();
        message.resource = (object.resource !== undefined && object.resource !== null)
            ? Resource.fromPartial(object.resource)
            : undefined;
        return message;
    },
};
export class MsgClientImpl {
    rpc;
    service;
    constructor(rpc, opts) {
        this.service = opts?.service || "cheqdid.cheqdnode.resource.v1.Msg";
        this.rpc = rpc;
        this.CreateResource = this.CreateResource.bind(this);
    }
    CreateResource(request) {
        const data = MsgCreateResource.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateResource", data);
        return promise.then((data) => MsgCreateResourceResponse.decode(new _m0.Reader(data)));
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