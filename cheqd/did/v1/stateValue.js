"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metadata = exports.StateValue = void 0;
/* eslint-disable */
const minimal_js_1 = __importDefault(require("protobufjs/minimal.js"));
const any_js_1 = require("../../../google/protobuf/any.js");
function createBaseStateValue() {
    return { data: undefined, metadata: undefined };
}
exports.StateValue = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.data !== undefined) {
            any_js_1.Any.encode(message.data, writer.uint32(10).fork()).ldelim();
        }
        if (message.metadata !== undefined) {
            exports.Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : minimal_js_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStateValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.data = any_js_1.Any.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.metadata = exports.Metadata.decode(reader, reader.uint32());
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
            data: isSet(object.data) ? any_js_1.Any.fromJSON(object.data) : undefined,
            metadata: isSet(object.metadata) ? exports.Metadata.fromJSON(object.metadata) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.data !== undefined) {
            obj.data = any_js_1.Any.toJSON(message.data);
        }
        if (message.metadata !== undefined) {
            obj.metadata = exports.Metadata.toJSON(message.metadata);
        }
        return obj;
    },
    create(base) {
        return exports.StateValue.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStateValue();
        message.data = (object.data !== undefined && object.data !== null) ? any_js_1.Any.fromPartial(object.data) : undefined;
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
    encode(message, writer = minimal_js_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_js_1.default.Reader ? input : minimal_js_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.created = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.updated = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.deactivated = reader.bool();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.versionId = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.resources.push(reader.string());
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
            created: isSet(object.created) ? globalThis.String(object.created) : "",
            updated: isSet(object.updated) ? globalThis.String(object.updated) : "",
            deactivated: isSet(object.deactivated) ? globalThis.Boolean(object.deactivated) : false,
            versionId: isSet(object.versionId) ? globalThis.String(object.versionId) : "",
            resources: globalThis.Array.isArray(object?.resources)
                ? object.resources.map((e) => globalThis.String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.created !== "") {
            obj.created = message.created;
        }
        if (message.updated !== "") {
            obj.updated = message.updated;
        }
        if (message.deactivated === true) {
            obj.deactivated = message.deactivated;
        }
        if (message.versionId !== "") {
            obj.versionId = message.versionId;
        }
        if (message.resources?.length) {
            obj.resources = message.resources;
        }
        return obj;
    },
    create(base) {
        return exports.Metadata.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMetadata();
        message.created = object.created ?? "";
        message.updated = object.updated ?? "";
        message.deactivated = object.deactivated ?? false;
        message.versionId = object.versionId ?? "";
        message.resources = object.resources?.map((e) => e) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=stateValue.js.map