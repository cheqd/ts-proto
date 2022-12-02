import Long from "long";
import _m0 from "protobufjs/minimal";
import { DidDocWithMetadata, Service, VerificationMethod } from "./diddoc";
export declare const protobufPackage = "cheqd.did.v2";
export interface MsgCreateDidDoc {
    $type: "cheqd.did.v2.MsgCreateDidDoc";
    payload: MsgCreateDidDocPayload | undefined;
    signatures: SignInfo[];
}
export interface MsgUpdateDidDoc {
    $type: "cheqd.did.v2.MsgUpdateDidDoc";
    payload: MsgUpdateDidDocPayload | undefined;
    signatures: SignInfo[];
}
export interface MsgDeactivateDidDoc {
    $type: "cheqd.did.v2.MsgDeactivateDidDoc";
    payload: MsgDeactivateDidDocPayload | undefined;
    signatures: SignInfo[];
}
export interface SignInfo {
    $type: "cheqd.did.v2.SignInfo";
    verificationMethodId: string;
    signature: Uint8Array;
}
export interface MsgCreateDidDocPayload {
    $type: "cheqd.did.v2.MsgCreateDidDocPayload";
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
    $type: "cheqd.did.v2.MsgCreateDidDocResponse";
    value: DidDocWithMetadata | undefined;
}
export interface MsgUpdateDidDocPayload {
    $type: "cheqd.did.v2.MsgUpdateDidDocPayload";
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
    $type: "cheqd.did.v2.MsgUpdateDidDocResponse";
    value: DidDocWithMetadata | undefined;
}
export interface MsgDeactivateDidDocPayload {
    $type: "cheqd.did.v2.MsgDeactivateDidDocPayload";
    id: string;
    versionId: string;
}
export interface MsgDeactivateDidDocResponse {
    $type: "cheqd.did.v2.MsgDeactivateDidDocResponse";
    value: DidDocWithMetadata | undefined;
}
export declare const MsgCreateDidDoc: {
    $type: "cheqd.did.v2.MsgCreateDidDoc";
    encode(message: MsgCreateDidDoc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDidDoc;
    fromJSON(object: any): MsgCreateDidDoc;
    toJSON(message: MsgCreateDidDoc): unknown;
    fromPartial<I extends {
        payload?: {
            service?: {
                type?: string | undefined;
                id?: string | undefined;
                serviceEndpoint?: string[] | undefined;
            }[] | undefined;
            id?: string | undefined;
            alsoKnownAs?: string[] | undefined;
            context?: string[] | undefined;
            controller?: string[] | undefined;
            verificationMethod?: {
                type?: string | undefined;
                id?: string | undefined;
                controller?: string | undefined;
                verificationMaterial?: string | undefined;
            }[] | undefined;
            authentication?: string[] | undefined;
            assertionMethod?: string[] | undefined;
            capabilityInvocation?: string[] | undefined;
            capabilityDelegation?: string[] | undefined;
            keyAgreement?: string[] | undefined;
            versionId?: string | undefined;
        } | undefined;
        signatures?: {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        payload?: ({
            service?: {
                type?: string | undefined;
                id?: string | undefined;
                serviceEndpoint?: string[] | undefined;
            }[] | undefined;
            id?: string | undefined;
            alsoKnownAs?: string[] | undefined;
            context?: string[] | undefined;
            controller?: string[] | undefined;
            verificationMethod?: {
                type?: string | undefined;
                id?: string | undefined;
                controller?: string | undefined;
                verificationMaterial?: string | undefined;
            }[] | undefined;
            authentication?: string[] | undefined;
            assertionMethod?: string[] | undefined;
            capabilityInvocation?: string[] | undefined;
            capabilityDelegation?: string[] | undefined;
            keyAgreement?: string[] | undefined;
            versionId?: string | undefined;
        } & {
            service?: ({
                type?: string | undefined;
                id?: string | undefined;
                serviceEndpoint?: string[] | undefined;
            }[] & ({
                type?: string | undefined;
                id?: string | undefined;
                serviceEndpoint?: string[] | undefined;
            } & {
                type?: string | undefined;
                id?: string | undefined;
                serviceEndpoint?: (string[] & string[] & { [K in Exclude<keyof I["payload"]["service"][number]["serviceEndpoint"], "$type" | keyof string[]>]: never; }) | undefined;
            } & { [K_1 in Exclude<keyof I["payload"]["service"][number], "$type" | "type" | "id" | "serviceEndpoint">]: never; })[] & { [K_2 in Exclude<keyof I["payload"]["service"], "$type" | keyof {
                type?: string | undefined;
                id?: string | undefined;
                serviceEndpoint?: string[] | undefined;
            }[]>]: never; }) | undefined;
            id?: string | undefined;
            alsoKnownAs?: (string[] & string[] & { [K_3 in Exclude<keyof I["payload"]["alsoKnownAs"], "$type" | keyof string[]>]: never; }) | undefined;
            context?: (string[] & string[] & { [K_4 in Exclude<keyof I["payload"]["context"], "$type" | keyof string[]>]: never; }) | undefined;
            controller?: (string[] & string[] & { [K_5 in Exclude<keyof I["payload"]["controller"], "$type" | keyof string[]>]: never; }) | undefined;
            verificationMethod?: ({
                type?: string | undefined;
                id?: string | undefined;
                controller?: string | undefined;
                verificationMaterial?: string | undefined;
            }[] & ({
                type?: string | undefined;
                id?: string | undefined;
                controller?: string | undefined;
                verificationMaterial?: string | undefined;
            } & {
                type?: string | undefined;
                id?: string | undefined;
                controller?: string | undefined;
                verificationMaterial?: string | undefined;
            } & { [K_6 in Exclude<keyof I["payload"]["verificationMethod"][number], "$type" | "type" | "id" | "controller" | "verificationMaterial">]: never; })[] & { [K_7 in Exclude<keyof I["payload"]["verificationMethod"], "$type" | keyof {
                type?: string | undefined;
                id?: string | undefined;
                controller?: string | undefined;
                verificationMaterial?: string | undefined;
            }[]>]: never; }) | undefined;
            authentication?: (string[] & string[] & { [K_8 in Exclude<keyof I["payload"]["authentication"], "$type" | keyof string[]>]: never; }) | undefined;
            assertionMethod?: (string[] & string[] & { [K_9 in Exclude<keyof I["payload"]["assertionMethod"], "$type" | keyof string[]>]: never; }) | undefined;
            capabilityInvocation?: (string[] & string[] & { [K_10 in Exclude<keyof I["payload"]["capabilityInvocation"], "$type" | keyof string[]>]: never; }) | undefined;
            capabilityDelegation?: (string[] & string[] & { [K_11 in Exclude<keyof I["payload"]["capabilityDelegation"], "$type" | keyof string[]>]: never; }) | undefined;
            keyAgreement?: (string[] & string[] & { [K_12 in Exclude<keyof I["payload"]["keyAgreement"], "$type" | keyof string[]>]: never; }) | undefined;
            versionId?: string | undefined;
        } & { [K_13 in Exclude<keyof I["payload"], "$type" | "service" | "id" | "alsoKnownAs" | "context" | "controller" | "verificationMethod" | "authentication" | "assertionMethod" | "capabilityInvocation" | "capabilityDelegation" | "keyAgreement" | "versionId">]: never; }) | undefined;
        signatures?: ({
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[] & ({
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        } & {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        } & { [K_14 in Exclude<keyof I["signatures"][number], "$type" | "verificationMethodId" | "signature">]: never; })[] & { [K_15 in Exclude<keyof I["signatures"], "$type" | keyof {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_16 in Exclude<keyof I, "$type" | "payload" | "signatures">]: never; }>(object: I): MsgCreateDidDoc;
};
export declare const MsgUpdateDidDoc: {
    $type: "cheqd.did.v2.MsgUpdateDidDoc";
    encode(message: MsgUpdateDidDoc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDidDoc;
    fromJSON(object: any): MsgUpdateDidDoc;
    toJSON(message: MsgUpdateDidDoc): unknown;
    fromPartial<I extends {
        payload?: {
            service?: {
                type?: string | undefined;
                id?: string | undefined;
                serviceEndpoint?: string[] | undefined;
            }[] | undefined;
            id?: string | undefined;
            alsoKnownAs?: string[] | undefined;
            context?: string[] | undefined;
            controller?: string[] | undefined;
            verificationMethod?: {
                type?: string | undefined;
                id?: string | undefined;
                controller?: string | undefined;
                verificationMaterial?: string | undefined;
            }[] | undefined;
            authentication?: string[] | undefined;
            assertionMethod?: string[] | undefined;
            capabilityInvocation?: string[] | undefined;
            capabilityDelegation?: string[] | undefined;
            keyAgreement?: string[] | undefined;
            versionId?: string | undefined;
        } | undefined;
        signatures?: {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        payload?: ({
            service?: {
                type?: string | undefined;
                id?: string | undefined;
                serviceEndpoint?: string[] | undefined;
            }[] | undefined;
            id?: string | undefined;
            alsoKnownAs?: string[] | undefined;
            context?: string[] | undefined;
            controller?: string[] | undefined;
            verificationMethod?: {
                type?: string | undefined;
                id?: string | undefined;
                controller?: string | undefined;
                verificationMaterial?: string | undefined;
            }[] | undefined;
            authentication?: string[] | undefined;
            assertionMethod?: string[] | undefined;
            capabilityInvocation?: string[] | undefined;
            capabilityDelegation?: string[] | undefined;
            keyAgreement?: string[] | undefined;
            versionId?: string | undefined;
        } & {
            service?: ({
                type?: string | undefined;
                id?: string | undefined;
                serviceEndpoint?: string[] | undefined;
            }[] & ({
                type?: string | undefined;
                id?: string | undefined;
                serviceEndpoint?: string[] | undefined;
            } & {
                type?: string | undefined;
                id?: string | undefined;
                serviceEndpoint?: (string[] & string[] & { [K in Exclude<keyof I["payload"]["service"][number]["serviceEndpoint"], "$type" | keyof string[]>]: never; }) | undefined;
            } & { [K_1 in Exclude<keyof I["payload"]["service"][number], "$type" | "type" | "id" | "serviceEndpoint">]: never; })[] & { [K_2 in Exclude<keyof I["payload"]["service"], "$type" | keyof {
                type?: string | undefined;
                id?: string | undefined;
                serviceEndpoint?: string[] | undefined;
            }[]>]: never; }) | undefined;
            id?: string | undefined;
            alsoKnownAs?: (string[] & string[] & { [K_3 in Exclude<keyof I["payload"]["alsoKnownAs"], "$type" | keyof string[]>]: never; }) | undefined;
            context?: (string[] & string[] & { [K_4 in Exclude<keyof I["payload"]["context"], "$type" | keyof string[]>]: never; }) | undefined;
            controller?: (string[] & string[] & { [K_5 in Exclude<keyof I["payload"]["controller"], "$type" | keyof string[]>]: never; }) | undefined;
            verificationMethod?: ({
                type?: string | undefined;
                id?: string | undefined;
                controller?: string | undefined;
                verificationMaterial?: string | undefined;
            }[] & ({
                type?: string | undefined;
                id?: string | undefined;
                controller?: string | undefined;
                verificationMaterial?: string | undefined;
            } & {
                type?: string | undefined;
                id?: string | undefined;
                controller?: string | undefined;
                verificationMaterial?: string | undefined;
            } & { [K_6 in Exclude<keyof I["payload"]["verificationMethod"][number], "$type" | "type" | "id" | "controller" | "verificationMaterial">]: never; })[] & { [K_7 in Exclude<keyof I["payload"]["verificationMethod"], "$type" | keyof {
                type?: string | undefined;
                id?: string | undefined;
                controller?: string | undefined;
                verificationMaterial?: string | undefined;
            }[]>]: never; }) | undefined;
            authentication?: (string[] & string[] & { [K_8 in Exclude<keyof I["payload"]["authentication"], "$type" | keyof string[]>]: never; }) | undefined;
            assertionMethod?: (string[] & string[] & { [K_9 in Exclude<keyof I["payload"]["assertionMethod"], "$type" | keyof string[]>]: never; }) | undefined;
            capabilityInvocation?: (string[] & string[] & { [K_10 in Exclude<keyof I["payload"]["capabilityInvocation"], "$type" | keyof string[]>]: never; }) | undefined;
            capabilityDelegation?: (string[] & string[] & { [K_11 in Exclude<keyof I["payload"]["capabilityDelegation"], "$type" | keyof string[]>]: never; }) | undefined;
            keyAgreement?: (string[] & string[] & { [K_12 in Exclude<keyof I["payload"]["keyAgreement"], "$type" | keyof string[]>]: never; }) | undefined;
            versionId?: string | undefined;
        } & { [K_13 in Exclude<keyof I["payload"], "$type" | "service" | "id" | "alsoKnownAs" | "context" | "controller" | "verificationMethod" | "authentication" | "assertionMethod" | "capabilityInvocation" | "capabilityDelegation" | "keyAgreement" | "versionId">]: never; }) | undefined;
        signatures?: ({
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[] & ({
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        } & {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        } & { [K_14 in Exclude<keyof I["signatures"][number], "$type" | "verificationMethodId" | "signature">]: never; })[] & { [K_15 in Exclude<keyof I["signatures"], "$type" | keyof {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_16 in Exclude<keyof I, "$type" | "payload" | "signatures">]: never; }>(object: I): MsgUpdateDidDoc;
};
export declare const MsgDeactivateDidDoc: {
    $type: "cheqd.did.v2.MsgDeactivateDidDoc";
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
        } & { [K in Exclude<keyof I["payload"], "$type" | "id" | "versionId">]: never; }) | undefined;
        signatures?: ({
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[] & ({
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        } & {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        } & { [K_1 in Exclude<keyof I["signatures"][number], "$type" | "verificationMethodId" | "signature">]: never; })[] & { [K_2 in Exclude<keyof I["signatures"], "$type" | keyof {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, "$type" | "payload" | "signatures">]: never; }>(object: I): MsgDeactivateDidDoc;
};
export declare const SignInfo: {
    $type: "cheqd.did.v2.SignInfo";
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
    } & { [K in Exclude<keyof I, "$type" | "verificationMethodId" | "signature">]: never; }>(object: I): SignInfo;
};
export declare const MsgCreateDidDocPayload: {
    $type: "cheqd.did.v2.MsgCreateDidDocPayload";
    encode(message: MsgCreateDidDocPayload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDidDocPayload;
    fromJSON(object: any): MsgCreateDidDocPayload;
    toJSON(message: MsgCreateDidDocPayload): unknown;
    fromPartial<I extends {
        service?: {
            type?: string | undefined;
            id?: string | undefined;
            serviceEndpoint?: string[] | undefined;
        }[] | undefined;
        id?: string | undefined;
        alsoKnownAs?: string[] | undefined;
        context?: string[] | undefined;
        controller?: string[] | undefined;
        verificationMethod?: {
            type?: string | undefined;
            id?: string | undefined;
            controller?: string | undefined;
            verificationMaterial?: string | undefined;
        }[] | undefined;
        authentication?: string[] | undefined;
        assertionMethod?: string[] | undefined;
        capabilityInvocation?: string[] | undefined;
        capabilityDelegation?: string[] | undefined;
        keyAgreement?: string[] | undefined;
        versionId?: string | undefined;
    } & {
        service?: ({
            type?: string | undefined;
            id?: string | undefined;
            serviceEndpoint?: string[] | undefined;
        }[] & ({
            type?: string | undefined;
            id?: string | undefined;
            serviceEndpoint?: string[] | undefined;
        } & {
            type?: string | undefined;
            id?: string | undefined;
            serviceEndpoint?: (string[] & string[] & { [K in Exclude<keyof I["service"][number]["serviceEndpoint"], "$type" | keyof string[]>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["service"][number], "$type" | "type" | "id" | "serviceEndpoint">]: never; })[] & { [K_2 in Exclude<keyof I["service"], "$type" | keyof {
            type?: string | undefined;
            id?: string | undefined;
            serviceEndpoint?: string[] | undefined;
        }[]>]: never; }) | undefined;
        id?: string | undefined;
        alsoKnownAs?: (string[] & string[] & { [K_3 in Exclude<keyof I["alsoKnownAs"], "$type" | keyof string[]>]: never; }) | undefined;
        context?: (string[] & string[] & { [K_4 in Exclude<keyof I["context"], "$type" | keyof string[]>]: never; }) | undefined;
        controller?: (string[] & string[] & { [K_5 in Exclude<keyof I["controller"], "$type" | keyof string[]>]: never; }) | undefined;
        verificationMethod?: ({
            type?: string | undefined;
            id?: string | undefined;
            controller?: string | undefined;
            verificationMaterial?: string | undefined;
        }[] & ({
            type?: string | undefined;
            id?: string | undefined;
            controller?: string | undefined;
            verificationMaterial?: string | undefined;
        } & {
            type?: string | undefined;
            id?: string | undefined;
            controller?: string | undefined;
            verificationMaterial?: string | undefined;
        } & { [K_6 in Exclude<keyof I["verificationMethod"][number], "$type" | "type" | "id" | "controller" | "verificationMaterial">]: never; })[] & { [K_7 in Exclude<keyof I["verificationMethod"], "$type" | keyof {
            type?: string | undefined;
            id?: string | undefined;
            controller?: string | undefined;
            verificationMaterial?: string | undefined;
        }[]>]: never; }) | undefined;
        authentication?: (string[] & string[] & { [K_8 in Exclude<keyof I["authentication"], "$type" | keyof string[]>]: never; }) | undefined;
        assertionMethod?: (string[] & string[] & { [K_9 in Exclude<keyof I["assertionMethod"], "$type" | keyof string[]>]: never; }) | undefined;
        capabilityInvocation?: (string[] & string[] & { [K_10 in Exclude<keyof I["capabilityInvocation"], "$type" | keyof string[]>]: never; }) | undefined;
        capabilityDelegation?: (string[] & string[] & { [K_11 in Exclude<keyof I["capabilityDelegation"], "$type" | keyof string[]>]: never; }) | undefined;
        keyAgreement?: (string[] & string[] & { [K_12 in Exclude<keyof I["keyAgreement"], "$type" | keyof string[]>]: never; }) | undefined;
        versionId?: string | undefined;
    } & { [K_13 in Exclude<keyof I, "$type" | "service" | "id" | "alsoKnownAs" | "context" | "controller" | "verificationMethod" | "authentication" | "assertionMethod" | "capabilityInvocation" | "capabilityDelegation" | "keyAgreement" | "versionId">]: never; }>(object: I): MsgCreateDidDocPayload;
};
export declare const MsgCreateDidDocResponse: {
    $type: "cheqd.did.v2.MsgCreateDidDocResponse";
    encode(message: MsgCreateDidDocResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDidDocResponse;
    fromJSON(object: any): MsgCreateDidDocResponse;
    toJSON(message: MsgCreateDidDocResponse): unknown;
    fromPartial<I extends {
        value?: {
            metadata?: {
                created?: string | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
                versionId?: string | undefined;
                updated?: string | undefined;
                deactivated?: boolean | undefined;
            } | undefined;
            didDoc?: {
                service?: {
                    type?: string | undefined;
                    id?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                }[] | undefined;
                id?: string | undefined;
                alsoKnownAs?: string[] | undefined;
                context?: string[] | undefined;
                controller?: string[] | undefined;
                verificationMethod?: {
                    type?: string | undefined;
                    id?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[] | undefined;
                authentication?: string[] | undefined;
                assertionMethod?: string[] | undefined;
                capabilityInvocation?: string[] | undefined;
                capabilityDelegation?: string[] | undefined;
                keyAgreement?: string[] | undefined;
            } | undefined;
        } | undefined;
    } & {
        value?: ({
            metadata?: {
                created?: string | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
                versionId?: string | undefined;
                updated?: string | undefined;
                deactivated?: boolean | undefined;
            } | undefined;
            didDoc?: {
                service?: {
                    type?: string | undefined;
                    id?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                }[] | undefined;
                id?: string | undefined;
                alsoKnownAs?: string[] | undefined;
                context?: string[] | undefined;
                controller?: string[] | undefined;
                verificationMethod?: {
                    type?: string | undefined;
                    id?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[] | undefined;
                authentication?: string[] | undefined;
                assertionMethod?: string[] | undefined;
                capabilityInvocation?: string[] | undefined;
                capabilityDelegation?: string[] | undefined;
                keyAgreement?: string[] | undefined;
            } | undefined;
        } & {
            metadata?: ({
                created?: string | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
                versionId?: string | undefined;
                updated?: string | undefined;
                deactivated?: boolean | undefined;
            } & {
                created?: string | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
                versionId?: string | undefined;
                updated?: string | undefined;
                deactivated?: boolean | undefined;
            } & { [K in Exclude<keyof I["value"]["metadata"], "$type" | "created" | "previousVersionId" | "nextVersionId" | "versionId" | "updated" | "deactivated">]: never; }) | undefined;
            didDoc?: ({
                service?: {
                    type?: string | undefined;
                    id?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                }[] | undefined;
                id?: string | undefined;
                alsoKnownAs?: string[] | undefined;
                context?: string[] | undefined;
                controller?: string[] | undefined;
                verificationMethod?: {
                    type?: string | undefined;
                    id?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
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
                    serviceEndpoint?: string[] | undefined;
                }[] & ({
                    type?: string | undefined;
                    id?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                } & {
                    type?: string | undefined;
                    id?: string | undefined;
                    serviceEndpoint?: (string[] & string[] & { [K_1 in Exclude<keyof I["value"]["didDoc"]["service"][number]["serviceEndpoint"], "$type" | keyof string[]>]: never; }) | undefined;
                } & { [K_2 in Exclude<keyof I["value"]["didDoc"]["service"][number], "$type" | "type" | "id" | "serviceEndpoint">]: never; })[] & { [K_3 in Exclude<keyof I["value"]["didDoc"]["service"], "$type" | keyof {
                    type?: string | undefined;
                    id?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                }[]>]: never; }) | undefined;
                id?: string | undefined;
                alsoKnownAs?: (string[] & string[] & { [K_4 in Exclude<keyof I["value"]["didDoc"]["alsoKnownAs"], "$type" | keyof string[]>]: never; }) | undefined;
                context?: (string[] & string[] & { [K_5 in Exclude<keyof I["value"]["didDoc"]["context"], "$type" | keyof string[]>]: never; }) | undefined;
                controller?: (string[] & string[] & { [K_6 in Exclude<keyof I["value"]["didDoc"]["controller"], "$type" | keyof string[]>]: never; }) | undefined;
                verificationMethod?: ({
                    type?: string | undefined;
                    id?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[] & ({
                    type?: string | undefined;
                    id?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                } & {
                    type?: string | undefined;
                    id?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                } & { [K_7 in Exclude<keyof I["value"]["didDoc"]["verificationMethod"][number], "$type" | "type" | "id" | "controller" | "verificationMaterial">]: never; })[] & { [K_8 in Exclude<keyof I["value"]["didDoc"]["verificationMethod"], "$type" | keyof {
                    type?: string | undefined;
                    id?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[]>]: never; }) | undefined;
                authentication?: (string[] & string[] & { [K_9 in Exclude<keyof I["value"]["didDoc"]["authentication"], "$type" | keyof string[]>]: never; }) | undefined;
                assertionMethod?: (string[] & string[] & { [K_10 in Exclude<keyof I["value"]["didDoc"]["assertionMethod"], "$type" | keyof string[]>]: never; }) | undefined;
                capabilityInvocation?: (string[] & string[] & { [K_11 in Exclude<keyof I["value"]["didDoc"]["capabilityInvocation"], "$type" | keyof string[]>]: never; }) | undefined;
                capabilityDelegation?: (string[] & string[] & { [K_12 in Exclude<keyof I["value"]["didDoc"]["capabilityDelegation"], "$type" | keyof string[]>]: never; }) | undefined;
                keyAgreement?: (string[] & string[] & { [K_13 in Exclude<keyof I["value"]["didDoc"]["keyAgreement"], "$type" | keyof string[]>]: never; }) | undefined;
            } & { [K_14 in Exclude<keyof I["value"]["didDoc"], "$type" | "service" | "id" | "alsoKnownAs" | "context" | "controller" | "verificationMethod" | "authentication" | "assertionMethod" | "capabilityInvocation" | "capabilityDelegation" | "keyAgreement">]: never; }) | undefined;
        } & { [K_15 in Exclude<keyof I["value"], "$type" | "metadata" | "didDoc">]: never; }) | undefined;
    } & { [K_16 in Exclude<keyof I, "$type" | "value">]: never; }>(object: I): MsgCreateDidDocResponse;
};
export declare const MsgUpdateDidDocPayload: {
    $type: "cheqd.did.v2.MsgUpdateDidDocPayload";
    encode(message: MsgUpdateDidDocPayload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDidDocPayload;
    fromJSON(object: any): MsgUpdateDidDocPayload;
    toJSON(message: MsgUpdateDidDocPayload): unknown;
    fromPartial<I extends {
        service?: {
            type?: string | undefined;
            id?: string | undefined;
            serviceEndpoint?: string[] | undefined;
        }[] | undefined;
        id?: string | undefined;
        alsoKnownAs?: string[] | undefined;
        context?: string[] | undefined;
        controller?: string[] | undefined;
        verificationMethod?: {
            type?: string | undefined;
            id?: string | undefined;
            controller?: string | undefined;
            verificationMaterial?: string | undefined;
        }[] | undefined;
        authentication?: string[] | undefined;
        assertionMethod?: string[] | undefined;
        capabilityInvocation?: string[] | undefined;
        capabilityDelegation?: string[] | undefined;
        keyAgreement?: string[] | undefined;
        versionId?: string | undefined;
    } & {
        service?: ({
            type?: string | undefined;
            id?: string | undefined;
            serviceEndpoint?: string[] | undefined;
        }[] & ({
            type?: string | undefined;
            id?: string | undefined;
            serviceEndpoint?: string[] | undefined;
        } & {
            type?: string | undefined;
            id?: string | undefined;
            serviceEndpoint?: (string[] & string[] & { [K in Exclude<keyof I["service"][number]["serviceEndpoint"], "$type" | keyof string[]>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["service"][number], "$type" | "type" | "id" | "serviceEndpoint">]: never; })[] & { [K_2 in Exclude<keyof I["service"], "$type" | keyof {
            type?: string | undefined;
            id?: string | undefined;
            serviceEndpoint?: string[] | undefined;
        }[]>]: never; }) | undefined;
        id?: string | undefined;
        alsoKnownAs?: (string[] & string[] & { [K_3 in Exclude<keyof I["alsoKnownAs"], "$type" | keyof string[]>]: never; }) | undefined;
        context?: (string[] & string[] & { [K_4 in Exclude<keyof I["context"], "$type" | keyof string[]>]: never; }) | undefined;
        controller?: (string[] & string[] & { [K_5 in Exclude<keyof I["controller"], "$type" | keyof string[]>]: never; }) | undefined;
        verificationMethod?: ({
            type?: string | undefined;
            id?: string | undefined;
            controller?: string | undefined;
            verificationMaterial?: string | undefined;
        }[] & ({
            type?: string | undefined;
            id?: string | undefined;
            controller?: string | undefined;
            verificationMaterial?: string | undefined;
        } & {
            type?: string | undefined;
            id?: string | undefined;
            controller?: string | undefined;
            verificationMaterial?: string | undefined;
        } & { [K_6 in Exclude<keyof I["verificationMethod"][number], "$type" | "type" | "id" | "controller" | "verificationMaterial">]: never; })[] & { [K_7 in Exclude<keyof I["verificationMethod"], "$type" | keyof {
            type?: string | undefined;
            id?: string | undefined;
            controller?: string | undefined;
            verificationMaterial?: string | undefined;
        }[]>]: never; }) | undefined;
        authentication?: (string[] & string[] & { [K_8 in Exclude<keyof I["authentication"], "$type" | keyof string[]>]: never; }) | undefined;
        assertionMethod?: (string[] & string[] & { [K_9 in Exclude<keyof I["assertionMethod"], "$type" | keyof string[]>]: never; }) | undefined;
        capabilityInvocation?: (string[] & string[] & { [K_10 in Exclude<keyof I["capabilityInvocation"], "$type" | keyof string[]>]: never; }) | undefined;
        capabilityDelegation?: (string[] & string[] & { [K_11 in Exclude<keyof I["capabilityDelegation"], "$type" | keyof string[]>]: never; }) | undefined;
        keyAgreement?: (string[] & string[] & { [K_12 in Exclude<keyof I["keyAgreement"], "$type" | keyof string[]>]: never; }) | undefined;
        versionId?: string | undefined;
    } & { [K_13 in Exclude<keyof I, "$type" | "service" | "id" | "alsoKnownAs" | "context" | "controller" | "verificationMethod" | "authentication" | "assertionMethod" | "capabilityInvocation" | "capabilityDelegation" | "keyAgreement" | "versionId">]: never; }>(object: I): MsgUpdateDidDocPayload;
};
export declare const MsgUpdateDidDocResponse: {
    $type: "cheqd.did.v2.MsgUpdateDidDocResponse";
    encode(message: MsgUpdateDidDocResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDidDocResponse;
    fromJSON(object: any): MsgUpdateDidDocResponse;
    toJSON(message: MsgUpdateDidDocResponse): unknown;
    fromPartial<I extends {
        value?: {
            metadata?: {
                created?: string | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
                versionId?: string | undefined;
                updated?: string | undefined;
                deactivated?: boolean | undefined;
            } | undefined;
            didDoc?: {
                service?: {
                    type?: string | undefined;
                    id?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                }[] | undefined;
                id?: string | undefined;
                alsoKnownAs?: string[] | undefined;
                context?: string[] | undefined;
                controller?: string[] | undefined;
                verificationMethod?: {
                    type?: string | undefined;
                    id?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[] | undefined;
                authentication?: string[] | undefined;
                assertionMethod?: string[] | undefined;
                capabilityInvocation?: string[] | undefined;
                capabilityDelegation?: string[] | undefined;
                keyAgreement?: string[] | undefined;
            } | undefined;
        } | undefined;
    } & {
        value?: ({
            metadata?: {
                created?: string | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
                versionId?: string | undefined;
                updated?: string | undefined;
                deactivated?: boolean | undefined;
            } | undefined;
            didDoc?: {
                service?: {
                    type?: string | undefined;
                    id?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                }[] | undefined;
                id?: string | undefined;
                alsoKnownAs?: string[] | undefined;
                context?: string[] | undefined;
                controller?: string[] | undefined;
                verificationMethod?: {
                    type?: string | undefined;
                    id?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[] | undefined;
                authentication?: string[] | undefined;
                assertionMethod?: string[] | undefined;
                capabilityInvocation?: string[] | undefined;
                capabilityDelegation?: string[] | undefined;
                keyAgreement?: string[] | undefined;
            } | undefined;
        } & {
            metadata?: ({
                created?: string | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
                versionId?: string | undefined;
                updated?: string | undefined;
                deactivated?: boolean | undefined;
            } & {
                created?: string | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
                versionId?: string | undefined;
                updated?: string | undefined;
                deactivated?: boolean | undefined;
            } & { [K in Exclude<keyof I["value"]["metadata"], "$type" | "created" | "previousVersionId" | "nextVersionId" | "versionId" | "updated" | "deactivated">]: never; }) | undefined;
            didDoc?: ({
                service?: {
                    type?: string | undefined;
                    id?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                }[] | undefined;
                id?: string | undefined;
                alsoKnownAs?: string[] | undefined;
                context?: string[] | undefined;
                controller?: string[] | undefined;
                verificationMethod?: {
                    type?: string | undefined;
                    id?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
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
                    serviceEndpoint?: string[] | undefined;
                }[] & ({
                    type?: string | undefined;
                    id?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                } & {
                    type?: string | undefined;
                    id?: string | undefined;
                    serviceEndpoint?: (string[] & string[] & { [K_1 in Exclude<keyof I["value"]["didDoc"]["service"][number]["serviceEndpoint"], "$type" | keyof string[]>]: never; }) | undefined;
                } & { [K_2 in Exclude<keyof I["value"]["didDoc"]["service"][number], "$type" | "type" | "id" | "serviceEndpoint">]: never; })[] & { [K_3 in Exclude<keyof I["value"]["didDoc"]["service"], "$type" | keyof {
                    type?: string | undefined;
                    id?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                }[]>]: never; }) | undefined;
                id?: string | undefined;
                alsoKnownAs?: (string[] & string[] & { [K_4 in Exclude<keyof I["value"]["didDoc"]["alsoKnownAs"], "$type" | keyof string[]>]: never; }) | undefined;
                context?: (string[] & string[] & { [K_5 in Exclude<keyof I["value"]["didDoc"]["context"], "$type" | keyof string[]>]: never; }) | undefined;
                controller?: (string[] & string[] & { [K_6 in Exclude<keyof I["value"]["didDoc"]["controller"], "$type" | keyof string[]>]: never; }) | undefined;
                verificationMethod?: ({
                    type?: string | undefined;
                    id?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[] & ({
                    type?: string | undefined;
                    id?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                } & {
                    type?: string | undefined;
                    id?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                } & { [K_7 in Exclude<keyof I["value"]["didDoc"]["verificationMethod"][number], "$type" | "type" | "id" | "controller" | "verificationMaterial">]: never; })[] & { [K_8 in Exclude<keyof I["value"]["didDoc"]["verificationMethod"], "$type" | keyof {
                    type?: string | undefined;
                    id?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[]>]: never; }) | undefined;
                authentication?: (string[] & string[] & { [K_9 in Exclude<keyof I["value"]["didDoc"]["authentication"], "$type" | keyof string[]>]: never; }) | undefined;
                assertionMethod?: (string[] & string[] & { [K_10 in Exclude<keyof I["value"]["didDoc"]["assertionMethod"], "$type" | keyof string[]>]: never; }) | undefined;
                capabilityInvocation?: (string[] & string[] & { [K_11 in Exclude<keyof I["value"]["didDoc"]["capabilityInvocation"], "$type" | keyof string[]>]: never; }) | undefined;
                capabilityDelegation?: (string[] & string[] & { [K_12 in Exclude<keyof I["value"]["didDoc"]["capabilityDelegation"], "$type" | keyof string[]>]: never; }) | undefined;
                keyAgreement?: (string[] & string[] & { [K_13 in Exclude<keyof I["value"]["didDoc"]["keyAgreement"], "$type" | keyof string[]>]: never; }) | undefined;
            } & { [K_14 in Exclude<keyof I["value"]["didDoc"], "$type" | "service" | "id" | "alsoKnownAs" | "context" | "controller" | "verificationMethod" | "authentication" | "assertionMethod" | "capabilityInvocation" | "capabilityDelegation" | "keyAgreement">]: never; }) | undefined;
        } & { [K_15 in Exclude<keyof I["value"], "$type" | "metadata" | "didDoc">]: never; }) | undefined;
    } & { [K_16 in Exclude<keyof I, "$type" | "value">]: never; }>(object: I): MsgUpdateDidDocResponse;
};
export declare const MsgDeactivateDidDocPayload: {
    $type: "cheqd.did.v2.MsgDeactivateDidDocPayload";
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
    } & { [K in Exclude<keyof I, "$type" | "id" | "versionId">]: never; }>(object: I): MsgDeactivateDidDocPayload;
};
export declare const MsgDeactivateDidDocResponse: {
    $type: "cheqd.did.v2.MsgDeactivateDidDocResponse";
    encode(message: MsgDeactivateDidDocResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeactivateDidDocResponse;
    fromJSON(object: any): MsgDeactivateDidDocResponse;
    toJSON(message: MsgDeactivateDidDocResponse): unknown;
    fromPartial<I extends {
        value?: {
            metadata?: {
                created?: string | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
                versionId?: string | undefined;
                updated?: string | undefined;
                deactivated?: boolean | undefined;
            } | undefined;
            didDoc?: {
                service?: {
                    type?: string | undefined;
                    id?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                }[] | undefined;
                id?: string | undefined;
                alsoKnownAs?: string[] | undefined;
                context?: string[] | undefined;
                controller?: string[] | undefined;
                verificationMethod?: {
                    type?: string | undefined;
                    id?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[] | undefined;
                authentication?: string[] | undefined;
                assertionMethod?: string[] | undefined;
                capabilityInvocation?: string[] | undefined;
                capabilityDelegation?: string[] | undefined;
                keyAgreement?: string[] | undefined;
            } | undefined;
        } | undefined;
    } & {
        value?: ({
            metadata?: {
                created?: string | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
                versionId?: string | undefined;
                updated?: string | undefined;
                deactivated?: boolean | undefined;
            } | undefined;
            didDoc?: {
                service?: {
                    type?: string | undefined;
                    id?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                }[] | undefined;
                id?: string | undefined;
                alsoKnownAs?: string[] | undefined;
                context?: string[] | undefined;
                controller?: string[] | undefined;
                verificationMethod?: {
                    type?: string | undefined;
                    id?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[] | undefined;
                authentication?: string[] | undefined;
                assertionMethod?: string[] | undefined;
                capabilityInvocation?: string[] | undefined;
                capabilityDelegation?: string[] | undefined;
                keyAgreement?: string[] | undefined;
            } | undefined;
        } & {
            metadata?: ({
                created?: string | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
                versionId?: string | undefined;
                updated?: string | undefined;
                deactivated?: boolean | undefined;
            } & {
                created?: string | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
                versionId?: string | undefined;
                updated?: string | undefined;
                deactivated?: boolean | undefined;
            } & { [K in Exclude<keyof I["value"]["metadata"], "$type" | "created" | "previousVersionId" | "nextVersionId" | "versionId" | "updated" | "deactivated">]: never; }) | undefined;
            didDoc?: ({
                service?: {
                    type?: string | undefined;
                    id?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                }[] | undefined;
                id?: string | undefined;
                alsoKnownAs?: string[] | undefined;
                context?: string[] | undefined;
                controller?: string[] | undefined;
                verificationMethod?: {
                    type?: string | undefined;
                    id?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
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
                    serviceEndpoint?: string[] | undefined;
                }[] & ({
                    type?: string | undefined;
                    id?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                } & {
                    type?: string | undefined;
                    id?: string | undefined;
                    serviceEndpoint?: (string[] & string[] & { [K_1 in Exclude<keyof I["value"]["didDoc"]["service"][number]["serviceEndpoint"], "$type" | keyof string[]>]: never; }) | undefined;
                } & { [K_2 in Exclude<keyof I["value"]["didDoc"]["service"][number], "$type" | "type" | "id" | "serviceEndpoint">]: never; })[] & { [K_3 in Exclude<keyof I["value"]["didDoc"]["service"], "$type" | keyof {
                    type?: string | undefined;
                    id?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                }[]>]: never; }) | undefined;
                id?: string | undefined;
                alsoKnownAs?: (string[] & string[] & { [K_4 in Exclude<keyof I["value"]["didDoc"]["alsoKnownAs"], "$type" | keyof string[]>]: never; }) | undefined;
                context?: (string[] & string[] & { [K_5 in Exclude<keyof I["value"]["didDoc"]["context"], "$type" | keyof string[]>]: never; }) | undefined;
                controller?: (string[] & string[] & { [K_6 in Exclude<keyof I["value"]["didDoc"]["controller"], "$type" | keyof string[]>]: never; }) | undefined;
                verificationMethod?: ({
                    type?: string | undefined;
                    id?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[] & ({
                    type?: string | undefined;
                    id?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                } & {
                    type?: string | undefined;
                    id?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                } & { [K_7 in Exclude<keyof I["value"]["didDoc"]["verificationMethod"][number], "$type" | "type" | "id" | "controller" | "verificationMaterial">]: never; })[] & { [K_8 in Exclude<keyof I["value"]["didDoc"]["verificationMethod"], "$type" | keyof {
                    type?: string | undefined;
                    id?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[]>]: never; }) | undefined;
                authentication?: (string[] & string[] & { [K_9 in Exclude<keyof I["value"]["didDoc"]["authentication"], "$type" | keyof string[]>]: never; }) | undefined;
                assertionMethod?: (string[] & string[] & { [K_10 in Exclude<keyof I["value"]["didDoc"]["assertionMethod"], "$type" | keyof string[]>]: never; }) | undefined;
                capabilityInvocation?: (string[] & string[] & { [K_11 in Exclude<keyof I["value"]["didDoc"]["capabilityInvocation"], "$type" | keyof string[]>]: never; }) | undefined;
                capabilityDelegation?: (string[] & string[] & { [K_12 in Exclude<keyof I["value"]["didDoc"]["capabilityDelegation"], "$type" | keyof string[]>]: never; }) | undefined;
                keyAgreement?: (string[] & string[] & { [K_13 in Exclude<keyof I["value"]["didDoc"]["keyAgreement"], "$type" | keyof string[]>]: never; }) | undefined;
            } & { [K_14 in Exclude<keyof I["value"]["didDoc"], "$type" | "service" | "id" | "alsoKnownAs" | "context" | "controller" | "verificationMethod" | "authentication" | "assertionMethod" | "capabilityInvocation" | "capabilityDelegation" | "keyAgreement">]: never; }) | undefined;
        } & { [K_15 in Exclude<keyof I["value"], "$type" | "metadata" | "didDoc">]: never; }) | undefined;
    } & { [K_16 in Exclude<keyof I, "$type" | "value">]: never; }>(object: I): MsgDeactivateDidDocResponse;
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
//# sourceMappingURL=tx.d.ts.map