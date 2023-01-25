/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Metadata, ResourceWithMetadata } from "./resource";

/** QueryResourceRequest is the request type for the Query/Resource RPC method */
export interface QueryResourceRequest {
  /**
   * collection_id is an identifier of the DidDocument the resource belongs to.
   * Format: <unique-identifier>
   *
   * Examples:
   * - c82f2b02-bdab-4dd7-b833-3e143745d612
   * - wGHEXrZvJxR8vw5P3UWH1j
   */
  collectionId: string;
  /**
   * id is a unique id of the resource.
   * Format: <uuid>
   */
  id: string;
}

/** QueryResourceResponse is the response type for the Query/Resource RPC method */
export interface QueryResourceResponse {
  /**
   * Successful resolution of the resource returns the following:
   * - resource is the requested resource
   * - metadata is the resource metadata associated with the requested resource
   */
  resource: ResourceWithMetadata | undefined;
}

/** QueryResourceMetadataRequest is the request type for the Query/ResourceMetadata RPC method */
export interface QueryResourceMetadataRequest {
  /**
   * collection_id is an identifier of the DidDocument the resource belongs to.
   * Format: <unique-identifier>
   *
   * Examples:
   * - c82f2b02-bdab-4dd7-b833-3e143745d612
   * - wGHEXrZvJxR8vw5P3UWH1j
   */
  collectionId: string;
  /**
   * id is a unique id of the resource.
   * Format: <uuid>
   */
  id: string;
}

/** QueryResourceMetadataResponse is the response type for the Query/ResourceMetadata RPC method */
export interface QueryResourceMetadataResponse {
  /** resource is the requested resource metadata */
  resource: Metadata | undefined;
}

