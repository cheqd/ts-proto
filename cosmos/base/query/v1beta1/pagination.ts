/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";

/**
 * PageRequest is to be embedded in gRPC request messages for efficient
 * pagination. Ex:
 *
 *  message SomeRequest {
 *          Foo some_parameter = 1;
 *          PageRequest pagination = 2;
 *  }
 */
export interface PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   */
  key: Uint8Array;
  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   */
  offset: bigint;
  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   */
  limit: bigint;
  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  countTotal: boolean;
  /**
   * reverse is set to true if results are to be returned in the descending order.
   *
   * Since: cosmos-sdk 0.43
   */
  reverse: boolean;
}

/**
 * PageResponse is to be embedded in gRPC response messages where the
 * corresponding request message has used PageRequest.
 *
 *  message SomeResponse {
 *          repeated Bar results = 1;
 *          PageResponse page = 2;
 *  }
 */
export interface PageResponse {
  /**
   * next_key is the key to be passed to PageRequest.key to
   * query the next page most efficiently. It will be empty if
   * there are no more results.
   */
  nextKey: Uint8Array;
  /**
   * total is total number of results available if PageRequest.count_total
   * was set, its value is undefined otherwise
   */
  total: bigint;
}

function createBasePageRequest(): PageRequest {
  return { key: new Uint8Array(0), offset: BigInt("0"), limit: BigInt("0"), countTotal: false, reverse: false };
}

export const PageRequest = {
  encode(message: PageRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.offset !== BigInt("0")) {
      if (BigInt.asUintN(64, message.offset) !== message.offset) {
        throw new globalThis.Error("value provided for field message.offset of type uint64 too large");
      }
      writer.uint32(16).uint64(message.offset.toString());
    }
    if (message.limit !== BigInt("0")) {
      if (BigInt.asUintN(64, message.limit) !== message.limit) {
        throw new globalThis.Error("value provided for field message.limit of type uint64 too large");
      }
      writer.uint32(24).uint64(message.limit.toString());
    }
    if (message.countTotal === true) {
      writer.uint32(32).bool(message.countTotal);
    }
    if (message.reverse === true) {
      writer.uint32(40).bool(message.reverse);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PageRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePageRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.bytes();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.offset = longToBigint(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.limit = longToBigint(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.countTotal = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.reverse = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PageRequest {
    return {
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0),
      offset: isSet(object.offset) ? BigInt(object.offset) : BigInt("0"),
      limit: isSet(object.limit) ? BigInt(object.limit) : BigInt("0"),
      countTotal: isSet(object.countTotal) ? globalThis.Boolean(object.countTotal) : false,
      reverse: isSet(object.reverse) ? globalThis.Boolean(object.reverse) : false,
    };
  },

  toJSON(message: PageRequest): unknown {
    const obj: any = {};
    if (message.key.length !== 0) {
      obj.key = base64FromBytes(message.key);
    }
    if (message.offset !== BigInt("0")) {
      obj.offset = message.offset.toString();
    }
    if (message.limit !== BigInt("0")) {
      obj.limit = message.limit.toString();
    }
    if (message.countTotal === true) {
      obj.countTotal = message.countTotal;
    }
    if (message.reverse === true) {
      obj.reverse = message.reverse;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PageRequest>, I>>(base?: I): PageRequest {
    return PageRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PageRequest>, I>>(object: I): PageRequest {
    const message = createBasePageRequest();
    message.key = object.key ?? new Uint8Array(0);
    message.offset = object.offset ?? BigInt("0");
    message.limit = object.limit ?? BigInt("0");
    message.countTotal = object.countTotal ?? false;
    message.reverse = object.reverse ?? false;
    return message;
  },
};

function createBasePageResponse(): PageResponse {
  return { nextKey: new Uint8Array(0), total: BigInt("0") };
}

export const PageResponse = {
  encode(message: PageResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nextKey.length !== 0) {
      writer.uint32(10).bytes(message.nextKey);
    }
    if (message.total !== BigInt("0")) {
      if (BigInt.asUintN(64, message.total) !== message.total) {
        throw new globalThis.Error("value provided for field message.total of type uint64 too large");
      }
      writer.uint32(16).uint64(message.total.toString());
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PageResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePageResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nextKey = reader.bytes();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.total = longToBigint(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PageResponse {
    return {
      nextKey: isSet(object.nextKey) ? bytesFromBase64(object.nextKey) : new Uint8Array(0),
      total: isSet(object.total) ? BigInt(object.total) : BigInt("0"),
    };
  },

  toJSON(message: PageResponse): unknown {
    const obj: any = {};
    if (message.nextKey.length !== 0) {
      obj.nextKey = base64FromBytes(message.nextKey);
    }
    if (message.total !== BigInt("0")) {
      obj.total = message.total.toString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PageResponse>, I>>(base?: I): PageResponse {
    return PageResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PageResponse>, I>>(object: I): PageResponse {
    const message = createBasePageResponse();
    message.nextKey = object.nextKey ?? new Uint8Array(0);
    message.total = object.total ?? BigInt("0");
    return message;
  },
};

function bytesFromBase64(b64: string): Uint8Array {
  if ((globalThis as any).Buffer) {
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
  if ((globalThis as any).Buffer) {
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

function longToBigint(long: Long) {
  return BigInt(long.toString());
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
