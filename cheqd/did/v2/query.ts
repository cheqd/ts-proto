/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { DidDocWithMetadata, Metadata } from "./diddoc";

export interface QueryGetDidDocRequest {
  /** is a DID to be fetched */
  id: string;
}

export interface QueryDidDocResponse {
  value: DidDocWithMetadata | undefined;
}

export interface QueryGetDidDocVersionRequest {
  /** is a DID */
  id: string;
  /** is a unique value that maps DID Doc state at some point */
  version: string;
}

export interface QueryDidDocVersionResponse {
  value: DidDocWithMetadata | undefined;
}

export interface QueryGetAllDidDocVersionsMetadataRequest {
  /** is a DID */
  id: string;
}

export interface QueryAllDidDocVersionsMetadataResponse {
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

function createBaseQueryDidDocResponse(): QueryDidDocResponse {
  return { value: undefined };
}

export const QueryDidDocResponse = {
  encode(message: QueryDidDocResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      DidDocWithMetadata.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDidDocResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDidDocResponse();
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

  fromJSON(object: any): QueryDidDocResponse {
    return { value: isSet(object.value) ? DidDocWithMetadata.fromJSON(object.value) : undefined };
  },

  toJSON(message: QueryDidDocResponse): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value ? DidDocWithMetadata.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDidDocResponse>, I>>(object: I): QueryDidDocResponse {
    const message = createBaseQueryDidDocResponse();
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

function createBaseQueryDidDocVersionResponse(): QueryDidDocVersionResponse {
  return { value: undefined };
}

export const QueryDidDocVersionResponse = {
  encode(message: QueryDidDocVersionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      DidDocWithMetadata.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDidDocVersionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDidDocVersionResponse();
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

  fromJSON(object: any): QueryDidDocVersionResponse {
    return { value: isSet(object.value) ? DidDocWithMetadata.fromJSON(object.value) : undefined };
  },

  toJSON(message: QueryDidDocVersionResponse): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value ? DidDocWithMetadata.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDidDocVersionResponse>, I>>(object: I): QueryDidDocVersionResponse {
    const message = createBaseQueryDidDocVersionResponse();
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

function createBaseQueryAllDidDocVersionsMetadataResponse(): QueryAllDidDocVersionsMetadataResponse {
  return { versions: [] };
}

export const QueryAllDidDocVersionsMetadataResponse = {
  encode(message: QueryAllDidDocVersionsMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.versions) {
      Metadata.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDidDocVersionsMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDidDocVersionsMetadataResponse();
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

  fromJSON(object: any): QueryAllDidDocVersionsMetadataResponse {
    return { versions: Array.isArray(object?.versions) ? object.versions.map((e: any) => Metadata.fromJSON(e)) : [] };
  },

  toJSON(message: QueryAllDidDocVersionsMetadataResponse): unknown {
    const obj: any = {};
    if (message.versions) {
      obj.versions = message.versions.map((e) => e ? Metadata.toJSON(e) : undefined);
    } else {
      obj.versions = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllDidDocVersionsMetadataResponse>, I>>(
    object: I,
  ): QueryAllDidDocVersionsMetadataResponse {
    const message = createBaseQueryAllDidDocVersionsMetadataResponse();
    message.versions = object.versions?.map((e) => Metadata.fromPartial(e)) || [];
    return message;
  },
};

export interface Query {
  DidDoc(request: QueryGetDidDocRequest): Promise<QueryDidDocResponse>;
  DidDocVersion(request: QueryGetDidDocVersionRequest): Promise<QueryDidDocVersionResponse>;
  AllDidDocVersionsMetadata(
    request: QueryGetAllDidDocVersionsMetadataRequest,
  ): Promise<QueryAllDidDocVersionsMetadataResponse>;
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
  DidDoc(request: QueryGetDidDocRequest): Promise<QueryDidDocResponse> {
    const data = QueryGetDidDocRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DidDoc", data);
    return promise.then((data) => QueryDidDocResponse.decode(new _m0.Reader(data)));
  }

  DidDocVersion(request: QueryGetDidDocVersionRequest): Promise<QueryDidDocVersionResponse> {
    const data = QueryGetDidDocVersionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DidDocVersion", data);
    return promise.then((data) => QueryDidDocVersionResponse.decode(new _m0.Reader(data)));
  }

  AllDidDocVersionsMetadata(
    request: QueryGetAllDidDocVersionsMetadataRequest,
  ): Promise<QueryAllDidDocVersionsMetadataResponse> {
    const data = QueryGetAllDidDocVersionsMetadataRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "AllDidDocVersionsMetadata", data);
    return promise.then((data) => QueryAllDidDocVersionsMetadataResponse.decode(new _m0.Reader(data)));
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
