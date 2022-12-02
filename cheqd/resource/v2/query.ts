/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";
import { Metadata, ResourceWithMetadata } from "./resource";

export const protobufPackage = "cheqd.resource.v2";

export interface QueryGetResourceRequest {
  $type: "cheqd.resource.v2.QueryGetResourceRequest";
  collectionId: string;
  id: string;
}

export interface QueryGetResourceResponse {
  $type: "cheqd.resource.v2.QueryGetResourceResponse";
  resource: ResourceWithMetadata | undefined;
}

export interface QueryGetResourceMetadataRequest {
  $type: "cheqd.resource.v2.QueryGetResourceMetadataRequest";
  collectionId: string;
  id: string;
}

export interface QueryGetResourceMetadataResponse {
  $type: "cheqd.resource.v2.QueryGetResourceMetadataResponse";
  resource: Metadata | undefined;
}

export interface QueryGetCollectionResourcesRequest {
  $type: "cheqd.resource.v2.QueryGetCollectionResourcesRequest";
  collectionId: string;
}

export interface QueryGetCollectionResourcesResponse {
  $type: "cheqd.resource.v2.QueryGetCollectionResourcesResponse";
  resources: Metadata[];
}

function createBaseQueryGetResourceRequest(): QueryGetResourceRequest {
  return { $type: "cheqd.resource.v2.QueryGetResourceRequest", collectionId: "", id: "" };
}

