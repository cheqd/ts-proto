/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import { DidDocWithMetadata, Service, VerificationMethod } from "./diddoc.js";

/**
 * MsgCreateDidDoc defines the Msg/CreateDidDoc request type.
 * It describes the parameters of a request for creating a new DID document.
 */
export interface MsgCreateDidDoc {
  /** Payload containing the DID Document to be created */
  payload:
    | MsgCreateDidDocPayload
    | undefined;
  /** Signatures of the DID Document's controller(s) */
  signatures: SignInfo[];
}

/**
 * MsgUpdateDidDoc defines the Msg/UpdateDidDoc request type.
 * It describes the parameters of a request for updating an existing DID document.
 */
export interface MsgUpdateDidDoc {
  /** Payload containing the DID Document to be updated. This should be updated the DID Document. */
  payload:
    | MsgUpdateDidDocPayload
    | undefined;
  /** Signatures of the DID Document's controller(s) */
  signatures: SignInfo[];
}

/**
 * MsgDeactivateDidDoc defines the Msg/DeactivateDidDoc request type.
 * It describes the parameters of a request for deactivating an existing DID document.
 */
export interface MsgDeactivateDidDoc {
  /** Payload containing the DID Document to be deactivated */
  payload:
    | MsgDeactivateDidDocPayload
    | undefined;
  /** Signatures of the DID Document's controller(s) */
  signatures: SignInfo[];
}

/** SignInfo defines the structure of a DID Document controller's signature */
export interface SignInfo {
  /** Verification method ID of the DID Controller */
  verificationMethodId: string;
  /** Signature of the DID Document controller */
  signature: Uint8Array;
}

/** MsgCreateDidDocPayload defines the structure of the payload for creating a new DID document */
export interface MsgCreateDidDocPayload {
  /**
   * context is a list of URIs used to identify the context of the DID document.
   * Default: https://www.w3.org/ns/did/v1
   */
  context: string[];
  /**
   * id is the DID of the DID document.
   * Format: did:cheqd:<namespace>:<unique-identifier>
   */
  id: string;
  /** controller is a list of DIDs that are allowed to control the DID document. */
  controller: string[];
  /**
   * verificationMethod is a list of verification methods that can be used to
   * verify a digital signature or cryptographic proof.
   * Documentation: https://www.w3.org/TR/did-core/#verification-methods
   *
   * Required fields:
   * - id: A unique identifier for the verification method
   * - type: A supported verification method type (supported: Ed25519VerificationKey2018, Ed25519VerificationKey2020, JsonWebKey2020)
   * - controller: DID of the controller of the verification method
   * - verification_material: Public key of the verification method (supported: publicJwk, publicKeyBase58, publicKeyMultibase)
   */
  verificationMethod: VerificationMethod[];
  /**
   * authentication is a list of verification methods that can be used to
   * authenticate as the DID subject.
   */
  authentication: string[];
  /**
   * assertionMethod is a list of verification methods that can be used to
   * assert statements as the DID subject.
   */
  assertionMethod: string[];
  /**
   * capabilityInvocation is a list of verification methods that can be used to
   * invoke capabilities as the DID subject.
   */
  capabilityInvocation: string[];
  /**
   * capabilityDelegation is a list of verification methods that can be used to
   * delegate capabilities as the DID subject.
   */
  capabilityDelegation: string[];
  /**
   * keyAgreement is a list of verification methods that can be used to perform
   * key agreement as the DID subject.
   */
  keyAgreement: string[];
  /**
   * service is a list of services that can be used to interact with the DID subject.
   * Documentation: https://www.w3.org/TR/did-core/#services
   *
   * Required fields:
   * - id: A unique identifier for the service
   * - type: A service type defined in DID Specification Registries
   * - service_endpoint: Service endpoint(s), provided as a URI or set of URIs
   */
  service: Service[];
  /** alsoKnownAs is a list of DIDs that are known to refer to the same DID subject. */
  alsoKnownAs: string[];
  /**
   * Version ID of the DID Document to be created
   *
   * Format: <uuid>
   */
  versionId: string;
}

