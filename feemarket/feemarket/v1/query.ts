// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: feemarket/feemarket/v1/query.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin.js";
import { State } from "./genesis.js";
import { Params } from "./params.js";

/** ParamsRequest is the request type for the Query/Params RPC method. */
export interface ParamsRequest {
}

/** ParamsResponse is the response type for the Query/Params RPC method. */
export interface ParamsResponse {
  params: Params | undefined;
}

/** StateRequest is the request type for the Query/State RPC method. */
export interface StateRequest {
}

/** StateResponse is the response type for the Query/State RPC method. */
export interface StateResponse {
  state: State | undefined;
}

/** GasPriceRequest is the request type for the Query/GasPrice RPC method. */
export interface GasPriceRequest {
  /** denom we are querying gas price in */
  denom: string;
}

/**
 * GasPriceResponse is the response type for the Query/GasPrice RPC method.
 * Returns a gas price in specified denom.
 */
export interface GasPriceResponse {
  price: DecCoin | undefined;
}

/** GasPriceRequest is the request type for the Query/GasPrices RPC method. */
export interface GasPricesRequest {
}

/**
 * GasPricesResponse is the response type for the Query/GasPrices RPC method.
 * Returns a gas price in all available denoms.
 */
export interface GasPricesResponse {
  prices: DecCoin[];
}

function createBaseParamsRequest(): ParamsRequest {
  return {};
}

