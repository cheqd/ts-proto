// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: feemarket/feemarket/v1/params.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

/**
 * Params contains the required set of parameters for the EIP1559 fee market
 * plugin implementation.
 */
export interface Params {
  /**
   * Alpha is the amount we additively increase the learning rate
   * when it is above or below the target +/- threshold.
   *
   * Must be > 0.
   */
  alpha: string;
  /**
   * Beta is the amount we multiplicatively decrease the learning rate
   * when it is within the target +/- threshold.
   *
   * Must be [0, 1].
   */
  beta: string;
  /**
   * Gamma is the threshold for the learning rate. If the learning rate is
   * above or below the target +/- threshold, we additively increase the
   * learning rate by Alpha. Otherwise, we multiplicatively decrease the
   * learning rate by Beta.
   *
   * Must be [0, 0.5].
   */
  gamma: string;
  /**
   * Delta is the amount we additively increase/decrease the gas price when the
   * net block utilization difference in the window is above/below the target
   * utilization.
   */
  delta: string;
  /**
   * MinBaseGasPrice determines the initial gas price of the module and the
   * global minimum for the network.
   */
  minBaseGasPrice: string;
  /** MinLearningRate is the lower bound for the learning rate. */
  minLearningRate: string;
  /** MaxLearningRate is the upper bound for the learning rate. */
  maxLearningRate: string;
  /** MaxBlockUtilization is the maximum block utilization. */
  maxBlockUtilization: bigint;
  /**
   * Window defines the window size for calculating an adaptive learning rate
   * over a moving window of blocks.
   */
  window: bigint;
  /** FeeDenom is the denom that will be used for all fee payments. */
  feeDenom: string;
  /**
   * Enabled is a boolean that determines whether the EIP1559 fee market is
   * enabled.
   */
  enabled: boolean;
  /**
   * DistributeFees is a boolean that determines whether the fees are burned or
   * distributed to all stakers.
   */
  distributeFees: boolean;
}

function createBaseParams(): Params {
  return {
    alpha: "",
    beta: "",
    gamma: "",
    delta: "",
    minBaseGasPrice: "",
    minLearningRate: "",
    maxLearningRate: "",
    maxBlockUtilization: 0n,
    window: 0n,
    feeDenom: "",
    enabled: false,
    distributeFees: false,
  };
}

