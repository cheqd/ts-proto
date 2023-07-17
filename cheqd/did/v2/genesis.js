"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.DidDocVersionSet = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const diddoc_1 = require("./diddoc");
const fee_1 = require("./fee");
function createBaseDidDocVersionSet() {
    return { latestVersion: "", didDocs: [] };
}
exports.DidDocVersionSet = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.latestVersion !== "") {
            writer.uint32(10).string(message.latestVersion);
        }
        for (const v of message.didDocs) {
            diddoc_1.DidDocWithMetadata.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDidDocVersionSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.latestVersion = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.didDocs.push(diddoc_1.DidDocWithMetadata.decode(reader, reader.uint32()));
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
            latestVersion: isSet(object.latestVersion) ? String(object.latestVersion) : "",
            didDocs: Array.isArray(object?.didDocs) ? object.didDocs.map((e) => diddoc_1.DidDocWithMetadata.fromJSON(e)) : [],
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
    create(base) {
        return exports.DidDocVersionSet.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDidDocVersionSet();
        message.latestVersion = object.latestVersion ?? "";
        message.didDocs = object.didDocs?.map((e) => diddoc_1.DidDocWithMetadata.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGenesisState() {
    return { didNamespace: "", versionSets: [], feeParams: undefined };
}
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.versionSets.push(exports.DidDocVersionSet.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.feeParams = fee_1.FeeParams.decode(reader, reader.uint32());
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
            didNamespace: isSet(object.didNamespace) ? String(object.didNamespace) : "",
            versionSets: Array.isArray(object?.versionSets)
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
    create(base) {
        return exports.GenesisState.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.didNamespace = object.didNamespace ?? "";
        message.versionSets = object.versionSets?.map((e) => exports.DidDocVersionSet.fromPartial(e)) || [];
        message.feeParams = (object.feeParams !== undefined && object.feeParams !== null)
            ? fee_1.FeeParams.fromPartial(object.feeParams)
            : undefined;
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=genesis.js.map