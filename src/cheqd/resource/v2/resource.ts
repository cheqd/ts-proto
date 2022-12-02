/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";

export const protobufPackage = "cheqd.resource.v2";

export interface Resource {
  $type: "cheqd.resource.v2.Resource";
  data: Uint8Array;
}

export interface ResourceWithMetadata {
  $type: "cheqd.resource.v2.ResourceWithMetadata";
  resource: Resource | undefined;
  metadata: Metadata | undefined;
}

export interface AlternativeUri {
  $type: "cheqd.resource.v2.AlternativeUri";
  uri: string;
  description: string;
}

export interface Metadata {
  $type: "cheqd.resource.v2.Metadata";
  collectionId: string;
  id: string;
  name: string;
  version: string;
  resourceType: string;
  alsoKnownAs: AlternativeUri[];
  mediaType: string;
  created: string;
  checksum: Uint8Array;
  previousVersionId: string;
  nextVersionId: string;
}

function createBaseResource(): Resource {
  return { $type: "cheqd.resource.v2.Resource", data: new Uint8Array() };
}

export const Resource = {
  $type: "cheqd.resource.v2.Resource" as const,

  encode(message: Resource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Resource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
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
    return { $type: Resource.$type, data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array() };
  },

  toJSON(message: Resource): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Resource>, I>>(object: I): Resource {
    const message = createBaseResource();
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(Resource.$type, Resource);

function createBaseResourceWithMetadata(): ResourceWithMetadata {
  return { $type: "cheqd.resource.v2.ResourceWithMetadata", resource: undefined, metadata: undefined };
}

export const ResourceWithMetadata = {
  $type: "cheqd.resource.v2.ResourceWithMetadata" as const,

  encode(message: ResourceWithMetadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resource !== undefined) {
      Resource.encode(message.resource, writer.uint32(10).fork()).ldelim();
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResourceWithMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceWithMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resource = Resource.decode(reader, reader.uint32());
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

  fromJSON(object: any): ResourceWithMetadata {
    return {
      $type: ResourceWithMetadata.$type,
      resource: isSet(object.resource) ? Resource.fromJSON(object.resource) : undefined,
      metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined,
    };
  },

  toJSON(message: ResourceWithMetadata): unknown {
    const obj: any = {};
    message.resource !== undefined && (obj.resource = message.resource ? Resource.toJSON(message.resource) : undefined);
    message.metadata !== undefined && (obj.metadata = message.metadata ? Metadata.toJSON(message.metadata) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ResourceWithMetadata>, I>>(object: I): ResourceWithMetadata {
    const message = createBaseResourceWithMetadata();
    message.resource = (object.resource !== undefined && object.resource !== null)
      ? Resource.fromPartial(object.resource)
      : undefined;
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? Metadata.fromPartial(object.metadata)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(ResourceWithMetadata.$type, ResourceWithMetadata);

function createBaseAlternativeUri(): AlternativeUri {
  return { $type: "cheqd.resource.v2.AlternativeUri", uri: "", description: "" };
}

export const AlternativeUri = {
  $type: "cheqd.resource.v2.AlternativeUri" as const,

  encode(message: AlternativeUri, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uri !== "") {
      writer.uint32(10).string(message.uri);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AlternativeUri {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAlternativeUri();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uri = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AlternativeUri {
    return {
      $type: AlternativeUri.$type,
      uri: isSet(object.uri) ? String(object.uri) : "",
      description: isSet(object.description) ? String(object.description) : "",
    };
  },

  toJSON(message: AlternativeUri): unknown {
    const obj: any = {};
    message.uri !== undefined && (obj.uri = message.uri);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AlternativeUri>, I>>(object: I): AlternativeUri {
    const message = createBaseAlternativeUri();
    message.uri = object.uri ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

messageTypeRegistry.set(AlternativeUri.$type, AlternativeUri);

function createBaseMetadata(): Metadata {
  return {
    $type: "cheqd.resource.v2.Metadata",
    collectionId: "",
    id: "",
    name: "",
    version: "",
    resourceType: "",
    alsoKnownAs: [],
    mediaType: "",
    created: "",
    checksum: new Uint8Array(),
    previousVersionId: "",
    nextVersionId: "",
  };
}

export const Metadata = {
  $type: "cheqd.resource.v2.Metadata" as const,

  encode(message: Metadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collectionId !== "") {
      writer.uint32(10).string(message.collectionId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.version !== "") {
      writer.uint32(34).string(message.version);
    }
    if (message.resourceType !== "") {
      writer.uint32(42).string(message.resourceType);
    }
    for (const v of message.alsoKnownAs) {
      AlternativeUri.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    if (message.mediaType !== "") {
      writer.uint32(58).string(message.mediaType);
    }
    if (message.created !== "") {
      writer.uint32(66).string(message.created);
    }
    if (message.checksum.length !== 0) {
      writer.uint32(74).bytes(message.checksum);
    }
    if (message.previousVersionId !== "") {
      writer.uint32(82).string(message.previousVersionId);
    }
    if (message.nextVersionId !== "") {
      writer.uint32(90).string(message.nextVersionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Metadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata();
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
          message.version = reader.string();
          break;
        case 5:
          message.resourceType = reader.string();
          break;
        case 6:
          message.alsoKnownAs.push(AlternativeUri.decode(reader, reader.uint32()));
          break;
        case 7:
          message.mediaType = reader.string();
          break;
        case 8:
          message.created = reader.string();
          break;
        case 9:
          message.checksum = reader.bytes();
          break;
        case 10:
          message.previousVersionId = reader.string();
          break;
        case 11:
          message.nextVersionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Metadata {
    return {
      $type: Metadata.$type,
      collectionId: isSet(object.collectionId) ? String(object.collectionId) : "",
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      version: isSet(object.version) ? String(object.version) : "",
      resourceType: isSet(object.resourceType) ? String(object.resourceType) : "",
      alsoKnownAs: Array.isArray(object?.alsoKnownAs)
        ? object.alsoKnownAs.map((e: any) => AlternativeUri.fromJSON(e))
        : [],
      mediaType: isSet(object.mediaType) ? String(object.mediaType) : "",
      created: isSet(object.created) ? String(object.created) : "",
      checksum: isSet(object.checksum) ? bytesFromBase64(object.checksum) : new Uint8Array(),
      previousVersionId: isSet(object.previousVersionId) ? String(object.previousVersionId) : "",
      nextVersionId: isSet(object.nextVersionId) ? String(object.nextVersionId) : "",
    };
  },

  toJSON(message: Metadata): unknown {
    const obj: any = {};
    message.collectionId !== undefined && (obj.collectionId = message.collectionId);
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.version !== undefined && (obj.version = message.version);
    message.resourceType !== undefined && (obj.resourceType = message.resourceType);
    if (message.alsoKnownAs) {
      obj.alsoKnownAs = message.alsoKnownAs.map((e) => e ? AlternativeUri.toJSON(e) : undefined);
    } else {
      obj.alsoKnownAs = [];
    }
    message.mediaType !== undefined && (obj.mediaType = message.mediaType);
    message.created !== undefined && (obj.created = message.created);
    message.checksum !== undefined &&
      (obj.checksum = base64FromBytes(message.checksum !== undefined ? message.checksum : new Uint8Array()));
    message.previousVersionId !== undefined && (obj.previousVersionId = message.previousVersionId);
    message.nextVersionId !== undefined && (obj.nextVersionId = message.nextVersionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Metadata>, I>>(object: I): Metadata {
    const message = createBaseMetadata();
    message.collectionId = object.collectionId ?? "";
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.version = object.version ?? "";
    message.resourceType = object.resourceType ?? "";
    message.alsoKnownAs = object.alsoKnownAs?.map((e) => AlternativeUri.fromPartial(e)) || [];
    message.mediaType = object.mediaType ?? "";
    message.created = object.created ?? "";
    message.checksum = object.checksum ?? new Uint8Array();
    message.previousVersionId = object.previousVersionId ?? "";
    message.nextVersionId = object.nextVersionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(Metadata.$type, Metadata);

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

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
