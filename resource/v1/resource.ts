/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "cheqdid.cheqdnode.resource.v1";

export interface Resource {
  header?: ResourceHeader;
  data: Uint8Array;
}

export interface ResourceHeader {
  collectionId: string;
  id: string;
  name: string;
  resourceType: string;
  mediaType: string;
  created: string;
  checksum: Uint8Array;
  previousVersionId: string;
  nextVersionId: string;
}

const baseResource: object = {};

export const Resource = {
  encode(
    message: Resource,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.header !== undefined) {
      ResourceHeader.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResource } as Resource;
    message.data = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = ResourceHeader.decode(reader, reader.uint32());
          break;
        case 2:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Resource {
    const message = { ...baseResource } as Resource;
    message.data = new Uint8Array();
    if (object.header !== undefined && object.header !== null) {
      message.header = ResourceHeader.fromJSON(object.header);
    } else {
      message.header = undefined;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },

  toJSON(message: Resource): unknown {
    const obj: any = {};
    message.header !== undefined &&
      (obj.header = message.header
        ? ResourceHeader.toJSON(message.header)
        : undefined);
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<Resource>): Resource {
    const message = { ...baseResource } as Resource;
    if (object.header !== undefined && object.header !== null) {
      message.header = ResourceHeader.fromPartial(object.header);
    } else {
      message.header = undefined;
    }
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};

const baseResourceHeader: object = {
  collectionId: "",
  id: "",
  name: "",
  resourceType: "",
  mediaType: "",
  created: "",
  previousVersionId: "",
  nextVersionId: "",
};

export const ResourceHeader = {
  encode(
    message: ResourceHeader,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.resourceType !== "") {
      writer.uint32(34).string(message.resourceType);
    }
    if (message.mediaType !== "") {
      writer.uint32(42).string(message.mediaType);
    }
    if (message.created !== "") {
      writer.uint32(50).string(message.created);
    }
    if (message.checksum.length !== 0) {
      writer.uint32(58).bytes(message.checksum);
    }
    if (message.previousVersionId !== "") {
      writer.uint32(66).string(message.previousVersionId);
    }
    if (message.nextVersionId !== "") {
      writer.uint32(74).string(message.nextVersionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceHeader {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseResourceHeader } as ResourceHeader;
    message.checksum = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collectionId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.resourceType = reader.string();
          break;
        case 5:
          message.mediaType = reader.string();
          break;
        case 6:
          message.created = reader.string();
          break;
        case 7:
          message.checksum = reader.bytes();
          break;
        case 8:
          message.previousVersionId = reader.string();
          break;
        case 9:
          message.nextVersionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ResourceHeader {
    const message = { ...baseResourceHeader } as ResourceHeader;
    message.checksum = new Uint8Array();
    if (object.collectionId !== undefined && object.collectionId !== null) {
      message.collectionId = String(object.collectionId);
    } else {
      message.collectionId = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.resourceType !== undefined && object.resourceType !== null) {
      message.resourceType = String(object.resourceType);
    } else {
      message.resourceType = "";
    }
    if (object.mediaType !== undefined && object.mediaType !== null) {
      message.mediaType = String(object.mediaType);
    } else {
      message.mediaType = "";
    }
    if (object.created !== undefined && object.created !== null) {
      message.created = String(object.created);
    } else {
      message.created = "";
    }
    if (object.checksum !== undefined && object.checksum !== null) {
      message.checksum = bytesFromBase64(object.checksum);
    }
    if (
      object.previousVersionId !== undefined &&
      object.previousVersionId !== null
    ) {
      message.previousVersionId = String(object.previousVersionId);
    } else {
      message.previousVersionId = "";
    }
    if (object.nextVersionId !== undefined && object.nextVersionId !== null) {
      message.nextVersionId = String(object.nextVersionId);
    } else {
      message.nextVersionId = "";
    }
    return message;
  },

  toJSON(message: ResourceHeader): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.resourceType !== undefined &&
      (obj.resourceType = message.resourceType);
    message.mediaType !== undefined && (obj.mediaType = message.mediaType);
    message.created !== undefined && (obj.created = message.created);
    message.checksum !== undefined &&
      (obj.checksum = base64FromBytes(
        message.checksum !== undefined ? message.checksum : new Uint8Array()
      ));
    message.previousVersionId !== undefined &&
      (obj.previousVersionId = message.previousVersionId);
    message.nextVersionId !== undefined &&
      (obj.nextVersionId = message.nextVersionId);
    return obj;
  },

  fromPartial(object: DeepPartial<ResourceHeader>): ResourceHeader {
    const message = { ...baseResourceHeader } as ResourceHeader;
    message.collectionId = object.collectionId ?? "";
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.resourceType = object.resourceType ?? "";
    message.mediaType = object.mediaType ?? "";
    message.created = object.created ?? "";
    message.checksum = object.checksum ?? new Uint8Array();
    message.previousVersionId = object.previousVersionId ?? "";
    message.nextVersionId = object.nextVersionId ?? "";
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(""));
}

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
