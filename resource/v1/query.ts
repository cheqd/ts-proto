/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Resource, ResourceHeader } from "./resource";

export const protobufPackage = "cheqdid.cheqdnode.resource.v1";

export interface QueryGetResourceRequest {
  collectionId: string;
  id: string;
}

export interface QueryGetResourceResponse {
  resource?: Resource;
}

export interface QueryGetCollectionResourcesRequest {
  collectionId: string;
}

export interface QueryGetCollectionResourcesResponse {
  resources: ResourceHeader[];
}

export interface QueryGetAllResourceVersionsRequest {
  collectionId: string;
  name: string;
}

export interface QueryGetAllResourceVersionsResponse {
  resources: ResourceHeader[];
}

const baseQueryGetResourceRequest: object = { collectionId: "", id: "" };

export const QueryGetResourceRequest = {
  encode(
    message: QueryGetResourceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetResourceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetResourceRequest,
    } as QueryGetResourceRequest;
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
    const message = {
      ...baseQueryGetResourceRequest,
    } as QueryGetResourceRequest;
    if (object.collectionId !== undefined && object.collectionId !== null) {
      message.collectionId = String(object.collectionId);
    } else {
      message.collectionId = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: QueryGetResourceRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetResourceRequest>
  ): QueryGetResourceRequest {
    const message = {
      ...baseQueryGetResourceRequest,
    } as QueryGetResourceRequest;
    message.collectionId = object.collectionId ?? "";
    message.id = object.id ?? "";
    return message;
  },
};

const baseQueryGetResourceResponse: object = {};

