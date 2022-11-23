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
exports.GenesisState = exports.DidDocVersionSet = exports.protobufPackage = void 0;
/* eslint-disable */
const _m0 = __importStar(require("protobufjs/minimal"));
const diddoc_1 = require("./diddoc");
const fee_1 = require("./fee");
exports.protobufPackage = "cheqd.did.v2";
function createBaseDidDocVersionSet() {
    return { latestVersion: "", didDocs: [] };
}
exports.DidDocVersionSet = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.latestVersion !== "") {
            writer.uint32(10).string(message.latestVersion);
        }
        for (const v of message.didDocs) {
            diddoc_1.DidDocWithMetadata.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDidDocVersionSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.latestVersion = reader.string();
                    break;
                case 2:
                    message.didDocs.push(diddoc_1.DidDocWithMetadata.decode(reader, reader.uint32()));
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
            latestVersion: isSet(object.latestVersion) ? String(object.latestVersion) : "",
            didDocs: Array.isArray(object === null || object === void 0 ? void 0 : object.didDocs) ? object.didDocs.map((e) => diddoc_1.DidDocWithMetadata.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.latestVersion !== undefined && (obj.latestVersion = message.latestVersion);
        if (message.didDocs) {
            obj.didDocs = message.didDocs.map((e) => e ? diddoc_1.DidDocWithMetadata.toJSON(e) : undefined);
        }
        else {
            obj.didDocs = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDidDocVersionSet();
        message.latestVersion = (_a = object.latestVersion) !== null && _a !== void 0 ? _a : "";
        message.didDocs = ((_b = object.didDocs) === null || _b === void 0 ? void 0 : _b.map((e) => diddoc_1.DidDocWithMetadata.fromPartial(e))) || [];
        return message;
    },
};
function createBaseGenesisState() {
    return { didNamespace: "", versionSets: [], feeParams: undefined };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.didNamespace !== "") {
            writer.uint32(10).string(message.didNamespace);
        }
        for (const v of message.versionSets) {
            exports.DidDocVersionSet.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.feeParams !== undefined) {
            fee_1.FeeParams.encode(message.feeParams, writer.uint32(26).fork()).ldelim();
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
                    message.versionSets.push(exports.DidDocVersionSet.decode(reader, reader.uint32()));
                    break;
                case 3:
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
            didNamespace: isSet(object.didNamespace) ? String(object.didNamespace) : "",
            versionSets: Array.isArray(object === null || object === void 0 ? void 0 : object.versionSets)
                ? object.versionSets.map((e) => exports.DidDocVersionSet.fromJSON(e))
                : [],
            feeParams: isSet(object.feeParams) ? fee_1.FeeParams.fromJSON(object.feeParams) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.didNamespace !== undefined && (obj.didNamespace = message.didNamespace);
        if (message.versionSets) {
            obj.versionSets = message.versionSets.map((e) => e ? exports.DidDocVersionSet.toJSON(e) : undefined);
        }
        else {
            obj.versionSets = [];
        }
        message.feeParams !== undefined &&
            (obj.feeParams = message.feeParams ? fee_1.FeeParams.toJSON(message.feeParams) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGenesisState();
        message.didNamespace = (_a = object.didNamespace) !== null && _a !== void 0 ? _a : "";
        message.versionSets = ((_b = object.versionSets) === null || _b === void 0 ? void 0 : _b.map((e) => exports.DidDocVersionSet.fromPartial(e))) || [];
        message.feeParams = (object.feeParams !== undefined && object.feeParams !== null)
            ? fee_1.FeeParams.fromPartial(object.feeParams)
            : undefined;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
