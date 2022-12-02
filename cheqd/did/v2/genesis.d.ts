import Long from "long";
import _m0 from "protobufjs/minimal";
import { DidDocWithMetadata } from "./diddoc";
import { FeeParams } from "./fee";
export declare const protobufPackage = "cheqd.did.v2";
export interface DidDocVersionSet {
    $type: "cheqd.did.v2.DidDocVersionSet";
    latestVersion: string;
    didDocs: DidDocWithMetadata[];
}
export interface GenesisState {
    $type: "cheqd.did.v2.GenesisState";
    didNamespace: string;
    versionSets: DidDocVersionSet[];
    feeParams: FeeParams | undefined;
}
export declare const DidDocVersionSet: {
    $type: "cheqd.did.v2.DidDocVersionSet";
    encode(message: DidDocVersionSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DidDocVersionSet;
    fromJSON(object: any): DidDocVersionSet;
    toJSON(message: DidDocVersionSet): unknown;
    fromPartial<I extends {
        latestVersion?: string | undefined;
        didDocs?: {
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
        }[] | undefined;
    } & {
        latestVersion?: string | undefined;
        didDocs?: ({
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
        }[] & ({
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
            } & { [K in Exclude<keyof I["didDocs"][number]["metadata"], "$type" | "created" | "updated" | "deactivated" | "versionId" | "nextVersionId" | "previousVersionId">]: never; }) | undefined;
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
                context?: (string[] & string[] & { [K_1 in Exclude<keyof I["didDocs"][number]["didDoc"]["context"], "$type" | keyof string[]>]: never; }) | undefined;
                id?: string | undefined;
                controller?: (string[] & string[] & { [K_2 in Exclude<keyof I["didDocs"][number]["didDoc"]["controller"], "$type" | keyof string[]>]: never; }) | undefined;
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
                } & { [K_3 in Exclude<keyof I["didDocs"][number]["didDoc"]["verificationMethod"][number], "$type" | "id" | "controller" | "type" | "verificationMaterial">]: never; })[] & { [K_4 in Exclude<keyof I["didDocs"][number]["didDoc"]["verificationMethod"], "$type" | keyof {
                    id?: string | undefined;
                    controller?: string | undefined;
                    type?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[]>]: never; }) | undefined;
                authentication?: (string[] & string[] & { [K_5 in Exclude<keyof I["didDocs"][number]["didDoc"]["authentication"], "$type" | keyof string[]>]: never; }) | undefined;
                assertionMethod?: (string[] & string[] & { [K_6 in Exclude<keyof I["didDocs"][number]["didDoc"]["assertionMethod"], "$type" | keyof string[]>]: never; }) | undefined;
                capabilityInvocation?: (string[] & string[] & { [K_7 in Exclude<keyof I["didDocs"][number]["didDoc"]["capabilityInvocation"], "$type" | keyof string[]>]: never; }) | undefined;
                capabilityDelegation?: (string[] & string[] & { [K_8 in Exclude<keyof I["didDocs"][number]["didDoc"]["capabilityDelegation"], "$type" | keyof string[]>]: never; }) | undefined;
                keyAgreement?: (string[] & string[] & { [K_9 in Exclude<keyof I["didDocs"][number]["didDoc"]["keyAgreement"], "$type" | keyof string[]>]: never; }) | undefined;
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
                    serviceEndpoint?: (string[] & string[] & { [K_10 in Exclude<keyof I["didDocs"][number]["didDoc"]["service"][number]["serviceEndpoint"], "$type" | keyof string[]>]: never; }) | undefined;
                } & { [K_11 in Exclude<keyof I["didDocs"][number]["didDoc"]["service"][number], "$type" | "id" | "type" | "serviceEndpoint">]: never; })[] & { [K_12 in Exclude<keyof I["didDocs"][number]["didDoc"]["service"], "$type" | keyof {
                    id?: string | undefined;
                    type?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                }[]>]: never; }) | undefined;
                alsoKnownAs?: (string[] & string[] & { [K_13 in Exclude<keyof I["didDocs"][number]["didDoc"]["alsoKnownAs"], "$type" | keyof string[]>]: never; }) | undefined;
            } & { [K_14 in Exclude<keyof I["didDocs"][number]["didDoc"], "$type" | "context" | "id" | "controller" | "verificationMethod" | "authentication" | "assertionMethod" | "capabilityInvocation" | "capabilityDelegation" | "keyAgreement" | "service" | "alsoKnownAs">]: never; }) | undefined;
        } & { [K_15 in Exclude<keyof I["didDocs"][number], "$type" | "metadata" | "didDoc">]: never; })[] & { [K_16 in Exclude<keyof I["didDocs"], "$type" | keyof {
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
        }[]>]: never; }) | undefined;
    } & { [K_17 in Exclude<keyof I, "$type" | "latestVersion" | "didDocs">]: never; }>(object: I): DidDocVersionSet;
};
export declare const GenesisState: {
    $type: "cheqd.did.v2.GenesisState";
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        didNamespace?: string | undefined;
        versionSets?: {
            latestVersion?: string | undefined;
            didDocs?: {
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
            }[] | undefined;
        }[] | undefined;
        feeParams?: {
            txTypes?: {
                [x: string]: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                [x: number]: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            } | undefined;
            burnFactor?: string | undefined;
        } | undefined;
    } & {
        didNamespace?: string | undefined;
        versionSets?: ({
            latestVersion?: string | undefined;
            didDocs?: {
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
            }[] | undefined;
        }[] & ({
            latestVersion?: string | undefined;
            didDocs?: {
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
            }[] | undefined;
        } & {
            latestVersion?: string | undefined;
            didDocs?: ({
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
            }[] & ({
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
                } & { [K in Exclude<keyof I["versionSets"][number]["didDocs"][number]["metadata"], "$type" | "created" | "updated" | "deactivated" | "versionId" | "nextVersionId" | "previousVersionId">]: never; }) | undefined;
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
                    context?: (string[] & string[] & { [K_1 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["context"], "$type" | keyof string[]>]: never; }) | undefined;
                    id?: string | undefined;
                    controller?: (string[] & string[] & { [K_2 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["controller"], "$type" | keyof string[]>]: never; }) | undefined;
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
                    } & { [K_3 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["verificationMethod"][number], "$type" | "id" | "controller" | "type" | "verificationMaterial">]: never; })[] & { [K_4 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["verificationMethod"], "$type" | keyof {
                        id?: string | undefined;
                        controller?: string | undefined;
                        type?: string | undefined;
                        verificationMaterial?: string | undefined;
                    }[]>]: never; }) | undefined;
                    authentication?: (string[] & string[] & { [K_5 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["authentication"], "$type" | keyof string[]>]: never; }) | undefined;
                    assertionMethod?: (string[] & string[] & { [K_6 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["assertionMethod"], "$type" | keyof string[]>]: never; }) | undefined;
                    capabilityInvocation?: (string[] & string[] & { [K_7 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["capabilityInvocation"], "$type" | keyof string[]>]: never; }) | undefined;
                    capabilityDelegation?: (string[] & string[] & { [K_8 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["capabilityDelegation"], "$type" | keyof string[]>]: never; }) | undefined;
                    keyAgreement?: (string[] & string[] & { [K_9 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["keyAgreement"], "$type" | keyof string[]>]: never; }) | undefined;
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
                        serviceEndpoint?: (string[] & string[] & { [K_10 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["service"][number]["serviceEndpoint"], "$type" | keyof string[]>]: never; }) | undefined;
                    } & { [K_11 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["service"][number], "$type" | "id" | "type" | "serviceEndpoint">]: never; })[] & { [K_12 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["service"], "$type" | keyof {
                        id?: string | undefined;
                        type?: string | undefined;
                        serviceEndpoint?: string[] | undefined;
                    }[]>]: never; }) | undefined;
                    alsoKnownAs?: (string[] & string[] & { [K_13 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["alsoKnownAs"], "$type" | keyof string[]>]: never; }) | undefined;
                } & { [K_14 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"], "$type" | "context" | "id" | "controller" | "verificationMethod" | "authentication" | "assertionMethod" | "capabilityInvocation" | "capabilityDelegation" | "keyAgreement" | "service" | "alsoKnownAs">]: never; }) | undefined;
            } & { [K_15 in Exclude<keyof I["versionSets"][number]["didDocs"][number], "$type" | "metadata" | "didDoc">]: never; })[] & { [K_16 in Exclude<keyof I["versionSets"][number]["didDocs"], "$type" | keyof {
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
            }[]>]: never; }) | undefined;
        } & { [K_17 in Exclude<keyof I["versionSets"][number], "$type" | "latestVersion" | "didDocs">]: never; })[] & { [K_18 in Exclude<keyof I["versionSets"], "$type" | keyof {
            latestVersion?: string | undefined;
            didDocs?: {
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
            }[] | undefined;
        }[]>]: never; }) | undefined;
        feeParams?: ({
            txTypes?: {
                [x: string]: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                [x: number]: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            } | undefined;
            burnFactor?: string | undefined;
        } & {
            txTypes?: ({
                [x: string]: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                [x: number]: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            } & {
                [x: string]: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & { [K_19 in Exclude<keyof I["feeParams"]["txTypes"][string], "$type" | "denom" | "amount">]: never; }) | undefined;
                [x: number]: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & { [K_20 in Exclude<keyof I["feeParams"]["txTypes"][number], "$type" | "denom" | "amount">]: never; }) | undefined;
            } & { [K_21 in Exclude<keyof I["feeParams"]["txTypes"], string | number>]: never; }) | undefined;
            burnFactor?: string | undefined;
        } & { [K_22 in Exclude<keyof I["feeParams"], "$type" | "txTypes" | "burnFactor">]: never; }) | undefined;
    } & { [K_23 in Exclude<keyof I, "$type" | "didNamespace" | "versionSets" | "feeParams">]: never; }>(object: I): GenesisState;
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
//# sourceMappingURL=genesis.d.ts.map