export const QueryGetResourceResponse = {
  encode(
    message: QueryGetResourceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.resource !== undefined) {
      Resource.encode(message.resource, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetResourceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetResourceResponse,
    } as QueryGetResourceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resource = Resource.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetResourceResponse {
    const message = {
      ...baseQueryGetResourceResponse,
    } as QueryGetResourceResponse;
    if (object.resource !== undefined && object.resource !== null) {
      message.resource = Resource.fromJSON(object.resource);
    } else {
      message.resource = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetResourceResponse): unknown {
    const obj: any = {};
    message.resource !== undefined &&
      (obj.resource = message.resource
        ? Resource.toJSON(message.resource)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetResourceResponse>
  ): QueryGetResourceResponse {
    const message = {
      ...baseQueryGetResourceResponse,
    } as QueryGetResourceResponse;
    if (object.resource !== undefined && object.resource !== null) {
      message.resource = Resource.fromPartial(object.resource);
    } else {
      message.resource = undefined;
    }
    return message;
  },
};

const baseQueryGetCollectionResourcesRequest: object = { collectionId: "" };

export const QueryGetCollectionResourcesRequest = {
  encode(
    message: QueryGetCollectionResourcesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetCollectionResourcesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCollectionResourcesRequest,
    } as QueryGetCollectionResourcesRequest;
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
    const message = {
      ...baseQueryGetCollectionResourcesRequest,
    } as QueryGetCollectionResourcesRequest;
    if (object.collectionId !== undefined && object.collectionId !== null) {
      message.collectionId = String(object.collectionId);
    } else {
      message.collectionId = "";
    }
    return message;
  },

  toJSON(message: QueryGetCollectionResourcesRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCollectionResourcesRequest>
  ): QueryGetCollectionResourcesRequest {
    const message = {
      ...baseQueryGetCollectionResourcesRequest,
    } as QueryGetCollectionResourcesRequest;
    message.collectionId = object.collectionId ?? "";
    return message;
  },
};

const baseQueryGetCollectionResourcesResponse: object = {};

export const QueryGetCollectionResourcesResponse = {
  encode(
    message: QueryGetCollectionResourcesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.resources) {
      ResourceHeader.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetCollectionResourcesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCollectionResourcesResponse,
    } as QueryGetCollectionResourcesResponse;
    message.resources = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resources.push(
            ResourceHeader.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCollectionResourcesResponse {
    const message = {
      ...baseQueryGetCollectionResourcesResponse,
    } as QueryGetCollectionResourcesResponse;
    message.resources = [];
    if (object.resources !== undefined && object.resources !== null) {
      for (const e of object.resources) {
        message.resources.push(ResourceHeader.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryGetCollectionResourcesResponse): unknown {
    const obj: any = {};
    if (message.resources) {
      obj.resources = message.resources.map((e) =>
        e ? ResourceHeader.toJSON(e) : undefined
      );
    } else {
      obj.resources = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCollectionResourcesResponse>
  ): QueryGetCollectionResourcesResponse {
    const message = {
      ...baseQueryGetCollectionResourcesResponse,
    } as QueryGetCollectionResourcesResponse;
    message.resources = [];
    if (object.resources !== undefined && object.resources !== null) {
      for (const e of object.resources) {
        message.resources.push(ResourceHeader.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryGetAllResourceVersionsRequest: object = {
  collectionId: "",
  name: "",
};

export const QueryGetAllResourceVersionsRequest = {
  encode(
    message: QueryGetAllResourceVersionsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetAllResourceVersionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetAllResourceVersionsRequest,
    } as QueryGetAllResourceVersionsRequest;
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

  fromJSON(object: any): QueryGetAllResourceVersionsRequest {
    const message = {
      ...baseQueryGetAllResourceVersionsRequest,
    } as QueryGetAllResourceVersionsRequest;
    if (object.collectionId !== undefined && object.collectionId !== null) {
      message.collectionId = String(object.collectionId);
    } else {
      message.collectionId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: QueryGetAllResourceVersionsRequest): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAllResourceVersionsRequest>
  ): QueryGetAllResourceVersionsRequest {
    const message = {
      ...baseQueryGetAllResourceVersionsRequest,
    } as QueryGetAllResourceVersionsRequest;
    message.collectionId = object.collectionId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

const baseQueryGetAllResourceVersionsResponse: object = {};

export const QueryGetAllResourceVersionsResponse = {
  encode(
    message: QueryGetAllResourceVersionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.resources) {
      ResourceHeader.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryGetAllResourceVersionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetAllResourceVersionsResponse,
    } as QueryGetAllResourceVersionsResponse;
    message.resources = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resources.push(
            ResourceHeader.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAllResourceVersionsResponse {
    const message = {
      ...baseQueryGetAllResourceVersionsResponse,
    } as QueryGetAllResourceVersionsResponse;
    message.resources = [];
    if (object.resources !== undefined && object.resources !== null) {
      for (const e of object.resources) {
        message.resources.push(ResourceHeader.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryGetAllResourceVersionsResponse): unknown {
    const obj: any = {};
    if (message.resources) {
      obj.resources = message.resources.map((e) =>
        e ? ResourceHeader.toJSON(e) : undefined
      );
    } else {
      obj.resources = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAllResourceVersionsResponse>
  ): QueryGetAllResourceVersionsResponse {
    const message = {
      ...baseQueryGetAllResourceVersionsResponse,
    } as QueryGetAllResourceVersionsResponse;
    message.resources = [];
    if (object.resources !== undefined && object.resources !== null) {
      for (const e of object.resources) {
        message.resources.push(ResourceHeader.fromPartial(e));
      }
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  Resource(request: QueryGetResourceRequest): Promise<QueryGetResourceResponse>;
  CollectionResources(
    request: QueryGetCollectionResourcesRequest
  ): Promise<QueryGetCollectionResourcesResponse>;
  AllResourceVersions(
    request: QueryGetAllResourceVersionsRequest
  ): Promise<QueryGetAllResourceVersionsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Resource = this.Resource.bind(this);
    this.CollectionResources = this.CollectionResources.bind(this);
    this.AllResourceVersions = this.AllResourceVersions.bind(this);
  }
  Resource(
    request: QueryGetResourceRequest
  ): Promise<QueryGetResourceResponse> {
    const data = QueryGetResourceRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cheqdid.cheqdnode.resource.v1.Query",
      "Resource",
      data
    );
    return promise.then((data) =>
      QueryGetResourceResponse.decode(new _m0.Reader(data))
    );
  }

  CollectionResources(
    request: QueryGetCollectionResourcesRequest
  ): Promise<QueryGetCollectionResourcesResponse> {
    const data = QueryGetCollectionResourcesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cheqdid.cheqdnode.resource.v1.Query",
      "CollectionResources",
      data
    );
    return promise.then((data) =>
      QueryGetCollectionResourcesResponse.decode(new _m0.Reader(data))
    );
  }

  AllResourceVersions(
    request: QueryGetAllResourceVersionsRequest
  ): Promise<QueryGetAllResourceVersionsResponse> {
    const data = QueryGetAllResourceVersionsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cheqdid.cheqdnode.resource.v1.Query",
      "AllResourceVersions",
      data
    );
    return promise.then((data) =>
      QueryGetAllResourceVersionsResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