export const QueryGetResourceRequest = {
  $type: "cheqd.resource.v2.QueryGetResourceRequest" as const,

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

  fromJSON(object: any): QueryGetResourceRequest {
    return {
      $type: QueryGetResourceRequest.$type,
      collectionId: isSet(object.collectionId) ? String(object.collectionId) : "",
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: QueryGetResourceRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined && (obj.collectionId = message.collectionId);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetResourceRequest>, I>>(object: I): QueryGetResourceRequest {
    const message = createBaseQueryGetResourceRequest();
    message.collectionId = object.collectionId ?? "";
    message.id = object.id ?? "";
    return message;
  },
};

messageTypeRegistry.set(QueryGetResourceRequest.$type, QueryGetResourceRequest);

function createBaseQueryGetResourceResponse(): QueryGetResourceResponse {
  return { $type: "cheqd.resource.v2.QueryGetResourceResponse", resource: undefined };
}

export const QueryGetResourceResponse = {
  $type: "cheqd.resource.v2.QueryGetResourceResponse" as const,

  encode(message: QueryGetResourceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resource !== undefined) {
      ResourceWithMetadata.encode(message.resource, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetResourceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetResourceResponse();
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

  fromJSON(object: any): QueryGetResourceResponse {
    return {
      $type: QueryGetResourceResponse.$type,
      resource: isSet(object.resource) ? ResourceWithMetadata.fromJSON(object.resource) : undefined,
    };
  },

  toJSON(message: QueryGetResourceResponse): unknown {
    const obj: any = {};
    message.resource !== undefined &&
      (obj.resource = message.resource ? ResourceWithMetadata.toJSON(message.resource) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetResourceResponse>, I>>(object: I): QueryGetResourceResponse {
    const message = createBaseQueryGetResourceResponse();
    message.resource = (object.resource !== undefined && object.resource !== null)
      ? ResourceWithMetadata.fromPartial(object.resource)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryGetResourceResponse.$type, QueryGetResourceResponse);

function createBaseQueryGetResourceMetadataRequest(): QueryGetResourceMetadataRequest {
  return { $type: "cheqd.resource.v2.QueryGetResourceMetadataRequest", collectionId: "", id: "" };
}

export const QueryGetResourceMetadataRequest = {
  $type: "cheqd.resource.v2.QueryGetResourceMetadataRequest" as const,

  encode(message: QueryGetResourceMetadataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetResourceMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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

  fromJSON(object: any): QueryGetResourceMetadataRequest {
    return {
      $type: QueryGetResourceMetadataRequest.$type,
      collectionId: isSet(object.collectionId) ? String(object.collectionId) : "",
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: QueryGetResourceMetadataRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined && (obj.collectionId = message.collectionId);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetResourceMetadataRequest>, I>>(
    object: I,
  ): QueryGetResourceMetadataRequest {
    const message = createBaseQueryGetResourceMetadataRequest();
    message.collectionId = object.collectionId ?? "";
    message.id = object.id ?? "";
    return message;
  },
};

messageTypeRegistry.set(QueryGetResourceMetadataRequest.$type, QueryGetResourceMetadataRequest);

function createBaseQueryGetResourceMetadataResponse(): QueryGetResourceMetadataResponse {
  return { $type: "cheqd.resource.v2.QueryGetResourceMetadataResponse", resource: undefined };
}

export const QueryGetResourceMetadataResponse = {
  $type: "cheqd.resource.v2.QueryGetResourceMetadataResponse" as const,

  encode(message: QueryGetResourceMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resource !== undefined) {
      Metadata.encode(message.resource, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetResourceMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetResourceMetadataResponse();
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

  fromJSON(object: any): QueryGetResourceMetadataResponse {
    return {
      $type: QueryGetResourceMetadataResponse.$type,
      resource: isSet(object.resource) ? Metadata.fromJSON(object.resource) : undefined,
    };
  },

  toJSON(message: QueryGetResourceMetadataResponse): unknown {
    const obj: any = {};
    message.resource !== undefined && (obj.resource = message.resource ? Metadata.toJSON(message.resource) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetResourceMetadataResponse>, I>>(
    object: I,
  ): QueryGetResourceMetadataResponse {
    const message = createBaseQueryGetResourceMetadataResponse();
    message.resource = (object.resource !== undefined && object.resource !== null)
      ? Metadata.fromPartial(object.resource)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryGetResourceMetadataResponse.$type, QueryGetResourceMetadataResponse);

function createBaseQueryGetCollectionResourcesRequest(): QueryGetCollectionResourcesRequest {
  return { $type: "cheqd.resource.v2.QueryGetCollectionResourcesRequest", collectionId: "" };
}

export const QueryGetCollectionResourcesRequest = {
  $type: "cheqd.resource.v2.QueryGetCollectionResourcesRequest" as const,

  encode(message: QueryGetCollectionResourcesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCollectionResourcesRequest {
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

  fromJSON(object: any): QueryGetCollectionResourcesRequest {
    return {
      $type: QueryGetCollectionResourcesRequest.$type,
      collectionId: isSet(object.collectionId) ? String(object.collectionId) : "",
    };
  },

  toJSON(message: QueryGetCollectionResourcesRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined && (obj.collectionId = message.collectionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetCollectionResourcesRequest>, I>>(
    object: I,
  ): QueryGetCollectionResourcesRequest {
    const message = createBaseQueryGetCollectionResourcesRequest();
    message.collectionId = object.collectionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(QueryGetCollectionResourcesRequest.$type, QueryGetCollectionResourcesRequest);

function createBaseQueryGetCollectionResourcesResponse(): QueryGetCollectionResourcesResponse {
  return { $type: "cheqd.resource.v2.QueryGetCollectionResourcesResponse", resources: [] };
}

export const QueryGetCollectionResourcesResponse = {
  $type: "cheqd.resource.v2.QueryGetCollectionResourcesResponse" as const,

  encode(message: QueryGetCollectionResourcesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.resources) {
      Metadata.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCollectionResourcesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetCollectionResourcesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resources.push(Metadata.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCollectionResourcesResponse {
    return {
      $type: QueryGetCollectionResourcesResponse.$type,
      resources: Array.isArray(object?.resources) ? object.resources.map((e: any) => Metadata.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryGetCollectionResourcesResponse): unknown {
    const obj: any = {};
    if (message.resources) {
      obj.resources = message.resources.map((e) => e ? Metadata.toJSON(e) : undefined);
    } else {
      obj.resources = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetCollectionResourcesResponse>, I>>(
    object: I,
  ): QueryGetCollectionResourcesResponse {
    const message = createBaseQueryGetCollectionResourcesResponse();
    message.resources = object.resources?.map((e) => Metadata.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(QueryGetCollectionResourcesResponse.$type, QueryGetCollectionResourcesResponse);

export interface Query {
  Resource(request: QueryGetResourceRequest): Promise<QueryGetResourceResponse>;
  ResourceMetadata(request: QueryGetResourceMetadataRequest): Promise<QueryGetResourceMetadataResponse>;
  CollectionResources(request: QueryGetCollectionResourcesRequest): Promise<QueryGetCollectionResourcesResponse>;
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
  Resource(request: QueryGetResourceRequest): Promise<QueryGetResourceResponse> {
    const data = QueryGetResourceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Resource", data);
    return promise.then((data) => QueryGetResourceResponse.decode(new _m0.Reader(data)));
  }

  ResourceMetadata(request: QueryGetResourceMetadataRequest): Promise<QueryGetResourceMetadataResponse> {
    const data = QueryGetResourceMetadataRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "ResourceMetadata", data);
    return promise.then((data) => QueryGetResourceMetadataResponse.decode(new _m0.Reader(data)));
  }

  CollectionResources(request: QueryGetCollectionResourcesRequest): Promise<QueryGetCollectionResourcesResponse> {
    const data = QueryGetCollectionResourcesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CollectionResources", data);
    return promise.then((data) => QueryGetCollectionResourcesResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
