import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
/** FeeParams defines the parameters for the `did` module fixed fee. */
export interface FeeParams {
    /** Tx types define the fixed fee each for the `did` module. */
    txTypes: {
        [key: string]: Coin;
    };
    burnFactor: string;
}
export interface FeeParams_TxTypesEntry {
    key: string;
    value: Coin | undefined;
}
export declare const FeeParams: {
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
        } | undefined;
        burnFactor?: string | undefined;
    } & {
        txTypes?: ({
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
            } & { [K in Exclude<keyof I["txTypes"][string], keyof Coin>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["txTypes"], string | number>]: never; }) | undefined;
        burnFactor?: string | undefined;
    } & { [K_2 in Exclude<keyof I, keyof FeeParams>]: never; }>(object: I): FeeParams;
};
export declare const FeeParams_TxTypesEntry: {
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
        } & { [K in Exclude<keyof I["value"], keyof Coin>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof FeeParams_TxTypesEntry>]: never; }>(object: I): FeeParams_TxTypesEntry;
};
//# sourceMappingURL=fee.d.ts.map