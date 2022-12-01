import Long from "long";
import _m0 from "protobufjs/minimal";
import { FeeParams } from "./fee";
import { ResourceWithMetadata } from "./resource";
export declare const protobufPackage = "cheqd.resource.v2";
export interface GenesisState {
    resources: ResourceWithMetadata[];
    feeParams: FeeParams | undefined;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        resources?: {
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
                checksum?: Uint8Array | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } | undefined;
        }[] | undefined;
        feeParams?: {
            mediaTypes?: {
                [x: string]: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            } | undefined;
            burnFactor?: string | undefined;
        } | undefined;
    } & {
        resources?: ({
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
                checksum?: Uint8Array | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } | undefined;
        }[] & ({
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
                checksum?: Uint8Array | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } | undefined;
        } & {
            resource?: ({
                data?: Uint8Array | undefined;
            } & {
                data?: Uint8Array | undefined;
            } & { [K in Exclude<keyof I["resources"][number]["resource"], "data">]: never; }) | undefined;
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
                checksum?: Uint8Array | undefined;
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
                } & { [K_1 in Exclude<keyof I["resources"][number]["metadata"]["alsoKnownAs"][number], keyof import("./resource").AlternativeUri>]: never; })[] & { [K_2 in Exclude<keyof I["resources"][number]["metadata"]["alsoKnownAs"], keyof {
                    uri?: string | undefined;
                    description?: string | undefined;
                }[]>]: never; }) | undefined;
                mediaType?: string | undefined;
                created?: string | undefined;
                checksum?: Uint8Array | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } & { [K_3 in Exclude<keyof I["resources"][number]["metadata"], keyof import("./resource").Metadata>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["resources"][number], keyof ResourceWithMetadata>]: never; })[] & { [K_5 in Exclude<keyof I["resources"], keyof {
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
                checksum?: Uint8Array | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        feeParams?: ({
            mediaTypes?: {
                [x: string]: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            } | undefined;
            burnFactor?: string | undefined;
        } & {
            mediaTypes?: ({
                [x: string]: {
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
                } & { [K_6 in Exclude<keyof I["feeParams"]["mediaTypes"][string], keyof import("../../../cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
            } & { [K_7 in Exclude<keyof I["feeParams"]["mediaTypes"], string | number>]: never; }) | undefined;
            burnFactor?: string | undefined;
        } & { [K_8 in Exclude<keyof I["feeParams"], keyof FeeParams>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I, keyof GenesisState>]: never; }>(object: I): GenesisState;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
//# sourceMappingURL=genesis.d.ts.map