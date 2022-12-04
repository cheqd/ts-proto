/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { DidDocWithMetadata, Metadata } from "./diddoc";

export interface QueryGetDidDocRequest {
  id: string;
}

export interface QueryGetDidDocResponse {
  value: DidDocWithMetadata | undefined;
}

export interface QueryGetDidDocVersionRequest {
  id: string;
  version: string;
}

export interface QueryGetDidDocVersionResponse {
  value: DidDocWithMetadata | undefined;
}

export interface QueryGetAllDidDocVersionsMetadataRequest {
  id: string;
}

export interface QueryGetAllDidDocVersionsMetadataResponse {
  versions: Metadata[];
}

function createBaseQueryGetDidDocRequest(): QueryGetDidDocRequest {
  return { id: "" };
}

export const QueryGetDidDocRequest = {
  encode(message: QueryGetDidDocRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDidDocRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDidDocRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDidDocRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: QueryGetDidDocRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetDidDocRequest>, I>>(object: I): QueryGetDidDocRequest {
    const message = createBaseQueryGetDidDocRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseQueryGetDidDocResponse(): QueryGetDidDocResponse {
  return { value: undefined };
}

export const QueryGetDidDocResponse = {
  encode(message: QueryGetDidDocResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      DidDocWithMetadata.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDidDocResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDidDocResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = DidDocWithMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDidDocResponse {
    return { value: isSet(object.value) ? DidDocWithMetadata.fromJSON(object.value) : undefined };
  },

  toJSON(message: QueryGetDidDocResponse): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value ? DidDocWithMetadata.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetDidDocResponse>, I>>(object: I): QueryGetDidDocResponse {
    const message = createBaseQueryGetDidDocResponse();
    message.value = (object.value !== undefined && object.value !== null)
      ? DidDocWithMetadata.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseQueryGetDidDocVersionRequest(): QueryGetDidDocVersionRequest {
  return { id: "", version: "" };
}

export const QueryGetDidDocVersionRequest = {
  encode(message: QueryGetDidDocVersionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDidDocVersionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDidDocVersionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.version = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDidDocVersionRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      version: isSet(object.version) ? String(object.version) : "",
    };
  },

  toJSON(message: QueryGetDidDocVersionRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.version !== undefined && (obj.version = message.version);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetDidDocVersionRequest>, I>>(object: I): QueryGetDidDocVersionRequest {
    const message = createBaseQueryGetDidDocVersionRequest();
    message.id = object.id ?? "";
    message.version = object.version ?? "";
    return message;
  },
};

function createBaseQueryGetDidDocVersionResponse(): QueryGetDidDocVersionResponse {
  return { value: undefined };
}

export const QueryGetDidDocVersionResponse = {
  encode(message: QueryGetDidDocVersionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      DidDocWithMetadata.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDidDocVersionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDidDocVersionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = DidDocWithMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDidDocVersionResponse {
    return { value: isSet(object.value) ? DidDocWithMetadata.fromJSON(object.value) : undefined };
  },

  toJSON(message: QueryGetDidDocVersionResponse): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value ? DidDocWithMetadata.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetDidDocVersionResponse>, I>>(
    object: I,
  ): QueryGetDidDocVersionResponse {
    const message = createBaseQueryGetDidDocVersionResponse();
    message.value = (object.value !== undefined && object.value !== null)
      ? DidDocWithMetadata.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAllDidDocVersionsMetadataRequest(): QueryGetAllDidDocVersionsMetadataRequest {
  return { id: "" };
}

export const QueryGetAllDidDocVersionsMetadataRequest = {
  encode(message: QueryGetAllDidDocVersionsMetadataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllDidDocVersionsMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllDidDocVersionsMetadataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAllDidDocVersionsMetadataRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: QueryGetAllDidDocVersionsMetadataRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetAllDidDocVersionsMetadataRequest>, I>>(
    object: I,
  ): QueryGetAllDidDocVersionsMetadataRequest {
    const message = createBaseQueryGetAllDidDocVersionsMetadataRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseQueryGetAllDidDocVersionsMetadataResponse(): QueryGetAllDidDocVersionsMetadataResponse {
  return { versions: [] };
}

export const QueryGetAllDidDocVersionsMetadataResponse = {
  encode(message: QueryGetAllDidDocVersionsMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.versions) {
      Metadata.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllDidDocVersionsMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAllDidDocVersionsMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.versions.push(Metadata.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAllDidDocVersionsMetadataResponse {
    return { versions: Array.isArray(object?.versions) ? object.versions.map((e: any) => Metadata.fromJSON(e)) : [] };
  },

  toJSON(message: QueryGetAllDidDocVersionsMetadataResponse): unknown {
    const obj: any = {};
    if (message.versions) {
      obj.versions = message.versions.map((e) => e ? Metadata.toJSON(e) : undefined);
    } else {
      obj.versions = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetAllDidDocVersionsMetadataResponse>, I>>(
    object: I,
  ): QueryGetAllDidDocVersionsMetadataResponse {
    const message = createBaseQueryGetAllDidDocVersionsMetadataResponse();
    message.versions = object.versions?.map((e) => Metadata.fromPartial(e)) || [];
    return message;
  },
};

export interface Query {
  DidDoc(request: QueryGetDidDocRequest): Promise<QueryGetDidDocResponse>;
  DidDocVersion(request: QueryGetDidDocVersionRequest): Promise<QueryGetDidDocVersionResponse>;
  AllDidDocVersionsMetadata(
    request: QueryGetAllDidDocVersionsMetadataRequest,
  ): Promise<QueryGetAllDidDocVersionsMetadataResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "cheqd.did.v2.Query";
    this.rpc = rpc;
    this.DidDoc = this.DidDoc.bind(this);
    this.DidDocVersion = this.DidDocVersion.bind(this);
    this.AllDidDocVersionsMetadata = this.AllDidDocVersionsMetadata.bind(this);
  }
  DidDoc(request: QueryGetDidDocRequest): Promise<QueryGetDidDocResponse> {
    const data = QueryGetDidDocRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DidDoc", data);
    return promise.then((data) => QueryGetDidDocResponse.decode(new _m0.Reader(data)));
  }

  DidDocVersion(request: QueryGetDidDocVersionRequest): Promise<QueryGetDidDocVersionResponse> {
    const data = QueryGetDidDocVersionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DidDocVersion", data);
    return promise.then((data) => QueryGetDidDocVersionResponse.decode(new _m0.Reader(data)));
  }

  AllDidDocVersionsMetadata(
    request: QueryGetAllDidDocVersionsMetadataRequest,
  ): Promise<QueryGetAllDidDocVersionsMetadataResponse> {
    const data = QueryGetAllDidDocVersionsMetadataRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllDidDocVersionsMetadata", data);
    return promise.then((data) => QueryGetAllDidDocVersionsMetadataResponse.decode(new _m0.Reader(data)));
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
