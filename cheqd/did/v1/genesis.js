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
const stateValue_1 = require("./stateValue");
exports.protobufPackage = "cheqdid.cheqdnode.cheqd.v1";
function createBaseGenesisState() {
    return { didNamespace: "", didList: [] };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.didNamespace !== "") {
            writer.uint32(10).string(message.didNamespace);
        }
        for (const v of message.didList) {
            stateValue_1.StateValue.encode(v, writer.uint32(18).fork()).ldelim();
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
                    message.didList.push(stateValue_1.StateValue.decode(reader, reader.uint32()));
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
            didList: Array.isArray(object === null || object === void 0 ? void 0 : object.didList) ? object.didList.map((e) => stateValue_1.StateValue.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.didNamespace !== undefined && (obj.didNamespace = message.didNamespace);
        if (message.didList) {
            obj.didList = message.didList.map((e) => e ? stateValue_1.StateValue.toJSON(e) : undefined);
        }
        else {
            obj.didList = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGenesisState();
        message.didNamespace = (_a = object.didNamespace) !== null && _a !== void 0 ? _a : "";
        message.didList = ((_b = object.didList) === null || _b === void 0 ? void 0 : _b.map((e) => stateValue_1.StateValue.fromPartial(e))) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
