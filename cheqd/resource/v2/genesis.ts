/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { FeeParams } from "./fee";
import { ResourceWithMetadata } from "./resource";

/** GenesisState defines the chqed Resource module's genesis state */
export interface GenesisState {
  /** All Resources with metadata */
  resources: ResourceWithMetadata[];
  /**
   * Fee parameters for the Resource module
   * Defines fixed fees and burn percentage for resources
   */
  feeParams: FeeParams | undefined;
}

function createBaseGenesisState(): GenesisState {
  return { resources: [], feeParams: undefined };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.resources) {
      ResourceWithMetadata.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.feeParams !== undefined) {
      FeeParams.encode(message.feeParams, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resources.push(ResourceWithMetadata.decode(reader, reader.uint32()));
          break;
        case 2:
          message.feeParams = FeeParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      resources: Array.isArray(object?.resources)
        ? object.resources.map((e: any) => ResourceWithMetadata.fromJSON(e))
        : [],
      feeParams: isSet(object.feeParams) ? FeeParams.fromJSON(object.feeParams) : undefined,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.resources) {
      obj.resources = message.resources.map((e) => e ? ResourceWithMetadata.toJSON(e) : undefined);
    } else {
      obj.resources = [];
    }
    message.feeParams !== undefined &&
      (obj.feeParams = message.feeParams ? FeeParams.toJSON(message.feeParams) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.resources = object.resources?.map((e) => ResourceWithMetadata.fromPartial(e)) || [];
    message.feeParams = (object.feeParams !== undefined && object.feeParams !== null)
      ? FeeParams.fromPartial(object.feeParams)
      : undefined;
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
