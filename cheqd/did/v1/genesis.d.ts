import Long from "long";
import _m0 from "protobufjs/minimal";
import { StateValue } from "./stateValue";
export declare const protobufPackage = "cheqdid.cheqdnode.cheqd.v1";
/** GenesisState defines the cheqd module's genesis state. */
export interface GenesisState {
    $type: "cheqdid.cheqdnode.cheqd.v1.GenesisState";
    didNamespace: string;
    didList: StateValue[];
}
export declare const GenesisState: {
    $type: "cheqdid.cheqdnode.cheqd.v1.GenesisState";
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        didNamespace?: string | undefined;
        didList?: {
            data?: {
                value?: Uint8Array | undefined;
                typeUrl?: string | undefined;
            } | undefined;
            metadata?: {
                created?: string | undefined;
                updated?: string | undefined;
                deactivated?: boolean | undefined;
                versionId?: string | undefined;
                resources?: string[] | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        didNamespace?: string | undefined;
        didList?: ({
            data?: {
                value?: Uint8Array | undefined;
                typeUrl?: string | undefined;
            } | undefined;
            metadata?: {
                created?: string | undefined;
                updated?: string | undefined;
                deactivated?: boolean | undefined;
                versionId?: string | undefined;
                resources?: string[] | undefined;
            } | undefined;
        }[] & ({
            data?: {
                value?: Uint8Array | undefined;
                typeUrl?: string | undefined;
            } | undefined;
            metadata?: {
                created?: string | undefined;
                updated?: string | undefined;
                deactivated?: boolean | undefined;
                versionId?: string | undefined;
                resources?: string[] | undefined;
            } | undefined;
        } & {
            data?: ({
                value?: Uint8Array | undefined;
                typeUrl?: string | undefined;
            } & {
                value?: Uint8Array | undefined;
                typeUrl?: string | undefined;
            } & { [K in Exclude<keyof I["didList"][number]["data"], "$type" | "value" | "typeUrl">]: never; }) | undefined;
            metadata?: ({
                created?: string | undefined;
                updated?: string | undefined;
                deactivated?: boolean | undefined;
                versionId?: string | undefined;
                resources?: string[] | undefined;
            } & {
                created?: string | undefined;
                updated?: string | undefined;
                deactivated?: boolean | undefined;
                versionId?: string | undefined;
                resources?: (string[] & string[] & { [K_1 in Exclude<keyof I["didList"][number]["metadata"]["resources"], "$type" | keyof string[]>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["didList"][number]["metadata"], "$type" | "created" | "updated" | "deactivated" | "versionId" | "resources">]: never; }) | undefined;
        } & { [K_3 in Exclude<keyof I["didList"][number], "$type" | "data" | "metadata">]: never; })[] & { [K_4 in Exclude<keyof I["didList"], "$type" | keyof {
            data?: {
                value?: Uint8Array | undefined;
                typeUrl?: string | undefined;
            } | undefined;
            metadata?: {
                created?: string | undefined;
                updated?: string | undefined;
                deactivated?: boolean | undefined;
                versionId?: string | undefined;
                resources?: string[] | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, "$type" | "didNamespace" | "didList">]: never; }>(object: I): GenesisState;
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