/** MsgCreateDidDocResponse defines response type for Msg/CreateDidDoc. */
export interface MsgCreateDidDocResponse {
  /** Return the created DID Document with metadata */
  value: DidDocWithMetadata | undefined;
}

/** MsgUpdateDidDocPayload defines the structure of the payload for updating an existing DID document */
export interface MsgUpdateDidDocPayload {
  /**
   * context is a list of URIs used to identify the context of the DID document.
   * Default: https://www.w3.org/ns/did/v1
   */
  context: string[];
  /**
   * id is the DID of the DID document.
   * Format: did:cheqd:<namespace>:<unique-identifier>
   */
  id: string;
  /** controller is a list of DIDs that are allowed to control the DID document. */
  controller: string[];
  /**
   * verificationMethod is a list of verification methods that can be used to
   * verify a digital signature or cryptographic proof.
   * Documentation: https://www.w3.org/TR/did-core/#verification-methods
   *
   * Required fields:
   * - id: A unique identifier for the verification method
   * - type: A supported verification method type (supported: Ed25519VerificationKey2018, Ed25519VerificationKey2020, JsonWebKey2020)
   * - controller: DID of the controller of the verification method
   * - verification_material: Public key of the verification method (supported: publicJwk, publicKeyBase58, publicKeyMultibase)
   */
  verificationMethod: VerificationMethod[];
  /**
   * authentication is a list of verification methods that can be used to
   * authenticate as the DID subject.
   */
  authentication: string[];
  /**
   * assertionMethod is a list of verification methods that can be used to
   * assert statements as the DID subject.
   */
  assertionMethod: string[];
  /**
   * capabilityInvocation is a list of verification methods that can be used to
   * invoke capabilities as the DID subject.
   */
  capabilityInvocation: string[];
  /**
   * capabilityDelegation is a list of verification methods that can be used to
   * delegate capabilities as the DID subject.
   */
  capabilityDelegation: string[];
  /**
   * keyAgreement is a list of verification methods that can be used to perform
   * key agreement as the DID subject.
   */
  keyAgreement: string[];
  /**
   * service is a list of services that can be used to interact with the DID subject.
   * Documentation: https://www.w3.org/TR/did-core/#services
   *
   * Required fields:
   * - id: A unique identifier for the service
   * - type: A service type defined in DID Specification Registries
   * - service_endpoint: Service endpoint(s), provided as a URI or set of URIs
   */
  service: Service[];
  /** alsoKnownAs is a list of DIDs that are known to refer to the same DID subject. */
  alsoKnownAs: string[];
  /**
   * Updated version ID of the DID Document.
   * Links to next/previous versions of the DID Document will be automatically updated.
   *
   * Format: <uuid>
   */
  versionId: string;
}

export interface MsgUpdateDidDocResponse {
  /** Return the updated DID Document with metadata */
  value: DidDocWithMetadata | undefined;
}

/** MsgDeactivateDidDocPayload defines the structure of the payload for deactivating an existing DID document */
export interface MsgDeactivateDidDocPayload {
  /** Unique identifier of the DID Document to be deactivated */
  id: string;
  /**
   * Version ID of the DID Document to be deactivated
   * This is primarily used as a sanity check to ensure that the correct DID Document is being deactivated.
   */
  versionId: string;
}

/** MsgDeactivateDidDocResponse defines response type for Msg/DeactivateDidDoc. */
export interface MsgDeactivateDidDocResponse {
  /** Return the deactivated DID Document with metadata */
  value: DidDocWithMetadata | undefined;
}

function createBaseMsgCreateDidDoc(): MsgCreateDidDoc {
  return { payload: undefined, signatures: [] };
}

