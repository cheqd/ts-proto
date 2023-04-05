/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { SignInfo } from "../../did/v2/tx";
import { AlternativeUri, Metadata } from "./resource";

/**
 * MsgCreateResource defines the Msg/CreateResource request type.
 * It describes the parameters of a request for creating a resource.
 */
export interface MsgCreateResource {
  /** Payload containing the resource to be created. */
  payload:
    | MsgCreateResourcePayload
    | undefined;
  /** Signatures of the corresponding DID Document's controller(s). */
  signatures: SignInfo[];
}

/**
 * MsgCreateResourcePayload defines the structure of the payload for creating a resource.
 *
 * If a resource with the given id does not exist already,
 * it will be created. The resource will be created in the resource collection.
 *
 * If a resource with the given id, collection_id already exists, an error code 2200 will be returned.
 *
 * A new version of the resource in an existing collection will be created,
 * if a resource in that collection with the same name, resource_type and empty next_version_id exists.
 *
 * An update operation is not possible, because the resource is immutable by design.
 */
export interface MsgCreateResourcePayload {
  /** data is a byte-representation of the actual Data the user wants to store. */
  data: Uint8Array;
  /**
   * collection_id is an identifier of the DidDocument the resource belongs to.
   * Format: <unique-identifier>
   *
   * Examples:
   * - c82f2b02-bdab-4dd7-b833-3e143745d612
   * - wGHEXrZvJxR8vw5P3UWH1j
   */
  collectionId: string;
  /**
   * id is a unique id of the resource.
   * Format: <uuid>
   */
  id: string;
  /**
   * name is a human-readable name of the resource.
   * Format: <string>
   *
   * Does not change between different versions.
   * Example: PassportSchema, EducationTrustRegistry
   */
  name: string;
  /**
   * version is a version of the resource.
   * Format: <string>
   * Stored as a string. OPTIONAL.
   *
   * Example: 1.0.0, v2.1.0
   */
  version: string;
  /**
   * resource_type is a type of the resource.
   * Format: <string>
   *
   * This is NOT the same as the resource's media type.
   * Example: AnonCredsSchema, StatusList2021
   */
  resourceType: string;
  /** also_known_as is a list of URIs that can be used to get the resource. */
  alsoKnownAs: AlternativeUri[];
}

export interface MsgCreateResourceResponse {
  /** Return the created resource metadata. */
  resource: Metadata | undefined;
}

function createBaseMsgCreateResource(): MsgCreateResource {
  return { payload: undefined, signatures: [] };
}

export const MsgCreateResource = {
  encode(message: MsgCreateResource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      MsgCreateResourcePayload.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.signatures) {
      SignInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateResource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = MsgCreateResourcePayload.decode(reader, reader.uint32());
          break;
        case 2:
          message.signatures.push(SignInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateResource {
    return {
      payload: isSet(object.payload) ? MsgCreateResourcePayload.fromJSON(object.payload) : undefined,
      signatures: Array.isArray(object?.signatures) ? object.signatures.map((e: any) => SignInfo.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgCreateResource): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload ? MsgCreateResourcePayload.toJSON(message.payload) : undefined);
    if (message.signatures) {
      obj.signatures = message.signatures.map((e) => e ? SignInfo.toJSON(e) : undefined);
    } else {
      obj.signatures = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateResource>, I>>(base?: I): MsgCreateResource {
    return MsgCreateResource.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateResource>, I>>(object: I): MsgCreateResource {
    const message = createBaseMsgCreateResource();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? MsgCreateResourcePayload.fromPartial(object.payload)
      : undefined;
    message.signatures = object.signatures?.map((e) => SignInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgCreateResourcePayload(): MsgCreateResourcePayload {
  return { data: new Uint8Array(), collectionId: "", id: "", name: "", version: "", resourceType: "", alsoKnownAs: [] };
}

export const MsgCreateResourcePayload = {
  encode(message: MsgCreateResourcePayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.collectionId !== "") {
      writer.uint32(18).string(message.collectionId);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.version !== "") {
      writer.uint32(42).string(message.version);
    }
    if (message.resourceType !== "") {
      writer.uint32(50).string(message.resourceType);
    }
    for (const v of message.alsoKnownAs) {
      AlternativeUri.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResourcePayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateResourcePayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes();
          break;
        case 2:
          message.collectionId = reader.string();
          break;
        case 3:
          message.id = reader.string();
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.version = reader.string();
          break;
        case 6:
          message.resourceType = reader.string();
          break;
        case 7:
          message.alsoKnownAs.push(AlternativeUri.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateResourcePayload {
    return {
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      collectionId: isSet(object.collectionId) ? String(object.collectionId) : "",
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      version: isSet(object.version) ? String(object.version) : "",
      resourceType: isSet(object.resourceType) ? String(object.resourceType) : "",
      alsoKnownAs: Array.isArray(object?.alsoKnownAs)
        ? object.alsoKnownAs.map((e: any) => AlternativeUri.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgCreateResourcePayload): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
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
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateResourcePayload>, I>>(base?: I): MsgCreateResourcePayload {
    return MsgCreateResourcePayload.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateResourcePayload>, I>>(object: I): MsgCreateResourcePayload {
    const message = createBaseMsgCreateResourcePayload();
    message.data = object.data ?? new Uint8Array();
    message.collectionId = object.collectionId ?? "";
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.version = object.version ?? "";
    message.resourceType = object.resourceType ?? "";
    message.alsoKnownAs = object.alsoKnownAs?.map((e) => AlternativeUri.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgCreateResourceResponse(): MsgCreateResourceResponse {
  return { resource: undefined };
}

export const MsgCreateResourceResponse = {
  encode(message: MsgCreateResourceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resource !== undefined) {
      Metadata.encode(message.resource, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResourceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateResourceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resource = Metadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateResourceResponse {
    return { resource: isSet(object.resource) ? Metadata.fromJSON(object.resource) : undefined };
  },

  toJSON(message: MsgCreateResourceResponse): unknown {
    const obj: any = {};
    message.resource !== undefined && (obj.resource = message.resource ? Metadata.toJSON(message.resource) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateResourceResponse>, I>>(base?: I): MsgCreateResourceResponse {
    return MsgCreateResourceResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateResourceResponse>, I>>(object: I): MsgCreateResourceResponse {
    const message = createBaseMsgCreateResourceResponse();
    message.resource = (object.resource !== undefined && object.resource !== null)
      ? Metadata.fromPartial(object.resource)
      : undefined;
    return message;
  },
};

/** Msg defines the Cosmos SDK Msg service for the cheqd.resource.v2 module. */
export interface Msg {
  /** CreateResource defines a method for creating a resource. */
  CreateResource(request: MsgCreateResource): Promise<MsgCreateResourceResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "cheqd.resource.v2.Msg";
    this.rpc = rpc;
    this.CreateResource = this.CreateResource.bind(this);
  }
  CreateResource(request: MsgCreateResource): Promise<MsgCreateResourceResponse> {
    const data = MsgCreateResource.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateResource", data);
    return promise.then((data) => MsgCreateResourceResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
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
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

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
