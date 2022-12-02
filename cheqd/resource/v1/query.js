"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryGetAllResourceVersionsResponse = exports.QueryGetAllResourceVersionsRequest = exports.QueryGetCollectionResourcesResponse = exports.QueryGetCollectionResourcesRequest = exports.QueryGetResourceResponse = exports.QueryGetResourceRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
const resource_1 = require("./resource");
exports.protobufPackage = "cheqdid.cheqdnode.resource.v1";
function createBaseQueryGetResourceRequest() {
    return { $type: "cheqdid.cheqdnode.resource.v1.QueryGetResourceRequest", collectionId: "", id: "" };
}
exports.QueryGetResourceRequest = {
    $type: "cheqdid.cheqdnode.resource.v1.QueryGetResourceRequest",
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
    return { $type: "cheqdid.cheqdnode.resource.v1.QueryGetResourceResponse", resource: undefined };
}
exports.QueryGetResourceResponse = {
    $type: "cheqdid.cheqdnode.resource.v1.QueryGetResourceResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resource !== undefined) {
            resource_1.Resource.encode(message.resource, writer.uint32(10).fork()).ldelim();
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
                    message.resource = resource_1.Resource.decode(reader, reader.uint32());
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
            resource: isSet(object.resource) ? resource_1.Resource.fromJSON(object.resource) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.resource !== undefined && (obj.resource = message.resource ? resource_1.Resource.toJSON(message.resource) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetResourceResponse();
        message.resource = (object.resource !== undefined && object.resource !== null)
            ? resource_1.Resource.fromPartial(object.resource)
            : undefined;
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryGetResourceResponse.$type, exports.QueryGetResourceResponse);
function createBaseQueryGetCollectionResourcesRequest() {
    return { $type: "cheqdid.cheqdnode.resource.v1.QueryGetCollectionResourcesRequest", collectionId: "" };
}
exports.QueryGetCollectionResourcesRequest = {
    $type: "cheqdid.cheqdnode.resource.v1.QueryGetCollectionResourcesRequest",
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
    return { $type: "cheqdid.cheqdnode.resource.v1.QueryGetCollectionResourcesResponse", resources: [] };
}
exports.QueryGetCollectionResourcesResponse = {
    $type: "cheqdid.cheqdnode.resource.v1.QueryGetCollectionResourcesResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.resources) {
            resource_1.ResourceHeader.encode(v, writer.uint32(10).fork()).ldelim();
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
                    message.resources.push(resource_1.ResourceHeader.decode(reader, reader.uint32()));
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
            resources: Array.isArray(object?.resources) ? object.resources.map((e) => resource_1.ResourceHeader.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.resources) {
            obj.resources = message.resources.map((e) => e ? resource_1.ResourceHeader.toJSON(e) : undefined);
        }
        else {
            obj.resources = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetCollectionResourcesResponse();
        message.resources = object.resources?.map((e) => resource_1.ResourceHeader.fromPartial(e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryGetCollectionResourcesResponse.$type, exports.QueryGetCollectionResourcesResponse);
function createBaseQueryGetAllResourceVersionsRequest() {
    return {
        $type: "cheqdid.cheqdnode.resource.v1.QueryGetAllResourceVersionsRequest",
        collectionId: "",
        name: "",
        resourceType: "",
    };
}
exports.QueryGetAllResourceVersionsRequest = {
    $type: "cheqdid.cheqdnode.resource.v1.QueryGetAllResourceVersionsRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.resourceType !== "") {
            writer.uint32(26).string(message.resourceType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllResourceVersionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.resourceType = reader.string();
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
            $type: exports.QueryGetAllResourceVersionsRequest.$type,
            collectionId: isSet(object.collectionId) ? String(object.collectionId) : "",
            name: isSet(object.name) ? String(object.name) : "",
            resourceType: isSet(object.resourceType) ? String(object.resourceType) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined && (obj.collectionId = message.collectionId);
        message.name !== undefined && (obj.name = message.name);
        message.resourceType !== undefined && (obj.resourceType = message.resourceType);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllResourceVersionsRequest();
        message.collectionId = object.collectionId ?? "";
        message.name = object.name ?? "";
        message.resourceType = object.resourceType ?? "";
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryGetAllResourceVersionsRequest.$type, exports.QueryGetAllResourceVersionsRequest);
function createBaseQueryGetAllResourceVersionsResponse() {
    return { $type: "cheqdid.cheqdnode.resource.v1.QueryGetAllResourceVersionsResponse", resources: [] };
}
exports.QueryGetAllResourceVersionsResponse = {
    $type: "cheqdid.cheqdnode.resource.v1.QueryGetAllResourceVersionsResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.resources) {
            resource_1.ResourceHeader.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllResourceVersionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources.push(resource_1.ResourceHeader.decode(reader, reader.uint32()));
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
            $type: exports.QueryGetAllResourceVersionsResponse.$type,
            resources: Array.isArray(object?.resources) ? object.resources.map((e) => resource_1.ResourceHeader.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.resources) {
            obj.resources = message.resources.map((e) => e ? resource_1.ResourceHeader.toJSON(e) : undefined);
        }
        else {
            obj.resources = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllResourceVersionsResponse();
        message.resources = object.resources?.map((e) => resource_1.ResourceHeader.fromPartial(e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryGetAllResourceVersionsResponse.$type, exports.QueryGetAllResourceVersionsResponse);
class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = opts?.service || "cheqdid.cheqdnode.resource.v1.Query";
        this.rpc = rpc;
        this.Resource = this.Resource.bind(this);
        this.CollectionResources = this.CollectionResources.bind(this);
        this.AllResourceVersions = this.AllResourceVersions.bind(this);
    }
    Resource(request) {
        const data = exports.QueryGetResourceRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Resource", data);
        return promise.then((data) => exports.QueryGetResourceResponse.decode(new minimal_1.default.Reader(data)));
    }
    CollectionResources(request) {
        const data = exports.QueryGetCollectionResourcesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "CollectionResources", data);
        return promise.then((data) => exports.QueryGetCollectionResourcesResponse.decode(new minimal_1.default.Reader(data)));
    }
    AllResourceVersions(request) {
        const data = exports.QueryGetAllResourceVersionsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "AllResourceVersions", data);
        return promise.then((data) => exports.QueryGetAllResourceVersionsResponse.decode(new minimal_1.default.Reader(data)));
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