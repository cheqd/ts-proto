import Long from "long";
import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "cheqdid.cheqdnode.resource.v1";
export interface Resource {
    $type: "cheqdid.cheqdnode.resource.v1.Resource";
    header: ResourceHeader | undefined;
    data: Uint8Array;
}
export interface ResourceHeader {
    $type: "cheqdid.cheqdnode.resource.v1.ResourceHeader";
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
    $type: "cheqdid.cheqdnode.resource.v1.Resource";
    encode(message: Resource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Resource;
    fromJSON(object: any): Resource;
    toJSON(message: Resource): unknown;
    fromPartial<I extends {
        data?: Uint8Array | undefined;
        header?: {
            id?: string | undefined;
            created?: string | undefined;
            nextVersionId?: string | undefined;
            previousVersionId?: string | undefined;
            collectionId?: string | undefined;
            name?: string | undefined;
            resourceType?: string | undefined;
            mediaType?: string | undefined;
            checksum?: Uint8Array | undefined;
        } | undefined;
    } & {
        data?: Uint8Array | undefined;
        header?: ({
            id?: string | undefined;
            created?: string | undefined;
            nextVersionId?: string | undefined;
            previousVersionId?: string | undefined;
            collectionId?: string | undefined;
            name?: string | undefined;
            resourceType?: string | undefined;
            mediaType?: string | undefined;
            checksum?: Uint8Array | undefined;
        } & {
            id?: string | undefined;
            created?: string | undefined;
            nextVersionId?: string | undefined;
            previousVersionId?: string | undefined;
            collectionId?: string | undefined;
            name?: string | undefined;
            resourceType?: string | undefined;
            mediaType?: string | undefined;
            checksum?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["header"], "$type" | "id" | "created" | "nextVersionId" | "previousVersionId" | "collectionId" | "name" | "resourceType" | "mediaType" | "checksum">]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "data" | "header">]: never; }>(object: I): Resource;
};
export declare const ResourceHeader: {
    $type: "cheqdid.cheqdnode.resource.v1.ResourceHeader";
    encode(message: ResourceHeader, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceHeader;
    fromJSON(object: any): ResourceHeader;
    toJSON(message: ResourceHeader): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        created?: string | undefined;
        nextVersionId?: string | undefined;
        previousVersionId?: string | undefined;
        collectionId?: string | undefined;
        name?: string | undefined;
        resourceType?: string | undefined;
        mediaType?: string | undefined;
        checksum?: Uint8Array | undefined;
    } & {
        id?: string | undefined;
        created?: string | undefined;
        nextVersionId?: string | undefined;
        previousVersionId?: string | undefined;
        collectionId?: string | undefined;
        name?: string | undefined;
        resourceType?: string | undefined;
        mediaType?: string | undefined;
        checksum?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, "$type" | "id" | "created" | "nextVersionId" | "previousVersionId" | "collectionId" | "name" | "resourceType" | "mediaType" | "checksum">]: never; }>(object: I): ResourceHeader;
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