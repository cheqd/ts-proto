/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import { Resource, ResourceHeader } from "./resource.js";

export interface QueryGetResourceRequest {
  collectionId: string;
  id: string;
}

export interface QueryResourceResponse {
  resource: Resource | undefined;
}

export interface QueryGetCollectionResourcesRequest {
  collectionId: string;
}

export interface QueryCollectionResourcesResponse {
  resources: ResourceHeader[];
}

export interface QueryGetAllResourceVersionsRequest {
  collectionId: string;
  name: string;
  resourceType: string;
}

export interface QueryGetAllResourceVersionsResponse {
  resources: ResourceHeader[];
}

function createBaseQueryGetResourceRequest(): QueryGetResourceRequest {
  return { collectionId: "", id: "" };
}

export const QueryGetResourceRequest = {
  encode(message: QueryGetResourceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetResourceRequest {
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

  fromJSON(object: any): QueryGetResourceRequest {
    return {
      collectionId: isSet(object.collectionId) ? String(object.collectionId) : "",
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: QueryGetResourceRequest): unknown {
    const obj: any = {};
    if (message.collectionId !== "") {
      obj.collectionId = message.collectionId;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetResourceRequest>, I>>(base?: I): QueryGetResourceRequest {
    return QueryGetResourceRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetResourceRequest>, I>>(object: I): QueryGetResourceRequest {
    const message = createBaseQueryGetResourceRequest();
    message.collectionId = object.collectionId ?? "";
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseQueryResourceResponse(): QueryResourceResponse {
  return { resource: undefined };
}

export const QueryResourceResponse = {
  encode(message: QueryResourceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resource !== undefined) {
      Resource.encode(message.resource, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResourceResponse {
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

  fromJSON(object: any): QueryResourceResponse {
    return { resource: isSet(object.resource) ? Resource.fromJSON(object.resource) : undefined };
  },

  toJSON(message: QueryResourceResponse): unknown {
    const obj: any = {};
    if (message.resource !== undefined) {
      obj.resource = Resource.toJSON(message.resource);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryResourceResponse>, I>>(base?: I): QueryResourceResponse {
    return QueryResourceResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryResourceResponse>, I>>(object: I): QueryResourceResponse {
    const message = createBaseQueryResourceResponse();
    message.resource = (object.resource !== undefined && object.resource !== null)
      ? Resource.fromPartial(object.resource)
      : undefined;
    return message;
  },
};

function createBaseQueryGetCollectionResourcesRequest(): QueryGetCollectionResourcesRequest {
  return { collectionId: "" };
}

export const QueryGetCollectionResourcesRequest = {
  encode(message: QueryGetCollectionResourcesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCollectionResourcesRequest {
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

  fromJSON(object: any): QueryGetCollectionResourcesRequest {
    return { collectionId: isSet(object.collectionId) ? String(object.collectionId) : "" };
  },

  toJSON(message: QueryGetCollectionResourcesRequest): unknown {
    const obj: any = {};
    if (message.collectionId !== "") {
      obj.collectionId = message.collectionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetCollectionResourcesRequest>, I>>(
    base?: I,
  ): QueryGetCollectionResourcesRequest {
    return QueryGetCollectionResourcesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetCollectionResourcesRequest>, I>>(
    object: I,
  ): QueryGetCollectionResourcesRequest {
    const message = createBaseQueryGetCollectionResourcesRequest();
    message.collectionId = object.collectionId ?? "";
    return message;
  },
};

function createBaseQueryCollectionResourcesResponse(): QueryCollectionResourcesResponse {
  return { resources: [] };
}

export const QueryCollectionResourcesResponse = {
  encode(message: QueryCollectionResourcesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.resources) {
      ResourceHeader.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionResourcesResponse {
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

  fromJSON(object: any): QueryCollectionResourcesResponse {
    return {
      resources: Array.isArray(object?.resources) ? object.resources.map((e: any) => ResourceHeader.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryCollectionResourcesResponse): unknown {
    const obj: any = {};
    if (message.resources?.length) {
      obj.resources = message.resources.map((e) => ResourceHeader.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryCollectionResourcesResponse>, I>>(
    base?: I,
  ): QueryCollectionResourcesResponse {
    return QueryCollectionResourcesResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryCollectionResourcesResponse>, I>>(
    object: I,
  ): QueryCollectionResourcesResponse {
    const message = createBaseQueryCollectionResourcesResponse();
    message.resources = object.resources?.map((e) => ResourceHeader.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryGetAllResourceVersionsRequest(): QueryGetAllResourceVersionsRequest {
  return { collectionId: "", name: "", resourceType: "" };
}

export const QueryGetAllResourceVersionsRequest = {
  encode(message: QueryGetAllResourceVersionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllResourceVersionsRequest {
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

  fromJSON(object: any): QueryGetAllResourceVersionsRequest {
    return {
      collectionId: isSet(object.collectionId) ? String(object.collectionId) : "",
      name: isSet(object.name) ? String(object.name) : "",
      resourceType: isSet(object.resourceType) ? String(object.resourceType) : "",
    };
  },

  toJSON(message: QueryGetAllResourceVersionsRequest): unknown {
    const obj: any = {};
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

  create<I extends Exact<DeepPartial<QueryGetAllResourceVersionsRequest>, I>>(
    base?: I,
  ): QueryGetAllResourceVersionsRequest {
    return QueryGetAllResourceVersionsRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetAllResourceVersionsRequest>, I>>(
    object: I,
  ): QueryGetAllResourceVersionsRequest {
    const message = createBaseQueryGetAllResourceVersionsRequest();
    message.collectionId = object.collectionId ?? "";
    message.name = object.name ?? "";
    message.resourceType = object.resourceType ?? "";
    return message;
  },
};

function createBaseQueryGetAllResourceVersionsResponse(): QueryGetAllResourceVersionsResponse {
  return { resources: [] };
}

export const QueryGetAllResourceVersionsResponse = {
  encode(message: QueryGetAllResourceVersionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.resources) {
      ResourceHeader.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllResourceVersionsResponse {
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

  fromJSON(object: any): QueryGetAllResourceVersionsResponse {
    return {
      resources: Array.isArray(object?.resources) ? object.resources.map((e: any) => ResourceHeader.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryGetAllResourceVersionsResponse): unknown {
    const obj: any = {};
    if (message.resources?.length) {
      obj.resources = message.resources.map((e) => ResourceHeader.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetAllResourceVersionsResponse>, I>>(
    base?: I,
  ): QueryGetAllResourceVersionsResponse {
    return QueryGetAllResourceVersionsResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetAllResourceVersionsResponse>, I>>(
    object: I,
  ): QueryGetAllResourceVersionsResponse {
    const message = createBaseQueryGetAllResourceVersionsResponse();
    message.resources = object.resources?.map((e) => ResourceHeader.fromPartial(e)) || [];
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  Resource(request: QueryGetResourceRequest): Promise<QueryResourceResponse>;
  CollectionResources(request: QueryGetCollectionResourcesRequest): Promise<QueryCollectionResourcesResponse>;
  AllResourceVersions(request: QueryGetAllResourceVersionsRequest): Promise<QueryGetAllResourceVersionsResponse>;
}

export const QueryServiceName = "cheqdid.cheqdnode.resource.v1.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.Resource = this.Resource.bind(this);
    this.CollectionResources = this.CollectionResources.bind(this);
    this.AllResourceVersions = this.AllResourceVersions.bind(this);
  }
  Resource(request: QueryGetResourceRequest): Promise<QueryResourceResponse> {
    const data = QueryGetResourceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Resource", data);
    return promise.then((data) => QueryResourceResponse.decode(_m0.Reader.create(data)));
  }

  CollectionResources(request: QueryGetCollectionResourcesRequest): Promise<QueryCollectionResourcesResponse> {
    const data = QueryGetCollectionResourcesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CollectionResources", data);
    return promise.then((data) => QueryCollectionResourcesResponse.decode(_m0.Reader.create(data)));
  }

  AllResourceVersions(request: QueryGetAllResourceVersionsRequest): Promise<QueryGetAllResourceVersionsResponse> {
    const data = QueryGetAllResourceVersionsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllResourceVersions", data);
    return promise.then((data) => QueryGetAllResourceVersionsResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
