"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryGetCollectionResourcesResponse = exports.QueryGetCollectionResourcesRequest = exports.QueryGetResourceMetadataResponse = exports.QueryGetResourceMetadataRequest = exports.QueryGetResourceResponse = exports.QueryGetResourceRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
const resource_1 = require("./resource");
exports.protobufPackage = "cheqd.resource.v2";
function createBaseQueryGetResourceRequest() {
    return { $type: "cheqd.resource.v2.QueryGetResourceRequest", collectionId: "", id: "" };
}
exports.QueryGetResourceRequest = {
    $type: "cheqd.resource.v2.QueryGetResourceRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetResourceRequest();
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
            $type: exports.QueryGetResourceRequest.$type,
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
    fromPartial(object) {
        const message = createBaseQueryGetResourceRequest();
        message.collectionId = object.collectionId ?? "";
        message.id = object.id ?? "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryGetResourceRequest.$type, exports.QueryGetResourceRequest);
function createBaseQueryGetResourceResponse() {
    return { $type: "cheqd.resource.v2.QueryGetResourceResponse", resource: undefined };
}
exports.QueryGetResourceResponse = {
    $type: "cheqd.resource.v2.QueryGetResourceResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resource !== undefined) {
            resource_1.ResourceWithMetadata.encode(message.resource, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetResourceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resource = resource_1.ResourceWithMetadata.decode(reader, reader.uint32());
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
            $type: exports.QueryGetResourceResponse.$type,
            resource: isSet(object.resource) ? resource_1.ResourceWithMetadata.fromJSON(object.resource) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.resource !== undefined &&
            (obj.resource = message.resource ? resource_1.ResourceWithMetadata.toJSON(message.resource) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetResourceResponse();
        message.resource = (object.resource !== undefined && object.resource !== null)
            ? resource_1.ResourceWithMetadata.fromPartial(object.resource)
            : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryGetResourceResponse.$type, exports.QueryGetResourceResponse);
function createBaseQueryGetResourceMetadataRequest() {
    return { $type: "cheqd.resource.v2.QueryGetResourceMetadataRequest", collectionId: "", id: "" };
}
exports.QueryGetResourceMetadataRequest = {
    $type: "cheqd.resource.v2.QueryGetResourceMetadataRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetResourceMetadataRequest();
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
            $type: exports.QueryGetResourceMetadataRequest.$type,
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
    fromPartial(object) {
        const message = createBaseQueryGetResourceMetadataRequest();
        message.collectionId = object.collectionId ?? "";
        message.id = object.id ?? "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryGetResourceMetadataRequest.$type, exports.QueryGetResourceMetadataRequest);
function createBaseQueryGetResourceMetadataResponse() {
    return { $type: "cheqd.resource.v2.QueryGetResourceMetadataResponse", resource: undefined };
}
exports.QueryGetResourceMetadataResponse = {
    $type: "cheqd.resource.v2.QueryGetResourceMetadataResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resource !== undefined) {
            resource_1.Metadata.encode(message.resource, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetResourceMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resource = resource_1.Metadata.decode(reader, reader.uint32());
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
            $type: exports.QueryGetResourceMetadataResponse.$type,
            resource: isSet(object.resource) ? resource_1.Metadata.fromJSON(object.resource) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.resource !== undefined && (obj.resource = message.resource ? resource_1.Metadata.toJSON(message.resource) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetResourceMetadataResponse();
        message.resource = (object.resource !== undefined && object.resource !== null)
            ? resource_1.Metadata.fromPartial(object.resource)
            : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryGetResourceMetadataResponse.$type, exports.QueryGetResourceMetadataResponse);
function createBaseQueryGetCollectionResourcesRequest() {
    return { $type: "cheqd.resource.v2.QueryGetCollectionResourcesRequest", collectionId: "" };
}
exports.QueryGetCollectionResourcesRequest = {
    $type: "cheqd.resource.v2.QueryGetCollectionResourcesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetCollectionResourcesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
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
            $type: exports.QueryGetCollectionResourcesRequest.$type,
            collectionId: isSet(object.collectionId) ? String(object.collectionId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined && (obj.collectionId = message.collectionId);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetCollectionResourcesRequest();
        message.collectionId = object.collectionId ?? "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryGetCollectionResourcesRequest.$type, exports.QueryGetCollectionResourcesRequest);
function createBaseQueryGetCollectionResourcesResponse() {
    return { $type: "cheqd.resource.v2.QueryGetCollectionResourcesResponse", resources: [] };
}
exports.QueryGetCollectionResourcesResponse = {
    $type: "cheqd.resource.v2.QueryGetCollectionResourcesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.resources) {
            resource_1.Metadata.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetCollectionResourcesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources.push(resource_1.Metadata.decode(reader, reader.uint32()));
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
            $type: exports.QueryGetCollectionResourcesResponse.$type,
            resources: Array.isArray(object?.resources) ? object.resources.map((e) => resource_1.Metadata.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.resources) {
            obj.resources = message.resources.map((e) => e ? resource_1.Metadata.toJSON(e) : undefined);
        }
        else {
            obj.resources = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetCollectionResourcesResponse();
        message.resources = object.resources?.map((e) => resource_1.Metadata.fromPartial(e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryGetCollectionResourcesResponse.$type, exports.QueryGetCollectionResourcesResponse);
class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || "cheqd.resource.v2.Query";
        this.rpc = rpc;
        this.Resource = this.Resource.bind(this);
        this.ResourceMetadata = this.ResourceMetadata.bind(this);
        this.CollectionResources = this.CollectionResources.bind(this);
    }
    Resource(request) {
        const data = exports.QueryGetResourceRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Resource", data);
        return promise.then((data) => exports.QueryGetResourceResponse.decode(new minimal_1.default.Reader(data)));
    }
    ResourceMetadata(request) {
        const data = exports.QueryGetResourceMetadataRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ResourceMetadata", data);
        return promise.then((data) => exports.QueryGetResourceMetadataResponse.decode(new minimal_1.default.Reader(data)));
    }
    CollectionResources(request) {
        const data = exports.QueryGetCollectionResourcesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "CollectionResources", data);
        return promise.then((data) => exports.QueryGetCollectionResourcesResponse.decode(new minimal_1.default.Reader(data)));
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