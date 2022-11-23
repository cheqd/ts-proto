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
exports.FeeParams_MediaTypesEntry = exports.FeeParams = exports.protobufPackage = void 0;
/* eslint-disable */
const _m0 = __importStar(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "cheqd.resource.v2";
function createBaseFeeParams() {
    return { mediaTypes: {}, burnFactor: "" };
}
exports.FeeParams = {
    encode(message, writer = _m0.Writer.create()) {
        Object.entries(message.mediaTypes).forEach(([key, value]) => {
            exports.FeeParams_MediaTypesEntry.encode({ key: key, value }, writer.uint32(10).fork()).ldelim();
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
                    const entry1 = exports.FeeParams_MediaTypesEntry.decode(reader, reader.uint32());
                    if (entry1.value !== undefined) {
                        message.mediaTypes[entry1.key] = entry1.value;
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
            mediaTypes: isObject(object.mediaTypes)
                ? Object.entries(object.mediaTypes).reduce((acc, [key, value]) => {
                    acc[key] = coin_1.Coin.fromJSON(value);
                    return acc;
                }, {})
                : {},
            burnFactor: isSet(object.burnFactor) ? String(object.burnFactor) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        obj.mediaTypes = {};
        if (message.mediaTypes) {
            Object.entries(message.mediaTypes).forEach(([k, v]) => {
                obj.mediaTypes[k] = coin_1.Coin.toJSON(v);
            });
        }
        message.burnFactor !== undefined && (obj.burnFactor = message.burnFactor);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseFeeParams();
        message.mediaTypes = Object.entries((_a = object.mediaTypes) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = coin_1.Coin.fromPartial(value);
            }
            return acc;
        }, {});
        message.burnFactor = (_b = object.burnFactor) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseFeeParams_MediaTypesEntry() {
    return { key: "", value: undefined };
}
exports.FeeParams_MediaTypesEntry = {
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
        const message = createBaseFeeParams_MediaTypesEntry();
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
        const message = createBaseFeeParams_MediaTypesEntry();
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
