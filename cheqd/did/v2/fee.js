"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeeParams = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
function createBaseFeeParams() {
    return { createDid: undefined, updateDid: undefined, deactivateDid: undefined, burnFactor: "" };
}
exports.FeeParams = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.createDid !== undefined) {
            coin_1.Coin.encode(message.createDid, writer.uint32(10).fork()).ldelim();
        }
        if (message.updateDid !== undefined) {
            coin_1.Coin.encode(message.updateDid, writer.uint32(18).fork()).ldelim();
        }
        if (message.deactivateDid !== undefined) {
            coin_1.Coin.encode(message.deactivateDid, writer.uint32(26).fork()).ldelim();
        }
        if (message.burnFactor !== "") {
            writer.uint32(34).string(message.burnFactor);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeeParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.createDid = coin_1.Coin.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.updateDid = coin_1.Coin.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.deactivateDid = coin_1.Coin.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.burnFactor = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            createDid: isSet(object.createDid) ? coin_1.Coin.fromJSON(object.createDid) : undefined,
            updateDid: isSet(object.updateDid) ? coin_1.Coin.fromJSON(object.updateDid) : undefined,
            deactivateDid: isSet(object.deactivateDid) ? coin_1.Coin.fromJSON(object.deactivateDid) : undefined,
            burnFactor: isSet(object.burnFactor) ? String(object.burnFactor) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.createDid !== undefined && (obj.createDid = message.createDid ? coin_1.Coin.toJSON(message.createDid) : undefined);
        message.updateDid !== undefined && (obj.updateDid = message.updateDid ? coin_1.Coin.toJSON(message.updateDid) : undefined);
        message.deactivateDid !== undefined &&
            (obj.deactivateDid = message.deactivateDid ? coin_1.Coin.toJSON(message.deactivateDid) : undefined);
        message.burnFactor !== undefined && (obj.burnFactor = message.burnFactor);
        return obj;
    },
    create(base) {
        return exports.FeeParams.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseFeeParams();
        message.createDid = (object.createDid !== undefined && object.createDid !== null)
            ? coin_1.Coin.fromPartial(object.createDid)
            : undefined;
        message.updateDid = (object.updateDid !== undefined && object.updateDid !== null)
            ? coin_1.Coin.fromPartial(object.updateDid)
            : undefined;
        message.deactivateDid = (object.deactivateDid !== undefined && object.deactivateDid !== null)
            ? coin_1.Coin.fromPartial(object.deactivateDid)
            : undefined;
        message.burnFactor = object.burnFactor ?? "";
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=fee.js.map