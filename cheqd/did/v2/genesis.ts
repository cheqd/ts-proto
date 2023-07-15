/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { DidDocWithMetadata } from "./diddoc";
import { FeeParams } from "./fee";

/**
 * DidDocVersionSet contains all versions of DID Documents and their metadata for a given DID.
 * The latest version of the DID Document set is stored in the latest_version field.
 */
export interface DidDocVersionSet {
  /** Latest version of the DID Document set */
  latestVersion: string;
  /** All versions of the DID Document set */
  didDocs: DidDocWithMetadata[];
}

/** GenesisState defines the cheqd DID module's genesis state. */
export interface GenesisState {
  /**
   * Namespace for the DID module
   * Example: mainnet, testnet, local
   */
  didNamespace: string;
  /** All DID Document version sets (contains all versions of all DID Documents) */
  versionSets: DidDocVersionSet[];
  /**
   * Fee parameters for the DID module
   * Defines fixed fees and burn percentage for each DID operation type (create, update, delete)
   */
  feeParams: FeeParams | undefined;
}

function createBaseDidDocVersionSet(): DidDocVersionSet {
  return { latestVersion: "", didDocs: [] };
}

export const DidDocVersionSet = {
  encode(message: DidDocVersionSet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.latestVersion !== "") {
      writer.uint32(10).string(message.latestVersion);
    }
    for (const v of message.didDocs) {
      DidDocWithMetadata.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DidDocVersionSet {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDidDocVersionSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.latestVersion = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.didDocs.push(DidDocWithMetadata.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DidDocVersionSet {
    return {
      latestVersion: isSet(object.latestVersion) ? String(object.latestVersion) : "",
      didDocs: Array.isArray(object?.didDocs) ? object.didDocs.map((e: any) => DidDocWithMetadata.fromJSON(e)) : [],
    };
  },

  toJSON(message: DidDocVersionSet): unknown {
    const obj: any = {};
    message.latestVersion !== undefined && (obj.latestVersion = message.latestVersion);
    if (message.didDocs) {
      obj.didDocs = message.didDocs.map((e) => e ? DidDocWithMetadata.toJSON(e) : undefined);
    } else {
      obj.didDocs = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DidDocVersionSet>, I>>(base?: I): DidDocVersionSet {
    return DidDocVersionSet.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<DidDocVersionSet>, I>>(object: I): DidDocVersionSet {
    const message = createBaseDidDocVersionSet();
    message.latestVersion = object.latestVersion ?? "";
    message.didDocs = object.didDocs?.map((e) => DidDocWithMetadata.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGenesisState(): GenesisState {
  return { didNamespace: "", versionSets: [], feeParams: undefined };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.didNamespace !== "") {
      writer.uint32(10).string(message.didNamespace);
    }
    for (const v of message.versionSets) {
      DidDocVersionSet.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.feeParams !== undefined) {
      FeeParams.encode(message.feeParams, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.didNamespace = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.versionSets.push(DidDocVersionSet.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.feeParams = FeeParams.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      didNamespace: isSet(object.didNamespace) ? String(object.didNamespace) : "",
      versionSets: Array.isArray(object?.versionSets)
        ? object.versionSets.map((e: any) => DidDocVersionSet.fromJSON(e))
        : [],
      feeParams: isSet(object.feeParams) ? FeeParams.fromJSON(object.feeParams) : undefined,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.didNamespace !== undefined && (obj.didNamespace = message.didNamespace);
    if (message.versionSets) {
      obj.versionSets = message.versionSets.map((e) => e ? DidDocVersionSet.toJSON(e) : undefined);
    } else {
      obj.versionSets = [];
    }
    message.feeParams !== undefined &&
      (obj.feeParams = message.feeParams ? FeeParams.toJSON(message.feeParams) : undefined);
    return obj;
  },

  create<I extends Exact<DeepPartial<GenesisState>, I>>(base?: I): GenesisState {
    return GenesisState.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.didNamespace = object.didNamespace ?? "";
    message.versionSets = object.versionSets?.map((e) => DidDocVersionSet.fromPartial(e)) || [];
    message.feeParams = (object.feeParams !== undefined && object.feeParams !== null)
      ? FeeParams.fromPartial(object.feeParams)
      : undefined;
    return message;
  },
};

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
