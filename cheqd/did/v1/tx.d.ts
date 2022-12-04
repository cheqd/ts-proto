import _m0 from "protobufjs/minimal";
import { Did, Service, VerificationMethod } from "./did";
import { Metadata } from "./stateValue";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateDid {
    payload: MsgCreateDidPayload | undefined;
    signatures: SignInfo[];
}
export interface MsgUpdateDid {
    payload: MsgUpdateDidPayload | undefined;
    signatures: SignInfo[];
}
export interface MsgDeactivateDid {
    payload: MsgDeactivateDidPayload | undefined;
    signatures: SignInfo[];
}
export interface SignInfo {
    verificationMethodId: string;
    signature: string;
}
export interface MsgDeactivateDidPayload {
    id: string;
}
export interface MsgDeactivateDidResponse {
    did: Did | undefined;
    metadata: Metadata | undefined;
}
export interface MsgCreateDidPayload {
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
    /** Not necessary */
    id: string;
}
export interface MsgUpdateDidPayload {
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
    /** Not necessary */
    id: string;
}
export declare const MsgCreateDid: {
    encode(message: MsgCreateDid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDid;
    fromJSON(object: any): MsgCreateDid;
    toJSON(message: MsgCreateDid): unknown;
    fromPartial<I extends {
        payload?: {
            context?: string[] | undefined;
            id?: string | undefined;
            controller?: string[] | undefined;
            verificationMethod?: {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[] | undefined;
            authentication?: string[] | undefined;
            assertionMethod?: string[] | undefined;
            capabilityInvocation?: string[] | undefined;
            capabilityDelegation?: string[] | undefined;
            keyAgreement?: string[] | undefined;
            alsoKnownAs?: string[] | undefined;
            service?: {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[] | undefined;
        } | undefined;
        signatures?: {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[] | undefined;
    } & {
        payload?: ({
            context?: string[] | undefined;
            id?: string | undefined;
            controller?: string[] | undefined;
            verificationMethod?: {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[] | undefined;
            authentication?: string[] | undefined;
            assertionMethod?: string[] | undefined;
            capabilityInvocation?: string[] | undefined;
            capabilityDelegation?: string[] | undefined;
            keyAgreement?: string[] | undefined;
            alsoKnownAs?: string[] | undefined;
            service?: {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[] | undefined;
        } & {
            context?: (string[] & string[] & { [K in Exclude<keyof I["payload"]["context"], keyof string[]>]: never; }) | undefined;
            id?: string | undefined;
            controller?: (string[] & string[] & { [K_1 in Exclude<keyof I["payload"]["controller"], keyof string[]>]: never; }) | undefined;
            verificationMethod?: ({
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[] & ({
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            } & {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: ({
                    key?: string | undefined;
                    value?: string | undefined;
                }[] & ({
                    key?: string | undefined;
                    value?: string | undefined;
                } & {
                    key?: string | undefined;
                    value?: string | undefined;
                } & { [K_2 in Exclude<keyof I["payload"]["verificationMethod"][number]["publicKeyJwk"][number], keyof import("./common").KeyValuePair>]: never; })[] & { [K_3 in Exclude<keyof I["payload"]["verificationMethod"][number]["publicKeyJwk"], keyof {
                    key?: string | undefined;
                    value?: string | undefined;
                }[]>]: never; }) | undefined;
                publicKeyMultibase?: string | undefined;
            } & { [K_4 in Exclude<keyof I["payload"]["verificationMethod"][number], keyof VerificationMethod>]: never; })[] & { [K_5 in Exclude<keyof I["payload"]["verificationMethod"], keyof {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[]>]: never; }) | undefined;
            authentication?: (string[] & string[] & { [K_6 in Exclude<keyof I["payload"]["authentication"], keyof string[]>]: never; }) | undefined;
            assertionMethod?: (string[] & string[] & { [K_7 in Exclude<keyof I["payload"]["assertionMethod"], keyof string[]>]: never; }) | undefined;
            capabilityInvocation?: (string[] & string[] & { [K_8 in Exclude<keyof I["payload"]["capabilityInvocation"], keyof string[]>]: never; }) | undefined;
            capabilityDelegation?: (string[] & string[] & { [K_9 in Exclude<keyof I["payload"]["capabilityDelegation"], keyof string[]>]: never; }) | undefined;
            keyAgreement?: (string[] & string[] & { [K_10 in Exclude<keyof I["payload"]["keyAgreement"], keyof string[]>]: never; }) | undefined;
            alsoKnownAs?: (string[] & string[] & { [K_11 in Exclude<keyof I["payload"]["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
            service?: ({
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[] & ({
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            } & {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            } & { [K_12 in Exclude<keyof I["payload"]["service"][number], keyof Service>]: never; })[] & { [K_13 in Exclude<keyof I["payload"]["service"], keyof {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_14 in Exclude<keyof I["payload"], keyof MsgCreateDidPayload>]: never; }) | undefined;
        signatures?: ({
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[] & ({
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        } & {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        } & { [K_15 in Exclude<keyof I["signatures"][number], keyof SignInfo>]: never; })[] & { [K_16 in Exclude<keyof I["signatures"], keyof {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_17 in Exclude<keyof I, keyof MsgCreateDid>]: never; }>(object: I): MsgCreateDid;
};
export declare const MsgUpdateDid: {
    encode(message: MsgUpdateDid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDid;
    fromJSON(object: any): MsgUpdateDid;
    toJSON(message: MsgUpdateDid): unknown;
    fromPartial<I extends {
        payload?: {
            context?: string[] | undefined;
            id?: string | undefined;
            controller?: string[] | undefined;
            verificationMethod?: {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[] | undefined;
            authentication?: string[] | undefined;
            assertionMethod?: string[] | undefined;
            capabilityInvocation?: string[] | undefined;
            capabilityDelegation?: string[] | undefined;
            keyAgreement?: string[] | undefined;
            alsoKnownAs?: string[] | undefined;
            service?: {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[] | undefined;
            versionId?: string | undefined;
        } | undefined;
        signatures?: {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[] | undefined;
    } & {
        payload?: ({
            context?: string[] | undefined;
            id?: string | undefined;
            controller?: string[] | undefined;
            verificationMethod?: {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[] | undefined;
            authentication?: string[] | undefined;
            assertionMethod?: string[] | undefined;
            capabilityInvocation?: string[] | undefined;
            capabilityDelegation?: string[] | undefined;
            keyAgreement?: string[] | undefined;
            alsoKnownAs?: string[] | undefined;
            service?: {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[] | undefined;
            versionId?: string | undefined;
        } & {
            context?: (string[] & string[] & { [K in Exclude<keyof I["payload"]["context"], keyof string[]>]: never; }) | undefined;
            id?: string | undefined;
            controller?: (string[] & string[] & { [K_1 in Exclude<keyof I["payload"]["controller"], keyof string[]>]: never; }) | undefined;
            verificationMethod?: ({
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[] & ({
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            } & {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: ({
                    key?: string | undefined;
                    value?: string | undefined;
                }[] & ({
                    key?: string | undefined;
                    value?: string | undefined;
                } & {
                    key?: string | undefined;
                    value?: string | undefined;
                } & { [K_2 in Exclude<keyof I["payload"]["verificationMethod"][number]["publicKeyJwk"][number], keyof import("./common").KeyValuePair>]: never; })[] & { [K_3 in Exclude<keyof I["payload"]["verificationMethod"][number]["publicKeyJwk"], keyof {
                    key?: string | undefined;
                    value?: string | undefined;
                }[]>]: never; }) | undefined;
                publicKeyMultibase?: string | undefined;
            } & { [K_4 in Exclude<keyof I["payload"]["verificationMethod"][number], keyof VerificationMethod>]: never; })[] & { [K_5 in Exclude<keyof I["payload"]["verificationMethod"], keyof {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[]>]: never; }) | undefined;
            authentication?: (string[] & string[] & { [K_6 in Exclude<keyof I["payload"]["authentication"], keyof string[]>]: never; }) | undefined;
            assertionMethod?: (string[] & string[] & { [K_7 in Exclude<keyof I["payload"]["assertionMethod"], keyof string[]>]: never; }) | undefined;
            capabilityInvocation?: (string[] & string[] & { [K_8 in Exclude<keyof I["payload"]["capabilityInvocation"], keyof string[]>]: never; }) | undefined;
            capabilityDelegation?: (string[] & string[] & { [K_9 in Exclude<keyof I["payload"]["capabilityDelegation"], keyof string[]>]: never; }) | undefined;
            keyAgreement?: (string[] & string[] & { [K_10 in Exclude<keyof I["payload"]["keyAgreement"], keyof string[]>]: never; }) | undefined;
            alsoKnownAs?: (string[] & string[] & { [K_11 in Exclude<keyof I["payload"]["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
            service?: ({
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[] & ({
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            } & {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            } & { [K_12 in Exclude<keyof I["payload"]["service"][number], keyof Service>]: never; })[] & { [K_13 in Exclude<keyof I["payload"]["service"], keyof {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[]>]: never; }) | undefined;
            versionId?: string | undefined;
        } & { [K_14 in Exclude<keyof I["payload"], keyof MsgUpdateDidPayload>]: never; }) | undefined;
        signatures?: ({
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[] & ({
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        } & {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        } & { [K_15 in Exclude<keyof I["signatures"][number], keyof SignInfo>]: never; })[] & { [K_16 in Exclude<keyof I["signatures"], keyof {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_17 in Exclude<keyof I, keyof MsgUpdateDid>]: never; }>(object: I): MsgUpdateDid;
};
export declare const MsgDeactivateDid: {
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
        } & { [K in Exclude<keyof I["payload"], "id">]: never; }) | undefined;
        signatures?: ({
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[] & ({
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        } & {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        } & { [K_1 in Exclude<keyof I["signatures"][number], keyof SignInfo>]: never; })[] & { [K_2 in Exclude<keyof I["signatures"], keyof {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof MsgDeactivateDid>]: never; }>(object: I): MsgDeactivateDid;
};
export declare const SignInfo: {
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
    } & { [K in Exclude<keyof I, keyof SignInfo>]: never; }>(object: I): SignInfo;
};
export declare const MsgDeactivateDidPayload: {
    encode(message: MsgDeactivateDidPayload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeactivateDidPayload;
    fromJSON(object: any): MsgDeactivateDidPayload;
    toJSON(message: MsgDeactivateDidPayload): unknown;
    fromPartial<I extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & { [K in Exclude<keyof I, "id">]: never; }>(object: I): MsgDeactivateDidPayload;
};
export declare const MsgDeactivateDidResponse: {
    encode(message: MsgDeactivateDidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeactivateDidResponse;
    fromJSON(object: any): MsgDeactivateDidResponse;
    toJSON(message: MsgDeactivateDidResponse): unknown;
    fromPartial<I extends {
        did?: {
            context?: string[] | undefined;
            id?: string | undefined;
            controller?: string[] | undefined;
            verificationMethod?: {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[] | undefined;
            authentication?: string[] | undefined;
            assertionMethod?: string[] | undefined;
            capabilityInvocation?: string[] | undefined;
            capabilityDelegation?: string[] | undefined;
            keyAgreement?: string[] | undefined;
            service?: {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[] | undefined;
            alsoKnownAs?: string[] | undefined;
        } | undefined;
        metadata?: {
            created?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
            resources?: string[] | undefined;
        } | undefined;
    } & {
        did?: ({
            context?: string[] | undefined;
            id?: string | undefined;
            controller?: string[] | undefined;
            verificationMethod?: {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[] | undefined;
            authentication?: string[] | undefined;
            assertionMethod?: string[] | undefined;
            capabilityInvocation?: string[] | undefined;
            capabilityDelegation?: string[] | undefined;
            keyAgreement?: string[] | undefined;
            service?: {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[] | undefined;
            alsoKnownAs?: string[] | undefined;
        } & {
            context?: (string[] & string[] & { [K in Exclude<keyof I["did"]["context"], keyof string[]>]: never; }) | undefined;
            id?: string | undefined;
            controller?: (string[] & string[] & { [K_1 in Exclude<keyof I["did"]["controller"], keyof string[]>]: never; }) | undefined;
            verificationMethod?: ({
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[] & ({
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            } & {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: ({
                    key?: string | undefined;
                    value?: string | undefined;
                }[] & ({
                    key?: string | undefined;
                    value?: string | undefined;
                } & {
                    key?: string | undefined;
                    value?: string | undefined;
                } & { [K_2 in Exclude<keyof I["did"]["verificationMethod"][number]["publicKeyJwk"][number], keyof import("./common").KeyValuePair>]: never; })[] & { [K_3 in Exclude<keyof I["did"]["verificationMethod"][number]["publicKeyJwk"], keyof {
                    key?: string | undefined;
                    value?: string | undefined;
                }[]>]: never; }) | undefined;
                publicKeyMultibase?: string | undefined;
            } & { [K_4 in Exclude<keyof I["did"]["verificationMethod"][number], keyof VerificationMethod>]: never; })[] & { [K_5 in Exclude<keyof I["did"]["verificationMethod"], keyof {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[]>]: never; }) | undefined;
            authentication?: (string[] & string[] & { [K_6 in Exclude<keyof I["did"]["authentication"], keyof string[]>]: never; }) | undefined;
            assertionMethod?: (string[] & string[] & { [K_7 in Exclude<keyof I["did"]["assertionMethod"], keyof string[]>]: never; }) | undefined;
            capabilityInvocation?: (string[] & string[] & { [K_8 in Exclude<keyof I["did"]["capabilityInvocation"], keyof string[]>]: never; }) | undefined;
            capabilityDelegation?: (string[] & string[] & { [K_9 in Exclude<keyof I["did"]["capabilityDelegation"], keyof string[]>]: never; }) | undefined;
            keyAgreement?: (string[] & string[] & { [K_10 in Exclude<keyof I["did"]["keyAgreement"], keyof string[]>]: never; }) | undefined;
            service?: ({
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[] & ({
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            } & {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            } & { [K_11 in Exclude<keyof I["did"]["service"][number], keyof Service>]: never; })[] & { [K_12 in Exclude<keyof I["did"]["service"], keyof {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[]>]: never; }) | undefined;
            alsoKnownAs?: (string[] & string[] & { [K_13 in Exclude<keyof I["did"]["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
        } & { [K_14 in Exclude<keyof I["did"], keyof Did>]: never; }) | undefined;
        metadata?: ({
            created?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
            resources?: string[] | undefined;
        } & {
            created?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
            resources?: (string[] & string[] & { [K_15 in Exclude<keyof I["metadata"]["resources"], keyof string[]>]: never; }) | undefined;
        } & { [K_16 in Exclude<keyof I["metadata"], keyof Metadata>]: never; }) | undefined;
    } & { [K_17 in Exclude<keyof I, keyof MsgDeactivateDidResponse>]: never; }>(object: I): MsgDeactivateDidResponse;
};
export declare const MsgCreateDidPayload: {
    encode(message: MsgCreateDidPayload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDidPayload;
    fromJSON(object: any): MsgCreateDidPayload;
    toJSON(message: MsgCreateDidPayload): unknown;
    fromPartial<I extends {
        context?: string[] | undefined;
        id?: string | undefined;
        controller?: string[] | undefined;
        verificationMethod?: {
            id?: string | undefined;
            type?: string | undefined;
            controller?: string | undefined;
            publicKeyJwk?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
            publicKeyMultibase?: string | undefined;
        }[] | undefined;
        authentication?: string[] | undefined;
        assertionMethod?: string[] | undefined;
        capabilityInvocation?: string[] | undefined;
        capabilityDelegation?: string[] | undefined;
        keyAgreement?: string[] | undefined;
        alsoKnownAs?: string[] | undefined;
        service?: {
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: string | undefined;
        }[] | undefined;
    } & {
        context?: (string[] & string[] & { [K in Exclude<keyof I["context"], keyof string[]>]: never; }) | undefined;
        id?: string | undefined;
        controller?: (string[] & string[] & { [K_1 in Exclude<keyof I["controller"], keyof string[]>]: never; }) | undefined;
        verificationMethod?: ({
            id?: string | undefined;
            type?: string | undefined;
            controller?: string | undefined;
            publicKeyJwk?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
            publicKeyMultibase?: string | undefined;
        }[] & ({
            id?: string | undefined;
            type?: string | undefined;
            controller?: string | undefined;
            publicKeyJwk?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
            publicKeyMultibase?: string | undefined;
        } & {
            id?: string | undefined;
            type?: string | undefined;
            controller?: string | undefined;
            publicKeyJwk?: ({
                key?: string | undefined;
                value?: string | undefined;
            }[] & ({
                key?: string | undefined;
                value?: string | undefined;
            } & {
                key?: string | undefined;
                value?: string | undefined;
            } & { [K_2 in Exclude<keyof I["verificationMethod"][number]["publicKeyJwk"][number], keyof import("./common").KeyValuePair>]: never; })[] & { [K_3 in Exclude<keyof I["verificationMethod"][number]["publicKeyJwk"], keyof {
                key?: string | undefined;
                value?: string | undefined;
            }[]>]: never; }) | undefined;
            publicKeyMultibase?: string | undefined;
        } & { [K_4 in Exclude<keyof I["verificationMethod"][number], keyof VerificationMethod>]: never; })[] & { [K_5 in Exclude<keyof I["verificationMethod"], keyof {
            id?: string | undefined;
            type?: string | undefined;
            controller?: string | undefined;
            publicKeyJwk?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
            publicKeyMultibase?: string | undefined;
        }[]>]: never; }) | undefined;
        authentication?: (string[] & string[] & { [K_6 in Exclude<keyof I["authentication"], keyof string[]>]: never; }) | undefined;
        assertionMethod?: (string[] & string[] & { [K_7 in Exclude<keyof I["assertionMethod"], keyof string[]>]: never; }) | undefined;
        capabilityInvocation?: (string[] & string[] & { [K_8 in Exclude<keyof I["capabilityInvocation"], keyof string[]>]: never; }) | undefined;
        capabilityDelegation?: (string[] & string[] & { [K_9 in Exclude<keyof I["capabilityDelegation"], keyof string[]>]: never; }) | undefined;
        keyAgreement?: (string[] & string[] & { [K_10 in Exclude<keyof I["keyAgreement"], keyof string[]>]: never; }) | undefined;
        alsoKnownAs?: (string[] & string[] & { [K_11 in Exclude<keyof I["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
        service?: ({
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: string | undefined;
        }[] & ({
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: string | undefined;
        } & {
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: string | undefined;
        } & { [K_12 in Exclude<keyof I["service"][number], keyof Service>]: never; })[] & { [K_13 in Exclude<keyof I["service"], keyof {
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_14 in Exclude<keyof I, keyof MsgCreateDidPayload>]: never; }>(object: I): MsgCreateDidPayload;
};
export declare const MsgCreateDidResponse: {
    encode(message: MsgCreateDidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDidResponse;
    fromJSON(object: any): MsgCreateDidResponse;
    toJSON(message: MsgCreateDidResponse): unknown;
    fromPartial<I extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & { [K in Exclude<keyof I, "id">]: never; }>(object: I): MsgCreateDidResponse;
};
export declare const MsgUpdateDidPayload: {
    encode(message: MsgUpdateDidPayload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDidPayload;
    fromJSON(object: any): MsgUpdateDidPayload;
    toJSON(message: MsgUpdateDidPayload): unknown;
    fromPartial<I extends {
        context?: string[] | undefined;
        id?: string | undefined;
        controller?: string[] | undefined;
        verificationMethod?: {
            id?: string | undefined;
            type?: string | undefined;
            controller?: string | undefined;
            publicKeyJwk?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
            publicKeyMultibase?: string | undefined;
        }[] | undefined;
        authentication?: string[] | undefined;
        assertionMethod?: string[] | undefined;
        capabilityInvocation?: string[] | undefined;
        capabilityDelegation?: string[] | undefined;
        keyAgreement?: string[] | undefined;
        alsoKnownAs?: string[] | undefined;
        service?: {
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: string | undefined;
        }[] | undefined;
        versionId?: string | undefined;
    } & {
        context?: (string[] & string[] & { [K in Exclude<keyof I["context"], keyof string[]>]: never; }) | undefined;
        id?: string | undefined;
        controller?: (string[] & string[] & { [K_1 in Exclude<keyof I["controller"], keyof string[]>]: never; }) | undefined;
        verificationMethod?: ({
            id?: string | undefined;
            type?: string | undefined;
            controller?: string | undefined;
            publicKeyJwk?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
            publicKeyMultibase?: string | undefined;
        }[] & ({
            id?: string | undefined;
            type?: string | undefined;
            controller?: string | undefined;
            publicKeyJwk?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
            publicKeyMultibase?: string | undefined;
        } & {
            id?: string | undefined;
            type?: string | undefined;
            controller?: string | undefined;
            publicKeyJwk?: ({
                key?: string | undefined;
                value?: string | undefined;
            }[] & ({
                key?: string | undefined;
                value?: string | undefined;
            } & {
                key?: string | undefined;
                value?: string | undefined;
            } & { [K_2 in Exclude<keyof I["verificationMethod"][number]["publicKeyJwk"][number], keyof import("./common").KeyValuePair>]: never; })[] & { [K_3 in Exclude<keyof I["verificationMethod"][number]["publicKeyJwk"], keyof {
                key?: string | undefined;
                value?: string | undefined;
            }[]>]: never; }) | undefined;
            publicKeyMultibase?: string | undefined;
        } & { [K_4 in Exclude<keyof I["verificationMethod"][number], keyof VerificationMethod>]: never; })[] & { [K_5 in Exclude<keyof I["verificationMethod"], keyof {
            id?: string | undefined;
            type?: string | undefined;
            controller?: string | undefined;
            publicKeyJwk?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
            publicKeyMultibase?: string | undefined;
        }[]>]: never; }) | undefined;
        authentication?: (string[] & string[] & { [K_6 in Exclude<keyof I["authentication"], keyof string[]>]: never; }) | undefined;
        assertionMethod?: (string[] & string[] & { [K_7 in Exclude<keyof I["assertionMethod"], keyof string[]>]: never; }) | undefined;
        capabilityInvocation?: (string[] & string[] & { [K_8 in Exclude<keyof I["capabilityInvocation"], keyof string[]>]: never; }) | undefined;
        capabilityDelegation?: (string[] & string[] & { [K_9 in Exclude<keyof I["capabilityDelegation"], keyof string[]>]: never; }) | undefined;
        keyAgreement?: (string[] & string[] & { [K_10 in Exclude<keyof I["keyAgreement"], keyof string[]>]: never; }) | undefined;
        alsoKnownAs?: (string[] & string[] & { [K_11 in Exclude<keyof I["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
        service?: ({
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: string | undefined;
        }[] & ({
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: string | undefined;
        } & {
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: string | undefined;
        } & { [K_12 in Exclude<keyof I["service"][number], keyof Service>]: never; })[] & { [K_13 in Exclude<keyof I["service"], keyof {
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: string | undefined;
        }[]>]: never; }) | undefined;
        versionId?: string | undefined;
    } & { [K_14 in Exclude<keyof I, keyof MsgUpdateDidPayload>]: never; }>(object: I): MsgUpdateDidPayload;
};
export declare const MsgUpdateDidResponse: {
    encode(message: MsgUpdateDidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDidResponse;
    fromJSON(object: any): MsgUpdateDidResponse;
    toJSON(message: MsgUpdateDidResponse): unknown;
    fromPartial<I extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & { [K in Exclude<keyof I, "id">]: never; }>(object: I): MsgUpdateDidResponse;
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
export {};
//# sourceMappingURL=tx.d.ts.map