/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import { StateValue } from "./stateValue.js";

/** GenesisState defines the cheqd module's genesis state. */
export interface GenesisState {
  didNamespace: string;
  didList: StateValue[];
}

function createBaseGenesisState(): GenesisState {
  return { didNamespace: "", didList: [] };
}

export const GenesisState = {
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

          message.didNamespace = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.didList.push(StateValue.decode(reader, reader.uint32()));
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
      didNamespace: isSet(object.didNamespace) ? String(object.didNamespace) : "",
      didList: Array.isArray(object?.didList) ? object.didList.map((e: any) => StateValue.fromJSON(e)) : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.didNamespace !== "") {
      obj.didNamespace = message.didNamespace;
    }
    if (message.didList?.length) {
      obj.didList = message.didList.map((e) => StateValue.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
    return GenesisState.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.didNamespace = object.didNamespace ?? "";
    message.didList = object.didList?.map((e) => StateValue.fromPartial(e)) || [];
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
