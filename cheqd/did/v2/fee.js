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
    return { createDid: undefined, updateDid: undefined, deactivateDid: undefined, burnFactor: "" };
}
exports.FeeParams = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.createDid !== undefined) {
            coin_js_1.Coin.encode(message.createDid, writer.uint32(10).fork()).ldelim();
        }
        if (message.updateDid !== undefined) {
            coin_js_1.Coin.encode(message.updateDid, writer.uint32(18).fork()).ldelim();
        }
        if (message.deactivateDid !== undefined) {
            coin_js_1.Coin.encode(message.deactivateDid, writer.uint32(26).fork()).ldelim();
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
                    message.createDid = coin_js_1.Coin.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.updateDid = coin_js_1.Coin.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.deactivateDid = coin_js_1.Coin.decode(reader, reader.uint32());
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
            createDid: isSet(object.createDid) ? coin_js_1.Coin.fromJSON(object.createDid) : undefined,
            updateDid: isSet(object.updateDid) ? coin_js_1.Coin.fromJSON(object.updateDid) : undefined,
            deactivateDid: isSet(object.deactivateDid) ? coin_js_1.Coin.fromJSON(object.deactivateDid) : undefined,
            burnFactor: isSet(object.burnFactor) ? globalThis.String(object.burnFactor) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.createDid !== undefined) {
            obj.createDid = coin_js_1.Coin.toJSON(message.createDid);
        }
        if (message.updateDid !== undefined) {
            obj.updateDid = coin_js_1.Coin.toJSON(message.updateDid);
        }
        if (message.deactivateDid !== undefined) {
            obj.deactivateDid = coin_js_1.Coin.toJSON(message.deactivateDid);
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
        message.createDid = (object.createDid !== undefined && object.createDid !== null)
            ? coin_js_1.Coin.fromPartial(object.createDid)
            : undefined;
        message.updateDid = (object.updateDid !== undefined && object.updateDid !== null)
            ? coin_js_1.Coin.fromPartial(object.updateDid)
            : undefined;
        message.deactivateDid = (object.deactivateDid !== undefined && object.deactivateDid !== null)
            ? coin_js_1.Coin.fromPartial(object.deactivateDid)
            : undefined;
        message.burnFactor = object.burnFactor ?? "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=fee.js.map