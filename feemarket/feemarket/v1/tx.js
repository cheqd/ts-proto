"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: feemarket/feemarket/v1/tx.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgServiceName = exports.MsgParamsResponse = exports.MsgParams = void 0;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
const params_js_1 = require("./params.js");
function createBaseMsgParams() {
    return { params: undefined, authority: "" };
}
exports.MsgParams = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.params !== undefined) {
            params_js_1.Params.encode(message.params, writer.uint32(10).fork()).join();
        }
        if (message.authority !== "") {
            writer.uint32(18).string(message.authority);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.params = params_js_1.Params.decode(reader, reader.uint32());
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.authority = reader.string();
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
            params: isSet(object.params) ? params_js_1.Params.fromJSON(object.params) : undefined,
            authority: isSet(object.authority) ? globalThis.String(object.authority) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.params !== undefined) {
            obj.params = params_js_1.Params.toJSON(message.params);
        }
        if (message.authority !== "") {
            obj.authority = message.authority;
        }
        return obj;
    },
    create(base) {
        return exports.MsgParams.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMsgParams();
        message.params = (object.params !== undefined && object.params !== null)
            ? params_js_1.Params.fromPartial(object.params)
            : undefined;
        message.authority = object.authority ?? "";
        return message;
    },
};
function createBaseMsgParamsResponse() {
    return {};
}
exports.MsgParamsResponse = {
    encode(_, writer = new wire_1.BinaryWriter()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.MsgParamsResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseMsgParamsResponse();
        return message;
    },
};
exports.MsgServiceName = "feemarket.feemarket.v1.Msg";
class MsgClientImpl {
    rpc;
    service;
    constructor(rpc, opts) {
        this.service = opts?.service || exports.MsgServiceName;
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
    }
    Params(request) {
        const data = exports.MsgParams.encode(request).finish();
        const promise = this.rpc.request(this.service, "Params", data);
        return promise.then((data) => exports.MsgParamsResponse.decode(new wire_1.BinaryReader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=tx.js.map