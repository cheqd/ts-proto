"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: feemarket/feemarket/v1/genesis.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.State = exports.GenesisState = void 0;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
const params_js_1 = require("./params.js");
function createBaseGenesisState() {
    return { params: undefined, state: undefined };
}
exports.GenesisState = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.params !== undefined) {
            params_js_1.Params.encode(message.params, writer.uint32(10).fork()).join();
        }
        if (message.state !== undefined) {
            exports.State.encode(message.state, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.params = params_js_1.Params.decode(reader, reader.uint32());
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.state = exports.State.decode(reader, reader.uint32());
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
    fromJSON(object) {
        return {
            params: isSet(object.params) ? params_js_1.Params.fromJSON(object.params) : undefined,
            state: isSet(object.state) ? exports.State.fromJSON(object.state) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.params !== undefined) {
            obj.params = params_js_1.Params.toJSON(message.params);
        }
        if (message.state !== undefined) {
            obj.state = exports.State.toJSON(message.state);
        }
        return obj;
    },
    create(base) {
        return exports.GenesisState.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = (object.params !== undefined && object.params !== null)
            ? params_js_1.Params.fromPartial(object.params)
            : undefined;
        message.state = (object.state !== undefined && object.state !== null) ? exports.State.fromPartial(object.state) : undefined;
        return message;
    },
};
function createBaseState() {
    return { baseGasPrice: "", learningRate: "", window: [], index: 0n };
}
exports.State = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.baseGasPrice !== "") {
            writer.uint32(10).string(message.baseGasPrice);
        }
        if (message.learningRate !== "") {
            writer.uint32(18).string(message.learningRate);
        }
        writer.uint32(26).fork();
        for (const v of message.window) {
            if (BigInt.asUintN(64, v) !== v) {
                throw new globalThis.Error("a value provided in array field window of type uint64 is too large");
            }
            writer.uint64(v);
        }
        writer.join();
        if (message.index !== 0n) {
            if (BigInt.asUintN(64, message.index) !== message.index) {
                throw new globalThis.Error("value provided for field message.index of type uint64 too large");
            }
            writer.uint32(32).uint64(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.baseGasPrice = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.learningRate = reader.string();
                    continue;
                }
                case 3: {
                    if (tag === 24) {
                        message.window.push(reader.uint64());
                        continue;
                    }
                    if (tag === 26) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.window.push(reader.uint64());
                        }
                        continue;
                    }
                    break;
                }
                case 4: {
                    if (tag !== 32) {
                        break;
                    }
                    message.index = reader.uint64();
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
    fromJSON(object) {
        return {
            baseGasPrice: isSet(object.baseGasPrice) ? globalThis.String(object.baseGasPrice) : "",
            learningRate: isSet(object.learningRate) ? globalThis.String(object.learningRate) : "",
            window: globalThis.Array.isArray(object?.window) ? object.window.map((e) => BigInt(e)) : [],
            index: isSet(object.index) ? BigInt(object.index) : 0n,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.baseGasPrice !== "") {
            obj.baseGasPrice = message.baseGasPrice;
        }
        if (message.learningRate !== "") {
            obj.learningRate = message.learningRate;
        }
        if (message.window?.length) {
            obj.window = message.window.map((e) => e.toString());
        }
        if (message.index !== 0n) {
            obj.index = message.index.toString();
        }
        return obj;
    },
    create(base) {
        return exports.State.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseState();
        message.baseGasPrice = object.baseGasPrice ?? "";
        message.learningRate = object.learningRate ?? "";
        message.window = object.window?.map((e) => e) || [];
        message.index = object.index ?? 0n;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=genesis.js.map