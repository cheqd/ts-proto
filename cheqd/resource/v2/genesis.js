/* eslint-disable */
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
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.resources.push(ResourceWithMetadata.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.feeParams = FeeParams.decode(reader, reader.uint32());
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
            resources: globalThis.Array.isArray(object?.resources)
                ? object.resources.map((e) => ResourceWithMetadata.fromJSON(e))
                : [],
            feeParams: isSet(object.feeParams) ? FeeParams.fromJSON(object.feeParams) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.resources?.length) {
            obj.resources = message.resources.map((e) => ResourceWithMetadata.toJSON(e));
        }
        if (message.feeParams !== undefined) {
            obj.feeParams = FeeParams.toJSON(message.feeParams);
        }
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
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=genesis.js.map