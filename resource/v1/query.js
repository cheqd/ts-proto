"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryGetAllResourceVersionsResponse = exports.QueryGetAllResourceVersionsRequest = exports.QueryGetCollectionResourcesResponse = exports.QueryGetCollectionResourcesRequest = exports.QueryGetResourceResponse = exports.QueryGetResourceRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const resource_1 = require("./resource");
exports.protobufPackage = "cheqdid.cheqdnode.resource.v1";
const baseQueryGetResourceRequest = { collectionId: "", id: "" };
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
        const message = {
            ...baseQueryGetResourceRequest,
        };
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
        const message = {
            ...baseQueryGetResourceRequest,
        };
        if (object.collectionId !== undefined && object.collectionId !== null) {
            message.collectionId = String(object.collectionId);
        }
        else {
            message.collectionId = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = {
            ...baseQueryGetResourceRequest,
        };
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
const baseQueryGetResourceResponse = {};
exports.QueryGetResourceResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.resource !== undefined) {
            resource_1.Resource.encode(message.resource, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetResourceResponse,
        };
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
        const message = {
            ...baseQueryGetResourceResponse,
        };
        if (object.resource !== undefined && object.resource !== null) {
            message.resource = resource_1.Resource.fromJSON(object.resource);
        }
        else {
            message.resource = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.resource !== undefined &&
            (obj.resource = message.resource
                ? resource_1.Resource.toJSON(message.resource)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetResourceResponse,
        };
        if (object.resource !== undefined && object.resource !== null) {
            message.resource = resource_1.Resource.fromPartial(object.resource);
        }
        else {
            message.resource = undefined;
        }
        return message;
    },
};
const baseQueryGetCollectionResourcesRequest = { collectionId: "" };
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
        const message = {
            ...baseQueryGetCollectionResourcesRequest,
        };
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
        const message = {
            ...baseQueryGetCollectionResourcesRequest,
        };
        if (object.collectionId !== undefined && object.collectionId !== null) {
            message.collectionId = String(object.collectionId);
        }
        else {
            message.collectionId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = {
            ...baseQueryGetCollectionResourcesRequest,
        };
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
const baseQueryGetCollectionResourcesResponse = {};
exports.QueryGetCollectionResourcesResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.resources) {
            resource_1.ResourceHeader.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetCollectionResourcesResponse,
        };
        message.resources = [];
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
        const message = {
            ...baseQueryGetCollectionResourcesResponse,
        };
        message.resources = [];
        if (object.resources !== undefined && object.resources !== null) {
            for (const e of object.resources) {
                message.resources.push(resource_1.ResourceHeader.fromJSON(e));
            }
        }
        return message;
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
        const message = {
            ...baseQueryGetCollectionResourcesResponse,
        };
        message.resources = [];
        if (object.resources !== undefined && object.resources !== null) {
            for (const e of object.resources) {
                message.resources.push(resource_1.ResourceHeader.fromPartial(e));
            }
        }
        return message;
    },
};
const baseQueryGetAllResourceVersionsRequest = {
    collectionId: "",
    name: "",
};
exports.QueryGetAllResourceVersionsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetAllResourceVersionsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetAllResourceVersionsRequest,
        };
        if (object.collectionId !== undefined && object.collectionId !== null) {
            message.collectionId = String(object.collectionId);
        }
        else {
            message.collectionId = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = {
            ...baseQueryGetAllResourceVersionsRequest,
        };
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
const baseQueryGetAllResourceVersionsResponse = {};
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
        const message = {
            ...baseQueryGetAllResourceVersionsResponse,
        };
        message.resources = [];
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
        const message = {
            ...baseQueryGetAllResourceVersionsResponse,
        };
        message.resources = [];
        if (object.resources !== undefined && object.resources !== null) {
            for (const e of object.resources) {
                message.resources.push(resource_1.ResourceHeader.fromJSON(e));
            }
        }
        return message;
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
        const message = {
            ...baseQueryGetAllResourceVersionsResponse,
        };
        message.resources = [];
        if (object.resources !== undefined && object.resources !== null) {
            for (const e of object.resources) {
                message.resources.push(resource_1.ResourceHeader.fromPartial(e));
            }
        }
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Resource = this.Resource.bind(this);
        this.CollectionResources = this.CollectionResources.bind(this);
        this.AllResourceVersions = this.AllResourceVersions.bind(this);
    }
    Resource(request) {
        const data = exports.QueryGetResourceRequest.encode(request).finish();
        const promise = this.rpc.request("cheqdid.cheqdnode.resource.v1.Query", "Resource", data);
        return promise.then((data) => exports.QueryGetResourceResponse.decode(new minimal_1.default.Reader(data)));
    }
    CollectionResources(request) {
        const data = exports.QueryGetCollectionResourcesRequest.encode(request).finish();
        const promise = this.rpc.request("cheqdid.cheqdnode.resource.v1.Query", "CollectionResources", data);
        return promise.then((data) => exports.QueryGetCollectionResourcesResponse.decode(new minimal_1.default.Reader(data)));
    }
    AllResourceVersions(request) {
        const data = exports.QueryGetAllResourceVersionsRequest.encode(request).finish();
        const promise = this.rpc.request("cheqdid.cheqdnode.resource.v1.Query", "AllResourceVersions", data);
        return promise.then((data) => exports.QueryGetAllResourceVersionsResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
