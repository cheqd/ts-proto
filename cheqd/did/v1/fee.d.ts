import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
/** FeeParams defines the parameters for the `did` module fixed fee. */
export interface FeeParams {
    /** Tx types define the fixed fee each for the `did` module. */
    createDid: Coin | undefined;
    updateDid: Coin | undefined;
    deactivateDid: Coin | undefined;
    burnFactor: string;
}
export declare const FeeParams: {
    encode(message: FeeParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeeParams;
    fromJSON(object: any): FeeParams;
    toJSON(message: FeeParams): unknown;
    fromPartial<I extends {
        createDid?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        updateDid?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        deactivateDid?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        burnFactor?: string | undefined;
    } & {
        createDid?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["createDid"], keyof Coin>]: never; }) | undefined;
        updateDid?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_1 in Exclude<keyof I["updateDid"], keyof Coin>]: never; }) | undefined;
        deactivateDid?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_2 in Exclude<keyof I["deactivateDid"], keyof Coin>]: never; }) | undefined;
        burnFactor?: string | undefined;
    } & { [K_3 in Exclude<keyof I, keyof FeeParams>]: never; }>(object: I): FeeParams;
};
//# sourceMappingURL=fee.d.ts.map