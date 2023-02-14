/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import { Did } from "./did.js";
import { Metadata } from "./stateValue.js";
function createBaseQueryGetDidRequest() {
    return { id: "" };
}
export const QueryGetDidRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetDidRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { id: isSet(object.id) ? String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    create(base) {
        return QueryGetDidRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetDidRequest();
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseQueryGetDidResponse() {
    return { did: undefined, metadata: undefined };
}
export const QueryGetDidResponse = {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetDidResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.did = Did.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.metadata = Metadata.decode(reader, reader.uint32());
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
            did: isSet(object.did) ? Did.fromJSON(object.did) : undefined,
            metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.did !== undefined && (obj.did = message.did ? Did.toJSON(message.did) : undefined);
        message.metadata !== undefined && (obj.metadata = message.metadata ? Metadata.toJSON(message.metadata) : undefined);
        return obj;
    },
    create(base) {
        return QueryGetDidResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetDidResponse();
        message.did = (object.did !== undefined && object.did !== null) ? Did.fromPartial(object.did) : undefined;
        message.metadata = (object.metadata !== undefined && object.metadata !== null)
            ? Metadata.fromPartial(object.metadata)
            : undefined;
        return message;
    },
};
export class QueryClientImpl {
    rpc;
    service;
    constructor(rpc, opts) {
        this.service = opts?.service || "cheqdid.cheqdnode.cheqd.v1.Query";
        this.rpc = rpc;
        this.Did = this.Did.bind(this);
    }
    Did(request) {
        const data = QueryGetDidRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Did", data);
        return promise.then((data) => QueryGetDidResponse.decode(new _m0.Reader(data)));
    }
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=query.js.map