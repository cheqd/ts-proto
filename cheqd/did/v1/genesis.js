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
                    message.didNamespace = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.didList.push(StateValue.decode(reader, reader.uint32()));
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
            didNamespace: isSet(object.didNamespace) ? globalThis.String(object.didNamespace) : "",
            didList: globalThis.Array.isArray(object?.didList) ? object.didList.map((e) => StateValue.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.didNamespace !== "") {
            obj.didNamespace = message.didNamespace;
        }
        if (message.didList?.length) {
            obj.didList = message.didList.map((e) => StateValue.toJSON(e));
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