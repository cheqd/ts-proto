"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeeParams = void 0;
/* eslint-disable */
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
        const reader = input instanceof minimal_js_1.default.Reader ? input : minimal_js_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeeParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.image = coin_js_1.Coin.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.json = coin_js_1.Coin.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.default = coin_js_1.Coin.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.burnFactor = reader.string();
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
            image: isSet(object.image) ? coin_js_1.Coin.fromJSON(object.image) : undefined,
            json: isSet(object.json) ? coin_js_1.Coin.fromJSON(object.json) : undefined,
            default: isSet(object.default) ? coin_js_1.Coin.fromJSON(object.default) : undefined,
            burnFactor: isSet(object.burnFactor) ? globalThis.String(object.burnFactor) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.image !== undefined) {
            obj.image = coin_js_1.Coin.toJSON(message.image);
        }
        if (message.json !== undefined) {
            obj.json = coin_js_1.Coin.toJSON(message.json);
        }
        if (message.default !== undefined) {
            obj.default = coin_js_1.Coin.toJSON(message.default);
        }
        if (message.burnFactor !== "") {
            obj.burnFactor = message.burnFactor;
        }
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
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=fee.js.map