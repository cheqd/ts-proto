/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import { Did } from "./did.js";
import { Metadata } from "./stateValue.js";

export interface QueryGetDidRequest {
  id: string;
}

export interface QueryGetDidResponse {
  did: Did | undefined;
  metadata: Metadata | undefined;
}

function createBaseQueryGetDidRequest(): QueryGetDidRequest {
  return { id: "" };
}

export const QueryGetDidRequest = {
  encode(message: QueryGetDidRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDidRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDidRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetDidRequest {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: QueryGetDidRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetDidRequest>, I>>(base?: I): QueryGetDidRequest {
    return QueryGetDidRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetDidRequest>, I>>(object: I): QueryGetDidRequest {
    const message = createBaseQueryGetDidRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseQueryGetDidResponse(): QueryGetDidResponse {
  return { did: undefined, metadata: undefined };
}

export const QueryGetDidResponse = {
  encode(message: QueryGetDidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.did !== undefined) {
      Did.encode(message.did, writer.uint32(10).fork()).ldelim();
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDidResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetDidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.did = Did.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.metadata = Metadata.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryGetDidResponse {
    return {
      did: isSet(object.did) ? Did.fromJSON(object.did) : undefined,
      metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined,
    };
  },

  toJSON(message: QueryGetDidResponse): unknown {
    const obj: any = {};
    message.did !== undefined && (obj.did = message.did ? Did.toJSON(message.did) : undefined);
    message.metadata !== undefined && (obj.metadata = message.metadata ? Metadata.toJSON(message.metadata) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryGetDidResponse>, I>>(base?: I): QueryGetDidResponse {
    return QueryGetDidResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetDidResponse>, I>>(object: I): QueryGetDidResponse {
    const message = createBaseQueryGetDidResponse();
    message.did = (object.did !== undefined && object.did !== null) ? Did.fromPartial(object.did) : undefined;
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? Metadata.fromPartial(object.metadata)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  Did(request: QueryGetDidRequest): Promise<QueryGetDidResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "cheqdid.cheqdnode.cheqd.v1.Query";
    this.rpc = rpc;
    this.Did = this.Did.bind(this);
  }
  Did(request: QueryGetDidRequest): Promise<QueryGetDidResponse> {
    const data = QueryGetDidRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Did", data);
    return promise.then((data) => QueryGetDidResponse.decode(_m0.Reader.create(data)));
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
