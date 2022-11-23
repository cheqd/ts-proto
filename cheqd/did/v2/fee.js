"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeeParams_TxTypesEntry = exports.FeeParams = exports.protobufPackage = void 0;
/* eslint-disable */
const _m0 = __importStar(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "cheqd.did.v2";
function createBaseFeeParams() {
    return { txTypes: {}, burnFactor: "" };
}
exports.FeeParams = {
    encode(message, writer = _m0.Writer.create()) {
        Object.entries(message.txTypes).forEach(([key, value]) => {
            exports.FeeParams_TxTypesEntry.encode({ key: key, value }, writer.uint32(10).fork()).ldelim();
        });
        if (message.burnFactor !== "") {
            writer.uint32(18).string(message.burnFactor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeeParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    const entry1 = exports.FeeParams_TxTypesEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.txTypes[entry1.key] = entry1.value;
                    }
                    break;
                case 2:
                    message.burnFactor = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            txTypes: isObject(object.txTypes)
                ? Object.entries(object.txTypes).reduce((acc, [key, value]) => {
                    acc[key] = coin_1.Coin.fromJSON(value);
                    return acc;
                }, {})
                : {},
            burnFactor: isSet(object.burnFactor) ? String(object.burnFactor) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        obj.txTypes = {};
        if (message.txTypes) {
            Object.entries(message.txTypes).forEach(([k, v]) => {
                obj.txTypes[k] = coin_1.Coin.toJSON(v);
            });
        }
        message.burnFactor !== undefined && (obj.burnFactor = message.burnFactor);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseFeeParams();
        message.txTypes = Object.entries((_a = object.txTypes) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = coin_1.Coin.fromPartial(value);
            }
            return acc;
        }, {});
        message.burnFactor = (_b = object.burnFactor) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseFeeParams_TxTypesEntry() {
    return { key: "", value: undefined };
}
exports.FeeParams_TxTypesEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            coin_1.Coin.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeeParams_TxTypesEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value) ? coin_1.Coin.fromJSON(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined && (obj.value = message.value ? coin_1.Coin.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseFeeParams_TxTypesEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value = (object.value !== undefined && object.value !== null) ? coin_1.Coin.fromPartial(object.value) : undefined;
        return message;
    },
};
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
