"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
/* eslint-disable */
const minimal_js_1 = __importDefault(require("protobufjs/minimal.js"));
const resource_js_1 = require("./resource.js");
function createBaseGenesisState() {
    return { resourceList: [] };
}
exports.GenesisState = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        for (const v of message.resourceList) {
            resource_js_1.Resource.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : minimal_js_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.resourceList.push(resource_js_1.Resource.decode(reader, reader.uint32()));
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
            resourceList: globalThis.Array.isArray(object?.resourceList)
                ? object.resourceList.map((e) => resource_js_1.Resource.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.resourceList?.length) {
            obj.resourceList = message.resourceList.map((e) => resource_js_1.Resource.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GenesisState.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.resourceList = object.resourceList?.map((e) => resource_js_1.Resource.fromPartial(e)) || [];
        return message;
    },
};
//# sourceMappingURL=genesis.js.map