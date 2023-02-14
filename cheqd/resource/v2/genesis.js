/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import { FeeParams } from "./fee.js";
import { ResourceWithMetadata } from "./resource.js";
function createBaseGenesisState() {
    return { resources: [], feeParams: undefined };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.resources) {
            ResourceWithMetadata.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.feeParams !== undefined) {
            FeeParams.encode(message.feeParams, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources.push(ResourceWithMetadata.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.feeParams = FeeParams.decode(reader, reader.uint32());
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
            resources: Array.isArray(object?.resources)
                ? object.resources.map((e) => ResourceWithMetadata.fromJSON(e))
                : [],
            feeParams: isSet(object.feeParams) ? FeeParams.fromJSON(object.feeParams) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.resources) {
            obj.resources = message.resources.map((e) => e ? ResourceWithMetadata.toJSON(e) : undefined);
        }
        else {
            obj.resources = [];
        }
        message.feeParams !== undefined &&
            (obj.feeParams = message.feeParams ? FeeParams.toJSON(message.feeParams) : undefined);
        return obj;
    },
    create(base) {
        return GenesisState.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.resources = object.resources?.map((e) => ResourceWithMetadata.fromPartial(e)) || [];
        message.feeParams = (object.feeParams !== undefined && object.feeParams !== null)
            ? FeeParams.fromPartial(object.feeParams)
            : undefined;
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
//# sourceMappingURL=genesis.js.map