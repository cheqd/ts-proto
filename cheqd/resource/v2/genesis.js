"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const _m0 = __importStar(require("protobufjs/minimal"));
const fee_1 = require("./fee");
const resource_1 = require("./resource");
exports.protobufPackage = "cheqd.resource.v2";
function createBaseGenesisState() {
    return { resources: [], feeParams: undefined };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.resources) {
            resource_1.ResourceWithMetadata.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.feeParams !== undefined) {
            fee_1.FeeParams.encode(message.feeParams, writer.uint32(18).fork()).ldelim();
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
                    message.resources.push(resource_1.ResourceWithMetadata.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.feeParams = fee_1.FeeParams.decode(reader, reader.uint32());
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
            resources: Array.isArray(object === null || object === void 0 ? void 0 : object.resources)
                ? object.resources.map((e) => resource_1.ResourceWithMetadata.fromJSON(e))
                : [],
            feeParams: isSet(object.feeParams) ? fee_1.FeeParams.fromJSON(object.feeParams) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.resources) {
            obj.resources = message.resources.map((e) => e ? resource_1.ResourceWithMetadata.toJSON(e) : undefined);
        }
        else {
            obj.resources = [];
        }
        message.feeParams !== undefined &&
            (obj.feeParams = message.feeParams ? fee_1.FeeParams.toJSON(message.feeParams) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGenesisState();
        message.resources = ((_a = object.resources) === null || _a === void 0 ? void 0 : _a.map((e) => resource_1.ResourceWithMetadata.fromPartial(e))) || [];
        message.feeParams = (object.feeParams !== undefined && object.feeParams !== null)
            ? fee_1.FeeParams.fromPartial(object.feeParams)
            : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
