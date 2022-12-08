import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
/** FeeParams defines the parameters for the `resource` module fixed fee. */
export interface FeeParams {
    /** Media types define the fixed fee each for the `resource` module. */
    image: Coin | undefined;
    json: Coin | undefined;
    default: Coin | undefined;
    burnFactor: string;
}
export declare const FeeParams: {
    encode(message: FeeParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeeParams;
    fromJSON(object: any): FeeParams;
    toJSON(message: FeeParams): unknown;
    fromPartial<I extends {
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
        } & { [K in Exclude<keyof I["image"], keyof Coin>]: never; }) | undefined;
        json?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_1 in Exclude<keyof I["json"], keyof Coin>]: never; }) | undefined;
        default?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_2 in Exclude<keyof I["default"], keyof Coin>]: never; }) | undefined;
        burnFactor?: string | undefined;
    } & { [K_3 in Exclude<keyof I, keyof FeeParams>]: never; }>(object: I): FeeParams;
};
//# sourceMappingURL=fee.d.ts.map