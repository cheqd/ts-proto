/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { VerificationMethod, Service } from "./did";

export const protobufPackage = "cheqdid.cheqdnode.cheqd.v1";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateDid {
  payload?: MsgCreateDidPayload;
  signatures: SignInfo[];
}

export interface MsgUpdateDid {
  payload?: MsgUpdateDidPayload;
  signatures: SignInfo[];
}

export interface SignInfo {
  verificationMethodId: string;
  signature: string;
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

const baseMsgCreateDid: object = {};

export const MsgCreateDid = {
  encode(
    message: MsgCreateDid,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.payload !== undefined) {
      MsgCreateDidPayload.encode(
        message.payload,
        writer.uint32(10).fork()
      ).ldelim();
    }
    for (const v of message.signatures) {
      SignInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateDid } as MsgCreateDid;
    message.signatures = [];
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
    const message = { ...baseMsgCreateDid } as MsgCreateDid;
    message.signatures = [];
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = MsgCreateDidPayload.fromJSON(object.payload);
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

  toJSON(message: MsgCreateDid): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload
        ? MsgCreateDidPayload.toJSON(message.payload)
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

  fromPartial(object: DeepPartial<MsgCreateDid>): MsgCreateDid {
    const message = { ...baseMsgCreateDid } as MsgCreateDid;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = MsgCreateDidPayload.fromPartial(object.payload);
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

const baseMsgUpdateDid: object = {};

export const MsgUpdateDid = {
  encode(
    message: MsgUpdateDid,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.payload !== undefined) {
      MsgUpdateDidPayload.encode(
        message.payload,
        writer.uint32(10).fork()
      ).ldelim();
    }
    for (const v of message.signatures) {
      SignInfo.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateDid } as MsgUpdateDid;
    message.signatures = [];
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
    const message = { ...baseMsgUpdateDid } as MsgUpdateDid;
    message.signatures = [];
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = MsgUpdateDidPayload.fromJSON(object.payload);
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

  toJSON(message: MsgUpdateDid): unknown {
    const obj: any = {};
    message.payload !== undefined &&
      (obj.payload = message.payload
        ? MsgUpdateDidPayload.toJSON(message.payload)
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

  fromPartial(object: DeepPartial<MsgUpdateDid>): MsgUpdateDid {
    const message = { ...baseMsgUpdateDid } as MsgUpdateDid;
    if (object.payload !== undefined && object.payload !== null) {
      message.payload = MsgUpdateDidPayload.fromPartial(object.payload);
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

const baseSignInfo: object = { verificationMethodId: "", signature: "" };

export const SignInfo = {
  encode(
    message: SignInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseSignInfo } as SignInfo;
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
    const message = { ...baseSignInfo } as SignInfo;
    if (
      object.verificationMethodId !== undefined &&
      object.verificationMethodId !== null
    ) {
      message.verificationMethodId = String(object.verificationMethodId);
    } else {
      message.verificationMethodId = "";
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = String(object.signature);
    } else {
      message.signature = "";
    }
    return message;
  },

  toJSON(message: SignInfo): unknown {
    const obj: any = {};
    message.verificationMethodId !== undefined &&
      (obj.verificationMethodId = message.verificationMethodId);
    message.signature !== undefined && (obj.signature = message.signature);
    return obj;
  },

  fromPartial(object: DeepPartial<SignInfo>): SignInfo {
    const message = { ...baseSignInfo } as SignInfo;
    message.verificationMethodId = object.verificationMethodId ?? "";
    message.signature = object.signature ?? "";
    return message;
  },
};

const baseMsgCreateDidPayload: object = {
  context: "",
  id: "",
  controller: "",
  authentication: "",
  assertionMethod: "",
  capabilityInvocation: "",
  capabilityDelegation: "",
  keyAgreement: "",
  alsoKnownAs: "",
};

export const MsgCreateDidPayload = {
  encode(
    message: MsgCreateDidPayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseMsgCreateDidPayload } as MsgCreateDidPayload;
    message.context = [];
    message.controller = [];
    message.verificationMethod = [];
    message.authentication = [];
    message.assertionMethod = [];
    message.capabilityInvocation = [];
    message.capabilityDelegation = [];
    message.keyAgreement = [];
    message.alsoKnownAs = [];
    message.service = [];
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
          message.verificationMethod.push(
            VerificationMethod.decode(reader, reader.uint32())
          );
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
    const message = { ...baseMsgCreateDidPayload } as MsgCreateDidPayload;
    message.context = [];
    message.controller = [];
    message.verificationMethod = [];
    message.authentication = [];
    message.assertionMethod = [];
    message.capabilityInvocation = [];
    message.capabilityDelegation = [];
    message.keyAgreement = [];
    message.alsoKnownAs = [];
    message.service = [];
    if (object.context !== undefined && object.context !== null) {
      for (const e of object.context) {
        message.context.push(String(e));
      }
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.controller !== undefined && object.controller !== null) {
      for (const e of object.controller) {
        message.controller.push(String(e));
      }
    }
    if (
      object.verificationMethod !== undefined &&
      object.verificationMethod !== null
    ) {
      for (const e of object.verificationMethod) {
        message.verificationMethod.push(VerificationMethod.fromJSON(e));
      }
    }
    if (object.authentication !== undefined && object.authentication !== null) {
      for (const e of object.authentication) {
        message.authentication.push(String(e));
      }
    }
    if (
      object.assertionMethod !== undefined &&
      object.assertionMethod !== null
    ) {
      for (const e of object.assertionMethod) {
        message.assertionMethod.push(String(e));
      }
    }
    if (
      object.capabilityInvocation !== undefined &&
      object.capabilityInvocation !== null
    ) {
      for (const e of object.capabilityInvocation) {
        message.capabilityInvocation.push(String(e));
      }
    }
    if (
      object.capabilityDelegation !== undefined &&
      object.capabilityDelegation !== null
    ) {
      for (const e of object.capabilityDelegation) {
        message.capabilityDelegation.push(String(e));
      }
    }
    if (object.keyAgreement !== undefined && object.keyAgreement !== null) {
      for (const e of object.keyAgreement) {
        message.keyAgreement.push(String(e));
      }
    }
    if (object.alsoKnownAs !== undefined && object.alsoKnownAs !== null) {
      for (const e of object.alsoKnownAs) {
        message.alsoKnownAs.push(String(e));
      }
    }
    if (object.service !== undefined && object.service !== null) {
      for (const e of object.service) {
        message.service.push(Service.fromJSON(e));
      }
    }
    return message;
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
      obj.verificationMethod = message.verificationMethod.map((e) =>
        e ? VerificationMethod.toJSON(e) : undefined
      );
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
      obj.service = message.service.map((e) =>
        e ? Service.toJSON(e) : undefined
      );
    } else {
      obj.service = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateDidPayload>): MsgCreateDidPayload {
    const message = { ...baseMsgCreateDidPayload } as MsgCreateDidPayload;
    message.context = [];
    if (object.context !== undefined && object.context !== null) {
      for (const e of object.context) {
        message.context.push(e);
      }
    }
    message.id = object.id ?? "";
    message.controller = [];
    if (object.controller !== undefined && object.controller !== null) {
      for (const e of object.controller) {
        message.controller.push(e);
      }
    }
    message.verificationMethod = [];
    if (
      object.verificationMethod !== undefined &&
      object.verificationMethod !== null
    ) {
      for (const e of object.verificationMethod) {
        message.verificationMethod.push(VerificationMethod.fromPartial(e));
      }
    }
    message.authentication = [];
    if (object.authentication !== undefined && object.authentication !== null) {
      for (const e of object.authentication) {
        message.authentication.push(e);
      }
    }
    message.assertionMethod = [];
    if (
      object.assertionMethod !== undefined &&
      object.assertionMethod !== null
    ) {
      for (const e of object.assertionMethod) {
        message.assertionMethod.push(e);
      }
    }
    message.capabilityInvocation = [];
    if (
      object.capabilityInvocation !== undefined &&
      object.capabilityInvocation !== null
    ) {
      for (const e of object.capabilityInvocation) {
        message.capabilityInvocation.push(e);
      }
    }
    message.capabilityDelegation = [];
    if (
      object.capabilityDelegation !== undefined &&
      object.capabilityDelegation !== null
    ) {
      for (const e of object.capabilityDelegation) {
        message.capabilityDelegation.push(e);
      }
    }
    message.keyAgreement = [];
    if (object.keyAgreement !== undefined && object.keyAgreement !== null) {
      for (const e of object.keyAgreement) {
        message.keyAgreement.push(e);
      }
    }
    message.alsoKnownAs = [];
    if (object.alsoKnownAs !== undefined && object.alsoKnownAs !== null) {
      for (const e of object.alsoKnownAs) {
        message.alsoKnownAs.push(e);
      }
    }
    message.service = [];
    if (object.service !== undefined && object.service !== null) {
      for (const e of object.service) {
        message.service.push(Service.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgCreateDidResponse: object = { id: "" };

export const MsgCreateDidResponse = {
  encode(
    message: MsgCreateDidResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateDidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateDidResponse } as MsgCreateDidResponse;
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
    const message = { ...baseMsgCreateDidResponse } as MsgCreateDidResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: MsgCreateDidResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateDidResponse>): MsgCreateDidResponse {
    const message = { ...baseMsgCreateDidResponse } as MsgCreateDidResponse;
    message.id = object.id ?? "";
    return message;
  },
};

const baseMsgUpdateDidPayload: object = {
  context: "",
  id: "",
  controller: "",
  authentication: "",
  assertionMethod: "",
  capabilityInvocation: "",
  capabilityDelegation: "",
  keyAgreement: "",
  alsoKnownAs: "",
  versionId: "",
};

export const MsgUpdateDidPayload = {
  encode(
    message: MsgUpdateDidPayload,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseMsgUpdateDidPayload } as MsgUpdateDidPayload;
    message.context = [];
    message.controller = [];
    message.verificationMethod = [];
    message.authentication = [];
    message.assertionMethod = [];
    message.capabilityInvocation = [];
    message.capabilityDelegation = [];
    message.keyAgreement = [];
    message.alsoKnownAs = [];
    message.service = [];
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
          message.verificationMethod.push(
            VerificationMethod.decode(reader, reader.uint32())
          );
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
    const message = { ...baseMsgUpdateDidPayload } as MsgUpdateDidPayload;
    message.context = [];
    message.controller = [];
    message.verificationMethod = [];
    message.authentication = [];
    message.assertionMethod = [];
    message.capabilityInvocation = [];
    message.capabilityDelegation = [];
    message.keyAgreement = [];
    message.alsoKnownAs = [];
    message.service = [];
    if (object.context !== undefined && object.context !== null) {
      for (const e of object.context) {
        message.context.push(String(e));
      }
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.controller !== undefined && object.controller !== null) {
      for (const e of object.controller) {
        message.controller.push(String(e));
      }
    }
    if (
      object.verificationMethod !== undefined &&
      object.verificationMethod !== null
    ) {
      for (const e of object.verificationMethod) {
        message.verificationMethod.push(VerificationMethod.fromJSON(e));
      }
    }
    if (object.authentication !== undefined && object.authentication !== null) {
      for (const e of object.authentication) {
        message.authentication.push(String(e));
      }
    }
    if (
      object.assertionMethod !== undefined &&
      object.assertionMethod !== null
    ) {
      for (const e of object.assertionMethod) {
        message.assertionMethod.push(String(e));
      }
    }
    if (
      object.capabilityInvocation !== undefined &&
      object.capabilityInvocation !== null
    ) {
      for (const e of object.capabilityInvocation) {
        message.capabilityInvocation.push(String(e));
      }
    }
    if (
      object.capabilityDelegation !== undefined &&
      object.capabilityDelegation !== null
    ) {
      for (const e of object.capabilityDelegation) {
        message.capabilityDelegation.push(String(e));
      }
    }
    if (object.keyAgreement !== undefined && object.keyAgreement !== null) {
      for (const e of object.keyAgreement) {
        message.keyAgreement.push(String(e));
      }
    }
    if (object.alsoKnownAs !== undefined && object.alsoKnownAs !== null) {
      for (const e of object.alsoKnownAs) {
        message.alsoKnownAs.push(String(e));
      }
    }
    if (object.service !== undefined && object.service !== null) {
      for (const e of object.service) {
        message.service.push(Service.fromJSON(e));
      }
    }
    if (object.versionId !== undefined && object.versionId !== null) {
      message.versionId = String(object.versionId);
    } else {
      message.versionId = "";
    }
    return message;
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
      obj.verificationMethod = message.verificationMethod.map((e) =>
        e ? VerificationMethod.toJSON(e) : undefined
      );
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
      obj.service = message.service.map((e) =>
        e ? Service.toJSON(e) : undefined
      );
    } else {
      obj.service = [];
    }
    message.versionId !== undefined && (obj.versionId = message.versionId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateDidPayload>): MsgUpdateDidPayload {
    const message = { ...baseMsgUpdateDidPayload } as MsgUpdateDidPayload;
    message.context = [];
    if (object.context !== undefined && object.context !== null) {
      for (const e of object.context) {
        message.context.push(e);
      }
    }
    message.id = object.id ?? "";
    message.controller = [];
    if (object.controller !== undefined && object.controller !== null) {
      for (const e of object.controller) {
        message.controller.push(e);
      }
    }
    message.verificationMethod = [];
    if (
      object.verificationMethod !== undefined &&
      object.verificationMethod !== null
    ) {
      for (const e of object.verificationMethod) {
        message.verificationMethod.push(VerificationMethod.fromPartial(e));
      }
    }
    message.authentication = [];
    if (object.authentication !== undefined && object.authentication !== null) {
      for (const e of object.authentication) {
        message.authentication.push(e);
      }
    }
    message.assertionMethod = [];
    if (
      object.assertionMethod !== undefined &&
      object.assertionMethod !== null
    ) {
      for (const e of object.assertionMethod) {
        message.assertionMethod.push(e);
      }
    }
    message.capabilityInvocation = [];
    if (
      object.capabilityInvocation !== undefined &&
      object.capabilityInvocation !== null
    ) {
      for (const e of object.capabilityInvocation) {
        message.capabilityInvocation.push(e);
      }
    }
    message.capabilityDelegation = [];
    if (
      object.capabilityDelegation !== undefined &&
      object.capabilityDelegation !== null
    ) {
      for (const e of object.capabilityDelegation) {
        message.capabilityDelegation.push(e);
      }
    }
    message.keyAgreement = [];
    if (object.keyAgreement !== undefined && object.keyAgreement !== null) {
      for (const e of object.keyAgreement) {
        message.keyAgreement.push(e);
      }
    }
    message.alsoKnownAs = [];
    if (object.alsoKnownAs !== undefined && object.alsoKnownAs !== null) {
      for (const e of object.alsoKnownAs) {
        message.alsoKnownAs.push(e);
      }
    }
    message.service = [];
    if (object.service !== undefined && object.service !== null) {
      for (const e of object.service) {
        message.service.push(Service.fromPartial(e));
      }
    }
    message.versionId = object.versionId ?? "";
    return message;
  },
};

const baseMsgUpdateDidResponse: object = { id: "" };

export const MsgUpdateDidResponse = {
  encode(
    message: MsgUpdateDidResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateDidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateDidResponse } as MsgUpdateDidResponse;
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
    const message = { ...baseMsgUpdateDidResponse } as MsgUpdateDidResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateDidResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateDidResponse>): MsgUpdateDidResponse {
    const message = { ...baseMsgUpdateDidResponse } as MsgUpdateDidResponse;
    message.id = object.id ?? "";
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateDid(request: MsgCreateDid): Promise<MsgCreateDidResponse>;
  UpdateDid(request: MsgUpdateDid): Promise<MsgUpdateDidResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateDid = this.CreateDid.bind(this);
    this.UpdateDid = this.UpdateDid.bind(this);
  }
  CreateDid(request: MsgCreateDid): Promise<MsgCreateDidResponse> {
    const data = MsgCreateDid.encode(request).finish();
    const promise = this.rpc.request(
      "cheqdid.cheqdnode.cheqd.v1.Msg",
      "CreateDid",
      data
    );
    return promise.then((data) =>
      MsgCreateDidResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateDid(request: MsgUpdateDid): Promise<MsgUpdateDidResponse> {
    const data = MsgUpdateDid.encode(request).finish();
    const promise = this.rpc.request(
      "cheqdid.cheqdnode.cheqd.v1.Msg",
      "UpdateDid",
      data
    );
    return promise.then((data) =>
      MsgUpdateDidResponse.decode(new _m0.Reader(data))
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
