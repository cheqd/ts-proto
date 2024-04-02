"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryServiceName = exports.QueryGetDidResponse = exports.QueryGetDidRequest = void 0;
/* eslint-disable */
const minimal_js_1 = __importDefault(require("protobufjs/minimal.js"));
const did_js_1 = require("./did.js");
const stateValue_js_1 = require("./stateValue.js");
function createBaseQueryGetDidRequest() {
    return { id: "" };
}
exports.QueryGetDidRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : minimal_js_1.default.Reader.create(input);
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
        return exports.QueryGetDidRequest.fromPartial(base ?? {});
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
exports.QueryGetDidResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.did !== undefined) {
            did_js_1.Did.encode(message.did, writer.uint32(10).fork()).ldelim();
        }
        if (message.metadata !== undefined) {
            stateValue_js_1.Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : minimal_js_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetDidResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.did = did_js_1.Did.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.metadata = stateValue_js_1.Metadata.decode(reader, reader.uint32());
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
            did: isSet(object.did) ? did_js_1.Did.fromJSON(object.did) : undefined,
            metadata: isSet(object.metadata) ? stateValue_js_1.Metadata.fromJSON(object.metadata) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.did !== undefined) {
            obj.did = did_js_1.Did.toJSON(message.did);
        }
        if (message.metadata !== undefined) {
            obj.metadata = stateValue_js_1.Metadata.toJSON(message.metadata);
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetDidResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetDidResponse();
        message.did = (object.did !== undefined && object.did !== null) ? did_js_1.Did.fromPartial(object.did) : undefined;
        message.metadata = (object.metadata !== undefined && object.metadata !== null)
            ? stateValue_js_1.Metadata.fromPartial(object.metadata)
            : undefined;
        return message;
    },
};
exports.QueryServiceName = "cheqdid.cheqdnode.cheqd.v1.Query";
class QueryClientImpl {
    rpc;
    service;
    constructor(rpc, opts) {
        this.service = opts?.service || exports.QueryServiceName;
        this.rpc = rpc;
        this.Did = this.Did.bind(this);
    }
    Did(request) {
        const data = exports.QueryGetDidRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Did", data);
        return promise.then((data) => exports.QueryGetDidResponse.decode(minimal_js_1.default.Reader.create(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=query.js.map