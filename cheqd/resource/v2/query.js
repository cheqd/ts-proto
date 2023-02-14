/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination.js";
import { Metadata, ResourceWithMetadata } from "./resource.js";
function createBaseQueryResourceRequest() {
    return { collectionId: "", id: "" };
}
export const QueryResourceRequest = {
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
        return QueryResourceRequest.fromPartial(base ?? {});
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
export const QueryResourceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.resource !== undefined) {
            ResourceWithMetadata.encode(message.resource, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryResourceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resource = ResourceWithMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { resource: isSet(object.resource) ? ResourceWithMetadata.fromJSON(object.resource) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.resource !== undefined &&
            (obj.resource = message.resource ? ResourceWithMetadata.toJSON(message.resource) : undefined);
        return obj;
    },
    create(base) {
        return QueryResourceResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryResourceResponse();
        message.resource = (object.resource !== undefined && object.resource !== null)
            ? ResourceWithMetadata.fromPartial(object.resource)
            : undefined;
        return message;
    },
};
function createBaseQueryResourceMetadataRequest() {
    return { collectionId: "", id: "" };
}
export const QueryResourceMetadataRequest = {
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
        return QueryResourceMetadataRequest.fromPartial(base ?? {});
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
export const QueryResourceMetadataResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.resource !== undefined) {
            Metadata.encode(message.resource, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryResourceMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resource = Metadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { resource: isSet(object.resource) ? Metadata.fromJSON(object.resource) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.resource !== undefined && (obj.resource = message.resource ? Metadata.toJSON(message.resource) : undefined);
        return obj;
    },
    create(base) {
        return QueryResourceMetadataResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryResourceMetadataResponse();
        message.resource = (object.resource !== undefined && object.resource !== null)
            ? Metadata.fromPartial(object.resource)
            : undefined;
        return message;
    },
};
function createBaseQueryCollectionResourcesRequest() {
    return { collectionId: "", pagination: undefined };
}
export const QueryCollectionResourcesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCollectionResourcesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined && (obj.collectionId = message.collectionId);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryCollectionResourcesRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryCollectionResourcesRequest();
        message.collectionId = object.collectionId ?? "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryCollectionResourcesResponse() {
    return { resources: [], pagination: undefined };
}
export const QueryCollectionResourcesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.resources) {
            Metadata.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCollectionResourcesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources.push(Metadata.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            resources: Array.isArray(object?.resources) ? object.resources.map((e) => Metadata.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.resources) {
            obj.resources = message.resources.map((e) => e ? Metadata.toJSON(e) : undefined);
        }
        else {
            obj.resources = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryCollectionResourcesResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryCollectionResourcesResponse();
        message.resources = object.resources?.map((e) => Metadata.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
export class QueryClientImpl {
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
        const data = QueryResourceRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Resource", data);
        return promise.then((data) => QueryResourceResponse.decode(new _m0.Reader(data)));
    }
    ResourceMetadata(request) {
        const data = QueryResourceMetadataRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "ResourceMetadata", data);
        return promise.then((data) => QueryResourceMetadataResponse.decode(new _m0.Reader(data)));
    }
    CollectionResources(request) {
        const data = QueryCollectionResourcesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "CollectionResources", data);
        return promise.then((data) => QueryCollectionResourcesResponse.decode(new _m0.Reader(data)));
    }
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=query.js.map