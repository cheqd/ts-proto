/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination.js";
import { DidDocWithMetadata, Metadata } from "./diddoc.js";
function createBaseQueryDidDocRequest() {
    return { id: "" };
}
export const QueryDidDocRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDidDocRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.id = reader.string();
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
        return { id: isSet(object.id) ? String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    create(base) {
        return QueryDidDocRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryDidDocRequest();
        message.id = object.id ?? "";
        return message;
    },
};
function createBaseQueryDidDocResponse() {
    return { value: undefined };
}
export const QueryDidDocResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== undefined) {
            DidDocWithMetadata.encode(message.value, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDidDocResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.value = DidDocWithMetadata.decode(reader, reader.uint32());
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
        return { value: isSet(object.value) ? DidDocWithMetadata.fromJSON(object.value) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = message.value ? DidDocWithMetadata.toJSON(message.value) : undefined);
        return obj;
    },
    create(base) {
        return QueryDidDocResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryDidDocResponse();
        message.value = (object.value !== undefined && object.value !== null)
            ? DidDocWithMetadata.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseQueryDidDocVersionRequest() {
    return { id: "", version: "" };
}
export const QueryDidDocVersionRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDidDocVersionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.version = reader.string();
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
            id: isSet(object.id) ? String(object.id) : "",
            version: isSet(object.version) ? String(object.version) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.version !== undefined && (obj.version = message.version);
        return obj;
    },
    create(base) {
        return QueryDidDocVersionRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryDidDocVersionRequest();
        message.id = object.id ?? "";
        message.version = object.version ?? "";
        return message;
    },
};
function createBaseQueryDidDocVersionResponse() {
    return { value: undefined };
}
export const QueryDidDocVersionResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== undefined) {
            DidDocWithMetadata.encode(message.value, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDidDocVersionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.value = DidDocWithMetadata.decode(reader, reader.uint32());
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
        return { value: isSet(object.value) ? DidDocWithMetadata.fromJSON(object.value) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = message.value ? DidDocWithMetadata.toJSON(message.value) : undefined);
        return obj;
    },
    create(base) {
        return QueryDidDocVersionResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryDidDocVersionResponse();
        message.value = (object.value !== undefined && object.value !== null)
            ? DidDocWithMetadata.fromPartial(object.value)
            : undefined;
        return message;
    },
};
function createBaseQueryAllDidDocVersionsMetadataRequest() {
    return { id: "", pagination: undefined };
}
export const QueryAllDidDocVersionsMetadataRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllDidDocVersionsMetadataRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.pagination = PageRequest.decode(reader, reader.uint32());
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
            id: isSet(object.id) ? String(object.id) : "",
            pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryAllDidDocVersionsMetadataRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryAllDidDocVersionsMetadataRequest();
        message.id = object.id ?? "";
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageRequest.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBaseQueryAllDidDocVersionsMetadataResponse() {
    return { versions: [], pagination: undefined };
}
export const QueryAllDidDocVersionsMetadataResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.versions) {
            Metadata.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllDidDocVersionsMetadataResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.versions.push(Metadata.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.pagination = PageResponse.decode(reader, reader.uint32());
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
            versions: Array.isArray(object?.versions) ? object.versions.map((e) => Metadata.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.versions) {
            obj.versions = message.versions.map((e) => e ? Metadata.toJSON(e) : undefined);
        }
        else {
            obj.versions = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return QueryAllDidDocVersionsMetadataResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseQueryAllDidDocVersionsMetadataResponse();
        message.versions = object.versions?.map((e) => Metadata.fromPartial(e)) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? PageResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
export class QueryClientImpl {
    rpc;
    service;
    constructor(rpc, opts) {
        this.service = opts?.service || "cheqd.did.v2.Query";
        this.rpc = rpc;
        this.DidDoc = this.DidDoc.bind(this);
        this.DidDocVersion = this.DidDocVersion.bind(this);
        this.AllDidDocVersionsMetadata = this.AllDidDocVersionsMetadata.bind(this);
    }
    DidDoc(request) {
        const data = QueryDidDocRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DidDoc", data);
        return promise.then((data) => QueryDidDocResponse.decode(_m0.Reader.create(data)));
    }
    DidDocVersion(request) {
        const data = QueryDidDocVersionRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "DidDocVersion", data);
        return promise.then((data) => QueryDidDocVersionResponse.decode(_m0.Reader.create(data)));
    }
    AllDidDocVersionsMetadata(request) {
        const data = QueryAllDidDocVersionsMetadataRequest.encode(request).finish();
        const promise = this.rpc.request(this.service, "AllDidDocVersionsMetadata", data);
        return promise.then((data) => QueryAllDidDocVersionsMetadataResponse.decode(_m0.Reader.create(data)));
    }
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=query.js.map