import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "cheqd.resource.v2";
/** FeeParams defines the parameters for the `resource` module fixed fee. */
export interface FeeParams {
    /** Media types define the fixed fee each for the `resource` module. */
    mediaTypes: {
        [key: string]: Coin;
    };
    burnFactor: string;
}
export interface FeeParams_MediaTypesEntry {
    key: string;
    value: Coin | undefined;
}
export declare const FeeParams: {
    encode(message: FeeParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeeParams;
    fromJSON(object: any): FeeParams;
    toJSON(message: FeeParams): unknown;
    fromPartial<I extends {
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
            } & { [K in Exclude<keyof I["mediaTypes"][string], keyof Coin>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["mediaTypes"], string | number>]: never; }) | undefined;
        burnFactor?: string | undefined;
    } & { [K_2 in Exclude<keyof I, keyof FeeParams>]: never; }>(object: I): FeeParams;
};
export declare const FeeParams_MediaTypesEntry: {
    encode(message: FeeParams_MediaTypesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeeParams_MediaTypesEntry;
    fromJSON(object: any): FeeParams_MediaTypesEntry;
    toJSON(message: FeeParams_MediaTypesEntry): unknown;
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
        } & { [K in Exclude<keyof I["value"], keyof Coin>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof FeeParams_MediaTypesEntry>]: never; }>(object: I): FeeParams_MediaTypesEntry;
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
//# sourceMappingURL=fee.d.ts.map