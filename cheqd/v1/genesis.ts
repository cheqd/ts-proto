/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { StateValue } from "./stateValue";

export const protobufPackage = "cheqdid.cheqdnode.cheqd.v1";

/** GenesisState defines the cheqd module's genesis state. */
export interface GenesisState {
  didNamespace: string;
  didList: StateValue[];
}

const baseGenesisState: object = { didNamespace: "" };

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseGenesisState } as GenesisState;
    message.didList = [];
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
    const message = { ...baseGenesisState } as GenesisState;
    message.didList = [];
    if (object.didNamespace !== undefined && object.didNamespace !== null) {
      message.didNamespace = String(object.didNamespace);
    } else {
      message.didNamespace = "";
    }
    if (object.didList !== undefined && object.didList !== null) {
      for (const e of object.didList) {
        message.didList.push(StateValue.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.didNamespace !== undefined &&
      (obj.didNamespace = message.didNamespace);
    if (message.didList) {
      obj.didList = message.didList.map((e) =>
        e ? StateValue.toJSON(e) : undefined
      );
    } else {
      obj.didList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.didNamespace = object.didNamespace ?? "";
    message.didList = [];
    if (object.didList !== undefined && object.didList !== null) {
      for (const e of object.didList) {
        message.didList.push(StateValue.fromPartial(e));
      }
    }
    return message;
  },
};

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
