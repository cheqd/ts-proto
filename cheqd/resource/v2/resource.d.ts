import _m0 from "protobufjs/minimal";
export interface Resource {
    data: Uint8Array;
}
export interface ResourceWithMetadata {
    resource: Resource | undefined;
    metadata: Metadata | undefined;
}
export interface AlternativeUri {
    uri: string;
    description: string;
}
export interface Metadata {
    collectionId: string;
    id: string;
    name: string;
    version: string;
    resourceType: string;
    alsoKnownAs: AlternativeUri[];
    mediaType: string;
    created: string;
    checksum: string;
    previousVersionId: string;
    nextVersionId: string;
}
export declare const Resource: {
    encode(message: Resource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Resource;
    fromJSON(object: any): Resource;
    toJSON(message: Resource): unknown;
    fromPartial<I extends {
        data?: Uint8Array | undefined;
    } & {
        data?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, "data">]: never; }>(object: I): Resource;
};
export declare const ResourceWithMetadata: {
    encode(message: ResourceWithMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceWithMetadata;
    fromJSON(object: any): ResourceWithMetadata;
    toJSON(message: ResourceWithMetadata): unknown;
    fromPartial<I extends {
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
        } & { [K in Exclude<keyof I["resource"], "data">]: never; }) | undefined;
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
            } & { [K_1 in Exclude<keyof I["metadata"]["alsoKnownAs"][number], keyof AlternativeUri>]: never; })[] & { [K_2 in Exclude<keyof I["metadata"]["alsoKnownAs"], keyof {
                uri?: string | undefined;
                description?: string | undefined;
            }[]>]: never; }) | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: string | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        } & { [K_3 in Exclude<keyof I["metadata"], keyof Metadata>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof ResourceWithMetadata>]: never; }>(object: I): ResourceWithMetadata;
};
export declare const AlternativeUri: {
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
    } & { [K in Exclude<keyof I, keyof AlternativeUri>]: never; }>(object: I): AlternativeUri;
};
export declare const Metadata: {
    encode(message: Metadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Metadata;
    fromJSON(object: any): Metadata;
    toJSON(message: Metadata): unknown;
    fromPartial<I extends {
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
        } & { [K in Exclude<keyof I["alsoKnownAs"][number], keyof AlternativeUri>]: never; })[] & { [K_1 in Exclude<keyof I["alsoKnownAs"], keyof {
            uri?: string | undefined;
            description?: string | undefined;
        }[]>]: never; }) | undefined;
        mediaType?: string | undefined;
        created?: string | undefined;
        checksum?: string | undefined;
        previousVersionId?: string | undefined;
        nextVersionId?: string | undefined;
    } & { [K_2 in Exclude<keyof I, keyof Metadata>]: never; }>(object: I): Metadata;
};
//# sourceMappingURL=resource.d.ts.map