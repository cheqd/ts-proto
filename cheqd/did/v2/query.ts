/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { DidDocWithMetadata, Metadata } from "./diddoc";

/** QueryDidDocRequest is the request type for the Query/DidDoc method */
export interface QueryDidDocRequest {
  /**
   * DID unique identifier of the DID Document to fetch.
   * UUID-style DIDs as well as Indy-style DID are supported.
   *
   * Format: did:cheqd:<namespace>:<unique-identifier>
   *
   * Examples:
   * - did:cheqd:mainnet:c82f2b02-bdab-4dd7-b833-3e143745d612
   * - did:cheqd:testnet:wGHEXrZvJxR8vw5P3UWH1j
   */
  id: string;
}

/** QueryDidDocResponse is the response type for the Query/DidDoc method */
export interface QueryDidDocResponse {
  /**
   * Successful resolution of the DID Document returns the following:
   * - did_doc is the latest version of the DID Document
   * - metadata is is the DID Document metadata associated with the latest version of the DID Document
   */
  value: DidDocWithMetadata | undefined;
}

/** QueryDidDocVersionRequest is the request type for the Query/DidDocVersion method */
export interface QueryDidDocVersionRequest {
  /**
   * DID unique identifier of the DID Document to fetch.
   * UUID-style DIDs as well as Indy-style DID are supported.
   *
   * Format: did:cheqd:<namespace>:<unique-identifier>
   *
   * Examples:
   * - did:cheqd:mainnet:c82f2b02-bdab-4dd7-b833-3e143745d612
   * - did:cheqd:testnet:wGHEXrZvJxR8vw5P3UWH1j
   */
  id: string;
  /**
   * Unique version identifier of the DID Document to fetch.
   * Returns the specified version of the DID Document.
   *
   * Format: <uuid>
   *
   * Example: 93f2573c-eca9-4098-96cb-a1ec676a29ed
   */
  version: string;
}

/** QueryDidDocVersionResponse is the response type for the Query/DidDocVersion method */
export interface QueryDidDocVersionResponse {
  /**
   * Successful resolution of the DID Document returns the following:
   * - did_doc is the requested version of the DID Document
   * - metadata is DID Document metadata associated with the requested version of the DID Document
   */
  value: DidDocWithMetadata | undefined;
}

