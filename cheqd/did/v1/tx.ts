/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";
import { Did, Service, VerificationMethod } from "./did";
import { Metadata } from "./stateValue";

export const protobufPackage = "cheqdid.cheqdnode.cheqd.v1";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateDid {
  $type: "cheqdid.cheqdnode.cheqd.v1.MsgCreateDid";
  payload: MsgCreateDidPayload | undefined;
  signatures: SignInfo[];
}

export interface MsgUpdateDid {
  $type: "cheqdid.cheqdnode.cheqd.v1.MsgUpdateDid";
  payload: MsgUpdateDidPayload | undefined;
  signatures: SignInfo[];
}

export interface MsgDeactivateDid {
  $type: "cheqdid.cheqdnode.cheqd.v1.MsgDeactivateDid";
  payload: MsgDeactivateDidPayload | undefined;
  signatures: SignInfo[];
}

export interface SignInfo {
  $type: "cheqdid.cheqdnode.cheqd.v1.SignInfo";
  verificationMethodId: string;
  signature: string;
}

export interface MsgDeactivateDidPayload {
  $type: "cheqdid.cheqdnode.cheqd.v1.MsgDeactivateDidPayload";
  id: string;
}

export interface MsgDeactivateDidResponse {
  $type: "cheqdid.cheqdnode.cheqd.v1.MsgDeactivateDidResponse";
  did: Did | undefined;
  metadata: Metadata | undefined;
}

export interface MsgCreateDidPayload {
  $type: "cheqdid.cheqdnode.cheqd.v1.MsgCreateDidPayload";
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
  $type: "cheqdid.cheqdnode.cheqd.v1.MsgCreateDidResponse";
  /** Not necessary */
  id: string;
}

export interface MsgUpdateDidPayload {
  $type: "cheqdid.cheqdnode.cheqd.v1.MsgUpdateDidPayload";
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
  $type: "cheqdid.cheqdnode.cheqd.v1.MsgUpdateDidResponse";
  /** Not necessary */
  id: string;
}

function createBaseMsgCreateDid(): MsgCreateDid {
  return { $type: "cheqdid.cheqdnode.cheqd.v1.MsgCreateDid", payload: undefined, signatures: [] };
}

