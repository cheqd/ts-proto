import Long from "long";
import _m0 from "protobufjs/minimal";
import { DidDocWithMetadata, Metadata } from "./diddoc";
export declare const protobufPackage = "cheqd.did.v2";
export interface QueryGetDidDocRequest {
    $type: "cheqd.did.v2.QueryGetDidDocRequest";
    id: string;
}
export interface QueryGetDidDocResponse {
    $type: "cheqd.did.v2.QueryGetDidDocResponse";
    value: DidDocWithMetadata | undefined;
}
export interface QueryGetDidDocVersionRequest {
    $type: "cheqd.did.v2.QueryGetDidDocVersionRequest";
    id: string;
    version: string;
}
export interface QueryGetDidDocVersionResponse {
    $type: "cheqd.did.v2.QueryGetDidDocVersionResponse";
    value: DidDocWithMetadata | undefined;
}
export interface QueryGetAllDidDocVersionsMetadataRequest {
    $type: "cheqd.did.v2.QueryGetAllDidDocVersionsMetadataRequest";
    id: string;
}
export interface QueryGetAllDidDocVersionsMetadataResponse {
    $type: "cheqd.did.v2.QueryGetAllDidDocVersionsMetadataResponse";
    versions: Metadata[];
}
export declare const QueryGetDidDocRequest: {
    $type: "cheqd.did.v2.QueryGetDidDocRequest";
    encode(message: QueryGetDidDocRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDidDocRequest;
    fromJSON(object: any): QueryGetDidDocRequest;
    toJSON(message: QueryGetDidDocRequest): unknown;
    fromPartial<I extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "id">]: never; }>(object: I): QueryGetDidDocRequest;
};
export declare const QueryGetDidDocResponse: {
    $type: "cheqd.did.v2.QueryGetDidDocResponse";
    encode(message: QueryGetDidDocResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDidDocResponse;
    fromJSON(object: any): QueryGetDidDocResponse;
    toJSON(message: QueryGetDidDocResponse): unknown;
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
    } & { [K_16 in Exclude<keyof I, "$type" | "value">]: never; }>(object: I): QueryGetDidDocResponse;
};
export declare const QueryGetDidDocVersionRequest: {
    $type: "cheqd.did.v2.QueryGetDidDocVersionRequest";
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
    } & { [K in Exclude<keyof I, "$type" | "id" | "version">]: never; }>(object: I): QueryGetDidDocVersionRequest;
};
export declare const QueryGetDidDocVersionResponse: {
    $type: "cheqd.did.v2.QueryGetDidDocVersionResponse";
    encode(message: QueryGetDidDocVersionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDidDocVersionResponse;
    fromJSON(object: any): QueryGetDidDocVersionResponse;
    toJSON(message: QueryGetDidDocVersionResponse): unknown;
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
    } & { [K_16 in Exclude<keyof I, "$type" | "value">]: never; }>(object: I): QueryGetDidDocVersionResponse;
};
export declare const QueryGetAllDidDocVersionsMetadataRequest: {
    $type: "cheqd.did.v2.QueryGetAllDidDocVersionsMetadataRequest";
    encode(message: QueryGetAllDidDocVersionsMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllDidDocVersionsMetadataRequest;
    fromJSON(object: any): QueryGetAllDidDocVersionsMetadataRequest;
    toJSON(message: QueryGetAllDidDocVersionsMetadataRequest): unknown;
    fromPartial<I extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "id">]: never; }>(object: I): QueryGetAllDidDocVersionsMetadataRequest;
};
export declare const QueryGetAllDidDocVersionsMetadataResponse: {
    $type: "cheqd.did.v2.QueryGetAllDidDocVersionsMetadataResponse";
    encode(message: QueryGetAllDidDocVersionsMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllDidDocVersionsMetadataResponse;
    fromJSON(object: any): QueryGetAllDidDocVersionsMetadataResponse;
    toJSON(message: QueryGetAllDidDocVersionsMetadataResponse): unknown;
    fromPartial<I extends {
        versions?: {
            created?: string | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
            versionId?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
        }[] | undefined;
    } & {
        versions?: ({
            created?: string | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
            versionId?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
        }[] & ({
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
        } & { [K in Exclude<keyof I["versions"][number], "$type" | "created" | "previousVersionId" | "nextVersionId" | "versionId" | "updated" | "deactivated">]: never; })[] & { [K_1 in Exclude<keyof I["versions"], "$type" | keyof {
            created?: string | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
            versionId?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "$type" | "versions">]: never; }>(object: I): QueryGetAllDidDocVersionsMetadataResponse;
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
    [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P> | "$type">]: never;
};
export {};
//# sourceMappingURL=query.d.ts.map