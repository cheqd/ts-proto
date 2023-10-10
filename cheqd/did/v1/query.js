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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetDidRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
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
        return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetDidResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.did = Did.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.metadata = Metadata.decode(reader, reader.uint32());
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
            did: isSet(object.did) ? Did.fromJSON(object.did) : undefined,
            metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.did !== undefined) {
            obj.did = Did.toJSON(message.did);
        }
        if (message.metadata !== undefined) {
            obj.metadata = Metadata.toJSON(message.metadata);
        }
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
export const QueryServiceName = "cheqdid.cheqdnode.cheqd.v1.Query";
export class QueryClientImpl {
    rpc;
    service;
    constructor(rpc, opts) {
        this.service = opts?.service || QueryServiceName;
        this.rpc = rpc;
        this.Did = this.Did.bind(this);
    }
    Did(request) {
        const data = QueryGetDidRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Did", data);
        return promise.then((data) => QueryGetDidResponse.decode(_m0.Reader.create(data)));
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