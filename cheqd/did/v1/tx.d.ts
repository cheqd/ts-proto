import Long from "long";
import _m0 from "protobufjs/minimal";
import { Did, Service, VerificationMethod } from "./did";
import { Metadata } from "./stateValue";
export declare const protobufPackage = "cheqdid.cheqdnode.cheqd.v1";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateDid {
    $type: "cheqdid.cheqdnode.cheqd.v1.MsgCreateDid";
    payload: MsgCreateDidPayload | undefined;
    signatures: SignInfo[];
}
export interface MsgUpdateDid {
    $type: "cheqdid.cheqdnode.cheqd.v1.MsgUpdateDid";
    payload: MsgUpdateDidPayload | undefined;
    signatures: SignInfo[];
}
export interface MsgDeactivateDid {
    $type: "cheqdid.cheqdnode.cheqd.v1.MsgDeactivateDid";
    payload: MsgDeactivateDidPayload | undefined;
    signatures: SignInfo[];
}
export interface SignInfo {
    $type: "cheqdid.cheqdnode.cheqd.v1.SignInfo";
    verificationMethodId: string;
    signature: string;
}
export interface MsgDeactivateDidPayload {
    $type: "cheqdid.cheqdnode.cheqd.v1.MsgDeactivateDidPayload";
    id: string;
}
export interface MsgDeactivateDidResponse {
    $type: "cheqdid.cheqdnode.cheqd.v1.MsgDeactivateDidResponse";
    did: Did | undefined;
    metadata: Metadata | undefined;
}
export interface MsgCreateDidPayload {
    $type: "cheqdid.cheqdnode.cheqd.v1.MsgCreateDidPayload";
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
}
export interface MsgCreateDidResponse {
    $type: "cheqdid.cheqdnode.cheqd.v1.MsgCreateDidResponse";
    /** Not necessary */
    id: string;
}
export interface MsgUpdateDidPayload {
    $type: "cheqdid.cheqdnode.cheqd.v1.MsgUpdateDidPayload";
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
export interface MsgUpdateDidResponse {
    $type: "cheqdid.cheqdnode.cheqd.v1.MsgUpdateDidResponse";
    /** Not necessary */
    id: string;
}
export declare const MsgCreateDid: {
    $type: "cheqdid.cheqdnode.cheqd.v1.MsgCreateDid";
    encode(message: MsgCreateDid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDid;
    fromJSON(object: any): MsgCreateDid;
    toJSON(message: MsgCreateDid): unknown;
    fromPartial<I extends {
        payload?: {
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
        } | undefined;
        signatures?: {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[] | undefined;
    } & {
        payload?: ({
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
            } & { [K in Exclude<keyof I["payload"]["service"][number], "$type" | "type" | "id" | "serviceEndpoint">]: never; })[] & { [K_1 in Exclude<keyof I["payload"]["service"], "$type" | keyof {
                type?: string | undefined;
                id?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[]>]: never; }) | undefined;
            id?: string | undefined;
            alsoKnownAs?: (string[] & string[] & { [K_2 in Exclude<keyof I["payload"]["alsoKnownAs"], "$type" | keyof string[]>]: never; }) | undefined;
            context?: (string[] & string[] & { [K_3 in Exclude<keyof I["payload"]["context"], "$type" | keyof string[]>]: never; }) | undefined;
            controller?: (string[] & string[] & { [K_4 in Exclude<keyof I["payload"]["controller"], "$type" | keyof string[]>]: never; }) | undefined;
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
                } & { [K_5 in Exclude<keyof I["payload"]["verificationMethod"][number]["publicKeyJwk"][number], "$type" | "value" | "key">]: never; })[] & { [K_6 in Exclude<keyof I["payload"]["verificationMethod"][number]["publicKeyJwk"], "$type" | keyof {
                    value?: string | undefined;
                    key?: string | undefined;
                }[]>]: never; }) | undefined;
                publicKeyMultibase?: string | undefined;
            } & { [K_7 in Exclude<keyof I["payload"]["verificationMethod"][number], "$type" | "type" | "id" | "controller" | "publicKeyJwk" | "publicKeyMultibase">]: never; })[] & { [K_8 in Exclude<keyof I["payload"]["verificationMethod"], "$type" | keyof {
                type?: string | undefined;
                id?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    value?: string | undefined;
                    key?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[]>]: never; }) | undefined;
            authentication?: (string[] & string[] & { [K_9 in Exclude<keyof I["payload"]["authentication"], "$type" | keyof string[]>]: never; }) | undefined;
            assertionMethod?: (string[] & string[] & { [K_10 in Exclude<keyof I["payload"]["assertionMethod"], "$type" | keyof string[]>]: never; }) | undefined;
            capabilityInvocation?: (string[] & string[] & { [K_11 in Exclude<keyof I["payload"]["capabilityInvocation"], "$type" | keyof string[]>]: never; }) | undefined;
            capabilityDelegation?: (string[] & string[] & { [K_12 in Exclude<keyof I["payload"]["capabilityDelegation"], "$type" | keyof string[]>]: never; }) | undefined;
            keyAgreement?: (string[] & string[] & { [K_13 in Exclude<keyof I["payload"]["keyAgreement"], "$type" | keyof string[]>]: never; }) | undefined;
        } & { [K_14 in Exclude<keyof I["payload"], "$type" | "service" | "id" | "alsoKnownAs" | "context" | "controller" | "verificationMethod" | "authentication" | "assertionMethod" | "capabilityInvocation" | "capabilityDelegation" | "keyAgreement">]: never; }) | undefined;
        signatures?: ({
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[] & ({
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        } & {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        } & { [K_15 in Exclude<keyof I["signatures"][number], "$type" | "verificationMethodId" | "signature">]: never; })[] & { [K_16 in Exclude<keyof I["signatures"], "$type" | keyof {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_17 in Exclude<keyof I, "$type" | "payload" | "signatures">]: never; }>(object: I): MsgCreateDid;
};
export declare const MsgUpdateDid: {
    $type: "cheqdid.cheqdnode.cheqd.v1.MsgUpdateDid";
    encode(message: MsgUpdateDid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDid;
    fromJSON(object: any): MsgUpdateDid;
    toJSON(message: MsgUpdateDid): unknown;
    fromPartial<I extends {
        payload?: {
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
            versionId?: string | undefined;
        } | undefined;
        signatures?: {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[] | undefined;
    } & {
        payload?: ({
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
            versionId?: string | undefined;
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
            } & { [K in Exclude<keyof I["payload"]["service"][number], "$type" | "type" | "id" | "serviceEndpoint">]: never; })[] & { [K_1 in Exclude<keyof I["payload"]["service"], "$type" | keyof {
                type?: string | undefined;
                id?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[]>]: never; }) | undefined;
            id?: string | undefined;
            alsoKnownAs?: (string[] & string[] & { [K_2 in Exclude<keyof I["payload"]["alsoKnownAs"], "$type" | keyof string[]>]: never; }) | undefined;
            context?: (string[] & string[] & { [K_3 in Exclude<keyof I["payload"]["context"], "$type" | keyof string[]>]: never; }) | undefined;
            controller?: (string[] & string[] & { [K_4 in Exclude<keyof I["payload"]["controller"], "$type" | keyof string[]>]: never; }) | undefined;
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
                } & { [K_5 in Exclude<keyof I["payload"]["verificationMethod"][number]["publicKeyJwk"][number], "$type" | "value" | "key">]: never; })[] & { [K_6 in Exclude<keyof I["payload"]["verificationMethod"][number]["publicKeyJwk"], "$type" | keyof {
                    value?: string | undefined;
                    key?: string | undefined;
                }[]>]: never; }) | undefined;
                publicKeyMultibase?: string | undefined;
            } & { [K_7 in Exclude<keyof I["payload"]["verificationMethod"][number], "$type" | "type" | "id" | "controller" | "publicKeyJwk" | "publicKeyMultibase">]: never; })[] & { [K_8 in Exclude<keyof I["payload"]["verificationMethod"], "$type" | keyof {
                type?: string | undefined;
                id?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    value?: string | undefined;
                    key?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[]>]: never; }) | undefined;
            authentication?: (string[] & string[] & { [K_9 in Exclude<keyof I["payload"]["authentication"], "$type" | keyof string[]>]: never; }) | undefined;
            assertionMethod?: (string[] & string[] & { [K_10 in Exclude<keyof I["payload"]["assertionMethod"], "$type" | keyof string[]>]: never; }) | undefined;
            capabilityInvocation?: (string[] & string[] & { [K_11 in Exclude<keyof I["payload"]["capabilityInvocation"], "$type" | keyof string[]>]: never; }) | undefined;
            capabilityDelegation?: (string[] & string[] & { [K_12 in Exclude<keyof I["payload"]["capabilityDelegation"], "$type" | keyof string[]>]: never; }) | undefined;
            keyAgreement?: (string[] & string[] & { [K_13 in Exclude<keyof I["payload"]["keyAgreement"], "$type" | keyof string[]>]: never; }) | undefined;
            versionId?: string | undefined;
        } & { [K_14 in Exclude<keyof I["payload"], "$type" | "service" | "id" | "alsoKnownAs" | "context" | "controller" | "verificationMethod" | "authentication" | "assertionMethod" | "capabilityInvocation" | "capabilityDelegation" | "keyAgreement" | "versionId">]: never; }) | undefined;
        signatures?: ({
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[] & ({
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        } & {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        } & { [K_15 in Exclude<keyof I["signatures"][number], "$type" | "verificationMethodId" | "signature">]: never; })[] & { [K_16 in Exclude<keyof I["signatures"], "$type" | keyof {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_17 in Exclude<keyof I, "$type" | "payload" | "signatures">]: never; }>(object: I): MsgUpdateDid;
};
export declare const MsgDeactivateDid: {
    $type: "cheqdid.cheqdnode.cheqd.v1.MsgDeactivateDid";
    encode(message: MsgDeactivateDid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeactivateDid;
    fromJSON(object: any): MsgDeactivateDid;
    toJSON(message: MsgDeactivateDid): unknown;
    fromPartial<I extends {
        payload?: {
            id?: string | undefined;
        } | undefined;
        signatures?: {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[] | undefined;
    } & {
        payload?: ({
            id?: string | undefined;
        } & {
            id?: string | undefined;
        } & { [K in Exclude<keyof I["payload"], "$type" | "id">]: never; }) | undefined;
        signatures?: ({
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[] & ({
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        } & {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        } & { [K_1 in Exclude<keyof I["signatures"][number], "$type" | "verificationMethodId" | "signature">]: never; })[] & { [K_2 in Exclude<keyof I["signatures"], "$type" | keyof {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, "$type" | "payload" | "signatures">]: never; }>(object: I): MsgDeactivateDid;
};
export declare const SignInfo: {
    $type: "cheqdid.cheqdnode.cheqd.v1.SignInfo";
    encode(message: SignInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignInfo;
    fromJSON(object: any): SignInfo;
    toJSON(message: SignInfo): unknown;
    fromPartial<I extends {
        verificationMethodId?: string | undefined;
        signature?: string | undefined;
    } & {
        verificationMethodId?: string | undefined;
        signature?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "verificationMethodId" | "signature">]: never; }>(object: I): SignInfo;
};
export declare const MsgDeactivateDidPayload: {
    $type: "cheqdid.cheqdnode.cheqd.v1.MsgDeactivateDidPayload";
    encode(message: MsgDeactivateDidPayload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeactivateDidPayload;
    fromJSON(object: any): MsgDeactivateDidPayload;
    toJSON(message: MsgDeactivateDidPayload): unknown;
    fromPartial<I extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "id">]: never; }>(object: I): MsgDeactivateDidPayload;
};
export declare const MsgDeactivateDidResponse: {
    $type: "cheqdid.cheqdnode.cheqd.v1.MsgDeactivateDidResponse";
    encode(message: MsgDeactivateDidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeactivateDidResponse;
    fromJSON(object: any): MsgDeactivateDidResponse;
    toJSON(message: MsgDeactivateDidResponse): unknown;
    fromPartial<I extends {
        metadata?: {
            created?: string | undefined;
            resources?: string[] | undefined;
            versionId?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
        } | undefined;
        did?: {
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
        } | undefined;
    } & {
        metadata?: ({
            created?: string | undefined;
            resources?: string[] | undefined;
            versionId?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
        } & {
            created?: string | undefined;
            resources?: (string[] & string[] & { [K in Exclude<keyof I["metadata"]["resources"], "$type" | keyof string[]>]: never; }) | undefined;
            versionId?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
        } & { [K_1 in Exclude<keyof I["metadata"], "$type" | "created" | "resources" | "versionId" | "updated" | "deactivated">]: never; }) | undefined;
        did?: ({
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
            } & { [K_2 in Exclude<keyof I["did"]["service"][number], "$type" | "type" | "id" | "serviceEndpoint">]: never; })[] & { [K_3 in Exclude<keyof I["did"]["service"], "$type" | keyof {
                type?: string | undefined;
                id?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[]>]: never; }) | undefined;
            id?: string | undefined;
            alsoKnownAs?: (string[] & string[] & { [K_4 in Exclude<keyof I["did"]["alsoKnownAs"], "$type" | keyof string[]>]: never; }) | undefined;
            context?: (string[] & string[] & { [K_5 in Exclude<keyof I["did"]["context"], "$type" | keyof string[]>]: never; }) | undefined;
            controller?: (string[] & string[] & { [K_6 in Exclude<keyof I["did"]["controller"], "$type" | keyof string[]>]: never; }) | undefined;
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
                } & { [K_7 in Exclude<keyof I["did"]["verificationMethod"][number]["publicKeyJwk"][number], "$type" | "value" | "key">]: never; })[] & { [K_8 in Exclude<keyof I["did"]["verificationMethod"][number]["publicKeyJwk"], "$type" | keyof {
                    value?: string | undefined;
                    key?: string | undefined;
                }[]>]: never; }) | undefined;
                publicKeyMultibase?: string | undefined;
            } & { [K_9 in Exclude<keyof I["did"]["verificationMethod"][number], "$type" | "type" | "id" | "controller" | "publicKeyJwk" | "publicKeyMultibase">]: never; })[] & { [K_10 in Exclude<keyof I["did"]["verificationMethod"], "$type" | keyof {
                type?: string | undefined;
                id?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    value?: string | undefined;
                    key?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[]>]: never; }) | undefined;
            authentication?: (string[] & string[] & { [K_11 in Exclude<keyof I["did"]["authentication"], "$type" | keyof string[]>]: never; }) | undefined;
            assertionMethod?: (string[] & string[] & { [K_12 in Exclude<keyof I["did"]["assertionMethod"], "$type" | keyof string[]>]: never; }) | undefined;
            capabilityInvocation?: (string[] & string[] & { [K_13 in Exclude<keyof I["did"]["capabilityInvocation"], "$type" | keyof string[]>]: never; }) | undefined;
            capabilityDelegation?: (string[] & string[] & { [K_14 in Exclude<keyof I["did"]["capabilityDelegation"], "$type" | keyof string[]>]: never; }) | undefined;
            keyAgreement?: (string[] & string[] & { [K_15 in Exclude<keyof I["did"]["keyAgreement"], "$type" | keyof string[]>]: never; }) | undefined;
        } & { [K_16 in Exclude<keyof I["did"], "$type" | "service" | "id" | "alsoKnownAs" | "context" | "controller" | "verificationMethod" | "authentication" | "assertionMethod" | "capabilityInvocation" | "capabilityDelegation" | "keyAgreement">]: never; }) | undefined;
    } & { [K_17 in Exclude<keyof I, "$type" | "metadata" | "did">]: never; }>(object: I): MsgDeactivateDidResponse;
};
export declare const MsgCreateDidPayload: {
    $type: "cheqdid.cheqdnode.cheqd.v1.MsgCreateDidPayload";
    encode(message: MsgCreateDidPayload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDidPayload;
    fromJSON(object: any): MsgCreateDidPayload;
    toJSON(message: MsgCreateDidPayload): unknown;
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
    } & { [K_14 in Exclude<keyof I, "$type" | "service" | "id" | "alsoKnownAs" | "context" | "controller" | "verificationMethod" | "authentication" | "assertionMethod" | "capabilityInvocation" | "capabilityDelegation" | "keyAgreement">]: never; }>(object: I): MsgCreateDidPayload;
};
export declare const MsgCreateDidResponse: {
    $type: "cheqdid.cheqdnode.cheqd.v1.MsgCreateDidResponse";
    encode(message: MsgCreateDidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDidResponse;
    fromJSON(object: any): MsgCreateDidResponse;
    toJSON(message: MsgCreateDidResponse): unknown;
    fromPartial<I extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "id">]: never; }>(object: I): MsgCreateDidResponse;
};
export declare const MsgUpdateDidPayload: {
    $type: "cheqdid.cheqdnode.cheqd.v1.MsgUpdateDidPayload";
    encode(message: MsgUpdateDidPayload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDidPayload;
    fromJSON(object: any): MsgUpdateDidPayload;
    toJSON(message: MsgUpdateDidPayload): unknown;
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
        versionId?: string | undefined;
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
        versionId?: string | undefined;
    } & { [K_14 in Exclude<keyof I, "$type" | "service" | "id" | "alsoKnownAs" | "context" | "controller" | "verificationMethod" | "authentication" | "assertionMethod" | "capabilityInvocation" | "capabilityDelegation" | "keyAgreement" | "versionId">]: never; }>(object: I): MsgUpdateDidPayload;
};
export declare const MsgUpdateDidResponse: {
    $type: "cheqdid.cheqdnode.cheqd.v1.MsgUpdateDidResponse";
    encode(message: MsgUpdateDidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDidResponse;
    fromJSON(object: any): MsgUpdateDidResponse;
    toJSON(message: MsgUpdateDidResponse): unknown;
    fromPartial<I extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "id">]: never; }>(object: I): MsgUpdateDidResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreateDid(request: MsgCreateDid): Promise<MsgCreateDidResponse>;
    UpdateDid(request: MsgUpdateDid): Promise<MsgUpdateDidResponse>;
    DeactivateDid(request: MsgDeactivateDid): Promise<MsgDeactivateDidResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    CreateDid(request: MsgCreateDid): Promise<MsgCreateDidResponse>;
    UpdateDid(request: MsgUpdateDid): Promise<MsgUpdateDidResponse>;
    DeactivateDid(request: MsgDeactivateDid): Promise<MsgDeactivateDidResponse>;
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