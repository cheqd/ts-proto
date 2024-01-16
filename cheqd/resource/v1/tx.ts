/* eslint-disable */
import _m0 from "protobufjs/minimal.js";
import { SignInfo } from "../../did/v1/tx.js";
import { Resource } from "./resource.js";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateResource {
  payload: MsgCreateResourcePayload | undefined;
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
  resource: Resource | undefined;
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateResource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = MsgCreateResourcePayload.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.signatures.push(SignInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateResource {
    return {
      payload: isSet(object.payload) ? MsgCreateResourcePayload.fromJSON(object.payload) : undefined,
      signatures: globalThis.Array.isArray(object?.signatures)
        ? object.signatures.map((e: any) => SignInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgCreateResource): unknown {
    const obj: any = {};
    if (message.payload !== undefined) {
      obj.payload = MsgCreateResourcePayload.toJSON(message.payload);
    }
    if (message.signatures?.length) {
      obj.signatures = message.signatures.map((e) => SignInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateResource>, I>>(base?: I): MsgCreateResource {
    return MsgCreateResource.fromPartial(base ?? ({} as any));
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
  return { collectionId: "", id: "", name: "", resourceType: "", data: new Uint8Array(0) };
}

export const MsgCreateResourcePayload = {
  encode(message: MsgCreateResourcePayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResourcePayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateResourcePayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.collectionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.id = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.name = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.resourceType = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.data = reader.bytes();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateResourcePayload {
    return {
      collectionId: isSet(object.collectionId) ? globalThis.String(object.collectionId) : "",
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      resourceType: isSet(object.resourceType) ? globalThis.String(object.resourceType) : "",
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(0),
    };
  },

  toJSON(message: MsgCreateResourcePayload): unknown {
    const obj: any = {};
    if (message.collectionId !== "") {
      obj.collectionId = message.collectionId;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.resourceType !== "") {
      obj.resourceType = message.resourceType;
    }
    if (message.data.length !== 0) {
      obj.data = base64FromBytes(message.data);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateResourcePayload>, I>>(base?: I): MsgCreateResourcePayload {
    return MsgCreateResourcePayload.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateResourcePayload>, I>>(object: I): MsgCreateResourcePayload {
    const message = createBaseMsgCreateResourcePayload();
    message.collectionId = object.collectionId ?? "";
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.resourceType = object.resourceType ?? "";
    message.data = object.data ?? new Uint8Array(0);
    return message;
  },
};

function createBaseMsgCreateResourceResponse(): MsgCreateResourceResponse {
  return { resource: undefined };
}

export const MsgCreateResourceResponse = {
  encode(message: MsgCreateResourceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resource !== undefined) {
      Resource.encode(message.resource, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResourceResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateResourceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resource = Resource.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateResourceResponse {
    return { resource: isSet(object.resource) ? Resource.fromJSON(object.resource) : undefined };
  },

  toJSON(message: MsgCreateResourceResponse): unknown {
    const obj: any = {};
    if (message.resource !== undefined) {
      obj.resource = Resource.toJSON(message.resource);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateResourceResponse>, I>>(base?: I): MsgCreateResourceResponse {
    return MsgCreateResourceResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateResourceResponse>, I>>(object: I): MsgCreateResourceResponse {
    const message = createBaseMsgCreateResourceResponse();
    message.resource = (object.resource !== undefined && object.resource !== null)
      ? Resource.fromPartial(object.resource)
      : undefined;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateResource(request: MsgCreateResource): Promise<MsgCreateResourceResponse>;
}

export const MsgServiceName = "cheqdid.cheqdnode.resource.v1.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.CreateResource = this.CreateResource.bind(this);
  }
  CreateResource(request: MsgCreateResource): Promise<MsgCreateResourceResponse> {
    const data = MsgCreateResource.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateResource", data);
    return promise.then((data) => MsgCreateResourceResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
      bin.push(globalThis.String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

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
