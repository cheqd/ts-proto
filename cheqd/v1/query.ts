/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Did } from "./did";
import { Metadata } from "./stateValue";

export const protobufPackage = "cheqdid.cheqdnode.cheqd.v1";

export interface QueryGetDidRequest {
  id: string;
}

export interface QueryGetDidResponse {
  did?: Did;
  metadata?: Metadata;
}

const baseQueryGetDidRequest: object = { id: "" };

export const QueryGetDidRequest = {
  encode(
    message: QueryGetDidRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDidRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetDidRequest } as QueryGetDidRequest;
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

  fromJSON(object: any): QueryGetDidRequest {
    const message = { ...baseQueryGetDidRequest } as QueryGetDidRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: QueryGetDidRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetDidRequest>): QueryGetDidRequest {
    const message = { ...baseQueryGetDidRequest } as QueryGetDidRequest;
    message.id = object.id ?? "";
    return message;
  },
};

const baseQueryGetDidResponse: object = {};

export const QueryGetDidResponse = {
  encode(
    message: QueryGetDidResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.did !== undefined) {
      Did.encode(message.did, writer.uint32(10).fork()).ldelim();
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetDidResponse } as QueryGetDidResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.did = Did.decode(reader, reader.uint32());
          break;
        case 2:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetDidResponse {
    const message = { ...baseQueryGetDidResponse } as QueryGetDidResponse;
    if (object.did !== undefined && object.did !== null) {
      message.did = Did.fromJSON(object.did);
    } else {
      message.did = undefined;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromJSON(object.metadata);
    } else {
      message.metadata = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetDidResponse): unknown {
    const obj: any = {};
    message.did !== undefined &&
      (obj.did = message.did ? Did.toJSON(message.did) : undefined);
    message.metadata !== undefined &&
      (obj.metadata = message.metadata
        ? Metadata.toJSON(message.metadata)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetDidResponse>): QueryGetDidResponse {
    const message = { ...baseQueryGetDidResponse } as QueryGetDidResponse;
    if (object.did !== undefined && object.did !== null) {
      message.did = Did.fromPartial(object.did);
    } else {
      message.did = undefined;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromPartial(object.metadata);
    } else {
      message.metadata = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  Did(request: QueryGetDidRequest): Promise<QueryGetDidResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Did = this.Did.bind(this);
  }
  Did(request: QueryGetDidRequest): Promise<QueryGetDidResponse> {
    const data = QueryGetDidRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cheqdid.cheqdnode.cheqd.v1.Query",
      "Did",
      data
    );
    return promise.then((data) =>
      QueryGetDidResponse.decode(new _m0.Reader(data))
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
