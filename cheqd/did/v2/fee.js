/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin.js";
function createBaseFeeParams() {
    return { createDid: undefined, updateDid: undefined, deactivateDid: undefined, burnFactor: "" };
}
export const FeeParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.createDid !== undefined) {
            Coin.encode(message.createDid, writer.uint32(10).fork()).ldelim();
        }
        if (message.updateDid !== undefined) {
            Coin.encode(message.updateDid, writer.uint32(18).fork()).ldelim();
        }
        if (message.deactivateDid !== undefined) {
            Coin.encode(message.deactivateDid, writer.uint32(26).fork()).ldelim();
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
                    message.createDid = Coin.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.updateDid = Coin.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.deactivateDid = Coin.decode(reader, reader.uint32());
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
            createDid: isSet(object.createDid) ? Coin.fromJSON(object.createDid) : undefined,
            updateDid: isSet(object.updateDid) ? Coin.fromJSON(object.updateDid) : undefined,
            deactivateDid: isSet(object.deactivateDid) ? Coin.fromJSON(object.deactivateDid) : undefined,
            burnFactor: isSet(object.burnFactor) ? String(object.burnFactor) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.createDid !== undefined) {
            obj.createDid = Coin.toJSON(message.createDid);
        }
        if (message.updateDid !== undefined) {
            obj.updateDid = Coin.toJSON(message.updateDid);
        }
        if (message.deactivateDid !== undefined) {
            obj.deactivateDid = Coin.toJSON(message.deactivateDid);
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
        message.createDid = (object.createDid !== undefined && object.createDid !== null)
            ? Coin.fromPartial(object.createDid)
            : undefined;
        message.updateDid = (object.updateDid !== undefined && object.updateDid !== null)
            ? Coin.fromPartial(object.updateDid)
            : undefined;
        message.deactivateDid = (object.deactivateDid !== undefined && object.deactivateDid !== null)
            ? Coin.fromPartial(object.deactivateDid)
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