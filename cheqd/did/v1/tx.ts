/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import { Did, Service, VerificationMethod } from "./did.js";
import { Metadata } from "./stateValue.js";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateDid {
  payload: MsgCreateDidPayload | undefined;
  signatures: SignInfo[];
}

export interface MsgUpdateDid {
  payload: MsgUpdateDidPayload | undefined;
  signatures: SignInfo[];
}

export interface MsgDeactivateDid {
  payload: MsgDeactivateDidPayload | undefined;
  signatures: SignInfo[];
}

export interface SignInfo {
  verificationMethodId: string;
  signature: string;
}

export interface MsgDeactivateDidPayload {
  id: string;
}

export interface MsgDeactivateDidResponse {
  did: Did | undefined;
  metadata: Metadata | undefined;
}

export interface MsgCreateDidPayload {
  context: string[];
  id: string;
  controller: string[];
  verificationMethod: VerificationMethod[];
  authentication: string[];
  assertionMethod: string[];
  capabilityInvocation: string[];
  capabilityDelegation: string[];
  keyAgreement: string[];
  alsoKnownAs: string[];
  service: Service[];
}

export interface MsgCreateDidResponse {
  /** Not necessary */
  id: string;
}

export interface MsgUpdateDidPayload {
  context: string[];
  id: string;
  controller: string[];
  verificationMethod: VerificationMethod[];
  authentication: string[];
  assertionMethod: string[];
  capabilityInvocation: string[];
  capabilityDelegation: string[];
  keyAgreement: string[];
  alsoKnownAs: string[];
  service: Service[];
  versionId: string;
}

export interface MsgUpdateDidResponse {
  /** Not necessary */
  id: string;
}

function createBaseMsgCreateDid(): MsgCreateDid {
  return { payload: undefined, signatures: [] };
}

