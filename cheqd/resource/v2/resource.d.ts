import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "cheqd.resource.v2";
export interface Resource {
    $type: "cheqd.resource.v2.Resource";
    data: Uint8Array;
}
export interface ResourceWithMetadata {
    $type: "cheqd.resource.v2.ResourceWithMetadata";
    resource: Resource | undefined;
    metadata: Metadata | undefined;
}
export interface AlternativeUri {
    $type: "cheqd.resource.v2.AlternativeUri";
    uri: string;
    description: string;
}
export interface Metadata {
    $type: "cheqd.resource.v2.Metadata";
    collectionId: string;
    id: string;
    name: string;
    version: string;
    resourceType: string;
    alsoKnownAs: AlternativeUri[];
    mediaType: string;
    created: string;
    checksum: Uint8Array;
    previousVersionId: string;
    nextVersionId: string;
}
export declare const Resource: {
    $type: "cheqd.resource.v2.Resource";
    encode(message: Resource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Resource;
    fromJSON(object: any): Resource;
    toJSON(message: Resource): unknown;
    fromPartial<I extends {
        data?: Uint8Array | undefined;
    } & {
        data?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, "$type" | "data">]: never; }>(object: I): Resource;
};
export declare const ResourceWithMetadata: {
    $type: "cheqd.resource.v2.ResourceWithMetadata";
    encode(message: ResourceWithMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceWithMetadata;
    fromJSON(object: any): ResourceWithMetadata;
    toJSON(message: ResourceWithMetadata): unknown;
    fromPartial<I extends {
        metadata?: {
            id?: string | undefined;
            alsoKnownAs?: {
                uri?: string | undefined;
                description?: string | undefined;
            }[] | undefined;
            created?: string | undefined;
            nextVersionId?: string | undefined;
            previousVersionId?: string | undefined;
            version?: string | undefined;
            collectionId?: string | undefined;
            name?: string | undefined;
            resourceType?: string | undefined;
            mediaType?: string | undefined;
            checksum?: Uint8Array | undefined;
        } | undefined;
        resource?: {
            data?: Uint8Array | undefined;
        } | undefined;
    } & {
        metadata?: ({
            id?: string | undefined;
            alsoKnownAs?: {
                uri?: string | undefined;
                description?: string | undefined;
            }[] | undefined;
            created?: string | undefined;
            nextVersionId?: string | undefined;
            previousVersionId?: string | undefined;
            version?: string | undefined;
            collectionId?: string | undefined;
            name?: string | undefined;
            resourceType?: string | undefined;
            mediaType?: string | undefined;
            checksum?: Uint8Array | undefined;
        } & {
            id?: string | undefined;
            alsoKnownAs?: ({
                uri?: string | undefined;
                description?: string | undefined;
            }[] & ({
                uri?: string | undefined;
                description?: string | undefined;
            } & {
                uri?: string | undefined;
                description?: string | undefined;
            } & { [K in Exclude<keyof I["metadata"]["alsoKnownAs"][number], "$type" | "uri" | "description">]: never; })[] & { [K_1 in Exclude<keyof I["metadata"]["alsoKnownAs"], "$type" | keyof {
                uri?: string | undefined;
                description?: string | undefined;
            }[]>]: never; }) | undefined;
            created?: string | undefined;
            nextVersionId?: string | undefined;
            previousVersionId?: string | undefined;
            version?: string | undefined;
            collectionId?: string | undefined;
            name?: string | undefined;
            resourceType?: string | undefined;
            mediaType?: string | undefined;
            checksum?: Uint8Array | undefined;
        } & { [K_2 in Exclude<keyof I["metadata"], "$type" | "id" | "alsoKnownAs" | "created" | "nextVersionId" | "previousVersionId" | "version" | "collectionId" | "name" | "resourceType" | "mediaType" | "checksum">]: never; }) | undefined;
        resource?: ({
            data?: Uint8Array | undefined;
        } & {
            data?: Uint8Array | undefined;
        } & { [K_3 in Exclude<keyof I["resource"], "$type" | "data">]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, "$type" | "metadata" | "resource">]: never; }>(object: I): ResourceWithMetadata;
};
export declare const AlternativeUri: {
    $type: "cheqd.resource.v2.AlternativeUri";
    encode(message: AlternativeUri, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AlternativeUri;
    fromJSON(object: any): AlternativeUri;
    toJSON(message: AlternativeUri): unknown;
    fromPartial<I extends {
        uri?: string | undefined;
        description?: string | undefined;
    } & {
        uri?: string | undefined;
        description?: string | undefined;
    } & { [K in Exclude<keyof I, "$type" | "uri" | "description">]: never; }>(object: I): AlternativeUri;
};
export declare const Metadata: {
    $type: "cheqd.resource.v2.Metadata";
    encode(message: Metadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Metadata;
    fromJSON(object: any): Metadata;
    toJSON(message: Metadata): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        alsoKnownAs?: {
            uri?: string | undefined;
            description?: string | undefined;
        }[] | undefined;
        created?: string | undefined;
        nextVersionId?: string | undefined;
        previousVersionId?: string | undefined;
        version?: string | undefined;
        collectionId?: string | undefined;
        name?: string | undefined;
        resourceType?: string | undefined;
        mediaType?: string | undefined;
        checksum?: Uint8Array | undefined;
    } & {
        id?: string | undefined;
        alsoKnownAs?: ({
            uri?: string | undefined;
            description?: string | undefined;
        }[] & ({
            uri?: string | undefined;
            description?: string | undefined;
        } & {
            uri?: string | undefined;
            description?: string | undefined;
        } & { [K in Exclude<keyof I["alsoKnownAs"][number], "$type" | "uri" | "description">]: never; })[] & { [K_1 in Exclude<keyof I["alsoKnownAs"], "$type" | keyof {
            uri?: string | undefined;
            description?: string | undefined;
        }[]>]: never; }) | undefined;
        created?: string | undefined;
        nextVersionId?: string | undefined;
        previousVersionId?: string | undefined;
        version?: string | undefined;
        collectionId?: string | undefined;
        name?: string | undefined;
        resourceType?: string | undefined;
        mediaType?: string | undefined;
        checksum?: Uint8Array | undefined;
    } & { [K_2 in Exclude<keyof I, "$type" | "id" | "alsoKnownAs" | "created" | "nextVersionId" | "previousVersionId" | "version" | "collectionId" | "name" | "resourceType" | "mediaType" | "checksum">]: never; }>(object: I): Metadata;
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
//# sourceMappingURL=resource.d.ts.map