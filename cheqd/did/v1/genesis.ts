/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";
import { StateValue } from "./stateValue";

export const protobufPackage = "cheqdid.cheqdnode.cheqd.v1";

/** GenesisState defines the cheqd module's genesis state. */
export interface GenesisState {
  $type: "cheqdid.cheqdnode.cheqd.v1.GenesisState";
  didNamespace: string;
  didList: StateValue[];
}

function createBaseGenesisState(): GenesisState {
  return { $type: "cheqdid.cheqdnode.cheqd.v1.GenesisState", didNamespace: "", didList: [] };
}

export const GenesisState = {
  $type: "cheqdid.cheqdnode.cheqd.v1.GenesisState" as const,

  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.didNamespace !== "") {
      writer.uint32(10).string(message.didNamespace);
    }
    for (const v of message.didList) {
      StateValue.encode(v!, writer.uint32(18).fork()).ldelim();
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
          message.didNamespace = reader.string();
          break;
        case 2:
          message.didList.push(StateValue.decode(reader, reader.uint32()));
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
      $type: GenesisState.$type,
      didNamespace: isSet(object.didNamespace) ? String(object.didNamespace) : "",
      didList: Array.isArray(object?.didList) ? object.didList.map((e: any) => StateValue.fromJSON(e)) : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.didNamespace !== undefined && (obj.didNamespace = message.didNamespace);
    if (message.didList) {
      obj.didList = message.didList.map((e) => e ? StateValue.toJSON(e) : undefined);
    } else {
      obj.didList = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.didNamespace = object.didNamespace ?? "";
    message.didList = object.didList?.map((e) => StateValue.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(GenesisState.$type, GenesisState);

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
