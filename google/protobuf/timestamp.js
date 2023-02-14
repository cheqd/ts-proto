/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";
function createBaseTimestamp() {
    return { seconds: Long.ZERO, nanos: 0 };
}
export const Timestamp = {
    encode(message, writer = _m0.Writer.create()) {
        if (!message.seconds.isZero()) {
            writer.uint32(8).int64(message.seconds);
        }
        if (message.nanos !== 0) {
            writer.uint32(16).int32(message.nanos);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTimestamp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.seconds = reader.int64();
                    break;
                case 2:
                    message.nanos = reader.int32();
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
            seconds: isSet(object.seconds) ? Long.fromValue(object.seconds) : Long.ZERO,
            nanos: isSet(object.nanos) ? Number(object.nanos) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.seconds !== undefined && (obj.seconds = (message.seconds || Long.ZERO).toString());
        message.nanos !== undefined && (obj.nanos = Math.round(message.nanos));
        return obj;
    },
    create(base) {
        return Timestamp.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseTimestamp();
        message.seconds = (object.seconds !== undefined && object.seconds !== null)
            ? Long.fromValue(object.seconds)
            : Long.ZERO;
        message.nanos = object.nanos ?? 0;
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
//# sourceMappingURL=timestamp.js.map