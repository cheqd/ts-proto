import _m0 from "protobufjs/minimal";
import { Metadata, ResourceWithMetadata } from "./resource";
export interface QueryGetResourceRequest {
    /** is unique identifier a for collection */
    collectionId: string;
    /** is unique identifier for a resource */
    id: string;
}
export interface QueryResourceResponse {
    resource: ResourceWithMetadata | undefined;
}
export interface QueryGetResourceMetadataRequest {
    /** is unique identifier a for collection */
    collectionId: string;
    /** is unique identifier for a resource */
    id: string;
}
export interface QueryResourceMetadataResponse {
    resource: Metadata | undefined;
}
export interface QueryGetCollectionResourcesRequest {
    /** is unique identifier a for collection */
    collectionId: string;
}
export interface QueryCollectionResourcesResponse {
    resources: Metadata[];
}
export declare const QueryGetResourceRequest: {
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
    } & { [K in Exclude<keyof I, keyof QueryGetResourceRequest>]: never; }>(object: I): QueryGetResourceRequest;
};
export declare const QueryResourceResponse: {
    encode(message: QueryResourceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryResourceResponse;
    fromJSON(object: any): QueryResourceResponse;
    toJSON(message: QueryResourceResponse): unknown;
    fromPartial<I extends {
        resource?: {
            resource?: {
                data?: Uint8Array | undefined;
            } | undefined;
            metadata?: {
                collectionId?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                version?: string | undefined;
                resourceType?: string | undefined;
                alsoKnownAs?: {
                    uri?: string | undefined;
                    description?: string | undefined;
                }[] | undefined;
                mediaType?: string | undefined;
                created?: string | undefined;
                checksum?: string | undefined;
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
                collectionId?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                version?: string | undefined;
                resourceType?: string | undefined;
                alsoKnownAs?: {
                    uri?: string | undefined;
                    description?: string | undefined;
                }[] | undefined;
                mediaType?: string | undefined;
                created?: string | undefined;
                checksum?: string | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } | undefined;
        } & {
            resource?: ({
                data?: Uint8Array | undefined;
            } & {
                data?: Uint8Array | undefined;
            } & { [K in Exclude<keyof I["resource"]["resource"], "data">]: never; }) | undefined;
            metadata?: ({
                collectionId?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                version?: string | undefined;
                resourceType?: string | undefined;
                alsoKnownAs?: {
                    uri?: string | undefined;
                    description?: string | undefined;
                }[] | undefined;
                mediaType?: string | undefined;
                created?: string | undefined;
                checksum?: string | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } & {
                collectionId?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                version?: string | undefined;
                resourceType?: string | undefined;
                alsoKnownAs?: ({
                    uri?: string | undefined;
                    description?: string | undefined;
                }[] & ({
                    uri?: string | undefined;
                    description?: string | undefined;
                } & {
                    uri?: string | undefined;
                    description?: string | undefined;
                } & { [K_1 in Exclude<keyof I["resource"]["metadata"]["alsoKnownAs"][number], keyof import("./resource").AlternativeUri>]: never; })[] & { [K_2 in Exclude<keyof I["resource"]["metadata"]["alsoKnownAs"], keyof {
                    uri?: string | undefined;
                    description?: string | undefined;
                }[]>]: never; }) | undefined;
                mediaType?: string | undefined;
                created?: string | undefined;
                checksum?: string | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } & { [K_3 in Exclude<keyof I["resource"]["metadata"], keyof Metadata>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["resource"], keyof ResourceWithMetadata>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, "resource">]: never; }>(object: I): QueryResourceResponse;
};
export declare const QueryGetResourceMetadataRequest: {
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
    } & { [K in Exclude<keyof I, keyof QueryGetResourceMetadataRequest>]: never; }>(object: I): QueryGetResourceMetadataRequest;
};
export declare const QueryResourceMetadataResponse: {
    encode(message: QueryResourceMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryResourceMetadataResponse;
    fromJSON(object: any): QueryResourceMetadataResponse;
    toJSON(message: QueryResourceMetadataResponse): unknown;
    fromPartial<I extends {
        resource?: {
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: {
                uri?: string | undefined;
                description?: string | undefined;
            }[] | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: string | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        } | undefined;
    } & {
        resource?: ({
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: {
                uri?: string | undefined;
                description?: string | undefined;
            }[] | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: string | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        } & {
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: ({
                uri?: string | undefined;
                description?: string | undefined;
            }[] & ({
                uri?: string | undefined;
                description?: string | undefined;
            } & {
                uri?: string | undefined;
                description?: string | undefined;
            } & { [K in Exclude<keyof I["resource"]["alsoKnownAs"][number], keyof import("./resource").AlternativeUri>]: never; })[] & { [K_1 in Exclude<keyof I["resource"]["alsoKnownAs"], keyof {
                uri?: string | undefined;
                description?: string | undefined;
            }[]>]: never; }) | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: string | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        } & { [K_2 in Exclude<keyof I["resource"], keyof Metadata>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, "resource">]: never; }>(object: I): QueryResourceMetadataResponse;
};
export declare const QueryGetCollectionResourcesRequest: {
    encode(message: QueryGetCollectionResourcesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCollectionResourcesRequest;
    fromJSON(object: any): QueryGetCollectionResourcesRequest;
    toJSON(message: QueryGetCollectionResourcesRequest): unknown;
    fromPartial<I extends {
        collectionId?: string | undefined;
    } & {
        collectionId?: string | undefined;
    } & { [K in Exclude<keyof I, "collectionId">]: never; }>(object: I): QueryGetCollectionResourcesRequest;
};
export declare const QueryCollectionResourcesResponse: {
    encode(message: QueryCollectionResourcesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionResourcesResponse;
    fromJSON(object: any): QueryCollectionResourcesResponse;
    toJSON(message: QueryCollectionResourcesResponse): unknown;
    fromPartial<I extends {
        resources?: {
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: {
                uri?: string | undefined;
                description?: string | undefined;
            }[] | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: string | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        }[] | undefined;
    } & {
        resources?: ({
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: {
                uri?: string | undefined;
                description?: string | undefined;
            }[] | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: string | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        }[] & ({
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: {
                uri?: string | undefined;
                description?: string | undefined;
            }[] | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: string | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        } & {
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: ({
                uri?: string | undefined;
                description?: string | undefined;
            }[] & ({
                uri?: string | undefined;
                description?: string | undefined;
            } & {
                uri?: string | undefined;
                description?: string | undefined;
            } & { [K in Exclude<keyof I["resources"][number]["alsoKnownAs"][number], keyof import("./resource").AlternativeUri>]: never; })[] & { [K_1 in Exclude<keyof I["resources"][number]["alsoKnownAs"], keyof {
                uri?: string | undefined;
                description?: string | undefined;
            }[]>]: never; }) | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: string | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        } & { [K_2 in Exclude<keyof I["resources"][number], keyof Metadata>]: never; })[] & { [K_3 in Exclude<keyof I["resources"], keyof {
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: {
                uri?: string | undefined;
                description?: string | undefined;
            }[] | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: string | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, "resources">]: never; }>(object: I): QueryCollectionResourcesResponse;
};
export interface Query {
    Resource(request: QueryGetResourceRequest): Promise<QueryResourceResponse>;
    ResourceMetadata(request: QueryGetResourceMetadataRequest): Promise<QueryResourceMetadataResponse>;
    CollectionResources(request: QueryGetCollectionResourcesRequest): Promise<QueryCollectionResourcesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Resource(request: QueryGetResourceRequest): Promise<QueryResourceResponse>;
    ResourceMetadata(request: QueryGetResourceMetadataRequest): Promise<QueryResourceMetadataResponse>;
    CollectionResources(request: QueryGetCollectionResourcesRequest): Promise<QueryCollectionResourcesResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
export {};
//# sourceMappingURL=query.d.ts.map