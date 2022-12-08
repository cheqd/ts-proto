import _m0 from "protobufjs/minimal";
export interface Resource {
    header: ResourceHeader | undefined;
    data: Uint8Array;
}
export interface ResourceHeader {
    collectionId: string;
    id: string;
    name: string;
    resourceType: string;
    mediaType: string;
    created: string;
    checksum: Uint8Array;
    previousVersionId: string;
    nextVersionId: string;
}
export declare const Resource: {
    encode(message: Resource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Resource;
    fromJSON(object: any): Resource;
    toJSON(message: Resource): unknown;
    fromPartial<I extends {
        header?: {
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            resourceType?: string | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: Uint8Array | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        } | undefined;
        data?: Uint8Array | undefined;
    } & {
        header?: ({
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            resourceType?: string | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: Uint8Array | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        } & {
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            resourceType?: string | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: Uint8Array | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        } & { [K in Exclude<keyof I["header"], keyof ResourceHeader>]: never; }) | undefined;
        data?: Uint8Array | undefined;
    } & { [K_1 in Exclude<keyof I, keyof Resource>]: never; }>(object: I): Resource;
};
export declare const ResourceHeader: {
    encode(message: ResourceHeader, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceHeader;
    fromJSON(object: any): ResourceHeader;
    toJSON(message: ResourceHeader): unknown;
    fromPartial<I extends {
        collectionId?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        resourceType?: string | undefined;
        mediaType?: string | undefined;
        created?: string | undefined;
        checksum?: Uint8Array | undefined;
        previousVersionId?: string | undefined;
        nextVersionId?: string | undefined;
    } & {
        collectionId?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        resourceType?: string | undefined;
        mediaType?: string | undefined;
        created?: string | undefined;
        checksum?: Uint8Array | undefined;
        previousVersionId?: string | undefined;
        nextVersionId?: string | undefined;
    } & { [K in Exclude<keyof I, keyof ResourceHeader>]: never; }>(object: I): ResourceHeader;
};
//# sourceMappingURL=resource.d.ts.map