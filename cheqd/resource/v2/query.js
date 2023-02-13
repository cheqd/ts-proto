"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryCollectionResourcesResponse = exports.QueryCollectionResourcesRequest = exports.QueryResourceMetadataResponse = exports.QueryResourceMetadataRequest = exports.QueryResourceResponse = exports.QueryResourceRequest = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_js_1 = __importDefault(require("protobufjs/minimal.js"));
const pagination_js_1 = require("../../../cosmos/base/query/v1beta1/pagination.js");
const resource_js_1 = require("./resource.js");
function createBaseQueryResourceRequest() {
    return { collectionId: "", id: "" };
}
exports.QueryResourceRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryResourceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
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
        return {
            collectionId: isSet(object.collectionId) ? String(object.collectionId) : "",
            id: isSet(object.id) ? String(object.id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined && (obj.collectionId = message.collectionId);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    create(base) {
        return exports.QueryResourceRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryResourceRequest();
        message.collectionId = object.collectionId ?? "";
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseQueryResourceResponse() {
    return { resource: undefined };
}
exports.QueryResourceResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.resource !== undefined) {
            resource_js_1.ResourceWithMetadata.encode(message.resource, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryResourceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resource = resource_js_1.ResourceWithMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { resource: isSet(object.resource) ? resource_js_1.ResourceWithMetadata.fromJSON(object.resource) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.resource !== undefined &&
            (obj.resource = message.resource ? resource_js_1.ResourceWithMetadata.toJSON(message.resource) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryResourceResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryResourceResponse();
        message.resource = (object.resource !== undefined && object.resource !== null)
            ? resource_js_1.ResourceWithMetadata.fromPartial(object.resource)
            : undefined;
        return message;
    },
};
function createBaseQueryResourceMetadataRequest() {
    return { collectionId: "", id: "" };
}
exports.QueryResourceMetadataRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryResourceMetadataRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
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
        return {
            collectionId: isSet(object.collectionId) ? String(object.collectionId) : "",
            id: isSet(object.id) ? String(object.id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined && (obj.collectionId = message.collectionId);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    create(base) {
        return exports.QueryResourceMetadataRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryResourceMetadataRequest();
        message.collectionId = object.collectionId ?? "";
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseQueryResourceMetadataResponse() {
    return { resource: undefined };
}
exports.QueryResourceMetadataResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.resource !== undefined) {
            resource_js_1.Metadata.encode(message.resource, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryResourceMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resource = resource_js_1.Metadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { resource: isSet(object.resource) ? resource_js_1.Metadata.fromJSON(object.resource) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.resource !== undefined && (obj.resource = message.resource ? resource_js_1.Metadata.toJSON(message.resource) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryResourceMetadataResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryResourceMetadataResponse();
        message.resource = (object.resource !== undefined && object.resource !== null)
            ? resource_js_1.Metadata.fromPartial(object.resource)
            : undefined;
        return message;
    },
};
function createBaseQueryCollectionResourcesRequest() {
    return { collectionId: "", pagination: undefined };
}
exports.QueryCollectionResourcesRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCollectionResourcesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_js_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination) ? pagination_js_1.PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined && (obj.collectionId = message.collectionId);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_js_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryCollectionResourcesRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryCollectionResourcesRequest();
        message.collectionId = object.collectionId ?? "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_js_1.PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryCollectionResourcesResponse() {
    return { resources: [], pagination: undefined };
}
exports.QueryCollectionResourcesResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        for (const v of message.resources) {
            resource_js_1.Metadata.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_js_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCollectionResourcesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources.push(resource_js_1.Metadata.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_js_1.PageResponse.decode(reader, reader.uint32());
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
            resources: Array.isArray(object?.resources) ? object.resources.map((e) => resource_js_1.Metadata.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? pagination_js_1.PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.resources) {
            obj.resources = message.resources.map((e) => e ? resource_js_1.Metadata.toJSON(e) : undefined);
        }
        else {
            obj.resources = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? pagination_js_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return exports.QueryCollectionResourcesResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryCollectionResourcesResponse();
        message.resources = object.resources?.map((e) => resource_js_1.Metadata.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? pagination_js_1.PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
class QueryClientImpl {
    rpc;
    service;
    constructor(rpc, opts) {
        this.service = opts?.service || "cheqd.resource.v2.Query";
        this.rpc = rpc;
        this.Resource = this.Resource.bind(this);
        this.ResourceMetadata = this.ResourceMetadata.bind(this);
        this.CollectionResources = this.CollectionResources.bind(this);
    }
    Resource(request) {
        const data = exports.QueryResourceRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Resource", data);
        return promise.then((data) => exports.QueryResourceResponse.decode(new minimal_js_1.default.Reader(data)));
    }
    ResourceMetadata(request) {
        const data = exports.QueryResourceMetadataRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ResourceMetadata", data);
        return promise.then((data) => exports.QueryResourceMetadataResponse.decode(new minimal_js_1.default.Reader(data)));
    }
    CollectionResources(request) {
        const data = exports.QueryCollectionResourcesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "CollectionResources", data);
        return promise.then((data) => exports.QueryCollectionResourcesResponse.decode(new minimal_js_1.default.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
if (minimal_js_1.default.util.Long !== long_1.default) {
    minimal_js_1.default.util.Long = long_1.default;
    minimal_js_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=query.js.map