export const MsgCreateDid = {
  encode(message: MsgCreateDid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      MsgCreateDidPayload.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.signatures) {
      SignInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDid {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = MsgCreateDidPayload.decode(reader, reader.uint32());
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

  fromJSON(object: any): MsgCreateDid {
    return {
      payload: isSet(object.payload) ? MsgCreateDidPayload.fromJSON(object.payload) : undefined,
      signatures: globalThis.Array.isArray(object?.signatures)
        ? object.signatures.map((e: any) => SignInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgCreateDid): unknown {
    const obj: any = {};
    if (message.payload !== undefined) {
      obj.payload = MsgCreateDidPayload.toJSON(message.payload);
    }
    if (message.signatures?.length) {
      obj.signatures = message.signatures.map((e) => SignInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateDid>, I>>(base?: I): MsgCreateDid {
    return MsgCreateDid.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateDid>, I>>(object: I): MsgCreateDid {
    const message = createBaseMsgCreateDid();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? MsgCreateDidPayload.fromPartial(object.payload)
      : undefined;
    message.signatures = object.signatures?.map((e) => SignInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgUpdateDid(): MsgUpdateDid {
  return { payload: undefined, signatures: [] };
}

export const MsgUpdateDid = {
  encode(message: MsgUpdateDid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      MsgUpdateDidPayload.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.signatures) {
      SignInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDid {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = MsgUpdateDidPayload.decode(reader, reader.uint32());
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

  fromJSON(object: any): MsgUpdateDid {
    return {
      payload: isSet(object.payload) ? MsgUpdateDidPayload.fromJSON(object.payload) : undefined,
      signatures: globalThis.Array.isArray(object?.signatures)
        ? object.signatures.map((e: any) => SignInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgUpdateDid): unknown {
    const obj: any = {};
    if (message.payload !== undefined) {
      obj.payload = MsgUpdateDidPayload.toJSON(message.payload);
    }
    if (message.signatures?.length) {
      obj.signatures = message.signatures.map((e) => SignInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateDid>, I>>(base?: I): MsgUpdateDid {
    return MsgUpdateDid.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateDid>, I>>(object: I): MsgUpdateDid {
    const message = createBaseMsgUpdateDid();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? MsgUpdateDidPayload.fromPartial(object.payload)
      : undefined;
    message.signatures = object.signatures?.map((e) => SignInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgDeactivateDid(): MsgDeactivateDid {
  return { payload: undefined, signatures: [] };
}

export const MsgDeactivateDid = {
  encode(message: MsgDeactivateDid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      MsgDeactivateDidPayload.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.signatures) {
      SignInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeactivateDid {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeactivateDid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.payload = MsgDeactivateDidPayload.decode(reader, reader.uint32());
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

  fromJSON(object: any): MsgDeactivateDid {
    return {
      payload: isSet(object.payload) ? MsgDeactivateDidPayload.fromJSON(object.payload) : undefined,
      signatures: globalThis.Array.isArray(object?.signatures)
        ? object.signatures.map((e: any) => SignInfo.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgDeactivateDid): unknown {
    const obj: any = {};
    if (message.payload !== undefined) {
      obj.payload = MsgDeactivateDidPayload.toJSON(message.payload);
    }
    if (message.signatures?.length) {
      obj.signatures = message.signatures.map((e) => SignInfo.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDeactivateDid>, I>>(base?: I): MsgDeactivateDid {
    return MsgDeactivateDid.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeactivateDid>, I>>(object: I): MsgDeactivateDid {
    const message = createBaseMsgDeactivateDid();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? MsgDeactivateDidPayload.fromPartial(object.payload)
      : undefined;
    message.signatures = object.signatures?.map((e) => SignInfo.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSignInfo(): SignInfo {
  return { verificationMethodId: "", signature: "" };
}

export const SignInfo = {
  encode(message: SignInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.verificationMethodId !== "") {
      writer.uint32(10).string(message.verificationMethodId);
    }
    if (message.signature !== "") {
      writer.uint32(18).string(message.signature);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignInfo {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.verificationMethodId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.signature = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SignInfo {
    return {
      verificationMethodId: isSet(object.verificationMethodId) ? globalThis.String(object.verificationMethodId) : "",
      signature: isSet(object.signature) ? globalThis.String(object.signature) : "",
    };
  },

  toJSON(message: SignInfo): unknown {
    const obj: any = {};
    if (message.verificationMethodId !== "") {
      obj.verificationMethodId = message.verificationMethodId;
    }
    if (message.signature !== "") {
      obj.signature = message.signature;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<SignInfo>, I>>(base?: I): SignInfo {
    return SignInfo.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<SignInfo>, I>>(object: I): SignInfo {
    const message = createBaseSignInfo();
    message.verificationMethodId = object.verificationMethodId ?? "";
    message.signature = object.signature ?? "";
    return message;
  },
};

function createBaseMsgDeactivateDidPayload(): MsgDeactivateDidPayload {
  return { id: "" };
}

export const MsgDeactivateDidPayload = {
  encode(message: MsgDeactivateDidPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeactivateDidPayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeactivateDidPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgDeactivateDidPayload {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: MsgDeactivateDidPayload): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDeactivateDidPayload>, I>>(base?: I): MsgDeactivateDidPayload {
    return MsgDeactivateDidPayload.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeactivateDidPayload>, I>>(object: I): MsgDeactivateDidPayload {
    const message = createBaseMsgDeactivateDidPayload();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseMsgDeactivateDidResponse(): MsgDeactivateDidResponse {
  return { did: undefined, metadata: undefined };
}

export const MsgDeactivateDidResponse = {
  encode(message: MsgDeactivateDidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.did !== undefined) {
      Did.encode(message.did, writer.uint32(10).fork()).ldelim();
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeactivateDidResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeactivateDidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.did = Did.decode(reader, reader.uint32());
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

  fromJSON(object: any): MsgDeactivateDidResponse {
    return {
      did: isSet(object.did) ? Did.fromJSON(object.did) : undefined,
      metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined,
    };
  },

  toJSON(message: MsgDeactivateDidResponse): unknown {
    const obj: any = {};
    if (message.did !== undefined) {
      obj.did = Did.toJSON(message.did);
    }
    if (message.metadata !== undefined) {
      obj.metadata = Metadata.toJSON(message.metadata);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDeactivateDidResponse>, I>>(base?: I): MsgDeactivateDidResponse {
    return MsgDeactivateDidResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgDeactivateDidResponse>, I>>(object: I): MsgDeactivateDidResponse {
    const message = createBaseMsgDeactivateDidResponse();
    message.did = (object.did !== undefined && object.did !== null) ? Did.fromPartial(object.did) : undefined;
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? Metadata.fromPartial(object.metadata)
      : undefined;
    return message;
  },
};

function createBaseMsgCreateDidPayload(): MsgCreateDidPayload {
  return {
    context: [],
    id: "",
    controller: [],
    verificationMethod: [],
    authentication: [],
    assertionMethod: [],
    capabilityInvocation: [],
    capabilityDelegation: [],
    keyAgreement: [],
    alsoKnownAs: [],
    service: [],
  };
}

export const MsgCreateDidPayload = {
  encode(message: MsgCreateDidPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.context) {
      writer.uint32(10).string(v!);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    for (const v of message.controller) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.verificationMethod) {
      VerificationMethod.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.authentication) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.assertionMethod) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.capabilityInvocation) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.capabilityDelegation) {
      writer.uint32(66).string(v!);
    }
    for (const v of message.keyAgreement) {
      writer.uint32(74).string(v!);
    }
    for (const v of message.alsoKnownAs) {
      writer.uint32(82).string(v!);
    }
    for (const v of message.service) {
      Service.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDidPayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDidPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.context.push(reader.string());
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

          message.controller.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.verificationMethod.push(VerificationMethod.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.authentication.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.assertionMethod.push(reader.string());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.capabilityInvocation.push(reader.string());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.capabilityDelegation.push(reader.string());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.keyAgreement.push(reader.string());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.alsoKnownAs.push(reader.string());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.service.push(Service.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDidPayload {
    return {
      context: globalThis.Array.isArray(object?.context) ? object.context.map((e: any) => globalThis.String(e)) : [],
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      controller: globalThis.Array.isArray(object?.controller)
        ? object.controller.map((e: any) => globalThis.String(e))
        : [],
      verificationMethod: globalThis.Array.isArray(object?.verificationMethod)
        ? object.verificationMethod.map((e: any) => VerificationMethod.fromJSON(e))
        : [],
      authentication: globalThis.Array.isArray(object?.authentication)
        ? object.authentication.map((e: any) => globalThis.String(e))
        : [],
      assertionMethod: globalThis.Array.isArray(object?.assertionMethod)
        ? object.assertionMethod.map((e: any) => globalThis.String(e))
        : [],
      capabilityInvocation: globalThis.Array.isArray(object?.capabilityInvocation)
        ? object.capabilityInvocation.map((e: any) => globalThis.String(e))
        : [],
      capabilityDelegation: globalThis.Array.isArray(object?.capabilityDelegation)
        ? object.capabilityDelegation.map((e: any) => globalThis.String(e))
        : [],
      keyAgreement: globalThis.Array.isArray(object?.keyAgreement)
        ? object.keyAgreement.map((e: any) => globalThis.String(e))
        : [],
      alsoKnownAs: globalThis.Array.isArray(object?.alsoKnownAs)
        ? object.alsoKnownAs.map((e: any) => globalThis.String(e))
        : [],
      service: globalThis.Array.isArray(object?.service)
        ? object.service.map((e: any) => Service.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgCreateDidPayload): unknown {
    const obj: any = {};
    if (message.context?.length) {
      obj.context = message.context;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.controller?.length) {
      obj.controller = message.controller;
    }
    if (message.verificationMethod?.length) {
      obj.verificationMethod = message.verificationMethod.map((e) => VerificationMethod.toJSON(e));
    }
    if (message.authentication?.length) {
      obj.authentication = message.authentication;
    }
    if (message.assertionMethod?.length) {
      obj.assertionMethod = message.assertionMethod;
    }
    if (message.capabilityInvocation?.length) {
      obj.capabilityInvocation = message.capabilityInvocation;
    }
    if (message.capabilityDelegation?.length) {
      obj.capabilityDelegation = message.capabilityDelegation;
    }
    if (message.keyAgreement?.length) {
      obj.keyAgreement = message.keyAgreement;
    }
    if (message.alsoKnownAs?.length) {
      obj.alsoKnownAs = message.alsoKnownAs;
    }
    if (message.service?.length) {
      obj.service = message.service.map((e) => Service.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateDidPayload>, I>>(base?: I): MsgCreateDidPayload {
    return MsgCreateDidPayload.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateDidPayload>, I>>(object: I): MsgCreateDidPayload {
    const message = createBaseMsgCreateDidPayload();
    message.context = object.context?.map((e) => e) || [];
    message.id = object.id ?? "";
    message.controller = object.controller?.map((e) => e) || [];
    message.verificationMethod = object.verificationMethod?.map((e) => VerificationMethod.fromPartial(e)) || [];
    message.authentication = object.authentication?.map((e) => e) || [];
    message.assertionMethod = object.assertionMethod?.map((e) => e) || [];
    message.capabilityInvocation = object.capabilityInvocation?.map((e) => e) || [];
    message.capabilityDelegation = object.capabilityDelegation?.map((e) => e) || [];
    message.keyAgreement = object.keyAgreement?.map((e) => e) || [];
    message.alsoKnownAs = object.alsoKnownAs?.map((e) => e) || [];
    message.service = object.service?.map((e) => Service.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgCreateDidResponse(): MsgCreateDidResponse {
  return { id: "" };
}

export const MsgCreateDidResponse = {
  encode(message: MsgCreateDidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDidResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDidResponse {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: MsgCreateDidResponse): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateDidResponse>, I>>(base?: I): MsgCreateDidResponse {
    return MsgCreateDidResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgCreateDidResponse>, I>>(object: I): MsgCreateDidResponse {
    const message = createBaseMsgCreateDidResponse();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseMsgUpdateDidPayload(): MsgUpdateDidPayload {
  return {
    context: [],
    id: "",
    controller: [],
    verificationMethod: [],
    authentication: [],
    assertionMethod: [],
    capabilityInvocation: [],
    capabilityDelegation: [],
    keyAgreement: [],
    alsoKnownAs: [],
    service: [],
    versionId: "",
  };
}

export const MsgUpdateDidPayload = {
  encode(message: MsgUpdateDidPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.context) {
      writer.uint32(10).string(v!);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    for (const v of message.controller) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.verificationMethod) {
      VerificationMethod.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.authentication) {
      writer.uint32(42).string(v!);
    }
    for (const v of message.assertionMethod) {
      writer.uint32(50).string(v!);
    }
    for (const v of message.capabilityInvocation) {
      writer.uint32(58).string(v!);
    }
    for (const v of message.capabilityDelegation) {
      writer.uint32(66).string(v!);
    }
    for (const v of message.keyAgreement) {
      writer.uint32(74).string(v!);
    }
    for (const v of message.alsoKnownAs) {
      writer.uint32(82).string(v!);
    }
    for (const v of message.service) {
      Service.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    if (message.versionId !== "") {
      writer.uint32(98).string(message.versionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDidPayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDidPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.context.push(reader.string());
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

          message.controller.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.verificationMethod.push(VerificationMethod.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.authentication.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.assertionMethod.push(reader.string());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.capabilityInvocation.push(reader.string());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.capabilityDelegation.push(reader.string());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.keyAgreement.push(reader.string());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.alsoKnownAs.push(reader.string());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.service.push(Service.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.versionId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDidPayload {
    return {
      context: globalThis.Array.isArray(object?.context) ? object.context.map((e: any) => globalThis.String(e)) : [],
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      controller: globalThis.Array.isArray(object?.controller)
        ? object.controller.map((e: any) => globalThis.String(e))
        : [],
      verificationMethod: globalThis.Array.isArray(object?.verificationMethod)
        ? object.verificationMethod.map((e: any) => VerificationMethod.fromJSON(e))
        : [],
      authentication: globalThis.Array.isArray(object?.authentication)
        ? object.authentication.map((e: any) => globalThis.String(e))
        : [],
      assertionMethod: globalThis.Array.isArray(object?.assertionMethod)
        ? object.assertionMethod.map((e: any) => globalThis.String(e))
        : [],
      capabilityInvocation: globalThis.Array.isArray(object?.capabilityInvocation)
        ? object.capabilityInvocation.map((e: any) => globalThis.String(e))
        : [],
      capabilityDelegation: globalThis.Array.isArray(object?.capabilityDelegation)
        ? object.capabilityDelegation.map((e: any) => globalThis.String(e))
        : [],
      keyAgreement: globalThis.Array.isArray(object?.keyAgreement)
        ? object.keyAgreement.map((e: any) => globalThis.String(e))
        : [],
      alsoKnownAs: globalThis.Array.isArray(object?.alsoKnownAs)
        ? object.alsoKnownAs.map((e: any) => globalThis.String(e))
        : [],
      service: globalThis.Array.isArray(object?.service)
        ? object.service.map((e: any) => Service.fromJSON(e))
        : [],
      versionId: isSet(object.versionId) ? globalThis.String(object.versionId) : "",
    };
  },

  toJSON(message: MsgUpdateDidPayload): unknown {
    const obj: any = {};
    if (message.context?.length) {
      obj.context = message.context;
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.controller?.length) {
      obj.controller = message.controller;
    }
    if (message.verificationMethod?.length) {
      obj.verificationMethod = message.verificationMethod.map((e) => VerificationMethod.toJSON(e));
    }
    if (message.authentication?.length) {
      obj.authentication = message.authentication;
    }
    if (message.assertionMethod?.length) {
      obj.assertionMethod = message.assertionMethod;
    }
    if (message.capabilityInvocation?.length) {
      obj.capabilityInvocation = message.capabilityInvocation;
    }
    if (message.capabilityDelegation?.length) {
      obj.capabilityDelegation = message.capabilityDelegation;
    }
    if (message.keyAgreement?.length) {
      obj.keyAgreement = message.keyAgreement;
    }
    if (message.alsoKnownAs?.length) {
      obj.alsoKnownAs = message.alsoKnownAs;
    }
    if (message.service?.length) {
      obj.service = message.service.map((e) => Service.toJSON(e));
    }
    if (message.versionId !== "") {
      obj.versionId = message.versionId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateDidPayload>, I>>(base?: I): MsgUpdateDidPayload {
    return MsgUpdateDidPayload.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateDidPayload>, I>>(object: I): MsgUpdateDidPayload {
    const message = createBaseMsgUpdateDidPayload();
    message.context = object.context?.map((e) => e) || [];
    message.id = object.id ?? "";
    message.controller = object.controller?.map((e) => e) || [];
    message.verificationMethod = object.verificationMethod?.map((e) => VerificationMethod.fromPartial(e)) || [];
    message.authentication = object.authentication?.map((e) => e) || [];
    message.assertionMethod = object.assertionMethod?.map((e) => e) || [];
    message.capabilityInvocation = object.capabilityInvocation?.map((e) => e) || [];
    message.capabilityDelegation = object.capabilityDelegation?.map((e) => e) || [];
    message.keyAgreement = object.keyAgreement?.map((e) => e) || [];
    message.alsoKnownAs = object.alsoKnownAs?.map((e) => e) || [];
    message.service = object.service?.map((e) => Service.fromPartial(e)) || [];
    message.versionId = object.versionId ?? "";
    return message;
  },
};

function createBaseMsgUpdateDidResponse(): MsgUpdateDidResponse {
  return { id: "" };
}

export const MsgUpdateDidResponse = {
  encode(message: MsgUpdateDidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDidResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDidResponse {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: MsgUpdateDidResponse): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateDidResponse>, I>>(base?: I): MsgUpdateDidResponse {
    return MsgUpdateDidResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<MsgUpdateDidResponse>, I>>(object: I): MsgUpdateDidResponse {
    const message = createBaseMsgUpdateDidResponse();
    message.id = object.id ?? "";
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateDid(request: MsgCreateDid): Promise<MsgCreateDidResponse>;
  UpdateDid(request: MsgUpdateDid): Promise<MsgUpdateDidResponse>;
  DeactivateDid(request: MsgDeactivateDid): Promise<MsgDeactivateDidResponse>;
}

export const MsgServiceName = "cheqdid.cheqdnode.cheqd.v1.Msg";
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || MsgServiceName;
    this.rpc = rpc;
    this.CreateDid = this.CreateDid.bind(this);
    this.UpdateDid = this.UpdateDid.bind(this);
    this.DeactivateDid = this.DeactivateDid.bind(this);
  }
  CreateDid(request: MsgCreateDid): Promise<MsgCreateDidResponse> {
    const data = MsgCreateDid.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateDid", data);
    return promise.then((data) => MsgCreateDidResponse.decode(_m0.Reader.create(data)));
  }

  UpdateDid(request: MsgUpdateDid): Promise<MsgUpdateDidResponse> {
    const data = MsgUpdateDid.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateDid", data);
    return promise.then((data) => MsgUpdateDidResponse.decode(_m0.Reader.create(data)));
  }

  DeactivateDid(request: MsgDeactivateDid): Promise<MsgDeactivateDidResponse> {
    const data = MsgDeactivateDid.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeactivateDid", data);
    return promise.then((data) => MsgDeactivateDidResponse.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
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
