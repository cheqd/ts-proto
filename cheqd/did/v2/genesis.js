/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import { DidDocWithMetadata } from "./diddoc.js";
import { FeeParams } from "./fee.js";
function createBaseDidDocVersionSet() {
    return { latestVersion: "", didDocs: [] };
}
export const DidDocVersionSet = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.latestVersion !== "") {
            writer.uint32(10).string(message.latestVersion);
        }
        for (const v of message.didDocs) {
            DidDocWithMetadata.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDidDocVersionSet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.latestVersion = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.didDocs.push(DidDocWithMetadata.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            latestVersion: isSet(object.latestVersion) ? String(object.latestVersion) : "",
            didDocs: Array.isArray(object?.didDocs) ? object.didDocs.map((e) => DidDocWithMetadata.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.latestVersion !== undefined && (obj.latestVersion = message.latestVersion);
        if (message.didDocs) {
            obj.didDocs = message.didDocs.map((e) => e ? DidDocWithMetadata.toJSON(e) : undefined);
        }
        else {
            obj.didDocs = [];
        }
        return obj;
    },
    create(base) {
        return DidDocVersionSet.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDidDocVersionSet();
        message.latestVersion = object.latestVersion ?? "";
        message.didDocs = object.didDocs?.map((e) => DidDocWithMetadata.fromPartial(e)) || [];
        return message;
    },
};
function createBaseGenesisState() {
    return { didNamespace: "", versionSets: [], feeParams: undefined };
}
export const GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.didNamespace !== "") {
            writer.uint32(10).string(message.didNamespace);
        }
        for (const v of message.versionSets) {
            DidDocVersionSet.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.feeParams !== undefined) {
            FeeParams.encode(message.feeParams, writer.uint32(26).fork()).ldelim();
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
                    if (tag != 10) {
                        break;
                    }
                    message.didNamespace = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.versionSets.push(DidDocVersionSet.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.feeParams = FeeParams.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
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
                ? object.versionSets.map((e) => DidDocVersionSet.fromJSON(e))
                : [],
            feeParams: isSet(object.feeParams) ? FeeParams.fromJSON(object.feeParams) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.didNamespace !== undefined && (obj.didNamespace = message.didNamespace);
        if (message.versionSets) {
            obj.versionSets = message.versionSets.map((e) => e ? DidDocVersionSet.toJSON(e) : undefined);
        }
        else {
            obj.versionSets = [];
        }
        message.feeParams !== undefined &&
            (obj.feeParams = message.feeParams ? FeeParams.toJSON(message.feeParams) : undefined);
        return obj;
    },
    create(base) {
        return GenesisState.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.didNamespace = object.didNamespace ?? "";
        message.versionSets = object.versionSets?.map((e) => DidDocVersionSet.fromPartial(e)) || [];
        message.feeParams = (object.feeParams !== undefined && object.feeParams !== null)
            ? FeeParams.fromPartial(object.feeParams)
            : undefined;
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