/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import { KeyValuePair } from "./common.js";

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

function createBaseDid(): Did {
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
    service: [],
    alsoKnownAs: [],
  };
}

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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDid();
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

          message.service.push(Service.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.alsoKnownAs.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Did {
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
      service: globalThis.Array.isArray(object?.service)
        ? object.service.map((e: any) => Service.fromJSON(e))
        : [],
      alsoKnownAs: globalThis.Array.isArray(object?.alsoKnownAs)
        ? object.alsoKnownAs.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: Did): unknown {
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
    if (message.service?.length) {
      obj.service = message.service.map((e) => Service.toJSON(e));
    }
    if (message.alsoKnownAs?.length) {
      obj.alsoKnownAs = message.alsoKnownAs;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Did>, I>>(base?: I): Did {
    return Did.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Did>, I>>(object: I): Did {
    const message = createBaseDid();
    message.context = object.context?.map((e) => e) || [];
    message.id = object.id ?? "";
    message.controller = object.controller?.map((e) => e) || [];
    message.verificationMethod = object.verificationMethod?.map((e) => VerificationMethod.fromPartial(e)) || [];
    message.authentication = object.authentication?.map((e) => e) || [];
    message.assertionMethod = object.assertionMethod?.map((e) => e) || [];
    message.capabilityInvocation = object.capabilityInvocation?.map((e) => e) || [];
    message.capabilityDelegation = object.capabilityDelegation?.map((e) => e) || [];
    message.keyAgreement = object.keyAgreement?.map((e) => e) || [];
    message.service = object.service?.map((e) => Service.fromPartial(e)) || [];
    message.alsoKnownAs = object.alsoKnownAs?.map((e) => e) || [];
    return message;
  },
};

function createBaseVerificationMethod(): VerificationMethod {
  return { id: "", type: "", controller: "", publicKeyJwk: [], publicKeyMultibase: "" };
}

export const VerificationMethod = {
  encode(message: VerificationMethod, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerificationMethod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.controller = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.publicKeyJwk.push(KeyValuePair.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.publicKeyMultibase = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): VerificationMethod {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      controller: isSet(object.controller) ? globalThis.String(object.controller) : "",
      publicKeyJwk: globalThis.Array.isArray(object?.publicKeyJwk)
        ? object.publicKeyJwk.map((e: any) => KeyValuePair.fromJSON(e))
        : [],
      publicKeyMultibase: isSet(object.publicKeyMultibase) ? globalThis.String(object.publicKeyMultibase) : "",
    };
  },

  toJSON(message: VerificationMethod): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.controller !== "") {
      obj.controller = message.controller;
    }
    if (message.publicKeyJwk?.length) {
      obj.publicKeyJwk = message.publicKeyJwk.map((e) => KeyValuePair.toJSON(e));
    }
    if (message.publicKeyMultibase !== "") {
      obj.publicKeyMultibase = message.publicKeyMultibase;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<VerificationMethod>, I>>(base?: I): VerificationMethod {
    return VerificationMethod.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<VerificationMethod>, I>>(object: I): VerificationMethod {
    const message = createBaseVerificationMethod();
    message.id = object.id ?? "";
    message.type = object.type ?? "";
    message.controller = object.controller ?? "";
    message.publicKeyJwk = object.publicKeyJwk?.map((e) => KeyValuePair.fromPartial(e)) || [];
    message.publicKeyMultibase = object.publicKeyMultibase ?? "";
    return message;
  },
};

function createBaseService(): Service {
  return { id: "", type: "", serviceEndpoint: "" };
}

export const Service = {
  encode(message: Service, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseService();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.serviceEndpoint = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Service {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      serviceEndpoint: isSet(object.serviceEndpoint) ? globalThis.String(object.serviceEndpoint) : "",
    };
  },

  toJSON(message: Service): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.serviceEndpoint !== "") {
      obj.serviceEndpoint = message.serviceEndpoint;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Service>, I>>(base?: I): Service {
    return Service.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Service>, I>>(object: I): Service {
    const message = createBaseService();
    message.id = object.id ?? "";
    message.type = object.type ?? "";
    message.serviceEndpoint = object.serviceEndpoint ?? "";
    return message;
  },
};

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