export const ParamsRequest: MessageFns<ParamsRequest> = {
  encode(_: ParamsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ParamsRequest {
    return {};
  },

  toJSON(_: ParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ParamsRequest>, I>>(base?: I): ParamsRequest {
    return ParamsRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ParamsRequest>, I>>(_: I): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
};

function createBaseParamsResponse(): ParamsResponse {
  return { params: undefined };
}

export const ParamsResponse: MessageFns<ParamsResponse> = {
  encode(message: ParamsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.params = Params.decode(reader, reader.uint32());
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

  fromJSON(object: any): ParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: ParamsResponse): unknown {
    const obj: any = {};
    if (message.params !== undefined) {
      obj.params = Params.toJSON(message.params);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ParamsResponse>, I>>(base?: I): ParamsResponse {
    return ParamsResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ParamsResponse>, I>>(object: I): ParamsResponse {
    const message = createBaseParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseStateRequest(): StateRequest {
  return {};
}

export const StateRequest: MessageFns<StateRequest> = {
  encode(_: StateRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): StateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): StateRequest {
    return {};
  },

  toJSON(_: StateRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<StateRequest>, I>>(base?: I): StateRequest {
    return StateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StateRequest>, I>>(_: I): StateRequest {
    const message = createBaseStateRequest();
    return message;
  },
};

function createBaseStateResponse(): StateResponse {
  return { state: undefined };
}

export const StateResponse: MessageFns<StateResponse> = {
  encode(message: StateResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.state !== undefined) {
      State.encode(message.state, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): StateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.state = State.decode(reader, reader.uint32());
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

  fromJSON(object: any): StateResponse {
    return { state: isSet(object.state) ? State.fromJSON(object.state) : undefined };
  },

  toJSON(message: StateResponse): unknown {
    const obj: any = {};
    if (message.state !== undefined) {
      obj.state = State.toJSON(message.state);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StateResponse>, I>>(base?: I): StateResponse {
    return StateResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StateResponse>, I>>(object: I): StateResponse {
    const message = createBaseStateResponse();
    message.state = (object.state !== undefined && object.state !== null) ? State.fromPartial(object.state) : undefined;
    return message;
  },
};

function createBaseGasPriceRequest(): GasPriceRequest {
  return { denom: "" };
}

export const GasPriceRequest: MessageFns<GasPriceRequest> = {
  encode(message: GasPriceRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GasPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.denom = reader.string();
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

  fromJSON(object: any): GasPriceRequest {
    return { denom: isSet(object.denom) ? globalThis.String(object.denom) : "" };
  },

  toJSON(message: GasPriceRequest): unknown {
    const obj: any = {};
    if (message.denom !== "") {
      obj.denom = message.denom;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GasPriceRequest>, I>>(base?: I): GasPriceRequest {
    return GasPriceRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GasPriceRequest>, I>>(object: I): GasPriceRequest {
    const message = createBaseGasPriceRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseGasPriceResponse(): GasPriceResponse {
  return { price: undefined };
}

export const GasPriceResponse: MessageFns<GasPriceResponse> = {
  encode(message: GasPriceResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.price !== undefined) {
      DecCoin.encode(message.price, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GasPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.price = DecCoin.decode(reader, reader.uint32());
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

  fromJSON(object: any): GasPriceResponse {
    return { price: isSet(object.price) ? DecCoin.fromJSON(object.price) : undefined };
  },

  toJSON(message: GasPriceResponse): unknown {
    const obj: any = {};
    if (message.price !== undefined) {
      obj.price = DecCoin.toJSON(message.price);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GasPriceResponse>, I>>(base?: I): GasPriceResponse {
    return GasPriceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GasPriceResponse>, I>>(object: I): GasPriceResponse {
    const message = createBaseGasPriceResponse();
    message.price = (object.price !== undefined && object.price !== null)
      ? DecCoin.fromPartial(object.price)
      : undefined;
    return message;
  },
};

function createBaseGasPricesRequest(): GasPricesRequest {
  return {};
}

export const GasPricesRequest: MessageFns<GasPricesRequest> = {
  encode(_: GasPricesRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GasPricesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasPricesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): GasPricesRequest {
    return {};
  },

  toJSON(_: GasPricesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GasPricesRequest>, I>>(base?: I): GasPricesRequest {
    return GasPricesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GasPricesRequest>, I>>(_: I): GasPricesRequest {
    const message = createBaseGasPricesRequest();
    return message;
  },
};

function createBaseGasPricesResponse(): GasPricesResponse {
  return { prices: [] };
}

export const GasPricesResponse: MessageFns<GasPricesResponse> = {
  encode(message: GasPricesResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.prices) {
      DecCoin.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GasPricesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasPricesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.prices.push(DecCoin.decode(reader, reader.uint32()));
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

  fromJSON(object: any): GasPricesResponse {
    return {
      prices: globalThis.Array.isArray(object?.prices) ? object.prices.map((e: any) => DecCoin.fromJSON(e)) : [],
    };
  },

  toJSON(message: GasPricesResponse): unknown {
    const obj: any = {};
    if (message.prices?.length) {
      obj.prices = message.prices.map((e) => DecCoin.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GasPricesResponse>, I>>(base?: I): GasPricesResponse {
    return GasPricesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GasPricesResponse>, I>>(object: I): GasPricesResponse {
    const message = createBaseGasPricesResponse();
    message.prices = object.prices?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
};

/** Query Service for the feemarket module. */
export interface Query {
  /** Params returns the current feemarket module parameters. */
  Params(request: ParamsRequest): Promise<ParamsResponse>;
  /** State returns the current feemarket module state. */
  State(request: StateRequest): Promise<StateResponse>;
  /**
   * GasPrice returns the current feemarket module gas price
   * for specified denom.
   */
  GasPrice(request: GasPriceRequest): Promise<GasPriceResponse>;
  /**
   * GasPrices returns the current feemarket module list of gas prices
   * in all available denoms.
   */
  GasPrices(request: GasPricesRequest): Promise<GasPricesResponse>;
}

export const QueryServiceName = "feemarket.feemarket.v1.Query";
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || QueryServiceName;
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.State = this.State.bind(this);
    this.GasPrice = this.GasPrice.bind(this);
    this.GasPrices = this.GasPrices.bind(this);
  }
  Params(request: ParamsRequest): Promise<ParamsResponse> {
    const data = ParamsRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "Params", data);
    return promise.then((data) => ParamsResponse.decode(new BinaryReader(data)));
  }

  State(request: StateRequest): Promise<StateResponse> {
    const data = StateRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "State", data);
    return promise.then((data) => StateResponse.decode(new BinaryReader(data)));
  }

  GasPrice(request: GasPriceRequest): Promise<GasPriceResponse> {
    const data = GasPriceRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GasPrice", data);
    return promise.then((data) => GasPriceResponse.decode(new BinaryReader(data)));
  }

  GasPrices(request: GasPricesRequest): Promise<GasPricesResponse> {
    const data = GasPricesRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GasPrices", data);
    return promise.then((data) => GasPricesResponse.decode(new BinaryReader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
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