"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryGetAllResourceVersionsResponse = exports.QueryGetAllResourceVersionsRequest = exports.QueryCollectionResourcesResponse = exports.QueryGetCollectionResourcesRequest = exports.QueryResourceResponse = exports.QueryGetResourceRequest = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const resource_1 = require("./resource");
function createBaseQueryGetResourceRequest() {
    return { collectionId: "", id: "" };
}
exports.QueryGetResourceRequest = {
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
function createBaseQueryResourceResponse() {
    return { resource: undefined };
}
exports.QueryResourceResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resource !== undefined) {
            resource_1.Resource.encode(message.resource, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryResourceResponse();
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
        return { resource: isSet(object.resource) ? resource_1.Resource.fromJSON(object.resource) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.resource !== undefined && (obj.resource = message.resource ? resource_1.Resource.toJSON(message.resource) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryResourceResponse();
        message.resource = (object.resource !== undefined && object.resource !== null)
            ? resource_1.Resource.fromPartial(object.resource)
            : undefined;
        return message;
    },
};
function createBaseQueryGetCollectionResourcesRequest() {
    return { collectionId: "" };
}
exports.QueryGetCollectionResourcesRequest = {
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
        return { collectionId: isSet(object.collectionId) ? String(object.collectionId) : "" };
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
function createBaseQueryCollectionResourcesResponse() {
    return { resources: [] };
}
exports.QueryCollectionResourcesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.resources) {
            resource_1.ResourceHeader.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCollectionResourcesResponse();
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
        const message = createBaseQueryCollectionResourcesResponse();
        message.resources = object.resources?.map((e) => resource_1.ResourceHeader.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryGetAllResourceVersionsRequest() {
    return { collectionId: "", name: "", resourceType: "" };
}
exports.QueryGetAllResourceVersionsRequest = {
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
function createBaseQueryGetAllResourceVersionsResponse() {
    return { resources: [] };
}
exports.QueryGetAllResourceVersionsResponse = {
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
        return promise.then((data) => exports.QueryResourceResponse.decode(new minimal_1.default.Reader(data)));
    }
    CollectionResources(request) {
        const data = exports.QueryGetCollectionResourcesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "CollectionResources", data);
        return promise.then((data) => exports.QueryCollectionResourcesResponse.decode(new minimal_1.default.Reader(data)));
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