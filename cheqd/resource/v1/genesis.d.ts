import Long from "long";
import _m0 from "protobufjs/minimal";
import { Resource } from "./resource";
export declare const protobufPackage = "cheqdid.cheqdnode.resource.v1";
/** GenesisState defines the cheqd module's genesis state. */
export interface GenesisState {
    $type: "cheqdid.cheqdnode.resource.v1.GenesisState";
    resourceList: Resource[];
}
export declare const GenesisState: {
    $type: "cheqdid.cheqdnode.resource.v1.GenesisState";
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        resourceList?: {
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
        }[] | undefined;
    } & {
        resourceList?: ({
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
        }[] & ({
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
            } & { [K in Exclude<keyof I["resourceList"][number]["header"], "$type" | "name" | "collectionId" | "id" | "resourceType" | "mediaType" | "created" | "checksum" | "previousVersionId" | "nextVersionId">]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["resourceList"][number], "$type" | "data" | "header">]: never; })[] & { [K_2 in Exclude<keyof I["resourceList"], "$type" | keyof {
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
        }[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, "$type" | "resourceList">]: never; }>(object: I): GenesisState;
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
//# sourceMappingURL=genesis.d.ts.map