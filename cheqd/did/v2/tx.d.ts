import _m0 from "protobufjs/minimal";
import { DidDocWithMetadata, Service, VerificationMethod } from "./diddoc";
export interface MsgCreateDidDoc {
    payload: MsgCreateDidDocPayload | undefined;
    signatures: SignInfo[];
}
export interface MsgUpdateDidDoc {
    payload: MsgUpdateDidDocPayload | undefined;
    signatures: SignInfo[];
}
export interface MsgDeactivateDidDoc {
    payload: MsgDeactivateDidDocPayload | undefined;
    signatures: SignInfo[];
}
export interface SignInfo {
    verificationMethodId: string;
    signature: Uint8Array;
}
export interface MsgCreateDidDocPayload {
    context: string[];
    id: string;
    controller: string[];
    verificationMethod: VerificationMethod[];
    authentication: string[];
    assertionMethod: string[];
    capabilityInvocation: string[];
    capabilityDelegation: string[];
    keyAgreement: string[];
    alsoKnownAs: string[];
    service: Service[];
    versionId: string;
}
export interface MsgCreateDidDocResponse {
    value: DidDocWithMetadata | undefined;
}
export interface MsgUpdateDidDocPayload {
    context: string[];
    id: string;
    controller: string[];
    verificationMethod: VerificationMethod[];
    authentication: string[];
    assertionMethod: string[];
    capabilityInvocation: string[];
    capabilityDelegation: string[];
    keyAgreement: string[];
    alsoKnownAs: string[];
    service: Service[];
    versionId: string;
}
export interface MsgUpdateDidDocResponse {
    value: DidDocWithMetadata | undefined;
}
export interface MsgDeactivateDidDocPayload {
    id: string;
    versionId: string;
}
export interface MsgDeactivateDidDocResponse {
    value: DidDocWithMetadata | undefined;
}
export declare const MsgCreateDidDoc: {
    encode(message: MsgCreateDidDoc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDidDoc;
    fromJSON(object: any): MsgCreateDidDoc;
    toJSON(message: MsgCreateDidDoc): unknown;
    fromPartial<I extends {
        payload?: {
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
            alsoKnownAs?: string[] | undefined;
            service?: {
                id?: string | undefined;
                serviceType?: string | undefined;
                serviceEndpoint?: string[] | undefined;
            }[] | undefined;
            versionId?: string | undefined;
        } | undefined;
        signatures?: {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        payload?: ({
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
            alsoKnownAs?: string[] | undefined;
            service?: {
                id?: string | undefined;
                serviceType?: string | undefined;
                serviceEndpoint?: string[] | undefined;
            }[] | undefined;
            versionId?: string | undefined;
        } & {
            context?: (string[] & string[] & { [K in Exclude<keyof I["payload"]["context"], keyof string[]>]: never; }) | undefined;
            id?: string | undefined;
            controller?: (string[] & string[] & { [K_1 in Exclude<keyof I["payload"]["controller"], keyof string[]>]: never; }) | undefined;
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
            } & { [K_2 in Exclude<keyof I["payload"]["verificationMethod"][number], keyof VerificationMethod>]: never; })[] & { [K_3 in Exclude<keyof I["payload"]["verificationMethod"], keyof {
                id?: string | undefined;
                verificationMethodType?: string | undefined;
                controller?: string | undefined;
                verificationMaterial?: string | undefined;
            }[]>]: never; }) | undefined;
            authentication?: (string[] & string[] & { [K_4 in Exclude<keyof I["payload"]["authentication"], keyof string[]>]: never; }) | undefined;
            assertionMethod?: (string[] & string[] & { [K_5 in Exclude<keyof I["payload"]["assertionMethod"], keyof string[]>]: never; }) | undefined;
            capabilityInvocation?: (string[] & string[] & { [K_6 in Exclude<keyof I["payload"]["capabilityInvocation"], keyof string[]>]: never; }) | undefined;
            capabilityDelegation?: (string[] & string[] & { [K_7 in Exclude<keyof I["payload"]["capabilityDelegation"], keyof string[]>]: never; }) | undefined;
            keyAgreement?: (string[] & string[] & { [K_8 in Exclude<keyof I["payload"]["keyAgreement"], keyof string[]>]: never; }) | undefined;
            alsoKnownAs?: (string[] & string[] & { [K_9 in Exclude<keyof I["payload"]["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
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
                serviceEndpoint?: (string[] & string[] & { [K_10 in Exclude<keyof I["payload"]["service"][number]["serviceEndpoint"], keyof string[]>]: never; }) | undefined;
            } & { [K_11 in Exclude<keyof I["payload"]["service"][number], keyof Service>]: never; })[] & { [K_12 in Exclude<keyof I["payload"]["service"], keyof {
                id?: string | undefined;
                serviceType?: string | undefined;
                serviceEndpoint?: string[] | undefined;
            }[]>]: never; }) | undefined;
            versionId?: string | undefined;
        } & { [K_13 in Exclude<keyof I["payload"], keyof MsgCreateDidDocPayload>]: never; }) | undefined;
        signatures?: ({
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[] & ({
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        } & {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        } & { [K_14 in Exclude<keyof I["signatures"][number], keyof SignInfo>]: never; })[] & { [K_15 in Exclude<keyof I["signatures"], keyof {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_16 in Exclude<keyof I, keyof MsgCreateDidDoc>]: never; }>(object: I): MsgCreateDidDoc;
};
export declare const MsgUpdateDidDoc: {
    encode(message: MsgUpdateDidDoc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDidDoc;
    fromJSON(object: any): MsgUpdateDidDoc;
    toJSON(message: MsgUpdateDidDoc): unknown;
    fromPartial<I extends {
        payload?: {
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
            alsoKnownAs?: string[] | undefined;
            service?: {
                id?: string | undefined;
                serviceType?: string | undefined;
                serviceEndpoint?: string[] | undefined;
            }[] | undefined;
            versionId?: string | undefined;
        } | undefined;
        signatures?: {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        payload?: ({
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
            alsoKnownAs?: string[] | undefined;
            service?: {
                id?: string | undefined;
                serviceType?: string | undefined;
                serviceEndpoint?: string[] | undefined;
            }[] | undefined;
            versionId?: string | undefined;
        } & {
            context?: (string[] & string[] & { [K in Exclude<keyof I["payload"]["context"], keyof string[]>]: never; }) | undefined;
            id?: string | undefined;
            controller?: (string[] & string[] & { [K_1 in Exclude<keyof I["payload"]["controller"], keyof string[]>]: never; }) | undefined;
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
            } & { [K_2 in Exclude<keyof I["payload"]["verificationMethod"][number], keyof VerificationMethod>]: never; })[] & { [K_3 in Exclude<keyof I["payload"]["verificationMethod"], keyof {
                id?: string | undefined;
                verificationMethodType?: string | undefined;
                controller?: string | undefined;
                verificationMaterial?: string | undefined;
            }[]>]: never; }) | undefined;
            authentication?: (string[] & string[] & { [K_4 in Exclude<keyof I["payload"]["authentication"], keyof string[]>]: never; }) | undefined;
            assertionMethod?: (string[] & string[] & { [K_5 in Exclude<keyof I["payload"]["assertionMethod"], keyof string[]>]: never; }) | undefined;
            capabilityInvocation?: (string[] & string[] & { [K_6 in Exclude<keyof I["payload"]["capabilityInvocation"], keyof string[]>]: never; }) | undefined;
            capabilityDelegation?: (string[] & string[] & { [K_7 in Exclude<keyof I["payload"]["capabilityDelegation"], keyof string[]>]: never; }) | undefined;
            keyAgreement?: (string[] & string[] & { [K_8 in Exclude<keyof I["payload"]["keyAgreement"], keyof string[]>]: never; }) | undefined;
            alsoKnownAs?: (string[] & string[] & { [K_9 in Exclude<keyof I["payload"]["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
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
                serviceEndpoint?: (string[] & string[] & { [K_10 in Exclude<keyof I["payload"]["service"][number]["serviceEndpoint"], keyof string[]>]: never; }) | undefined;
            } & { [K_11 in Exclude<keyof I["payload"]["service"][number], keyof Service>]: never; })[] & { [K_12 in Exclude<keyof I["payload"]["service"], keyof {
                id?: string | undefined;
                serviceType?: string | undefined;
                serviceEndpoint?: string[] | undefined;
            }[]>]: never; }) | undefined;
            versionId?: string | undefined;
        } & { [K_13 in Exclude<keyof I["payload"], keyof MsgUpdateDidDocPayload>]: never; }) | undefined;
        signatures?: ({
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[] & ({
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        } & {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        } & { [K_14 in Exclude<keyof I["signatures"][number], keyof SignInfo>]: never; })[] & { [K_15 in Exclude<keyof I["signatures"], keyof {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_16 in Exclude<keyof I, keyof MsgUpdateDidDoc>]: never; }>(object: I): MsgUpdateDidDoc;
};
export declare const MsgDeactivateDidDoc: {
    encode(message: MsgDeactivateDidDoc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeactivateDidDoc;
    fromJSON(object: any): MsgDeactivateDidDoc;
    toJSON(message: MsgDeactivateDidDoc): unknown;
    fromPartial<I extends {
        payload?: {
            id?: string | undefined;
            versionId?: string | undefined;
        } | undefined;
        signatures?: {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        payload?: ({
            id?: string | undefined;
            versionId?: string | undefined;
        } & {
            id?: string | undefined;
            versionId?: string | undefined;
        } & { [K in Exclude<keyof I["payload"], keyof MsgDeactivateDidDocPayload>]: never; }) | undefined;
        signatures?: ({
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[] & ({
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        } & {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        } & { [K_1 in Exclude<keyof I["signatures"][number], keyof SignInfo>]: never; })[] & { [K_2 in Exclude<keyof I["signatures"], keyof {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof MsgDeactivateDidDoc>]: never; }>(object: I): MsgDeactivateDidDoc;
};
export declare const SignInfo: {
    encode(message: SignInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignInfo;
    fromJSON(object: any): SignInfo;
    toJSON(message: SignInfo): unknown;
    fromPartial<I extends {
        verificationMethodId?: string | undefined;
        signature?: Uint8Array | undefined;
    } & {
        verificationMethodId?: string | undefined;
        signature?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, keyof SignInfo>]: never; }>(object: I): SignInfo;
};
export declare const MsgCreateDidDocPayload: {
    encode(message: MsgCreateDidDocPayload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDidDocPayload;
    fromJSON(object: any): MsgCreateDidDocPayload;
    toJSON(message: MsgCreateDidDocPayload): unknown;
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
        alsoKnownAs?: string[] | undefined;
        service?: {
            id?: string | undefined;
            serviceType?: string | undefined;
            serviceEndpoint?: string[] | undefined;
        }[] | undefined;
        versionId?: string | undefined;
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
        alsoKnownAs?: (string[] & string[] & { [K_9 in Exclude<keyof I["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
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
            serviceEndpoint?: (string[] & string[] & { [K_10 in Exclude<keyof I["service"][number]["serviceEndpoint"], keyof string[]>]: never; }) | undefined;
        } & { [K_11 in Exclude<keyof I["service"][number], keyof Service>]: never; })[] & { [K_12 in Exclude<keyof I["service"], keyof {
            id?: string | undefined;
            serviceType?: string | undefined;
            serviceEndpoint?: string[] | undefined;
        }[]>]: never; }) | undefined;
        versionId?: string | undefined;
    } & { [K_13 in Exclude<keyof I, keyof MsgCreateDidDocPayload>]: never; }>(object: I): MsgCreateDidDocPayload;
};
export declare const MsgCreateDidDocResponse: {
    encode(message: MsgCreateDidDocResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDidDocResponse;
    fromJSON(object: any): MsgCreateDidDocResponse;
    toJSON(message: MsgCreateDidDocResponse): unknown;
    fromPartial<I extends {
        value?: {
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
        } | undefined;
    } & {
        value?: ({
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
                context?: (string[] & string[] & { [K in Exclude<keyof I["value"]["didDoc"]["context"], keyof string[]>]: never; }) | undefined;
                id?: string | undefined;
                controller?: (string[] & string[] & { [K_1 in Exclude<keyof I["value"]["didDoc"]["controller"], keyof string[]>]: never; }) | undefined;
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
                } & { [K_2 in Exclude<keyof I["value"]["didDoc"]["verificationMethod"][number], keyof VerificationMethod>]: never; })[] & { [K_3 in Exclude<keyof I["value"]["didDoc"]["verificationMethod"], keyof {
                    id?: string | undefined;
                    verificationMethodType?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[]>]: never; }) | undefined;
                authentication?: (string[] & string[] & { [K_4 in Exclude<keyof I["value"]["didDoc"]["authentication"], keyof string[]>]: never; }) | undefined;
                assertionMethod?: (string[] & string[] & { [K_5 in Exclude<keyof I["value"]["didDoc"]["assertionMethod"], keyof string[]>]: never; }) | undefined;
                capabilityInvocation?: (string[] & string[] & { [K_6 in Exclude<keyof I["value"]["didDoc"]["capabilityInvocation"], keyof string[]>]: never; }) | undefined;
                capabilityDelegation?: (string[] & string[] & { [K_7 in Exclude<keyof I["value"]["didDoc"]["capabilityDelegation"], keyof string[]>]: never; }) | undefined;
                keyAgreement?: (string[] & string[] & { [K_8 in Exclude<keyof I["value"]["didDoc"]["keyAgreement"], keyof string[]>]: never; }) | undefined;
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
                    serviceEndpoint?: (string[] & string[] & { [K_9 in Exclude<keyof I["value"]["didDoc"]["service"][number]["serviceEndpoint"], keyof string[]>]: never; }) | undefined;
                } & { [K_10 in Exclude<keyof I["value"]["didDoc"]["service"][number], keyof Service>]: never; })[] & { [K_11 in Exclude<keyof I["value"]["didDoc"]["service"], keyof {
                    id?: string | undefined;
                    serviceType?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                }[]>]: never; }) | undefined;
                alsoKnownAs?: (string[] & string[] & { [K_12 in Exclude<keyof I["value"]["didDoc"]["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
            } & { [K_13 in Exclude<keyof I["value"]["didDoc"], keyof import("./diddoc").DidDoc>]: never; }) | undefined;
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
            } & { [K_14 in Exclude<keyof I["value"]["metadata"], keyof import("./diddoc").Metadata>]: never; }) | undefined;
        } & { [K_15 in Exclude<keyof I["value"], keyof DidDocWithMetadata>]: never; }) | undefined;
    } & { [K_16 in Exclude<keyof I, "value">]: never; }>(object: I): MsgCreateDidDocResponse;
};
export declare const MsgUpdateDidDocPayload: {
    encode(message: MsgUpdateDidDocPayload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDidDocPayload;
    fromJSON(object: any): MsgUpdateDidDocPayload;
    toJSON(message: MsgUpdateDidDocPayload): unknown;
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
        alsoKnownAs?: string[] | undefined;
        service?: {
            id?: string | undefined;
            serviceType?: string | undefined;
            serviceEndpoint?: string[] | undefined;
        }[] | undefined;
        versionId?: string | undefined;
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
        alsoKnownAs?: (string[] & string[] & { [K_9 in Exclude<keyof I["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
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
            serviceEndpoint?: (string[] & string[] & { [K_10 in Exclude<keyof I["service"][number]["serviceEndpoint"], keyof string[]>]: never; }) | undefined;
        } & { [K_11 in Exclude<keyof I["service"][number], keyof Service>]: never; })[] & { [K_12 in Exclude<keyof I["service"], keyof {
            id?: string | undefined;
            serviceType?: string | undefined;
            serviceEndpoint?: string[] | undefined;
        }[]>]: never; }) | undefined;
        versionId?: string | undefined;
    } & { [K_13 in Exclude<keyof I, keyof MsgUpdateDidDocPayload>]: never; }>(object: I): MsgUpdateDidDocPayload;
};
export declare const MsgUpdateDidDocResponse: {
    encode(message: MsgUpdateDidDocResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDidDocResponse;
    fromJSON(object: any): MsgUpdateDidDocResponse;
    toJSON(message: MsgUpdateDidDocResponse): unknown;
    fromPartial<I extends {
        value?: {
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
        } | undefined;
    } & {
        value?: ({
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
                context?: (string[] & string[] & { [K in Exclude<keyof I["value"]["didDoc"]["context"], keyof string[]>]: never; }) | undefined;
                id?: string | undefined;
                controller?: (string[] & string[] & { [K_1 in Exclude<keyof I["value"]["didDoc"]["controller"], keyof string[]>]: never; }) | undefined;
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
                } & { [K_2 in Exclude<keyof I["value"]["didDoc"]["verificationMethod"][number], keyof VerificationMethod>]: never; })[] & { [K_3 in Exclude<keyof I["value"]["didDoc"]["verificationMethod"], keyof {
                    id?: string | undefined;
                    verificationMethodType?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[]>]: never; }) | undefined;
                authentication?: (string[] & string[] & { [K_4 in Exclude<keyof I["value"]["didDoc"]["authentication"], keyof string[]>]: never; }) | undefined;
                assertionMethod?: (string[] & string[] & { [K_5 in Exclude<keyof I["value"]["didDoc"]["assertionMethod"], keyof string[]>]: never; }) | undefined;
                capabilityInvocation?: (string[] & string[] & { [K_6 in Exclude<keyof I["value"]["didDoc"]["capabilityInvocation"], keyof string[]>]: never; }) | undefined;
                capabilityDelegation?: (string[] & string[] & { [K_7 in Exclude<keyof I["value"]["didDoc"]["capabilityDelegation"], keyof string[]>]: never; }) | undefined;
                keyAgreement?: (string[] & string[] & { [K_8 in Exclude<keyof I["value"]["didDoc"]["keyAgreement"], keyof string[]>]: never; }) | undefined;
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
                    serviceEndpoint?: (string[] & string[] & { [K_9 in Exclude<keyof I["value"]["didDoc"]["service"][number]["serviceEndpoint"], keyof string[]>]: never; }) | undefined;
                } & { [K_10 in Exclude<keyof I["value"]["didDoc"]["service"][number], keyof Service>]: never; })[] & { [K_11 in Exclude<keyof I["value"]["didDoc"]["service"], keyof {
                    id?: string | undefined;
                    serviceType?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                }[]>]: never; }) | undefined;
                alsoKnownAs?: (string[] & string[] & { [K_12 in Exclude<keyof I["value"]["didDoc"]["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
            } & { [K_13 in Exclude<keyof I["value"]["didDoc"], keyof import("./diddoc").DidDoc>]: never; }) | undefined;
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
            } & { [K_14 in Exclude<keyof I["value"]["metadata"], keyof import("./diddoc").Metadata>]: never; }) | undefined;
        } & { [K_15 in Exclude<keyof I["value"], keyof DidDocWithMetadata>]: never; }) | undefined;
    } & { [K_16 in Exclude<keyof I, "value">]: never; }>(object: I): MsgUpdateDidDocResponse;
};
export declare const MsgDeactivateDidDocPayload: {
    encode(message: MsgDeactivateDidDocPayload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeactivateDidDocPayload;
    fromJSON(object: any): MsgDeactivateDidDocPayload;
    toJSON(message: MsgDeactivateDidDocPayload): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        versionId?: string | undefined;
    } & {
        id?: string | undefined;
        versionId?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgDeactivateDidDocPayload>]: never; }>(object: I): MsgDeactivateDidDocPayload;
};
export declare const MsgDeactivateDidDocResponse: {
    encode(message: MsgDeactivateDidDocResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeactivateDidDocResponse;
    fromJSON(object: any): MsgDeactivateDidDocResponse;
    toJSON(message: MsgDeactivateDidDocResponse): unknown;
    fromPartial<I extends {
        value?: {
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
        } | undefined;
    } & {
        value?: ({
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
                context?: (string[] & string[] & { [K in Exclude<keyof I["value"]["didDoc"]["context"], keyof string[]>]: never; }) | undefined;
                id?: string | undefined;
                controller?: (string[] & string[] & { [K_1 in Exclude<keyof I["value"]["didDoc"]["controller"], keyof string[]>]: never; }) | undefined;
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
                } & { [K_2 in Exclude<keyof I["value"]["didDoc"]["verificationMethod"][number], keyof VerificationMethod>]: never; })[] & { [K_3 in Exclude<keyof I["value"]["didDoc"]["verificationMethod"], keyof {
                    id?: string | undefined;
                    verificationMethodType?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[]>]: never; }) | undefined;
                authentication?: (string[] & string[] & { [K_4 in Exclude<keyof I["value"]["didDoc"]["authentication"], keyof string[]>]: never; }) | undefined;
                assertionMethod?: (string[] & string[] & { [K_5 in Exclude<keyof I["value"]["didDoc"]["assertionMethod"], keyof string[]>]: never; }) | undefined;
                capabilityInvocation?: (string[] & string[] & { [K_6 in Exclude<keyof I["value"]["didDoc"]["capabilityInvocation"], keyof string[]>]: never; }) | undefined;
                capabilityDelegation?: (string[] & string[] & { [K_7 in Exclude<keyof I["value"]["didDoc"]["capabilityDelegation"], keyof string[]>]: never; }) | undefined;
                keyAgreement?: (string[] & string[] & { [K_8 in Exclude<keyof I["value"]["didDoc"]["keyAgreement"], keyof string[]>]: never; }) | undefined;
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
                    serviceEndpoint?: (string[] & string[] & { [K_9 in Exclude<keyof I["value"]["didDoc"]["service"][number]["serviceEndpoint"], keyof string[]>]: never; }) | undefined;
                } & { [K_10 in Exclude<keyof I["value"]["didDoc"]["service"][number], keyof Service>]: never; })[] & { [K_11 in Exclude<keyof I["value"]["didDoc"]["service"], keyof {
                    id?: string | undefined;
                    serviceType?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                }[]>]: never; }) | undefined;
                alsoKnownAs?: (string[] & string[] & { [K_12 in Exclude<keyof I["value"]["didDoc"]["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
            } & { [K_13 in Exclude<keyof I["value"]["didDoc"], keyof import("./diddoc").DidDoc>]: never; }) | undefined;
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
            } & { [K_14 in Exclude<keyof I["value"]["metadata"], keyof import("./diddoc").Metadata>]: never; }) | undefined;
        } & { [K_15 in Exclude<keyof I["value"], keyof DidDocWithMetadata>]: never; }) | undefined;
    } & { [K_16 in Exclude<keyof I, "value">]: never; }>(object: I): MsgDeactivateDidDocResponse;
};
export interface Msg {
    CreateDidDoc(request: MsgCreateDidDoc): Promise<MsgCreateDidDocResponse>;
    UpdateDidDoc(request: MsgUpdateDidDoc): Promise<MsgUpdateDidDocResponse>;
    DeactivateDidDoc(request: MsgDeactivateDidDoc): Promise<MsgDeactivateDidDocResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    CreateDidDoc(request: MsgCreateDidDoc): Promise<MsgCreateDidDocResponse>;
    UpdateDidDoc(request: MsgUpdateDidDoc): Promise<MsgUpdateDidDocResponse>;
    DeactivateDidDoc(request: MsgDeactivateDidDoc): Promise<MsgDeactivateDidDocResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
export {};
//# sourceMappingURL=tx.d.ts.map