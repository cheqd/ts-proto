/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";
import { DidDocWithMetadata, Service, VerificationMethod } from "./diddoc";

export const protobufPackage = "cheqd.did.v2";

export interface MsgCreateDidDoc {
  $type: "cheqd.did.v2.MsgCreateDidDoc";
  payload: MsgCreateDidDocPayload | undefined;
  signatures: SignInfo[];
}

export interface MsgUpdateDidDoc {
  $type: "cheqd.did.v2.MsgUpdateDidDoc";
  payload: MsgUpdateDidDocPayload | undefined;
  signatures: SignInfo[];
}

export interface MsgDeactivateDidDoc {
  $type: "cheqd.did.v2.MsgDeactivateDidDoc";
  payload: MsgDeactivateDidDocPayload | undefined;
  signatures: SignInfo[];
}

export interface SignInfo {
  $type: "cheqd.did.v2.SignInfo";
  verificationMethodId: string;
  signature: Uint8Array;
}

export interface MsgCreateDidDocPayload {
  $type: "cheqd.did.v2.MsgCreateDidDocPayload";
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

export interface MsgCreateDidDocResponse {
  $type: "cheqd.did.v2.MsgCreateDidDocResponse";
  value: DidDocWithMetadata | undefined;
}

export interface MsgUpdateDidDocPayload {
  $type: "cheqd.did.v2.MsgUpdateDidDocPayload";
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

export interface MsgUpdateDidDocResponse {
  $type: "cheqd.did.v2.MsgUpdateDidDocResponse";
  value: DidDocWithMetadata | undefined;
}

export interface MsgDeactivateDidDocPayload {
  $type: "cheqd.did.v2.MsgDeactivateDidDocPayload";
  id: string;
  versionId: string;
}

export interface MsgDeactivateDidDocResponse {
  $type: "cheqd.did.v2.MsgDeactivateDidDocResponse";
  value: DidDocWithMetadata | undefined;
}

function createBaseMsgCreateDidDoc(): MsgCreateDidDoc {
  return { $type: "cheqd.did.v2.MsgCreateDidDoc", payload: undefined, signatures: [] };
}

export const MsgCreateDidDoc = {
  $type: "cheqd.did.v2.MsgCreateDidDoc" as const,

  encode(message: MsgCreateDidDoc, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      MsgCreateDidDocPayload.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.signatures) {
      SignInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDidDoc {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDidDoc();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = MsgCreateDidDocPayload.decode(reader, reader.uint32());
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

  fromJSON(object: any): MsgCreateDidDoc {
    return {
      $type: MsgCreateDidDoc.$type,
      payload: isSet(object.payload) ? MsgCreateDidDocPayload.fromJSON(object.payload) : undefined,
      signatures: Array.isArray(object?.signatures) ? object.signatures.map((e: any) => SignInfo.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgCreateDidDoc): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload ? MsgCreateDidDocPayload.toJSON(message.payload) : undefined);
    if (message.signatures) {
      obj.signatures = message.signatures.map((e) => e ? SignInfo.toJSON(e) : undefined);
    } else {
      obj.signatures = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateDidDoc>, I>>(object: I): MsgCreateDidDoc {
    const message = createBaseMsgCreateDidDoc();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? MsgCreateDidDocPayload.fromPartial(object.payload)
      : undefined;
    message.signatures = object.signatures?.map((e) => SignInfo.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(MsgCreateDidDoc.$type, MsgCreateDidDoc);

function createBaseMsgUpdateDidDoc(): MsgUpdateDidDoc {
  return { $type: "cheqd.did.v2.MsgUpdateDidDoc", payload: undefined, signatures: [] };
}

export const MsgUpdateDidDoc = {
  $type: "cheqd.did.v2.MsgUpdateDidDoc" as const,

  encode(message: MsgUpdateDidDoc, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      MsgUpdateDidDocPayload.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.signatures) {
      SignInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDidDoc {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDidDoc();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = MsgUpdateDidDocPayload.decode(reader, reader.uint32());
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

  fromJSON(object: any): MsgUpdateDidDoc {
    return {
      $type: MsgUpdateDidDoc.$type,
      payload: isSet(object.payload) ? MsgUpdateDidDocPayload.fromJSON(object.payload) : undefined,
      signatures: Array.isArray(object?.signatures) ? object.signatures.map((e: any) => SignInfo.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgUpdateDidDoc): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload ? MsgUpdateDidDocPayload.toJSON(message.payload) : undefined);
    if (message.signatures) {
      obj.signatures = message.signatures.map((e) => e ? SignInfo.toJSON(e) : undefined);
    } else {
      obj.signatures = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateDidDoc>, I>>(object: I): MsgUpdateDidDoc {
    const message = createBaseMsgUpdateDidDoc();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? MsgUpdateDidDocPayload.fromPartial(object.payload)
      : undefined;
    message.signatures = object.signatures?.map((e) => SignInfo.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(MsgUpdateDidDoc.$type, MsgUpdateDidDoc);

function createBaseMsgDeactivateDidDoc(): MsgDeactivateDidDoc {
  return { $type: "cheqd.did.v2.MsgDeactivateDidDoc", payload: undefined, signatures: [] };
}

export const MsgDeactivateDidDoc = {
  $type: "cheqd.did.v2.MsgDeactivateDidDoc" as const,

  encode(message: MsgDeactivateDidDoc, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payload !== undefined) {
      MsgDeactivateDidDocPayload.encode(message.payload, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.signatures) {
      SignInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeactivateDidDoc {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeactivateDidDoc();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payload = MsgDeactivateDidDocPayload.decode(reader, reader.uint32());
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

  fromJSON(object: any): MsgDeactivateDidDoc {
    return {
      $type: MsgDeactivateDidDoc.$type,
      payload: isSet(object.payload) ? MsgDeactivateDidDocPayload.fromJSON(object.payload) : undefined,
      signatures: Array.isArray(object?.signatures) ? object.signatures.map((e: any) => SignInfo.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgDeactivateDidDoc): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload ? MsgDeactivateDidDocPayload.toJSON(message.payload) : undefined);
    if (message.signatures) {
      obj.signatures = message.signatures.map((e) => e ? SignInfo.toJSON(e) : undefined);
    } else {
      obj.signatures = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeactivateDidDoc>, I>>(object: I): MsgDeactivateDidDoc {
    const message = createBaseMsgDeactivateDidDoc();
    message.payload = (object.payload !== undefined && object.payload !== null)
      ? MsgDeactivateDidDocPayload.fromPartial(object.payload)
      : undefined;
    message.signatures = object.signatures?.map((e) => SignInfo.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(MsgDeactivateDidDoc.$type, MsgDeactivateDidDoc);

function createBaseSignInfo(): SignInfo {
  return { $type: "cheqd.did.v2.SignInfo", verificationMethodId: "", signature: new Uint8Array() };
}

export const SignInfo = {
  $type: "cheqd.did.v2.SignInfo" as const,

  encode(message: SignInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.verificationMethodId !== "") {
      writer.uint32(10).string(message.verificationMethodId);
    }
    if (message.signature.length !== 0) {
      writer.uint32(18).bytes(message.signature);
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
          message.signature = reader.bytes();
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
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
    };
  },

  toJSON(message: SignInfo): unknown {
    const obj: any = {};
    message.verificationMethodId !== undefined && (obj.verificationMethodId = message.verificationMethodId);
    message.signature !== undefined &&
      (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SignInfo>, I>>(object: I): SignInfo {
    const message = createBaseSignInfo();
    message.verificationMethodId = object.verificationMethodId ?? "";
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(SignInfo.$type, SignInfo);

function createBaseMsgCreateDidDocPayload(): MsgCreateDidDocPayload {
  return {
    $type: "cheqd.did.v2.MsgCreateDidDocPayload",
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

export const MsgCreateDidDocPayload = {
  $type: "cheqd.did.v2.MsgCreateDidDocPayload" as const,

  encode(message: MsgCreateDidDocPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDidDocPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDidDocPayload();
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

  fromJSON(object: any): MsgCreateDidDocPayload {
    return {
      $type: MsgCreateDidDocPayload.$type,
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

  toJSON(message: MsgCreateDidDocPayload): unknown {
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

  fromPartial<I extends Exact<DeepPartial<MsgCreateDidDocPayload>, I>>(object: I): MsgCreateDidDocPayload {
    const message = createBaseMsgCreateDidDocPayload();
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

messageTypeRegistry.set(MsgCreateDidDocPayload.$type, MsgCreateDidDocPayload);

function createBaseMsgCreateDidDocResponse(): MsgCreateDidDocResponse {
  return { $type: "cheqd.did.v2.MsgCreateDidDocResponse", value: undefined };
}

export const MsgCreateDidDocResponse = {
  $type: "cheqd.did.v2.MsgCreateDidDocResponse" as const,

  encode(message: MsgCreateDidDocResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      DidDocWithMetadata.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDidDocResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDidDocResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = DidDocWithMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDidDocResponse {
    return {
      $type: MsgCreateDidDocResponse.$type,
      value: isSet(object.value) ? DidDocWithMetadata.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: MsgCreateDidDocResponse): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value ? DidDocWithMetadata.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateDidDocResponse>, I>>(object: I): MsgCreateDidDocResponse {
    const message = createBaseMsgCreateDidDocResponse();
    message.value = (object.value !== undefined && object.value !== null)
      ? DidDocWithMetadata.fromPartial(object.value)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgCreateDidDocResponse.$type, MsgCreateDidDocResponse);

function createBaseMsgUpdateDidDocPayload(): MsgUpdateDidDocPayload {
  return {
    $type: "cheqd.did.v2.MsgUpdateDidDocPayload",
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

export const MsgUpdateDidDocPayload = {
  $type: "cheqd.did.v2.MsgUpdateDidDocPayload" as const,

  encode(message: MsgUpdateDidDocPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDidDocPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDidDocPayload();
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

  fromJSON(object: any): MsgUpdateDidDocPayload {
    return {
      $type: MsgUpdateDidDocPayload.$type,
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

  toJSON(message: MsgUpdateDidDocPayload): unknown {
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

  fromPartial<I extends Exact<DeepPartial<MsgUpdateDidDocPayload>, I>>(object: I): MsgUpdateDidDocPayload {
    const message = createBaseMsgUpdateDidDocPayload();
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

messageTypeRegistry.set(MsgUpdateDidDocPayload.$type, MsgUpdateDidDocPayload);

function createBaseMsgUpdateDidDocResponse(): MsgUpdateDidDocResponse {
  return { $type: "cheqd.did.v2.MsgUpdateDidDocResponse", value: undefined };
}

export const MsgUpdateDidDocResponse = {
  $type: "cheqd.did.v2.MsgUpdateDidDocResponse" as const,

  encode(message: MsgUpdateDidDocResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      DidDocWithMetadata.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDidDocResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDidDocResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = DidDocWithMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDidDocResponse {
    return {
      $type: MsgUpdateDidDocResponse.$type,
      value: isSet(object.value) ? DidDocWithMetadata.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: MsgUpdateDidDocResponse): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value ? DidDocWithMetadata.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateDidDocResponse>, I>>(object: I): MsgUpdateDidDocResponse {
    const message = createBaseMsgUpdateDidDocResponse();
    message.value = (object.value !== undefined && object.value !== null)
      ? DidDocWithMetadata.fromPartial(object.value)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgUpdateDidDocResponse.$type, MsgUpdateDidDocResponse);

function createBaseMsgDeactivateDidDocPayload(): MsgDeactivateDidDocPayload {
  return { $type: "cheqd.did.v2.MsgDeactivateDidDocPayload", id: "", versionId: "" };
}

export const MsgDeactivateDidDocPayload = {
  $type: "cheqd.did.v2.MsgDeactivateDidDocPayload" as const,

  encode(message: MsgDeactivateDidDocPayload, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.versionId !== "") {
      writer.uint32(18).string(message.versionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeactivateDidDocPayload {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeactivateDidDocPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.versionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeactivateDidDocPayload {
    return {
      $type: MsgDeactivateDidDocPayload.$type,
      id: isSet(object.id) ? String(object.id) : "",
      versionId: isSet(object.versionId) ? String(object.versionId) : "",
    };
  },

  toJSON(message: MsgDeactivateDidDocPayload): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.versionId !== undefined && (obj.versionId = message.versionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeactivateDidDocPayload>, I>>(object: I): MsgDeactivateDidDocPayload {
    const message = createBaseMsgDeactivateDidDocPayload();
    message.id = object.id ?? "";
    message.versionId = object.versionId ?? "";
    return message;
  },
};

messageTypeRegistry.set(MsgDeactivateDidDocPayload.$type, MsgDeactivateDidDocPayload);

function createBaseMsgDeactivateDidDocResponse(): MsgDeactivateDidDocResponse {
  return { $type: "cheqd.did.v2.MsgDeactivateDidDocResponse", value: undefined };
}

export const MsgDeactivateDidDocResponse = {
  $type: "cheqd.did.v2.MsgDeactivateDidDocResponse" as const,

  encode(message: MsgDeactivateDidDocResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      DidDocWithMetadata.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeactivateDidDocResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeactivateDidDocResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = DidDocWithMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeactivateDidDocResponse {
    return {
      $type: MsgDeactivateDidDocResponse.$type,
      value: isSet(object.value) ? DidDocWithMetadata.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: MsgDeactivateDidDocResponse): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value ? DidDocWithMetadata.toJSON(message.value) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeactivateDidDocResponse>, I>>(object: I): MsgDeactivateDidDocResponse {
    const message = createBaseMsgDeactivateDidDocResponse();
    message.value = (object.value !== undefined && object.value !== null)
      ? DidDocWithMetadata.fromPartial(object.value)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgDeactivateDidDocResponse.$type, MsgDeactivateDidDocResponse);

export interface Msg {
  CreateDidDoc(request: MsgCreateDidDoc): Promise<MsgCreateDidDocResponse>;
  UpdateDidDoc(request: MsgUpdateDidDoc): Promise<MsgUpdateDidDocResponse>;
  DeactivateDidDoc(request: MsgDeactivateDidDoc): Promise<MsgDeactivateDidDocResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "cheqd.did.v2.Msg";
    this.rpc = rpc;
    this.CreateDidDoc = this.CreateDidDoc.bind(this);
    this.UpdateDidDoc = this.UpdateDidDoc.bind(this);
    this.DeactivateDidDoc = this.DeactivateDidDoc.bind(this);
  }
  CreateDidDoc(request: MsgCreateDidDoc): Promise<MsgCreateDidDocResponse> {
    const data = MsgCreateDidDoc.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateDidDoc", data);
    return promise.then((data) => MsgCreateDidDocResponse.decode(new _m0.Reader(data)));
  }

  UpdateDidDoc(request: MsgUpdateDidDoc): Promise<MsgUpdateDidDocResponse> {
    const data = MsgUpdateDidDoc.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateDidDoc", data);
    return promise.then((data) => MsgUpdateDidDocResponse.decode(new _m0.Reader(data)));
  }

  DeactivateDidDoc(request: MsgDeactivateDidDoc): Promise<MsgDeactivateDidDocResponse> {
    const data = MsgDeactivateDidDoc.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeactivateDidDoc", data);
    return promise.then((data) => MsgDeactivateDidDocResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
