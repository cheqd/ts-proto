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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateResource();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.payload = MsgCreateResourcePayload.decode(reader, reader.uint32());
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
            payload: isSet(object.payload) ? MsgCreateResourcePayload.fromJSON(object.payload) : undefined,
            signatures: globalThis.Array.isArray(object?.signatures)
                ? object.signatures.map((e) => SignInfo.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.payload !== undefined) {
            obj.payload = MsgCreateResourcePayload.toJSON(message.payload);
        }
        if (message.signatures?.length) {
            obj.signatures = message.signatures.map((e) => SignInfo.toJSON(e));
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
    return { collectionId: "", id: "", name: "", resourceType: "", data: new Uint8Array(0) };
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateResourcePayload();
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
                case 6:
                    if (tag !== 50) {
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
            collectionId: isSet(object.collectionId) ? globalThis.String(object.collectionId) : "",
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            resourceType: isSet(object.resourceType) ? globalThis.String(object.resourceType) : "",
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
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
        if (message.data.length !== 0) {
            obj.data = base64FromBytes(message.data);
        }
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
        message.data = object.data ?? new Uint8Array(0);
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateResourceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.resource = Resource.decode(reader, reader.uint32());
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
        return { resource: isSet(object.resource) ? Resource.fromJSON(object.resource) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.resource !== undefined) {
            obj.resource = Resource.toJSON(message.resource);
        }
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
export const MsgServiceName = "cheqdid.cheqdnode.resource.v1.Msg";
export class MsgClientImpl {
    rpc;
    service;
    constructor(rpc, opts) {
        this.service = opts?.service || MsgServiceName;
        this.rpc = rpc;
        this.CreateResource = this.CreateResource.bind(this);
    }
    CreateResource(request) {
        const data = MsgCreateResource.encode(request).finish();
        const promise = this.rpc.request(this.service, "CreateResource", data);
        return promise.then((data) => MsgCreateResourceResponse.decode(_m0.Reader.create(data)));
    }
}
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
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=tx.js.map