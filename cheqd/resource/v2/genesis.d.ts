import Long from "long";
import _m0 from "protobufjs/minimal";
import { FeeParams } from "./fee";
import { ResourceWithMetadata } from "./resource";
export declare const protobufPackage = "cheqd.resource.v2";
export interface GenesisState {
    $type: "cheqd.resource.v2.GenesisState";
    resources: ResourceWithMetadata[];
    feeParams: FeeParams | undefined;
}
export declare const GenesisState: {
    $type: "cheqd.resource.v2.GenesisState";
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        resources?: {
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
        }[] | undefined;
        feeParams?: {
            burnFactor?: string | undefined;
            mediaTypes?: {
                [x: string]: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                [x: number]: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
    } & {
        resources?: ({
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
        }[] & ({
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
                } & { [K in Exclude<keyof I["resources"][number]["metadata"]["alsoKnownAs"][number], "$type" | "uri" | "description">]: never; })[] & { [K_1 in Exclude<keyof I["resources"][number]["metadata"]["alsoKnownAs"], "$type" | keyof {
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
            } & { [K_2 in Exclude<keyof I["resources"][number]["metadata"], "$type" | "id" | "alsoKnownAs" | "created" | "nextVersionId" | "previousVersionId" | "version" | "collectionId" | "name" | "resourceType" | "mediaType" | "checksum">]: never; }) | undefined;
            resource?: ({
                data?: Uint8Array | undefined;
            } & {
                data?: Uint8Array | undefined;
            } & { [K_3 in Exclude<keyof I["resources"][number]["resource"], "$type" | "data">]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["resources"][number], "$type" | "metadata" | "resource">]: never; })[] & { [K_5 in Exclude<keyof I["resources"], "$type" | keyof {
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
        }[]>]: never; }) | undefined;
        feeParams?: ({
            burnFactor?: string | undefined;
            mediaTypes?: {
                [x: string]: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                [x: number]: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            } | undefined;
        } & {
            burnFactor?: string | undefined;
            mediaTypes?: ({
                [x: string]: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                [x: number]: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            } & {
                [x: string]: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & { [K_6 in Exclude<keyof I["feeParams"]["mediaTypes"][string], "$type" | "denom" | "amount">]: never; }) | undefined;
                [x: number]: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & { [K_7 in Exclude<keyof I["feeParams"]["mediaTypes"][number], "$type" | "denom" | "amount">]: never; }) | undefined;
            } & { [K_8 in Exclude<keyof I["feeParams"]["mediaTypes"], string | number>]: never; }) | undefined;
        } & { [K_9 in Exclude<keyof I["feeParams"], "$type" | "burnFactor" | "mediaTypes">]: never; }) | undefined;
    } & { [K_10 in Exclude<keyof I, "$type" | "resources" | "feeParams">]: never; }>(object: I): GenesisState;
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