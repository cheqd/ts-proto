import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "cheqd.did.v2";
/** FeeParams defines the parameters for the `did` module fixed fee. */
export interface FeeParams {
    $type: "cheqd.did.v2.FeeParams";
    /** Tx types define the fixed fee each for the `did` module. */
    txTypes: {
        [key: string]: Coin;
    };
    burnFactor: string;
}
export interface FeeParams_TxTypesEntry {
    $type: "cheqd.did.v2.FeeParams.TxTypesEntry";
    key: string;
    value: Coin | undefined;
}
export declare const FeeParams: {
    $type: "cheqd.did.v2.FeeParams";
    encode(message: FeeParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeeParams;
    fromJSON(object: any): FeeParams;
    toJSON(message: FeeParams): unknown;
    fromPartial<I extends {
        txTypes?: {
            [x: string]: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            [x: number]: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } | undefined;
        burnFactor?: string | undefined;
    } & {
        txTypes?: ({
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
            } & { [K in Exclude<keyof I["txTypes"][string], "$type" | "denom" | "amount">]: never; }) | undefined;
            [x: number]: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_1 in Exclude<keyof I["txTypes"][number], "$type" | "denom" | "amount">]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["txTypes"], string | number>]: never; }) | undefined;
        burnFactor?: string | undefined;
    } & { [K_3 in Exclude<keyof I, "$type" | "txTypes" | "burnFactor">]: never; }>(object: I): FeeParams;
};
export declare const FeeParams_TxTypesEntry: {
    $type: "cheqd.did.v2.FeeParams.TxTypesEntry";
    encode(message: FeeParams_TxTypesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeeParams_TxTypesEntry;
    fromJSON(object: any): FeeParams_TxTypesEntry;
    toJSON(message: FeeParams_TxTypesEntry): unknown;
    fromPartial<I extends {
        key?: string | undefined;
        value?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        key?: string | undefined;
        value?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["value"], "$type" | "denom" | "amount">]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "$type" | "key" | "value">]: never; }>(object: I): FeeParams_TxTypesEntry;
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
//# sourceMappingURL=fee.d.ts.map