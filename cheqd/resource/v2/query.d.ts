import Long from "long";
import _m0 from "protobufjs/minimal";
import { Metadata, ResourceWithMetadata } from "./resource";
export declare const protobufPackage = "cheqd.resource.v2";
export interface QueryGetResourceRequest {
    $type: "cheqd.resource.v2.QueryGetResourceRequest";
    collectionId: string;
    id: string;
}
export interface QueryGetResourceResponse {
    $type: "cheqd.resource.v2.QueryGetResourceResponse";
    resource: ResourceWithMetadata | undefined;
}
export interface QueryGetResourceMetadataRequest {
    $type: "cheqd.resource.v2.QueryGetResourceMetadataRequest";
    collectionId: string;
    id: string;
}
export interface QueryGetResourceMetadataResponse {
    $type: "cheqd.resource.v2.QueryGetResourceMetadataResponse";
    resource: Metadata | undefined;
}
export interface QueryGetCollectionResourcesRequest {
    $type: "cheqd.resource.v2.QueryGetCollectionResourcesRequest";
    collectionId: string;
}
export interface QueryGetCollectionResourcesResponse {
    $type: "cheqd.resource.v2.QueryGetCollectionResourcesResponse";
    resources: Metadata[];
}
export declare const QueryGetResourceRequest: {
    $type: "cheqd.resource.v2.QueryGetResourceRequest";
    encode(message: QueryGetResourceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetResourceRequest;
    fromJSON(object: any): QueryGetResourceRequest;
    toJSON(message: QueryGetResourceRequest): unknown;
    fromPartial<I extends {
        collectionId?: string | undefined;
        id?: string | undefined;
    } & {
        collectionId?: string | undefined;
        id?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "collectionId" | "id">]: never; }>(object: I): QueryGetResourceRequest;
};
export declare const QueryGetResourceResponse: {
    $type: "cheqd.resource.v2.QueryGetResourceResponse";
    encode(message: QueryGetResourceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetResourceResponse;
    fromJSON(object: any): QueryGetResourceResponse;
    toJSON(message: QueryGetResourceResponse): unknown;
    fromPartial<I extends {
        resource?: {
            resource?: {
                data?: Uint8Array | undefined;
            } | undefined;
            metadata?: {
                name?: string | undefined;
                collectionId?: string | undefined;
                id?: string | undefined;
                version?: string | undefined;
                resourceType?: string | undefined;
                alsoKnownAs?: {
                    description?: string | undefined;
                    uri?: string | undefined;
                }[] | undefined;
                mediaType?: string | undefined;
                created?: string | undefined;
                checksum?: Uint8Array | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        resource?: ({
            resource?: {
                data?: Uint8Array | undefined;
            } | undefined;
            metadata?: {
                name?: string | undefined;
                collectionId?: string | undefined;
                id?: string | undefined;
                version?: string | undefined;
                resourceType?: string | undefined;
                alsoKnownAs?: {
                    description?: string | undefined;
                    uri?: string | undefined;
                }[] | undefined;
                mediaType?: string | undefined;
                created?: string | undefined;
                checksum?: Uint8Array | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } | undefined;
        } & {
            resource?: ({
                data?: Uint8Array | undefined;
            } & {
                data?: Uint8Array | undefined;
            } & { [K in Exclude<keyof I["resource"]["resource"], "$type" | "data">]: never; }) | undefined;
            metadata?: ({
                name?: string | undefined;
                collectionId?: string | undefined;
                id?: string | undefined;
                version?: string | undefined;
                resourceType?: string | undefined;
                alsoKnownAs?: {
                    description?: string | undefined;
                    uri?: string | undefined;
                }[] | undefined;
                mediaType?: string | undefined;
                created?: string | undefined;
                checksum?: Uint8Array | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } & {
                name?: string | undefined;
                collectionId?: string | undefined;
                id?: string | undefined;
                version?: string | undefined;
                resourceType?: string | undefined;
                alsoKnownAs?: ({
                    description?: string | undefined;
                    uri?: string | undefined;
                }[] & ({
                    description?: string | undefined;
                    uri?: string | undefined;
                } & {
                    description?: string | undefined;
                    uri?: string | undefined;
                } & { [K_1 in Exclude<keyof I["resource"]["metadata"]["alsoKnownAs"][number], "$type" | "description" | "uri">]: never; })[] & { [K_2 in Exclude<keyof I["resource"]["metadata"]["alsoKnownAs"], "$type" | keyof {
                    description?: string | undefined;
                    uri?: string | undefined;
                }[]>]: never; }) | undefined;
                mediaType?: string | undefined;
                created?: string | undefined;
                checksum?: Uint8Array | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } & { [K_3 in Exclude<keyof I["resource"]["metadata"], "$type" | "name" | "collectionId" | "id" | "version" | "resourceType" | "alsoKnownAs" | "mediaType" | "created" | "checksum" | "previousVersionId" | "nextVersionId">]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["resource"], "$type" | "resource" | "metadata">]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, "$type" | "resource">]: never; }>(object: I): QueryGetResourceResponse;
};
export declare const QueryGetResourceMetadataRequest: {
    $type: "cheqd.resource.v2.QueryGetResourceMetadataRequest";
    encode(message: QueryGetResourceMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetResourceMetadataRequest;
    fromJSON(object: any): QueryGetResourceMetadataRequest;
    toJSON(message: QueryGetResourceMetadataRequest): unknown;
    fromPartial<I extends {
        collectionId?: string | undefined;
        id?: string | undefined;
    } & {
        collectionId?: string | undefined;
        id?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "collectionId" | "id">]: never; }>(object: I): QueryGetResourceMetadataRequest;
};
export declare const QueryGetResourceMetadataResponse: {
    $type: "cheqd.resource.v2.QueryGetResourceMetadataResponse";
    encode(message: QueryGetResourceMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetResourceMetadataResponse;
    fromJSON(object: any): QueryGetResourceMetadataResponse;
    toJSON(message: QueryGetResourceMetadataResponse): unknown;
    fromPartial<I extends {
        resource?: {
            name?: string | undefined;
            collectionId?: string | undefined;
            id?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: {
                description?: string | undefined;
                uri?: string | undefined;
            }[] | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: Uint8Array | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        } | undefined;
    } & {
        resource?: ({
            name?: string | undefined;
            collectionId?: string | undefined;
            id?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: {
                description?: string | undefined;
                uri?: string | undefined;
            }[] | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: Uint8Array | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        } & {
            name?: string | undefined;
            collectionId?: string | undefined;
            id?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: ({
                description?: string | undefined;
                uri?: string | undefined;
            }[] & ({
                description?: string | undefined;
                uri?: string | undefined;
            } & {
                description?: string | undefined;
                uri?: string | undefined;
            } & { [K in Exclude<keyof I["resource"]["alsoKnownAs"][number], "$type" | "description" | "uri">]: never; })[] & { [K_1 in Exclude<keyof I["resource"]["alsoKnownAs"], "$type" | keyof {
                description?: string | undefined;
                uri?: string | undefined;
            }[]>]: never; }) | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: Uint8Array | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        } & { [K_2 in Exclude<keyof I["resource"], "$type" | "name" | "collectionId" | "id" | "version" | "resourceType" | "alsoKnownAs" | "mediaType" | "created" | "checksum" | "previousVersionId" | "nextVersionId">]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, "$type" | "resource">]: never; }>(object: I): QueryGetResourceMetadataResponse;
};
export declare const QueryGetCollectionResourcesRequest: {
    $type: "cheqd.resource.v2.QueryGetCollectionResourcesRequest";
    encode(message: QueryGetCollectionResourcesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCollectionResourcesRequest;
    fromJSON(object: any): QueryGetCollectionResourcesRequest;
    toJSON(message: QueryGetCollectionResourcesRequest): unknown;
    fromPartial<I extends {
        collectionId?: string | undefined;
    } & {
        collectionId?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "collectionId">]: never; }>(object: I): QueryGetCollectionResourcesRequest;
};
export declare const QueryGetCollectionResourcesResponse: {
    $type: "cheqd.resource.v2.QueryGetCollectionResourcesResponse";
    encode(message: QueryGetCollectionResourcesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCollectionResourcesResponse;
    fromJSON(object: any): QueryGetCollectionResourcesResponse;
    toJSON(message: QueryGetCollectionResourcesResponse): unknown;
    fromPartial<I extends {
        resources?: {
            name?: string | undefined;
            collectionId?: string | undefined;
            id?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: {
                description?: string | undefined;
                uri?: string | undefined;
            }[] | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: Uint8Array | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        }[] | undefined;
    } & {
        resources?: ({
            name?: string | undefined;
            collectionId?: string | undefined;
            id?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: {
                description?: string | undefined;
                uri?: string | undefined;
            }[] | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: Uint8Array | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        }[] & ({
            name?: string | undefined;
            collectionId?: string | undefined;
            id?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: {
                description?: string | undefined;
                uri?: string | undefined;
            }[] | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: Uint8Array | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        } & {
            name?: string | undefined;
            collectionId?: string | undefined;
            id?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: ({
                description?: string | undefined;
                uri?: string | undefined;
            }[] & ({
                description?: string | undefined;
                uri?: string | undefined;
            } & {
                description?: string | undefined;
                uri?: string | undefined;
            } & { [K in Exclude<keyof I["resources"][number]["alsoKnownAs"][number], "$type" | "description" | "uri">]: never; })[] & { [K_1 in Exclude<keyof I["resources"][number]["alsoKnownAs"], "$type" | keyof {
                description?: string | undefined;
                uri?: string | undefined;
            }[]>]: never; }) | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: Uint8Array | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        } & { [K_2 in Exclude<keyof I["resources"][number], "$type" | "name" | "collectionId" | "id" | "version" | "resourceType" | "alsoKnownAs" | "mediaType" | "created" | "checksum" | "previousVersionId" | "nextVersionId">]: never; })[] & { [K_3 in Exclude<keyof I["resources"], "$type" | keyof {
            name?: string | undefined;
            collectionId?: string | undefined;
            id?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: {
                description?: string | undefined;
                uri?: string | undefined;
            }[] | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: Uint8Array | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, "$type" | "resources">]: never; }>(object: I): QueryGetCollectionResourcesResponse;
};
export interface Query {
    Resource(request: QueryGetResourceRequest): Promise<QueryGetResourceResponse>;
    ResourceMetadata(request: QueryGetResourceMetadataRequest): Promise<QueryGetResourceMetadataResponse>;
    CollectionResources(request: QueryGetCollectionResourcesRequest): Promise<QueryGetCollectionResourcesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Resource(request: QueryGetResourceRequest): Promise<QueryGetResourceResponse>;
    ResourceMetadata(request: QueryGetResourceMetadataRequest): Promise<QueryGetResourceMetadataResponse>;
    CollectionResources(request: QueryGetCollectionResourcesRequest): Promise<QueryGetCollectionResourcesResponse>;
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