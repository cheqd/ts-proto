"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Service = exports.VerificationMethod = exports.Did = void 0;
/* eslint-disable */
const minimal_js_1 = __importDefault(require("protobufjs/minimal.js"));
const common_js_1 = require("./common.js");
function createBaseDid() {
    return {
        context: [],
        id: "",
        controller: [],
        verificationMethod: [],
        authentication: [],
        assertionMethod: [],
        capabilityInvocation: [],
        capabilityDelegation: [],
        keyAgreement: [],
        service: [],
        alsoKnownAs: [],
    };
}
exports.Did = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        for (const v of message.context) {
            writer.uint32(10).string(v);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        for (const v of message.controller) {
            writer.uint32(26).string(v);
        }
        for (const v of message.verificationMethod) {
            exports.VerificationMethod.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.authentication) {
            writer.uint32(42).string(v);
        }
        for (const v of message.assertionMethod) {
            writer.uint32(50).string(v);
        }
        for (const v of message.capabilityInvocation) {
            writer.uint32(58).string(v);
        }
        for (const v of message.capabilityDelegation) {
            writer.uint32(66).string(v);
        }
        for (const v of message.keyAgreement) {
            writer.uint32(74).string(v);
        }
        for (const v of message.service) {
            exports.Service.encode(v, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.alsoKnownAs) {
            writer.uint32(90).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : minimal_js_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDid();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.context.push(reader.string());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.controller.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.verificationMethod.push(exports.VerificationMethod.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.authentication.push(reader.string());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.assertionMethod.push(reader.string());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.capabilityInvocation.push(reader.string());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.capabilityDelegation.push(reader.string());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.keyAgreement.push(reader.string());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.service.push(exports.Service.decode(reader, reader.uint32()));
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.alsoKnownAs.push(reader.string());
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
            context: globalThis.Array.isArray(object?.context) ? object.context.map((e) => globalThis.String(e)) : [],
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            controller: globalThis.Array.isArray(object?.controller)
                ? object.controller.map((e) => globalThis.String(e))
                : [],
            verificationMethod: globalThis.Array.isArray(object?.verificationMethod)
                ? object.verificationMethod.map((e) => exports.VerificationMethod.fromJSON(e))
                : [],
            authentication: globalThis.Array.isArray(object?.authentication)
                ? object.authentication.map((e) => globalThis.String(e))
                : [],
            assertionMethod: globalThis.Array.isArray(object?.assertionMethod)
                ? object.assertionMethod.map((e) => globalThis.String(e))
                : [],
            capabilityInvocation: globalThis.Array.isArray(object?.capabilityInvocation)
                ? object.capabilityInvocation.map((e) => globalThis.String(e))
                : [],
            capabilityDelegation: globalThis.Array.isArray(object?.capabilityDelegation)
                ? object.capabilityDelegation.map((e) => globalThis.String(e))
                : [],
            keyAgreement: globalThis.Array.isArray(object?.keyAgreement)
                ? object.keyAgreement.map((e) => globalThis.String(e))
                : [],
            service: globalThis.Array.isArray(object?.service)
                ? object.service.map((e) => exports.Service.fromJSON(e))
                : [],
            alsoKnownAs: globalThis.Array.isArray(object?.alsoKnownAs)
                ? object.alsoKnownAs.map((e) => globalThis.String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.context?.length) {
            obj.context = message.context;
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.controller?.length) {
            obj.controller = message.controller;
        }
        if (message.verificationMethod?.length) {
            obj.verificationMethod = message.verificationMethod.map((e) => exports.VerificationMethod.toJSON(e));
        }
        if (message.authentication?.length) {
            obj.authentication = message.authentication;
        }
        if (message.assertionMethod?.length) {
            obj.assertionMethod = message.assertionMethod;
        }
        if (message.capabilityInvocation?.length) {
            obj.capabilityInvocation = message.capabilityInvocation;
        }
        if (message.capabilityDelegation?.length) {
            obj.capabilityDelegation = message.capabilityDelegation;
        }
        if (message.keyAgreement?.length) {
            obj.keyAgreement = message.keyAgreement;
        }
        if (message.service?.length) {
            obj.service = message.service.map((e) => exports.Service.toJSON(e));
        }
        if (message.alsoKnownAs?.length) {
            obj.alsoKnownAs = message.alsoKnownAs;
        }
        return obj;
    },
    create(base) {
        return exports.Did.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDid();
        message.context = object.context?.map((e) => e) || [];
        message.id = object.id ?? "";
        message.controller = object.controller?.map((e) => e) || [];
        message.verificationMethod = object.verificationMethod?.map((e) => exports.VerificationMethod.fromPartial(e)) || [];
        message.authentication = object.authentication?.map((e) => e) || [];
        message.assertionMethod = object.assertionMethod?.map((e) => e) || [];
        message.capabilityInvocation = object.capabilityInvocation?.map((e) => e) || [];
        message.capabilityDelegation = object.capabilityDelegation?.map((e) => e) || [];
        message.keyAgreement = object.keyAgreement?.map((e) => e) || [];
        message.service = object.service?.map((e) => exports.Service.fromPartial(e)) || [];
        message.alsoKnownAs = object.alsoKnownAs?.map((e) => e) || [];
        return message;
    },
};
function createBaseVerificationMethod() {
    return { id: "", type: "", controller: "", publicKeyJwk: [], publicKeyMultibase: "" };
}
exports.VerificationMethod = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== "") {
            writer.uint32(18).string(message.type);
        }
        if (message.controller !== "") {
            writer.uint32(26).string(message.controller);
        }
        for (const v of message.publicKeyJwk) {
            common_js_1.KeyValuePair.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.publicKeyMultibase !== "") {
            writer.uint32(42).string(message.publicKeyMultibase);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : minimal_js_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerificationMethod();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.controller = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.publicKeyJwk.push(common_js_1.KeyValuePair.decode(reader, reader.uint32()));
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.publicKeyMultibase = reader.string();
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
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            type: isSet(object.type) ? globalThis.String(object.type) : "",
            controller: isSet(object.controller) ? globalThis.String(object.controller) : "",
            publicKeyJwk: globalThis.Array.isArray(object?.publicKeyJwk)
                ? object.publicKeyJwk.map((e) => common_js_1.KeyValuePair.fromJSON(e))
                : [],
            publicKeyMultibase: isSet(object.publicKeyMultibase) ? globalThis.String(object.publicKeyMultibase) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.type !== "") {
            obj.type = message.type;
        }
        if (message.controller !== "") {
            obj.controller = message.controller;
        }
        if (message.publicKeyJwk?.length) {
            obj.publicKeyJwk = message.publicKeyJwk.map((e) => common_js_1.KeyValuePair.toJSON(e));
        }
        if (message.publicKeyMultibase !== "") {
            obj.publicKeyMultibase = message.publicKeyMultibase;
        }
        return obj;
    },
    create(base) {
        return exports.VerificationMethod.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseVerificationMethod();
        message.id = object.id ?? "";
        message.type = object.type ?? "";
        message.controller = object.controller ?? "";
        message.publicKeyJwk = object.publicKeyJwk?.map((e) => common_js_1.KeyValuePair.fromPartial(e)) || [];
        message.publicKeyMultibase = object.publicKeyMultibase ?? "";
        return message;
    },
};
function createBaseService() {
    return { id: "", type: "", serviceEndpoint: "" };
}
exports.Service = {
    encode(message, writer = minimal_js_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.type !== "") {
            writer.uint32(18).string(message.type);
        }
        if (message.serviceEndpoint !== "") {
            writer.uint32(26).string(message.serviceEndpoint);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_js_1.default.Reader ? input : minimal_js_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseService();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.type = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.serviceEndpoint = reader.string();
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
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            type: isSet(object.type) ? globalThis.String(object.type) : "",
            serviceEndpoint: isSet(object.serviceEndpoint) ? globalThis.String(object.serviceEndpoint) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.type !== "") {
            obj.type = message.type;
        }
        if (message.serviceEndpoint !== "") {
            obj.serviceEndpoint = message.serviceEndpoint;
        }
        return obj;
    },
    create(base) {
        return exports.Service.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseService();
        message.id = object.id ?? "";
        message.type = object.type ?? "";
        message.serviceEndpoint = object.serviceEndpoint ?? "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=did.js.map