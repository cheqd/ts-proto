import _m0 from "protobufjs/minimal";
import { FeeParams } from "./fee";
import { ResourceWithMetadata } from "./resource";
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
                checksum?: string | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } | undefined;
        }[] | undefined;
        feeParams?: {
            image?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            json?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            default?: {
                denom?: string | undefined;
                amount?: string | undefined;
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
                checksum?: string | undefined;
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
                checksum?: string | undefined;
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
                } & { [K_1 in Exclude<keyof I["resources"][number]["metadata"]["alsoKnownAs"][number], keyof import("./resource").AlternativeUri>]: never; })[] & { [K_2 in Exclude<keyof I["resources"][number]["metadata"]["alsoKnownAs"], keyof {
                    uri?: string | undefined;
                    description?: string | undefined;
                }[]>]: never; }) | undefined;
                mediaType?: string | undefined;
                created?: string | undefined;
                checksum?: string | undefined;
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
                checksum?: string | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        feeParams?: ({
            image?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            json?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            default?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            burnFactor?: string | undefined;
        } & {
            image?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_6 in Exclude<keyof I["feeParams"]["image"], keyof import("../../../cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
            json?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_7 in Exclude<keyof I["feeParams"]["json"], keyof import("../../../cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
            default?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_8 in Exclude<keyof I["feeParams"]["default"], keyof import("../../../cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
            burnFactor?: string | undefined;
        } & { [K_9 in Exclude<keyof I["feeParams"], keyof FeeParams>]: never; }) | undefined;
    } & { [K_10 in Exclude<keyof I, keyof GenesisState>]: never; }>(object: I): GenesisState;
};
//# sourceMappingURL=genesis.d.ts.map