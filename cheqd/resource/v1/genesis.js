"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const typeRegistry_1 = require("../../../typeRegistry");
const resource_1 = require("./resource");
exports.protobufPackage = "cheqdid.cheqdnode.resource.v1";
function createBaseGenesisState() {
    return { $type: "cheqdid.cheqdnode.resource.v1.GenesisState", resourceList: [] };
}
exports.GenesisState = {
    $type: "cheqdid.cheqdnode.resource.v1.GenesisState",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.resourceList) {
            resource_1.Resource.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resourceList.push(resource_1.Resource.decode(reader, reader.uint32()));
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
            $type: exports.GenesisState.$type,
            resourceList: Array.isArray(object?.resourceList)
                ? object.resourceList.map((e) => resource_1.Resource.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.resourceList) {
            obj.resourceList = message.resourceList.map((e) => e ? resource_1.Resource.toJSON(e) : undefined);
        }
        else {
            obj.resourceList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.resourceList = object.resourceList?.map((e) => resource_1.Resource.fromPartial(e)) || [];
        return message;
    },
};
typeRegistry_1.messageTypeRegistry.set(exports.GenesisState.$type, exports.GenesisState);
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=genesis.js.map