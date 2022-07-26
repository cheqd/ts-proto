/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../google/protobuf/any";

export const protobufPackage = "cheqdid.cheqdnode.cheqd.v1";

export interface StateValue {
  data?: Any;
  /** optional */
  metadata?: Metadata;
}

/** metadata */
export interface Metadata {
  created: string;
  updated: string;
  deactivated: boolean;
  versionId: string;
  resources: string[];
}

const baseStateValue: object = {};

export const StateValue = {
  encode(
    message: StateValue,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StateValue {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseStateValue } as StateValue;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StateValue {
    const message = { ...baseStateValue } as StateValue;
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromJSON(object.data);
    } else {
      message.data = undefined;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromJSON(object.metadata);
    } else {
      message.metadata = undefined;
    }
    return message;
  },

  toJSON(message: StateValue): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = message.data ? Any.toJSON(message.data) : undefined);
    message.metadata !== undefined &&
      (obj.metadata = message.metadata
        ? Metadata.toJSON(message.metadata)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<StateValue>): StateValue {
    const message = { ...baseStateValue } as StateValue;
    if (object.data !== undefined && object.data !== null) {
      message.data = Any.fromPartial(object.data);
    } else {
      message.data = undefined;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromPartial(object.metadata);
    } else {
      message.metadata = undefined;
    }
    return message;
  },
};

const baseMetadata: object = {
  created: "",
  updated: "",
  deactivated: false,
  versionId: "",
  resources: "",
};

export const Metadata = {
  encode(
    message: Metadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.created !== "") {
      writer.uint32(10).string(message.created);
    }
    if (message.updated !== "") {
      writer.uint32(18).string(message.updated);
    }
    if (message.deactivated === true) {
      writer.uint32(24).bool(message.deactivated);
    }
    if (message.versionId !== "") {
      writer.uint32(34).string(message.versionId);
    }
    for (const v of message.resources) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Metadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMetadata } as Metadata;
    message.resources = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.created = reader.string();
          break;
        case 2:
          message.updated = reader.string();
          break;
        case 3:
          message.deactivated = reader.bool();
          break;
        case 4:
          message.versionId = reader.string();
          break;
        case 5:
          message.resources.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Metadata {
    const message = { ...baseMetadata } as Metadata;
    message.resources = [];
    if (object.created !== undefined && object.created !== null) {
      message.created = String(object.created);
    } else {
      message.created = "";
    }
    if (object.updated !== undefined && object.updated !== null) {
      message.updated = String(object.updated);
    } else {
      message.updated = "";
    }
    if (object.deactivated !== undefined && object.deactivated !== null) {
      message.deactivated = Boolean(object.deactivated);
    } else {
      message.deactivated = false;
    }
    if (object.versionId !== undefined && object.versionId !== null) {
      message.versionId = String(object.versionId);
    } else {
      message.versionId = "";
    }
    if (object.resources !== undefined && object.resources !== null) {
      for (const e of object.resources) {
        message.resources.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: Metadata): unknown {
    const obj: any = {};
    message.created !== undefined && (obj.created = message.created);
    message.updated !== undefined && (obj.updated = message.updated);
    message.deactivated !== undefined &&
      (obj.deactivated = message.deactivated);
    message.versionId !== undefined && (obj.versionId = message.versionId);
    if (message.resources) {
      obj.resources = message.resources.map((e) => e);
    } else {
      obj.resources = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Metadata>): Metadata {
    const message = { ...baseMetadata } as Metadata;
    message.created = object.created ?? "";
    message.updated = object.updated ?? "";
    message.deactivated = object.deactivated ?? false;
    message.versionId = object.versionId ?? "";
    message.resources = [];
    if (object.resources !== undefined && object.resources !== null) {
      for (const e of object.resources) {
        message.resources.push(e);
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
