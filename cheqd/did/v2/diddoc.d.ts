import _m0 from "protobufjs/minimal";
export interface DidDoc {
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
    id: string;
    verificationMethodType: string;
    controller: string;
    verificationMaterial: string;
}
export interface Service {
    id: string;
    serviceType: string;
    serviceEndpoint: string[];
}
export interface DidDocWithMetadata {
    didDoc: DidDoc | undefined;
    metadata: Metadata | undefined;
}
export interface Metadata {
    created: string;
    updated: string;
    deactivated: boolean;
    versionId: string;
    nextVersionId: string;
    previousVersionId: string;
}
export declare const DidDoc: {
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
            verificationMethodType?: string | undefined;
            controller?: string | undefined;
            verificationMaterial?: string | undefined;
        }[] | undefined;
        authentication?: string[] | undefined;
        assertionMethod?: string[] | undefined;
        capabilityInvocation?: string[] | undefined;
        capabilityDelegation?: string[] | undefined;
        keyAgreement?: string[] | undefined;
        service?: {
            id?: string | undefined;
            serviceType?: string | undefined;
            serviceEndpoint?: string[] | undefined;
        }[] | undefined;
        alsoKnownAs?: string[] | undefined;
    } & {
        context?: (string[] & string[] & { [K in Exclude<keyof I["context"], keyof string[]>]: never; }) | undefined;
        id?: string | undefined;
        controller?: (string[] & string[] & { [K_1 in Exclude<keyof I["controller"], keyof string[]>]: never; }) | undefined;
        verificationMethod?: ({
            id?: string | undefined;
            verificationMethodType?: string | undefined;
            controller?: string | undefined;
            verificationMaterial?: string | undefined;
        }[] & ({
            id?: string | undefined;
            verificationMethodType?: string | undefined;
            controller?: string | undefined;
            verificationMaterial?: string | undefined;
        } & {
            id?: string | undefined;
            verificationMethodType?: string | undefined;
            controller?: string | undefined;
            verificationMaterial?: string | undefined;
        } & { [K_2 in Exclude<keyof I["verificationMethod"][number], keyof VerificationMethod>]: never; })[] & { [K_3 in Exclude<keyof I["verificationMethod"], keyof {
            id?: string | undefined;
            verificationMethodType?: string | undefined;
            controller?: string | undefined;
            verificationMaterial?: string | undefined;
        }[]>]: never; }) | undefined;
        authentication?: (string[] & string[] & { [K_4 in Exclude<keyof I["authentication"], keyof string[]>]: never; }) | undefined;
        assertionMethod?: (string[] & string[] & { [K_5 in Exclude<keyof I["assertionMethod"], keyof string[]>]: never; }) | undefined;
        capabilityInvocation?: (string[] & string[] & { [K_6 in Exclude<keyof I["capabilityInvocation"], keyof string[]>]: never; }) | undefined;
        capabilityDelegation?: (string[] & string[] & { [K_7 in Exclude<keyof I["capabilityDelegation"], keyof string[]>]: never; }) | undefined;
        keyAgreement?: (string[] & string[] & { [K_8 in Exclude<keyof I["keyAgreement"], keyof string[]>]: never; }) | undefined;
        service?: ({
            id?: string | undefined;
            serviceType?: string | undefined;
            serviceEndpoint?: string[] | undefined;
        }[] & ({
            id?: string | undefined;
            serviceType?: string | undefined;
            serviceEndpoint?: string[] | undefined;
        } & {
            id?: string | undefined;
            serviceType?: string | undefined;
            serviceEndpoint?: (string[] & string[] & { [K_9 in Exclude<keyof I["service"][number]["serviceEndpoint"], keyof string[]>]: never; }) | undefined;
        } & { [K_10 in Exclude<keyof I["service"][number], keyof Service>]: never; })[] & { [K_11 in Exclude<keyof I["service"], keyof {
            id?: string | undefined;
            serviceType?: string | undefined;
            serviceEndpoint?: string[] | undefined;
        }[]>]: never; }) | undefined;
        alsoKnownAs?: (string[] & string[] & { [K_12 in Exclude<keyof I["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
    } & { [K_13 in Exclude<keyof I, keyof DidDoc>]: never; }>(object: I): DidDoc;
};
export declare const VerificationMethod: {
    encode(message: VerificationMethod, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerificationMethod;
    fromJSON(object: any): VerificationMethod;
    toJSON(message: VerificationMethod): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        verificationMethodType?: string | undefined;
        controller?: string | undefined;
        verificationMaterial?: string | undefined;
    } & {
        id?: string | undefined;
        verificationMethodType?: string | undefined;
        controller?: string | undefined;
        verificationMaterial?: string | undefined;
    } & { [K in Exclude<keyof I, keyof VerificationMethod>]: never; }>(object: I): VerificationMethod;
};
export declare const Service: {
    encode(message: Service, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Service;
    fromJSON(object: any): Service;
    toJSON(message: Service): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        serviceType?: string | undefined;
        serviceEndpoint?: string[] | undefined;
    } & {
        id?: string | undefined;
        serviceType?: string | undefined;
        serviceEndpoint?: (string[] & string[] & { [K in Exclude<keyof I["serviceEndpoint"], keyof string[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof Service>]: never; }>(object: I): Service;
};
export declare const DidDocWithMetadata: {
    encode(message: DidDocWithMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DidDocWithMetadata;
    fromJSON(object: any): DidDocWithMetadata;
    toJSON(message: DidDocWithMetadata): unknown;
    fromPartial<I extends {
        didDoc?: {
            context?: string[] | undefined;
            id?: string | undefined;
            controller?: string[] | undefined;
            verificationMethod?: {
                id?: string | undefined;
                verificationMethodType?: string | undefined;
                controller?: string | undefined;
                verificationMaterial?: string | undefined;
            }[] | undefined;
            authentication?: string[] | undefined;
            assertionMethod?: string[] | undefined;
            capabilityInvocation?: string[] | undefined;
            capabilityDelegation?: string[] | undefined;
            keyAgreement?: string[] | undefined;
            service?: {
                id?: string | undefined;
                serviceType?: string | undefined;
                serviceEndpoint?: string[] | undefined;
            }[] | undefined;
            alsoKnownAs?: string[] | undefined;
        } | undefined;
        metadata?: {
            created?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
            nextVersionId?: string | undefined;
            previousVersionId?: string | undefined;
        } | undefined;
    } & {
        didDoc?: ({
            context?: string[] | undefined;
            id?: string | undefined;
            controller?: string[] | undefined;
            verificationMethod?: {
                id?: string | undefined;
                verificationMethodType?: string | undefined;
                controller?: string | undefined;
                verificationMaterial?: string | undefined;
            }[] | undefined;
            authentication?: string[] | undefined;
            assertionMethod?: string[] | undefined;
            capabilityInvocation?: string[] | undefined;
            capabilityDelegation?: string[] | undefined;
            keyAgreement?: string[] | undefined;
            service?: {
                id?: string | undefined;
                serviceType?: string | undefined;
                serviceEndpoint?: string[] | undefined;
            }[] | undefined;
            alsoKnownAs?: string[] | undefined;
        } & {
            context?: (string[] & string[] & { [K in Exclude<keyof I["didDoc"]["context"], keyof string[]>]: never; }) | undefined;
            id?: string | undefined;
            controller?: (string[] & string[] & { [K_1 in Exclude<keyof I["didDoc"]["controller"], keyof string[]>]: never; }) | undefined;
            verificationMethod?: ({
                id?: string | undefined;
                verificationMethodType?: string | undefined;
                controller?: string | undefined;
                verificationMaterial?: string | undefined;
            }[] & ({
                id?: string | undefined;
                verificationMethodType?: string | undefined;
                controller?: string | undefined;
                verificationMaterial?: string | undefined;
            } & {
                id?: string | undefined;
                verificationMethodType?: string | undefined;
                controller?: string | undefined;
                verificationMaterial?: string | undefined;
            } & { [K_2 in Exclude<keyof I["didDoc"]["verificationMethod"][number], keyof VerificationMethod>]: never; })[] & { [K_3 in Exclude<keyof I["didDoc"]["verificationMethod"], keyof {
                id?: string | undefined;
                verificationMethodType?: string | undefined;
                controller?: string | undefined;
                verificationMaterial?: string | undefined;
            }[]>]: never; }) | undefined;
            authentication?: (string[] & string[] & { [K_4 in Exclude<keyof I["didDoc"]["authentication"], keyof string[]>]: never; }) | undefined;
            assertionMethod?: (string[] & string[] & { [K_5 in Exclude<keyof I["didDoc"]["assertionMethod"], keyof string[]>]: never; }) | undefined;
            capabilityInvocation?: (string[] & string[] & { [K_6 in Exclude<keyof I["didDoc"]["capabilityInvocation"], keyof string[]>]: never; }) | undefined;
            capabilityDelegation?: (string[] & string[] & { [K_7 in Exclude<keyof I["didDoc"]["capabilityDelegation"], keyof string[]>]: never; }) | undefined;
            keyAgreement?: (string[] & string[] & { [K_8 in Exclude<keyof I["didDoc"]["keyAgreement"], keyof string[]>]: never; }) | undefined;
            service?: ({
                id?: string | undefined;
                serviceType?: string | undefined;
                serviceEndpoint?: string[] | undefined;
            }[] & ({
                id?: string | undefined;
                serviceType?: string | undefined;
                serviceEndpoint?: string[] | undefined;
            } & {
                id?: string | undefined;
                serviceType?: string | undefined;
                serviceEndpoint?: (string[] & string[] & { [K_9 in Exclude<keyof I["didDoc"]["service"][number]["serviceEndpoint"], keyof string[]>]: never; }) | undefined;
            } & { [K_10 in Exclude<keyof I["didDoc"]["service"][number], keyof Service>]: never; })[] & { [K_11 in Exclude<keyof I["didDoc"]["service"], keyof {
                id?: string | undefined;
                serviceType?: string | undefined;
                serviceEndpoint?: string[] | undefined;
            }[]>]: never; }) | undefined;
            alsoKnownAs?: (string[] & string[] & { [K_12 in Exclude<keyof I["didDoc"]["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
        } & { [K_13 in Exclude<keyof I["didDoc"], keyof DidDoc>]: never; }) | undefined;
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
        } & { [K_14 in Exclude<keyof I["metadata"], keyof Metadata>]: never; }) | undefined;
    } & { [K_15 in Exclude<keyof I, keyof DidDocWithMetadata>]: never; }>(object: I): DidDocWithMetadata;
};
export declare const Metadata: {
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
    } & { [K in Exclude<keyof I, keyof Metadata>]: never; }>(object: I): Metadata;
};
//# sourceMappingURL=diddoc.d.ts.map