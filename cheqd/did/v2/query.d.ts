import Long from "long";
import _m0 from "protobufjs/minimal";
import { DidDocWithMetadata, Metadata } from "./diddoc";
export declare const protobufPackage = "cheqd.did.v2";
export interface QueryGetDidDocRequest {
    id: string;
}
export interface QueryGetDidDocResponse {
    value: DidDocWithMetadata | undefined;
}
export interface QueryGetDidDocVersionRequest {
    id: string;
    version: string;
}
export interface QueryGetDidDocVersionResponse {
    value: DidDocWithMetadata | undefined;
}
export interface QueryGetAllDidDocVersionsMetadataRequest {
    id: string;
}
export interface QueryGetAllDidDocVersionsMetadataResponse {
    versions: Metadata[];
}
export declare const QueryGetDidDocRequest: {
    encode(message: QueryGetDidDocRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDidDocRequest;
    fromJSON(object: any): QueryGetDidDocRequest;
    toJSON(message: QueryGetDidDocRequest): unknown;
    fromPartial<I extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & { [K in Exclude<keyof I, "id">]: never; }>(object: I): QueryGetDidDocRequest;
};
export declare const QueryGetDidDocResponse: {
    encode(message: QueryGetDidDocResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDidDocResponse;
    fromJSON(object: any): QueryGetDidDocResponse;
    toJSON(message: QueryGetDidDocResponse): unknown;
    fromPartial<I extends {
        value?: {
            didDoc?: {
                context?: string[] | undefined;
                id?: string | undefined;
                controller?: string[] | undefined;
                verificationMethod?: {
                    id?: string | undefined;
                    type?: string | undefined;
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
                    type?: string | undefined;
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
                    type?: string | undefined;
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
                    type?: string | undefined;
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
                    type?: string | undefined;
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
                    type?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                }[] | undefined;
                alsoKnownAs?: string[] | undefined;
            } & {
                context?: (string[] & string[] & { [K in Exclude<keyof I["value"]["didDoc"]["context"], keyof string[]>]: never; }) | undefined;
                id?: string | undefined;
                controller?: (string[] & string[] & { [K_1 in Exclude<keyof I["value"]["didDoc"]["controller"], keyof string[]>]: never; }) | undefined;
                verificationMethod?: ({
                    id?: string | undefined;
                    type?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[] & ({
                    id?: string | undefined;
                    type?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                } & {
                    id?: string | undefined;
                    type?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                } & { [K_2 in Exclude<keyof I["value"]["didDoc"]["verificationMethod"][number], keyof import("./diddoc").VerificationMethod>]: never; })[] & { [K_3 in Exclude<keyof I["value"]["didDoc"]["verificationMethod"], keyof {
                    id?: string | undefined;
                    type?: string | undefined;
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
                    type?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                }[] & ({
                    id?: string | undefined;
                    type?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                } & {
                    id?: string | undefined;
                    type?: string | undefined;
                    serviceEndpoint?: (string[] & string[] & { [K_9 in Exclude<keyof I["value"]["didDoc"]["service"][number]["serviceEndpoint"], keyof string[]>]: never; }) | undefined;
                } & { [K_10 in Exclude<keyof I["value"]["didDoc"]["service"][number], keyof import("./diddoc").Service>]: never; })[] & { [K_11 in Exclude<keyof I["value"]["didDoc"]["service"], keyof {
                    id?: string | undefined;
                    type?: string | undefined;
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
            } & { [K_14 in Exclude<keyof I["value"]["metadata"], keyof Metadata>]: never; }) | undefined;
        } & { [K_15 in Exclude<keyof I["value"], keyof DidDocWithMetadata>]: never; }) | undefined;
    } & { [K_16 in Exclude<keyof I, "value">]: never; }>(object: I): QueryGetDidDocResponse;
};
export declare const QueryGetDidDocVersionRequest: {
    encode(message: QueryGetDidDocVersionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDidDocVersionRequest;
    fromJSON(object: any): QueryGetDidDocVersionRequest;
    toJSON(message: QueryGetDidDocVersionRequest): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        version?: string | undefined;
    } & {
        id?: string | undefined;
        version?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryGetDidDocVersionRequest>]: never; }>(object: I): QueryGetDidDocVersionRequest;
};
export declare const QueryGetDidDocVersionResponse: {
    encode(message: QueryGetDidDocVersionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDidDocVersionResponse;
    fromJSON(object: any): QueryGetDidDocVersionResponse;
    toJSON(message: QueryGetDidDocVersionResponse): unknown;
    fromPartial<I extends {
        value?: {
            didDoc?: {
                context?: string[] | undefined;
                id?: string | undefined;
                controller?: string[] | undefined;
                verificationMethod?: {
                    id?: string | undefined;
                    type?: string | undefined;
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
                    type?: string | undefined;
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
                    type?: string | undefined;
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
                    type?: string | undefined;
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
                    type?: string | undefined;
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
                    type?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                }[] | undefined;
                alsoKnownAs?: string[] | undefined;
            } & {
                context?: (string[] & string[] & { [K in Exclude<keyof I["value"]["didDoc"]["context"], keyof string[]>]: never; }) | undefined;
                id?: string | undefined;
                controller?: (string[] & string[] & { [K_1 in Exclude<keyof I["value"]["didDoc"]["controller"], keyof string[]>]: never; }) | undefined;
                verificationMethod?: ({
                    id?: string | undefined;
                    type?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[] & ({
                    id?: string | undefined;
                    type?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                } & {
                    id?: string | undefined;
                    type?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                } & { [K_2 in Exclude<keyof I["value"]["didDoc"]["verificationMethod"][number], keyof import("./diddoc").VerificationMethod>]: never; })[] & { [K_3 in Exclude<keyof I["value"]["didDoc"]["verificationMethod"], keyof {
                    id?: string | undefined;
                    type?: string | undefined;
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
                    type?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                }[] & ({
                    id?: string | undefined;
                    type?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                } & {
                    id?: string | undefined;
                    type?: string | undefined;
                    serviceEndpoint?: (string[] & string[] & { [K_9 in Exclude<keyof I["value"]["didDoc"]["service"][number]["serviceEndpoint"], keyof string[]>]: never; }) | undefined;
                } & { [K_10 in Exclude<keyof I["value"]["didDoc"]["service"][number], keyof import("./diddoc").Service>]: never; })[] & { [K_11 in Exclude<keyof I["value"]["didDoc"]["service"], keyof {
                    id?: string | undefined;
                    type?: string | undefined;
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
            } & { [K_14 in Exclude<keyof I["value"]["metadata"], keyof Metadata>]: never; }) | undefined;
        } & { [K_15 in Exclude<keyof I["value"], keyof DidDocWithMetadata>]: never; }) | undefined;
    } & { [K_16 in Exclude<keyof I, "value">]: never; }>(object: I): QueryGetDidDocVersionResponse;
};
export declare const QueryGetAllDidDocVersionsMetadataRequest: {
    encode(message: QueryGetAllDidDocVersionsMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllDidDocVersionsMetadataRequest;
    fromJSON(object: any): QueryGetAllDidDocVersionsMetadataRequest;
    toJSON(message: QueryGetAllDidDocVersionsMetadataRequest): unknown;
    fromPartial<I extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & { [K in Exclude<keyof I, "id">]: never; }>(object: I): QueryGetAllDidDocVersionsMetadataRequest;
};
export declare const QueryGetAllDidDocVersionsMetadataResponse: {
    encode(message: QueryGetAllDidDocVersionsMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllDidDocVersionsMetadataResponse;
    fromJSON(object: any): QueryGetAllDidDocVersionsMetadataResponse;
    toJSON(message: QueryGetAllDidDocVersionsMetadataResponse): unknown;
    fromPartial<I extends {
        versions?: {
            created?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
            nextVersionId?: string | undefined;
            previousVersionId?: string | undefined;
        }[] | undefined;
    } & {
        versions?: ({
            created?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
            nextVersionId?: string | undefined;
            previousVersionId?: string | undefined;
        }[] & ({
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
        } & { [K in Exclude<keyof I["versions"][number], keyof Metadata>]: never; })[] & { [K_1 in Exclude<keyof I["versions"], keyof {
            created?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
            nextVersionId?: string | undefined;
            previousVersionId?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "versions">]: never; }>(object: I): QueryGetAllDidDocVersionsMetadataResponse;
};
export interface Query {
    DidDoc(request: QueryGetDidDocRequest): Promise<QueryGetDidDocResponse>;
    DidDocVersion(request: QueryGetDidDocVersionRequest): Promise<QueryGetDidDocVersionResponse>;
    AllDidDocVersionsMetadata(request: QueryGetAllDidDocVersionsMetadataRequest): Promise<QueryGetAllDidDocVersionsMetadataResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    DidDoc(request: QueryGetDidDocRequest): Promise<QueryGetDidDocResponse>;
    DidDocVersion(request: QueryGetDidDocVersionRequest): Promise<QueryGetDidDocVersionResponse>;
    AllDidDocVersionsMetadata(request: QueryGetAllDidDocVersionsMetadataRequest): Promise<QueryGetAllDidDocVersionsMetadataResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
//# sourceMappingURL=query.d.ts.map