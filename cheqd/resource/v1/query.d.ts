import Long from "long";
import _m0 from "protobufjs/minimal";
import { Resource, ResourceHeader } from "./resource";
export declare const protobufPackage = "cheqdid.cheqdnode.resource.v1";
export interface QueryGetResourceRequest {
    $type: "cheqdid.cheqdnode.resource.v1.QueryGetResourceRequest";
    collectionId: string;
    id: string;
}
export interface QueryGetResourceResponse {
    $type: "cheqdid.cheqdnode.resource.v1.QueryGetResourceResponse";
    resource: Resource | undefined;
}
export interface QueryGetCollectionResourcesRequest {
    $type: "cheqdid.cheqdnode.resource.v1.QueryGetCollectionResourcesRequest";
    collectionId: string;
}
export interface QueryGetCollectionResourcesResponse {
    $type: "cheqdid.cheqdnode.resource.v1.QueryGetCollectionResourcesResponse";
    resources: ResourceHeader[];
}
export interface QueryGetAllResourceVersionsRequest {
    $type: "cheqdid.cheqdnode.resource.v1.QueryGetAllResourceVersionsRequest";
    collectionId: string;
    name: string;
    resourceType: string;
}
export interface QueryGetAllResourceVersionsResponse {
    $type: "cheqdid.cheqdnode.resource.v1.QueryGetAllResourceVersionsResponse";
    resources: ResourceHeader[];
}
export declare const QueryGetResourceRequest: {
    $type: "cheqdid.cheqdnode.resource.v1.QueryGetResourceRequest";
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
    $type: "cheqdid.cheqdnode.resource.v1.QueryGetResourceResponse";
    encode(message: QueryGetResourceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetResourceResponse;
    fromJSON(object: any): QueryGetResourceResponse;
    toJSON(message: QueryGetResourceResponse): unknown;
    fromPartial<I extends {
        resource?: {
            data?: Uint8Array | undefined;
            header?: {
                name?: string | undefined;
                collectionId?: string | undefined;
                id?: string | undefined;
                resourceType?: string | undefined;
                mediaType?: string | undefined;
                created?: string | undefined;
                checksum?: Uint8Array | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        resource?: ({
            data?: Uint8Array | undefined;
            header?: {
                name?: string | undefined;
                collectionId?: string | undefined;
                id?: string | undefined;
                resourceType?: string | undefined;
                mediaType?: string | undefined;
                created?: string | undefined;
                checksum?: Uint8Array | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } | undefined;
        } & {
            data?: Uint8Array | undefined;
            header?: ({
                name?: string | undefined;
                collectionId?: string | undefined;
                id?: string | undefined;
                resourceType?: string | undefined;
                mediaType?: string | undefined;
                created?: string | undefined;
                checksum?: Uint8Array | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } & {
                name?: string | undefined;
                collectionId?: string | undefined;
                id?: string | undefined;
                resourceType?: string | undefined;
                mediaType?: string | undefined;
                created?: string | undefined;
                checksum?: Uint8Array | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } & { [K in Exclude<keyof I["resource"]["header"], "$type" | "name" | "collectionId" | "id" | "resourceType" | "mediaType" | "created" | "checksum" | "previousVersionId" | "nextVersionId">]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["resource"], "$type" | "data" | "header">]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "$type" | "resource">]: never; }>(object: I): QueryGetResourceResponse;
};
export declare const QueryGetCollectionResourcesRequest: {
    $type: "cheqdid.cheqdnode.resource.v1.QueryGetCollectionResourcesRequest";
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
    $type: "cheqdid.cheqdnode.resource.v1.QueryGetCollectionResourcesResponse";
    encode(message: QueryGetCollectionResourcesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCollectionResourcesResponse;
    fromJSON(object: any): QueryGetCollectionResourcesResponse;
    toJSON(message: QueryGetCollectionResourcesResponse): unknown;
    fromPartial<I extends {
        resources?: {
            name?: string | undefined;
            collectionId?: string | undefined;
            id?: string | undefined;
            resourceType?: string | undefined;
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
            resourceType?: string | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: Uint8Array | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        }[] & ({
            name?: string | undefined;
            collectionId?: string | undefined;
            id?: string | undefined;
            resourceType?: string | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: Uint8Array | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        } & {
            name?: string | undefined;
            collectionId?: string | undefined;
            id?: string | undefined;
            resourceType?: string | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: Uint8Array | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        } & { [K in Exclude<keyof I["resources"][number], "$type" | "name" | "collectionId" | "id" | "resourceType" | "mediaType" | "created" | "checksum" | "previousVersionId" | "nextVersionId">]: never; })[] & { [K_1 in Exclude<keyof I["resources"], "$type" | keyof {
            name?: string | undefined;
            collectionId?: string | undefined;
            id?: string | undefined;
            resourceType?: string | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: Uint8Array | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "$type" | "resources">]: never; }>(object: I): QueryGetCollectionResourcesResponse;
};
export declare const QueryGetAllResourceVersionsRequest: {
    $type: "cheqdid.cheqdnode.resource.v1.QueryGetAllResourceVersionsRequest";
    encode(message: QueryGetAllResourceVersionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllResourceVersionsRequest;
    fromJSON(object: any): QueryGetAllResourceVersionsRequest;
    toJSON(message: QueryGetAllResourceVersionsRequest): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        collectionId?: string | undefined;
        resourceType?: string | undefined;
    } & {
        name?: string | undefined;
        collectionId?: string | undefined;
        resourceType?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "name" | "collectionId" | "resourceType">]: never; }>(object: I): QueryGetAllResourceVersionsRequest;
};
export declare const QueryGetAllResourceVersionsResponse: {
    $type: "cheqdid.cheqdnode.resource.v1.QueryGetAllResourceVersionsResponse";
    encode(message: QueryGetAllResourceVersionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllResourceVersionsResponse;
    fromJSON(object: any): QueryGetAllResourceVersionsResponse;
    toJSON(message: QueryGetAllResourceVersionsResponse): unknown;
    fromPartial<I extends {
        resources?: {
            name?: string | undefined;
            collectionId?: string | undefined;
            id?: string | undefined;
            resourceType?: string | undefined;
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
            resourceType?: string | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: Uint8Array | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        }[] & ({
            name?: string | undefined;
            collectionId?: string | undefined;
            id?: string | undefined;
            resourceType?: string | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: Uint8Array | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        } & {
            name?: string | undefined;
            collectionId?: string | undefined;
            id?: string | undefined;
            resourceType?: string | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: Uint8Array | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        } & { [K in Exclude<keyof I["resources"][number], "$type" | "name" | "collectionId" | "id" | "resourceType" | "mediaType" | "created" | "checksum" | "previousVersionId" | "nextVersionId">]: never; })[] & { [K_1 in Exclude<keyof I["resources"], "$type" | keyof {
            name?: string | undefined;
            collectionId?: string | undefined;
            id?: string | undefined;
            resourceType?: string | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: Uint8Array | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "$type" | "resources">]: never; }>(object: I): QueryGetAllResourceVersionsResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    Resource(request: QueryGetResourceRequest): Promise<QueryGetResourceResponse>;
    CollectionResources(request: QueryGetCollectionResourcesRequest): Promise<QueryGetCollectionResourcesResponse>;
    AllResourceVersions(request: QueryGetAllResourceVersionsRequest): Promise<QueryGetAllResourceVersionsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Resource(request: QueryGetResourceRequest): Promise<QueryGetResourceResponse>;
    CollectionResources(request: QueryGetCollectionResourcesRequest): Promise<QueryGetCollectionResourcesResponse>;
    AllResourceVersions(request: QueryGetAllResourceVersionsRequest): Promise<QueryGetAllResourceVersionsResponse>;
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