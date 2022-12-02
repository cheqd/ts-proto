"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryGetAllDidDocVersionsMetadataResponse = exports.QueryGetAllDidDocVersionsMetadataRequest = exports.QueryGetDidDocVersionResponse = exports.QueryGetDidDocVersionRequest = exports.QueryGetDidDocResponse = exports.QueryGetDidDocRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
const diddoc_1 = require("./diddoc");
exports.protobufPackage = "cheqd.did.v2";
function createBaseQueryGetDidDocRequest() {
    return { $type: "cheqd.did.v2.QueryGetDidDocRequest", id: "" };
}
exports.QueryGetDidDocRequest = {
    $type: "cheqd.did.v2.QueryGetDidDocRequest",
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
        return { $type: exports.QueryGetDidDocRequest.$type, id: isSet(object.id) ? String(object.id) : "" };
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
typeRegistry_1.messageTypeRegistry.set(exports.QueryGetDidDocRequest.$type, exports.QueryGetDidDocRequest);
function createBaseQueryGetDidDocResponse() {
    return { $type: "cheqd.did.v2.QueryGetDidDocResponse", value: undefined };
}
exports.QueryGetDidDocResponse = {
    $type: "cheqd.did.v2.QueryGetDidDocResponse",
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
        return {
            $type: exports.QueryGetDidDocResponse.$type,
            value: isSet(object.value) ? diddoc_1.DidDocWithMetadata.fromJSON(object.value) : undefined,
        };
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
typeRegistry_1.messageTypeRegistry.set(exports.QueryGetDidDocResponse.$type, exports.QueryGetDidDocResponse);
function createBaseQueryGetDidDocVersionRequest() {
    return { $type: "cheqd.did.v2.QueryGetDidDocVersionRequest", id: "", version: "" };
}
exports.QueryGetDidDocVersionRequest = {
    $type: "cheqd.did.v2.QueryGetDidDocVersionRequest",
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
            $type: exports.QueryGetDidDocVersionRequest.$type,
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
typeRegistry_1.messageTypeRegistry.set(exports.QueryGetDidDocVersionRequest.$type, exports.QueryGetDidDocVersionRequest);
function createBaseQueryGetDidDocVersionResponse() {
    return { $type: "cheqd.did.v2.QueryGetDidDocVersionResponse", value: undefined };
}
exports.QueryGetDidDocVersionResponse = {
    $type: "cheqd.did.v2.QueryGetDidDocVersionResponse",
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
        return {
            $type: exports.QueryGetDidDocVersionResponse.$type,
            value: isSet(object.value) ? diddoc_1.DidDocWithMetadata.fromJSON(object.value) : undefined,
        };
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
typeRegistry_1.messageTypeRegistry.set(exports.QueryGetDidDocVersionResponse.$type, exports.QueryGetDidDocVersionResponse);
function createBaseQueryGetAllDidDocVersionsMetadataRequest() {
    return { $type: "cheqd.did.v2.QueryGetAllDidDocVersionsMetadataRequest", id: "" };
}
exports.QueryGetAllDidDocVersionsMetadataRequest = {
    $type: "cheqd.did.v2.QueryGetAllDidDocVersionsMetadataRequest",
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
        return { $type: exports.QueryGetAllDidDocVersionsMetadataRequest.$type, id: isSet(object.id) ? String(object.id) : "" };
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
typeRegistry_1.messageTypeRegistry.set(exports.QueryGetAllDidDocVersionsMetadataRequest.$type, exports.QueryGetAllDidDocVersionsMetadataRequest);
function createBaseQueryGetAllDidDocVersionsMetadataResponse() {
    return { $type: "cheqd.did.v2.QueryGetAllDidDocVersionsMetadataResponse", versions: [] };
}
exports.QueryGetAllDidDocVersionsMetadataResponse = {
    $type: "cheqd.did.v2.QueryGetAllDidDocVersionsMetadataResponse",
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
        return {
            $type: exports.QueryGetAllDidDocVersionsMetadataResponse.$type,
            versions: Array.isArray(object?.versions) ? object.versions.map((e) => diddoc_1.Metadata.fromJSON(e)) : [],
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
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllDidDocVersionsMetadataResponse();
        message.versions = object.versions?.map((e) => diddoc_1.Metadata.fromPartial(e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryGetAllDidDocVersionsMetadataResponse.$type, exports.QueryGetAllDidDocVersionsMetadataResponse);
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