/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import { Resource } from "./resource.js";
function createBaseGenesisState() {
    return { resourceList: [] };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.resourceList) {
            Resource.encode(v, writer.uint32(10).fork()).ldelim();
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
                    if (tag != 10) {
                        break;
                    }
                    message.resourceList.push(Resource.decode(reader, reader.uint32()));
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
            resourceList: Array.isArray(object?.resourceList)
                ? object.resourceList.map((e) => Resource.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.resourceList) {
            obj.resourceList = message.resourceList.map((e) => e ? Resource.toJSON(e) : undefined);
        }
        else {
            obj.resourceList = [];
        }
        return obj;
    },
    create(base) {
        return GenesisState.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.resourceList = object.resourceList?.map((e) => Resource.fromPartial(e)) || [];
        return message;
    },
};
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
//# sourceMappingURL=genesis.js.map