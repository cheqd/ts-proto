"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryServiceName = exports.QueryGetAllResourceVersionsResponse = exports.QueryGetAllResourceVersionsRequest = exports.QueryCollectionResourcesResponse = exports.QueryGetCollectionResourcesRequest = exports.QueryResourceResponse = exports.QueryGetResourceRequest = void 0;
/* eslint-disable */
const minimal_js_1 = __importDefault(require("protobufjs/minimal.js"));
const resource_js_1 = require("./resource.js");
function createBaseQueryGetResourceRequest() {
    return { collectionId: "", id: "" };
}
exports.QueryGetResourceRequest = {
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
        const reader = input instanceof minimal_js_1.default.Reader ? input : minimal_js_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetResourceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.collectionId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
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
        return {
            collectionId: isSet(object.collectionId) ? globalThis.String(object.collectionId) : "",
            id: isSet(object.id) ? globalThis.String(object.id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.collectionId !== "") {
            obj.collectionId = message.collectionId;
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetResourceRequest.fromPartial(base ?? {});
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
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.resource !== undefined) {
            resource_js_1.Resource.encode(message.resource, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : minimal_js_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryResourceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.resource = resource_js_1.Resource.decode(reader, reader.uint32());
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
        return { resource: isSet(object.resource) ? resource_js_1.Resource.fromJSON(object.resource) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.resource !== undefined) {
            obj.resource = resource_js_1.Resource.toJSON(message.resource);
        }
        return obj;
    },
    create(base) {
        return exports.QueryResourceResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryResourceResponse();
        message.resource = (object.resource !== undefined && object.resource !== null)
            ? resource_js_1.Resource.fromPartial(object.resource)
            : undefined;
        return message;
    },
};
function createBaseQueryGetCollectionResourcesRequest() {
    return { collectionId: "" };
}
exports.QueryGetCollectionResourcesRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : minimal_js_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetCollectionResourcesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.collectionId = reader.string();
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
        return { collectionId: isSet(object.collectionId) ? globalThis.String(object.collectionId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.collectionId !== "") {
            obj.collectionId = message.collectionId;
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetCollectionResourcesRequest.fromPartial(base ?? {});
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
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        for (const v of message.resources) {
            resource_js_1.ResourceHeader.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : minimal_js_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCollectionResourcesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.resources.push(resource_js_1.ResourceHeader.decode(reader, reader.uint32()));
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
            resources: globalThis.Array.isArray(object?.resources)
                ? object.resources.map((e) => resource_js_1.ResourceHeader.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.resources?.length) {
            obj.resources = message.resources.map((e) => resource_js_1.ResourceHeader.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.QueryCollectionResourcesResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryCollectionResourcesResponse();
        message.resources = object.resources?.map((e) => resource_js_1.ResourceHeader.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryGetAllResourceVersionsRequest() {
    return { collectionId: "", name: "", resourceType: "" };
}
exports.QueryGetAllResourceVersionsRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_js_1.default.Reader ? input : minimal_js_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllResourceVersionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.collectionId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.resourceType = reader.string();
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
            collectionId: isSet(object.collectionId) ? globalThis.String(object.collectionId) : "",
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            resourceType: isSet(object.resourceType) ? globalThis.String(object.resourceType) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.collectionId !== "") {
            obj.collectionId = message.collectionId;
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.resourceType !== "") {
            obj.resourceType = message.resourceType;
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetAllResourceVersionsRequest.fromPartial(base ?? {});
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
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        for (const v of message.resources) {
            resource_js_1.ResourceHeader.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : minimal_js_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllResourceVersionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.resources.push(resource_js_1.ResourceHeader.decode(reader, reader.uint32()));
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
            resources: globalThis.Array.isArray(object?.resources)
                ? object.resources.map((e) => resource_js_1.ResourceHeader.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.resources?.length) {
            obj.resources = message.resources.map((e) => resource_js_1.ResourceHeader.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.QueryGetAllResourceVersionsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllResourceVersionsResponse();
        message.resources = object.resources?.map((e) => resource_js_1.ResourceHeader.fromPartial(e)) || [];
        return message;
    },
};
exports.QueryServiceName = "cheqdid.cheqdnode.resource.v1.Query";
class QueryClientImpl {
    rpc;
    service;
    constructor(rpc, opts) {
        this.service = opts?.service || exports.QueryServiceName;
        this.rpc = rpc;
        this.Resource = this.Resource.bind(this);
        this.CollectionResources = this.CollectionResources.bind(this);
        this.AllResourceVersions = this.AllResourceVersions.bind(this);
    }
    Resource(request) {
        const data = exports.QueryGetResourceRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Resource", data);
        return promise.then((data) => exports.QueryResourceResponse.decode(minimal_js_1.default.Reader.create(data)));
    }
    CollectionResources(request) {
        const data = exports.QueryGetCollectionResourcesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "CollectionResources", data);
        return promise.then((data) => exports.QueryCollectionResourcesResponse.decode(minimal_js_1.default.Reader.create(data)));
    }
    AllResourceVersions(request) {
        const data = exports.QueryGetAllResourceVersionsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "AllResourceVersions", data);
        return promise.then((data) => exports.QueryGetAllResourceVersionsResponse.decode(minimal_js_1.default.Reader.create(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=query.js.map