/** QueryAllDidDocVersionsMetadataRequest is the request type for the Query/AllDidDocVersionsMetadata method */
export interface QueryAllDidDocVersionsMetadataRequest {
  /**
   * DID unique identifier of the DID Document to fetch version metadata.
   * UUID-style DIDs as well as Indy-style DID are supported.
   *
   * Format: did:cheqd:<namespace>:<unique-identifier>
   *
   * Examples:
   * - did:cheqd:mainnet:c82f2b02-bdab-4dd7-b833-3e143745d612
   * - did:cheqd:testnet:wGHEXrZvJxR8vw5P3UWH1j
   */
  id: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/** QueryAllDidDocVersionsMetadataResponse is the response type for the Query/AllDidDocVersionsMetadata method */
export interface QueryAllDidDocVersionsMetadataResponse {
  /** versions is the list of all versions of the requested DID Document */
  versions: Metadata[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

function createBaseQueryDidDocRequest(): QueryDidDocRequest {
  return { id: "" };
}

export const QueryDidDocRequest = {
  encode(message: QueryDidDocRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDidDocRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDidDocRequest();
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

  fromJSON(object: any): QueryDidDocRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: QueryDidDocRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDidDocRequest>, I>>(base?: I): QueryDidDocRequest {
    return QueryDidDocRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDidDocRequest>, I>>(object: I): QueryDidDocRequest {
    const message = createBaseQueryDidDocRequest();
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

  create<I extends Exact<DeepPartial<QueryDidDocResponse>, I>>(base?: I): QueryDidDocResponse {
    return QueryDidDocResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDidDocResponse>, I>>(object: I): QueryDidDocResponse {
    const message = createBaseQueryDidDocResponse();
    message.value = (object.value !== undefined && object.value !== null)
      ? DidDocWithMetadata.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseQueryDidDocVersionRequest(): QueryDidDocVersionRequest {
  return { id: "", version: "" };
}

export const QueryDidDocVersionRequest = {
  encode(message: QueryDidDocVersionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.version !== "") {
      writer.uint32(18).string(message.version);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDidDocVersionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDidDocVersionRequest();
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

  fromJSON(object: any): QueryDidDocVersionRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      version: isSet(object.version) ? String(object.version) : "",
    };
  },

  toJSON(message: QueryDidDocVersionRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.version !== undefined && (obj.version = message.version);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryDidDocVersionRequest>, I>>(base?: I): QueryDidDocVersionRequest {
    return QueryDidDocVersionRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDidDocVersionRequest>, I>>(object: I): QueryDidDocVersionRequest {
    const message = createBaseQueryDidDocVersionRequest();
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

  create<I extends Exact<DeepPartial<QueryDidDocVersionResponse>, I>>(base?: I): QueryDidDocVersionResponse {
    return QueryDidDocVersionResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryDidDocVersionResponse>, I>>(object: I): QueryDidDocVersionResponse {
    const message = createBaseQueryDidDocVersionResponse();
    message.value = (object.value !== undefined && object.value !== null)
      ? DidDocWithMetadata.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseQueryAllDidDocVersionsMetadataRequest(): QueryAllDidDocVersionsMetadataRequest {
  return { id: "", pagination: undefined };
}

export const QueryAllDidDocVersionsMetadataRequest = {
  encode(message: QueryAllDidDocVersionsMetadataRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDidDocVersionsMetadataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllDidDocVersionsMetadataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
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

  fromJSON(object: any): QueryAllDidDocVersionsMetadataRequest {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllDidDocVersionsMetadataRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllDidDocVersionsMetadataRequest>, I>>(
    base?: I,
  ): QueryAllDidDocVersionsMetadataRequest {
    return QueryAllDidDocVersionsMetadataRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllDidDocVersionsMetadataRequest>, I>>(
    object: I,
  ): QueryAllDidDocVersionsMetadataRequest {
    const message = createBaseQueryAllDidDocVersionsMetadataRequest();
    message.id = object.id ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllDidDocVersionsMetadataResponse(): QueryAllDidDocVersionsMetadataResponse {
  return { versions: [], pagination: undefined };
}

export const QueryAllDidDocVersionsMetadataResponse = {
  encode(message: QueryAllDidDocVersionsMetadataResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.versions) {
      Metadata.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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

  fromJSON(object: any): QueryAllDidDocVersionsMetadataResponse {
    return {
      versions: Array.isArray(object?.versions) ? object.versions.map((e: any) => Metadata.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllDidDocVersionsMetadataResponse): unknown {
    const obj: any = {};
    if (message.versions) {
      obj.versions = message.versions.map((e) => e ? Metadata.toJSON(e) : undefined);
    } else {
      obj.versions = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryAllDidDocVersionsMetadataResponse>, I>>(
    base?: I,
  ): QueryAllDidDocVersionsMetadataResponse {
    return QueryAllDidDocVersionsMetadataResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllDidDocVersionsMetadataResponse>, I>>(
    object: I,
  ): QueryAllDidDocVersionsMetadataResponse {
    const message = createBaseQueryAllDidDocVersionsMetadataResponse();
    message.versions = object.versions?.map((e) => Metadata.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service for the DID module */
export interface Query {
  /** Fetch latest version of a DID Document for a given DID */
  DidDoc(request: QueryDidDocRequest): Promise<QueryDidDocResponse>;
  /** Fetch specific version of a DID Document for a given DID */
  DidDocVersion(request: QueryDidDocVersionRequest): Promise<QueryDidDocVersionResponse>;
  /** Fetch list of all versions of DID Documents for a given DID */
  AllDidDocVersionsMetadata(
    request: QueryAllDidDocVersionsMetadataRequest,
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
  DidDoc(request: QueryDidDocRequest): Promise<QueryDidDocResponse> {
    const data = QueryDidDocRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DidDoc", data);
    return promise.then((data) => QueryDidDocResponse.decode(new _m0.Reader(data)));
  }

  DidDocVersion(request: QueryDidDocVersionRequest): Promise<QueryDidDocVersionResponse> {
    const data = QueryDidDocVersionRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "DidDocVersion", data);
    return promise.then((data) => QueryDidDocVersionResponse.decode(new _m0.Reader(data)));
  }

  AllDidDocVersionsMetadata(
    request: QueryAllDidDocVersionsMetadataRequest,
  ): Promise<QueryAllDidDocVersionsMetadataResponse> {
    const data = QueryAllDidDocVersionsMetadataRequest.encode(request).finish();
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