export const Params: MessageFns<Params> = {
  encode(message: Params, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.alpha !== "") {
      writer.uint32(10).string(message.alpha);
    }
    if (message.beta !== "") {
      writer.uint32(18).string(message.beta);
    }
    if (message.gamma !== "") {
      writer.uint32(26).string(message.gamma);
    }
    if (message.delta !== "") {
      writer.uint32(34).string(message.delta);
    }
    if (message.minBaseGasPrice !== "") {
      writer.uint32(42).string(message.minBaseGasPrice);
    }
    if (message.minLearningRate !== "") {
      writer.uint32(50).string(message.minLearningRate);
    }
    if (message.maxLearningRate !== "") {
      writer.uint32(58).string(message.maxLearningRate);
    }
    if (message.maxBlockUtilization !== 0n) {
      if (BigInt.asUintN(64, message.maxBlockUtilization) !== message.maxBlockUtilization) {
        throw new globalThis.Error("value provided for field message.maxBlockUtilization of type uint64 too large");
      }
      writer.uint32(64).uint64(message.maxBlockUtilization);
    }
    if (message.window !== 0n) {
      if (BigInt.asUintN(64, message.window) !== message.window) {
        throw new globalThis.Error("value provided for field message.window of type uint64 too large");
      }
      writer.uint32(72).uint64(message.window);
    }
    if (message.feeDenom !== "") {
      writer.uint32(82).string(message.feeDenom);
    }
    if (message.enabled !== false) {
      writer.uint32(88).bool(message.enabled);
    }
    if (message.distributeFees !== false) {
      writer.uint32(96).bool(message.distributeFees);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.alpha = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.beta = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.gamma = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.delta = reader.string();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.minBaseGasPrice = reader.string();
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.minLearningRate = reader.string();
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          message.maxLearningRate = reader.string();
          continue;
        }
        case 8: {
          if (tag !== 64) {
            break;
          }

          message.maxBlockUtilization = reader.uint64() as bigint;
          continue;
        }
        case 9: {
          if (tag !== 72) {
            break;
          }

          message.window = reader.uint64() as bigint;
          continue;
        }
        case 10: {
          if (tag !== 82) {
            break;
          }

          message.feeDenom = reader.string();
          continue;
        }
        case 11: {
          if (tag !== 88) {
            break;
          }

          message.enabled = reader.bool();
          continue;
        }
        case 12: {
          if (tag !== 96) {
            break;
          }

          message.distributeFees = reader.bool();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      alpha: isSet(object.alpha) ? globalThis.String(object.alpha) : "",
      beta: isSet(object.beta) ? globalThis.String(object.beta) : "",
      gamma: isSet(object.gamma) ? globalThis.String(object.gamma) : "",
      delta: isSet(object.delta) ? globalThis.String(object.delta) : "",
      minBaseGasPrice: isSet(object.minBaseGasPrice) ? globalThis.String(object.minBaseGasPrice) : "",
      minLearningRate: isSet(object.minLearningRate) ? globalThis.String(object.minLearningRate) : "",
      maxLearningRate: isSet(object.maxLearningRate) ? globalThis.String(object.maxLearningRate) : "",
      maxBlockUtilization: isSet(object.maxBlockUtilization) ? BigInt(object.maxBlockUtilization) : 0n,
      window: isSet(object.window) ? BigInt(object.window) : 0n,
      feeDenom: isSet(object.feeDenom) ? globalThis.String(object.feeDenom) : "",
      enabled: isSet(object.enabled) ? globalThis.Boolean(object.enabled) : false,
      distributeFees: isSet(object.distributeFees) ? globalThis.Boolean(object.distributeFees) : false,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    if (message.alpha !== "") {
      obj.alpha = message.alpha;
    }
    if (message.beta !== "") {
      obj.beta = message.beta;
    }
    if (message.gamma !== "") {
      obj.gamma = message.gamma;
    }
    if (message.delta !== "") {
      obj.delta = message.delta;
    }
    if (message.minBaseGasPrice !== "") {
      obj.minBaseGasPrice = message.minBaseGasPrice;
    }
    if (message.minLearningRate !== "") {
      obj.minLearningRate = message.minLearningRate;
    }
    if (message.maxLearningRate !== "") {
      obj.maxLearningRate = message.maxLearningRate;
    }
    if (message.maxBlockUtilization !== 0n) {
      obj.maxBlockUtilization = message.maxBlockUtilization.toString();
    }
    if (message.window !== 0n) {
      obj.window = message.window.toString();
    }
    if (message.feeDenom !== "") {
      obj.feeDenom = message.feeDenom;
    }
    if (message.enabled !== false) {
      obj.enabled = message.enabled;
    }
    if (message.distributeFees !== false) {
      obj.distributeFees = message.distributeFees;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Params>, I>>(base?: I): Params {
    return Params.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.alpha = object.alpha ?? "";
    message.beta = object.beta ?? "";
    message.gamma = object.gamma ?? "";
    message.delta = object.delta ?? "";
    message.minBaseGasPrice = object.minBaseGasPrice ?? "";
    message.minLearningRate = object.minLearningRate ?? "";
    message.maxLearningRate = object.maxLearningRate ?? "";
    message.maxBlockUtilization = object.maxBlockUtilization ?? 0n;
    message.window = object.window ?? 0n;
    message.feeDenom = object.feeDenom ?? "";
    message.enabled = object.enabled ?? false;
    message.distributeFees = object.distributeFees ?? false;
    return message;
  },
};

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

interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
