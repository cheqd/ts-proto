/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin.js";

/** FeeParams defines the parameters for the cheqd DID module fixed fee */
export interface FeeParams {
  /**
   * Fixed fee for creating a DID
   *
   * Default: 50 CHEQ or 50000000000ncheq
   */
  createDid:
    | Coin
    | undefined;
  /**
   * Fixed fee for updating a DID
   *
   * Default: 25 CHEQ or 25000000000ncheq
   */
  updateDid:
    | Coin
    | undefined;
  /**
   * Fixed fee for deactivating a DID
   *
   * Default: 10 CHEQ or 10000000000ncheq
   */
  deactivateDid:
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
  return { createDid: undefined, updateDid: undefined, deactivateDid: undefined, burnFactor: "" };
}

export const FeeParams = {
  encode(message: FeeParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.createDid !== undefined) {
      Coin.encode(message.createDid, writer.uint32(10).fork()).ldelim();
    }
    if (message.updateDid !== undefined) {
      Coin.encode(message.updateDid, writer.uint32(18).fork()).ldelim();
    }
    if (message.deactivateDid !== undefined) {
      Coin.encode(message.deactivateDid, writer.uint32(26).fork()).ldelim();
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
          message.createDid = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.updateDid = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.deactivateDid = Coin.decode(reader, reader.uint32());
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
      createDid: isSet(object.createDid) ? Coin.fromJSON(object.createDid) : undefined,
      updateDid: isSet(object.updateDid) ? Coin.fromJSON(object.updateDid) : undefined,
      deactivateDid: isSet(object.deactivateDid) ? Coin.fromJSON(object.deactivateDid) : undefined,
      burnFactor: isSet(object.burnFactor) ? String(object.burnFactor) : "",
    };
  },

  toJSON(message: FeeParams): unknown {
    const obj: any = {};
    message.createDid !== undefined && (obj.createDid = message.createDid ? Coin.toJSON(message.createDid) : undefined);
    message.updateDid !== undefined && (obj.updateDid = message.updateDid ? Coin.toJSON(message.updateDid) : undefined);
    message.deactivateDid !== undefined &&
      (obj.deactivateDid = message.deactivateDid ? Coin.toJSON(message.deactivateDid) : undefined);
    message.burnFactor !== undefined && (obj.burnFactor = message.burnFactor);
    return obj;
  },

  create<I extends Exact<DeepPartial<FeeParams>, I>>(base?: I): FeeParams {
    return FeeParams.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<FeeParams>, I>>(object: I): FeeParams {
    const message = createBaseFeeParams();
    message.createDid = (object.createDid !== undefined && object.createDid !== null)
      ? Coin.fromPartial(object.createDid)
      : undefined;
    message.updateDid = (object.updateDid !== undefined && object.updateDid !== null)
      ? Coin.fromPartial(object.updateDid)
      : undefined;
    message.deactivateDid = (object.deactivateDid !== undefined && object.deactivateDid !== null)
      ? Coin.fromPartial(object.deactivateDid)
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
