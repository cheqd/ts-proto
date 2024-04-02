"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageResponse = exports.PageRequest = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_js_1 = __importDefault(require("protobufjs/minimal.js"));
function createBasePageRequest() {
    return { key: new Uint8Array(0), offset: BigInt("0"), limit: BigInt("0"), countTotal: false, reverse: false };
}
exports.PageRequest = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : minimal_js_1.default.Reader.create(input);
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
                    message.offset = longToBigint(reader.uint64());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.limit = longToBigint(reader.uint64());
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
    fromJSON(object) {
        return {
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(0),
            offset: isSet(object.offset) ? BigInt(object.offset) : BigInt("0"),
            limit: isSet(object.limit) ? BigInt(object.limit) : BigInt("0"),
            countTotal: isSet(object.countTotal) ? globalThis.Boolean(object.countTotal) : false,
            reverse: isSet(object.reverse) ? globalThis.Boolean(object.reverse) : false,
        };
    },
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return exports.PageRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePageRequest();
        message.key = object.key ?? new Uint8Array(0);
        message.offset = object.offset ?? BigInt("0");
        message.limit = object.limit ?? BigInt("0");
        message.countTotal = object.countTotal ?? false;
        message.reverse = object.reverse ?? false;
        return message;
    },
};
function createBasePageResponse() {
    return { nextKey: new Uint8Array(0), total: BigInt("0") };
}
exports.PageResponse = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : minimal_js_1.default.Reader.create(input);
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
                    message.total = longToBigint(reader.uint64());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            nextKey: isSet(object.nextKey) ? bytesFromBase64(object.nextKey) : new Uint8Array(0),
            total: isSet(object.total) ? BigInt(object.total) : BigInt("0"),
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.nextKey.length !== 0) {
            obj.nextKey = base64FromBytes(message.nextKey);
        }
        if (message.total !== BigInt("0")) {
            obj.total = message.total.toString();
        }
        return obj;
    },
    create(base) {
        return exports.PageResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePageResponse();
        message.nextKey = object.nextKey ?? new Uint8Array(0);
        message.total = object.total ?? BigInt("0");
        return message;
    },
};
function bytesFromBase64(b64) {
    if (globalThis.Buffer) {
        return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
    }
    else {
        const bin = globalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (globalThis.Buffer) {
        return globalThis.Buffer.from(arr).toString("base64");
    }
    else {
        const bin = [];
        arr.forEach((byte) => {
            bin.push(globalThis.String.fromCharCode(byte));
        });
        return globalThis.btoa(bin.join(""));
    }
}
function longToBigint(long) {
    return BigInt(long.toString());
}
if (minimal_js_1.default.util.Long !== long_1.default) {
    minimal_js_1.default.util.Long = long_1.default;
    minimal_js_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=pagination.js.map