export const MsgCreateDidDoc = {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDidDoc();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.payload = MsgCreateDidDocPayload.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.signatures.push(SignInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDidDoc {
    return {
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

  create<I extends Exact<DeepPartial<MsgCreateDidDoc>, I>>(base?: I): MsgCreateDidDoc {
    return MsgCreateDidDoc.fromPartial(base ?? {});
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

function createBaseMsgUpdateDidDoc(): MsgUpdateDidDoc {
  return { payload: undefined, signatures: [] };
}

export const MsgUpdateDidDoc = {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDidDoc();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.payload = MsgUpdateDidDocPayload.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.signatures.push(SignInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDidDoc {
    return {
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

  create<I extends Exact<DeepPartial<MsgUpdateDidDoc>, I>>(base?: I): MsgUpdateDidDoc {
    return MsgUpdateDidDoc.fromPartial(base ?? {});
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

function createBaseMsgDeactivateDidDoc(): MsgDeactivateDidDoc {
  return { payload: undefined, signatures: [] };
}

export const MsgDeactivateDidDoc = {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeactivateDidDoc();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.payload = MsgDeactivateDidDocPayload.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.signatures.push(SignInfo.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgDeactivateDidDoc {
    return {
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

  create<I extends Exact<DeepPartial<MsgDeactivateDidDoc>, I>>(base?: I): MsgDeactivateDidDoc {
    return MsgDeactivateDidDoc.fromPartial(base ?? {});
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

function createBaseSignInfo(): SignInfo {
  return { verificationMethodId: "", signature: new Uint8Array() };
}

export const SignInfo = {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.verificationMethodId = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.signature = reader.bytes();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SignInfo {
    return {
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

  create<I extends Exact<DeepPartial<SignInfo>, I>>(base?: I): SignInfo {
    return SignInfo.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<SignInfo>, I>>(object: I): SignInfo {
    const message = createBaseSignInfo();
    message.verificationMethodId = object.verificationMethodId ?? "";
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
};

function createBaseMsgCreateDidDocPayload(): MsgCreateDidDocPayload {
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
    versionId: "",
  };
}

export const MsgCreateDidDocPayload = {
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
    for (const v of message.service) {
      Service.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.alsoKnownAs) {
      writer.uint32(90).string(v!);
    }
    if (message.versionId !== "") {
      writer.uint32(98).string(message.versionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDidDocPayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDidDocPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.context.push(reader.string());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.id = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.controller.push(reader.string());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.verificationMethod.push(VerificationMethod.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.authentication.push(reader.string());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.assertionMethod.push(reader.string());
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.capabilityInvocation.push(reader.string());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.capabilityDelegation.push(reader.string());
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.keyAgreement.push(reader.string());
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.service.push(Service.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.alsoKnownAs.push(reader.string());
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.versionId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDidDocPayload {
    return {
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
      service: Array.isArray(object?.service) ? object.service.map((e: any) => Service.fromJSON(e)) : [],
      alsoKnownAs: Array.isArray(object?.alsoKnownAs) ? object.alsoKnownAs.map((e: any) => String(e)) : [],
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
    if (message.service) {
      obj.service = message.service.map((e) => e ? Service.toJSON(e) : undefined);
    } else {
      obj.service = [];
    }
    if (message.alsoKnownAs) {
      obj.alsoKnownAs = message.alsoKnownAs.map((e) => e);
    } else {
      obj.alsoKnownAs = [];
    }
    message.versionId !== undefined && (obj.versionId = message.versionId);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateDidDocPayload>, I>>(base?: I): MsgCreateDidDocPayload {
    return MsgCreateDidDocPayload.fromPartial(base ?? {});
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
    message.service = object.service?.map((e) => Service.fromPartial(e)) || [];
    message.alsoKnownAs = object.alsoKnownAs?.map((e) => e) || [];
    message.versionId = object.versionId ?? "";
    return message;
  },
};

function createBaseMsgCreateDidDocResponse(): MsgCreateDidDocResponse {
  return { value: undefined };
}

export const MsgCreateDidDocResponse = {
  encode(message: MsgCreateDidDocResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      DidDocWithMetadata.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDidDocResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDidDocResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.value = DidDocWithMetadata.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDidDocResponse {
    return { value: isSet(object.value) ? DidDocWithMetadata.fromJSON(object.value) : undefined };
  },

  toJSON(message: MsgCreateDidDocResponse): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value ? DidDocWithMetadata.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgCreateDidDocResponse>, I>>(base?: I): MsgCreateDidDocResponse {
    return MsgCreateDidDocResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateDidDocResponse>, I>>(object: I): MsgCreateDidDocResponse {
    const message = createBaseMsgCreateDidDocResponse();
    message.value = (object.value !== undefined && object.value !== null)
      ? DidDocWithMetadata.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateDidDocPayload(): MsgUpdateDidDocPayload {
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
    versionId: "",
  };
}

export const MsgUpdateDidDocPayload = {
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
    for (const v of message.service) {
      Service.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    for (const v of message.alsoKnownAs) {
      writer.uint32(90).string(v!);
    }
    if (message.versionId !== "") {
      writer.uint32(98).string(message.versionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDidDocPayload {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDidDocPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.context.push(reader.string());
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.id = reader.string();
          continue;
        case 3:
          if (tag != 26) {
            break;
          }

          message.controller.push(reader.string());
          continue;
        case 4:
          if (tag != 34) {
            break;
          }

          message.verificationMethod.push(VerificationMethod.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag != 42) {
            break;
          }

          message.authentication.push(reader.string());
          continue;
        case 6:
          if (tag != 50) {
            break;
          }

          message.assertionMethod.push(reader.string());
          continue;
        case 7:
          if (tag != 58) {
            break;
          }

          message.capabilityInvocation.push(reader.string());
          continue;
        case 8:
          if (tag != 66) {
            break;
          }

          message.capabilityDelegation.push(reader.string());
          continue;
        case 9:
          if (tag != 74) {
            break;
          }

          message.keyAgreement.push(reader.string());
          continue;
        case 10:
          if (tag != 82) {
            break;
          }

          message.service.push(Service.decode(reader, reader.uint32()));
          continue;
        case 11:
          if (tag != 90) {
            break;
          }

          message.alsoKnownAs.push(reader.string());
          continue;
        case 12:
          if (tag != 98) {
            break;
          }

          message.versionId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDidDocPayload {
    return {
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
      service: Array.isArray(object?.service) ? object.service.map((e: any) => Service.fromJSON(e)) : [],
      alsoKnownAs: Array.isArray(object?.alsoKnownAs) ? object.alsoKnownAs.map((e: any) => String(e)) : [],
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
    if (message.service) {
      obj.service = message.service.map((e) => e ? Service.toJSON(e) : undefined);
    } else {
      obj.service = [];
    }
    if (message.alsoKnownAs) {
      obj.alsoKnownAs = message.alsoKnownAs.map((e) => e);
    } else {
      obj.alsoKnownAs = [];
    }
    message.versionId !== undefined && (obj.versionId = message.versionId);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateDidDocPayload>, I>>(base?: I): MsgUpdateDidDocPayload {
    return MsgUpdateDidDocPayload.fromPartial(base ?? {});
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
    message.service = object.service?.map((e) => Service.fromPartial(e)) || [];
    message.alsoKnownAs = object.alsoKnownAs?.map((e) => e) || [];
    message.versionId = object.versionId ?? "";
    return message;
  },
};

function createBaseMsgUpdateDidDocResponse(): MsgUpdateDidDocResponse {
  return { value: undefined };
}

export const MsgUpdateDidDocResponse = {
  encode(message: MsgUpdateDidDocResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      DidDocWithMetadata.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDidDocResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateDidDocResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.value = DidDocWithMetadata.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateDidDocResponse {
    return { value: isSet(object.value) ? DidDocWithMetadata.fromJSON(object.value) : undefined };
  },

  toJSON(message: MsgUpdateDidDocResponse): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value ? DidDocWithMetadata.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgUpdateDidDocResponse>, I>>(base?: I): MsgUpdateDidDocResponse {
    return MsgUpdateDidDocResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateDidDocResponse>, I>>(object: I): MsgUpdateDidDocResponse {
    const message = createBaseMsgUpdateDidDocResponse();
    message.value = (object.value !== undefined && object.value !== null)
      ? DidDocWithMetadata.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseMsgDeactivateDidDocPayload(): MsgDeactivateDidDocPayload {
  return { id: "", versionId: "" };
}

export const MsgDeactivateDidDocPayload = {
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
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeactivateDidDocPayload();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag != 18) {
            break;
          }

          message.versionId = reader.string();
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgDeactivateDidDocPayload {
    return {
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

  create<I extends Exact<DeepPartial<MsgDeactivateDidDocPayload>, I>>(base?: I): MsgDeactivateDidDocPayload {
    return MsgDeactivateDidDocPayload.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeactivateDidDocPayload>, I>>(object: I): MsgDeactivateDidDocPayload {
    const message = createBaseMsgDeactivateDidDocPayload();
    message.id = object.id ?? "";
    message.versionId = object.versionId ?? "";
    return message;
  },
};

function createBaseMsgDeactivateDidDocResponse(): MsgDeactivateDidDocResponse {
  return { value: undefined };
}

export const MsgDeactivateDidDocResponse = {
  encode(message: MsgDeactivateDidDocResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      DidDocWithMetadata.encode(message.value, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeactivateDidDocResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeactivateDidDocResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag != 10) {
            break;
          }

          message.value = DidDocWithMetadata.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) == 4 || tag == 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MsgDeactivateDidDocResponse {
    return { value: isSet(object.value) ? DidDocWithMetadata.fromJSON(object.value) : undefined };
  },

  toJSON(message: MsgDeactivateDidDocResponse): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = message.value ? DidDocWithMetadata.toJSON(message.value) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<MsgDeactivateDidDocResponse>, I>>(base?: I): MsgDeactivateDidDocResponse {
    return MsgDeactivateDidDocResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeactivateDidDocResponse>, I>>(object: I): MsgDeactivateDidDocResponse {
    const message = createBaseMsgDeactivateDidDocResponse();
    message.value = (object.value !== undefined && object.value !== null)
      ? DidDocWithMetadata.fromPartial(object.value)
      : undefined;
    return message;
  },
};

/** Msg defines the Cosmos SDK Msg service for the cheqd.did.v2 module. */
export interface Msg {
  /** CreateDidDoc defines a method for creating a new DID document */
  CreateDidDoc(request: MsgCreateDidDoc): Promise<MsgCreateDidDocResponse>;
  /** UpdateDidDoc defines a method for updating an existing DID document */
  UpdateDidDoc(request: MsgUpdateDidDoc): Promise<MsgUpdateDidDocResponse>;
  /** DeactivateDidDoc defines a method for deactivating an existing DID document */
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
    return promise.then((data) => MsgCreateDidDocResponse.decode(_m0.Reader.create(data)));
  }

  UpdateDidDoc(request: MsgUpdateDidDoc): Promise<MsgUpdateDidDocResponse> {
    const data = MsgUpdateDidDoc.encode(request).finish();
    const promise = this.rpc.request(this.service, "UpdateDidDoc", data);
    return promise.then((data) => MsgUpdateDidDocResponse.decode(_m0.Reader.create(data)));
  }

  DeactivateDidDoc(request: MsgDeactivateDidDoc): Promise<MsgDeactivateDidDocResponse> {
    const data = MsgDeactivateDidDoc.encode(request).finish();
    const promise = this.rpc.request(this.service, "DeactivateDidDoc", data);
    return promise.then((data) => MsgDeactivateDidDocResponse.decode(_m0.Reader.create(data)));
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
