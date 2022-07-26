/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { KeyValuePair } from "./common";

export const protobufPackage = "cheqdid.cheqdnode.cheqd.v1";

export interface Did {
  /** optional */
  context: string[];
  id: string;
  /** optional */
  controller: string[];
  /** optional */
  verificationMethod: VerificationMethod[];
  /** optional */
  authentication: string[];
  /** optional */
  assertionMethod: string[];
  /** optional */
  capabilityInvocation: string[];
  /** optional */
  capabilityDelegation: string[];
  /** optional */
  keyAgreement: string[];
  /** optional */
  service: Service[];
  /** optional */
  alsoKnownAs: string[];
}

export interface VerificationMethod {
  id: string;
  type: string;
  controller: string;
  /** optional */
  publicKeyJwk: KeyValuePair[];
  /** optional */
  publicKeyMultibase: string;
}

export interface Service {
  id: string;
  type: string;
  serviceEndpoint: string;
}

const baseDid: object = {
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

export const Did = {
  encode(message: Did, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    for (const v of message.service) {
      Service.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.alsoKnownAs) {
      writer.uint32(90).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Did {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDid } as Did;
    message.context = [];
    message.controller = [];
    message.verificationMethod = [];
    message.authentication = [];
    message.assertionMethod = [];
    message.capabilityInvocation = [];
    message.capabilityDelegation = [];
    message.keyAgreement = [];
    message.service = [];
    message.alsoKnownAs = [];
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
          message.service.push(Service.decode(reader, reader.uint32()));
          break;
        case 11:
          message.alsoKnownAs.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Did {
    const message = { ...baseDid } as Did;
    message.context = [];
    message.controller = [];
    message.verificationMethod = [];
    message.authentication = [];
    message.assertionMethod = [];
    message.capabilityInvocation = [];
    message.capabilityDelegation = [];
    message.keyAgreement = [];
    message.service = [];
    message.alsoKnownAs = [];
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
    if (object.service !== undefined && object.service !== null) {
      for (const e of object.service) {
        message.service.push(Service.fromJSON(e));
      }
    }
    if (object.alsoKnownAs !== undefined && object.alsoKnownAs !== null) {
      for (const e of object.alsoKnownAs) {
        message.alsoKnownAs.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: Did): unknown {
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
    if (message.service) {
      obj.service = message.service.map((e) =>
        e ? Service.toJSON(e) : undefined
      );
    } else {
      obj.service = [];
    }
    if (message.alsoKnownAs) {
      obj.alsoKnownAs = message.alsoKnownAs.map((e) => e);
    } else {
      obj.alsoKnownAs = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Did>): Did {
    const message = { ...baseDid } as Did;
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
    message.service = [];
    if (object.service !== undefined && object.service !== null) {
      for (const e of object.service) {
        message.service.push(Service.fromPartial(e));
      }
    }
    message.alsoKnownAs = [];
    if (object.alsoKnownAs !== undefined && object.alsoKnownAs !== null) {
      for (const e of object.alsoKnownAs) {
        message.alsoKnownAs.push(e);
      }
    }
    return message;
  },
};

const baseVerificationMethod: object = {
  id: "",
  type: "",
  controller: "",
  publicKeyMultibase: "",
};

export const VerificationMethod = {
  encode(
    message: VerificationMethod,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.controller !== "") {
      writer.uint32(26).string(message.controller);
    }
    for (const v of message.publicKeyJwk) {
      KeyValuePair.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.publicKeyMultibase !== "") {
      writer.uint32(42).string(message.publicKeyMultibase);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): VerificationMethod {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVerificationMethod } as VerificationMethod;
    message.publicKeyJwk = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        case 3:
          message.controller = reader.string();
          break;
        case 4:
          message.publicKeyJwk.push(
            KeyValuePair.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.publicKeyMultibase = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VerificationMethod {
    const message = { ...baseVerificationMethod } as VerificationMethod;
    message.publicKeyJwk = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (object.controller !== undefined && object.controller !== null) {
      message.controller = String(object.controller);
    } else {
      message.controller = "";
    }
    if (object.publicKeyJwk !== undefined && object.publicKeyJwk !== null) {
      for (const e of object.publicKeyJwk) {
        message.publicKeyJwk.push(KeyValuePair.fromJSON(e));
      }
    }
    if (
      object.publicKeyMultibase !== undefined &&
      object.publicKeyMultibase !== null
    ) {
      message.publicKeyMultibase = String(object.publicKeyMultibase);
    } else {
      message.publicKeyMultibase = "";
    }
    return message;
  },

  toJSON(message: VerificationMethod): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.type !== undefined && (obj.type = message.type);
    message.controller !== undefined && (obj.controller = message.controller);
    if (message.publicKeyJwk) {
      obj.publicKeyJwk = message.publicKeyJwk.map((e) =>
        e ? KeyValuePair.toJSON(e) : undefined
      );
    } else {
      obj.publicKeyJwk = [];
    }
    message.publicKeyMultibase !== undefined &&
      (obj.publicKeyMultibase = message.publicKeyMultibase);
    return obj;
  },

  fromPartial(object: DeepPartial<VerificationMethod>): VerificationMethod {
    const message = { ...baseVerificationMethod } as VerificationMethod;
    message.id = object.id ?? "";
    message.type = object.type ?? "";
    message.controller = object.controller ?? "";
    message.publicKeyJwk = [];
    if (object.publicKeyJwk !== undefined && object.publicKeyJwk !== null) {
      for (const e of object.publicKeyJwk) {
        message.publicKeyJwk.push(KeyValuePair.fromPartial(e));
      }
    }
    message.publicKeyMultibase = object.publicKeyMultibase ?? "";
    return message;
  },
};

const baseService: object = { id: "", type: "", serviceEndpoint: "" };

export const Service = {
  encode(
    message: Service,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.serviceEndpoint !== "") {
      writer.uint32(26).string(message.serviceEndpoint);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Service {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseService } as Service;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.type = reader.string();
          break;
        case 3:
          message.serviceEndpoint = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Service {
    const message = { ...baseService } as Service;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.type !== undefined && object.type !== null) {
      message.type = String(object.type);
    } else {
      message.type = "";
    }
    if (
      object.serviceEndpoint !== undefined &&
      object.serviceEndpoint !== null
    ) {
      message.serviceEndpoint = String(object.serviceEndpoint);
    } else {
      message.serviceEndpoint = "";
    }
    return message;
  },

  toJSON(message: Service): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.type !== undefined && (obj.type = message.type);
    message.serviceEndpoint !== undefined &&
      (obj.serviceEndpoint = message.serviceEndpoint);
    return obj;
  },

  fromPartial(object: DeepPartial<Service>): Service {
    const message = { ...baseService } as Service;
    message.id = object.id ?? "";
    message.type = object.type ?? "";
    message.serviceEndpoint = object.serviceEndpoint ?? "";
    return message;
  },
};

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
