"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryAllDidDocVersionsMetadataResponse = exports.QueryAllDidDocVersionsMetadataRequest = exports.QueryDidDocVersionResponse = exports.QueryDidDocVersionRequest = exports.QueryDidDocResponse = exports.QueryDidDocRequest = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const diddoc_1 = require("./diddoc");
function createBaseQueryDidDocRequest() {
    return { id: "" };
}
exports.QueryDidDocRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDidDocRequest();
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
        return exports.QueryDidDocRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryDidDocRequest();
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseQueryDidDocResponse() {
    return { value: undefined };
}
exports.QueryDidDocResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.value !== undefined) {
            diddoc_1.DidDocWithMetadata.encode(message.value, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDidDocResponse();
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
    create(base) {
        return exports.QueryDidDocResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryDidDocResponse();
        message.value = (object.value !== undefined && object.value !== null)
            ? diddoc_1.DidDocWithMetadata.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseQueryDidDocVersionRequest() {
    return { id: "", version: "" };
}
exports.QueryDidDocVersionRequest = {
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
        const message = createBaseQueryDidDocVersionRequest();
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
    create(base) {
        return exports.QueryDidDocVersionRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryDidDocVersionRequest();
        message.id = object.id ?? "";
        message.version = object.version ?? "";
        return message;
    },
};
function createBaseQueryDidDocVersionResponse() {
    return { value: undefined };
}
exports.QueryDidDocVersionResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.value !== undefined) {
            diddoc_1.DidDocWithMetadata.encode(message.value, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDidDocVersionResponse();
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
    create(base) {
        return exports.QueryDidDocVersionResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryDidDocVersionResponse();
        message.value = (object.value !== undefined && object.value !== null)
            ? diddoc_1.DidDocWithMetadata.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseQueryAllDidDocVersionsMetadataRequest() {
    return { id: "", pagination: undefined };
}
exports.QueryAllDidDocVersionsMetadataRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllDidDocVersionsMetadataRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryAllDidDocVersionsMetadataRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryAllDidDocVersionsMetadataRequest();
        message.id = object.id ?? "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryAllDidDocVersionsMetadataResponse() {
    return { versions: [], pagination: undefined };
}
exports.QueryAllDidDocVersionsMetadataResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.versions) {
            diddoc_1.Metadata.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllDidDocVersionsMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.versions.push(diddoc_1.Metadata.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            versions: Array.isArray(object?.versions) ? object.versions.map((e) => diddoc_1.Metadata.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.versions) {
            obj.versions = message.versions.map((e) => e ? diddoc_1.Metadata.toJSON(e) : undefined);
        }
        else {
            obj.versions = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryAllDidDocVersionsMetadataResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryAllDidDocVersionsMetadataResponse();
        message.versions = object.versions?.map((e) => diddoc_1.Metadata.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_1.PageResponse.fromPartial(object.pagination)
            : undefined;
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
        const data = exports.QueryDidDocRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DidDoc", data);
        return promise.then((data) => exports.QueryDidDocResponse.decode(new minimal_1.default.Reader(data)));
    }
    DidDocVersion(request) {
        const data = exports.QueryDidDocVersionRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DidDocVersion", data);
        return promise.then((data) => exports.QueryDidDocVersionResponse.decode(new minimal_1.default.Reader(data)));
    }
    AllDidDocVersionsMetadata(request) {
        const data = exports.QueryAllDidDocVersionsMetadataRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "AllDidDocVersionsMetadata", data);
        return promise.then((data) => exports.QueryAllDidDocVersionsMetadataResponse.decode(new minimal_1.default.Reader(data)));
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