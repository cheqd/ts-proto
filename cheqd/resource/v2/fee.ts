/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin.js";

/**
 * FeeParams defines the parameters for the cheqd Resource module fixed fee.
 * Creation requests for different IANA media types are charged different fees.
 */
export interface FeeParams {
  /**
   * Fixed fee for creating a resource with media type 'image/*'
   *
   * Default: 10 CHEQ or 10000000000ncheq
   */
  image:
    | Coin
    | undefined;
  /**
   * Fixed fee for creating a resource with media type 'application/json'
   *
   * Default: 2.5 CHEQ or 2500000000ncheq
   */
  json:
    | Coin
    | undefined;
  /**
   * Fixed fee for creating a resource with all other media types
   *
   * Default: 5 CHEQ or 5000000000ncheq
   */
  default:
    | Coin
    | undefined;
  /**
   * Percentage of the fixed fee that will be burned
   *
   * Default: 0.5 (50%)
   */
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.image = Coin.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.json = Coin.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.default = Coin.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.burnFactor = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
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

  create<I extends Exact<DeepPartial<FeeParams>, I>>(base?: I): FeeParams {
    return FeeParams.fromPartial(base ?? {});
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
