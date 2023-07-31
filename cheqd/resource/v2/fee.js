/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin.js";
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeeParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.image = Coin.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.json = Coin.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.default = Coin.decode(reader, reader.uint32());
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
            image: isSet(object.image) ? Coin.fromJSON(object.image) : undefined,
            json: isSet(object.json) ? Coin.fromJSON(object.json) : undefined,
            default: isSet(object.default) ? Coin.fromJSON(object.default) : undefined,
            burnFactor: isSet(object.burnFactor) ? String(object.burnFactor) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.image !== undefined) {
            obj.image = Coin.toJSON(message.image);
        }
        if (message.json !== undefined) {
            obj.json = Coin.toJSON(message.json);
        }
        if (message.default !== undefined) {
            obj.default = Coin.toJSON(message.default);
        }
        if (message.burnFactor !== "") {
            obj.burnFactor = message.burnFactor;
        }
        return obj;
    },
    create(base) {
        return FeeParams.fromPartial(base ?? {});
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
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=fee.js.map