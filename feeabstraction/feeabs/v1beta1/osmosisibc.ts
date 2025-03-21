// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: feeabstraction/feeabs/v1beta1/osmosisibc.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Timestamp } from "../../../google/protobuf/timestamp.js";
import { RequestQuery, ResponseQuery } from "../../../tendermint/abci/types.js";

/** QueryArithmeticTwapToNowRequest */
export interface QueryArithmeticTwapToNowRequest {
  poolId: bigint;
  baseAsset: string;
  quoteAsset: string;
  startTime: Date | undefined;
}

/** QueryArithmeticTwapToNowResponse */
export interface QueryArithmeticTwapToNowResponse {
  arithmeticTwap: string;
}

/** InterchainQueryRequest */
export interface InterchainQueryRequest {
  data: Uint8Array;
  path: string;
}

/** InterchainQueryPacketData is comprised of raw query. */
export interface InterchainQueryPacketData {
  data: Uint8Array;
  /** optional memo */
  memo: string;
}

/**
 * InterchainQueryPacketAck is comprised of an ABCI query response with
 * non-deterministic fields left empty (e.g. Codespace, Log, Info and ...).
 */
export interface InterchainQueryPacketAck {
  data: Uint8Array;
}

/** InterchainQueryRequestPacket */
export interface InterchainQueryRequestPacket {
  requests: InterchainQueryRequest[];
}

/**
 * CosmosQuery contains a list of tendermint ABCI query requests. It should be
 * used when sending queries to an SDK host chain.
 */
export interface CosmosQuery {
  requests: RequestQuery[];
}

/**
 * CosmosResponse contains a list of tendermint ABCI query responses. It should
 * be used when receiving responses from an SDK host chain.
 */
export interface CosmosResponse {
  responses: ResponseQuery[];
}

function createBaseQueryArithmeticTwapToNowRequest(): QueryArithmeticTwapToNowRequest {
  return { poolId: 0n, baseAsset: "", quoteAsset: "", startTime: undefined };
}

