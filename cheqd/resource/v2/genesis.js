"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_js_1 = __importDefault(require("protobufjs/minimal.js"));
const fee_js_1 = require("./fee.js");
const resource_js_1 = require("./resource.js");
function createBaseGenesisState() {
    return { resources: [], feeParams: undefined };
}
exports.GenesisState = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        for (const v of message.resources) {
            resource_js_1.ResourceWithMetadata.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.feeParams !== undefined) {
            fee_js_1.FeeParams.encode(message.feeParams, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : new minimal_js_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resources.push(resource_js_1.ResourceWithMetadata.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.feeParams = fee_js_1.FeeParams.decode(reader, reader.uint32());
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
                ? object.resources.map((e) => resource_js_1.ResourceWithMetadata.fromJSON(e))
                : [],
            feeParams: isSet(object.feeParams) ? fee_js_1.FeeParams.fromJSON(object.feeParams) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.resources) {
            obj.resources = message.resources.map((e) => e ? resource_js_1.ResourceWithMetadata.toJSON(e) : undefined);
        }
        else {
            obj.resources = [];
        }
        message.feeParams !== undefined &&
            (obj.feeParams = message.feeParams ? fee_js_1.FeeParams.toJSON(message.feeParams) : undefined);
        return obj;
    },
    create(base) {
        return exports.GenesisState.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.resources = object.resources?.map((e) => resource_js_1.ResourceWithMetadata.fromPartial(e)) || [];
        message.feeParams = (object.feeParams !== undefined && object.feeParams !== null)
            ? fee_js_1.FeeParams.fromPartial(object.feeParams)
            : undefined;
        return message;
    },
};
if (minimal_js_1.default.util.Long !== long_1.default) {
    minimal_js_1.default.util.Long = long_1.default;
    minimal_js_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=genesis.js.map