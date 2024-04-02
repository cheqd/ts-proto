/* eslint-disable */
import _m0 from "protobufjs/minimal.js";
import { Any } from "../../../google/protobuf/any.js";

export interface StateValue {
  data:
    | Any
    | undefined;
  /** optional */
  metadata: Metadata | undefined;
}

/** metadata */
export interface Metadata {
  created: string;
  updated: string;
  deactivated: boolean;
  versionId: string;
  resources: string[];
}

function createBaseStateValue(): StateValue {
  return { data: undefined, metadata: undefined };
}

export const StateValue = {
  encode(message: StateValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== undefined) {
      Any.encode(message.data, writer.uint32(10).fork()).ldelim();
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StateValue {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStateValue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = Any.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.metadata = Metadata.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StateValue {
    return {
      data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
      metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined,
    };
  },

  toJSON(message: StateValue): unknown {
    const obj: any = {};
    if (message.data !== undefined) {
      obj.data = Any.toJSON(message.data);
    }
    if (message.metadata !== undefined) {
      obj.metadata = Metadata.toJSON(message.metadata);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StateValue>, I>>(base?: I): StateValue {
    return StateValue.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StateValue>, I>>(object: I): StateValue {
    const message = createBaseStateValue();
    message.data = (object.data !== undefined && object.data !== null) ? Any.fromPartial(object.data) : undefined;
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? Metadata.fromPartial(object.metadata)
      : undefined;
    return message;
  },
};

function createBaseMetadata(): Metadata {
  return { created: "", updated: "", deactivated: false, versionId: "", resources: [] };
}

export const Metadata = {
  encode(message: Metadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.created = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.updated = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.deactivated = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.versionId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.resources.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Metadata {
    return {
      created: isSet(object.created) ? globalThis.String(object.created) : "",
      updated: isSet(object.updated) ? globalThis.String(object.updated) : "",
      deactivated: isSet(object.deactivated) ? globalThis.Boolean(object.deactivated) : false,
      versionId: isSet(object.versionId) ? globalThis.String(object.versionId) : "",
      resources: globalThis.Array.isArray(object?.resources)
        ? object.resources.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: Metadata): unknown {
    const obj: any = {};
    if (message.created !== "") {
      obj.created = message.created;
    }
    if (message.updated !== "") {
      obj.updated = message.updated;
    }
    if (message.deactivated === true) {
      obj.deactivated = message.deactivated;
    }
    if (message.versionId !== "") {
      obj.versionId = message.versionId;
    }
    if (message.resources?.length) {
      obj.resources = message.resources;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Metadata>, I>>(base?: I): Metadata {
    return Metadata.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Metadata>, I>>(object: I): Metadata {
    const message = createBaseMetadata();
    message.created = object.created ?? "";
    message.updated = object.updated ?? "";
    message.deactivated = object.deactivated ?? false;
    message.versionId = object.versionId ?? "";
    message.resources = object.resources?.map((e) => e) || [];
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
