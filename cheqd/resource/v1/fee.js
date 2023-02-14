/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
function createBaseFeeParams() {
    return { image: undefined, json: undefined, default: undefined, burnFactor: "" };
}
export const FeeParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.image !== undefined) {
            Coin.encode(message.image, writer.uint32(10).fork()).ldelim();
        }
        if (message.json !== undefined) {
            Coin.encode(message.json, writer.uint32(18).fork()).ldelim();
        }
        if (message.default !== undefined) {
            Coin.encode(message.default, writer.uint32(26).fork()).ldelim();
        }
        if (message.burnFactor !== "") {
            writer.uint32(34).string(message.burnFactor);
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
                    message.image = Coin.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.json = Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.default = Coin.decode(reader, reader.uint32());
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
            image: isSet(object.image) ? Coin.fromJSON(object.image) : undefined,
            json: isSet(object.json) ? Coin.fromJSON(object.json) : undefined,
            default: isSet(object.default) ? Coin.fromJSON(object.default) : undefined,
            burnFactor: isSet(object.burnFactor) ? String(object.burnFactor) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.image !== undefined && (obj.image = message.image ? Coin.toJSON(message.image) : undefined);
        message.json !== undefined && (obj.json = message.json ? Coin.toJSON(message.json) : undefined);
        message.default !== undefined && (obj.default = message.default ? Coin.toJSON(message.default) : undefined);
        message.burnFactor !== undefined && (obj.burnFactor = message.burnFactor);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseFeeParams();
        message.image = (object.image !== undefined && object.image !== null) ? Coin.fromPartial(object.image) : undefined;
        message.json = (object.json !== undefined && object.json !== null) ? Coin.fromPartial(object.json) : undefined;
        message.default = (object.default !== undefined && object.default !== null)
            ? Coin.fromPartial(object.default)
            : undefined;
        message.burnFactor = object.burnFactor ?? "";
        return message;
    },
};
var globalThis = (() => {
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
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=fee.js.map