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
exports.Metadata = exports.StateValue = exports.protobufPackage = void 0;
/* eslint-disable */
const _m0 = __importStar(require("protobufjs/minimal"));
const any_1 = require("../../../google/protobuf/any");
exports.protobufPackage = "cheqdid.cheqdnode.cheqd.v1";
function createBaseStateValue() {
    return { data: undefined, metadata: undefined };
}
exports.StateValue = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.data !== undefined) {
            any_1.Any.encode(message.data, writer.uint32(10).fork()).ldelim();
        }
        if (message.metadata !== undefined) {
            exports.Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStateValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.metadata = exports.Metadata.decode(reader, reader.uint32());
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
            data: isSet(object.data) ? any_1.Any.fromJSON(object.data) : undefined,
            metadata: isSet(object.metadata) ? exports.Metadata.fromJSON(object.metadata) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined && (obj.data = message.data ? any_1.Any.toJSON(message.data) : undefined);
        message.metadata !== undefined && (obj.metadata = message.metadata ? exports.Metadata.toJSON(message.metadata) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseStateValue();
        message.data = (object.data !== undefined && object.data !== null) ? any_1.Any.fromPartial(object.data) : undefined;
        message.metadata = (object.metadata !== undefined && object.metadata !== null)
            ? exports.Metadata.fromPartial(object.metadata)
            : undefined;
        return message;
    },
};
function createBaseMetadata() {
    return { created: "", updated: "", deactivated: false, versionId: "", resources: [] };
}
exports.Metadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.created !== "") {
            writer.uint32(10).string(message.created);
        }
        if (message.updated !== "") {
            writer.uint32(18).string(message.updated);
        }
        if (message.deactivated === true) {
            writer.uint32(24).bool(message.deactivated);
        }
        if (message.versionId !== "") {
            writer.uint32(34).string(message.versionId);
        }
        for (const v of message.resources) {
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.created = reader.string();
                    break;
                case 2:
                    message.updated = reader.string();
                    break;
                case 3:
                    message.deactivated = reader.bool();
                    break;
                case 4:
                    message.versionId = reader.string();
                    break;
                case 5:
                    message.resources.push(reader.string());
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
            created: isSet(object.created) ? String(object.created) : "",
            updated: isSet(object.updated) ? String(object.updated) : "",
            deactivated: isSet(object.deactivated) ? Boolean(object.deactivated) : false,
            versionId: isSet(object.versionId) ? String(object.versionId) : "",
            resources: Array.isArray(object === null || object === void 0 ? void 0 : object.resources) ? object.resources.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.created !== undefined && (obj.created = message.created);
        message.updated !== undefined && (obj.updated = message.updated);
        message.deactivated !== undefined && (obj.deactivated = message.deactivated);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        if (message.resources) {
            obj.resources = message.resources.map((e) => e);
        }
        else {
            obj.resources = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseMetadata();
        message.created = (_a = object.created) !== null && _a !== void 0 ? _a : "";
        message.updated = (_b = object.updated) !== null && _b !== void 0 ? _b : "";
        message.deactivated = (_c = object.deactivated) !== null && _c !== void 0 ? _c : false;
        message.versionId = (_d = object.versionId) !== null && _d !== void 0 ? _d : "";
        message.resources = ((_e = object.resources) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
