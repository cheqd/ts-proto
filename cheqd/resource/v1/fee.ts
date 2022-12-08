/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

/** FeeParams defines the parameters for the `resource` module fixed fee. */
export interface FeeParams {
  /** Media types define the fixed fee each for the `resource` module. */
  image: Coin | undefined;
  json: Coin | undefined;
  default: Coin | undefined;
  burnFactor: string;
}

function createBaseFeeParams(): FeeParams {
  return { image: undefined, json: undefined, default: undefined, burnFactor: "" };
}

export const FeeParams = {
  encode(message: FeeParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.image !== undefined) {
      Coin.encode(message.image, writer.uint32(10).fork()).ldelim();
    }
    if (message.json !== undefined) {
      Coin.encode(message.json, writer.uint32(18).fork()).ldelim();
    }
    if (message.default !== undefined) {
      Coin.encode(message.default, writer.uint32(26).fork()).ldelim();
    }
    if (message.burnFactor !== "") {
      writer.uint32(34).string(message.burnFactor);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FeeParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.image = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.json = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.default = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.burnFactor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FeeParams {
    return {
      image: isSet(object.image) ? Coin.fromJSON(object.image) : undefined,
      json: isSet(object.json) ? Coin.fromJSON(object.json) : undefined,
      default: isSet(object.default) ? Coin.fromJSON(object.default) : undefined,
      burnFactor: isSet(object.burnFactor) ? String(object.burnFactor) : "",
    };
  },

  toJSON(message: FeeParams): unknown {
    const obj: any = {};
    message.image !== undefined && (obj.image = message.image ? Coin.toJSON(message.image) : undefined);
    message.json !== undefined && (obj.json = message.json ? Coin.toJSON(message.json) : undefined);
    message.default !== undefined && (obj.default = message.default ? Coin.toJSON(message.default) : undefined);
    message.burnFactor !== undefined && (obj.burnFactor = message.burnFactor);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FeeParams>, I>>(object: I): FeeParams {
    const message = createBaseFeeParams();
    message.image = (object.image !== undefined && object.image !== null) ? Coin.fromPartial(object.image) : undefined;
    message.json = (object.json !== undefined && object.json !== null) ? Coin.fromPartial(object.json) : undefined;
    message.default = (object.default !== undefined && object.default !== null)
      ? Coin.fromPartial(object.default)
      : undefined;
    message.burnFactor = object.burnFactor ?? "";
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

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
