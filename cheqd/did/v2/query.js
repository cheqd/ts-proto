"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryGetAllDidDocVersionsMetadataResponse = exports.QueryGetAllDidDocVersionsMetadataRequest = exports.QueryGetDidDocVersionResponse = exports.QueryGetDidDocVersionRequest = exports.QueryGetDidDocResponse = exports.QueryGetDidDocRequest = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const diddoc_1 = require("./diddoc");
function createBaseQueryGetDidDocRequest() {
    return { id: "" };
}
exports.QueryGetDidDocRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetDidDocRequest();
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
    fromPartial(object) {
        const message = createBaseQueryGetDidDocRequest();
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseQueryGetDidDocResponse() {
    return { value: undefined };
}
exports.QueryGetDidDocResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.value !== undefined) {
            diddoc_1.DidDocWithMetadata.encode(message.value, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetDidDocResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = diddoc_1.DidDocWithMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { value: isSet(object.value) ? diddoc_1.DidDocWithMetadata.fromJSON(object.value) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = message.value ? diddoc_1.DidDocWithMetadata.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetDidDocResponse();
        message.value = (object.value !== undefined && object.value !== null)
            ? diddoc_1.DidDocWithMetadata.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseQueryGetDidDocVersionRequest() {
    return { id: "", version: "" };
}
exports.QueryGetDidDocVersionRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetDidDocVersionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
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
            id: isSet(object.id) ? String(object.id) : "",
            version: isSet(object.version) ? String(object.version) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.version !== undefined && (obj.version = message.version);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetDidDocVersionRequest();
        message.id = object.id ?? "";
        message.version = object.version ?? "";
        return message;
    },
};
function createBaseQueryGetDidDocVersionResponse() {
    return { value: undefined };
}
exports.QueryGetDidDocVersionResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.value !== undefined) {
            diddoc_1.DidDocWithMetadata.encode(message.value, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetDidDocVersionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = diddoc_1.DidDocWithMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { value: isSet(object.value) ? diddoc_1.DidDocWithMetadata.fromJSON(object.value) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = message.value ? diddoc_1.DidDocWithMetadata.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetDidDocVersionResponse();
        message.value = (object.value !== undefined && object.value !== null)
            ? diddoc_1.DidDocWithMetadata.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseQueryGetAllDidDocVersionsMetadataRequest() {
    return { id: "" };
}
exports.QueryGetAllDidDocVersionsMetadataRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllDidDocVersionsMetadataRequest();
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
    fromPartial(object) {
        const message = createBaseQueryGetAllDidDocVersionsMetadataRequest();
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseQueryGetAllDidDocVersionsMetadataResponse() {
    return { versions: [] };
}
exports.QueryGetAllDidDocVersionsMetadataResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.versions) {
            diddoc_1.Metadata.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllDidDocVersionsMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.versions.push(diddoc_1.Metadata.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { versions: Array.isArray(object?.versions) ? object.versions.map((e) => diddoc_1.Metadata.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.versions) {
            obj.versions = message.versions.map((e) => e ? diddoc_1.Metadata.toJSON(e) : undefined);
        }
        else {
            obj.versions = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllDidDocVersionsMetadataResponse();
        message.versions = object.versions?.map((e) => diddoc_1.Metadata.fromPartial(e)) || [];
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || "cheqd.did.v2.Query";
        this.rpc = rpc;
        this.DidDoc = this.DidDoc.bind(this);
        this.DidDocVersion = this.DidDocVersion.bind(this);
        this.AllDidDocVersionsMetadata = this.AllDidDocVersionsMetadata.bind(this);
    }
    DidDoc(request) {
        const data = exports.QueryGetDidDocRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DidDoc", data);
        return promise.then((data) => exports.QueryGetDidDocResponse.decode(new minimal_1.default.Reader(data)));
    }
    DidDocVersion(request) {
        const data = exports.QueryGetDidDocVersionRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DidDocVersion", data);
        return promise.then((data) => exports.QueryGetDidDocVersionResponse.decode(new minimal_1.default.Reader(data)));
    }
    AllDidDocVersionsMetadata(request) {
        const data = exports.QueryGetAllDidDocVersionsMetadataRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "AllDidDocVersionsMetadata", data);
        return promise.then((data) => exports.QueryGetAllDidDocVersionsMetadataResponse.decode(new minimal_1.default.Reader(data)));
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