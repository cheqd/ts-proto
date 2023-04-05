"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryGetDidResponse = exports.QueryGetDidRequest = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const did_1 = require("./did");
const stateValue_1 = require("./stateValue");
function createBaseQueryGetDidRequest() {
    return { id: "" };
}
exports.QueryGetDidRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.did !== undefined) {
            did_1.Did.encode(message.did, writer.uint32(10).fork()).ldelim();
        }
        if (message.metadata !== undefined) {
            stateValue_1.Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetDidResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.did = did_1.Did.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.metadata = stateValue_1.Metadata.decode(reader, reader.uint32());
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
            did: isSet(object.did) ? did_1.Did.fromJSON(object.did) : undefined,
            metadata: isSet(object.metadata) ? stateValue_1.Metadata.fromJSON(object.metadata) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.did !== undefined && (obj.did = message.did ? did_1.Did.toJSON(message.did) : undefined);
        message.metadata !== undefined && (obj.metadata = message.metadata ? stateValue_1.Metadata.toJSON(message.metadata) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryGetDidResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetDidResponse();
        message.did = (object.did !== undefined && object.did !== null) ? did_1.Did.fromPartial(object.did) : undefined;
        message.metadata = (object.metadata !== undefined && object.metadata !== null)
            ? stateValue_1.Metadata.fromPartial(object.metadata)
            : undefined;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || "cheqdid.cheqdnode.cheqd.v1.Query";
        this.rpc = rpc;
        this.Did = this.Did.bind(this);
    }
    Did(request) {
        const data = exports.QueryGetDidRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Did", data);
        return promise.then((data) => exports.QueryGetDidResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=query.js.map