import Long from "long";
import _m0 from "protobufjs/minimal";
import { Did } from "./did";
import { Metadata } from "./stateValue";
export declare const protobufPackage = "cheqdid.cheqdnode.cheqd.v1";
export interface QueryGetDidRequest {
    $type: "cheqdid.cheqdnode.cheqd.v1.QueryGetDidRequest";
    id: string;
}
export interface QueryGetDidResponse {
    $type: "cheqdid.cheqdnode.cheqd.v1.QueryGetDidResponse";
    did: Did | undefined;
    metadata: Metadata | undefined;
}
export declare const QueryGetDidRequest: {
    $type: "cheqdid.cheqdnode.cheqd.v1.QueryGetDidRequest";
    encode(message: QueryGetDidRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDidRequest;
    fromJSON(object: any): QueryGetDidRequest;
    toJSON(message: QueryGetDidRequest): unknown;
    fromPartial<I extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "id">]: never; }>(object: I): QueryGetDidRequest;
};
export declare const QueryGetDidResponse: {
    $type: "cheqdid.cheqdnode.cheqd.v1.QueryGetDidResponse";
    encode(message: QueryGetDidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDidResponse;
    fromJSON(object: any): QueryGetDidResponse;
    toJSON(message: QueryGetDidResponse): unknown;
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
    } & { [K_17 in Exclude<keyof I, "$type" | "metadata" | "did">]: never; }>(object: I): QueryGetDidResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    Did(request: QueryGetDidRequest): Promise<QueryGetDidResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Did(request: QueryGetDidRequest): Promise<QueryGetDidResponse>;
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