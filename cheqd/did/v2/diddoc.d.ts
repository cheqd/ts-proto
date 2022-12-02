import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "cheqd.did.v2";
export interface DidDoc {
    $type: "cheqd.did.v2.DidDoc";
    context: string[];
    id: string;
    controller: string[];
    verificationMethod: VerificationMethod[];
    authentication: string[];
    assertionMethod: string[];
    capabilityInvocation: string[];
    capabilityDelegation: string[];
    keyAgreement: string[];
    service: Service[];
    alsoKnownAs: string[];
}
export interface VerificationMethod {
    $type: "cheqd.did.v2.VerificationMethod";
    id: string;
    type: string;
    controller: string;
    verificationMaterial: string;
}
export interface Service {
    $type: "cheqd.did.v2.Service";
    id: string;
    type: string;
    serviceEndpoint: string[];
}
export interface DidDocWithMetadata {
    $type: "cheqd.did.v2.DidDocWithMetadata";
    didDoc: DidDoc | undefined;
    metadata: Metadata | undefined;
}
export interface Metadata {
    $type: "cheqd.did.v2.Metadata";
    created: string;
    updated: string;
    deactivated: boolean;
    versionId: string;
    nextVersionId: string;
    previousVersionId: string;
}
export declare const DidDoc: {
    $type: "cheqd.did.v2.DidDoc";
    encode(message: DidDoc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DidDoc;
    fromJSON(object: any): DidDoc;
    toJSON(message: DidDoc): unknown;
    fromPartial<I extends {
        context?: string[] | undefined;
        id?: string | undefined;
        controller?: string[] | undefined;
        verificationMethod?: {
            id?: string | undefined;
            controller?: string | undefined;
            type?: string | undefined;
            verificationMaterial?: string | undefined;
        }[] | undefined;
        authentication?: string[] | undefined;
        assertionMethod?: string[] | undefined;
        capabilityInvocation?: string[] | undefined;
        capabilityDelegation?: string[] | undefined;
        keyAgreement?: string[] | undefined;
        service?: {
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: string[] | undefined;
        }[] | undefined;
        alsoKnownAs?: string[] | undefined;
    } & {
        context?: (string[] & string[] & { [K in Exclude<keyof I["context"], "$type" | keyof string[]>]: never; }) | undefined;
        id?: string | undefined;
        controller?: (string[] & string[] & { [K_1 in Exclude<keyof I["controller"], "$type" | keyof string[]>]: never; }) | undefined;
        verificationMethod?: ({
            id?: string | undefined;
            controller?: string | undefined;
            type?: string | undefined;
            verificationMaterial?: string | undefined;
        }[] & ({
            id?: string | undefined;
            controller?: string | undefined;
            type?: string | undefined;
            verificationMaterial?: string | undefined;
        } & {
            id?: string | undefined;
            controller?: string | undefined;
            type?: string | undefined;
            verificationMaterial?: string | undefined;
        } & { [K_2 in Exclude<keyof I["verificationMethod"][number], "$type" | "id" | "controller" | "type" | "verificationMaterial">]: never; })[] & { [K_3 in Exclude<keyof I["verificationMethod"], "$type" | keyof {
            id?: string | undefined;
            controller?: string | undefined;
            type?: string | undefined;
            verificationMaterial?: string | undefined;
        }[]>]: never; }) | undefined;
        authentication?: (string[] & string[] & { [K_4 in Exclude<keyof I["authentication"], "$type" | keyof string[]>]: never; }) | undefined;
        assertionMethod?: (string[] & string[] & { [K_5 in Exclude<keyof I["assertionMethod"], "$type" | keyof string[]>]: never; }) | undefined;
        capabilityInvocation?: (string[] & string[] & { [K_6 in Exclude<keyof I["capabilityInvocation"], "$type" | keyof string[]>]: never; }) | undefined;
        capabilityDelegation?: (string[] & string[] & { [K_7 in Exclude<keyof I["capabilityDelegation"], "$type" | keyof string[]>]: never; }) | undefined;
        keyAgreement?: (string[] & string[] & { [K_8 in Exclude<keyof I["keyAgreement"], "$type" | keyof string[]>]: never; }) | undefined;
        service?: ({
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: string[] | undefined;
        }[] & ({
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: string[] | undefined;
        } & {
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: (string[] & string[] & { [K_9 in Exclude<keyof I["service"][number]["serviceEndpoint"], "$type" | keyof string[]>]: never; }) | undefined;
        } & { [K_10 in Exclude<keyof I["service"][number], "$type" | "id" | "type" | "serviceEndpoint">]: never; })[] & { [K_11 in Exclude<keyof I["service"], "$type" | keyof {
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: string[] | undefined;
        }[]>]: never; }) | undefined;
        alsoKnownAs?: (string[] & string[] & { [K_12 in Exclude<keyof I["alsoKnownAs"], "$type" | keyof string[]>]: never; }) | undefined;
    } & { [K_13 in Exclude<keyof I, "$type" | "context" | "id" | "controller" | "verificationMethod" | "authentication" | "assertionMethod" | "capabilityInvocation" | "capabilityDelegation" | "keyAgreement" | "service" | "alsoKnownAs">]: never; }>(object: I): DidDoc;
};
export declare const VerificationMethod: {
    $type: "cheqd.did.v2.VerificationMethod";
    encode(message: VerificationMethod, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerificationMethod;
    fromJSON(object: any): VerificationMethod;
    toJSON(message: VerificationMethod): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        controller?: string | undefined;
        type?: string | undefined;
        verificationMaterial?: string | undefined;
    } & {
        id?: string | undefined;
        controller?: string | undefined;
        type?: string | undefined;
        verificationMaterial?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "id" | "controller" | "type" | "verificationMaterial">]: never; }>(object: I): VerificationMethod;
};
export declare const Service: {
    $type: "cheqd.did.v2.Service";
    encode(message: Service, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Service;
    fromJSON(object: any): Service;
    toJSON(message: Service): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        type?: string | undefined;
        serviceEndpoint?: string[] | undefined;
    } & {
        id?: string | undefined;
        type?: string | undefined;
        serviceEndpoint?: (string[] & string[] & { [K in Exclude<keyof I["serviceEndpoint"], "$type" | keyof string[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "id" | "type" | "serviceEndpoint">]: never; }>(object: I): Service;
};
export declare const DidDocWithMetadata: {
    $type: "cheqd.did.v2.DidDocWithMetadata";
    encode(message: DidDocWithMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DidDocWithMetadata;
    fromJSON(object: any): DidDocWithMetadata;
    toJSON(message: DidDocWithMetadata): unknown;
    fromPartial<I extends {
        metadata?: {
            created?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
            nextVersionId?: string | undefined;
            previousVersionId?: string | undefined;
        } | undefined;
        didDoc?: {
            context?: string[] | undefined;
            id?: string | undefined;
            controller?: string[] | undefined;
            verificationMethod?: {
                id?: string | undefined;
                controller?: string | undefined;
                type?: string | undefined;
                verificationMaterial?: string | undefined;
            }[] | undefined;
            authentication?: string[] | undefined;
            assertionMethod?: string[] | undefined;
            capabilityInvocation?: string[] | undefined;
            capabilityDelegation?: string[] | undefined;
            keyAgreement?: string[] | undefined;
            service?: {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string[] | undefined;
            }[] | undefined;
            alsoKnownAs?: string[] | undefined;
        } | undefined;
    } & {
        metadata?: ({
            created?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
            nextVersionId?: string | undefined;
            previousVersionId?: string | undefined;
        } & {
            created?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
            nextVersionId?: string | undefined;
            previousVersionId?: string | undefined;
        } & { [K in Exclude<keyof I["metadata"], "$type" | "created" | "updated" | "deactivated" | "versionId" | "nextVersionId" | "previousVersionId">]: never; }) | undefined;
        didDoc?: ({
            context?: string[] | undefined;
            id?: string | undefined;
            controller?: string[] | undefined;
            verificationMethod?: {
                id?: string | undefined;
                controller?: string | undefined;
                type?: string | undefined;
                verificationMaterial?: string | undefined;
            }[] | undefined;
            authentication?: string[] | undefined;
            assertionMethod?: string[] | undefined;
            capabilityInvocation?: string[] | undefined;
            capabilityDelegation?: string[] | undefined;
            keyAgreement?: string[] | undefined;
            service?: {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string[] | undefined;
            }[] | undefined;
            alsoKnownAs?: string[] | undefined;
        } & {
            context?: (string[] & string[] & { [K_1 in Exclude<keyof I["didDoc"]["context"], "$type" | keyof string[]>]: never; }) | undefined;
            id?: string | undefined;
            controller?: (string[] & string[] & { [K_2 in Exclude<keyof I["didDoc"]["controller"], "$type" | keyof string[]>]: never; }) | undefined;
            verificationMethod?: ({
                id?: string | undefined;
                controller?: string | undefined;
                type?: string | undefined;
                verificationMaterial?: string | undefined;
            }[] & ({
                id?: string | undefined;
                controller?: string | undefined;
                type?: string | undefined;
                verificationMaterial?: string | undefined;
            } & {
                id?: string | undefined;
                controller?: string | undefined;
                type?: string | undefined;
                verificationMaterial?: string | undefined;
            } & { [K_3 in Exclude<keyof I["didDoc"]["verificationMethod"][number], "$type" | "id" | "controller" | "type" | "verificationMaterial">]: never; })[] & { [K_4 in Exclude<keyof I["didDoc"]["verificationMethod"], "$type" | keyof {
                id?: string | undefined;
                controller?: string | undefined;
                type?: string | undefined;
                verificationMaterial?: string | undefined;
            }[]>]: never; }) | undefined;
            authentication?: (string[] & string[] & { [K_5 in Exclude<keyof I["didDoc"]["authentication"], "$type" | keyof string[]>]: never; }) | undefined;
            assertionMethod?: (string[] & string[] & { [K_6 in Exclude<keyof I["didDoc"]["assertionMethod"], "$type" | keyof string[]>]: never; }) | undefined;
            capabilityInvocation?: (string[] & string[] & { [K_7 in Exclude<keyof I["didDoc"]["capabilityInvocation"], "$type" | keyof string[]>]: never; }) | undefined;
            capabilityDelegation?: (string[] & string[] & { [K_8 in Exclude<keyof I["didDoc"]["capabilityDelegation"], "$type" | keyof string[]>]: never; }) | undefined;
            keyAgreement?: (string[] & string[] & { [K_9 in Exclude<keyof I["didDoc"]["keyAgreement"], "$type" | keyof string[]>]: never; }) | undefined;
            service?: ({
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string[] | undefined;
            }[] & ({
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string[] | undefined;
            } & {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: (string[] & string[] & { [K_10 in Exclude<keyof I["didDoc"]["service"][number]["serviceEndpoint"], "$type" | keyof string[]>]: never; }) | undefined;
            } & { [K_11 in Exclude<keyof I["didDoc"]["service"][number], "$type" | "id" | "type" | "serviceEndpoint">]: never; })[] & { [K_12 in Exclude<keyof I["didDoc"]["service"], "$type" | keyof {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string[] | undefined;
            }[]>]: never; }) | undefined;
            alsoKnownAs?: (string[] & string[] & { [K_13 in Exclude<keyof I["didDoc"]["alsoKnownAs"], "$type" | keyof string[]>]: never; }) | undefined;
        } & { [K_14 in Exclude<keyof I["didDoc"], "$type" | "context" | "id" | "controller" | "verificationMethod" | "authentication" | "assertionMethod" | "capabilityInvocation" | "capabilityDelegation" | "keyAgreement" | "service" | "alsoKnownAs">]: never; }) | undefined;
    } & { [K_15 in Exclude<keyof I, "$type" | "metadata" | "didDoc">]: never; }>(object: I): DidDocWithMetadata;
};
export declare const Metadata: {
    $type: "cheqd.did.v2.Metadata";
    encode(message: Metadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Metadata;
    fromJSON(object: any): Metadata;
    toJSON(message: Metadata): unknown;
    fromPartial<I extends {
        created?: string | undefined;
        updated?: string | undefined;
        deactivated?: boolean | undefined;
        versionId?: string | undefined;
        nextVersionId?: string | undefined;
        previousVersionId?: string | undefined;
    } & {
        created?: string | undefined;
        updated?: string | undefined;
        deactivated?: boolean | undefined;
        versionId?: string | undefined;
        nextVersionId?: string | undefined;
        previousVersionId?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "created" | "updated" | "deactivated" | "versionId" | "nextVersionId" | "previousVersionId">]: never; }>(object: I): Metadata;
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
//# sourceMappingURL=diddoc.d.ts.map