export const MsgCreateDid = {
  $type: "cheqdid.cheqdnode.cheqd.v1.MsgCreateDid" as const,

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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = MsgCreateDidPayload.decode(reader, reader.uint32());
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

  fromJSON(object: any): MsgCreateDid {
    return {
      $type: MsgCreateDid.$type,
      payload: isSet(object.payload) ? MsgCreateDidPayload.fromJSON(object.payload) : undefined,
      signatures: Array.isArray(object?.signatures) ? object.signatures.map((e: any) => SignInfo.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgCreateDid): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload ? MsgCreateDidPayload.toJSON(message.payload) : undefined);
    if (message.signatures) {
      obj.signatures = message.signatures.map((e) => e ? SignInfo.toJSON(e) : undefined);
    } else {
      obj.signatures = [];
    }
    return obj;
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

messageTypeRegistry.set(MsgCreateDid.$type, MsgCreateDid);

function createBaseMsgUpdateDid(): MsgUpdateDid {
  return { $type: "cheqdid.cheqdnode.cheqd.v1.MsgUpdateDid", payload: undefined, signatures: [] };
}

export const MsgUpdateDid = {
  $type: "cheqdid.cheqdnode.cheqd.v1.MsgUpdateDid" as const,

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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = MsgUpdateDidPayload.decode(reader, reader.uint32());
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

  fromJSON(object: any): MsgUpdateDid {
    return {
      $type: MsgUpdateDid.$type,
      payload: isSet(object.payload) ? MsgUpdateDidPayload.fromJSON(object.payload) : undefined,
      signatures: Array.isArray(object?.signatures) ? object.signatures.map((e: any) => SignInfo.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgUpdateDid): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload ? MsgUpdateDidPayload.toJSON(message.payload) : undefined);
    if (message.signatures) {
      obj.signatures = message.signatures.map((e) => e ? SignInfo.toJSON(e) : undefined);
    } else {
      obj.signatures = [];
    }
    return obj;
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

messageTypeRegistry.set(MsgUpdateDid.$type, MsgUpdateDid);

function createBaseMsgDeactivateDid(): MsgDeactivateDid {
  return { $type: "cheqdid.cheqdnode.cheqd.v1.MsgDeactivateDid", payload: undefined, signatures: [] };
}

export const MsgDeactivateDid = {
  $type: "cheqdid.cheqdnode.cheqd.v1.MsgDeactivateDid" as const,

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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeactivateDid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = MsgDeactivateDidPayload.decode(reader, reader.uint32());
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

  fromJSON(object: any): MsgDeactivateDid {
    return {
      $type: MsgDeactivateDid.$type,
      payload: isSet(object.payload) ? MsgDeactivateDidPayload.fromJSON(object.payload) : undefined,
      signatures: Array.isArray(object?.signatures) ? object.signatures.map((e: any) => SignInfo.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgDeactivateDid): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload ? MsgDeactivateDidPayload.toJSON(message.payload) : undefined);
    if (message.signatures) {
      obj.signatures = message.signatures.map((e) => e ? SignInfo.toJSON(e) : undefined);
    } else {
      obj.signatures = [];
    }
    return obj;
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

messageTypeRegistry.set(MsgDeactivateDid.$type, MsgDeactivateDid);

function createBaseSignInfo(): SignInfo {
  return { $type: "cheqdid.cheqdnode.cheqd.v1.SignInfo", verificationMethodId: "", signature: "" };
}

export const SignInfo = {
  $type: "cheqdid.cheqdnode.cheqd.v1.SignInfo" as const,

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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.verificationMethodId = reader.string();
          break;
        case 2:
          message.signature = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignInfo {
    return {
      $type: SignInfo.$type,
      verificationMethodId: isSet(object.verificationMethodId) ? String(object.verificationMethodId) : "",
      signature: isSet(object.signature) ? String(object.signature) : "",
    };
  },

  toJSON(message: SignInfo): unknown {
    const obj: any = {};
    message.verificationMethodId !== undefined && (obj.verificationMethodId = message.verificationMethodId);
    message.signature !== undefined && (obj.signature = message.signature);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SignInfo>, I>>(object: I): SignInfo {
    const message = createBaseSignInfo();
    message.verificationMethodId = object.verificationMethodId ?? "";
    message.signature = object.signature ?? "";
    return message;
  },
};

messageTypeRegistry.set(SignInfo.$type, SignInfo);

function createBaseMsgDeactivateDidPayload(): MsgDeactivateDidPayload {
  return { $type: "cheqdid.cheqdnode.cheqd.v1.MsgDeactivateDidPayload", id: "" };
}

export const MsgDeactivateDidPayload = {
  $type: "cheqdid.cheqdnode.cheqd.v1.MsgDeactivateDidPayload" as const,

  encode(message: MsgDeactivateDidPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeactivateDidPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeactivateDidPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeactivateDidPayload {
    return { $type: MsgDeactivateDidPayload.$type, id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: MsgDeactivateDidPayload): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeactivateDidPayload>, I>>(object: I): MsgDeactivateDidPayload {
    const message = createBaseMsgDeactivateDidPayload();
    message.id = object.id ?? "";
    return message;
  },
};

messageTypeRegistry.set(MsgDeactivateDidPayload.$type, MsgDeactivateDidPayload);

function createBaseMsgDeactivateDidResponse(): MsgDeactivateDidResponse {
  return { $type: "cheqdid.cheqdnode.cheqd.v1.MsgDeactivateDidResponse", did: undefined, metadata: undefined };
}

export const MsgDeactivateDidResponse = {
  $type: "cheqdid.cheqdnode.cheqd.v1.MsgDeactivateDidResponse" as const,

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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeactivateDidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.did = Did.decode(reader, reader.uint32());
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

  fromJSON(object: any): MsgDeactivateDidResponse {
    return {
      $type: MsgDeactivateDidResponse.$type,
      did: isSet(object.did) ? Did.fromJSON(object.did) : undefined,
      metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined,
    };
  },

  toJSON(message: MsgDeactivateDidResponse): unknown {
    const obj: any = {};
    message.did !== undefined && (obj.did = message.did ? Did.toJSON(message.did) : undefined);
    message.metadata !== undefined && (obj.metadata = message.metadata ? Metadata.toJSON(message.metadata) : undefined);
    return obj;
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

messageTypeRegistry.set(MsgDeactivateDidResponse.$type, MsgDeactivateDidResponse);

function createBaseMsgCreateDidPayload(): MsgCreateDidPayload {
  return {
    $type: "cheqdid.cheqdnode.cheqd.v1.MsgCreateDidPayload",
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
  $type: "cheqdid.cheqdnode.cheqd.v1.MsgCreateDidPayload" as const,

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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDidPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.context.push(reader.string());
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.controller.push(reader.string());
          break;
        case 4:
          message.verificationMethod.push(VerificationMethod.decode(reader, reader.uint32()));
          break;
        case 5:
          message.authentication.push(reader.string());
          break;
        case 6:
          message.assertionMethod.push(reader.string());
          break;
        case 7:
          message.capabilityInvocation.push(reader.string());
          break;
        case 8:
          message.capabilityDelegation.push(reader.string());
          break;
        case 9:
          message.keyAgreement.push(reader.string());
          break;
        case 10:
          message.alsoKnownAs.push(reader.string());
          break;
        case 11:
          message.service.push(Service.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDidPayload {
    return {
      $type: MsgCreateDidPayload.$type,
      context: Array.isArray(object?.context) ? object.context.map((e: any) => String(e)) : [],
      id: isSet(object.id) ? String(object.id) : "",
      controller: Array.isArray(object?.controller) ? object.controller.map((e: any) => String(e)) : [],
      verificationMethod: Array.isArray(object?.verificationMethod)
        ? object.verificationMethod.map((e: any) => VerificationMethod.fromJSON(e))
        : [],
      authentication: Array.isArray(object?.authentication) ? object.authentication.map((e: any) => String(e)) : [],
      assertionMethod: Array.isArray(object?.assertionMethod) ? object.assertionMethod.map((e: any) => String(e)) : [],
      capabilityInvocation: Array.isArray(object?.capabilityInvocation)
        ? object.capabilityInvocation.map((e: any) => String(e))
        : [],
      capabilityDelegation: Array.isArray(object?.capabilityDelegation)
        ? object.capabilityDelegation.map((e: any) => String(e))
        : [],
      keyAgreement: Array.isArray(object?.keyAgreement) ? object.keyAgreement.map((e: any) => String(e)) : [],
      alsoKnownAs: Array.isArray(object?.alsoKnownAs) ? object.alsoKnownAs.map((e: any) => String(e)) : [],
      service: Array.isArray(object?.service) ? object.service.map((e: any) => Service.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgCreateDidPayload): unknown {
    const obj: any = {};
    if (message.context) {
      obj.context = message.context.map((e) => e);
    } else {
      obj.context = [];
    }
    message.id !== undefined && (obj.id = message.id);
    if (message.controller) {
      obj.controller = message.controller.map((e) => e);
    } else {
      obj.controller = [];
    }
    if (message.verificationMethod) {
      obj.verificationMethod = message.verificationMethod.map((e) => e ? VerificationMethod.toJSON(e) : undefined);
    } else {
      obj.verificationMethod = [];
    }
    if (message.authentication) {
      obj.authentication = message.authentication.map((e) => e);
    } else {
      obj.authentication = [];
    }
    if (message.assertionMethod) {
      obj.assertionMethod = message.assertionMethod.map((e) => e);
    } else {
      obj.assertionMethod = [];
    }
    if (message.capabilityInvocation) {
      obj.capabilityInvocation = message.capabilityInvocation.map((e) => e);
    } else {
      obj.capabilityInvocation = [];
    }
    if (message.capabilityDelegation) {
      obj.capabilityDelegation = message.capabilityDelegation.map((e) => e);
    } else {
      obj.capabilityDelegation = [];
    }
    if (message.keyAgreement) {
      obj.keyAgreement = message.keyAgreement.map((e) => e);
    } else {
      obj.keyAgreement = [];
    }
    if (message.alsoKnownAs) {
      obj.alsoKnownAs = message.alsoKnownAs.map((e) => e);
    } else {
      obj.alsoKnownAs = [];
    }
    if (message.service) {
      obj.service = message.service.map((e) => e ? Service.toJSON(e) : undefined);
    } else {
      obj.service = [];
    }
    return obj;
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

messageTypeRegistry.set(MsgCreateDidPayload.$type, MsgCreateDidPayload);

function createBaseMsgCreateDidResponse(): MsgCreateDidResponse {
  return { $type: "cheqdid.cheqdnode.cheqd.v1.MsgCreateDidResponse", id: "" };
}

export const MsgCreateDidResponse = {
  $type: "cheqdid.cheqdnode.cheqd.v1.MsgCreateDidResponse" as const,

  encode(message: MsgCreateDidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDidResponse {
    return { $type: MsgCreateDidResponse.$type, id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: MsgCreateDidResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateDidResponse>, I>>(object: I): MsgCreateDidResponse {
    const message = createBaseMsgCreateDidResponse();
    message.id = object.id ?? "";
    return message;
  },
};

messageTypeRegistry.set(MsgCreateDidResponse.$type, MsgCreateDidResponse);

function createBaseMsgUpdateDidPayload(): MsgUpdateDidPayload {
  return {
    $type: "cheqdid.cheqdnode.cheqd.v1.MsgUpdateDidPayload",
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
  $type: "cheqdid.cheqdnode.cheqd.v1.MsgUpdateDidPayload" as const,

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
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDidPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.context.push(reader.string());
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.controller.push(reader.string());
          break;
        case 4:
          message.verificationMethod.push(VerificationMethod.decode(reader, reader.uint32()));
          break;
        case 5:
          message.authentication.push(reader.string());
          break;
        case 6:
          message.assertionMethod.push(reader.string());
          break;
        case 7:
          message.capabilityInvocation.push(reader.string());
          break;
        case 8:
          message.capabilityDelegation.push(reader.string());
          break;
        case 9:
          message.keyAgreement.push(reader.string());
          break;
        case 10:
          message.alsoKnownAs.push(reader.string());
          break;
        case 11:
          message.service.push(Service.decode(reader, reader.uint32()));
          break;
        case 12:
          message.versionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDidPayload {
    return {
      $type: MsgUpdateDidPayload.$type,
      context: Array.isArray(object?.context) ? object.context.map((e: any) => String(e)) : [],
      id: isSet(object.id) ? String(object.id) : "",
      controller: Array.isArray(object?.controller) ? object.controller.map((e: any) => String(e)) : [],
      verificationMethod: Array.isArray(object?.verificationMethod)
        ? object.verificationMethod.map((e: any) => VerificationMethod.fromJSON(e))
        : [],
      authentication: Array.isArray(object?.authentication) ? object.authentication.map((e: any) => String(e)) : [],
      assertionMethod: Array.isArray(object?.assertionMethod) ? object.assertionMethod.map((e: any) => String(e)) : [],
      capabilityInvocation: Array.isArray(object?.capabilityInvocation)
        ? object.capabilityInvocation.map((e: any) => String(e))
        : [],
      capabilityDelegation: Array.isArray(object?.capabilityDelegation)
        ? object.capabilityDelegation.map((e: any) => String(e))
        : [],
      keyAgreement: Array.isArray(object?.keyAgreement) ? object.keyAgreement.map((e: any) => String(e)) : [],
      alsoKnownAs: Array.isArray(object?.alsoKnownAs) ? object.alsoKnownAs.map((e: any) => String(e)) : [],
      service: Array.isArray(object?.service) ? object.service.map((e: any) => Service.fromJSON(e)) : [],
      versionId: isSet(object.versionId) ? String(object.versionId) : "",
    };
  },

  toJSON(message: MsgUpdateDidPayload): unknown {
    const obj: any = {};
    if (message.context) {
      obj.context = message.context.map((e) => e);
    } else {
      obj.context = [];
    }
    message.id !== undefined && (obj.id = message.id);
    if (message.controller) {
      obj.controller = message.controller.map((e) => e);
    } else {
      obj.controller = [];
    }
    if (message.verificationMethod) {
      obj.verificationMethod = message.verificationMethod.map((e) => e ? VerificationMethod.toJSON(e) : undefined);
    } else {
      obj.verificationMethod = [];
    }
    if (message.authentication) {
      obj.authentication = message.authentication.map((e) => e);
    } else {
      obj.authentication = [];
    }
    if (message.assertionMethod) {
      obj.assertionMethod = message.assertionMethod.map((e) => e);
    } else {
      obj.assertionMethod = [];
    }
    if (message.capabilityInvocation) {
      obj.capabilityInvocation = message.capabilityInvocation.map((e) => e);
    } else {
      obj.capabilityInvocation = [];
    }
    if (message.capabilityDelegation) {
      obj.capabilityDelegation = message.capabilityDelegation.map((e) => e);
    } else {
      obj.capabilityDelegation = [];
    }
    if (message.keyAgreement) {
      obj.keyAgreement = message.keyAgreement.map((e) => e);
    } else {
      obj.keyAgreement = [];
    }
    if (message.alsoKnownAs) {
      obj.alsoKnownAs = message.alsoKnownAs.map((e) => e);
    } else {
      obj.alsoKnownAs = [];
    }
    if (message.service) {
      obj.service = message.service.map((e) => e ? Service.toJSON(e) : undefined);
    } else {
      obj.service = [];
    }
    message.versionId !== undefined && (obj.versionId = message.versionId);
    return obj;
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

messageTypeRegistry.set(MsgUpdateDidPayload.$type, MsgUpdateDidPayload);

function createBaseMsgUpdateDidResponse(): MsgUpdateDidResponse {
  return { $type: "cheqdid.cheqdnode.cheqd.v1.MsgUpdateDidResponse", id: "" };
}

export const MsgUpdateDidResponse = {
  $type: "cheqdid.cheqdnode.cheqd.v1.MsgUpdateDidResponse" as const,

  encode(message: MsgUpdateDidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDidResponse {
    return { $type: MsgUpdateDidResponse.$type, id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: MsgUpdateDidResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateDidResponse>, I>>(object: I): MsgUpdateDidResponse {
    const message = createBaseMsgUpdateDidResponse();
    message.id = object.id ?? "";
    return message;
  },
};

messageTypeRegistry.set(MsgUpdateDidResponse.$type, MsgUpdateDidResponse);

/** Msg defines the Msg service. */
export interface Msg {
  CreateDid(request: MsgCreateDid): Promise<MsgCreateDidResponse>;
  UpdateDid(request: MsgUpdateDid): Promise<MsgUpdateDidResponse>;
  DeactivateDid(request: MsgDeactivateDid): Promise<MsgDeactivateDidResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "cheqdid.cheqdnode.cheqd.v1.Msg";
    this.rpc = rpc;
    this.CreateDid = this.CreateDid.bind(this);
    this.UpdateDid = this.UpdateDid.bind(this);
    this.DeactivateDid = this.DeactivateDid.bind(this);
  }
  CreateDid(request: MsgCreateDid): Promise<MsgCreateDidResponse> {
    const data = MsgCreateDid.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateDid", data);
    return promise.then((data) => MsgCreateDidResponse.decode(new _m0.Reader(data)));
  }

  UpdateDid(request: MsgUpdateDid): Promise<MsgUpdateDidResponse> {
    const data = MsgUpdateDid.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateDid", data);
    return promise.then((data) => MsgUpdateDidResponse.decode(new _m0.Reader(data)));
  }

  DeactivateDid(request: MsgDeactivateDid): Promise<MsgDeactivateDidResponse> {
    const data = MsgDeactivateDid.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeactivateDid", data);
    return promise.then((data) => MsgDeactivateDidResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
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
