/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import { Resource, ResourceHeader } from "./resource.js";
function createBaseQueryGetResourceRequest() {
    return { collectionId: "", id: "" };
}
export const QueryGetResourceRequest = {
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
            collectionId: isSet(object.collectionId) ? String(object.collectionId) : "",
            id: isSet(object.id) ? String(object.id) : "",
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
        return QueryGetResourceRequest.fromPartial(base ?? {});
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
export const QueryResourceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.resource !== undefined) {
            Resource.encode(message.resource, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryResourceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.resource = Resource.decode(reader, reader.uint32());
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
        return { resource: isSet(object.resource) ? Resource.fromJSON(object.resource) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.resource !== undefined) {
            obj.resource = Resource.toJSON(message.resource);
        }
        return obj;
    },
    create(base) {
        return QueryResourceResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryResourceResponse();
        message.resource = (object.resource !== undefined && object.resource !== null)
            ? Resource.fromPartial(object.resource)
            : undefined;
        return message;
    },
};
function createBaseQueryGetCollectionResourcesRequest() {
    return { collectionId: "" };
}
export const QueryGetCollectionResourcesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
        return { collectionId: isSet(object.collectionId) ? String(object.collectionId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.collectionId !== "") {
            obj.collectionId = message.collectionId;
        }
        return obj;
    },
    create(base) {
        return QueryGetCollectionResourcesRequest.fromPartial(base ?? {});
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
export const QueryCollectionResourcesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.resources) {
            ResourceHeader.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCollectionResourcesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.resources.push(ResourceHeader.decode(reader, reader.uint32()));
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
            resources: Array.isArray(object?.resources) ? object.resources.map((e) => ResourceHeader.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.resources?.length) {
            obj.resources = message.resources.map((e) => ResourceHeader.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return QueryCollectionResourcesResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryCollectionResourcesResponse();
        message.resources = object.resources?.map((e) => ResourceHeader.fromPartial(e)) || [];
        return message;
    },
};
function createBaseQueryGetAllResourceVersionsRequest() {
    return { collectionId: "", name: "", resourceType: "" };
}
export const QueryGetAllResourceVersionsRequest = {
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
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
            collectionId: isSet(object.collectionId) ? String(object.collectionId) : "",
            name: isSet(object.name) ? String(object.name) : "",
            resourceType: isSet(object.resourceType) ? String(object.resourceType) : "",
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
        return QueryGetAllResourceVersionsRequest.fromPartial(base ?? {});
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
export const QueryGetAllResourceVersionsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.resources) {
            ResourceHeader.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryGetAllResourceVersionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.resources.push(ResourceHeader.decode(reader, reader.uint32()));
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
            resources: Array.isArray(object?.resources) ? object.resources.map((e) => ResourceHeader.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.resources?.length) {
            obj.resources = message.resources.map((e) => ResourceHeader.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return QueryGetAllResourceVersionsResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryGetAllResourceVersionsResponse();
        message.resources = object.resources?.map((e) => ResourceHeader.fromPartial(e)) || [];
        return message;
    },
};
export const QueryServiceName = "cheqdid.cheqdnode.resource.v1.Query";
export class QueryClientImpl {
    rpc;
    service;
    constructor(rpc, opts) {
        this.service = opts?.service || QueryServiceName;
        this.rpc = rpc;
        this.Resource = this.Resource.bind(this);
        this.CollectionResources = this.CollectionResources.bind(this);
        this.AllResourceVersions = this.AllResourceVersions.bind(this);
    }
    Resource(request) {
        const data = QueryGetResourceRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "Resource", data);
        return promise.then((data) => QueryResourceResponse.decode(_m0.Reader.create(data)));
    }
    CollectionResources(request) {
        const data = QueryGetCollectionResourcesRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "CollectionResources", data);
        return promise.then((data) => QueryCollectionResourcesResponse.decode(_m0.Reader.create(data)));
    }
    AllResourceVersions(request) {
        const data = QueryGetAllResourceVersionsRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "AllResourceVersions", data);
        return promise.then((data) => QueryGetAllResourceVersionsResponse.decode(_m0.Reader.create(data)));
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