/** QueryCollectionResourcesRequest is the request type for the Query/CollectionResources RPC method */
export interface QueryCollectionResourcesRequest {
  /**
   * collection_id is an identifier of the DidDocument the resource belongs to.
   * Format: <unique-identifier>
   *
   * Examples:
   * - c82f2b02-bdab-4dd7-b833-3e143745d612
   * - wGHEXrZvJxR8vw5P3UWH1j
   */
  collectionId: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/** QueryCollectionResourcesResponse is the response type for the Query/CollectionResources RPC method */
export interface QueryCollectionResourcesResponse {
  /** resources is the requested collection of resource metadata */
  resources: Metadata[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

function createBaseQueryResourceRequest(): QueryResourceRequest {
  return { collectionId: "", id: "" };
}

export const QueryResourceRequest = {
  encode(message: QueryResourceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResourceRequest {
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

  fromJSON(object: any): QueryResourceRequest {
    return {
      collectionId: isSet(object.collectionId) ? String(object.collectionId) : "",
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: QueryResourceRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined && (obj.collectionId = message.collectionId);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryResourceRequest>, I>>(base?: I): QueryResourceRequest {
    return QueryResourceRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryResourceRequest>, I>>(object: I): QueryResourceRequest {
    const message = createBaseQueryResourceRequest();
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
      ResourceWithMetadata.encode(message.resource, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResourceResponse {
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

  fromJSON(object: any): QueryResourceResponse {
    return { resource: isSet(object.resource) ? ResourceWithMetadata.fromJSON(object.resource) : undefined };
  },

  toJSON(message: QueryResourceResponse): unknown {
    const obj: any = {};
    message.resource !== undefined &&
      (obj.resource = message.resource ? ResourceWithMetadata.toJSON(message.resource) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryResourceResponse>, I>>(base?: I): QueryResourceResponse {
    return QueryResourceResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryResourceResponse>, I>>(object: I): QueryResourceResponse {
    const message = createBaseQueryResourceResponse();
    message.resource = (object.resource !== undefined && object.resource !== null)
      ? ResourceWithMetadata.fromPartial(object.resource)
      : undefined;
    return message;
  },
};

function createBaseQueryResourceMetadataRequest(): QueryResourceMetadataRequest {
  return { collectionId: "", id: "" };
}

export const QueryResourceMetadataRequest = {
  encode(message: QueryResourceMetadataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResourceMetadataRequest {
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

  fromJSON(object: any): QueryResourceMetadataRequest {
    return {
      collectionId: isSet(object.collectionId) ? String(object.collectionId) : "",
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: QueryResourceMetadataRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined && (obj.collectionId = message.collectionId);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryResourceMetadataRequest>, I>>(base?: I): QueryResourceMetadataRequest {
    return QueryResourceMetadataRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryResourceMetadataRequest>, I>>(object: I): QueryResourceMetadataRequest {
    const message = createBaseQueryResourceMetadataRequest();
    message.collectionId = object.collectionId ?? "";
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseQueryResourceMetadataResponse(): QueryResourceMetadataResponse {
  return { resource: undefined };
}

export const QueryResourceMetadataResponse = {
  encode(message: QueryResourceMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resource !== undefined) {
      Metadata.encode(message.resource, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryResourceMetadataResponse {
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

  fromJSON(object: any): QueryResourceMetadataResponse {
    return { resource: isSet(object.resource) ? Metadata.fromJSON(object.resource) : undefined };
  },

  toJSON(message: QueryResourceMetadataResponse): unknown {
    const obj: any = {};
    message.resource !== undefined && (obj.resource = message.resource ? Metadata.toJSON(message.resource) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryResourceMetadataResponse>, I>>(base?: I): QueryResourceMetadataResponse {
    return QueryResourceMetadataResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryResourceMetadataResponse>, I>>(
    object: I,
  ): QueryResourceMetadataResponse {
    const message = createBaseQueryResourceMetadataResponse();
    message.resource = (object.resource !== undefined && object.resource !== null)
      ? Metadata.fromPartial(object.resource)
      : undefined;
    return message;
  },
};

function createBaseQueryCollectionResourcesRequest(): QueryCollectionResourcesRequest {
  return { collectionId: "", pagination: undefined };
}

export const QueryCollectionResourcesRequest = {
  encode(message: QueryCollectionResourcesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionResourcesRequest {
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

  fromJSON(object: any): QueryCollectionResourcesRequest {
    return {
      collectionId: isSet(object.collectionId) ? String(object.collectionId) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryCollectionResourcesRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined && (obj.collectionId = message.collectionId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryCollectionResourcesRequest>, I>>(base?: I): QueryCollectionResourcesRequest {
    return QueryCollectionResourcesRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryCollectionResourcesRequest>, I>>(
    object: I,
  ): QueryCollectionResourcesRequest {
    const message = createBaseQueryCollectionResourcesRequest();
    message.collectionId = object.collectionId ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryCollectionResourcesResponse(): QueryCollectionResourcesResponse {
  return { resources: [], pagination: undefined };
}

export const QueryCollectionResourcesResponse = {
  encode(message: QueryCollectionResourcesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.resources) {
      Metadata.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionResourcesResponse {
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

  fromJSON(object: any): QueryCollectionResourcesResponse {
    return {
      resources: Array.isArray(object?.resources) ? object.resources.map((e: any) => Metadata.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryCollectionResourcesResponse): unknown {
    const obj: any = {};
    if (message.resources) {
      obj.resources = message.resources.map((e) => e ? Metadata.toJSON(e) : undefined);
    } else {
      obj.resources = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
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
    message.resources = object.resources?.map((e) => Metadata.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service for the resource module */
export interface Query {
  /** Fetch data/payload for a specific resource (without metadata) */
  Resource(request: QueryResourceRequest): Promise<QueryResourceResponse>;
  /** Fetch only metadata for a specific resource */
  ResourceMetadata(request: QueryResourceMetadataRequest): Promise<QueryResourceMetadataResponse>;
  /** Fetch metadata for all resources in a collection */
  CollectionResources(request: QueryCollectionResourcesRequest): Promise<QueryCollectionResourcesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "cheqd.resource.v2.Query";
    this.rpc = rpc;
    this.Resource = this.Resource.bind(this);
    this.ResourceMetadata = this.ResourceMetadata.bind(this);
    this.CollectionResources = this.CollectionResources.bind(this);
  }
  Resource(request: QueryResourceRequest): Promise<QueryResourceResponse> {
    const data = QueryResourceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Resource", data);
    return promise.then((data) => QueryResourceResponse.decode(new _m0.Reader(data)));
  }

  ResourceMetadata(request: QueryResourceMetadataRequest): Promise<QueryResourceMetadataResponse> {
    const data = QueryResourceMetadataRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ResourceMetadata", data);
    return promise.then((data) => QueryResourceMetadataResponse.decode(new _m0.Reader(data)));
  }

  CollectionResources(request: QueryCollectionResourcesRequest): Promise<QueryCollectionResourcesResponse> {
    const data = QueryCollectionResourcesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CollectionResources", data);
    return promise.then((data) => QueryCollectionResourcesResponse.decode(new _m0.Reader(data)));
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
