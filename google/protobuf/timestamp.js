/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";
function createBaseTimestamp() {
    return { seconds: BigInt("0"), nanos: 0 };
}
export const Timestamp = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.seconds !== BigInt("0")) {
            if (BigInt.asIntN(64, message.seconds) !== message.seconds) {
                throw new globalThis.Error("value provided for field message.seconds of type int64 too large");
            }
            writer.uint32(8).int64(message.seconds.toString());
        }
        if (message.nanos !== 0) {
            writer.uint32(16).int32(message.nanos);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTimestamp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.seconds = longToBigint(reader.int64());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.nanos = reader.int32();
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
            seconds: isSet(object.seconds) ? BigInt(object.seconds) : BigInt("0"),
            nanos: isSet(object.nanos) ? globalThis.Number(object.nanos) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.seconds !== BigInt("0")) {
            obj.seconds = message.seconds.toString();
        }
        if (message.nanos !== 0) {
            obj.nanos = Math.round(message.nanos);
        }
        return obj;
    },
    create(base) {
        return Timestamp.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseTimestamp();
        message.seconds = object.seconds ?? BigInt("0");
        message.nanos = object.nanos ?? 0;
        return message;
    },
};
function longToBigint(long) {
    return BigInt(long.toString());
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=timestamp.js.map