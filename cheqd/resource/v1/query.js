"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryGetAllResourceVersionsResponse = exports.QueryGetAllResourceVersionsRequest = exports.QueryGetCollectionResourcesResponse = exports.QueryGetCollectionResourcesRequest = exports.QueryGetResourceResponse = exports.QueryGetResourceRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const _m0 = __importStar(require("protobufjs/minimal"));
const resource_1 = require("./resource");
exports.protobufPackage = "cheqdid.cheqdnode.resource.v1";
function createBaseQueryGetResourceRequest() {
    return { collectionId: "", id: "" };
}
exports.QueryGetResourceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
        var _a, _b;
        const message = createBaseQueryGetResourceRequest();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryGetResourceResponse() {
    return { resource: undefined };
}
exports.QueryGetResourceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.resource !== undefined) {
            resource_1.Resource.encode(message.resource, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
        return { resource: isSet(object.resource) ? resource_1.Resource.fromJSON(object.resource) : undefined };
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
function createBaseQueryGetCollectionResourcesRequest() {
    return { collectionId: "" };
}
exports.QueryGetCollectionResourcesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
        var _a;
        const message = createBaseQueryGetCollectionResourcesRequest();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryGetCollectionResourcesResponse() {
    return { resources: [] };
}
exports.QueryGetCollectionResourcesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.resources) {
            resource_1.ResourceHeader.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
            resources: Array.isArray(object === null || object === void 0 ? void 0 : object.resources) ? object.resources.map((e) => resource_1.ResourceHeader.fromJSON(e)) : [],
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
        var _a;
        const message = createBaseQueryGetCollectionResourcesResponse();
        message.resources = ((_a = object.resources) === null || _a === void 0 ? void 0 : _a.map((e) => resource_1.ResourceHeader.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryGetAllResourceVersionsRequest() {
    return { collectionId: "", name: "", resourceType: "" };
}
exports.QueryGetAllResourceVersionsRequest = {
    encode(message, writer = _m0.Writer.create()) {
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
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
        var _a, _b, _c;
        const message = createBaseQueryGetAllResourceVersionsRequest();
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.resourceType = (_c = object.resourceType) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseQueryGetAllResourceVersionsResponse() {
    return { resources: [] };
}
exports.QueryGetAllResourceVersionsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.resources) {
            resource_1.ResourceHeader.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
            resources: Array.isArray(object === null || object === void 0 ? void 0 : object.resources) ? object.resources.map((e) => resource_1.ResourceHeader.fromJSON(e)) : [],
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
        var _a;
        const message = createBaseQueryGetAllResourceVersionsResponse();
        message.resources = ((_a = object.resources) === null || _a === void 0 ? void 0 : _a.map((e) => resource_1.ResourceHeader.fromPartial(e))) || [];
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc, opts) {
        this.service = (opts === null || opts === void 0 ? void 0 : opts.service) || "cheqdid.cheqdnode.resource.v1.Query";
        this.rpc = rpc;
        this.Resource = this.Resource.bind(this);
        this.CollectionResources = this.CollectionResources.bind(this);
        this.AllResourceVersions = this.AllResourceVersions.bind(this);
    }
    Resource(request) {
        const data = exports.QueryGetResourceRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Resource", data);
        return promise.then((data) => exports.QueryGetResourceResponse.decode(new _m0.Reader(data)));
    }
    CollectionResources(request) {
        const data = exports.QueryGetCollectionResourcesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "CollectionResources", data);
        return promise.then((data) => exports.QueryGetCollectionResourcesResponse.decode(new _m0.Reader(data)));
    }
    AllResourceVersions(request) {
        const data = exports.QueryGetAllResourceVersionsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "AllResourceVersions", data);
        return promise.then((data) => exports.QueryGetAllResourceVersionsResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
