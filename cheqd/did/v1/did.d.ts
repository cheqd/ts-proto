import Long from "long";
import _m0 from "protobufjs/minimal";
import { KeyValuePair } from "./common";
export declare const protobufPackage = "cheqdid.cheqdnode.cheqd.v1";
export interface Did {
    $type: "cheqdid.cheqdnode.cheqd.v1.Did";
    /** optional */
    context: string[];
    id: string;
    /** optional */
    controller: string[];
    /** optional */
    verificationMethod: VerificationMethod[];
    /** optional */
    authentication: string[];
    /** optional */
    assertionMethod: string[];
    /** optional */
    capabilityInvocation: string[];
    /** optional */
    capabilityDelegation: string[];
    /** optional */
    keyAgreement: string[];
    /** optional */
    service: Service[];
    /** optional */
    alsoKnownAs: string[];
}
export interface VerificationMethod {
    $type: "cheqdid.cheqdnode.cheqd.v1.VerificationMethod";
    id: string;
    type: string;
    controller: string;
    /** optional */
    publicKeyJwk: KeyValuePair[];
    /** optional */
    publicKeyMultibase: string;
}
export interface Service {
    $type: "cheqdid.cheqdnode.cheqd.v1.Service";
    id: string;
    type: string;
    serviceEndpoint: string;
}
export declare const Did: {
    $type: "cheqdid.cheqdnode.cheqd.v1.Did";
    encode(message: Did, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Did;
    fromJSON(object: any): Did;
    toJSON(message: Did): unknown;
    fromPartial<I extends {
        service?: {
            type?: string | undefined;
            id?: string | undefined;
            serviceEndpoint?: string | undefined;
        }[] | undefined;
        id?: string | undefined;
        alsoKnownAs?: string[] | undefined;
        context?: string[] | undefined;
        controller?: string[] | undefined;
        verificationMethod?: {
            type?: string | undefined;
            id?: string | undefined;
            controller?: string | undefined;
            publicKeyJwk?: {
                value?: string | undefined;
                key?: string | undefined;
            }[] | undefined;
            publicKeyMultibase?: string | undefined;
        }[] | undefined;
        authentication?: string[] | undefined;
        assertionMethod?: string[] | undefined;
        capabilityInvocation?: string[] | undefined;
        capabilityDelegation?: string[] | undefined;
        keyAgreement?: string[] | undefined;
    } & {
        service?: ({
            type?: string | undefined;
            id?: string | undefined;
            serviceEndpoint?: string | undefined;
        }[] & ({
            type?: string | undefined;
            id?: string | undefined;
            serviceEndpoint?: string | undefined;
        } & {
            type?: string | undefined;
            id?: string | undefined;
            serviceEndpoint?: string | undefined;
        } & { [K in Exclude<keyof I["service"][number], "$type" | "type" | "id" | "serviceEndpoint">]: never; })[] & { [K_1 in Exclude<keyof I["service"], "$type" | keyof {
            type?: string | undefined;
            id?: string | undefined;
            serviceEndpoint?: string | undefined;
        }[]>]: never; }) | undefined;
        id?: string | undefined;
        alsoKnownAs?: (string[] & string[] & { [K_2 in Exclude<keyof I["alsoKnownAs"], "$type" | keyof string[]>]: never; }) | undefined;
        context?: (string[] & string[] & { [K_3 in Exclude<keyof I["context"], "$type" | keyof string[]>]: never; }) | undefined;
        controller?: (string[] & string[] & { [K_4 in Exclude<keyof I["controller"], "$type" | keyof string[]>]: never; }) | undefined;
        verificationMethod?: ({
            type?: string | undefined;
            id?: string | undefined;
            controller?: string | undefined;
            publicKeyJwk?: {
                value?: string | undefined;
                key?: string | undefined;
            }[] | undefined;
            publicKeyMultibase?: string | undefined;
        }[] & ({
            type?: string | undefined;
            id?: string | undefined;
            controller?: string | undefined;
            publicKeyJwk?: {
                value?: string | undefined;
                key?: string | undefined;
            }[] | undefined;
            publicKeyMultibase?: string | undefined;
        } & {
            type?: string | undefined;
            id?: string | undefined;
            controller?: string | undefined;
            publicKeyJwk?: ({
                value?: string | undefined;
                key?: string | undefined;
            }[] & ({
                value?: string | undefined;
                key?: string | undefined;
            } & {
                value?: string | undefined;
                key?: string | undefined;
            } & { [K_5 in Exclude<keyof I["verificationMethod"][number]["publicKeyJwk"][number], "$type" | "value" | "key">]: never; })[] & { [K_6 in Exclude<keyof I["verificationMethod"][number]["publicKeyJwk"], "$type" | keyof {
                value?: string | undefined;
                key?: string | undefined;
            }[]>]: never; }) | undefined;
            publicKeyMultibase?: string | undefined;
        } & { [K_7 in Exclude<keyof I["verificationMethod"][number], "$type" | "type" | "id" | "controller" | "publicKeyJwk" | "publicKeyMultibase">]: never; })[] & { [K_8 in Exclude<keyof I["verificationMethod"], "$type" | keyof {
            type?: string | undefined;
            id?: string | undefined;
            controller?: string | undefined;
            publicKeyJwk?: {
                value?: string | undefined;
                key?: string | undefined;
            }[] | undefined;
            publicKeyMultibase?: string | undefined;
        }[]>]: never; }) | undefined;
        authentication?: (string[] & string[] & { [K_9 in Exclude<keyof I["authentication"], "$type" | keyof string[]>]: never; }) | undefined;
        assertionMethod?: (string[] & string[] & { [K_10 in Exclude<keyof I["assertionMethod"], "$type" | keyof string[]>]: never; }) | undefined;
        capabilityInvocation?: (string[] & string[] & { [K_11 in Exclude<keyof I["capabilityInvocation"], "$type" | keyof string[]>]: never; }) | undefined;
        capabilityDelegation?: (string[] & string[] & { [K_12 in Exclude<keyof I["capabilityDelegation"], "$type" | keyof string[]>]: never; }) | undefined;
        keyAgreement?: (string[] & string[] & { [K_13 in Exclude<keyof I["keyAgreement"], "$type" | keyof string[]>]: never; }) | undefined;
    } & { [K_14 in Exclude<keyof I, "$type" | "service" | "id" | "alsoKnownAs" | "context" | "controller" | "verificationMethod" | "authentication" | "assertionMethod" | "capabilityInvocation" | "capabilityDelegation" | "keyAgreement">]: never; }>(object: I): Did;
};
export declare const VerificationMethod: {
    $type: "cheqdid.cheqdnode.cheqd.v1.VerificationMethod";
    encode(message: VerificationMethod, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerificationMethod;
    fromJSON(object: any): VerificationMethod;
    toJSON(message: VerificationMethod): unknown;
    fromPartial<I extends {
        type?: string | undefined;
        id?: string | undefined;
        controller?: string | undefined;
        publicKeyJwk?: {
            value?: string | undefined;
            key?: string | undefined;
        }[] | undefined;
        publicKeyMultibase?: string | undefined;
    } & {
        type?: string | undefined;
        id?: string | undefined;
        controller?: string | undefined;
        publicKeyJwk?: ({
            value?: string | undefined;
            key?: string | undefined;
        }[] & ({
            value?: string | undefined;
            key?: string | undefined;
        } & {
            value?: string | undefined;
            key?: string | undefined;
        } & { [K in Exclude<keyof I["publicKeyJwk"][number], "$type" | "value" | "key">]: never; })[] & { [K_1 in Exclude<keyof I["publicKeyJwk"], "$type" | keyof {
            value?: string | undefined;
            key?: string | undefined;
        }[]>]: never; }) | undefined;
        publicKeyMultibase?: string | undefined;
    } & { [K_2 in Exclude<keyof I, "$type" | "type" | "id" | "controller" | "publicKeyJwk" | "publicKeyMultibase">]: never; }>(object: I): VerificationMethod;
};
export declare const Service: {
    $type: "cheqdid.cheqdnode.cheqd.v1.Service";
    encode(message: Service, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Service;
    fromJSON(object: any): Service;
    toJSON(message: Service): unknown;
    fromPartial<I extends {
        type?: string | undefined;
        id?: string | undefined;
        serviceEndpoint?: string | undefined;
    } & {
        type?: string | undefined;
        id?: string | undefined;
        serviceEndpoint?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "type" | "id" | "serviceEndpoint">]: never; }>(object: I): Service;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never;
};
export {};
//# sourceMappingURL=did.d.ts.map