/* eslint-disable */
import _m0 from "protobufjs/minimal.js";
import { FeeParams } from "./fee.js";
import { ResourceWithMetadata } from "./resource.js";

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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resources.push(ResourceWithMetadata.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.feeParams = FeeParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      resources: globalThis.Array.isArray(object?.resources)
        ? object.resources.map((e: any) => ResourceWithMetadata.fromJSON(e))
        : [],
      feeParams: isSet(object.feeParams) ? FeeParams.fromJSON(object.feeParams) : undefined,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.resources?.length) {
      obj.resources = message.resources.map((e) => ResourceWithMetadata.toJSON(e));
    }
    if (message.feeParams !== undefined) {
      obj.feeParams = FeeParams.toJSON(message.feeParams);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
    return GenesisState.fromPartial(base ?? ({} as any));
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
