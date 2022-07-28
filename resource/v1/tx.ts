/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Resource } from "./resource";
import { SignInfo } from "../../cheqd/v1/tx";

export const protobufPackage = "cheqdid.cheqdnode.resource.v1";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateResource {
  payload?: MsgCreateResourcePayload;
  signatures: SignInfo[];
}

export interface MsgCreateResourcePayload {
  collectionId: string;
  id: string;
  name: string;
  resourceType: string;
  data: Uint8Array;
}

export interface MsgCreateResourceResponse {
  /** Not necessary */
  resource?: Resource;
}

const baseMsgCreateResource: object = {};

export const MsgCreateResource = {
  encode(
    message: MsgCreateResource,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.payload !== undefined) {
      MsgCreateResourcePayload.encode(
        message.payload,
        writer.uint32(10).fork()
      ).ldelim();
    }
    for (const v of message.signatures) {
      SignInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResource {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateResource } as MsgCreateResource;
    message.signatures = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = MsgCreateResourcePayload.decode(
            reader,
            reader.uint32()
          );
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
    const message = { ...baseMsgCreateResource } as MsgCreateResource;
    message.signatures = [];
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = MsgCreateResourcePayload.fromJSON(object.payload);
    } else {
      message.payload = undefined;
    }
    if (object.signatures !== undefined && object.signatures !== null) {
      for (const e of object.signatures) {
        message.signatures.push(SignInfo.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgCreateResource): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload
        ? MsgCreateResourcePayload.toJSON(message.payload)
        : undefined);
    if (message.signatures) {
      obj.signatures = message.signatures.map((e) =>
        e ? SignInfo.toJSON(e) : undefined
      );
    } else {
      obj.signatures = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateResource>): MsgCreateResource {
    const message = { ...baseMsgCreateResource } as MsgCreateResource;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = MsgCreateResourcePayload.fromPartial(object.payload);
    } else {
      message.payload = undefined;
    }
    message.signatures = [];
    if (object.signatures !== undefined && object.signatures !== null) {
      for (const e of object.signatures) {
        message.signatures.push(SignInfo.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgCreateResourcePayload: object = {
  collectionId: "",
  id: "",
  name: "",
  resourceType: "",
};

export const MsgCreateResourcePayload = {
  encode(
    message: MsgCreateResourcePayload,
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
    if (message.data.length !== 0) {
      writer.uint32(50).bytes(message.data);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateResourcePayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateResourcePayload,
    } as MsgCreateResourcePayload;
    message.data = new Uint8Array();
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
        case 6:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateResourcePayload {
    const message = {
      ...baseMsgCreateResourcePayload,
    } as MsgCreateResourcePayload;
    message.data = new Uint8Array();
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
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },

  toJSON(message: MsgCreateResourcePayload): unknown {
    const obj: any = {};
    message.collectionId !== undefined &&
      (obj.collectionId = message.collectionId);
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.resourceType !== undefined &&
      (obj.resourceType = message.resourceType);
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateResourcePayload>
  ): MsgCreateResourcePayload {
    const message = {
      ...baseMsgCreateResourcePayload,
    } as MsgCreateResourcePayload;
    message.collectionId = object.collectionId ?? "";
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.resourceType = object.resourceType ?? "";
    message.data = object.data ?? new Uint8Array();
    return message;
  },
};

const baseMsgCreateResourceResponse: object = {};

export const MsgCreateResourceResponse = {
  encode(
    message: MsgCreateResourceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.resource !== undefined) {
      Resource.encode(message.resource, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateResourceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateResourceResponse,
    } as MsgCreateResourceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resource = Resource.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateResourceResponse {
    const message = {
      ...baseMsgCreateResourceResponse,
    } as MsgCreateResourceResponse;
    if (object.resource !== undefined && object.resource !== null) {
      message.resource = Resource.fromJSON(object.resource);
    } else {
      message.resource = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateResourceResponse): unknown {
    const obj: any = {};
    message.resource !== undefined &&
      (obj.resource = message.resource
        ? Resource.toJSON(message.resource)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateResourceResponse>
  ): MsgCreateResourceResponse {
    const message = {
      ...baseMsgCreateResourceResponse,
    } as MsgCreateResourceResponse;
    if (object.resource !== undefined && object.resource !== null) {
      message.resource = Resource.fromPartial(object.resource);
    } else {
      message.resource = undefined;
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateResource(
    request: MsgCreateResource
  ): Promise<MsgCreateResourceResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateResource = this.CreateResource.bind(this);
  }
  CreateResource(
    request: MsgCreateResource
  ): Promise<MsgCreateResourceResponse> {
    const data = MsgCreateResource.encode(request).finish();
    const promise = this.rpc.request(
      "cheqdid.cheqdnode.resource.v1.Msg",
      "CreateResource",
      data
    );
    return promise.then((data) =>
      MsgCreateResourceResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
