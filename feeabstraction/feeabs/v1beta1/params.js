"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: feeabstraction/feeabs/v1beta1/params.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = void 0;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
function createBaseParams() {
    return {
        nativeIbcedInOsmosis: "",
        osmosisQueryTwapPath: "",
        chainName: "",
        ibcTransferChannel: "",
        ibcQueryIcqChannel: "",
        osmosisCrosschainSwapAddress: "",
    };
}
exports.Params = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.nativeIbcedInOsmosis !== "") {
            writer.uint32(10).string(message.nativeIbcedInOsmosis);
        }
        if (message.osmosisQueryTwapPath !== "") {
            writer.uint32(18).string(message.osmosisQueryTwapPath);
        }
        if (message.chainName !== "") {
            writer.uint32(26).string(message.chainName);
        }
        if (message.ibcTransferChannel !== "") {
            writer.uint32(34).string(message.ibcTransferChannel);
        }
        if (message.ibcQueryIcqChannel !== "") {
            writer.uint32(42).string(message.ibcQueryIcqChannel);
        }
        if (message.osmosisCrosschainSwapAddress !== "") {
            writer.uint32(50).string(message.osmosisCrosschainSwapAddress);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.nativeIbcedInOsmosis = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.osmosisQueryTwapPath = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.chainName = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.ibcTransferChannel = reader.string();
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    message.ibcQueryIcqChannel = reader.string();
                    continue;
                }
                case 6: {
                    if (tag !== 50) {
                        break;
                    }
                    message.osmosisCrosschainSwapAddress = reader.string();
                    continue;
                }
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            nativeIbcedInOsmosis: isSet(object.nativeIbcedInOsmosis) ? globalThis.String(object.nativeIbcedInOsmosis) : "",
            osmosisQueryTwapPath: isSet(object.osmosisQueryTwapPath) ? globalThis.String(object.osmosisQueryTwapPath) : "",
            chainName: isSet(object.chainName) ? globalThis.String(object.chainName) : "",
            ibcTransferChannel: isSet(object.ibcTransferChannel) ? globalThis.String(object.ibcTransferChannel) : "",
            ibcQueryIcqChannel: isSet(object.ibcQueryIcqChannel) ? globalThis.String(object.ibcQueryIcqChannel) : "",
            osmosisCrosschainSwapAddress: isSet(object.osmosisCrosschainSwapAddress)
                ? globalThis.String(object.osmosisCrosschainSwapAddress)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.nativeIbcedInOsmosis !== "") {
            obj.nativeIbcedInOsmosis = message.nativeIbcedInOsmosis;
        }
        if (message.osmosisQueryTwapPath !== "") {
            obj.osmosisQueryTwapPath = message.osmosisQueryTwapPath;
        }
        if (message.chainName !== "") {
            obj.chainName = message.chainName;
        }
        if (message.ibcTransferChannel !== "") {
            obj.ibcTransferChannel = message.ibcTransferChannel;
        }
        if (message.ibcQueryIcqChannel !== "") {
            obj.ibcQueryIcqChannel = message.ibcQueryIcqChannel;
        }
        if (message.osmosisCrosschainSwapAddress !== "") {
            obj.osmosisCrosschainSwapAddress = message.osmosisCrosschainSwapAddress;
        }
        return obj;
    },
    create(base) {
        return exports.Params.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.nativeIbcedInOsmosis = object.nativeIbcedInOsmosis ?? "";
        message.osmosisQueryTwapPath = object.osmosisQueryTwapPath ?? "";
        message.chainName = object.chainName ?? "";
        message.ibcTransferChannel = object.ibcTransferChannel ?? "";
        message.ibcQueryIcqChannel = object.ibcQueryIcqChannel ?? "";
        message.osmosisCrosschainSwapAddress = object.osmosisCrosschainSwapAddress ?? "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=params.js.map