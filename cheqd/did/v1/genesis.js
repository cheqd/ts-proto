/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import { StateValue } from "./stateValue.js";
function createBaseGenesisState() {
    return { didNamespace: "", didList: [] };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.didNamespace !== "") {
            writer.uint32(10).string(message.didNamespace);
        }
        for (const v of message.didList) {
            StateValue.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.didNamespace = reader.string();
                    break;
                case 2:
                    message.didList.push(StateValue.decode(reader, reader.uint32()));
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
            didNamespace: isSet(object.didNamespace) ? String(object.didNamespace) : "",
            didList: Array.isArray(object?.didList) ? object.didList.map((e) => StateValue.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.didNamespace !== undefined && (obj.didNamespace = message.didNamespace);
        if (message.didList) {
            obj.didList = message.didList.map((e) => e ? StateValue.toJSON(e) : undefined);
        }
        else {
            obj.didList = [];
        }
        return obj;
    },
    create(base) {
        return GenesisState.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.didNamespace = object.didNamespace ?? "";
        message.didList = object.didList?.map((e) => StateValue.fromPartial(e)) || [];
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