export const QueryArithmeticTwapToNowRequest: MessageFns<QueryArithmeticTwapToNowRequest> = {
  encode(message: QueryArithmeticTwapToNowRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.poolId !== 0n) {
      if (BigInt.asUintN(64, message.poolId) !== message.poolId) {
        throw new globalThis.Error("value provided for field message.poolId of type uint64 too large");
      }
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.baseAsset !== "") {
      writer.uint32(18).string(message.baseAsset);
    }
    if (message.quoteAsset !== "") {
      writer.uint32(26).string(message.quoteAsset);
    }
    if (message.startTime !== undefined) {
      Timestamp.encode(toTimestamp(message.startTime), writer.uint32(34).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryArithmeticTwapToNowRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryArithmeticTwapToNowRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.poolId = reader.uint64() as bigint;
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.baseAsset = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.quoteAsset = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.startTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryArithmeticTwapToNowRequest {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId) : 0n,
      baseAsset: isSet(object.baseAsset) ? globalThis.String(object.baseAsset) : "",
      quoteAsset: isSet(object.quoteAsset) ? globalThis.String(object.quoteAsset) : "",
      startTime: isSet(object.startTime) ? fromJsonTimestamp(object.startTime) : undefined,
    };
  },

  toJSON(message: QueryArithmeticTwapToNowRequest): unknown {
    const obj: any = {};
    if (message.poolId !== 0n) {
      obj.poolId = message.poolId.toString();
    }
    if (message.baseAsset !== "") {
      obj.baseAsset = message.baseAsset;
    }
    if (message.quoteAsset !== "") {
      obj.quoteAsset = message.quoteAsset;
    }
    if (message.startTime !== undefined) {
      obj.startTime = message.startTime.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryArithmeticTwapToNowRequest>, I>>(base?: I): QueryArithmeticTwapToNowRequest {
    return QueryArithmeticTwapToNowRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryArithmeticTwapToNowRequest>, I>>(
    object: I,
  ): QueryArithmeticTwapToNowRequest {
    const message = createBaseQueryArithmeticTwapToNowRequest();
    message.poolId = object.poolId ?? 0n;
    message.baseAsset = object.baseAsset ?? "";
    message.quoteAsset = object.quoteAsset ?? "";
    message.startTime = object.startTime ?? undefined;
    return message;
  },
};

function createBaseQueryArithmeticTwapToNowResponse(): QueryArithmeticTwapToNowResponse {
  return { arithmeticTwap: "" };
}

export const QueryArithmeticTwapToNowResponse: MessageFns<QueryArithmeticTwapToNowResponse> = {
  encode(message: QueryArithmeticTwapToNowResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.arithmeticTwap !== "") {
      writer.uint32(10).string(message.arithmeticTwap);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): QueryArithmeticTwapToNowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryArithmeticTwapToNowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.arithmeticTwap = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): QueryArithmeticTwapToNowResponse {
    return { arithmeticTwap: isSet(object.arithmeticTwap) ? globalThis.String(object.arithmeticTwap) : "" };
  },

  toJSON(message: QueryArithmeticTwapToNowResponse): unknown {
    const obj: any = {};
    if (message.arithmeticTwap !== "") {
      obj.arithmeticTwap = message.arithmeticTwap;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<QueryArithmeticTwapToNowResponse>, I>>(
    base?: I,
  ): QueryArithmeticTwapToNowResponse {
    return QueryArithmeticTwapToNowResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<QueryArithmeticTwapToNowResponse>, I>>(
    object: I,
  ): QueryArithmeticTwapToNowResponse {
    const message = createBaseQueryArithmeticTwapToNowResponse();
    message.arithmeticTwap = object.arithmeticTwap ?? "";
    return message;
  },
};

function createBaseInterchainQueryRequest(): InterchainQueryRequest {
  return { data: new Uint8Array(0), path: "" };
}

export const InterchainQueryRequest: MessageFns<InterchainQueryRequest> = {
  encode(message: InterchainQueryRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.path !== "") {
      writer.uint32(18).string(message.path);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): InterchainQueryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterchainQueryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.data = reader.bytes();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.path = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InterchainQueryRequest {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
      path: isSet(object.path) ? globalThis.String(object.path) : "",
    };
  },

  toJSON(message: InterchainQueryRequest): unknown {
    const obj: any = {};
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    if (message.path !== "") {
      obj.path = message.path;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InterchainQueryRequest>, I>>(base?: I): InterchainQueryRequest {
    return InterchainQueryRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InterchainQueryRequest>, I>>(object: I): InterchainQueryRequest {
    const message = createBaseInterchainQueryRequest();
    message.data = object.data ?? new Uint8Array(0);
    message.path = object.path ?? "";
    return message;
  },
};

function createBaseInterchainQueryPacketData(): InterchainQueryPacketData {
  return { data: new Uint8Array(0), memo: "" };
}

export const InterchainQueryPacketData: MessageFns<InterchainQueryPacketData> = {
  encode(message: InterchainQueryPacketData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.memo !== "") {
      writer.uint32(18).string(message.memo);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): InterchainQueryPacketData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterchainQueryPacketData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.data = reader.bytes();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.memo = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InterchainQueryPacketData {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
      memo: isSet(object.memo) ? globalThis.String(object.memo) : "",
    };
  },

  toJSON(message: InterchainQueryPacketData): unknown {
    const obj: any = {};
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    if (message.memo !== "") {
      obj.memo = message.memo;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InterchainQueryPacketData>, I>>(base?: I): InterchainQueryPacketData {
    return InterchainQueryPacketData.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InterchainQueryPacketData>, I>>(object: I): InterchainQueryPacketData {
    const message = createBaseInterchainQueryPacketData();
    message.data = object.data ?? new Uint8Array(0);
    message.memo = object.memo ?? "";
    return message;
  },
};

function createBaseInterchainQueryPacketAck(): InterchainQueryPacketAck {
  return { data: new Uint8Array(0) };
}

export const InterchainQueryPacketAck: MessageFns<InterchainQueryPacketAck> = {
  encode(message: InterchainQueryPacketAck, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): InterchainQueryPacketAck {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterchainQueryPacketAck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.data = reader.bytes();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InterchainQueryPacketAck {
    return { data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0) };
  },

  toJSON(message: InterchainQueryPacketAck): unknown {
    const obj: any = {};
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InterchainQueryPacketAck>, I>>(base?: I): InterchainQueryPacketAck {
    return InterchainQueryPacketAck.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InterchainQueryPacketAck>, I>>(object: I): InterchainQueryPacketAck {
    const message = createBaseInterchainQueryPacketAck();
    message.data = object.data ?? new Uint8Array(0);
    return message;
  },
};

function createBaseInterchainQueryRequestPacket(): InterchainQueryRequestPacket {
  return { requests: [] };
}

export const InterchainQueryRequestPacket: MessageFns<InterchainQueryRequestPacket> = {
  encode(message: InterchainQueryRequestPacket, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.requests) {
      InterchainQueryRequest.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): InterchainQueryRequestPacket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInterchainQueryRequestPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.requests.push(InterchainQueryRequest.decode(reader, reader.uint32()));
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InterchainQueryRequestPacket {
    return {
      requests: globalThis.Array.isArray(object?.requests)
        ? object.requests.map((e: any) => InterchainQueryRequest.fromJSON(e))
        : [],
    };
  },

  toJSON(message: InterchainQueryRequestPacket): unknown {
    const obj: any = {};
    if (message.requests?.length) {
      obj.requests = message.requests.map((e) => InterchainQueryRequest.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<InterchainQueryRequestPacket>, I>>(base?: I): InterchainQueryRequestPacket {
    return InterchainQueryRequestPacket.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<InterchainQueryRequestPacket>, I>>(object: I): InterchainQueryRequestPacket {
    const message = createBaseInterchainQueryRequestPacket();
    message.requests = object.requests?.map((e) => InterchainQueryRequest.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCosmosQuery(): CosmosQuery {
  return { requests: [] };
}

export const CosmosQuery: MessageFns<CosmosQuery> = {
  encode(message: CosmosQuery, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.requests) {
      RequestQuery.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CosmosQuery {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCosmosQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.requests.push(RequestQuery.decode(reader, reader.uint32()));
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CosmosQuery {
    return {
      requests: globalThis.Array.isArray(object?.requests)
        ? object.requests.map((e: any) => RequestQuery.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CosmosQuery): unknown {
    const obj: any = {};
    if (message.requests?.length) {
      obj.requests = message.requests.map((e) => RequestQuery.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CosmosQuery>, I>>(base?: I): CosmosQuery {
    return CosmosQuery.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CosmosQuery>, I>>(object: I): CosmosQuery {
    const message = createBaseCosmosQuery();
    message.requests = object.requests?.map((e) => RequestQuery.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCosmosResponse(): CosmosResponse {
  return { responses: [] };
}

export const CosmosResponse: MessageFns<CosmosResponse> = {
  encode(message: CosmosResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.responses) {
      ResponseQuery.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CosmosResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCosmosResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.responses.push(ResponseQuery.decode(reader, reader.uint32()));
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CosmosResponse {
    return {
      responses: globalThis.Array.isArray(object?.responses)
        ? object.responses.map((e: any) => ResponseQuery.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CosmosResponse): unknown {
    const obj: any = {};
    if (message.responses?.length) {
      obj.responses = message.responses.map((e) => ResponseQuery.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CosmosResponse>, I>>(base?: I): CosmosResponse {
    return CosmosResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CosmosResponse>, I>>(object: I): CosmosResponse {
    const message = createBaseCosmosResponse();
    message.responses = object.responses?.map((e) => ResponseQuery.fromPartial(e)) || [];
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if ((globalThis as any).Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = BigInt(Math.trunc(date.getTime() / 1_000));
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (globalThis.Number(t.seconds.toString()) || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
