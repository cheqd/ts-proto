import _m0 from "protobufjs/minimal";
import { DidDocWithMetadata } from "./diddoc";
import { FeeParams } from "./fee";
export interface DidDocVersionSet {
    latestVersion: string;
    didDocs: DidDocWithMetadata[];
}
export interface GenesisState {
    didNamespace: string;
    versionSets: DidDocVersionSet[];
    feeParams: FeeParams | undefined;
}
export declare const DidDocVersionSet: {
    encode(message: DidDocVersionSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DidDocVersionSet;
    fromJSON(object: any): DidDocVersionSet;
    toJSON(message: DidDocVersionSet): unknown;
    fromPartial<I extends {
        latestVersion?: string | undefined;
        didDocs?: {
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
        }[] | undefined;
    } & {
        latestVersion?: string | undefined;
        didDocs?: ({
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
        }[] & ({
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
                context?: (string[] & string[] & { [K in Exclude<keyof I["didDocs"][number]["didDoc"]["context"], keyof string[]>]: never; }) | undefined;
                id?: string | undefined;
                controller?: (string[] & string[] & { [K_1 in Exclude<keyof I["didDocs"][number]["didDoc"]["controller"], keyof string[]>]: never; }) | undefined;
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
                } & { [K_2 in Exclude<keyof I["didDocs"][number]["didDoc"]["verificationMethod"][number], keyof import("./diddoc").VerificationMethod>]: never; })[] & { [K_3 in Exclude<keyof I["didDocs"][number]["didDoc"]["verificationMethod"], keyof {
                    id?: string | undefined;
                    verificationMethodType?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[]>]: never; }) | undefined;
                authentication?: (string[] & string[] & { [K_4 in Exclude<keyof I["didDocs"][number]["didDoc"]["authentication"], keyof string[]>]: never; }) | undefined;
                assertionMethod?: (string[] & string[] & { [K_5 in Exclude<keyof I["didDocs"][number]["didDoc"]["assertionMethod"], keyof string[]>]: never; }) | undefined;
                capabilityInvocation?: (string[] & string[] & { [K_6 in Exclude<keyof I["didDocs"][number]["didDoc"]["capabilityInvocation"], keyof string[]>]: never; }) | undefined;
                capabilityDelegation?: (string[] & string[] & { [K_7 in Exclude<keyof I["didDocs"][number]["didDoc"]["capabilityDelegation"], keyof string[]>]: never; }) | undefined;
                keyAgreement?: (string[] & string[] & { [K_8 in Exclude<keyof I["didDocs"][number]["didDoc"]["keyAgreement"], keyof string[]>]: never; }) | undefined;
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
                    serviceEndpoint?: (string[] & string[] & { [K_9 in Exclude<keyof I["didDocs"][number]["didDoc"]["service"][number]["serviceEndpoint"], keyof string[]>]: never; }) | undefined;
                } & { [K_10 in Exclude<keyof I["didDocs"][number]["didDoc"]["service"][number], keyof import("./diddoc").Service>]: never; })[] & { [K_11 in Exclude<keyof I["didDocs"][number]["didDoc"]["service"], keyof {
                    id?: string | undefined;
                    serviceType?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                }[]>]: never; }) | undefined;
                alsoKnownAs?: (string[] & string[] & { [K_12 in Exclude<keyof I["didDocs"][number]["didDoc"]["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
            } & { [K_13 in Exclude<keyof I["didDocs"][number]["didDoc"], keyof import("./diddoc").DidDoc>]: never; }) | undefined;
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
            } & { [K_14 in Exclude<keyof I["didDocs"][number]["metadata"], keyof import("./diddoc").Metadata>]: never; }) | undefined;
        } & { [K_15 in Exclude<keyof I["didDocs"][number], keyof DidDocWithMetadata>]: never; })[] & { [K_16 in Exclude<keyof I["didDocs"], keyof {
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
        }[]>]: never; }) | undefined;
    } & { [K_17 in Exclude<keyof I, keyof DidDocVersionSet>]: never; }>(object: I): DidDocVersionSet;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        didNamespace?: string | undefined;
        versionSets?: {
            latestVersion?: string | undefined;
            didDocs?: {
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
            }[] | undefined;
        }[] | undefined;
        feeParams?: {
            createDid?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            updateDid?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            deactivateDid?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            burnFactor?: string | undefined;
        } | undefined;
    } & {
        didNamespace?: string | undefined;
        versionSets?: ({
            latestVersion?: string | undefined;
            didDocs?: {
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
            }[] | undefined;
        }[] & ({
            latestVersion?: string | undefined;
            didDocs?: {
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
            }[] | undefined;
        } & {
            latestVersion?: string | undefined;
            didDocs?: ({
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
            }[] & ({
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
                    context?: (string[] & string[] & { [K in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["context"], keyof string[]>]: never; }) | undefined;
                    id?: string | undefined;
                    controller?: (string[] & string[] & { [K_1 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["controller"], keyof string[]>]: never; }) | undefined;
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
                    } & { [K_2 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["verificationMethod"][number], keyof import("./diddoc").VerificationMethod>]: never; })[] & { [K_3 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["verificationMethod"], keyof {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    }[]>]: never; }) | undefined;
                    authentication?: (string[] & string[] & { [K_4 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["authentication"], keyof string[]>]: never; }) | undefined;
                    assertionMethod?: (string[] & string[] & { [K_5 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["assertionMethod"], keyof string[]>]: never; }) | undefined;
                    capabilityInvocation?: (string[] & string[] & { [K_6 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["capabilityInvocation"], keyof string[]>]: never; }) | undefined;
                    capabilityDelegation?: (string[] & string[] & { [K_7 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["capabilityDelegation"], keyof string[]>]: never; }) | undefined;
                    keyAgreement?: (string[] & string[] & { [K_8 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["keyAgreement"], keyof string[]>]: never; }) | undefined;
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
                        serviceEndpoint?: (string[] & string[] & { [K_9 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["service"][number]["serviceEndpoint"], keyof string[]>]: never; }) | undefined;
                    } & { [K_10 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["service"][number], keyof import("./diddoc").Service>]: never; })[] & { [K_11 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["service"], keyof {
                        id?: string | undefined;
                        serviceType?: string | undefined;
                        serviceEndpoint?: string[] | undefined;
                    }[]>]: never; }) | undefined;
                    alsoKnownAs?: (string[] & string[] & { [K_12 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
                } & { [K_13 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"], keyof import("./diddoc").DidDoc>]: never; }) | undefined;
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
                } & { [K_14 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["metadata"], keyof import("./diddoc").Metadata>]: never; }) | undefined;
            } & { [K_15 in Exclude<keyof I["versionSets"][number]["didDocs"][number], keyof DidDocWithMetadata>]: never; })[] & { [K_16 in Exclude<keyof I["versionSets"][number]["didDocs"], keyof {
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
            }[]>]: never; }) | undefined;
        } & { [K_17 in Exclude<keyof I["versionSets"][number], keyof DidDocVersionSet>]: never; })[] & { [K_18 in Exclude<keyof I["versionSets"], keyof {
            latestVersion?: string | undefined;
            didDocs?: {
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
            }[] | undefined;
        }[]>]: never; }) | undefined;
        feeParams?: ({
            createDid?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            updateDid?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            deactivateDid?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            burnFactor?: string | undefined;
        } & {
            createDid?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_19 in Exclude<keyof I["feeParams"]["createDid"], keyof import("../../../cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
            updateDid?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_20 in Exclude<keyof I["feeParams"]["updateDid"], keyof import("../../../cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
            deactivateDid?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_21 in Exclude<keyof I["feeParams"]["deactivateDid"], keyof import("../../../cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
            burnFactor?: string | undefined;
        } & { [K_22 in Exclude<keyof I["feeParams"], keyof FeeParams>]: never; }) | undefined;
    } & { [K_23 in Exclude<keyof I, keyof GenesisState>]: never; }>(object: I): GenesisState;
};
//# sourceMappingURL=genesis.d.ts.map