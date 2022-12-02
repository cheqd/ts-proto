import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
export declare const protobufPackage = "cheqdid.cheqdnode.cheqd.v1";
export interface StateValue {
    $type: "cheqdid.cheqdnode.cheqd.v1.StateValue";
    data: Any | undefined;
    /** optional */
    metadata: Metadata | undefined;
}
/** metadata */
export interface Metadata {
    $type: "cheqdid.cheqdnode.cheqd.v1.Metadata";
    created: string;
    updated: string;
    deactivated: boolean;
    versionId: string;
    resources: string[];
}
export declare const StateValue: {
    $type: "cheqdid.cheqdnode.cheqd.v1.StateValue";
    encode(message: StateValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StateValue;
    fromJSON(object: any): StateValue;
    toJSON(message: StateValue): unknown;
    fromPartial<I extends {
        data?: {
            value?: Uint8Array | undefined;
            typeUrl?: string | undefined;
        } | undefined;
        metadata?: {
            created?: string | undefined;
            resources?: string[] | undefined;
            versionId?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
        } | undefined;
    } & {
        data?: ({
            value?: Uint8Array | undefined;
            typeUrl?: string | undefined;
        } & {
            value?: Uint8Array | undefined;
            typeUrl?: string | undefined;
        } & { [K in Exclude<keyof I["data"], "$type" | "value" | "typeUrl">]: never; }) | undefined;
        metadata?: ({
            created?: string | undefined;
            resources?: string[] | undefined;
            versionId?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
        } & {
            created?: string | undefined;
            resources?: (string[] & string[] & { [K_1 in Exclude<keyof I["metadata"]["resources"], "$type" | keyof string[]>]: never; }) | undefined;
            versionId?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
        } & { [K_2 in Exclude<keyof I["metadata"], "$type" | "created" | "resources" | "versionId" | "updated" | "deactivated">]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, "$type" | "data" | "metadata">]: never; }>(object: I): StateValue;
};
export declare const Metadata: {
    $type: "cheqdid.cheqdnode.cheqd.v1.Metadata";
    encode(message: Metadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Metadata;
    fromJSON(object: any): Metadata;
    toJSON(message: Metadata): unknown;
    fromPartial<I extends {
        created?: string | undefined;
        resources?: string[] | undefined;
        versionId?: string | undefined;
        updated?: string | undefined;
        deactivated?: boolean | undefined;
    } & {
        created?: string | undefined;
        resources?: (string[] & string[] & { [K in Exclude<keyof I["resources"], "$type" | keyof string[]>]: never; }) | undefined;
        versionId?: string | undefined;
        updated?: string | undefined;
        deactivated?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "created" | "resources" | "versionId" | "updated" | "deactivated">]: never; }>(object: I): Metadata;
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
//# sourceMappingURL=stateValue.d.ts.map