"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeeParams = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_js_1 = __importDefault(require("protobufjs/minimal.js"));
const coin_js_1 = require("../../../cosmos/base/v1beta1/coin.js");
function createBaseFeeParams() {
    return { image: undefined, json: undefined, default: undefined, burnFactor: "" };
}
exports.FeeParams = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.image !== undefined) {
            coin_js_1.Coin.encode(message.image, writer.uint32(10).fork()).ldelim();
        }
        if (message.json !== undefined) {
            coin_js_1.Coin.encode(message.json, writer.uint32(18).fork()).ldelim();
        }
        if (message.default !== undefined) {
            coin_js_1.Coin.encode(message.default, writer.uint32(26).fork()).ldelim();
        }
        if (message.burnFactor !== "") {
            writer.uint32(34).string(message.burnFactor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeeParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.image = coin_js_1.Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.json = coin_js_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.default = coin_js_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
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
            image: isSet(object.image) ? coin_js_1.Coin.fromJSON(object.image) : undefined,
            json: isSet(object.json) ? coin_js_1.Coin.fromJSON(object.json) : undefined,
            default: isSet(object.default) ? coin_js_1.Coin.fromJSON(object.default) : undefined,
            burnFactor: isSet(object.burnFactor) ? String(object.burnFactor) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.image !== undefined && (obj.image = message.image ? coin_js_1.Coin.toJSON(message.image) : undefined);
        message.json !== undefined && (obj.json = message.json ? coin_js_1.Coin.toJSON(message.json) : undefined);
        message.default !== undefined && (obj.default = message.default ? coin_js_1.Coin.toJSON(message.default) : undefined);
        message.burnFactor !== undefined && (obj.burnFactor = message.burnFactor);
        return obj;
    },
    create(base) {
        return exports.FeeParams.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseFeeParams();
        message.image = (object.image !== undefined && object.image !== null) ? coin_js_1.Coin.fromPartial(object.image) : undefined;
        message.json = (object.json !== undefined && object.json !== null) ? coin_js_1.Coin.fromPartial(object.json) : undefined;
        message.default = (object.default !== undefined && object.default !== null)
            ? coin_js_1.Coin.fromPartial(object.default)
            : undefined;
        message.burnFactor = object.burnFactor ?? "";
        return message;
    },
};
var tsProtoGlobalThis = (() => {
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
if (minimal_js_1.default.util.Long !== long_1.default) {
    minimal_js_1.default.util.Long = long_1.default;
    minimal_js_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=fee.js.map